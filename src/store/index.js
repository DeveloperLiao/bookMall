// vuex仓库
import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import sort from './sort'
import topnbar from './topnbar'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: { home, sort, topnbar }
})
export default store
