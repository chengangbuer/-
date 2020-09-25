<template>
	<div id="app">
	  <h3 style="text-align: center;">input组件测试</h3>
	  <ucinput label="账 号" v-model="ipt"></ucinput>
	  <ucinput label="密 码" v-model="ipt2"></ucinput>
	</div>
</template>

<script>
import Ucinput from '../components/uc-input/input.vue'
export default {
	name: 'App',
	data(){
		return {
			ipt:'陈刚不二',
			ipt2:'123456',
		}
	},
	mounted(){
	},
	components: {
	    Ucinput,
	},
	methods:{
		show(ev){
		  console.log(ev)
		}
	}
}
</script>

<style>
</style>
