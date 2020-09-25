<template>
	  <div class="home pd-top">
		<banner
		  :data="banner"
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
    data(){
      return {
        banner:[
          {_id:1,image:'./img/img_2.jpg',title:'林智',sub_title:'嘻嘻嘻'},
          {_id:2,image:'./img/img_1.jpg',title:'林智大猪头',sub_title:'嘿嘿嘿'},
          {_id:3,image:'./img/img_3.jpg',title:'林智大猪头',sub_title:'哈哈哈'},
        ],
        // list:[
        //   {_id:1,title:'xxx1',des:'oo'},
        //   {_id:2,title:'xxx2',des:'oo'},
        //   {_id:3,title:'xxx3',des:'oo'},
        // ]
      }
    },
    components:{banner,UcCell},
    mounted(){
		this.$store.dispatch(types.UPDATE_BANNER),
		this.$store.dispatch(types.UPDATE_HOME),
    console.log(this.banner)
    },
    updated(){},
    methods:{

    },
  }
</script>

<style scoped>
  .list{
    padding: 0 0.34rem;
  }
</style>
