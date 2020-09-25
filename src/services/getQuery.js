import axios from '../plugins/axios.js';

function getQuery({collectionName,_id=null,params={_page:1,_limit:20}}){
  let url = _id ? '/api/' + collectionName + '/' + _id : '/api/' + collectionName;
  return axios.get(url,{params}).then(res => res.data.data)
};

export {getQuery}
