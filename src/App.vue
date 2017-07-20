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
  .btn
    outline none
    border none
    padding 5px
    background #2ECC71
    color #fff
    text-decoration none
    font-family Helvetica
    font-weight lighter
    font-size 20px
    cursor pointer
    margin 20px
    display inline-block
    border-radius 3px
    box-shadow 0px 5px 0px 0px rgb(21, 179, 88)
    position relative
    top 0px
    transition background 0.5s, top 0.1s, box-shadow 0.1s
    &:hover
      background #1be06f
    &:active
      box-shadow 0px 2px 0px 0px rgb(21, 179, 88)
      top 3px
  .btn--delete
    background #DF4949
    box-shadow 0px 5px 0px 0px rgb(157, 45, 45)
    transition background 0.5s, top 0.1s , box-shadow 0.1s , padding 0.5s
    &:hover
      background:#FF5555
    &:active
      box-shadow 0px 2px 0px 0px rgb(223, 73, 73)
      top 3px
</style>
