<template>
  
  <div class="detail" v-if="detail.title">
    <uc-nav/>
    <div class="content">
      <div class="header clear"><h2><img :src="detail.detail.auth_icon" alt=""/></h2><p>{{detail.detail.auth}}</p></div>
      <div class="cont">
        <h3>{{detail.title}} {{ 9 | fillzero}}</h3>
        <div class="time"><p>{{detail.time | date}}<span><img src="../assets/img/zan.png" alt=""/></span></p></div>
        <div class="text-box" v-html="detail.detail.content"></div>
      </div>
    </div>
    <uc-toolbar/>
    
  </div>
  <FrameScreen v-else/>
  
</template>

<script>
  import UcNav from '../components/uc-nav/uc-nav.vue';
  import UcToolbar from '../components/uc-toolbar/uc-toolbar.vue';
  import axios from '../plugins/axios.js';
  import FrameScreen from '../components/frame-screen.vue'
  import {mapActions,mapState} from 'vuex'
  import {UPDATE_DETAIL} from '../store/types.js'
  export default {
    name:'detail',
    props:{
      collectionName:{
        type:String,
        default:'follow'
      },
      _id:{
        type:String,
        default:'3'
      }
    },
    components:{UcNav,UcToolbar,FrameScreen},
    mounted(){
      // this.UPDATE_DETAIL({collectionName:this.collectionName,_id:this._id})
      this[UPDATE_DETAIL]({collectionName:this.collectionName,_id:this._id})
    },
    updated(){},
    methods:mapActions('detail',[UPDATE_DETAIL]),
    computed:mapState('detail',['detail']),
    
  }
</script>

<style>

  .content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
  .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
  .header h2{ float:left; margin-right:0.18rem;}
  .header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}
  
  .content .cont{ padding:0 0.38rem; color:#494d4d;}
  .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
  .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
  .time p{ float:left;position:relative;}
  .time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
  .time span img{width:100%;height:100%;}
  
  .cont .text-box{ font-size:0.25rem;}
  .text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}

</style>
