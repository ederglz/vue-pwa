<template lang="pug">
  div.header
    div.container(v-if="!activated")
      router-link(to="/" class="link")
        h1.title Popcrn
      div.search
        div(class="icon icon-search" v-on:click="toggleSearch")
    div.container(v-if="activated")
      input(v-model="search")
      button(v-on:click="searchData(search)" class="btn btn--search") Buscar  
      button(v-on:click="toggleSearch" class="btn btn--delete") Cancelar  

</template>
<script>
export default {
  name: 'header-component',
  data () {
    return {
      activated: false,
      search: ''
    }
  },
  watch: {
    search: function (input) {
      if (!input) {
        this.$store.dispatch('setActiveSearch', false)
      }
    }
  },
  methods: {
    toggleSearch: function () {
      this.activated = !this.activated
    },
    searchData: function (input) {
      this.$store.dispatch('setValue', input)
      this.$store.dispatch('setActiveSearch', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .btn
    outline none
    border none
    padding 5px
    background #00C0EC
    color #fff
    text-decoration none
    font-family Helvetica
    font-weight lighter
    font-size 20px
    cursor pointer
    margin 20px
    display inline-block
    border-radius 3px
    box-shadow 0px 5px 0px 0px rgb(0, 142, 176)
    position relative
    top 0px
    transition background 0.5s, top 0.1s, box-shadow 0.1s
    &:hover
      background #00CFFF
    &:active
      box-shadow 0px 2px 0px 0px rgb(0, 142, 176)
      top 3px
  .btn--delete
    background #DF4949
    box-shadow 0px 5px 0px 0px rgb(157, 45, 45)
    transition background 0.5s, top 0.1s , box-shadow 0.1s , padding 0.5s
    &:hover
      background:#FF5555
  .icon
    font-size 1.2rem
    cursor pointer
  .container
    background-color #3417B7
    color #F8F739
    display flex
    justify-content space-between
    align-items center
    padding 1rem
  .title
    margin 0
  .link
    color #F8F739
</style>
