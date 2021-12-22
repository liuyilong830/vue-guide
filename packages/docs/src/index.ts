import { createApp } from 'vue'
import AppLayout from './layout/index.vue'

const app = createApp(AppLayout)
console.log('current vue version: ', app.version)

app.mount('#app')
