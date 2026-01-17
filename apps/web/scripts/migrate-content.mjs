#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

// Load mapping
const mappingPath = path.join(__dirname, 'migrate-map.json')
const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))

console.log('🚀 Content Migration Started\n')

let migratedCount = 0
let errorCount = 0

for (const page of mapping.pages) {
    const { slug, artifact, title } = page
    const artifactPath = path.join(rootDir, 'content/artifacts', artifact)
    const outputPath = path.join(rootDir, 'content/pages', `${slug}.ts`)

    try {
        // Read artifact
        if (!fs.existsSync(artifactPath)) {
            console.log(`❌ Missing artifact: ${artifact}`)
            errorCount++
            continue
        }

        const content = fs.readFileSync(artifactPath, 'utf-8')

        // Parse sections
        const sections = parseMarkdown(content, title)

        // Generate TypeScript
        const tsContent = generateTypeScript(slug, title, sections)

        // Write output
        fs.writeFileSync(outputPath, tsContent, 'utf-8')

        console.log(`✅ Migrated: ${slug} (${sections.length} sections)`)
        migratedCount++
    } catch (error) {
        console.log(`❌ Error migrating ${slug}:`, error.message)
        errorCount++
    }
}

console.log(`\n📊 Migration Summary:`)
console.log(`   Migrated: ${migratedCount}`)
console.log(`   Errors: ${errorCount}`)

if (errorCount === 0) {
    console.log('\n✅ All pages migrated successfully!')
} else {
    process.exit(1)
}

// Parse markdown into sections
function parseMarkdown(markdown, pageTitle) {
    const lines = markdown.split('\n')
    const sections = []
    let currentSection = null
    let heroSubline = ''

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()

        // Extract hero subline (from Subline section)
        if (line === '### Subline' && i + 2 < lines.length) {
            heroSubline = lines[i + 2].trim()
            continue
        }

        // Skip metadata and hero sections
        if (line.startsWith('#') && (line.includes('Hero') || line.includes('---') || line === '')) {
            continue
        }

        // Section header (## heading)
        if (line.startsWith('## ')) {
            if (currentSection) {
                sections.push(currentSection)
            }

            const heading = line.replace(/^##\s+/, '').replace(/^\d+\.\s+/, '')
            currentSection = {
                type: 'text',
                heading: heading,
                content: []
            }
            continue
        }

        // Section subheading (### H2)
        if (line.startsWith('### H2') && i + 2 < lines.length) {
            const heading = lines[i + 2].trim()
            if (currentSection) {
                sections.push(currentSection)
            }
            currentSection = {
                type: 'text',
                heading: heading,
                content: []
            }
            i += 2
            continue
        }

        // Check if CTA section
        if (currentSection && (currentSection.heading.includes('CTA') || currentSection.heading.includes('Kapanış'))) {
            currentSection.type = 'cta'
        }

        // Content paragraphs
        if (currentSection && line && !line.startsWith('#') && !line.startsWith('**✓')) {
            if (line.startsWith('- ')) {
                // List item
                currentSection.content.push(line.replace(/^-\s+/, ''))
            } else if (!line.startsWith('###')) {
                currentSection.content.push(line)
            }
        }
    }

    if (currentSection) {
        sections.push(currentSection)
    }

    // Add hero at beginning
    sections.unshift({
        type: 'hero',
        heading: pageTitle,
        subline: heroSubline
    })

    return sections
}

// Generate TypeScript content
function generateTypeScript(slug, title, sections) {
    const hero = sections.find(s => s.type === 'hero')
    const contentSections = sections.filter(s => s.type !== 'hero')

    const sectionCode = contentSections.map(section => {
        if (section.type === 'cta') {
            const lead = section.content.join(' ').replace(/'/g, "\\'")
            return `    {
      type: 'cta',
      heading: '${section.heading.replace(/'/g, "\\'")}',
      lead: '${lead}',
      primaryCta: { label: 'Tanışalım', href: '/iletisim' }
    }`
        } else {
            const content = section.content.join('\\n\\n').replace(/'/g, "\\'")
            return `    {
      type: 'text',
      heading: '${section.heading.replace(/'/g, "\\'")}',
      content: '${content}'
    }`
        }
    }).join(',\n')

    return `import { PageContent, PageMetadata } from '../types'

export const metadata: PageMetadata = {
  title: '${title} | Vera Terra',
  description: '',
  keywords: []
}

export const pageContent: PageContent = {
  hero: {
    headline: '${hero.heading.replace(/'/g, "\\'")}',
    subline: '${hero.subline.replace(/'/g, "\\'")}',
    primaryCta: { label: 'Tanışalım', href: '/iletisim' }
  },
  sections: [
${sectionCode}
  ]
}
`
}
