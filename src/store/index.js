import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const information = {
  state: {
    title: 'NørdicVue'
  },
  getters: {
    getTitle: (state) => state.title
  }
}
const app = {
  state: {
    isMobile: Boolean
  },
  getters: {
    getIsMobile: (state) => state.isMobile
  },
  mutations: {
    check: function (state) {
      if(window.innerWidth < 1000) state.isMobile = true
      else state.isMobile = false
    }
  },
  actions: {
    checkMobility: function ({ commit }) {
      commit('check')
    }
  }
}

const navigation = {
  state: {
    isOpened: false
  },
  getters: {
    isNavOpened: ({ isOpened }) => {
      return isOpened
    }
  },
  mutations: {
    openNavigation(state) {
      state.isOpened = true
    },
    toggleNavigation(state) {
      state.isOpened = !state.isOpened
    },
    closeNavigation(state) {
      state.isOpened = false
    }
  },
  actions: {
    openNavigation({ commit }) {
      commit('openNavigation')
    },
    toggleNavigation({ commit }) {
      commit('toggleNavigation')
    },
    closeNavigation({ commit }) {
      commit('closeNavigation')
    }
  }

}

export default new Vuex.Store({
  modules: {
    nav: navigation,
    information: information,
    app: app
  }
})
