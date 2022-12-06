const topnbar = {
  state: () => ({
    topNbShow: 0,
    token: ''
  }),
  mutations: {
    GETTOPNBSHOW(state, data) {
      state.topNbShow = data
    },
    ADDTOKEN(state, data) {
      state.token = data
    },
    UPDATETOKEN(state, data) {
      state.token = data
    }
  },
  actions: {
    getTopNbShow({ commit }, data) {
      commit('GETTOPNBSHOW', data)
    },
    addToken({ commit }, data) {
      commit('ADDTOKEN', data)
    },
    updateToken({ commit }, data) {
      commit('UPDATETOKEN', data)
    }
  },
  getters: {}
}
export default topnbar
