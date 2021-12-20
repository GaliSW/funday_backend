<template>
    <div id="app">
        <myHeader></myHeader>
            <section class="container">
                <nav>
                    <div class="dialog-blk">
                        <p>親愛的ting<br>今天辛苦囉~^^!</p>
                        <div class="logout-btn">登出</div> 
                    </div>
                    <div class="back-to-front">
                        回到前端頁面
                    </div>
                    <div class="list-blk">
                        <p>學習統計^</p>
                        <ul>
                            <li @click="changeView('chart')">網站統計列表</li>
                            <li @click="changeView('import')">報表輸出</li>
                            <li @click="changeView('time')">時數查詢</li>
                            <li @click="changeView('login')">登入時數查詢</li>
                            <li @click="changeView('score')">群組成績查詢</li>
                        </ul>
                        <p>進階管理^</p>
                        <ul>
                            <li @click="changeView('account')">帳號管理</li>
                        </ul>
                    </div>
                </nav>
                
                <keep-alive>
                    <all-chart v-if="isShow == 'chart'"></all-chart>
                </keep-alive>
                <port v-if="isShow == 'import'"></port>
        </section>
    </div>
    
</template>

<script>
    import myHeader from './components/Header';
    import allChart from './components/allChart';  
    import port from './components/Import'; 
    export default {
        el:'#app',
        data(){
            return({
                    isShow:'chart',
            })
        },
        components:{
            myHeader,
            allChart,
            port,
        },
        methods: {
            changeView(view){
                this.isShow = `${view}`;
            }
        },
    }

</script>
<style>
    @import "./assets/scss/style.css";
</style>
