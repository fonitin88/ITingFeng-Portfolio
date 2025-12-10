<template>
  <div class="main-content">
    <div class="experience-page">
      <div class="timeline-container">
        <div class="timeline">
          <div v-for="(company, index) in companies" :key="index" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="company-info">
                <div class="company-header">
                  <span>
                    <img class="company-icon" :src="company.icon" :alt="$t('experience.' + company.id + '.name')" />
                  </span>
                  <span class="company-name">
                    {{ $t('experience.' + company.id + '.name') }}
                  </span>
                </div>
                <div class="company-details">
                  {{ $t('experience.' + company.id + '.period') }}
                  <div class="company-meta">
                    <span class="meta-icon">💎</span>
                    {{ $t('experience.' + company.id + '.duration') }}
                  </div>
                  <div class="company-meta">
                    <span class="meta-icon">📍</span>
                    {{ $t('experience.' + company.id + '.location') }}
                  </div>
                </div>
              </div>

              <div class="projects-list">
                <div v-for="(project, pIndex) in company.projects" :key="pIndex" class="project-item">
                  <img :src="project.logo" :alt="$t('experience.' + company.id + '.projects.' + project.id + '.name')"
                    class="project-logo" />
                  <div class="project-info">
                    <div class="project-name">
                      {{ $t('experience.' + company.id + '.projects.' + project.id + '.name') }}
                    </div>
                    <div class="project-role">
                      <span class="diamond">◆</span>
                      <!-- role 有 <br>，所以用 v-html -->
                      <span v-html="$t('experience.' + company.id + '.projects.' + project.id + '.role')"></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from "vue";

// 公司 ICON
import xLegendIcon from '../assets/ICON/X-legend.png';
import Toppath from '../assets/ICON/Toppath.png';
import Finifugu from '../assets/ICON/Finifugu.png';
import Neobards from '../assets/ICON/Neobards_logo.png';
import Ringtail from '../assets/ICON/Ringtail.png';

// 遊戲 ICON
import Dragon from '../assets/ICON/Dragon.png';
import GD from '../assets/ICON/GD_art_1.png';
import laplace from '../assets/ICON/laplace.png';
import aurakingdom from '../assets/ICON/aurakingdom.png';
import eBET from '../assets/ICON/eBET.png';
import ThemePark from '../assets/ICON/ThemePark.png';
import Dwm from '../assets/ICON/Dwm.png';
import Scape from '../assets/ICON/Scape.png';

// 🔹 只放「id + 圖片」，文字改交給 i18n 管
const companies = ref([
  {
    id: "xlegend",
    icon: xLegendIcon,
    projects: [
      { id: "dragon", logo: Dragon },
      { id: "gd", logo: GD },
      { id: "laplace", logo: laplace },
      { id: "aurakingdom", logo: aurakingdom },
    ],
  },
  {
    id: "toppath",
    icon: Toppath,
    projects: [
      { id: "ebet", logo: eBET },
    ],
  },
  {
    id: "finifugu",
    icon: Finifugu,
    projects: [
      { id: "themepark", logo: ThemePark },
    ],
  },
  {
    id: "neobards",
    icon: Neobards,
    projects: [
      { id: "dwm", logo: Dwm },
    ],
  },
  {
    id: "ringtail",
    icon: Ringtail,
    projects: [
      { id: "scape", logo: Scape },
    ],
  },
]);
</script>

<style scoped>
.experience-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}


/* Timeline Container */
.timeline-container {
  position: relative;
}

.timeline {
  position: relative;
  padding-left: 0;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 180px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #f39c12 0%, #e67e22 100%);
  box-shadow: 0 0 10px rgba(243, 156, 18, 0.3);
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.timeline-item:nth-child(1) {
  animation-delay: 0.1s;
}

.timeline-item:nth-child(2) {
  animation-delay: 0.2s;
}

.timeline-item:nth-child(3) {
  animation-delay: 0.3s;
}

.timeline-item:nth-child(4) {
  animation-delay: 0.4s;
}

.timeline-item:nth-child(5) {
  animation-delay: 0.5s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-dot {
  position: absolute;
  left: 173.5px;
  top: 3px;
  width: 16px;
  height: 16px;
  background: #f39c12;
  border-radius: 50%;
  border: 3px solid #1e2139;
  box-shadow: 0 0 0 3px rgba(243, 156, 18, 0.2);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.3);
  box-shadow: 0 0 0 6px rgba(243, 156, 18, 0.3);
}

.timeline-content {
  display: flex;
  gap: 25px;
  align-items: flex-start;
}

/* Company Info */
.company-info {
  flex: 0 0 180px;
}

.company-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.company-icon {
  width: 30px;
}

.company-name {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

.company-details {
  font-size: 13px;
  color: #b0b0b0;
  line-height: 1.6;
}

.company-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
}

.meta-icon {
  font-size: 12px;
}

/* Projects List */
.projects-list {
  flex: 1;
}

.project-item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.project-item:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(243, 156, 18, 0.3);
  transform: translateX(5px);
}

.project-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 8px;
}

.project-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2rem;

}

.project-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
}

.project-role {
  font-size: 13px;
  color: #88d4ff;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.5;
}

.diamond {
  color: #f39c12;
  font-size: 11px;
  margin-top: 2px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .experience-page {
    padding: 30px 15px;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-dot {
    left: 13.5px;
  }

  .timeline-content {
    flex-direction: column;
    padding-left: 50px;
  }

  .company-info {
    flex: 1 1 auto;
  }

  .projects-list {
    width: 100%;
  }

  .project-item {

    flex-direction: column;
    align-items: flex-start;
    gap: 15px;

  }

  .project-logo {
    width: 50px;
    height: 50px;
  }
}
</style>
