<template>
  <div id="app">
    <loading v-show="$store.state.bLoading"/>
    <Header v-show="bNav"/>
    
    <transition
      
      enter-active-class = "animate__animated animate__fadeIn"
    >
      <router-view/>
    </transition>
   
    <Footer v-show="bFoot"/>
    
  </div>
</template>

<script>
  import Header from './header.vue'
  import Footer from './Footer.vue'
  import loading from '../components/loading.vue'
  import {mapState} from 'vuex'
  import * as types from '../store/types.js'
export default {
  name: 'App',
  watch:{
    $route:{
      handler(newVal){
        let path = newVal.path;
        if(/home|follow|column/.test(path)){
          
          this.$store.commit(types.UPDATE_NAV,true);
          this.$store.commit(types.UPDATE_FOOT,true);
        }
        if(/user/.test(path)){
          this.$store.commit(types.UPDATE_NAV,false);
          this.$store.commit(types.UPDATE_FOOT,true);
        }
        if(/login|reg|detail/.test(path)){
          this.$store.commit(types.UPDATE_NAV,false);
          this.$store.commit(types.UPDATE_FOOT,false);
        }
      },
      immediate:true
    }
  },
  mounted(){
    
  },
  
  beforeUpdate(){
    console.log('app updated');
  },
  components: {
    Header,Footer,loading
  },
  computed:mapState(['bFoot','bNav']),
  methods:{
  }
}
</script>

<style>

</style>
