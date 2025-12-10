<template>
  <div class="main-content">
    <!-- 介紹區塊 -->
    <section class="intro-section">
      <div class="photo">
        <CircleMaskSvg :src="meImg" :size="260" :zoom="3.4" :offsetX="0" :offsetY="0.2" />
      </div>

      <p class="intro-text" v-html="$t('about.intro')"></p>

      <!-- 統計數據 -->
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-emoji">💻</div>
          <div class="stat-number">10+</div>
          <div class="stat-label">{{ $t('about.stats.years') }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-emoji">🎮</div>
          <div class="stat-number">8</div>
          <div class="stat-label">{{ $t('about.stats.games') }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-emoji">🎨</div>
          <div class="stat-number">More</div>
          <div class="stat-label">{{ $t('about.stats.artworks') }}</div>
        </div>
      </div>
    </section>

    <!-- Skills 區塊 -->
    <section class="content-section">
      <h2 class="section-title">{{ $t('about.sectionTitles.skills') }}</h2>
      <div class="skills-columns">
        <div class="skills-column">
          <ul>
            <li><i class="bi bi-arrows-fullscreen"></i>{{ $t('about.skills.col1.0') }}</li>
            <li><i class="bi bi-code-slash"></i>{{ $t('about.skills.col1.4') }}</li>
            <li><i class="bi bi-database-fill"></i>{{ $t('about.skills.col1.5') }}</li>
            <li><i class="bi bi-droplet-fill"></i>{{ $t('about.skills.col1.1') }}</li>
            <li><i class="bi bi-joystick"></i>{{ $t('about.skills.col1.2') }}</li>
            <li><i class="bi bi-magic"></i> {{ $t('about.skills.col1.3') }}</li>
          </ul>
        </div>
        <div class="skills-column">
          <ul>
            <li><i class="bi bi-box"></i>{{ $t('about.skills.col2.0') }}</li>
            <li><i class="bi bi-map-fill"></i>{{ $t('about.skills.col2.1') }}</li>
            <li><i class="bi bi-images"></i> {{ $t('about.skills.col2.2') }}</li>
            <li><i class="bi bi-lightbulb-fill"></i>{{ $t('about.skills.col2.3') }}</li>
            <li><i class="bi bi-diagram-3-fill"></i> {{ $t('about.skills.col2.4') }}</li>
            <li><i class="bi bi-asterisk"></i> {{ $t('about.skills.col2.5') }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Tools 區塊 -->
    <section class="content-section">
      <h2 class="section-title">{{ $t('about.sectionTitles.tools') }}</h2>
      <div class="tool-icons">
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/unity.png" alt="Unity">
          <span class="tool-name">Unity</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/Unreal.png" alt="Unreal">
          <span class="tool-name">Unreal</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/3dsMax.png" alt="3dsmax">
          <span class="tool-name">3ds Max</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/maya.png" alt="maya">
          <span class="tool-name">Maya</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/Blender.png" alt="Blender">
          <span class="tool-name">Blender</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/zbrush.png" alt="ZBrush">
          <span class="tool-name">ZBrush</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/SP.png" alt="Substance Painter">
          <span class="tool-name">Substance Painter</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/SD.png" alt="Substance Designer">
          <span class="tool-name">Substance Designer</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/AE.png" alt="AE">
          <span class="tool-name">After Effects</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/adobe-photoshop.png" alt="Photoshop">
          <span class="tool-name">Photoshop</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/figma.png" alt="Figma">
          <span class="tool-name">Figma</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/confluence.png" alt="Confluence">
          <span class="tool-name">Confluence</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/jira.png" alt="Jira">
          <span class="tool-name">Jira</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/Visual_Studio_Code.png" alt="VS Code">
          <span class="tool-name">VS Code</span>
        </span>
        <span class="tool-item">
          <img class="tool-pic" src="../assets/ICON/Visual_Studio.png" alt="Visual Studio">
          <span class="tool-name">Visual Studio</span>
        </span>
      </div>
    </section>

    <!-- Education 區塊 -->
    <section class="content-section">
      <h2 class="section-title">{{ $t('about.sectionTitles.education') }}</h2>
      <div class="section-text">
        <p>2008/09~2011/07 <br></br> <strong>{{ $t('about.education.line1.degree') }}</strong> <br></br>{{
          $t('about.education.line1.school') }}
        </p>
        <p>2025/08~2025/11<br></br> <strong>{{ $t('about.education.line2.degree') }}</strong> <br></br>{{
          $t('about.education.line2.school') }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import CircleMaskSvg from '../components/CircleMaskSvg.vue';
import meImg from '../assets/me.jpg';

export default {
  name: "AboutPage",
  components: {
    CircleMaskSvg
  },
  data() {
    return {
      meImg
    };
  }
};
</script>

<style scoped>
/* ===== 區塊樣式 ===== */
.content-section {
  padding: 1.5rem 0;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: white;
}

/* ===== 介紹區塊 ===== */
.intro-section {
  text-align: center;
  margin-bottom: 1rem;

}

.photo {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.intro-text {
  max-width: 900px;
  margin: 0 auto 1rem;
  font-size: 1.25rem;
  color: #d1d5db;
  line-height: 1.8;
}

.intro-text strong {
  color: white;
  font-weight: 600;
}

/* ===== 統計數據 ===== */
.stats-grid {
  display: flex;
  justify-content: center;
  gap: 7rem;
  background-color: #000e1fc0;
  padding-bottom: 1.3rem;
}

.stat-item {
  text-align: center;
}

.stat-emoji {
  font-size: 3rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.stat-label {
  font-size: 0.875rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ===== Skills 區塊 ===== */
.skills-columns {
  display: flex;
  justify-content: center;
  gap: 5rem;
  max-width: 900px;
  margin: 0 auto;

}

.skills-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skills-column li {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: #d1d5db;
}

.skills-column li i {
  margin-right: 0.5rem;
  color: #60a5fa;
}

/* ===== Tools 區塊 ===== */
.tool-icons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  justify-items: center;
}

.tool-item {
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 60px;
  /* height: 70px; */
}

.tool-pic {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
}

.tool-name {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(14, 2, 56, 0.577);
  color: white;
  font-size: 11px;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  text-align: center;
  padding: 4px;
  pointer-events: none;
}

.tool-item:hover {
  transform: scale(1.3);
  z-index: 10;
}

.tool-item:hover .tool-pic {
  opacity: 0.2;
}

.tool-item:hover .tool-name {
  opacity: 1;
}

/* ===== Education 區塊 ===== */
.section-text {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.section-text p {
  font-size: 1.1rem;
  color: #d1d5db;
  margin-bottom: 1rem;
  line-height: 1.8;
}

.section-text strong {
  color: white;
  font-weight: 600;
}

/* ===== RWD 響應式 ===== */
@media (max-width: 700px) {
  .stats-grid {
    gap: 2rem;
  }

  .skills-columns {
    flex-direction: column;
    gap: 0rem;
  }

  .tool-icons {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 1rem;
  }

  .tool-item {
    width: 60px;
    height: 60px;
  }
}
</style>