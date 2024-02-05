export default {
   namespaced: true,

   state: {
      apointmentsList: {
         1: 2,
      },
   },
   getters: {
      getDriverById: (state, getters, rootState) => (driverId) => {
         return rootState.drivers.driversList.find((driver) => driver.id == driverId)
      },
      getBusById: (state, getters, rootState) => (busId) => {
         return rootState.buses.busesList.find((bus) => bus.id == busId)
      },
      getApointmentsList: ({ apointmentsList }) => apointmentsList,
   },
   mutations: {
      deleteApointment(state, driverId) {
         delete state.apointmentsList[driverId]
      },
      addNewApointment(state, { selctedDriverId, selectedBusId }) {
         if (selctedDriverId && selectedBusId) state.apointmentsList[selctedDriverId] = selectedBusId
      },
      deleteApointmentbyId(state, busId) {
         for (const driverId in state.apointmentsList) {
            if (state.apointmentsList[driverId] == busId) delete state.apointmentsList[driverId]
         }
      },
   },
   actions: {
      deleteApointment({ commit }, driverId) {
         commit('deleteApointment', driverId)
      },
      addNewApointment({ commit }, { selctedDriverId, selectedBusId }) {
         commit('addNewApointment', { selctedDriverId, selectedBusId })
      },
      deleteApointmentbyId({ commit }, busId) {
         commit('deleteApointmentbyId', busId)
      },
   },
}
