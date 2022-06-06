import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入

const app = createApp(App)
app.use(router).use(Antd).mount('#app')
