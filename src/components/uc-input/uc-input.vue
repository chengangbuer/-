<template>
  <div class="uc-input">
    <input :type="type" :style="{'padding-left': label ? '1.24rem' : '.24rem'}" :value="value" @input="$emit('input',$event.target.value)" />
    <span v-if="label">{{label}}</span>
  </div>
</template>

<script>
export default {
  name: 'uc-input',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
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

<style>
.uc-input {
  border-bottom:1px solid #e5e7e8;
  position: relative;
  height: 0.95rem;
}
.uc-input input{
  padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;
}
.uc-input span{
  width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;
}
</style>
