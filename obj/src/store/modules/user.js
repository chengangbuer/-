import {
  UPDATE_USER,
} from '../types.js';

const state = {
  user:{
    err:1
  }
}
const actions={};
 
const mutations = {
  [UPDATE_USER] : (state,payload) => state.user = payload
}

const getters = {}

export default {
  namespaced:true,
  state,mutations,actions
}