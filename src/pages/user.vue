<template>
  <div class="content">
    <div class="header">
      <h2><img :src="list.icon" alt=""></h2>
      <div class="user-box">
        <a>{{list.nikename}}</a>
        <a @click='LoginOut'>注销</a>
      </div>
      <ul class="clear">
        <li>
          <span>{{list.follow}}</span>
          <p>关注</p>
        </li>
        <li>
          <span>{{list.fans}}</span>
          <p class="end">粉丝</p>
        </li>
      </ul>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text">
          <i></i>
          <p>公开博文</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="mm-text">
          <i></i>
          <p>秘密博文</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="cg-text">
          <i></i>
          <p>草稿箱</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="sc-text">
          <i></i>
          <p>收藏夹</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="my_cz">
          <i></i>
          <p>收藏夹</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from '../plugins/axios.js'
  import * as types from '../store/types.js'
  export default {
    name:'user',
    props:{},
    data(){
      return {
        list:'',
      }
    },
	// beforeRouteEnter(to,from,next){
	//   axios({
	//     url:'/api/user'
	//   }).then(
	//     // res => res.data.err === 0 ? next(_this=>_this.user = res.data.data) : next('/login')
	//     res => {
	//       if(res.data.err === 0) {
	//         to.query.user = res.data.data
	//         next()
	//       }else{
	//         next('/login')
	//       }
	//     }
	//   )
	// },
    components:{},
    mounted(){
      axios({
        url:'/api/user',
        params:{_limit:1,_page:1}
      }).then(
      res => {
        if(res.data.err === 0) {
          this.list=res.data.data
            this.$route.query.user= res.data.data
            // this.$router.push('/home')
        }else{
            this.$router.push('/login')
        }
      })
    },
    updated(){},
    methods:{
      LoginOut(){
        window.localStorage.removeItem('user');
        this.$router.push('/login')
      }
    },
  }
</script>

<style scoped>
 body{ background:#f2f4f5;}

 .content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
 .content .header{width:6.4rem;height:2.84rem; background:#9e9a95; padding-top:0.4rem;}
 .header h2{width:1.02rem;height:1.02rem; border-radius:50%; margin:0 auto;}
 .header h2 img{width:100%;}
 .header .user-box{width:1.14rem; font-size:0.25rem; color:#fff; margin:0 auto; margin-top:0.2rem;}
 .user-box a{color:#fff;}
 .header ul{ margin-top:0.4rem;}
 .header ul li{width:50%;height:0.7rem; float:left; color:#fff;}
 .header ul li span{height:0.37rem; line-height:0.37rem; text-align:center; display:block; font-size:0.25rem;}
 .header ul li p{ text-align:center; font-size:0.3rem;height:0.32rem; line-height:0.32rem; border-right:1px solid #fff;}
 .header ul li p.end{ border:0;}

 .content .docList{width:6.4rem; margin:0 auto; margin-top:0.32rem;}
 .docList ul{ border-top:1px solid #7b7c7c;}
 .docList ul li{ background:#fff;height:0.79rem; border-top:1px solid #bcbbba; border-bottom:1px solid #7b7c7c;}
 .docList ul li span{ float:right;margin-right:0.14rem; margin-top:0.26rem;}
 .docList ul li b{width:0.21rem;height:0.24rem; background:url(../assets/img/next_img.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.34rem; margin-top:0.28rem;}


 .docList ul .gk-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/gk_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
 .gk-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
 .docList ul .mm-text i{width:0.29rem;height:0.35rem; background:url(../assets/img/mm_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.32rem; margin-top:0.24rem;}
 .mm-text p{ float:left; font-size:0.25rem;margin-left:0.35rem; margin-top:0.25rem;}
 .docList ul .cg-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/cg_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
 .cg-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
 .docList ul .sc-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/sc_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
 .sc-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
 .docList ul .my_cz{ margin-top:0.45rem;}
 .docList ul .my_cz i{width:0.37rem;height:0.37rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
 .my_cz p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}


 /* 底部导航*/
 /* .foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
 .foot-btn ul{width:4.08rem; margin:0 auto;}
 .foot-btn ul li{ float:left;}
 .foot-btn ul li a{ display:block; width:100%;height:100%;}
 .foot-btn ul .home{width:0.44rem;height:0.59rem; background:url(../img/home1.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
 .foot-btn ul .write{width:0.82rem;height:0.81rem; background:url(../img/write.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
 .foot-btn ul .my{width:0.39rem;height:0.63rem; background:url(../img/my1.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;} */



</style>
