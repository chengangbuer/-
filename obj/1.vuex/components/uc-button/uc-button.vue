<template>
  <div class="uc-button">
    <button class="login-btn" :style="{ background: bgColor }" @click="$emit('click', $event)">
      <template v-if="text !== '按 钮'">
        {{ text }}
      </template>
      <slot v-if="text === '按 钮'">按 钮</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'uc-button',
  props: {
    text: {
      type: String,
      default: '按 钮'
    },
    bgColor: {
      type: String,
      default: '#4C4F50'
    }
  },
  data() {
    return {};
  },
  components: {},
  mounted() {},
  updated() {},
  methods: {}
};
</script>

<style scoped>
.uc-button {
}
.login-btn {
  width: 4.65rem;
  height: 0.65rem;
  background: #4c4f50;
  color: #fff;
  text-align: center;
  line-height: 0.65rem;
  border-radius: 8px;
  display: block;
  /* margin-top: 0.62rem; */
  font-size: 0.28rem;
  border:none;
  outline: none;
}
</style>
