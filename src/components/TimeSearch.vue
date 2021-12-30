<template>
    <section class="time-blk" id="time-search">
        <div class="time-title">
            <h1>時數查詢</h1>
        </div>
        <div class="time-tab">
            <div @click="changeTab('personal')">
                <input
                    type="radio"
                    name="timer"
                    value="personal"
                    id="personal"
                    checked
                    class="none"
                />
                <label for="personal">個人使用時數</label>
            </div>
            <div @click="changeTab('group')">
                <input
                    type="radio"
                    name="timer"
                    value="group"
                    id="group"
                    class="none"
                />
                <label for="group">群組使用時數</label>
            </div>
            <div class="search-blk">
                <h1>請輸入群組或帳號關鍵字</h1>
                <input type="text" />
                <div>Search</div>
            </div>
        </div>
        <div class="time-list">
            <div class="btn-wrapper">
                <div class="btn">產生報表</div>
            </div>
            <!-- personal list -->
            <table v-if="isShow == 'personal'" cellpadding="0" cellspacing="0">
                <tr>
                    <th class="col-3">帳號</th>
                    <th class="col-3">姓名</th>
                    <th class="col-3">時事頻道(分鐘)</th>
                    <th class="col-3">總時數(分鐘)</th>
                </tr>
                <tr class="td">
                    <td class="col-3">principal@ms7.shsh.kl.edu.tw</td>
                    <td class="col-3">楊如晶</td>
                    <td class="col-3">0</td>
                    <td class="col-3">0</td>
                </tr>
                <tr class="td">
                    <td class="col-3">principal@ms7.shsh.kl.edu.tw</td>
                    <td class="col-3">楊如晶</td>
                    <td class="col-3">0</td>
                    <td class="col-3">0</td>
                </tr>
                <tr class="td">
                    <td class="col-3">principal@ms7.shsh.kl.edu.tw</td>
                    <td class="col-3">楊如晶</td>
                    <td class="col-3">0</td>
                    <td class="col-3">0</td>
                </tr>
            </table>
            <!-- group list -->
            <table v-if="isShow == 'group'" cellpadding="0" cellspacing="0">
                <tr>
                    <th class="col-3">群組</th>
                    <th class="col-3">時事頻道(分鐘)</th>
                    <th class="col-3">總時數(分鐘)</th>
                </tr>
                <tr class="td">
                    <td class="col-3">楊如晶</td>
                    <td class="col-3">0</td>
                    <td class="col-3">0</td>
                </tr>
                <tr class="td">
                    <td class="col-3">楊如晶</td>
                    <td class="col-3">0</td>
                    <td class="col-3">0</td>
                </tr>
                <tr class="td">
                    <td class="col-3">楊如晶</td>
                    <td class="col-3">0</td>
                    <td class="col-3">0</td>
                </tr>
            </table>
        </div>
        <div class="pagination">
            <p>共&nbsp;<span id="page">7</span>&nbsp;頁</p>
            <p>前往頁面</p>
            <select id="pagination-select"></select>
        </div>
        <foo></foo>
    </section>
</template>
<script>
import foo from "./Footer";
export default {
    name: "time-search",
    data() {
        return {
            isShow: "personal",
        };
    },
    components: {
        foo,
    },
    methods: {
        changeTab(tab) {
            this.isShow = `${tab}`;
        },
        pagination() {
            let page = document.getElementById("page").innerText;
            let select = document.getElementById("pagination-select");
            for (let i = 0; i < page; i++) {
                let num = i + 1;
                let str = `<option value="${num}">第${num}頁</option>`;
                select.insertAdjacentHTML("beforeend", str);
            }
        },
    },
    mounted() {
        this.pagination();
    },
};
</script>
