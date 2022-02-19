import i18n from '@/i18n'
// 全局属性
import installFilter from '@/filters'
import installIcons from '@/icons'
import '@/styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './permission'
import installElementPlus from './plugins/element'
import router from './router'
import store from './store'
import installDirective from '@/directives'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
installDirective(app)

app.use(i18n).use(store).use(router).mount('#app')
