const sort = {
  state: () => ({ sortList: [] }),
  mutations: {
    GETSORTLIST(state, data) {
      state.sortList = data
    }
  },
  actions: {
    // 获取书籍展示列表的数据
    async getSortList({ commit }, api) {
      let res = await api.sort.getSortList()
      let { data } = res.data
      commit('GETSORTLIST', data)
    }
  },
  getters: {}
}
export default sort
