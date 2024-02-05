export default {
   namespaced: true,
   state: {
      driversList: [],
      filterObj: {},
   },
   getters: {
      filteredDrivers: ({ driversList, filterObj }) => {
         return driversList.filter((driver) => {
            //let result = true
            const nameCond = !filterObj.name || driver.name.toLowerCase().includes(filterObj.name.toLowerCase())
            const fromCond = !filterObj.experienceFrom || filterObj.experienceFrom <= driver.experience
            const toCond = !filterObj.experienceTo || filterObj.experienceTo >= driver.experience
            let result = fromCond && toCond && nameCond
            return result
         })
      },
      //це я зробив гетер для виводу дрйверів для  slect , для того щоб
      // коли я вибирав нове призначення то список для вибору зменшувався
      // і не можна було сворити 2 однакові пари
      getDriversForSelect: (state, getters, rootState) => {
         return getters.filteredDrivers.filter((driver) =>
            rootState.apointments.apointmentsList[driver.id] ? false : true
         )
      },

      getDriverById:
         ({ driversList }) =>
         (id) =>
            driversList.find((driver) => driver.id == id),
   },
   mutations: {
      setDrivers(state, driversList) {
         state.driversList = driversList
      },
      setFilter(state, filterData) {
         state.filterObj = filterData
      },
      deleteDriver(state, driverId) {
         state.driversList = state.driversList.filter((driver) => driver.id !== driverId)
      },
      updateDriverData(state, newDriverData) {
         let driverIndx = state.driversList.findIndex((driver) => driver.id === newDriverData.id)
         state.driversList[driverIndx] = newDriverData
      },
      setNewDriver(state, newDriver) {
         state.driversList.push(newDriver)
      },
   },
   actions: {
      setDrivers({ commit }, driversList) {
         commit('setDrivers', driversList)
      },
      setFilter({ commit }, filterData) {
         commit('setFilter', filterData)
      },
      deleteDriver({ commit, dispatch }, driverId) {
         commit('deleteDriver', driverId)
         dispatch('apointments/deleteApointment', driverId, { root: true })
      },
      updateDriverData({ commit }, newDriverData) {
         commit('updateDriverData', newDriverData)
      },
      setNewDriver({ commit }, newDriver) {
         commit('setNewDriver', newDriver)
      },
   },
}
