import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import App from './App.vue'
import DonationForm from './components/DonationForm.vue'
import Confirmation from './components/Confirmation.vue'
import Information from './components/Information.vue'
import Legal from './components/Legal.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: DonationForm },
    { path: '/bestaetigung', component: Confirmation },
    { path: '/informationen', component: Information },
    { path: '/rechtliches', component: Legal },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

createApp(App).use(router).mount('#app')
