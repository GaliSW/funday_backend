<template>
    <section class="export-blk">
        <div class="export-title">
            <h1>報表輸出</h1>
        </div>
        <div class="export-teach">
            <div class="sub-title col-3">FUNDAY教材列表輸出</div>
            <div class="export-date col-9">
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
                <div class="export-btn">送出</div>
            </div>
        </div>
        <div class="export-teach">
            <div class="sub-title col-3">FUNDAY文章等級數量統計</div>
            <div class="export-btn">送出</div>
        </div>
        <div class="export-teach">
            <div class="sub-title col-3">使用者等級報表</div>
            <div class="export-btn">送出</div>
        </div>
        <div class="export-teach">
            <div class="sub-title col-3">個人使用明細</div>
            <div class="export-date col-9">
                <label>自</label>
                <div>
                    <v-date-picker v-model="date3">
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
                    <v-date-picker v-model="date4">
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
                <div class="export-btn">送出</div>
            </div>
        </div>
        <div class="export-teach">
            <div class="sub-title col-3">Weekly Test 平均成績</div>
            <div class="export-btn">送出</div>
        </div>
        <div class="export-teach">
            <div class="sub-title col-3">Toeic Test 平均成績</div>
            <div class="export-btn">送出</div>
        </div>
        <foo></foo>
    </section>
</template>
<script>
import foo from "./Footer";
export default {
    components: { foo },
    data() {
        return {
            date: "",
            date2: "",
            date3: "",
            date4: "",
        };
    },
};
</script>
