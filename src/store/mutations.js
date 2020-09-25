import *as types from './types.js'

export default{
  [types.UPDATE_LOADING]:(state,payload)=>state.bLoading=payload,
  [types.UPDATE_NAV]:(state,payload)=>state.bNav=payload,
  [types.UPDATE_FOOT]:(state,payload)=>state.bFoot=payload,

  [types.UPDATE_HOME]:(state,payload)=>state.home=payload,
  [types.CLEAR_HOME]:(state,payload)=>{state.home=[];state.banner=[]},

  [types.UPDATE_FOLLOW]:(state,payload)=>state.follow=payload,
  [types.CLEAR_FOLLOW]:(state,payload)=>state.follow=[],

  [types.UPDATE_COLUMN]:(state,payload)=>state.column=payload,
  [types.CLEAR_COLUMN]:(state,payload)=>state.column=[],

  [types.UPDATE_BANNER]:(state,payload)=>state.banner=payload,

  [types.UPDATE_DETAIL]:(state,payload)=>state.detail=payload,
  'CLEAR_DETAIL':(state,payload)=>state.detail=[],

  [types.UPDATE_USER]:(state,payload)=>state.user=payload,
  [types.CLEAR_USER]:(state,payload)=>state.user={},
}

// export default mutations
