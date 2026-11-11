import type { ImageMetadata } from 'astro'
import type { CollectionEntry } from 'astro:content'

const allImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/projects/**/*')

// Inline images are at most the text column wide (550px); 2x for retina. 800
// suits most phones, whose ~350px-wide images at 2x would otherwise get 1100.
export const INLINE_WIDTH = 550
export const INLINE_WIDTHS = [INLINE_WIDTH, 800, INLINE_WIDTH * 2]
export const SIZES = `(max-width: ${INLINE_WIDTH}px) 100vw, ${INLINE_WIDTH}px`

/** An image in src/assets by the path MDX uses for it, e.g. '/projects/x/a.webp' */
export async function loadImage(src: string) {
  return (await allImages[`/src/assets${src}`]?.())?.default
}

/** The still frame an animated GIF can have beside it, `<name>-still.webp` */
export function stillPath(src: string) {
  return src.replace(/\.gif$/, '-still.webp')
}

/**
 * An image's size, read from Astro's copy: reading any field of the image
 * itself makes Astro ship the (multi-megabyte) original file in the build.
 */
export function imageSize(image: ImageMetadata) {
  const { width, height } = (image as ImageMetadata & { clone: ImageMetadata }).clone
  return { width, height }
}

/**
 * Options for an image shown at text width. Shared by ImageGroup and the
 * homepage's preloading, so both name the same files and a preloaded image is
 * a cache hit on the project page.
 */
export function inlineImage(image: ImageMetadata) {
  return {
    src: image,
    // Also sizes the fallback `src`, which would otherwise be full size
    width: Math.min(imageSize(image).width, INLINE_WIDTH),
    widths: INLINE_WIDTHS,
    sizes: SIZES,
  }
}

/**
 * The image objects in a project's MDX, in page order, e.g.
 * { src: '/projects/x/a.webp', alt: '…' } with its fields in either order.
 * Read from the raw text, so `src` and `alt` must be string literals.
 */
export function projectImages(project: CollectionEntry<'projects'>) {
  return [...(project.body ?? '').matchAll(/\{[^{}]*\bsrc:[^{}]*\}/g)].map(([image]) => ({
    src: image.match(/\bsrc:\s*(['"])(.*?)\1/)?.[2],
    alt: image.match(/\balt:\s*(['"])(.*?)\1/)?.[2],
  }))
}
