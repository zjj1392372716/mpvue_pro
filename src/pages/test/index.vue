<template>
  <div class="container">
    <div>计数结果：{{openId}}</div>
    <a href="/pages/test1/main" class="navlink">进入计数器页面</a>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState([
      'openId'
    ])
  },
  methods: {
    ...mapMutations({
      setOpenId: 'SET_OPEN_ID'
    })
  }
}
</script>

<style scoped>
.navlink {
  text-decoration: underline;
}
</style>
