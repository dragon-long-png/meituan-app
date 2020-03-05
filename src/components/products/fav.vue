<template>
  <div class="m-fav">
    <h3>猜你喜欢</h3>
    <likes v-for="item in favoriteList" :key="item.itemId" :meta='item'/>
  </div>
</template>
<script>
import likes from './likes'
import api from '@/api/index'
export default {
  data () {
    return {
      favoriteList: []
    }
  },
  components: {
    likes
  },
  created () {
    api.getRecommendList()
      .then(res => {
        this.favoriteList = res.data.data.map(ele => {
          ele.score = +ele.score
          return ele
        })
      })
  }
}
</script>
<style lang="less">
  @import "../../assets/css/products/fav.less";
</style>
