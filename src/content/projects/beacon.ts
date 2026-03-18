import { type ProjectDoc, BlockType } from '../types'
import beaconAnimation from '@/assets/projects/beacon/beacon-animation.gif'
import image01 from '@/assets/projects/beacon/beacon-01.png'
import image02 from '@/assets/projects/beacon/beacon-02.png'
import image03 from '@/assets/projects/beacon/beacon-03.png'
import image04 from '@/assets/projects/beacon/beacon-04.png'
import image05 from '@/assets/projects/beacon/beacon-05.png'
import image06 from '@/assets/projects/beacon/beacon-06.png'
import image07 from '@/assets/projects/beacon/beacon-07.png'
import image08 from '@/assets/projects/beacon/beacon-08.png'
import image09 from '@/assets/projects/beacon/beacon-09.png'
import image10 from '@/assets/projects/beacon/beacon-10.png'
import image11 from '@/assets/projects/beacon/beacon-11.png'
import image12 from '@/assets/projects/beacon/beacon-12.png'
import image13 from '@/assets/projects/beacon/beacon-13.png'
import image14 from '@/assets/projects/beacon/beacon-14.png'
import image15 from '@/assets/projects/beacon/beacon-15.png'
import image16 from '@/assets/projects/beacon/beacon-16.png'
import { DisciplineType } from '../disciplines'

const doc: ProjectDoc = {
  slug: 'beacon',
  title: 'Beacon',
  summary: 'An ambient lamp for distant presence',
  disciplineTypes: [
    DisciplineType.Software,
    DisciplineType.Object,
    DisciplineType.Sound,
  ],
  blocks: [
    {
      type: BlockType.Text,
      text: 'Beacon reimagines how we maintain connections with distant loved ones through ambient presence. Unlike traditional communication that demands attention, Beacon operates primarily as an elegant lamp in your space—until someone reaches out.',
    },
    {
      type: BlockType.ImageGroup,
      images: [
        {
          src: beaconAnimation,
          alt: 'Animation of Beacon with different light colors',
        },
        { src: image01, alt: 'Front view of Beacon' },
        {
          src: image02,
          alt: 'Front/top view of Beacon',
        },
        {
          src: image03,
          alt: 'Front/side view of Beacon',
        },
      ],
    },
    {
      type: BlockType.Text,
      text: 'When a family member or friend presses their Beacon device, it instantly transmits a signal to all connected Beacons. Your device responds by gently pulsing with the sender\'s unique color signature—a visual "I\'m thinking of you" that requires no words. Responding is equally effortless: a simple press of your Beacon sends your color to all connected devices, acknowledging their presence with "I see you too."',
    },
    {
      type: BlockType.ImageGroup,
      images: [
        { src: image04, alt: 'Back view of Beacon' },
        {
          src: image05,
          alt: 'Back view of Beacon with back off',
        },
        {
          src: image06,
          alt: 'Back/side view of Beacon with back off',
        },
        {
          src: image07,
          alt: 'Side view of Beacon with back off',
        },

        {
          src: image08,
          alt: 'Front view of Beacon disassembled',
        },
      ],
    },
    {
      type: BlockType.Text,
      text: 'This intentionally minimalist interaction creates meaningful connection without the burden of conversation, perfect for maintaining ambient awareness of loved ones across any distance.',
    },
    {
      type: BlockType.ImageGroup,
      images: [
        {
          src: image09,
          alt: 'Front/side view of Beacon disassembled',
        },
        {
          src: image10,
          alt: 'Front view of Beacon light unit',
        },
        {
          src: image11,
          alt: 'Front/side view of Beacon light unit',
        },
      ],
    },
    {
      type: BlockType.Text,
      text: 'The physical Beacon embodies thoughtful design that balances aesthetics with functionality, with bullet points covering the ESP-32, acrylic and birch enclosure, potentiometer, and single-button interface.',
    },
    {
      type: BlockType.List,
      items: [
        'ESP-32 microcontroller for Wi-Fi connectivity and control',
        'Laser-cut acrylic and birch enclosure for a sleek, modern look',
        'Potentiometer for adjustable brightness control',
        'Single-button interface for effortless interaction',
      ],
    },
    {
      type: BlockType.ImageGroup,
      images: [
        {
          src: image12,
          alt: 'Side view of Beacon light unit',
        },
        {
          src: image13,
          alt: 'Back/side view of Beacon light unit',
        },
        {
          src: image14,
          alt: 'Back/side view of Beacon light unit disassembled',
        },
        {
          src: image15,
          alt: 'Back/side view of Beacon housing',
        },
        {
          src: image16,
          alt: 'Back/side view of Beacon housing',
        },
      ],
    },
  ],
}

export default doc
