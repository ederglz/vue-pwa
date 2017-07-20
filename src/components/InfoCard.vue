<template lang="pug">
  div
    div.episode(v-for = "episode in data" class="info")
      img(:src="episode.image_still" class="img")
      div.description
        span {{episode.episode_number}}. {{episode.title_episode}}
        p {{episode.duration}}
        span {{episode.description_large}}
        span {{episode.date}}
        span {{episode.year}}
        span {{episode.votes_average}}
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
    margin-top 1rem
  .img
    width 90%
</style>
