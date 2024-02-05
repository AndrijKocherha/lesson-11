import { createStore } from 'vuex'
import { busesList, driversList } from '../data/driversAndBuses'
import buses from './modules/buses'
import drivers from './modules/drivers'
import apointments from './modules/apointments'
export default createStore({
   state: {},
   getters: {},
   mutations: {
      //setData(state, { busesList, driversList }) {
      //},
   },
   actions: {
      setData({ dispatch }) {
         //commit('setData', { busesList, driversList })
         //=========
         dispatch('buses/setBuses', busesList, { root: true })
         dispatch('drivers/setDrivers', driversList, { root: true })
      },
   },
   modules: {
      drivers,
      buses,
      apointments,
   },
})
