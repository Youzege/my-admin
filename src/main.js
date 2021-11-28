import installIcons from '@/icons'
import '@/styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './permission'
import installElementPlus from './plugins/element'
import router from './router'
import store from './store'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).mount('#app')
