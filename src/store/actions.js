import {
	UPDATE_HOME,
	UPDATE_FOLLOW,
	UPDATE_COLUMN,
	UPDATE_BANNER,
	UPDATE_DETAIL,
	CLEAR_HOME,
  CLEAR_COLUMN,
  CLEAR_FOLLOW,
  CLEAR_USER
} from './types.js'

import {getQuery} from '../services/getQuery.js'

let actions = {
	[UPDATE_HOME]:({state,commit}) => getQuery({collectionName:'home'})
		.then(res => commit(UPDATE_HOME,res)),
	[UPDATE_FOLLOW]:({state,commit}) => getQuery({collectionName:'follow',params:{_limit:5}})
		.then(res => commit(UPDATE_FOLLOW,res)),
	[UPDATE_COLUMN]:({state,commit}) => getQuery({collectionName:'column',params:{_limit:10}})
		.then(res => commit(UPDATE_COLUMN,res)),
	[UPDATE_BANNER]:({state,commit}) => getQuery({collectionName:'banner',params:{_limit:4}})
		.then(res => commit(UPDATE_BANNER,res)),
	[UPDATE_DETAIL]:({state,commit},{collectionName,_id}) => getQuery({collectionName,_id})
		.then(res => commit(UPDATE_DETAIL,res)),

	[CLEAR_HOME]:({state,commit}) => getQuery({collectionName:'home'})
		.then(res => commit(CLEAR_HOME,res)),
  [CLEAR_COLUMN]:({state,commit}) => getQuery({collectionName:'column'})
    .then(res => commit(CLEAR_COLUMN,res)),
  [CLEAR_FOLLOW]:({state,commit}) => getQuery({collectionName:'follow'})
  	.then(res => commit(CLEAR_FOLLOW,res)),
  [CLEAR_USER]:({state,commit}) => getQuery({collectionName:'user'})
    .then(res => commit(CLEAR_USER,res)),
};

export default actions;
