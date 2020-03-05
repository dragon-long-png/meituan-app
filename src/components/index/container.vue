<template>
  <div class="m-article">
    <dl class="menu" :class="nav.class">
      <dt>{{ nav.title}}</dt>
      <dd v-for="item in nav.list"
          @mouseover="changeActive"
          :key="item.tab"
          :data-type="item.tab"
          :class="{active: kinds === item.tab}"
      >
        {{item.text}}
      </dd>
    </dl>
    <ul class="content">
      <li v-for="(item, index) in resultData[kinds]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="c-body">
            <div class="title">{{item.title}}</div>
            <div class="sub-title">{{item.subTitle}}</div>
            <div class="price-info">
              <div class="price-info-left">
                <span class="now-price">￥</span>
                <span class="now-price-number">{{item.price}}</span>
                <span class="before-price">门市价¥158</span>
              </div>
              <div class="price-info-right">
                <span class="address">{{item.address}}</span>
              </div>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  props: ['nav'],
  data () {
    return {
      kinds: 'all',
      resultData: {}
    }
  },
  created () {
    /*
    * 数据获取
    * */
    api.resultsByKeywords()
      .then(res => {
        this.resultData = res.data.data
      })
  },
  methods: {
    /*
      * 选项卡切换
      * */
    changeActive (e) {
      let dom = e.target
      this.kinds = dom.getAttribute('data-type')
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/index/container.less";
</style>
