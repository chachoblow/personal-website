import { createRouter, createWebHistory } from 'vue-router'
import TheBeaconView from '@/views/TheBeaconView.vue'
import TheBranchesView from '@/views/TheBranchesView.vue'
import TheCycluxView from '@/views/TheCycluxView.vue'
import TheHomeView from '@/views/TheHomeView.vue'
import TheLineCollectionView from '@/views/TheLineCollectionView.vue'
import TheMediaView from '@/views/TheMediaView.vue'
import TheSatelliteNotifierView from '@/views/TheSatelliteNotifierView.vue'
import TheVirtualFixturesView from '@/views/TheVirtualFixturesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/beacon',
      name: 'beacon',
      component: TheBeaconView,
    },
    {
      path: '/branches',
      name: 'branches',
      component: TheBranchesView,
    },
    {
      path: '/cyclux',
      name: 'cyclux',
      component: TheCycluxView,
    },
    {
      path: '/',
      name: 'home',
      component: TheHomeView,
    },
    {
      path: '/lineCollection',
      name: 'lineCollection',
      component: TheLineCollectionView,
    },
    {
      path: '/media',
      name: 'media',
      component: TheMediaView,
    },
    {
      path: '/satelliteNotifier',
      name: 'satelliteNotifier',
      component: TheSatelliteNotifierView,
    },
    {
      path: '/virtualFixtures',
      name: 'virtualFictures',
      component: TheVirtualFixturesView,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
