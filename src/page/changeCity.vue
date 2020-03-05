<template>
  <div class="m-page-city">
    <div class="cont">
      <el-row>
        <province />
      </el-row>
      <el-row>
        <hot title="热门城市：" :list="hotList"/>
      </el-row>
      <el-row>
        <hot title="最近访问：" :list="searchList"/>
      </el-row>
      <el-row>
        <category />
      </el-row>
    </div>
  </div>
</template>

<script>
import province from '@/components/changeCity/province'
import hot from '@/components/changeCity/hot'
import category from '@/components/changeCity/category'
import api from '@/api/index'
export default {
  data () {
    return {
      hotList: [],
      searchList: []
    }
  },
  created () {
    /*
    * 获取热门城市
    * */
    api.getHotCityList()
      .then(res => {
        this.hotList = res.data.data.map(ele => {
          return ele.name
        })
      })
    /*
    * 获取最近搜索城市
    * */
    api.getSearchCityList()
      .then(res => {
        this.searchList = res.data.data.map(ele => {
          return ele.name
        })
      })
  },
  components: {
    province,
    hot,
    category
  }
}
</script>

<style lang="less">
  @import "../assets/css/changeCity/index.less";
</style>
