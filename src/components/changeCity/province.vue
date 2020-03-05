<template>
  <div class="province">
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      :value="province"
      title="省份"
      className="pro"
      @change="changeProvince"
      @change_active="changeProvinceActive"
      :showWrapperActive="provinceActive"
    />
    <m-select
      :list="cityList"
      :value="city"
      title="城市"
      className="city"
      :disabled="cityDisabled"
      @change="changeCity"
      @change_active="changeCityActive"
      :showWrapperActive="cityActive"
    />
    <span class="name search">直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from './select'
import api from '@/api/index'
export default {
  data () {
    return {
      province: '省份',
      city: '城市',
      provinceList: [],
      cityList: [],
      searchList: [],
      searchWord: '',
      cityDisabled: true,
      provinceActive: false,
      cityActive: false
    }
  },
  created () {
    api.getProvinceList()
      .then(res => {
        this.provinceList = res.data.data.map(ele => {
          ele.name = ele.provinceName
          return ele
        })
      })
    api.getCityList()
      .then(res => {
        this.searchList = res.data.data.map(ele => {
          return ele.name
        })
      })
  },
  components: {
    MSelect
  },
  methods: {
    /*
    * 省份改变,
    * 城市列表进行渲染
    * 取消禁用城市列表
    * */
    changeProvince (item) {
      this.province = item.name
      this.cityDisabled = false
      this.cityList = item.cityInfoList
    },
    /**
     * 城市已经选择，存储至vuex，页面跳转到首页
     */
    changeCity (item) {
      this.city = item.name
      this.$store.dispatch('setPosition', item)
      this.$router.push({name: 'index'})
    },
    /*
    * 省份子菜单
    * */
    changeProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    /*
    * 城市子菜单
    * */
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    }
  }
}
</script>
