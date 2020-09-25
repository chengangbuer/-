const getters = {
  cptCount : (state) => {
    if(state.count ===0){
      return '嘻嘻'
    }else if (state.count % 2 === 0) {
      return '偶数'
    } else {
      return '奇数'
    }
  }
}

export default getters