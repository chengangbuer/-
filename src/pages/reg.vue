<template>
  <div class="content">
  <uc-nav bg-color="transparent" :border-width="0" arrow="gray"></uc-nav>
    <h1></h1>
    <div class="login-box">
      <p class="lsolid"></p>
      <div class="login">
        <router-link to="/Login"> <a href="javascrpt:;">登录</a></router-link>
		<span></span>
        <router-link to="/Reg"> <a href="javascrpt:;">注册</a></router-link>
      </div>
      <p class="rsolid"></p>
    </div>
    <ul>
    <uc-input label="账 号" v-model="username"></uc-input>
    <uc-input label="密 码" type="password" v-model="password"></uc-input>
    </ul>
    <div class="footbox">
       <uc-button @Click="reg" text="注 册" bg-color="#399" style="margin-top: 0.23rem"></uc-button>
      <a href="javascript:;" class="tishi">忘记密码？</a>
    </div>
  </div>
</template>

<script>
	import UcNav from '../components/uc-nav/nav.vue'
	import UcInput from '../components/uc-input/input.vue'
	import UcButton from '../components/uc-button/button.vue'
  export default {
    name:'reg',
    props:{},
    data(){
      return {
        username:'',
        password:''
      }
    },
    components:{UcNav,UcInput,UcButton},
    mounted(){},
    updated(){},
    methods:{
		reg(){
		  this.$axios({
		    url:'/api/reg',
		    method:'post',
		    data:{
		      username:this.username,
		      password:this.password
		    }
		  }).then(
		    res => {
		      if(res.data.err===0){
		        //种local  跳转到之前
		        this.$router.push('/login')
		      }else{
		       alert(res.data.msg)
		      }
		    }
		  )
		}
	}
  }
</script>

<style scoped>
  body{ background:#f2f4f5;}
  .content{max-width:6.4rem; margin:0 auto;}
  .content .fhbtn{ padding-top:0.27rem;}
  .content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
  .content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
  .content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
  .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
  .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
  .content .login-box{ position:relative;}
  .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
  .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
  .content ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
  .content ul li{height:0.95rem; position:relative;}
  .content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
  .content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
  .content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
  .content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
  .content .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
  .content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
