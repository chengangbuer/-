<template>
	<div id="app">
	  <h3>cell组件测试</h3>
	  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}" :index="0" collectionName="detail"></uc-cell>
	  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}" :index="1"></uc-cell>
	  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}" isAdd @add-item="show" :index="2"></uc-cell>
	  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}" collectionName="detail" isAdd @add-item="show" :index="3"></uc-cell>
	</div>
</template>

<script>
import UcCell from '../components/uc-cell/cell.vue'
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
	    UcCell,
	},
	methods:{
	    show(ev){
	      console.log(ev);
	    }
	}
}
</script>

<style>
</style>
