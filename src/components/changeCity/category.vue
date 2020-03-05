<template>
  <div>
    <dl class="m-category">
      <dt class="name">按拼音首字母选择：</dt>
      <dd v-for="item in list" :key="item">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl v-for="(item, index) in cityGroup" :key="'city_' + index" :id="'city-'+ index" class="m-categroy-section">
      <dt>{{index}}</dt>
      <dd v-for="i in item" :key='i.name' @click="pinyinGo(i)">{{i.name}}</dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityGroup: {}
    }
  },
  created () {
    api.getCityList()
      .then(res => {
        let tempObj = {}
        res.data.data.forEach((item, index) => {
          if (!tempObj[item.firstChar.toUpperCase()]) {
            tempObj[item.firstChar.toUpperCase()] = []
          }
          tempObj[item.firstChar.toUpperCase()].push(item)
        })
        this.cityGroup = tempObj
      })
  },
  methods: {
    /**
     * 点击按拼音跳转，传参，放入vuex，页面跳转到首页
     */
    pinyinGo (e) {
      this.$store.dispatch('setPosition', e)
      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/changeCity/category.less";
</style>
