import {getPageBySlug} from '@/lib/sanity.fetch'
import {SectionRenderer} from '@/components/sections/SectionRenderer'
import {notFound} from 'next/navigation'

export const revalidate = 60

export default async function HomePage() {
  const page = await getPageBySlug('home')
  if (!page) return notFound()

  return <SectionRenderer sections={page.sections || []} />
}
