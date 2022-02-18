import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import i18n from '@/i18n'
import './permission'
import '@/styles/index.scss'
import installIcons from '@/icons'
import installElementPlus from './plugins/element'
import installDirective from '@/directives'
// 全局属性
import installFilter from '@/filters'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
installDirective(app)

app.use(store).use(router).use(i18n).mount('#app')
