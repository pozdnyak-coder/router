<template>
<Header :pages="pages" />
<RouterView></RouterView>
</template>

<script>
import Header from './components/Header.vue'
  export default {
  components: { Header },
   data() {
    return {
      pages: [
        {url: '/', name: 'Home'},
        {url: '/about', name: 'About'},
        {url: '/cars', name: 'Cars'},
      ]
    }
   },
  }
</script>

<style lang="scss" scoped>

</style>