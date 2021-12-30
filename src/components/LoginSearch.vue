<template>
    <section class="login-search-blk">
        <div class="login-search-title">
            <h1>登入數查詢</h1>
        </div>
        <div class="login-date">
            <label>自</label>
            <div>
                <v-date-picker v-model="date">
                    <template v-slot="{ inputValue, inputEvents }">
                        <input
                            class="picker rounded px-2 py-1"
                            :value="inputValue"
                            v-on="inputEvents"
                            placeholder="yyyy/mm/dd"
                        />
                    </template>
                </v-date-picker>
            </div>
            <label>至</label>
            <div>
                <v-date-picker v-model="date2">
                    <template v-slot="{ inputValue, inputEvents }">
                        <input
                            class="picker rounded"
                            :value="inputValue"
                            v-on="inputEvents"
                            placeholder="yyyy/mm/dd"
                        />
                    </template>
                </v-date-picker>
            </div>
            <div class="login-btn">Search</div>
        </div>
        <div class="login-list">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <th class="col-6">日期</th>
                    <th class="col-6">登入數</th>
                </tr>
                <tr class="td">
                    <td class="col-6">2021/11/22</td>
                    <td class="col-6">0</td>
                </tr>
                <tr class="td">
                    <td class="col-6">2021/11/22</td>
                    <td class="col-6">0</td>
                </tr>
                <tr class="td">
                    <td class="col-6">2021/11/22</td>
                    <td class="col-6">0</td>
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
    name: "login-search",
    components: { foo },
    data() {
        return {
            date: "",
            date2: "",
        };
    },
    methods: {
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
