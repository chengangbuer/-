import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import state from '../store/state.js'
import actions from '../store/actions.js'
import mutations from '../store/mutations.js';

let store = new Vuex.Store({actions,mutations,state});

export default store;