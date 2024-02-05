<template>
   <nav>
      <router-link to="/">Головна</router-link> | <router-link :to="{ name: 'drivers' }">Водії</router-link> |
      <router-link :to="{ name: 'buses' }">Автобуси</router-link> |
      <router-link :to="{ name: 'apointment' }">Призначення</router-link> |
      <router-link :to="{ name: 'contacts' }">Контакти</router-link>
   </nav>
   <router-view />
</template>

<script>
import { mapActions } from 'vuex'
export default {
   methods: {
      ...mapActions(['setData']),
   },
   created() {
      this.setData()
   },
}
</script>
<style lang="scss">
.button {
   text-decoration: none;
   color: #000;
   border: 1px solid #000;
   padding: 5px;
   background-color: #ad8282;
}
.list {
   max-width: 600px;
   display: grid;
   gap: 20px;
   // .list__driver
   &__item {
      display: grid;
      grid-template-columns: repeat(3, 150px);
      gap: 20px;
   }
   &__titles {
      display: grid;
      grid-template-columns: repeat(2, 180px);
   }
   // .list__title
   &__title {
   }
   // .list__actions
   &__actions {
   }
}

#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   //text-align: center;
   color: #2c3e50;
}

nav {
   padding: 30px;

   a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
         color: #42b983;
      }
   }
}
</style>
