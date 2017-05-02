<template>
  <div class="footer">
  <!--  <grid :rows="4">
      <grid-item :link="item.path"  v-for="(item, index) in footlist" v-bind:key="item.title" :class="{'active': item.isActive }" @on-item-click="doPath(index)">
        <span :class="item.imgUrl"></span>
        <p >{{item.title}}</p>
      </grid-item>
    </grid>
    !-->
    <tabbar>
      <tabbar-item :link="item.path"  v-for="(item, index) in footlist" v-bind:key="item.title" >
        <span slot="label" :class="item.imgUrl"> {{item.title}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  name: 'footer',
  data () {
    return {
      footlist:[{
          title:'首页',
          imgUrl:'i-zhuye42un',
          path:'/home',
          isActive:true,
      },
      {
          title:'发现',
          imgUrl:'i-youhui42un',
          path:'/find',
          isActive:false
      },
      {
          title:'消息',
          imgUrl:'i-zhoubian42un',
          path:'/message',
          isActive:false
      },
      {
          title:'我的',
          imgUrl:'i-wode42un',
          path:'/me',
          isActive:false
      }]
    }
  },
  methods:{
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-grid{
  text-align:center;
   padding:0;
}
.active{
  color:red;
}

</style>
