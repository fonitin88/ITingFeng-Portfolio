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

          <div class="nav-dropdown" @click.stop>
            <span class="nav-button" @click="isOpen = !isOpen">
              {{ $t('header.Code') }} ▾
            </span>

            <div class="dropdown-menu" v-show="isOpen">
              <router-link to="/code/game1" class="dropdown-item" active-class="active" @click="isOpen = false">
                {{ $t('header.game1') }}
              </router-link>

              <router-link to="/code/webdemo1" class="dropdown-item" active-class="active" @click="isOpen = false">
                {{ $t('header.web1') }}
              </router-link>
            </div>
          </div>


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
import { ref } from 'vue';
const { locale } = useI18n();

// email往外發事件
const emit = defineEmits(["open-contact"]);
const isOpen = ref(false);
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

/* ===== Dropdown ===== */

.nav-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  min-width: 140px;
  background-color: #1f2937;
  border: 1px solid #374151;
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(5px);
  transition: all 0.2s ease;
  z-index: 2000;
}

.dropdown-item {
  display: block;
  padding: 0.6rem 1rem;
  color: #9ca3af;
  text-decoration: none;
  font-size: 1rem;
}

.dropdown-item:hover {
  background-color: #374151;
  color: white;
}

/* hover 顯示 */
.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
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
