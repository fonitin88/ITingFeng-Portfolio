// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// 匯入您的頁面元件
import AboutPage from '../views/AboutPage.vue';
import Experience from '../views/Experience.vue';
import GamesPage from '../views/GamesPage.vue';
import ArtPage from '../views/ArtPage.vue';
const routes = [
    // 設置首頁/預設頁面
    { path: '/', name: 'About', component: AboutPage },
    // 設置 Experience 頁面
    { path: '/experience', name: 'experience', component: Experience },
    // 設置 Games 頁面
    { path: '/games', name: 'Games', component: GamesPage },
    // 設置 Art 頁面
    { path: '/art', name: 'Art', component: ArtPage }
];

const router = createRouter({
    history: createWebHistory('/ITingFeng-Portfolio/'),
    routes,
    // 確保每次導航到新頁面時都滾動到頁面頂部
    scrollBehavior() {
        return { top: 0 }
    },
});

export default router;