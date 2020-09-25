const mutations = {
  increment:(state,payload)=>{
    //不做业务，只负责突变
    // console.log('mutations');
    state.count += payload;
  },
  decrement:(state,payload)=>{
    //不做业务，只负责突变
    // console.log('mutations');
    state.count -= payload;
  },
  async: (state,payload)=>state.count += payload
}

export default mutations
