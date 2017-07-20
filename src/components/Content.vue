<template lang="pug">
  div(v-if="searchActive")
    h1 Buscando por "{{search}}"
    card(v-for="(season, index) in showData" :info="season" :key="season.id" v-on:open="test")
    div(v-if="searchActive && showData.length == 0") 
      span No se encontraron resultados 🙁
      button(v-on:click="resetInput") Nueva Busqueda
  div(v-else-if="!searchActive")
    card(v-for="(season, index) in seasons" :info="season" :key="season.id" v-on:open="test")
</template>
<script>
import Card from './card.vue'
export default {
  name: 'ContentComponent',
  components: {
    Card
  },
  computed: {
    searchActive: function () {
      return this.$store.getters.searchActive
    },
    search: function () {
      return this.$store.getters.searchInput
    },
    showData: function () {
      this.$store.dispatch('filterEpisodes')
      return this.$store.getters.showData
    },
    seasons: function () {
      return this.$store.getters.seasons
    }
  },
  methods: {
    test: function (val) {
      this.$router.push({path: 'episode'})
      this.$store.dispatch('setActiveCard', val)
    },
    resetInput: function () {
      this.$emit('reset')
      this.$store.dispatch('removeValue')
      this.$store.dispatch('setActiveSearch', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
