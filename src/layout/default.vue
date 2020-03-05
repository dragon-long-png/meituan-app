<template>
  <el-container class="m-page-default">
      <el-header height="">
          <m-header />
      </el-header>
      <el-main height="">
        <router-view />
      </el-main>
      <el-footer height="">
        <m-footer />
      </el-footer>
  </el-container>
</template>

<script>
import MHeader from '@/components/header/header'
import MFooter from '@/components/footer/index'
export default {
  components: {
    MHeader,
    MFooter
  }
}
</script>

<style lang="less">
    @import '../assets/css/default/default.less';
</style>
