<template>
  
  <div class="frame-screen-list"  v-if="type==='list'">
    <div class="swiper">swiper</div>
    <div class="item">item</div>
    <div class="item">item</div>
    <div class="item">item</div>
    <div class="item">item</div>
    <div class="item">item</div>
    <div class="item">item</div>
  </div>
  
  <div class="frame-screen-detail" v-else>
    <div class="nav">nav</div>
    <div class="user">
      <div class="icon">icon</div>
      <div class="username">username</div>
    </div>
    <div class="title">title</div>
  </div>
  
</template>

<script>
  export default{
    props:{
      type:{
        type:String,
      }
    }
  }
</script>

<style scoped>
</style>
