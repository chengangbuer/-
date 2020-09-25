<template>
	<div id="app">
		<h3 style="text-align: center;">测试banner</h3>
		<banner :data="list" collectionName="detail"/>
	</div>
</template>

<script>
import banner from '../components/banner/banner2.vue'
export default {
	name: 'App',
	data(){
		return {
			list:[]
		}
	},
	mounted(){
		setTimeout(()=>{
		  this.list=[
		    {_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
		    {_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
		    {_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
		    {_id:4,image:'/images/img_1.jpg',title:'xxx4',sub_title:'xxxx2'},
		  ];
		},1000)
	},
	components: {
		banner,
	},
	methods:{
		
	}
}
</script>

<style>
</style>

