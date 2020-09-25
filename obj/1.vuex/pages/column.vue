<template>
  <div class="column pd-top">
    <!-- <img :src="head" alt=""> -->
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
   // import head from '../../public/images/head.png';
   import * as types from '../store/types.js'
  export default {
    name:'column',
    props:{},
    components:{UcCell},
    mounted(){
      this.$store.dispatch(types.UPDATE_COLUMN)
    },
    updated(){},
    methods:{}
  }
</script>

<style>
  .column{padding-left: 0.34rem;padding-right: 0.34rem;}
</style>
