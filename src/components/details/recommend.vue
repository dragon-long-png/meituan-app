<template>
    <div class="food-recommend">
        <h3>推荐菜</h3>
        <div class="cont">
            <ul>
                <li>
                    <div class="imgBox">
                        <img src="https://p1.meituan.net/dealwatera/94aab8f55b6c5f1b774d90d8e3744941616848.jpg@130w_130h_1e_1c" alt="">
                    </div>
                    <div class="desc">
                        <span>正宗川味红油锅</span>
                        <b>￥38</b>   
                    </div>
                </li>
                <li>
                    <div class="imgBox">
                        <img src="https://img.meituan.net/dpgroup/f9273e9812bffba3e7fe95b760f022c2103809.jpg@130w_130h_1e_1c" alt="">
                    </div>
                    <div class="desc">
                        <span>阿根廷大虾</span>
                        <b>￥6</b>   
                    </div>
                </li>
                <li>
                    <div class="imgBox">
                        <img src="https://img.meituan.net/dpgroup/d88d70fa5e879985b4c6a984f2d7525a111058.jpg@130w_130h_1e_1c" alt="">
                    </div>
                    <div class="desc">
                        <span>手切鲜羊肉</span>
                        <b>￥29</b>   
                    </div>
                </li>
                <li>
                    <div class="imgBox">
                        <img src="https://p0.meituan.net/dealwatera/667072d84226ef55e7d18b7679aed6fe593998.jpg@130w_130h_1e_1c" alt="">
                    </div>
                    <div class="desc">
                        <span>天顺源羊排</span>
                        <b>￥24</b>   
                    </div>
                </li>
                <li>
                    <div class="imgBox">
                        <img src="https://qcloud.dpfile.com/pc/0FnFmIn7C3EkX4LvW4omRaOYx9SxxJongyz6pbQ0GYE_93tAZEn4rL0UkwSPAMBS5g_3Oo7Z9EXqcoVvW9arsw.jpg" alt="">
                    </div>
                    <div class="desc">
                        <span>相间肥牛</span>
                        <b>￥26</b>   
                    </div>
                </li>
                <li>
                    <div class="imgBox">
                        <img src="https://qcloud.dpfile.com/pc/lmzasTNLbc1h8BUwJPIDA_cWOcrfaxOdrfQL18x6XrSwwvQr_Qy7pd5y7jyIkrK65g_3Oo7Z9EXqcoVvW9arsw.jpg" alt="">
                    </div>
                    <div class="desc">
                        <span>高钙羊肉</span>
                    </div>
                </li>
            </ul>

            <div class="list clear">
                <span v-for="(item, index) in recommend" :key="item + '_' + index">{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'recommend'
    ]
}
</script>