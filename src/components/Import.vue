<template>
    <section class="import-blk">
        <div class="import-title">
            <h1>報表輸出</h1>
        </div>
        <div class="import-teach">
            <div>FUNDAY教材列表輸出</div>
            <div>
                <label>自</label>
                <v-date-picker v-model="date">
                    <template v-slot="{ inputValue, inputEvents }">
                        <input class="bg-white border px-2 py-1 rounded" :value="inputValue" v-on="inputEvents" placeholder="YY.MM.DD"/>
                    </template>
                </v-date-picker>
                <label>至</label>
                <v-date-picker v-model="date2">
                    <template v-slot="{ inputValue, inputEvents }">
                        <input class="bg-white border px-2 py-1 rounded" :value="inputValue" v-on="inputEvents" placeholder="YY.MM.DD"/>
                    </template>
                </v-date-picker>
            </div>
        </div>
        <div class="import-article">
            
        </div>
        <div class="import-user-level">
            
        </div>
        <div class="import-user">
            
        </div>
        <div class="import-weekly">
            
        </div>
        <div class="import-toeic">
            
        </div>
    </section>
    
</template>
<script>
    export default {
        data() {
            return {
                date: new Date(),
                date2: new Date(),
            }
        }  
};
</script>