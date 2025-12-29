<template>
  <!-- Games Page -->
  <div class="main-content">
    <div class="delivery-page">
      <!-- Game Header with Gradient Background -->
      <section class="hero">
        <h1 class="title"> Delivery Dash</h1>
        <div class="badge">
          <div class="hero-badge">Unity</div>
          <div class="hero-badge">WEB</div>
          <div class="hero-badge">c#</div>
        </div>
      </section>

      <!-- Game Iframe with Enhanced Frame -->
      <div class="game-wrapper">
        <div class="unity-scale-box">
          <iframe src="https://fonitin88.github.io/delivery-demo/" class="unity-iframe"></iframe>
        </div>
      </div>

      <!-- Gameplay Section -->
      <section class="gameplay-section">
        <div class="gameplay-grid">
          <!-- $tm() 專門用來讀「非字串」（陣列 / 物件）」 -->
          <div class="gameplay-card">
            <img class="gameplayPic" src="../assets/WASD.png" alt="WASD">
            <h3 class="card-title">{{ $t('code.gameplayCards1') }}</h3>
          </div>
          <div class="gameplay-card">
            <img class="gameplayPic" src="../assets/Space.png" alt="Space">
            <h3 class="card-title">{{ $t('code.gameplayCards2') }}</h3>
          </div>
        </div>
        <!-- 收集物件說明 -->
        <div class="gameplay-grid">
          <div class="gameplay-card">
            <img class="gameplayPic" src="../assets/Package_icon.png" alt="Space">
            <h3 class="card-title">{{ $t('code.gameplayCards3') }}</h3>
          </div>
          <div class="gameplay-card">
            <img class="gameplayPic" src="../assets/Robot.png" alt="Space">
            <h3 class="card-title">{{ $t('code.gameplayCards4') }}</h3>
          </div>
          <div class="gameplay-card">
            <img class="gameplayPic" src="../assets/Poison.png" alt="Space">
            <h3 class="card-title">{{ $t('code.gameplayCards5') }}</h3>
          </div>
          <div class="gameplay-card">
            <img class="gameplayPic" src="../assets/Gas.png" alt="WASD">
            <h3 class="card-title">{{ $t('code.gameplayCards6') }}</h3>
          </div>
          <div class="gameplay-card">
            <img class="gameplayPic" src="../assets/wrench.png" alt="Space">
            <h3 class="card-title">{{ $t('code.gameplayCards7') }}</h3>
          </div>
          <div class="gameplay-card">
            <img class="gameplayPic" src="../assets/battery.png" alt="Space">
            <h3 class="card-title">{{ $t('code.gameplayCards8') }}</h3>
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
                <img class="tool-image" :src="pics.tool_4" alt="Tools" />
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
  if (!wrapper || !box) return;
  //取得容器的實際大小
  const W = wrapper.clientWidth;
  const H = wrapper.clientHeight;
  if (!W || !H) return;
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
  gap: 16px;
  flex-wrap: wrap;
  text-align: center;
}

.badge {
  display: flex;
  gap: 10px;
}


.hero-badge {
  padding: 0.4rem 1rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  color: #00d4ff;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.title {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 800;
  margin-bottom: 0.25rem;
  color: #00d4ff;
}

.subtitle {
  font-size: 1rem;
  text-align: center;
  margin: 20px;
}

/* ===== Game Frame (Responsive) ===== */
.game-wrapper {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 2rem;

  aspect-ratio: 16 / 9;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* 讓 iframe 直接填滿容器（不需要 1280*720 + scale） */
.unity-scale-box {
  position: absolute;
  inset: 0;
}

.unity-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Gameplay Section */
.gameplay-section {
  margin-bottom: 4rem;
}

.gameplayPic {
  height: 70px;
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.2rem;
  margin-top: 20px;
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
  font-size: clamp(1.35rem, 3vw, 1.8rem);
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
  margin: 0 auto 2rem;
  max-width: 1100px;
}

.tool-content {
  padding-top: 0.5rem;
}

.tool-title {
  font-size: clamp(1.2rem, 2.6vw, 1.5rem);
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
  width: min(340px, 40vw);
  flex-shrink: 0;
}

.tool-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  object-fit: cover;
  display: block;
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

/* ===== Tablet ===== */
@media (max-width: 900px) {
  .tool-card {
    padding: 1.5rem;
  }

  .tool-layout {
    gap: 1.25rem;
  }

  .tool-image-wrapper {
    width: min(320px, 44vw);
  }
}

/* ===== Mobile ===== */
@media (max-width: 600px) {


  .title {
    font-size: 1.7rem;
  }

  .gameplay-grid {
    grid-template-columns: 1fr;
  }

  /* Tool 改直排 */
  .tool-layout {
    flex-direction: column;
  }

  .tool-image-wrapper {
    width: 100%;
  }

  .tool-card {
    padding: 1.25rem;
  }
}
</style>