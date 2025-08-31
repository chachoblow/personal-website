import type { ProjectDoc } from '../types'
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

const doc: ProjectDoc = {
  slug: 'beacon',
  title: 'Beacon',
  blocks: [
    {
      type: 'crumbs',
      segments: [
        { label: 'Home', to: '/' },
        { label: 'Beacon', to: '/beacon' },
      ],
    },
    {
      type: 'text',
      class: 'info-padding-bottom',
      content:
        'Beacon reimagines how we maintain connections with distant loved ones through ambient presence. Unlike traditional communication that demands attention, Beacon operates primarily as an elegant lamp in your space—until someone reaches out.',
    },
    {
      type: 'image',
      src: beaconAnimation,
      alt: 'Animation of Beacon with different light colors',
    },

    {
      type: 'text',
      class: 'info-padding-top',
      content:
        'When a family member or friend presses their Beacon device, it instantly transmits a signal to all connected Beacons. Your device responds by gently pulsing with the sender\'s unique color signature—a visual "I\'m thinking of you" that requires no words. Responding is equally effortless: a simple press of your Beacon sends your color to all connected devices, acknowledging their presence with "I see you too."',
    },
    {
      type: 'text',
      class: 'info-padding-bottom',
      content:
        'This intentionally minimalist interaction creates meaningful connection without the burden of conversation, perfect for maintaining ambient awareness of loved ones across any distance.',
    },
    { type: 'image', src: image01, alt: 'Front view of Beacon' },
    { type: 'image', src: image02, alt: 'Front/top view of Beacon' },
    { type: 'image', src: image03, alt: 'Front/side view of Beacon' },
    { type: 'image', src: image04, alt: 'Back view of Beacon' },
    { type: 'image', src: image05, alt: 'Back view of Beacon with back off' },
    {
      type: 'image',
      src: image06,
      alt: 'Back/side view of Beacon with back off',
    },
    { type: 'image', src: image07, alt: 'Side view of Beacon with back off' },

    {
      type: 'text',
      class: 'info-padding-top',
      content:
        'The physical Beacon embodies thoughtful design that balances aesthetics with functionality:',
    },
    {
      type: 'list',
      class: 'info-padding-bottom',
      items: [
        'Custom 3D-printed internal enclosure for ESP-32, LED matrix, and controls',
        'Precision-cut acrylic and birch create a warm diffusion of light',
        'A potentiometer adjusts brightness for the environment',
        'A single-button interface keeps the interaction effortless',
      ],
    },
    { type: 'image', src: image08, alt: 'Front view of Beacon disassembled' },
    {
      type: 'image',
      src: image09,
      alt: 'Front/side view of Beacon disassembled',
    },
    { type: 'image', src: image10, alt: 'Front view of Beacon light unit' },
    {
      type: 'image',
      src: image11,
      alt: 'Front/side view of Beacon light unit',
    },
    { type: 'image', src: image12, alt: 'Side view of Beacon light unit' },

    {
      type: 'text',
      class: 'info-padding-top',
      content:
        "Each Beacon is powered by an ESP-32 microcontroller interfaced with an LED matrix using AdaFruit's comprehensive libraries. The devices communicate through AWS IoT Core's MQTT service, employing a publish-subscribe model:",
    },
    {
      type: 'list',
      class: 'info-padding-bottom',
      items: [
        'On press, a Beacon publishes its id and color signature',
        'All devices subscribe and respond in real time',
        'Architecture is reliable at any distance',
      ],
    },
    { type: 'image', src: image13, alt: 'Back/side view of Beacon light unit' },
    {
      type: 'image',
      src: image14,
      alt: 'Back/side view of Beacon light unit disassembled',
    },
    { type: 'image', src: image15, alt: 'Back/side view of Beacon housing' },
    { type: 'image', src: image16, alt: 'Back/side view of Beacon housing' },
  ],
}

export default doc
