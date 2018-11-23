<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
    <!-- 使用 click-counter 组件 -->
    <click-counter :init-num="10" @clickNum="handleClickNum" />
    <a href="/pages/test/main" class="navlink">测试vuex</a>
  </div>
</template>

<script>
  // 导入 click-counter 组件
  import ClickCounter from '@/components/click-count'
  import { testpost } from '@/http/api.js'
  export default {
    // 声明在当前组件下使用 counter-click 组件
    components: { ClickCounter },
    created () {
      console.log('-------')
      // index().then((res) => {
      //   console.log(res)
      // })
      testpost({
        name: 'zjj'
      }).then((res) => {
        console.log(res)
      })
    },
    data () {
      return {
        msg: 'Hello'
      }
    },

    methods: {
      clickHandle () {
        this.msg = 'zjj'
      },
      handleClickNum (data) {
        console.log(data.num)
      }
    }
  }
</script>

<style scoped>
  .message {
    color: red;
    padding: 10px;
    text-align: center;
  }
</style>
