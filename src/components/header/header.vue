<template>
    <div class="m-head">
        <el-row class="m-nav">
            <m-top />
        </el-row>
        <el-row class="m-search">
            <m-search />
        </el-row>
    </div>
</template>

<script>
import MTop from './top'
import MSearch from './search'
export default {
  components: {
    MTop,
    MSearch
  }
}
</script>

<style lang="less">
    @import '../../assets/css/header/index.less';
</style>
