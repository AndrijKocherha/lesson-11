import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/drivers',
      name: 'drivers',
      component: () => import('../views/DriversVue'),
   },
   {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsVue'),
   },
   {
      path: '/buses',
      name: 'buses',
      component: () => import('../views/BusesVue'),
   },
   {
      path: '/bus-editor/:busId?',
      name: 'bus-editor',
      component: () => import('../components/BusEditor'),
   },
   {
      path: '/driver-editor/:driverId?',
      name: 'driver-editor',
      component: () => import('../components/DriverEditor'),
   },
   {
      path: '/apointment',
      name: 'apointment',
      component: () => import('../views/ApointmentManager'),
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

export default router
