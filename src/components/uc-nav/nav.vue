<template>
	<div class="nav" :style="{background: bgColor,'border-width': borderWidth + 'px'}">
		<ul>
			<li :class="arrow === 'gray' ? 'gray':'default'" @click="$router.go(-1)"></li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'uc-nav',
  props: {
	bgColor: {
	  type: String,
	  default: '#fff',
	},
	borderWidth: {
	  type: Number,
	  default: 1
	},
	arrow: {
	  type: String,
	  default: 'default'
	}
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
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #e8eaec;
  z-index: 99;
}
.nav ul {
  width: 6.4rem;
  height: 0.45rem;
  padding-top: 0.15rem;
  margin: 0 auto;
}
.nav ul li {
  width: 0.29rem;
  height: 0.31rem;
  background-size: 100%;
  margin: 0 0 0 0.38rem;
}
.nav ul li.gray {
  background: url(./img/history1.png) no-repeat 0 0;
  width: 0.29rem;
  height: 0.31rem;
  background-size: 100%;
  margin: 0 0 0 0.38rem;
}
.nav ul li.default {
  background: url(./img/history.png) no-repeat 0 0;
  width: 0.29rem;
  height: 0.31rem;
  background-size: 100%;
  margin: 0 0 0 0.38rem;
}
</style>
