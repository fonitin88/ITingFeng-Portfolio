import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // 導入建立的 router

//導入多語言系
import { createI18n } from 'vue-i18n';
import en from './locales/en';
import zhTW from './locales/zh-TW';
const i18n = createI18n({
    legacy: false, // Vue 3 建議使用 Composition API
    locale: 'en', // 預設語言
    fallbackLocale: 'en',
    messages: {
        en,
        'zh-TW': zhTW,
    }
});

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');