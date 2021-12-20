
<template>
    <div id="radar-chart"></div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'radar-chart',
    methods:{
         initOption() {
            let vm = this;
            vm.option = {
                title: {
                    text: '每月登入數',
                    left: 'center',
                    color:'#222222',
                    fontWeight:500,
                },
                xAxis: {
                    type: 'category',
                    data: ['JAN', 'FEB', 'MAR', 'API', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC']
                },
                yAxis: {
                    type: 'value',
                    data:[0, 50, 100, 150],
                },
                series: [
                    {
                        data: [0, 55, 107, 125,66, 55, 140, 105,80, 40, 107, 125],
                        type: 'line',
                        smooth: true,
                        color:'#5EA4F2'
                    }
                ]
            };
        },

        ready(){
            let vm = this;
            let dom = document.getElementById('radar-chart');

            vm.myChart = echarts.init(dom);
            vm.myChart && vm.myChart.setOption(vm.option);
        },
    },
    mounted(){
        this.initOption();
        this.$nextTick(() => { 
            this.ready();
        });
    },
};
</script>

<style scoped>
    #radar-chart{
        width: 500px;
        height: 500px;
    }
</style>