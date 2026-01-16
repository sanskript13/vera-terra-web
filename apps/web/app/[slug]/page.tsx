import {getAllPageSlugs, getPageBySlug} from '@/lib/sanity.fetch'
import {SectionRenderer} from '@/components/sections/SectionRenderer'
import {notFound} from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs()
  return (slugs || [])
    .map((s) => s.slug)
    .filter((s) => s && s !== 'home')
    .map((slug) => ({slug}))
}

export default async function Page({params}: {params: {slug: string}}) {
  const page = await getPageBySlug(params.slug)
  if (!page) return notFound()

  return <SectionRenderer sections={page.sections || []} />
}
