<template>
  <div class="container btns">
    <button class="calbtn" @click="hanleDecrement">-</button>
    <span class="calnum">{{count}}</span>
    <button class="calbtn" @click="hanleIncrement">+</button>
  </div>
</template>

<script>
// import globalStore from '../../store/store'
export default {
  computed: {
    count () {
      return 0
    }
  },
  methods: {
    hanleIncrement () {
      // globalStore.commit('increment')
    },
    hanleDecrement () {
      // globalStore.commit('decrement')
    }
  }
}
</script>

<style scoped>
.btns {
  display: flex;
  align-items: center;
}
.calnum {
  color: red;
  font-size: 32px;
}
</style>
