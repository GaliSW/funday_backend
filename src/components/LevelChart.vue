
<template>
    <div id="level-chart"></div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'level-chart',
    methods:{
         levelInitOption() {
            let level = this;
            level.option = {
                title: {
                    text: '等級統計',
                    left: 'center',
                    color:'#222222',
                    fontWeight:500,
                },
                xAxis: {
                    type: 'category',
                    data: ['A1','A2','B1','B2','C1']
                },
                yAxis: {
                    type: 'value',
                    data:[0, 50, 100],
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

        levelReady(){
            let level = this;
            let levelDom = document.getElementById('level-chart');

            level.myChart = echarts.init(levelDom);
            level.myChart && level.myChart.setOption(level.option);
        },
    },
    mounted(){
        this.levelInitOption();
        this.$nextTick(() => { 
            this.levelReady();
        });
    },
};
</script>

<style scoped>
    #level-chart{
        width: 500px;
        height: 500px;
    }
</style>