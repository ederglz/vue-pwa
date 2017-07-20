<template lang="pug">
	div.error
	  h1 404
	  hr
	  h2 Página No Encontrada 
</template>

<script>
export default {

  name: '404',

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
	white = #D9CB9E
	gray = #374140
	black = #1E1E20
	body
	  background: white
	.error
	  text-align: center
	  margin: 60px auto
	  animation-duration: 1s
	  animation-name: slideup
	  animation-fill-mode: backwards
		h2, p
		  color: white
		h1
		  color: black
		  font-family: 'Merriweather', serif
		  font-size: 120px
		  line-height: 122px
		h2
		  font-size: 30px
		  line-height: 32px
		  margin-bottom: 10px
		p
		  font-size: 18px
		  line-height: 20px
		hr
		  width: 15%
		  margin: 40px auto
		  border-color: white
	  
	@keyframes slideup
	  from
	    margin-top: 105%
	  to
	    margin-top: 10px
</style>
