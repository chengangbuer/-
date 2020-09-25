<template>
  <div class="column pd-top">
    <uc-cell
      v-for="(item,index) of $store.state.column"
      :key="item._id"
     :data="item"
     collectionName="column"
     />
  </div>
</template>

<script>
  import UcCell from '../components/uc-cell/uc-cell.vue'
  import * as types from '../store/types.js'
  export default {
    name:'uc-column',
    props:{},
    // data(){
    //   return {
    //     list:[
    //     ]
    //   }
    // },
    components:{UcCell},
    mounted(){
    this.$store.dispatch(types.UPDATE_COLUMN)
		// this.$axios({
		//   url:'/api/column',
		//   params:{_limit:10,_page:1}
		// }).then(
		//   res => this.list = res.data.data
		// )
	},
    updated(){},
    methods:{},
    destroyed(){
      this.$store.dispatch(types.CLEAR_COLUMN)
    }
  }
</script>

<style scoped>
.column{padding-left: 0.34rem;padding-right: 0.34rem;}
</style>
