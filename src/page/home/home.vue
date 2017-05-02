<template>
  <div >
    <navbar></navbar>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Group,
    Cell,
    'navbar':Navbar,
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
