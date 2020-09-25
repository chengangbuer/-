<template>
  <div class="follow pd-top">
    <uc-cell
      v-for="(item,index) of $store.state.follow"
      :key="item._id"
     :data="item" 
     :index="index" 
     collectionName="follow"
     />
  </div>
</template>

<script>
  import UcCell from '../components/uc-cell/cell.vue'
  import * as types from '../store/types.js'
  export default {
    name:'follow',
    props:{},
    // data(){
    //   return {
    //     list:[
    //     ]
    //   }
    // },
    components:{UcCell},
    mounted(){
		// this.$axios({
		//   url:'/api/follow',
		//   params:{_limit:10,_page:1}
		// }).then(
		//   res => this.list = res.data.data
		// )
    this.$store.dispatch(types.UPDATE_FOLLOW)
	},
    updated(){},
    methods:{},
    destroyed(){
      this.$store.dispatch(types.CLEAR_FOLLOW)
    }
  }
</script>

<style scoped>
 .follow{padding-left: 0.34rem;}
</style>
