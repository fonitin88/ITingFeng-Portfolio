<template>
    <div class="social-links">
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/i-tingfeng/" target="_blank" rel="noopener noreferrer" class="social-link"
            title="LinkedIn">
            <svg class="social-icon" fill="white">
                <use href="#icon-linkedin"></use>
            </svg>
        </a>

        <!-- ArtStation -->
        <a href="https://www.artstation.com/itingfeng" target="_blank" rel="noopener noreferrer" class="social-link"
            title="ArtStation">
            <svg class="social-icon" fill="white">
                <use href="#icon-artstation"></use>
            </svg>
        </a>

        <!-- Gmail -->

    </div>
</template>

<script setup>


</script>

<style>
.social-links {
    gap: 0.75rem;
}

.social-link {
    text-decoration: none;
    display: flex;
}

.social-email {
    text-decoration: none;
    display: flex;
    background: none;
    border: none;
}

.social-icon {
    width: 20px;
    height: 20px;
    stroke: white;
    stroke-width: 2;
    transition: color 0.3s;
}

.social-icon:hover {
    fill: rgb(110, 185, 215);
}
</style>