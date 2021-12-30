<template>
    <div id="app">
        <myHeader></myHeader>
        <section class="container">
            <nav>
                <div class="dialog-blk">
                    <p>親愛的ting<br />今天辛苦囉~^^!</p>
                    <div class="logout-btn">登出</div>
                </div>
                <div class="back-to-front">回到前端頁面</div>
                <div class="list-blk">
                    <p>學習統計&nbsp;<i class="fas fa-chevron-up"></i></p>
                    <ul id="tab-list">
                        <li @click="changeView('chart')" id="chart">
                            網站統計列表
                        </li>
                        <li @click="changeView('import')" id="import">
                            報表輸出
                        </li>
                        <li @click="changeView('time')" id="time">時數查詢</li>
                        <li @click="changeView('login')" id="login">
                            登入時數查詢
                        </li>
                        <li @click="changeView('score')" id="score">
                            群組成績查詢
                        </li>
                    </ul>
                    <p>進階管理&nbsp;<i class="fas fa-chevron-up"></i></p>
                    <ul>
                        <li @click="changeView('account')" id="account">
                            帳號管理
                        </li>
                    </ul>
                </div>
            </nav>

            <keep-alive>
                <all-chart v-if="isShow == 'chart'"></all-chart>
            </keep-alive>
            <keep-alive>
                <port v-if="isShow == 'import'"></port>
            </keep-alive>
            <keep-alive>
                <time-search v-if="isShow == 'time'"></time-search>
            </keep-alive>
            <keep-alive>
                <login-search v-if="isShow == 'login'"></login-search>
            </keep-alive>
            <keep-alive>
                <group-search v-if="isShow == 'score'"></group-search>
            </keep-alive>
            <keep-alive>
                <account v-if="isShow == 'account'"></account>
            </keep-alive>
        </section>
    </div>
</template>

<script>
import myHeader from "./components/Header";
import allChart from "./components/allChart";
import port from "./components/Export";
import timeSearch from "./components/TimeSearch";
import loginSearch from "./components/LoginSearch";
import groupSearch from "./components/GroupSearch";
import account from "./components/Account";
export default {
    el: "#app",
    data() {
        return {
            isShow: "chart",
        };
    },
    components: {
        myHeader,
        allChart,
        port,
        timeSearch,
        loginSearch,
        groupSearch,
        account,
    },
    methods: {
        changeView(view) {
            this.isShow = `${view}`;
            let li = document.getElementById("tab-list").children;
            for (let i = 0; i < li.length; i++) {
                li[i].classList.remove("active");
            }
            document.getElementById("account").classList.remove("active");
            document.getElementById(`${view}`).classList.add("active");
        },
    },
};
</script>
<style>
@import "./assets/scss/style.css";
</style>
