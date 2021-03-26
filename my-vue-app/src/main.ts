import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'vant/lib/index.css'; // 全局引入样式
import './utils/rem.js'
createApp(App).use(router).mount('#app')

