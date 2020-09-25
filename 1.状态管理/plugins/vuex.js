import Vue from 'vue'
import Vuex from 'vuex'
import state from '../store/state.js'
import actions from '../store/actions.js'
import getters from '../store/getters.js'
import mutations from '../store/mutations.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions, mutations, state, getters
})

export default store

// console.log(Vuex);//{Store,mapDispatch,mapMutation,mapAction,mapGetter}
