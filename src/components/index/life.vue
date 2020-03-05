<template>
  <div class="m-life">
    <ul class="nav">
      <li>
        <router-link to="">美团外卖</router-link>
      </li>
      <li>
        <router-link to="">猫眼电影</router-link>
      </li>
      <li>
        <router-link to="">美团酒店</router-link>
      </li>
      <li>
        <router-link to="">民宿/公寓</router-link>
      </li>
      <li>
        <router-link to="">商家入驻</router-link>
      </li>
      <li>
        <router-link to="">美团公益</router-link>
      </li>
    </ul>
    <el-row class="slide">
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <i  v-if="$store.state.userName" class="el-icon-setting"></i>
          <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
          <p class="m-life-login-name">Hi！{{$store.state.userName ? $store.state.userName : '你好'}}</p>
          <p v-if="!$store.state.userName">
            <router-link :to="{name: 'register'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p v-if="!$store.state.userName">
            <router-link :to="{name: 'login'}">
              <el-button round>立即登录</el-button>
            </router-link>
          </p>
          <p v-else class="mine">
            <router-link to='/'>
              <i class="el-icon-s-home" />
              <span>我的订单</span>
            </router-link>
            <router-link to='/'>
              <i class="el-icon-star-on" />
              <span>我的收藏</span>
            </router-link>
            <router-link to='/'>
              <i class="el-icon-s-ticket" />
              <span>抵用券</span>
            </router-link>
            <router-link to='/'>
              <i class="el-icon-s-home" />
              <span>余额</span>
            </router-link>
            <router-link to='/'>
              <i class="el-icon-more" />
              <span>更多</span>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row class="poster">
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-learn"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-business"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
          <p>美团APP手机版</p>
          <p class="last-p">
            <span class="red">
                1元起
            </span>
            吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Slider from './slider'
export default {
  components: {
    Slider
  }
}
</script>
<style lang="less">
  @import "../../assets/css/index/life.less";
</style>
