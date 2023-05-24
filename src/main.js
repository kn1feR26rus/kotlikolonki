import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import {store} from './vuex/store'
import HomePage from '@/pages/HomePage.vue'
import CatalogPage from '@/pages/CatalogPage.vue'
import KotliPage from '@/pages/KotliPage.vue'
import KolonkiPage from '@/pages/KolonkiPage.vue'

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: [
        {path: '/', name: 'HomePage', component: HomePage},
        {path: '/catalog', name: 'CatalogPage', component: CatalogPage},
        {path: '/kotli', name: 'KotliPage', component: KotliPage},
        {path: '/kolonki', name: 'KolonkiPage', component: KolonkiPage},
    ]
})

createApp(App)
.use(router)
.use(store)
.mount('#app')




