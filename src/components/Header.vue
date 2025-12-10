<template>
  <div>
    <header class="header">
      <div class="header-container">
        <div class="header-top">
          <span class="logo-text">{{ $t('header.name') }}</span>
          <!-- 語言切換按鈕 -->
          <div class="lang-up">
            <div class="lang-switcher">
              <button class="lan" :class="{ 'active': locale === 'en' }" @click="setLang('en')">EN</button>
              <button class="lan" :class="{ 'active': locale === 'zh-TW' }" @click="setLang('zh-TW')">中</button>
            </div>
          </div>
        </div>


        <nav class="nav">
          <router-link to="/" class="nav-button" active-class="active">
            {{ $t('header.about') }}
          </router-link>

          <router-link to="/experience" class="nav-button" active-class="active">
            {{ $t('header.experience') }}
          </router-link>

          <router-link to="/games" class="nav-button" active-class="active">
            {{ $t('header.games') }}
          </router-link>

          <router-link to="/art" class="nav-button" active-class="active">
            {{ $t('header.art') }}
          </router-link>
          <Social class="social-links" @open-contact="handleOpenContact" />
          <!-- 語言切換按鈕 -->
          <div class="lang-down">
            <div class="lang-switcher">
              <button class="lan" :class="{ 'active': locale === 'en' }" @click="setLang('en')">EN</button>
              <button class="lan" :class="{ 'active': locale === 'zh-TW' }" @click="setLang('zh-TW')">中</button>
            </div>
          </div>
        </nav>

      </div>
    </header>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Social from "../components/Social.vue";

const { locale } = useI18n();

// email往外發事件
const emit = defineEmits(["open-contact"]);

const setLang = (lang) => {
  locale.value = lang;
};

const handleOpenContact = () => {
  emit("open-contact");
};
</script>

<style scoped>
/* ===== Header 樣式 ===== */

.header {
  background-color: #1f2937;
  border-bottom: 1px solid #374151;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

/* 上排：logo + 語言切換 */
.header-top {
  display: flex;
  justify-content: space-between;

}

.logo-text {
  font-size: 1.4rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;

}

.nav-button {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
}



.nav-button:hover,
.nav-button.active {
  color: white;
}

.social-links {
  display: inline-flex;
}

/* 語系 */
.lang-up {
  display: none;
}

.lan {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  padding: 3px 12px;
}

.lang-switcher {
  display: flex;
  border: 1px solid #374151;
  border-radius: 15px;
  overflow: hidden;
}

.lan:hover {
  color: white;
  background-color: #374151;
}

.lan.active {
  color: white;
  background-color: #2842d4;
  font-weight: bold;
}

/* ===== Responsive ===== */

@media (max-width: 760px) {
  .header-container {
    display: block;
  }

  .nav {
    gap: 1rem;
  }

  .lang-switcher {

    margin-left: auto;
  }

  .lan {
    font-size: 0.8rem;
  }

  .social-links {
    display: none;
  }

  .lang-up {
    display: flex;
  }

  .lang-down {
    display: none;
  }

}
</style>
