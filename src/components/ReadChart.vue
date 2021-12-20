
<template>
    <div id="read-chart"></div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'read-chart',
    methods:{
         readInitOption() {
            let read = this;
            read.option = {
                title: {
                    text: '每月閱讀篇數',
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
                    data:[0, 20, 40],
                },
                series: [
                    {
                        data: [0, 55, 30,14,35,21,34,12,33,5,6,24],
                        type: 'line',
                        smooth: true,
                        color:'#5EA4F2'
                    }
                ]
            };
        },

        readReady(){
            let read = this;
            let readDom = document.getElementById('read-chart');

            read.myChart = echarts.init(readDom);
            read.myChart && read.myChart.setOption(read.option);
        },
    },
    mounted(){
        this.readInitOption();
        this.$nextTick(() => { 
            this.readReady();
        });
    },
};
</script>

<style scoped>
    #read-chart{
        width: 500px;
        height: 500px;
    }
</style>