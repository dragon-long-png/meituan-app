<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>{{$store.state.position.name}}美团</el-breadcrumb-item>
    <el-breadcrumb-item v-if="type">{{$store.state.position.name}}{{type}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{$store.state.position.name}}{{$store.state.searchVal}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: [
    'type'
  ]
}
</script>

<style lang="less">
  @import "../../assets/css/products/crumbs.less";
</style>
