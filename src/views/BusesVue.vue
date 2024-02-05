<template>
   <div>
      <div class="list">
         <div class="list__titles">
            <div class="list__title">Номер</div>
            <div class="list__title">Кільксть місць</div>
         </div>
         <div v-for="bus in busesList" class="list__item" :key="bus.id">
            <div>
               <div>{{ bus.licensePlate }}</div>
            </div>
            <div>
               <div>{{ bus.seatsNumber }}</div>
            </div>
            <div class="list__actions">
               <router-link :to="{ name: 'bus-editor', params: { busId: bus.id } }" class="button">edit</router-link>
               <button @click="deleteBus(bus.id)" class="button">delete</button>
            </div>
         </div>
         <router-link :to="{ name: 'bus-editor' }" class="button">Додати автобус</router-link>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   naem: 'BusesVue',
   computed: {
      ...mapGetters('buses', ['busesList']),
   },
   methods: {
      ...mapActions('buses', ['deleteBus']),
   },
}
</script>

<style lang="scss" scoped></style>
