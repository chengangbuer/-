import {getQuery} from '../../services/getQuery.js';
import {
  UPDATE_DETAIL,
} from '../types.js';

const state = {
 detail: {},
}

const actions = {
  [UPDATE_DETAIL]: ({state,commit},{_id,collectionName}) => getQuery({collectionName,_id})
    .then(res => commit(UPDATE_DETAIL,res)),
};

const mutations = {
  [UPDATE_DETAIL] : (state,payload) => state.detail = payload,
}

const getters = {}

export default {
  namespaced:true,
  state,actions,mutations
}