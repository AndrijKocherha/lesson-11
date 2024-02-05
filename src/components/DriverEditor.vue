<template>
   <div>
      <label>Піб <input v-model="driver.name" type="text" /></label>
      <label>Стаж <input v-model="driver.experience" type="number" /></label>
   </div>
   <button @click="buttonAction">{{ buttonTitle }}</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'DriverEditor',
   data() {
      return {
         driver: {},
      }
   },
   computed: {
      ...mapGetters('drivers', ['getDriverById']),
      getDriverId() {
         return this.$route.params.driverId
      },
      buttonTitle() {
         return this.getDriverId ? 'Зберегти' : 'Створити'
      },
   },
   created() {
      if (this.getDriverId) this.driver = { ...this.getDriverById(this.getDriverId) }
   },
   methods: {
      ...mapActions('drivers', ['setNewDriver', 'updateDriverData']),
      buttonAction() {
         if (this.checkDriverData()) {
            if (this.getDriverId) this.updateDriverData(this.driver)
            else {
               this.setNewDriver({ ...this.driver, id: new Date().getTime() })
            }

            this.$router.push({ name: 'drivers' })
         }
      },
      checkDriverData() {
         return this.driver.name && this.driver.experience
      },
   },
}
</script>

<style lang="scss" scoped></style>
