<template>
  <div id="app">
    <h3>状态管理vuex</h3>

    <!--  实例方法  -->
    <button @click="$store.dispatch('jia',1)">+</button>
    <button @click="$store.dispatch('jian',1)">-</button>
    <button @click="$store.commit('increment',2)">越过action+</button>
    <button @click="$store.dispatch('async')">async+</button>
    <button @click="$store.dispatch('odd',1)">odd+</button>
    {{$store.state.count}} / {{ cptCount }}
    <hr>
    <!-- 函数 -->
    <button @click="jia(1)">+</button>
    <button @click="jian(1)">-</button>
    <button @click="increment(1)">越过action+</button>
    <button @click="async">async+</button>
    <button @click="odd(1)">odd+</button>
    {{$store.state.count}} / {{ cptCount }}
    <hr>
    <!-- 直接通过mapState拿数据 -->
    {{count}} / {{list}}


  </div>
</template>

<script>
import store from './plugins/vuex'
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
// mapGetters 用来接管计算属性的，调用后会返回一个对象
// mapActions 用来接管methods的，调用后会返回一个对象
// mapMutations 用来接管methods的，调用后会返回一个对象
export default {
  name: 'App',
  components: {
  },
  mounted() {
    // 访问实例
    // console.log(store)
    // console.log(this.$store)
  },
  // computed: {
  //   cptCount : (state) => {
  //     if (state.count % 2 === 0) {
  //       return '偶数'
  //     } else {
  //       return '奇数'
  //     }
  //   }
  // },
  computed:{
    ...mapGetters(['cptCount']),
    ...mapState(['count', 'list']),
  },
  // methods:{
  //   jia:({state,commit},payload)=>{
  //     // console.log('jia的业务')
  //     // commit('类型',负载,配置)
  //     commit('increment',payload)
  //   },
  //   jian:({state,commit},payload)=>{
  //     // console.log('jia的业务')
  //     // commit('类型',负载,配置)
  //     commit('decrement',payload)
  //   },
  //   async:({state,commit})=>{
  //     axios({url:'/count.json'})
  //       .then(
  //         res => commit('async',res.data.value)
  //       )
  //   },
  //   odd:({state,commit},payload)=>{
  //     if(state.count % 2 === 0){
  //       commit('increment',payload)
  //     }
  //   },
  // },
  methods:{
    ...mapActions(['jia', 'jian', 'async', 'odd']),
    ...mapMutations(['increment']),
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
