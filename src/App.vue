<template>
  <!-- 這裡綁上語系 class：en / zh-TW -->
  <div :class="locale">
    <Header />
    <IconSprite />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import IconSprite from "./components/IconSprite.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n(); // 會是 'en' 或 'zh-TW'
</script>
