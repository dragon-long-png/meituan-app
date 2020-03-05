import axios from '@/axios.js'

const api = {
  searchHotWords () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getHotCityList () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getSearchCityList () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getclassify () {
    return axios.get('/api/meituan/list/classify.json')
  },
  getAreaList () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getRecommendList () {
    return axios.get('/api/meituan/list/recommend.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  },
  getProductDetail () {
    return axios.get('/api/meituan/product/detail.json')
  }
}

export default api
