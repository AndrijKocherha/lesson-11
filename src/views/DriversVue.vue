<template>
   <div class="drivers list">
      <div class="drivers-filter">
         <label class="drivers-filter__item"> Піб <input v-model="filterObj.name" type="text" /></label>
         <div class="drivers-filter__exp">
            <div>Стаж:</div>
            <label class="drivers-filter__item">від <input v-model="filterObj.experienceFrom" type="number" /></label>
            <label class="drivers-filter__item">до <input v-model="filterObj.experienceTo" type="number" /></label>
         </div>
      </div>
      <div class="list__titles">
         <div class="list__title">Піб</div>
         <div class="list__title">Стаж</div>
      </div>
      <div v-for="driver in filteredDrivers" class="list__item" :key="driver.id">
         <div>
            <div>{{ driver.name }}</div>
         </div>
         <div>
            <div>{{ driver.experience }}</div>
         </div>
         <div class="list__actions">
            <!--<button>edit</button>-->
            <router-link :to="{ name: 'driver-editor', params: { driverId: driver.id } }" class="button"
               >edit</router-link
            >
            <button @click="deleteDriver(driver.id)" class="button">delete</button>
         </div>
      </div>
      <router-link :to="{ name: 'driver-editor' }" class="button">Додати водія</router-link>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'DriversVue',
   data() {
      return {
         filterObj: {},
      }
   },
   watch: {
      filterObj: {
         handler(newVal) {
            sessionStorage.setItem('filterObj', JSON.stringify(newVal))
            this.setFilter(newVal)
         },
         deep: true,
      },
   },
   computed: {
      ...mapGetters('drivers', ['filteredDrivers']),
   },
   created() {
      if (!sessionStorage.getItem('filterObj')) {
         sessionStorage.setItem('filterObj', JSON.stringify({}))
      }
      this.filterObj = JSON.parse(sessionStorage.getItem('filterObj'))
   },
   methods: {
      ...mapActions('drivers', ['setFilter', 'deleteDriver']),
   },
}
</script>

<style lang="scss" scoped>
.drivers-filter {
   display: flex;
   gap: 20px;
   // .drivers-filter__item
   &__item {
      display: flex;
   }
   // .drivers-filter__exp
   &__exp {
      display: flex;
      gap: 5px;
   }
}
</style>
