<template>
  <div class="m-login">
    <header class="login-header">
      <a href="http://www.meituan.com" class="logo">美团网</a>
    </header>
    <div class="login-panel">
      <div class="banner">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{error}}</h4>
        <p class="login">
          <span>账号登录</span>
          <span v-if="!isDynamic">
            手机动态码登录
             <i class="el-icon-mobile"></i>
          </span>
          <span v-else>
            普通方式登录
            <i class="el-icon-user-solid"></i>
          </span>
        </p>
        <el-input :class="{error: error && !userName}"  v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="el-icon-user"></el-input>
        <el-input :class="{error: error && !password}" v-model="password" type="password" placeholder="密码"  prefix-icon="el-icon-lock"></el-input>
        <div class="foot">
          <a href="#">忘记密码?</a>
        </div>
        <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
          <div class="oauth cf">
            <a class="oauth__link oauth__link--qq" href="/account/connect/tencent" data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}" target="_blank"></a>
            <a class="oauth__link oauth__link--weibo" href="/account/connect/sina" data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>
            ©<span>2020</span>
            <a href="https://www.meituan.com">美团网团购</a>
            meituan.com
            <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
            京公网安备11010502025545号
        </p>
    </footer>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return {
      userName: '',
      password: '',
      isDynamic: false,
      error: ''
    }
  },
  methods: {
    submit () {
      if (!this.userName) {
        this.error = '请输入用户名'
        return false
      } else if (!this.password) {
        this.error = '请输入密码'
        return false
      }
      api.login({
        params: {
          userName: this.userName,
          password: this.password
        }
      }).then(res => {
        if (res.data.status === 'success') {
          this.$router.push({name: 'index'})
          this.$store.commit('setUserName', this.userName)
        } else {
          this.error = res.data.msg
        }
      })
    }
  }
}
</script>

<style lang="less">
  @import "../assets/css/login/index.less";
</style>
