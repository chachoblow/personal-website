import type { CollectionEntry } from 'astro:content'
import { loadImage, projectImages, stillPath } from './images'

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

  const { src, alt } = projectImages(project)[0] ?? {}
  if (!src) fail('has no image (expected an ImageGroup with { src, alt } in its MDX)')
  if (!alt) fail(`has no alt text for its first image, ${src}`)

  const image = (await loadImage(stillPath(src!))) ?? (await loadImage(src!))
  if (!image) fail(`has a first image that doesn't exist: /src/assets${src}`)
  return { image: image!, alt: alt! }
}
