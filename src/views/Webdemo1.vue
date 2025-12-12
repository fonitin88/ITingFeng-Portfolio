<template>
    <!-- EECBET Project Page -->
    <div class="main-content">
        <div class="project-page">
            <!-- Project Header -->
            <section class="hero">
                <h1 class="title">{{ $t('eecbet.title') }}</h1>
                <div class="hero-badge">{{ $t('eecbet.badges') }}</div>
                <div class="hero-badge">ASP.NET</div>
                <div class="hero-badge">PostgreSQL</div>
                <div class="hero-badge">MVC</div>
                <div class="hero-badge">EF Core</div>
            </section>

            <!-- Demo Preview with Button -->
            <section class="demo-preview">
                <div class="demo-wrapper">
                    <img class="demo-pic" src="../assets/eec01.png" alt="webpic1">
                    <img class="demo-pic" src="../assets/eec02.png" alt="webpic2">
                </div>
            </section>

            <div class="demo-link">
                <a href="https://eecproject.onrender.com/" target="_blank" class="visit-button">
                    {{ $t('eecbet.visitLink') }}
                </a>
            </div>

            <!-- My Work Section -->
            <section class="work-section">
                <div class="section-header">
                    <h2 class="section-title"> {{ $t('eecbet.myWorkTitle') }}</h2>
                </div>
                <div class="work-grid">
                    <div class="work-card" v-for="(item, i) in $tm('eecbet.myWorkItems')" :key="i">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-desc">{{ item.desc }}</p>
                    </div>
                </div>
            </section>

            <!-- Tech Stack Section -->
            <section class="tech-section">
                <div class="section-header">
                    <h2 class="section-title">{{ $t('eecbet.techTitle') }}</h2>
                </div>
                <div class="tech-card">
                    <!-- Backend Card -->
                    <div class="tech-stack frontend-stack" v-for="(item, i) in $tm('eecbet.techStacks')" :key="i">
                        <h3 class="tech-title">{{ item.title }}</h3>
                        <p class="tech-description">{{ item.desc }}</p>
                        <div class="frontend-tag" v-for="(tag, j) in item.tags" :key="j">
                            {{ tag }}
                        </div>
                    </div>

                </div>
            </section>

        </div>
    </div>
</template>

<script setup>

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

.title {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    font-weight: 800;
    margin-bottom: 0.25rem;
    color: #00d4ff;
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

/* Demo Frame */
.demo-preview {
    display: flex;
    justify-content: center;
}

.demo-wrapper {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 16px;

    width: 100%;
    max-width: 980px;
    margin: 0 auto 1rem;

    padding: 10px;
    border-radius: 10px;
}

.demo-pic {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
    object-fit: cover;
}

/* 兩張圖在桌機並排，各吃一半 */
.demo-wrapper>.demo-pic {
    flex: 1;
    min-width: 0;
}

.demo-link {
    text-align: center;
    margin-bottom: 2rem;
}

.visit-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #0b46bd;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 600;
    transition: transform 0.3s ease;
}

.visit-button:hover {
    transform: translateY(-2px);
}

/* Work Section */
.work-section {
    margin-bottom: 4rem;
}

.section-header {
    text-align: center;
}

.section-title {
    font-size: clamp(1.35rem, 3vw, 1.8rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #fff;
}

.work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
}

.work-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
}

.card-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #00d4ff;
}

.card-desc {
    font-size: 0.95rem;
    opacity: 0.8;
    line-height: 1.6;
}

/* Tech Section */
.tech-section {
    margin-top: 4rem;
}

.tech-card {
    display: flex;
    gap: 15px;
    justify-content: center;
    padding: 2rem;

    width: 100%;
    max-width: 980px;
    margin: 0 auto 2rem;

    flex-wrap: wrap;
    /* 讓小螢幕自動換行 */
}

.tech-stack {
    flex: 1;
    min-width: 260px;
    /* 小螢幕會變成一欄 */
    max-width: 360px;

    background: rgba(0, 212, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
}

.tech-title {
    font-size: 1.35rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #fff;
}

.tech-description {
    font-size: 1rem;
    opacity: 0.85;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.frontend-stack {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.frontend-tag {
    background: rgba(123, 97, 255, 0.1);
    padding: 0.75rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    color: #7b61ff;
    border: 1px solid rgba(123, 97, 255, 0.3);
}

/* ===== Mobile ===== */
@media (max-width: 768px) {
    .hero {
        gap: 10px;
    }

    /* 圖片改成直排 */
    .demo-wrapper {
        flex-direction: column;
        gap: 12px;
        padding: 8px;
    }

    .visit-button {
        width: 100%;
        max-width: 360px;
    }

    .work-grid {
        grid-template-columns: 1fr;
    }

    .tech-card {
        padding: 1.25rem;
    }

    .tech-stack {
        min-width: 100%;
        max-width: 100%;
    }
}

/* ===== Small phones ===== */
@media (max-width: 420px) {

    .work-card,
    .tech-stack {
        padding: 1.1rem;
    }
}
</style>
