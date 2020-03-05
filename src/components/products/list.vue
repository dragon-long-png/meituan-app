<template>
  <div class="m-products-list">
      <ul>
        <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
      </ul>
      <el-row>
        <item v-for="(item, index) in products" :key="index" :meta='item' />
      </el-row>
  </div>
</template>

<script>
import item from './item'
import api from '@/api/index'
export default {
  data () {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true
        },
        {
          key: 's-price',
          name: '价格最低',
          active: false
        },
        {
          key: 's-score',
          name: '人气最高',
          active: false
        },
        {
          key: 's-comment',
          name: '评价最高',
          active: false
        }
      ],
      products: []
    }
  },
  created () {
    api.getProductsList()
      .then(res => {
        this.products = res.data.data
      })
  },
  components: {
    item
  }
}
</script>

<style lang="less">
  @import "../../assets/css/products/list.less";
</style>
