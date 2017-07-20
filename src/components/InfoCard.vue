<template lang="pug">
  div
    div.episode(v-for = "episode in data" class="info")
      img(:src="episode.image_still" class="img")
      div.description
        h2 {{episode.episode_number}}. {{episode.title_episode}}
        div.info
          p(class="bold")
            span Puntuación promedio 
            span(v-for="number in episode.votes_average") ⭐️ 
          p.bold Duración: {{episode.duration}}
          p.bold Año de Lanzamiento: {{episode.year}}
        span {{episode.description_large}}
</template>
<script>
export default {
  name: 'InfoCard',
  computed: {
    data: function () {
      return this.$store.getters.currentCard
    }
  }
}
</script>

<style lang="stylus" scoped>
  .episode
    color white
    width 80%
    padding 0.5rem
    margin 1rem auto
  .bold
    font-weight bold
  .img
    width 100%
    heigth 100%
  @media only screen and (min-width: 700px)
    .episode
      width 50%
</style>
