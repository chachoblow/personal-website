import type { ImageMetadata } from 'astro'
import type { CollectionEntry } from 'astro:content'

const allImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/projects/**/*')

/**
 * The link-preview image for a project: the first image in its MDX body (for
 * an animated GIF, its still frame if there is one), with that image's alt text.
 * Fails the build if there isn't one, rather than quietly leaving the page
 * without a preview.
 */
export async function previewImage(project: CollectionEntry<'projects'>) {
  const fail = (reason: string) => {
    throw new Error(`previewImage: project "${project.id}" ${reason}`)
  }

  // The first image object, e.g. { src: '/projects/x/a.webp', alt: '…' },
  // with its fields in either order
  const image = project.body?.match(/\{[^{}]*\bsrc:[^{}]*\}/)?.[0]
  const src = image?.match(/\bsrc:\s*(['"])(.*?)\1/)?.[2]
  const alt = image?.match(/\balt:\s*(['"])(.*?)\1/)?.[2]
  if (!src) fail('has no image (expected an ImageGroup with { src, alt } in its MDX)')
  if (!alt) fail(`has no alt text for its first image, ${src}`)

  const key = `/src/assets${src}`
  const loader = allImages[key.replace(/\.gif$/, '-still.webp')] ?? allImages[key]
  if (!loader) fail(`has a first image that doesn't exist: ${key}`)
  return { image: (await loader!()).default, alt: alt! }
}
