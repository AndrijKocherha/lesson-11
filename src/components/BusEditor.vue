<template>
   <div>
      <label> Номер Автобуса <input v-model="bus.licensePlate" type="text" /></label>
      <label> Кількість місць <input v-model="bus.seatsNumber" type="number" /></label>
   </div>
   <button @click="buttonAction">{{ buttonTitle }}</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'BusEditor',
   data() {
      return {
         bus: {},
      }
   },
   computed: {
      ...mapGetters('buses', ['getBusById']),
      getBusId() {
         return this.$route.params.busId
      },
      buttonTitle() {
         return this.getBusId ? 'Зберегти' : 'Створити'
      },
   },
   created() {
      if (this.getBusId) this.bus = { ...this.getBusById(this.getBusId) }
   },
   methods: {
      ...mapActions('buses', ['updateBus', 'setNewBus']),
      buttonAction() {
         if (this.checkBusData()) {
            if (this.getBusId) this.updateBus(this.bus)
            else this.setNewBus({ ...this.bus, id: new Date().getTime() })

            this.$router.push({ name: 'buses' })
         }
      },
      checkBusData() {
         return this.bus.licensePlate && this.bus.seatsNumber
      },
   },
}
</script>

<style lang="scss" scoped></style>
