import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import "./assets/css/main.css"

const header = createApp(Header)
const footer = createApp(Footer)
header.mount('#header')
footer.mount('#footer')

const app = createApp(App)
app.use(router)
app.mount('#app')

router.beforeEach((to, from, next) => {
    document.title = to.name
    next()
})
