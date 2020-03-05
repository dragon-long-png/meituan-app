<template>
  <div class="m-product-category">
    <div class="filter-section-wrapper">
      <dl class="classic">
        <dt>分类</dt>
        <dt>全部</dt>
        <dd v-for="item in classicList" :key="item.type">
          <m-select :name="item.title" :list="item.subList"/>
        </dd>
      </dl>
      <dl class="classic">
        <dt>区域</dt>
        <dt>全部</dt>
        <dd v-for="item in areaList" :key="item.type">
          <m-select :name="item.title" :list="item.subList"/>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import MSelect from './select'
import api from '@/api/index'
export default {
  data () {
    return {
      classicList: [],
      areaList: []
    }
  },
  created () {
    api.getclassify()
      .then(res => {
        this.classicList = res.data.data
      })
    api.getAreaList()
      .then(res => {
        res.data += ']}'
        let result = JSON.parse(res.data)
        this.areaList = result.data
      })
  },
  components: {
    MSelect
  }
}
</script>

<style lang="less">
  @import "../../assets/css/products/category.less";
</style>
