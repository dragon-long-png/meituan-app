<template>
    <div class="discount">
        <h3>
            商家团购及优惠
        </h3>
        <div class="need-login" v-if="!$store.state.userName">
            <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="">
            <span>请登录后查看详细团购优惠</span>
            <el-button round>
                <router-link :to="{name: 'login'}">立即登录</router-link>
            </el-button>
        </div>
        <div class="need-login" v-else>
            <ul class="deal-items">
                <li class="items" v-for="(item, index) in dealItem" :key="index">
                    <p class="deal-title">
                    {{item.title}}
                    </p>
                    <p>
                    <span class="deal-price">
                        ￥{{item.price}}
                    </span>
                    <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
                    <span class="deal-sales">已售{{item.saleNum}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'dealItem'
    ]
}
</script>