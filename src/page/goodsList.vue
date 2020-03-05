<template>
  <div class="m-page-product">
    <el-row>
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <category />
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span="5" class="right-content">
        <el-row>
          <m-map />
        </el-row>
        <el-row>
          <m-fav />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from '@/components/products/crumbs'
import category from '@/components/products/category'
import list from '@/components/products/list'
import MMap from '@/components/products/map'
import MFav from '@/components/products/fav'
export default {
  components: {
    crumbs,
    category,
    list,
    MMap,
    MFav
  },
  created () {
    this.$store.commit('setSearchVal', this.$route.params.name)
  }
}
</script>

<style lang="less">
  @import "../assets/css/products/index.less";
</style>
