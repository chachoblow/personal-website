import type { ProjectDoc } from '../types'
import image01 from '@/assets/projects/branches/branches-page1.webp'
import image02 from '@/assets/projects/branches/branches-page2.webp'
import image03 from '@/assets/projects/branches/branches-page3.webp'
import image04 from '@/assets/projects/branches/branches-page4.webp'
import image05 from '@/assets/projects/branches/branches-page5.webp'
import image06 from '@/assets/projects/branches/branches-page6.webp'
import image07 from '@/assets/projects/branches/branches-page7.webp'

const doc: ProjectDoc = {
  slug: 'branches',
  title: 'Branches',
  blocks: [
    {
      type: 'crumbs',
      segments: [
        { label: 'Home', to: '/' },
        { label: 'Branches', to: '/branches' },
      ],
    },

    {
      type: 'text',
      class: 'info-padding-bottom',
      content:
        'Branches is a small-form comic about living with anxiety and hardships that follow you everywhere. It is a story about learning to accept and live with these hardships, rather than trying to run away from them.',
    },

    { type: 'image', src: image01, alt: 'First spread of Branches' },
    { type: 'image', src: image02, alt: 'Second spread of Branches' },
    { type: 'image', src: image03, alt: 'Third spread of Branches' },
    { type: 'image', src: image04, alt: 'Fourth spread of Branches' },
    { type: 'image', src: image05, alt: 'Fifth spread of Branches' },
    { type: 'image', src: image06, alt: 'Sixth spread of Branches' },
    { type: 'image', src: image07, alt: 'Seventh spread of Branches' },
  ],
}

export default doc
