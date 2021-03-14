import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import '../mock'; // 引用mock

import route from './router/index';

import './index.css';
import '../src/assets/font/iconfont.css';
import './components/less/jh.less';

// require('../mock');
const app = createApp(App);
app.config.globalProperties.$axios = axios;
// app.use(route)
app.use(route);

app.mount('#app');
