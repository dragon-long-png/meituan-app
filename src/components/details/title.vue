<template>
    <div class="food-title">
        <div class="food-info">
            <div class="name">
                {{detail.title}}
            </div>
            <div class="scores">
                <el-rate
                    v-model="score"
                    disabled
                    text-color="#ff9900">
                </el-rate>
                <span>{{detail.score}}分人均￥{{detail.avgPrice}}</span>
            </div>
            <div class="address">
                <p>
                    地址：{{detail.address}}
                    <i class="el-icon-location"/>
                </p>
                <p>
                    电话：{{detail.phone}}
                </p>
                <p>
                    营业时间：{{detail.businessTime}}
                </p>
            </div>
            <ul class="tags">
                <li>
                    <img src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png" alt="">
                    提供Wifi
                </li>
                <li>
                    <img src="https://p1.meituan.net/codeman/4b1c5696fe5bf2c4d23fb01659b3e68b1960.png" alt="">
                    停车位
                </li>
            </ul>
        </div>
        <div class="food-poster">
            <div class="top">
                <img :src="detail.imgUrl" alt="">
            </div>
            <ul class="bottom">
                <li><img src="https://img.meituan.net/msmerchant/6016b17a350c79123588e7b84a47a3a1101868.jpg@92w_50h_1e_1c" alt=""></li>
                <li><img src="https://img.meituan.net/msmerchant/b82d4f84d167910e004b0dc230e4f747116511.jpg@92w_50h_1e_1c" alt=""></li>
                <li><img src="https://img.meituan.net/msmerchant/0de0128f750e2171f3cf5eebeda9cfa5102308.jpg@92w_50h_1e_1c" alt=""></li>
                <li><img src="https://img.meituan.net/msmerchant/4d9c5ac23e7ec6e67f304b316bf1739a105507.jpg@92w_50h_1e_1c" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
import api from '@/api/index'
export default {
    props: [
        'detail'
    ],
    data () {
        return {
            score : null
        }
    },
    created () {
        api.getProductDetail()
            .then( res => {
                this.score = res.data.data.score
            })
    }
}
</script>