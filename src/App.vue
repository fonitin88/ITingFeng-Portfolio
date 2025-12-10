<template>
  <div>
    <Header />
    <IconSprite />
    <main>
      <!-- AboutPage, GamesPage, ArtPage 那些元件現在由 router 載入 -->
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import IconSprite from "./components/IconSprite.vue";

</script>
