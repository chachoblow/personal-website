import { defineStore } from 'pinia'
import { type ProjectCategory } from '@/models/ProjectCategory'
import testImage from '@/assets/Beacon/CloudyBeach-03.png'
import testImage2 from '@/assets/Beacon/CloudyBeach-04.png'
import testImage3 from '@/assets/Beacon/CloudyBeach-05.png'
import testImage4 from '@/assets/Beacon/CloudyBeach-06.png'
import testImage5 from '@/assets/Beacon/CloudyBeach-07.png'
import testImage6 from '@/assets/Beacon/CloudyBeach-08.png'
import testImage7 from '@/assets/Beacon/CloudyBeach-09.png'
import testImage8 from '@/assets/Beacon/CloudyBeach-10.png'
import testImage9 from '@/assets/Beacon/CloudyBeach-11.png'
import testImage10 from '@/assets/Beacon/CloudyBeach-12.png'
import iconCircleWhite from '@/assets/iconCircleWhite.png'
import iconCircleBlack from '@/assets/iconCircleBlack.png'
import iconSquareWhite from '@/assets/iconSquareWhite.png'
import iconSquareBlack from '@/assets/iconSquareBlack.png'
import iconPaperWhite from '@/assets/iconPaperWhite.png'
import iconPaperBlack from '@/assets/iconPaperBlack.png'
import iconPencilWhite from '@/assets/iconPencilWhite.png'
import iconPencilBlack from '@/assets/iconPencilBlack.png'

export const useProjectStore = defineStore('projects', () => {
  const categories: ProjectCategory[] = [
    {
      name: 'Objects',
      iconLight: iconCircleWhite,
      iconDark: iconCircleBlack,
      items: [
        {
          name: 'Beacon',
          route: '/beacon',
          menuImage: testImage,
          images: [testImage, testImage2, testImage3, testImage4],
        },
        {
          name: 'Satellite Notifier',
          route: '/satellitenotifier',
          menuImage: testImage2,
          images: [testImage, testImage2, testImage3, testImage4],
        },
        {
          name: 'Branches',
          route: '/branches',
          menuImage: testImage3,
          images: [testImage, testImage2, testImage3, testImage4],
        },
      ],
    },
    {
      name: 'Paper',
      iconLight: iconPaperWhite,
      iconDark: iconPaperBlack,
      items: [
        {
          name: 'Journey South',
          route: '/journeysouth',
          menuImage: testImage4,
          images: [testImage, testImage2, testImage3, testImage4],
        },
        {
          name: 'V',
          route: '/v',
          menuImage: testImage5,
          images: [testImage, testImage2, testImage3, testImage4],
        },
        {
          name: 'Home Again',
          route: '/homeagain',
          menuImage: testImage6,
          images: [testImage, testImage2, testImage3, testImage4],
        },
        {
          name: 'Cyclux',
          route: '/cyclux',
          menuImage: testImage7,
          images: [testImage, testImage2, testImage3, testImage4],
        },
      ],
    },
    {
      name: 'Photography',
      iconLight: iconSquareWhite,
      iconDark: iconSquareBlack,
      items: [
        {
          name: 'Port Townsend',
          route: '/porttownsend',
          menuImage: testImage8,
          images: [testImage, testImage2, testImage3, testImage4],
        },
        {
          name: 'All',
          route: '/photographyall',
          menuImage: testImage9,
          images: [testImage, testImage2, testImage3, testImage4],
        },
      ],
    },
    {
      name: 'Art',
      iconLight: iconPencilWhite,
      iconDark: iconPencilBlack,
      items: [
        {
          name: 'All',
          route: '/artall',
          menuImage: testImage10,
          images: [testImage, testImage2, testImage3, testImage4],
        },
      ],
    },
  ]

  return { categories }
})
