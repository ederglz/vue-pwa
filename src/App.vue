<template lang="pug">
  #app
    spinner(v-show="loading")
    header-component(v-on:reset="incrementTotal")
    router-view
</template>

<script>
  import Spinner from './components/Spinner.vue'
  import HeaderComponent from './components/Header.vue'
  import getSeasons from './api'
  export default {
    name: 'app',
    data () {
      return {
        loading: true
      }
    },
    methods: {
      refreshSeasons () {
        getSeasons()
          .then(seasons => {
            this.$store.dispatch('setEpisodes', seasons)
            this.loading = false
          })
      },
      incrementTotal  () {
        this.value = ''
      }
    },
    components: {
      Spinner,
      HeaderComponent
    },
    mounted () {
      this.refreshSeasons()
    }
}
</script>

<style lang="stylus">
  #app
      background #3D5482
      font-family 'Work Sans', Helvetica
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
  a
    text-decoration none
</style>
