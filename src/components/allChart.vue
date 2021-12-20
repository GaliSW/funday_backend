<template>

<div class="chart-list">
    <div class="chart-wrapper">
        <div class="chart-title col-12">
            <h1>NewPresale Funday 平台使用統計報告</h1>
        </div>
        <div class="chart-time-blk col-12">
            <div class="chart-time">
                <div>
                    {{now}}
                </div>
                <div>
                    <label>年度:</label>
                    <select>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col-6">
            <radar-chart class="chart-blk"></radar-chart>
        </div>
        <div class="col-6">
            <level-chart class="chart-blk"></level-chart>
        </div>
        <div class="col-6">
            <read-chart class="chart-blk"></read-chart>
        </div>
        <div class="col-6">
            <read-time-chart class="chart-blk"></read-time-chart>
        </div>
        <div class="col-6">
            <login-time-chart class="chart-blk"></login-time-chart>
        </div>
    </div>
</div>

</template>

<script>
import radarChart from './LoginChart';
import levelChart from './LevelChart';
import readChart from './ReadChart';
import readTimeChart from './ReadTimeChart';
import loginTimeChart from './LoginTimeChart';
export default {
    name: 'chart',
    components: {
        radarChart,
        levelChart,
        readChart,
        readTimeChart,
        loginTimeChart
    },
    data(){
        return({
        })
    }
    ,
    computed: {
        now() {
            const timestamp = Date.now();
            const dateObj = new Date(timestamp) ;
            let hour = "";
            let clock = "AM";
            if(dateObj.getHours() > 12){
                hour = dateObj.getHours() - 12;
                clock = "PM";
            }
            const timeStr = 
            dateObj.getFullYear() + '/' +  dateObj.getMonth() + '/' +  dateObj.getDate() + ' ' + hour + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds()  + ' ' + clock;

            
            return timeStr;
        },
    },
};
</script>

<style scoped>
    .chart-blk{
        border: 1px solid black;
        width: 520px;
        height: 500px;
        margin: 40px auto;
    }
</style>