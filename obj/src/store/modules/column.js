import {getQuery} from '../../services/getQuery.js';
import {
  UPDATE_COLUMN,
} from '../types.js';

const state = {
  column: []
}

const actions = {
  [UPDATE_COLUMN]: ({state,commit}) => getQuery({collectionName:'column',params:{_limit:10}})
    .then(res => commit(UPDATE_COLUMN,res)),
};

const mutations = {
  [UPDATE_COLUMN] : (state,payload) => state.column = payload,
}

const getters = {}

export default {
  namespaced:true,
  state,actions,mutations
}