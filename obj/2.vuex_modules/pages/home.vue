<template>
  <div class="home pd-top">
    <banner
      :data="$store.state.home.banner"
      collectionName="banner"
    />
    <div class="list">
      <uc-cell
        v-for="(item,index) of list"
        :key="item._id"
       :data="item" 
       :index="index" 
       collectionName="home"
       />
    </div>
    
  </div>
</template>

<script>
  import banner from '../components/banner/banner.vue'
  import UcCell from '../components/uc-cell/uc-cell.vue'
  import {mapState} from 'vuex';
  export default {
    name:'home',
    props:{},
    components:{banner,UcCell},
    mounted(){
      this.$store.dispatch('home/UPDATE_HOME')
      this.$store.dispatch('home/UPDATE_BANNER')
    },
    updated(){
      console.log('updated');
    },
    methods:{},
    computed:mapState({
      list:state=>state.home.home
    })
  }
</script>

<style>
  .home{}
  .list{
    padding: 0 0.34rem;
  }
</style>
