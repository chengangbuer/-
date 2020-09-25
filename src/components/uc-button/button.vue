<template>
	<button class="login-btn" :style="{background:bgColor}" @click="$emit('Click', $event)">
		<template v-if="text !== '按 钮'">
			{{text}}
		</template>
		<slot v-if="text === '按 钮'">按 钮</slot>
	</button>
</template>

<script>
export default {
  name: 'uc-button',
  props:{
	  text:{
		  type:String,
		   default: '按 钮'
	  },
	  bgColor: {
	    type: String,
	    default: 'green'
	  }
  },
  data() {
    return {};
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {
  }
};
</script>

<style scoped>
.login-btn {
  width: 4.65rem;
  height: 0.65rem;
  background: #4c4f50;
  color: #fff;
  text-align: center;
  line-height: 0.65rem;
  border-radius: 8px;
  display: block;
  font-size: 0.28rem;
  border:none;
  outline: none;
}
</style>
