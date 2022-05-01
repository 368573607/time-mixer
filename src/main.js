import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// 用户插件
import veProgress from 'vue-ellipse-progress'

createApp(App)
    .use(store)
    .use(veProgress, "vep")
    .mount('#app')
