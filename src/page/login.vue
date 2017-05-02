<template>
  <div class="login">
    <group title="用户登录">
        <x-input title="用户名" placeholder="输入用户名" ></x-input>
        <x-input title='密码' type="password" placeholder="输入密码"></x-input>
    </group>
    <x-button type="primary" @click.native="processButton001">登录</x-button>
  </div>
</template>
<script>
import { XInput, Group, XButton } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    Group,
  },
  data () {
    return {
    }
  },
  methods: {
   processButton001(){
      console.log('----')
   }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.login{
    .weui-cells__title{
        color:green;
        font-size:20px;
        text-align:center
    }
    button{
      width:80% !important;
      margin-top:20px;
    }
}
 
</style>