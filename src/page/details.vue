<template>
    <div class="page-details">
        <el-row>
            <crumbs :type='detailData.type'/>
        </el-row>
        <el-row>
          <shop-title :detail='detailData' />
        </el-row>
        <el-row>
          <div class="content">
            <div class="main">
                <el-row>
                  <discount :dealItem='detailData.dealItems'/>
                </el-row>
                <el-row>
                  <recommend :recommend='detailData.recommend'/>
                </el-row>
                <el-row>
                  <comment :comment='detailData.comment' :total='detailData.commentNum'/>
                </el-row>
            </div>
            <div class="like">
                <fav />
            </div>
        </div>
        </el-row>
    </div>
</template>

<script>
import api from '@/api/index'
import crumbs from '@/components/products/crumbs'
import shopTitle from '@/components/details/title'
import discount from '@/components/details/discount'
import fav from '@/components/products/fav'
import recommend from '@/components/details/recommend'
import comment from '@/components/details/comment'
export default {
  data () {
      return {
          detailData: ''
      }
  },
  created () {
    api.getProductDetail()
      .then(res => {
        this.detailData = res.data.data
      })
  },
  components: {
      crumbs,
      shopTitle,
      discount,
      fav,
      recommend,
      comment
  }
}
</script>

<style lang="less">
  @import "../assets/css/details/index.less";
</style>