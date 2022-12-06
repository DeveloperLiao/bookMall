const home = {
  state: () => ({
    // 轮播图的数据
    bannerList: [],
    // 热卖特辑的数据
    hotList: [],
    // 主页楼层的数据
    floorList: []
  }),
  mutations: {
    GETBANNERLIST(state, data) {
      state.bannerList = data
    },
    GETHOTLIST(state, data) {
      state.hotList = data
    },
    GETFLOORLIST(state, data) {
      state.floorList = data
    }
  },
  actions: {
    // 获取Banner的数据
    async getBannerList({ commit }, api) {
      let res = await api.home.getBannerList()
      let { data } = res.data
      commit('GETBANNERLIST', data)
    },
    // 获取热卖特辑的数据
    async getHotList({ commit }, api) {
      let res = await api.home.getHotList()
      let { data } = res.data
      commit('GETHOTLIST', data)
    },
    // 主页楼层的数据
    async getFloorList({ commit }, api) {
      let res = await api.home.getFloorList()
      let { data } = res.data
      commit('GETFLOORLIST', data)
    }
  },
  getters: {}
}
export default home
