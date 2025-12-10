<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-bottom">
        <Social class="social-links" />
        <div class="email-row">
          <svg class="social-icon" fill="none">
            <use href="#icon-gmail"></use>
          </svg>
          <p>fonitin@gmail.com</p>
        </div>
        <p>Copyright © 2025 – I Ting Feng</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Social from "../components/Social.vue";
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  background-color: #1f2937;
  border-top: 1px solid rgba(112, 126, 126, 0.444);
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
}

.footer-link:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  font-size: 0.875rem;
  color: #9ca3af;
}

.social-links {
  display: none;

}

.email-row {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  padding-bottom: 6px;
}



@media (max-width: 700px) {
  .social-links {
    display: inline-flex;
    margin-bottom: 10px;
    transform: scale(1.5)
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 900;
  }
}
</style>