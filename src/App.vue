<template>
  <div id="app">
    <router-view></router-view>
    <foo></foo>
  </div>
  
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components:{
    'foo':Footer
  }
}
</script>

<style lang="less">
 @import '~vux/src/styles/reset.less';
 @import '../src/styles/font.scss';
 .footer{
    position: fixed;
    width: 100%;
    bottom: 0;
 }
</style>
