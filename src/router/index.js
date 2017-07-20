import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Home from '../components/Home.vue'
import InfoCard from '../components/InfoCard.vue'
// import ContentComponent from '../components/content.vue'
Vue.use(Router)
Vue.use(Vuex)
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/episode',
      component: InfoCard
    }
  ]
})
