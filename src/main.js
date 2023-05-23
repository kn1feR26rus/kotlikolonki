import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import {store} from './vuex/store'
import HomePage from '@/pages/HomePage.vue'
import CatalogPage from '@/pages/CatalogPage.vue'

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: [
        {path: '/', name: 'HomePage', component: HomePage},
        {path: '/catalog', name: 'CatalogPage', component: CatalogPage}
    ]
})

createApp(App)
.use(router)
.use(store)
.mount('#app')




