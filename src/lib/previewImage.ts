import type { ImageMetadata } from 'astro'

const allImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/projects/**/*')

/**
 * The link-preview image for a project: the first image in its MDX body (for
 * an animated GIF, its still frame if there is one), with that image's alt text.
 */
export async function previewImage(body: string | undefined) {
  const match = body?.match(/src:\s*(['"])(.*?)\1\s*,\s*alt:\s*(['"])(.*?)\3/)
  if (!match) return undefined
  const key = `/src/assets${match[2]}`
  const loader = allImages[key.replace(/\.gif$/, '-still.webp')] ?? allImages[key]
  if (!loader) return undefined
  return { image: (await loader()).default, alt: match[4] }
}
