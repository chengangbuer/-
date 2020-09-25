import * as types from './types.js';


let mutations = {
  [types.UPDATE_LOADING] : (state,payload) => state.bLoading = payload,
  [types.UPDATE_NAV] : (state,payload) => state.bNav = payload,
  [types.UPDATE_FOOT] : (state,payload) => state.bFoot = payload,
};

export default mutations;