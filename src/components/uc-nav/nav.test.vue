<template>
	<div id="app">
		<h3 style="text-align: center;margin-top: 100px;">测试导航</h3>
		<!-- <UcNav></UcNav> -->
		<!-- <uc-nav></uc-nav> -->
		<uc-nav bg-color="transparent" :border-width="0" arrow="gray"></uc-nav>
		<!-- <uc-nav bg-color="transparent" :border-width="0" arrow=""></uc-nav> -->
	</div>
</template>

<script>
import UcNav from '../components/uc-nav/nav.vue'
export default {
	name: 'App',
	data(){
		return {
		}
	},
	mounted(){
	},
	components: {
	    UcNav,
	},
	methods:{
		
	}
}
</script>

<style>
</style>
