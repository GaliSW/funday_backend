<template>
    <section class="account-blk">
        <div class="account-title">
            <h1>帳號管理</h1>
        </div>
        <div class="search-blk">
            <h1>請輸入帳號、姓名關鍵字</h1>
            <input type="text" />
            <div>Search</div>
        </div>
        <div class="para">
            <p>
                個人帳號列表頁：
                <br />
                1.在下列的框框裡打勾再按下〝刪除〞鈕即可刪除該使用者。
                <br />
                2.點選〝使用者帳號〞，即會進入「使用者資料填寫頁面」，在此可修改使用者資料。
                <br />
                3.點選〝學習資訊〞，即會進入「使用者學習紀錄頁面」，操作方式請參考〝群組資訊〞使用說明。
            </p>
        </div>
        <div class="tab">
            <div @click="changeTab('user')">
                <input
                    type="radio"
                    name="timer"
                    value="user"
                    id="user"
                    checked
                    class="none"
                />
                <label for="user" class="user-label"
                    >使用者&nbsp;&nbsp;<i
                        class="fas fa-chevron-down"
                        @click="user"
                    ></i
                ></label>
                <div class="user-option none" id="user-option">
                    <ul>
                        <li>新增使用者</li>
                        <li>匯入使用者</li>
                    </ul>
                </div>
            </div>
            <div @click="changeTab('group')">
                <input
                    type="radio"
                    name="timer"
                    value="group"
                    id="group"
                    class="none"
                />
                <label for="group">群組</label>
            </div>
            <div @click="changeTab('assign')">
                <input
                    type="radio"
                    name="timer"
                    value="assign"
                    id="assign"
                    class="none"
                />
                <label for="assign">分組</label>
            </div>
            <div @click="changeTab('account')">
                <input
                    type="radio"
                    name="timer"
                    value="account"
                    id="accountTab"
                    class="none"
                />
                <label for="accountTab">帳號</label>
            </div>
        </div>
        <div class="account-list">
            <div class="delete-blk">
                <div class="btn col-2">刪除</div>
                <div class="alert col-3">注意：刪除後將無法復原</div>
                <div class="col-3"></div>
                <div class="limit col-2">使用帳號上限：20000</div>
                <div class="now col-2">
                    目前使用數：<span id="user-num">1704</span>
                </div>
            </div>
            <!-- user-table -->
            <table
                v-if="isShow == 'user'"
                cellpadding="0"
                cellspacing="0"
                class="col-12"
            >
                <tr>
                    <th class="col-3 all">
                        <input type="checkbox" id="all-check" />
                        <label for="all-check" @click="selectAll"></label>
                        全選 /取消全選
                    </th>
                    <th class="col=3">使用者帳號(可編輯以下資料)</th>
                    <th class="col-2">使用者</th>
                    <th class="col-2">使用權限</th>
                    <th class="col-2">學習資訊</th>
                </tr>
                <tr class="td">
                    <td class="col-3 check-one">
                        <input type="checkbox" id="a" />
                        <label for="a"></label>
                    </td>
                    <td class="col-3">楊如晶</td>
                    <td class="col-2">楊如晶</td>
                    <td class="col-2">老師</td>
                    <td class="col-2">學習資訊</td>
                </tr>
                <tr class="td">
                    <td class="col-3 check-one">
                        <input type="checkbox" id="b" />
                        <label for="b"></label>
                    </td>
                    <td class="col-3">楊如晶</td>
                    <td class="col-2">楊如晶</td>
                    <td class="col-2">老師</td>
                    <td class="col-2">學習資訊</td>
                </tr>
                <tr class="td">
                    <td class="col-3 check-one">
                        <input type="checkbox" id="c" />
                        <label for="c"></label>
                    </td>
                    <td class="col-3">楊如晶</td>
                    <td class="col-2">楊如晶</td>
                    <td class="col-2">老師</td>
                    <td class="col-2">學習資訊</td>
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
    name: "account",
    data() {
        return {
            isShow: "user",
        };
    },
    components: {
        foo,
    },
    methods: {
        changeTab(tab) {
            this.isShow = `${tab}`;
        },
        user() {
            let option = document.getElementById("user-option");
            option.classList.toggle("none");
        },
        selectAll(e) {
            let options = document.querySelectorAll(".check-one");
            let all = e.target.previousSibling;
            if (all.checked) {
                for (let i = 0; i < options.length; i++) {
                    options[i].children[0].checked = false;
                }
            } else {
                for (let i = 0; i < options.length; i++) {
                    options[i].children[0].checked = true;
                }
            }
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
