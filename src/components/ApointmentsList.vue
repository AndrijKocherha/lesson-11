<template>
   <div class="apointments-list">
      <div class="titles">
         <div>Шофер</div>
         <div>Номер Автобуса</div>
      </div>
      <div v-for="(busId, driverId) in getApointmentsList" :key="busId">
         <div class="apointment">
            <div>{{ getDriverById(driverId).name }}</div>
            <div>{{ getBusById(busId).licensePlate }}</div>
            <button @click="deleteApointment(driverId)">Видалити</button>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'ApointmentsList',

   computed: {
      ...mapGetters('apointments', ['getApointmentsList', 'getDriverById', 'getBusById']),
   },
   methods: {
      ...mapActions('apointments', ['deleteApointment']),
   },
}
</script>

<style lang="scss" scoped>
.apointment {
   display: flex;
   align-items: center;
   gap: 40px;
   &:not(:last-child) {
      margin-bottom: 20px;
   }
}
.titles {
   display: flex;
   gap: 40px;
   margin-bottom: 20px;
   font-size: 20px;
}
</style>
