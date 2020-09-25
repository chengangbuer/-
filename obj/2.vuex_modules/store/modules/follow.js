import {getQuery} from '../../services/getQuery.js';
import {
  UPDATE_FOLLOW,
} from '../types.js';

const state = {
 follow: [],
}

const actions = {
 [UPDATE_FOLLOW]: ({state,commit}) => getQuery({collectionName:'follow',params:{_limit:15}})
   .then(res => commit(UPDATE_FOLLOW,res)),
};

const mutations = {
  [UPDATE_FOLLOW] : (state,payload) => state.follow = payload,
  
}

const getters = {}

export default {
  namespaced:true,
  state,actions,mutations
}