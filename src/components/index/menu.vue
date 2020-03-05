<template>
  <div class="m-menu">
    <dl class="all" @mouseleave="menuLeave">
      <dt class="nav-title">全部分类</dt>
      <dd v-for="item in menuList" :key="item.type" @mouseenter="menuEnter(item)">
        <i :class="item.type"/>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item, index) in curDetail.items">
        <el-row class="tit" :key="item.title">
          <h4>{{item.title}}</h4>
          <span class="more">更多</span>
        </el-row>
        <el-row class="cont" :key="item.title + '_' + index">
          <span class="detail-text" v-for="(v, i) in item.items" :key="v + '_' + i">{{v}}</span>
        </el-row>
      </template>
    </div>
  </div>
</template>
<script>
import api from '@/api/index'
export default {
  data () {
    return {
      menuList: [],
      curDetail: null,
      timer: null
    }
  },
  created () {
    /*
       * 获取左侧菜单
       * */
    api.getMenuList()
      .then(res => {
        this.menuList = res.data.data
      })
  },
  methods: {
    /*
       * 鼠标移入菜单，子菜单出现
       * */
    menuEnter (item) {
      this.curDetail = item
    },
    /*
      * 鼠标离开左侧菜单，删除子菜单
      * */
    menuLeave () {
      const self = this
      this.timer = setTimeout(function () {
        self.curDetail = null
      }, 200)
    },
    /*
      * 鼠标移入子菜单，继续展示子菜单内容
      * */
    detailEnter () {
      clearTimeout(this.timer)
    },
    /*
      * 鼠标移出子菜单，删除子菜单
      * */
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>
<style lang="less">
  @import "../../assets/css/index/menu.less";
</style>
