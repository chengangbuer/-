import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import state from '../store/state.js'
import actions from '../store/actions.js'
import mutations from '../store/mutations.js';

import column from '../store/modules/column.js'
import detail from '../store/modules/detail.js'
import follow from '../store/modules/follow.js'
import home from '../store/modules/home.js'
import user from '../store/modules/user.js'

let store = new Vuex.Store({
  actions,mutations,state,
  modules:{
    column,detail,follow,home,user
  }
});

export default store;