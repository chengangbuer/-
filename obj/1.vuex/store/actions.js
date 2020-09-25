import {
  UPDATE_BANNER,
  UPDATE_COLUMN,
  UPDATE_DETAIL,
  UPDATE_FOLLOW,
  UPDATE_HOME,
} from './types.js';

import {getQuery} from '../services/getQuery.js';

let actions = {
  [UPDATE_HOME]: ({state,commit}) => getQuery({collectionName:'home'})
    .then(data => data && commit(UPDATE_HOME,data)),
  [UPDATE_FOLLOW]: ({state,commit}) => getQuery({collectionName:'follow',params:{_limit:15}})
    .then(res => commit(UPDATE_FOLLOW,res)),
  [UPDATE_COLUMN]: ({state,commit}) => getQuery({collectionName:'column',params:{_limit:10}})
    .then(res => commit(UPDATE_COLUMN,res)),
  [UPDATE_BANNER]: ({state,commit}) => getQuery({collectionName:'banner',params:{_limit:3}})
    .then(data => data && commit(UPDATE_BANNER,data)),
  [UPDATE_DETAIL]: ({state,commit},{_id,collectionName}) => getQuery({collectionName,_id})
    .then(res => commit(UPDATE_DETAIL,res)),
};

export default actions;
