import axios from 'axios';
const actions= {
  // increment:function(){},
  // increment(){},
  jia:({state,commit},payload)=>{
    // console.log('jia的业务')
    // commit('类型',负载,配置)
    commit('increment',payload)
  },
  jian:({state,commit},payload)=>{
    // console.log('jia的业务')
    // commit('类型',负载,配置)
    commit('decrement',payload)
  },
  async:({state,commit})=>{
    axios({url:'/count.json'})
      .then(
        res => commit('async',res.data.value)
      )
  },
  odd:({state,commit},payload)=>{
    if(state.count % 2 === 0){
      commit('increment',payload)
    }
  }
}

export default actions
