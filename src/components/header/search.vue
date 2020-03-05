<template>
    <el-row class="search-container">
        <el-col :span="7">
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt />
        </el-col>
        <el-col :span="10" class="ipt">
            <el-input v-model="searchWorld" placeholder="请输入内容" @blur="blurFocus" @focus="getFocus" @input="input"></el-input>
            <el-button type="primary" icon="el-icon-search" @click="btnSearch"></el-button>
            <div class="hot-search" v-if="isHotPlace">
                <div class="history-search" v-if="historySearch">
                    <h6>最近搜索</h6>
                    <span @click="deleteHistory">删除搜索历史</span>
                    <ul class="history">
                        <li v-for="(item, index) in historySearch" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}" class="mouse-hover" @click.native="quickSearch(item)">{{item}}</router-link>
                        </li>
                    </ul>
                </div>
                <h6>热门搜索</h6>
                <div class="hot-search-world">
                  <router-link :to="{name: 'goods', params: {name: item}}" class="mouse-hover" v-for="(item, index) in hotSearchWorld" @click.native="quickSearch(item)" :key="item + '_'+ index">{{item}}</router-link>
                </div>
            </div>
            <dl class="searchList" v-if="isSearchList">
              <dd v-for="(item, index) in searchList" :key="index">
                <router-link :to="{name: 'goods', params: {name: item}}" @click.native="searchValList(item)">{{item}}</router-link>
              </dd>
            </dl>
        </el-col>
    </el-row>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return {
      searchWorld: '',
      historySearch: [],
      isFocus: false,
      hotSearchWorld: [],
      searchList: []
    }
  },
  created () {
    /*
    * 热门推荐，接口
    * */
    api.searchHotWords()
      .then(res => {
        this.hotSearchWorld = res.data.data
      })
  },
  computed: {
    isHotPlace () {
      return !this.searchWorld && this.isFocus
    },
    isSearchList () {
      return this.searchWorld && this.isFocus
    }
  },
  methods: {
    /**
     * 设置缓存，先存再取，JSON.stringfy()  JSON.parse()
     */
    setLocalStorage (val) {
      let tempArr = JSON.parse(localStorage.getItem('history') || '[]')
      tempArr.push(val)
      localStorage.setItem('history', JSON.stringify(tempArr))
      this.historySearch = Array.from(new Set(tempArr))
    },
    /*
    * 获取焦点，弹框显示
    * */
    getFocus () {
      this.isFocus = true
      this.historySearch = Array.from(new Set(JSON.parse(localStorage.getItem('history') || '[]')))
    },
    /*
    * 失去焦点，弹框消失
    * */
    blurFocus () {
      const self = this
      setTimeout(() => {
        self.isFocus = false
      }, 200)
    },
    /*
    * 通过点击热门推荐，达到搜索的目的，将其内容添加至历史搜索
    * */
    quickSearch (item) {
      this.setLocalStorage(item)
    },
    /**
     * 通过接口联调之后，获得的搜索框列表数据，然后将input值先统一，然后再进行跳转
     * */
    searchValList (val) {
      this.searchWorld = val
      this.setLocalStorage(val)
    },
    /*
    * 通过button按钮进行商品搜索,  页面进行跳转， 将value值添加至历史搜索
    * */
    btnSearch () {
      this.setLocalStorage(this.searchWorld)
    },
    /*
    * 对历史记录进行删除
    * */
    deleteHistory () {
      localStorage.removeItem('history')
      this.historySearch = []
    },
    /*
    * 键盘输入
    * */
    input () {
      let val = this.searchWorld
      api.getSearchList().then(res => {
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1
        })
      })
    }
  }
}
</script>
