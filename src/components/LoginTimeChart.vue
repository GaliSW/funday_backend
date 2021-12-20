
<template>
    <div id="login-time-chart"></div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'login-time-chart',
    methods:{
         loginInitOption() {
            let login = this;
            login.option = {
                title: {
                    text: '登入時段',
                    left: 'center',
                    color:'#222222',
                    fontWeight:500,
                },
                xAxis: {
                    type: 'category',
                    data: ['0-2', '2-4', '4-6', '6-8', '8-10', '10-12', '12-14','14-16','16-18','18-20','20-22','22-24'],
                },
                yAxis: {
                    type: 'value',
                    data:[0, 50, 100,150],
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

        loginReady(){
            let login = this;
            let loginDom = document.getElementById('login-time-chart');

            login.myChart = echarts.init(loginDom);
            login.myChart && login.myChart.setOption(login.option);
        },
    },
    mounted(){
        this.loginInitOption();
        this.$nextTick(() => { 
            this.loginReady();
        });
    },
};
</script>

<style scoped>
    #login-time-chart{
        width: 500px;
        height: 500px;
    }
</style>