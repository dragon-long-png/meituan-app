<template>
  <div class="m-like-item">
    <img src="http://p1.meituan.net/bbia/290717865d61b07cffbd1f35473f619a138930.jpg@190w_106h_1e_1c" alt="">
    <p class="tit">{{meta.title}}</p>
    <div class="comment">
      <el-rate v-model="meta.score" disabled></el-rate>
      <span>{{meta.commentNum}}个评价</span>
    </div>
    <p class="address">{{meta.areaName}}</p>
    <p class="price">
      <span class="yuan">￥</span>
      <span class="numfont">{{meta.lowPrice}}</span>
      <span class="desc">起</span>
    </p>
  </div>
</template>

<script>
export default {
  props: [
    'meta'
  ]
}
</script>
