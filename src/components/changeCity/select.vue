<template>
  <div :class="['choose', disabled?'disabled':'']" @click="showWrapperActives">
    <span>{{value}}</span>
    <i class="el-icon-caret-bottom"></i>
    <div :class="[{active: showWrapperActive}, 'content', className]" ref="content">
      <h2>{{title}}</h2>
      <div class="wrapper" v-for="(item, index) in renderList" :key="index" ref="wrapper">
        <span v-for="(v, i) in item" :key="v + '_' + i" @click="changeValue(v)" v-document-click="documentClick">{{v.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'list',
    'value',
    'title',
    'className',
    'showWrapperActive',
    'disabled'
  ],
  updated () {
    let width = this.$refs.wrapper[0].offsetWidth
    this.$refs.content.style.width = this.$refs.wrapper.length * width + 20 + 'px'
  },
  computed: {
    renderList: function () {
      let col = Math.ceil(this.list.length / 12)
      let renderList = []
      for (var i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12)
        renderList.push(data)
      }
      return renderList
    }
  },
  methods: {
    /*
    * 城市选择，触发事件，用户自己解决
    * */
    changeValue (item) {
      this.$emit('change', item)
    },

    /*
    * 向父组件传递，弹出子菜单
    * */
    showWrapperActives (e) {
      e.stopPropagation()
      if (!this.disabled) {
        this.$emit('change_active', true)
      }
    },
    /*
    * 向父组件传递，取消子菜单
    * */
    documentClick (e) {
      e.stopPropagation()
      this.$emit('change_active', false)
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/changeCity/select.less";
</style>
