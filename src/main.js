import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import axios from 'axios'  //如果需要axios，请引入

import ElementPlus from 'element-plus'  //引入element-plus库
import VForm3 from 'vform3-builds'  //引入VForm3库

import 'element-plus/dist/index.css'  //引入element-plus样式
import 'vform3-builds/dist/designer.style.css'  //引入VForm3样式

createApp(App).use(ElementPlus).use(VForm3).mount('#app')
