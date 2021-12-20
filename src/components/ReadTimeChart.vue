
<template>
    <div id="read-time-chart"></div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'read-time-chart',
    methods:{
        readTInitOption() {
            let readT = this;
            readT.option = {
                title: {
                    text: '每月閱讀分鐘數',
                    left: 'center',
                    color:'#222222',
                    fontWeight:500,
                },
                xAxis: {
                    type: 'category',
                    data: ['JAN', 'FEB', 'MAR', 'API', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC'],
                },
                yAxis: {
                    type: 'value',
                    data:[0, 200, 400],
                },
                series: [
                    {
                        data: [100, 55, 300,140,350,201,340,102,303,50,60,204],
                        type: 'line',
                        smooth: true,
                        color:'#5EA4F2'
                    }
                ]
            };
        },

        readTReady(){
            let readT = this;
            let readTDom = document.getElementById('read-time-chart');

            readT.myChart = echarts.init(readTDom);
            readT.myChart && readT.myChart.setOption(readT.option);
        },
    },
    mounted(){
        this.readTInitOption();
        this.$nextTick(() => { 
            this.readTReady();
        });
    },
};
</script>

<style scoped>
    #read-time-chart{
        width: 500px;
        height: 500px;
    }
</style>