<template>
  <div>
    <dl class="m-city-hot">
      <dt class="name">{{title}}</dt>
      <dd v-for="item in list" :key="item">{{item}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['title', 'list']
}
</script>

<style lang="less">
  @import "../../assets/css/changeCity/hot.less";
</style>
