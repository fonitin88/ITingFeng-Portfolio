// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
// 匯入您的頁面元件
import AboutPage from '../views/AboutPage.vue';
import Experience from '../views/Experience.vue';
import GamesPage from '../views/GamesPage.vue';
import Webdemo1 from '../views/Webdemo1.vue';
import ArtPage from '../views/ArtPage.vue';

const routes = [
    // 設置首頁/預設頁面
    { path: '/', name: 'About', component: AboutPage },
    { path: '/experience', name: 'experience', component: Experience },
    { path: '/code/game1', name: 'Games', component: GamesPage },
    { path: '/code/webdemo1', name: 'Web', component: Webdemo1 },
    { path: '/art', name: 'Art', component: ArtPage },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // 確保每次導航到新頁面時都滾動到頁面頂部
    scrollBehavior() {
        return { top: 0 }
    },
});

export default router;