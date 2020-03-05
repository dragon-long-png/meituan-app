<template>
    <div class="m-geo">
        <div class="m-position">
            <i class="el-icon-location icon"></i>
           <span>{{$store.state.position.name}}</span>
            <router-link to="/changeCity" class="city">切换城市</router-link>
            [<router-link to='' class="mouse-hover" v-for="item in nearCity" :key="item.pinyin">{{item.name}}</router-link>]
        </div>
        <div class="m-user">
            <router-link to="/" class="login" v-if="$store.state.userName">{{$store.state.userName}}</router-link>
            <router-link :to="{name: 'login'}" class="login" v-else>立即登录</router-link>
            <router-link to='' class="register" v-if="$store.state.userName" @click.native="exitChange">退出</router-link>
            <router-link :to="{name: 'register'}" class="register" v-else>注册</router-link>
        </div>
    </div>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return {
      nearCity: []
    }
  },
  created () {
    api.getCurPosition()
      .then(res => {
        this.$store.dispatch('setPosition', res.data.data)
        this.nearCity = res.data.data.nearCity
      })
  },
  methods: {
    /**
     * 退出登录
     */
    exitChange () {
      this.$store.commit('setUserName', '')
    }
  }
}
</script>
