<template>
  <div class="navbar">
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="item in items"><span>{{' ' + item.name + ' '}}</span></div>
      </div>
    </scroller>
  </div>
</template>
<script>
import { Scroller } from 'vux'
export default {
  name: 'navbar',
   components: {
    Scroller
  },
  data(){
    return{
      items:[
        {
        name:'关注',
        path:'/Hello/guanzhu',
        isActive:false
      },
       {
        name:'推荐',
        path:'/Hello/tuijian',
        isActive:false
      },
      {
        name:'推荐',
        path:'/Hello/视频',
        isActive:false
      },
      {
        name:'直播',
        path:'/Hello/',
        isActive:false
      },
      {
        name:'直播',
        path:'/Hello/',
        isActive:false
      },
      {
        name:'图片',
        path:'/Hello/',
        isActive:false
      },
       {
        name:'段子',
        path:'/Hello/',
        isActive:false
      },
      {
        name:'精华',
        path:'/Hello/',
        isActive:false
      },
      {
        name:'同城',
        path:'/Hello/',
        isActive:false
      },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 550px;
}
.box1-item {
  width: 61px;
  height: 60px;
  background-color: #dcd2d2;
  display:inline-block;
  float: left;
  text-align: center;
  line-height: 60px;
  color:#615757;
}



</style>
