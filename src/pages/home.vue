<template>
	  <div class="home pd-top">
		<banner
		  :data="$store.state.banner"
		  collectionName="banner"
		/>
		<div class="list">
		  <uc-cell
		   v-for="(item,index) of $store.state.home"
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
  import * as types from '../store/types.js'
  export default {
    name:'home',
    props:{},
    // data(){
    //   return {
    //   }
    // },
    components:{banner,UcCell},
    mounted(){
      this.$store.dispatch(types.UPDATE_BANNER);
      this.$store.dispatch(types.UPDATE_HOME);
    },
    updated(){},
    methods:{
    },
    destroyed(){
      this.$store.dispatch(types.CLEAR_HOME)
    }
  }
</script>

<style scoped>
  .list{
    padding: 0 0.34rem;
  }
</style>
