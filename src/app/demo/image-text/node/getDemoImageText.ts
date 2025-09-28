import { ImageTextModuleProps } from '@/components/organisms/image-text'

export async function getDemoImageText(): Promise<{ imageTextItems: Array<ImageTextModuleProps> }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/demo/image-text/data`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`)
  }

  return res.json()
}
