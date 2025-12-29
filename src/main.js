import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // 導入建立的 router

//導入多語言系
import { createI18n } from 'vue-i18n';
import en from './locales/en';
import zhTW from './locales/zh-TW';

//取得使用者瀏覽器語言
function getBrowserLocale() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith('zh')) return 'zh-TW';
    return 'en';
}

const i18n = createI18n({
    legacy: false, // Vue 3 建議使用 Composition API
    locale: getBrowserLocale(),
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