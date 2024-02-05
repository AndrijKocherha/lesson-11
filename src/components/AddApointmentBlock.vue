<template>
   <div>
      <div class="title">Нові призначення</div>
      <div>
         <div>
            <div>Шофер :</div>
            <select v-model="selctedDriverId">
               <option v-for="driver in getDriversForSelect" :value="driver.id" :key="driver">{{ driver.name }}</option>
            </select>
         </div>
         <div>
            <div>Автобус :</div>
            <select v-model="selectedBusId">
               <option v-for="bus in busesListForSelect" :value="bus.id" :key="bus.is">{{ bus.licensePlate }}</option>
            </select>
         </div>
      </div>
      <button @click="onAdd({ selctedDriverId, selectedBusId })">Додати новий</button>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'AddApointmentBlock',
   data() {
      return {
         selctedDriverId: null,
         selectedBusId: null,
      }
   },
   computed: {
      ...mapGetters({
         getDriversForSelect: 'drivers/getDriversForSelect',
         busesListForSelect: 'buses/busesListForSelect',
      }),
   },
   methods: {
      ...mapActions('apointments', ['addNewApointment']),
      onAdd({ selctedDriverId, selectedBusId }) {
         this.addNewApointment({ selctedDriverId, selectedBusId })
         this.selctedDriverId = null
         this.selectedBusId = null
      },
   },
}
</script>

<style lang="scss" scoped>
.title {
   font-size: 20px;
   &:not(:last-child) {
      margin-bottom: 20px;
   }
}
</style>
