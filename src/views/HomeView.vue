<template>
   <h1 class="home">Вітаємо вас на сторінці автопарку</h1>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name: 'HomeView',
   components: {},
   methods: {
      ...mapActions(['setData']),
   },
   created() {
      this.setData()
   },
}
</script>
