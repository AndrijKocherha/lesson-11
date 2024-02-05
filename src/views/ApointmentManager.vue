<template>
   <div class="apintments-block">
      <apointments-list />
      <add-apointment-block />
   </div>
</template>

<script>
import ApointmentsList from '@/components/ApointmentsList.vue'
import AddApointmentBlock from '@/components/AddApointmentBlock.vue'
export default {
   components: { ApointmentsList, AddApointmentBlock },
   name: 'ApointmentManager',
}
</script>

<style lang="scss" scoped>
.apintments-block {
   display: grid;
   gap: 40px;
}
</style>
