import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入

import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

const app = createApp(App)
app.use(router).use(Antd).use(Vue3ColorPicker).mount('#app')
