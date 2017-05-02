<template>
  <div class="me">
   <x-header>我的.</x-header>
    <div class="center">
        <img  src="../assets/logo.png" style="max-width:100%">
        <p class="login_btn">
           <router-link to="/login" >登录</router-link>
        </p>
        <button @click="doSubmit">登录</button>
    </div>  
    <group>
       <cell  v-for="(item,index) in MeList" :title="item.name" is-link :link="item.linkUrl" key="index">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/logo.png" >
      </cell>
    </group>
    <router-view></router-view>
  </div>
  
</template>

<script>
import Login from '../page/login.vue'
import { XDialog,  Group,  XHeader,Cell, CellFormPreview, XInput,TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  name:"me",
  components: {
    XDialog,
    Group,
   
    XHeader,
   
    Cell,
    XInput,
  },
  data () {
    return {
      show: false,
      MeList:[{
        name:'段友圈',
        imgurl:'',
        linkUrl:'/home'
      },
      {
        name:'投稿',
        imgurl:'',
        linkUrl:'/home'
      },
      {
        name:'评论',
        imgurl:'',
        linkUrl:'/home'
      },
      {
        name:'收藏',
        imgurl:'',
        linkUrl:'/home'
      },
      {
        name:'反馈意见',
        imgurl:'',
        linkUrl:'/home'
      }],
    }
  },
  methods:{
    doLogin(){
      this.show = !this.show;
      console.log(this.show);
      this.router.push({ path: 'home' })
    },
    doSubmit(){
      console.log('----')
      this.$router.push(Login)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
@import '~vux/src/styles/close';
.me{
  .vux-no-group-title{
    margin-top:0 !important;
  }
  .center{
    text-align:center;
    padding-bottom:20px;
    img{
      width:30%;
      border-radius:50%;
      background-color:darkgrey;
    }
    .login_btn{
      width:30%;
      background-color:#ce3737;
      text-align:center;
      margin:0 auto;
      a{
        color:white;
      }
    }
  }
}

</style>

