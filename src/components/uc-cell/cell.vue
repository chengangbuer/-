<template>
  <div class="uc-cell">
    <div @click="toDetail">
      <h2><span v-show="index != null">{{index + 1}}.</span>{{data.title}}</h2>
      <p>{{data.des}}</p>
      <a class="cell__anchor" v-if="isAdd" href="javascript:;" @click.stop="$emit('add-item',$event)">+</a>
    </div>
  </div>
</template>

<script>
export default{
	name:'uc-cell',
	props:{
		data:{//{_id:xx,title:xx,des:xx}
		  type:Object,
		  required:true
		},
		collectionName:{
		  type:String,
		  default:null
		},
		index:{
		  type:Number,
		  default:null
		},
		isAdd:{
		  type:Boolean,
		  default:false
		},
	},
	components:{},
	mounted(){},
	updated(){},
	methods:{
		toDetail(){
			if(this.collectionName){
			    this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
			}
		}
	}
}
</script>

<style>
.uc-cell{position: relative;}
.uc-cell:active {background: #ccc;}
.uc-cell div { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.uc-cell div h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.uc-cell div p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
.cell__anchor{position:absolute;right:0.3rem;top:0.4rem;}
</style>
