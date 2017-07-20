<template lang="pug">
  div.season(:style="{ 'background-image': 'url(' + info.image_background + ')' }")
      h2.title {{info.title}}
      div.episode(v-for = "episode in info.episodes" v-on:click="$emit('open', episode)")
        img(:src="episode.image_still" class="img")
        div.description
          span(class="episode-count") {{episode.episode_number}}. 
          span(class="episode-count bold") {{episode.title_episode}}. 
          p(class="episode-duration") {{episode.duration}}
          span(class="episode-desc") {{episode.description}}
</template>
<script>
export default {
  name: 'card',
  props: ['info']
}
</script>

<style lang="stylus" scoped>
.title
  padding-top 1rem
  margin 0
.season
  color white
  background-size cover
  background-repeat no-repeat
  background-position 50% 50%
.description
  margin-left 1rem
  text-align left
.img
  width 290px
  heigth 163px
  margin-bottom 1rem
.bold
  font-weight bold
.episode
  cursor pointer
  justify-content center
  padding 1rem
  display flex
  align-items center
  margin 2rem 0
  flex-wrap wrap
  &:hover
    transform scale(1.01, 1.01)
</style>
