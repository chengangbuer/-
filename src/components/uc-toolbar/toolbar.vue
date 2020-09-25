<template>
	<div class="foot-btn">
	      <ul>
			<li class="say">
				<a href="javascript:;">
					<i></i><span>0</span>
				</a>
			</li>
	        <li class="zan">
			    <a href="javascript:;">
					<i></i><span>0</span>
				</a>
			</li>
	        <li class="xing">
			    <a href="javascript:;">
					<i><img src="./img/xing.png" alt=""/></i>
				</a>
			</li>
	        <li class="fx">
			    <a href="javascript:;">
					<i><img src="./img/fx.png" alt=""/></i>
				</a>
			</li>
	      </ul>
	    </div>
</template>

<script>
export default {
  name:'toolbar',
  props: {
  
  },
  data() {
    return {
	};
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {}
};
</script>

<style scoped>
.foot-btn{width:100%;height:0.8rem; background:#fff; border-top:1px solid #e8eaec; position:fixed; left:0;bottom:0;}
.foot-btn ul{width:6.4rem; margin:0 auto;height:0.52rem; margin-top:0.16rem;}
.foot-btn ul li{ float:left;}
.foot-btn ul li a{width:100%;height:100%; display:block;}
.foot-btn ul .say{width:2.03rem;height:0.52rem; border-right:1px solid #e8eaec;}
.say i{width:0.36rem;height:0.26rem; background:url(./img/say.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.7rem; margin-top:0.13rem;}
.say span{height:0.26rem; float:left; line-height:0.26rem; margin-left:0.16rem; margin-top:0.13rem;}
.foot-btn ul .zan{width:1.86rem;height:0.52rem; border-right:1px solid #e8eaec;}
.zan i{width:0.36rem;height:0.28rem; background:url(./img/zan1.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.54rem; margin-top:0.13rem;}
.zan span{height:0.26rem; float:left; line-height:0.26rem; margin-left:0.16rem; margin-top:0.13rem;}
.foot-btn ul .xing{width:1.2rem;height:0.52rem; border-right:1px solid #e8eaec;}
.xing i{width:0.34rem;height:0.24rem; margin:0 auto; display:block; padding-top:0.1rem;}
.xing i img{width:100%;}
.foot-btn ul .fx{width:1.25rem;height:0.52rem;}
.fx i{width:0.33rem;height:0.08rem;display:block; margin:0 auto; padding-top:0.15rem;}
.fx i img{width:100%;}
</style>
