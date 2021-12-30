<template>
    <section class="group-blk">
        <div class="group-title">
            <h1>群組成績查詢</h1>
        </div>
        <div class="group-date">
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
            <div class="group-btn left">Search</div>
            <div class="group-btn">報表</div>
        </div>
        <div class="group-list">
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <th class="col-2">群組</th>
                    <th class="col-2">人數</th>
                    <th class="col-2">登入數</th>
                    <th class="col-3">閱讀篇數</th>
                    <th class="col-3">閱讀篇數</th>
                </tr>
                <tr class="td">
                    <td class="col-2">未分組</td>
                    <td class="col-2">0</td>
                    <td class="col-2">0</td>
                    <td class="col-3">0</td>
                    <td class="col-3">0</td>
                </tr>
                <tr class="td">
                    <td class="col-2">未分組</td>
                    <td class="col-2">0</td>
                    <td class="col-2">0</td>
                    <td class="col-3">0</td>
                    <td class="col-3">0</td>
                </tr>
                <tr class="td">
                    <td class="col-2">未分組</td>
                    <td class="col-2">0</td>
                    <td class="col-2">0</td>
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
    name: "group-search",
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
