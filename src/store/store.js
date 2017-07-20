import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchInput: '',
    searchActive: false,
    seasons: [],
    showData: [],
    currentCard: []
  },
  mutations: {
    SET_VALUE (state, input) {
      state.searchInput = input
    },
    REMOVE_VALUE (state) {
      state.searchInput = ''
    },
    SET_ACTIVE_SEARCH (state, active) {
      state.searchActive = active
    },
    SET_EPISODES (state, seasons) {
      state.seasons = seasons
    },
    SET_ACTIVECARD (state, card) {
      state.currentCard = []
      state.currentCard.push(card)
    },
    FILTER_EPISODES (state) {
      let filtered = {
        episodes: []
      }
      let checkQuery = function (value, title, description) {
        var text = title + description
        value = value.toLowerCase()
        text = text.toLowerCase()
        text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        var res = new RegExp(value).test(text)
        return res
      }
      let episodeFilter = function (arr, value) {
        return arr.episodes.filter(item => checkQuery(value, item.title_episode, item.description_large))
      }
      state.seasons.forEach((item, index) => {
        let filterEpisodes = episodeFilter(item, state.searchInput)
        if (filterEpisodes.length) {
          filtered.episodes = filtered.episodes ? filtered.episodes.concat(filterEpisodes) : filterEpisodes
        }
        return
      })
      if (!filtered.episodes.length) {
        return
      }
      state.showData = []
      state.showData.push(filtered)
    }
  },
  actions: {
    setValue ({commit}, input) {
      commit('SET_VALUE', input)
    },
    removeValue ({commit}) {
      commit('REMOVE_VALUE')
    },
    setEpisodes ({commit}, seasons) {
      commit('SET_EPISODES', seasons)
    },
    setActiveSearch ({commit}, active) {
      commit('SET_ACTIVE_SEARCH', active)
    },
    filterEpisodes ({commit}) {
      commit('FILTER_EPISODES')
    },
    setActiveCard ({commit}, card) {
      commit('SET_ACTIVECARD', card)
    }
  },
  getters: {
    currentCard: state => state.currentCard,
    showData: state => state.showData,
    searchActive: state => state.searchActive,
    searchInput: state => state.searchInput,
    seasons: state => state.seasons,
    value: state => state.value
  }

})
