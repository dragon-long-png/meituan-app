<template>
    <el-row class="nav-container">
        <el-col :span="16">
            <m-geo />
        </el-col>
        <el-col :span="8">
            <m-nav />
        </el-col>
    </el-row>
</template>

<script>
import MGeo from './geo'
import MNav from './nav'
export default {
  components: {
    MGeo,
    MNav
  }
}
</script>
