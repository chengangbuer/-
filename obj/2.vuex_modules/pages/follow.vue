<template>
  <div class="follow pd-top">
    <uc-cell
      v-for="(item,index) of $store.state.follow.follow"
      :key="item._id"
     :data="item" 
     :index="index" 
     collectionName="follow"
     />
  </div>
</template>

<script>
  import UcCell from '../components/uc-cell/uc-cell.vue'
  export default {
    name:'follow',
    props:{},
    components:{UcCell},
    mounted(){
      this.$store.dispatch('follow/UPDATE_FOLLOW')
    },
    updated(){},
    methods:{}
  }
</script>

<style>
  .follow{padding-left: 0.34rem;padding-right: 0.34rem;}
</style>
