<template>
  <!-- Games Page -->
  <div class="main-content">
    <div class="delivery-page">
      <!-- Game Header with Gradient Background -->
      <section class="hero">
        <h1 class="title"> Delivery Dash</h1>
        <div class="hero-badge">🎮 Unity Game</div>
      </section>

      <!-- Game Iframe with Enhanced Frame -->
      <div class="game-wrapper">
        <div class="unity-scale-box">
          <iframe src="https://fonitin88.github.io/delivery-demo/" class="unity-iframe"></iframe>
        </div>
      </div>

      <!-- Gameplay Section -->
      <section class="gameplay-section">
        <!-- <h2 class="gameplay-title">遊戲玩法</h2> -->
        <p class="subtitle">
          {{ $t('code.subtitle') }}
        </p>
        <div class="gameplay-grid">
          <!-- $tm() 專門用來讀「非字串」（陣列 / 物件）」 -->
          <div class="gameplay-card" v-for="(text, index) in $tm('code.gameplayCards')" :key="index">
            <h3 class="card-title">{{ text }}</h3>
          </div>
        </div>
      </section>

      <!-- Tool Cards -->
      <section class="tools-section">
        <div class="section-header">
          <h2 class="section-title">{{ $t('code.toolsTitle') }}</h2>
          <p class="section-subtitle">{{ $t('code.toolsSubtitle') }}</p>
        </div>

        <!-- Tool 1 -->
        <div class="tool-card">
          <div class="tool-content">
            <h3 class="tool-title">🎨 {{ $t('code.tool1.title') }}</h3>
            <div class="tool-layout">
              <div class="tool-image-wrapper">
                <img class="tool-image" :src="pics.tool_1" alt="Color Selection UI" />
              </div>
              <div class="tool-text">
                <p class="tool-description">{{ $t('code.tool1.description') }}</p>
                <ul class="feature-list">
                  <li v-for="(text, index) in $tm('code.tool1.features')" :key="index">{{ text }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Tool 2 -->
        <div class="tool-card">
          <div class="tool-content">
            <h3 class="tool-title">🏗️ {{ $t('code.tool2.title') }}</h3>
            <div class="tool-layout">
              <div class="tool-image-wrapper">
                <img class="tool-image" :src="pics.tool_2" alt="Maze Generator Editor" />
              </div>
              <div class="tool-text">
                <p class="tool-description">{{ $t('code.tool2.description') }}</p>
                <ul class="feature-list">
                  <li v-for="(text, index) in $tm('code.tool2.features')" :key="index">{{ text }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Tool 3 -->
        <div class="tool-card">
          <div class="tool-content">
            <h3 class="tool-title">🌳 {{ $t('code.tool3.title') }}</h3>
            <div class="tool-layout">
              <div class="tool-image-wrapper">
                <img class="tool-image" :src="pics.tool_3" alt="Maze Decoration Tool" />
              </div>
              <div class="tool-text">
                <p class="tool-description">{{ $t('code.tool3.description') }}</p>
                <ul class="feature-list">
                  <li v-for="(text, index) in $tm('code.tool3.features')" :key="index">{{ text }}</li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Tool 4 -->
        <div class="tool-card">
          <div class="tool-content">
            <h3 class="tool-title">🗺️ {{ $t('code.tool4.title') }}</h3>
            <div class="tool-layout">
              <div class="tool-image-wrapper">
                <img class="tool-image" :src="pics.tool_4" alt="NavMesh Minimap Generator" />
              </div>
              <div class="tool-text">
                <p class="tool-description">{{ $t('code.tool4.description') }}</p>
                <ul class="feature-list">
                  <li v-for="(text, index) in $tm('code.tool4.features')" :key="index">{{ text }}</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const getIconPath = (filename) => {
  return new URL(`../assets/${filename}.png`, import.meta.url).href;
};
const pics = {
  tool_1: getIconPath('ColorController'),
  tool_2: getIconPath('MazeGenerator'),
  tool_3: getIconPath('MazeDecoration'),
  tool_4: getIconPath('Minimap'),

};

function resizeUnity() {
  //找到外層容器與縮放用的盒子
  const wrapper = document.querySelector('.game-wrapper');
  const box = document.querySelector('.unity-scale-box');
  //取得容器的實際大小
  const W = wrapper.clientWidth;
  const H = wrapper.clientHeight;
  //等比縮放
  const scale = Math.min(W / 1280, H / 720);
  //把結果存成 CSS 變數
  box.style.setProperty('--unity-scale', scale);
}
//當頁面載入 / 視窗縮放時重新計算
window.addEventListener('resize', resizeUnity);
window.addEventListener('load', resizeUnity);

</script>

<style scoped>
/* Hero Section */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 30px;
}

.hero-badge {

  padding: 0.4rem 1rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  font-weight: 500;
}

.title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #00d4ff;
}

.subtitle {
  font-size: 1rem;
  text-align: center;
  margin: 20px;
}

/* Game Frame */
.game-wrapper {
  aspect-ratio: 16/9;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.unity-scale-box {
  /* 外殼去自動等比縮放 */
  --unity-scale: 0.76;
  transform: scale(var(--unity-scale));
  transform-origin: top left;
  position: absolute;
}

.unity-iframe {
  width: 1280px;
  height: 720px;
  border: none;
}




/* Gameplay Section */
.gameplay-section {
  margin-bottom: 4rem;
}

.gameplay-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.8rem;
  text-align: center;
}

.gameplay-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;
}

.gameplay-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0;
  color: #fff;
  line-height: 1.5;
}

/* Tools Section */
.tools-section {
  margin-top: 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
}

.section-subtitle {
  font-size: 1rem;
  opacity: 0.6;
}

/* Tool Cards */
.tool-card {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.tool-content {
  padding-top: 0.5rem;
}

.tool-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #fff;
}

.tool-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.tool-image-wrapper {
  width: 300px;
  flex-shrink: 0;
}

.tool-image {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  object-fit: cover;
}

.tool-text {
  flex: 1;
  min-width: 0;
}

.tool-description {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
  font-size: 0.95rem;
  opacity: 0.9;
}

.feature-list li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #00d4ff;
  font-weight: bold;
}


@media (max-width: 600px) {

  .title {
    font-size: 1.8rem;
  }

  .gameplay-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .tool-card {
    padding: 1.5rem;
  }

  .tool-title {
    font-size: 1.3rem;
  }
}
</style>