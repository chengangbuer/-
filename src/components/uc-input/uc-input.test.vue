<template>
  <div id="app">
    
    <h3>测试输入框</h3>
    
    <UcInput />
    <uc-input v-model="ipt" label="账 号"></uc-input>
    <uc-input v-model="ipt2" type="password" label="密 码"></uc-input>
    
    
  </div>
</template>

<script>
import UcInput from '../components/uc-input'
export default {
  name: 'App',
  data(){
    return {
      ipt:'bmw',
      ipt2:'k5',
    }
  },
  components: {
    UcInput
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
