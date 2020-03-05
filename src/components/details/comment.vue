<template>
    <div class="comment">
        <div class="total">
            <div class="tit">
                {{total}}条网友点评
            </div>
            <div class="sort">
                <span class="active">质量排序</span>
                <span>时间排序</span>
            </div>
        </div>

        <div class="com-cont">
            <div class="list" v-for="(item, index) in comment" :key="index">
                <div class="header">
                    <img :src="item.image" alt="">
                </div>
                <div class="info">
                    <div class="name">
                        {{item.username}}
                    </div>
                    <div class="rate">
                        <el-rate
                            v-model="item.rate"
                            disabled
                            text-color="#ff9900">
                        </el-rate>
                    </div>
                    <div class="evalaute">
                        味道特别棒，就在我们家楼下，总来吃 ，服务态度也很好，环境好性价比很高
                    </div>
                    <div class="pics">
                        <div class="thumbnails" v-for="(v, i) in item.pics" :key="'_' + i">
                            <img :src="v" alt="">
                        </div>
                    </div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'comment',
        'total'
    ]
}
</script>