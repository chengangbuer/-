import {getQuery} from '../../services/getQuery.js';
import {
  UPDATE_HOME,
  UPDATE_BANNER
} from '../types.js';

const state = {
 home: [],
 banner: [],
}

const actions = {
 [UPDATE_HOME]: ({state,commit}) => getQuery({collectionName:'home'})
   .then(data => data && commit(UPDATE_HOME,data)),
 
 [UPDATE_BANNER]: ({state,commit}) => getQuery({collectionName:'banner',params:{_limit:3}})
   .then(data => data && commit(UPDATE_BANNER,data)),
};

const mutations = {
 [UPDATE_HOME] : (state,payload) => state.home = payload,
 [UPDATE_BANNER] : (state,payload) => state.banner = payload,
 'CLEAR_BANNER' : (state,payload) => state.banner = [],
}

const getters = {}

export default {
  namespaced:true,
  state,actions,mutations
}