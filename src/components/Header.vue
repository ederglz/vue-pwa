<template lang="pug">
  div.header
    div.container(v-if="!activated")
      router-link(to="/" class="link")
        h1.title Popcrn
      div.search
        div(class="icon icon-search" v-on:click="toggleSearch")
    div.container(v-if="activated")
      button(v-on:click="emptySearch" class="btn btn--delete") Cancelar  
      input(v-model="search")
      button(v-on:click="searchData(search)" class="btn btn--search") Buscar  

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
    emptySearch: function () {
      this.search = ''
      this.toggleSearch()
    },
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
