import { createApp } from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';

import * as echarts from 'echarts';

const AppBase = createApp(App);
AppBase.use(VCalendar, {});
AppBase.config.globalProperties.echarts = echarts;
AppBase.mount('#app');







