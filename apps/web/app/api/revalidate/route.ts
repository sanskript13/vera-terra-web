import { NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(req: Request) {
  const url = new URL(req.url)
  const secret = req.headers.get('x-revalidate-secret') || url.searchParams.get('secret')

  const expected = process.env.SANITY_REVALIDATE_SECRET
  if (!expected) {
    return NextResponse.json({ ok: false, error: 'Missing SANITY_REVALIDATE_SECRET' }, { status: 500 })
  }

  if (secret !== expected) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  // Tag no longer needed for hardcoded content
  // revalidateTag('marketingPage')
  revalidatePath('/')

  return NextResponse.json({ ok: true })
}
