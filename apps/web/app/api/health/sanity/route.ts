import {NextResponse} from 'next/server'
import {client} from '../../../../sanity/lib/client'

export async function GET() {
  const env = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    nodeEnv: process.env.NODE_ENV,
  }

  const byHome = await client.fetch(
    `*[_type=="marketingPage" && slug.current=="home"][0]{title, "slug": slug.current, _id}`
  )

  const list = await client.fetch(
    `*[_type=="marketingPage"][0..20]{_id, title, "slug": slug.current}`
  )

  const bySlash = await client.fetch(
    `*[_type=="marketingPage" && slug.current=="/"][0]{title, "slug": slug.current, _id}`
  )

  return NextResponse.json({ok: true, env, byHome, bySlash, list})
}
