import {
	UPDATE_LOADING,
	UPDATE_NAV,
	UPDATE_FOOT,
	UPDATE_HOME,
	UPDATE_FOLLOW,
	UPDATE_COLUMN,
	UPDATE_BANNER,
	UPDATE_DETAIL,
} from './types.js'

import {getQuery} from '../services/getQuery.js'

let actions = {
	[UPDATE_HOME]:({state,commit})=>getQuery({collectionName:'home'})
		.then(res=>commit(UPDATE_HOME,res)),
	[UPDATE_FOLLOW]:({state,commit})=>getQuery({collectionName:'home',params:{_limit:5}})
		.then(res=>commit(UPDATE_FOLLOW,res)),
	[UPDATE_COLUMN]:({state,commit},payload)=>getQuery({collectionName:'home',params:{_limit:10}})
		.then(res=>commit(UPDATE_COLUMN)),
	[UPDATE_BANNER]:({state,commit})=>getQuery({collectionName:'banner',params:{_limit:4}})
		.then(res=>commit(UPDATE_BANNER,res)),
	[UPDATE_DETAIL]:({state,commit},_id)=>getQuery({collectionName:'detail',_id})
		.then(res=>commit(UPDATE_DETAIL,res)),
};

export default actions;
