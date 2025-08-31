import type { ProjectDoc } from '../types'
import image01 from '@/assets/projects/cyclux/cyclux-spread1.webp'
import image02 from '@/assets/projects/cyclux/cyclux-spread2.webp'
import image03 from '@/assets/projects/cyclux/cyclux-spread3.webp'
import image04 from '@/assets/projects/cyclux/cyclux-spread4.webp'
import image05 from '@/assets/projects/cyclux/cyclux-spread5.webp'
import image06 from '@/assets/projects/cyclux/cyclux-spread6.webp'

const doc: ProjectDoc = {
  slug: 'cyclux',
  title: 'Cyclux',
  blocks: [
    {
      type: 'crumbs',
      segments: [
        { label: 'Home', to: '/' },
        { label: 'Cyclux', to: '/cyclux' },
      ],
    },

    {
      type: 'text',
      class: 'info-padding-bottom',
      content:
        'Cyclux is a small-form comic about finding the light in dark times. It is a story about hope and resilience in the face of adversity. It explores themes of mental health, self-discovery, and the power of human connection.',
    },

    { type: 'image', src: image01, alt: 'First spread of Cyclux' },
    { type: 'image', src: image02, alt: 'Second spread of Cyclux' },
    { type: 'image', src: image03, alt: 'Third spread of Cyclux' },
    { type: 'image', src: image04, alt: 'Fourth spread of Cyclux' },
    { type: 'image', src: image05, alt: 'Fifth spread of Cyclux' },
    { type: 'image', src: image06, alt: 'Sixth spread of Cyclux' },
  ],
}

export default doc
