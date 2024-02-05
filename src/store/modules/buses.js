export default {
   namespaced: true,
   state: {
      busesList: [],
   },
   getters: {
      busesList: (state) => state.busesList,
      //це теж для як і в  driver.js
      busesListForSelect: (state, getters, rootState) => {
         let busesId = Object.values(rootState.apointments.apointmentsList)
         return state.busesList.filter((bus) => !busesId.includes(bus.id))
      },
      getBusById:
         ({ busesList }) =>
         (busId) =>
            busesList.find((bus) => bus.id == busId),
   },
   mutations: {
      setBuses(state, busesList) {
         state.busesList = busesList
      },
      deleteBus(state, busId) {
         state.busesList = state.busesList.filter((bus) => bus.id !== busId)
      },
      updateBus(state, busObj) {
         const busIndx = state.busesList.findIndex((bus) => bus.id === busObj.id)
         state.busesList[busIndx] = busObj
      },
      setNewBus(state, newBus) {
         state.busesList.push(newBus)
      },
   },
   actions: {
      setBuses({ commit }, busesList) {
         commit('setBuses', busesList)
      },
      deleteBus({ commit, dispatch }, busId) {
         commit('deleteBus', busId)
         dispatch('apointments/deleteApointmentbyId', busId, { root: true })
      },
      updateBus({ commit }, busObj) {
         commit('updateBus', busObj)
      },
      setNewBus({ commit }, newBus) {
         commit('setNewBus', newBus)
      },
   },
}
