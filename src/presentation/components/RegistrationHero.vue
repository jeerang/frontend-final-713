<template>
  <div class="hero-container scale-fade-in">
    <!-- Using the generated image as a beautifully integrated background/hero graphic -->
    <div class="hero-image-wrapper">
      <img src="/images/voting_illustration.png" alt="Voting Box Illustration" class="illustration" @error="handleImageError" />
    </div>

    <!-- Fallback/Overlay content if image fails or for added styled text -->
    <div class="styled-overlay" v-if="!imageLoaded || true">
      <h1 class="demo-text">Demo</h1>
      <h1 class="crazy-text">CraZy</h1>
      <h1 class="vote-text">VOTE</h1>
      
      <!-- large stylish X in background -->
      <div class="accent-x">X</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const imageLoaded = ref(true);

const handleImageError = () => {
  imageLoaded.value = false;
};
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: radial-gradient(circle at center, #5931bd 0%, #30177d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.scale-fade-in {
  animation: scaleFadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

@keyframes scaleFadeIn {
  from { opacity: 0; transform: scale(1.05); }
  to { opacity: 1; transform: scale(1); }
}

.hero-image-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.illustration {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Adds a slight blending to make it fit nicely with the overlay text */
  opacity: 0.9;
}

/* Styled text overlay mimicking the original prompt design */
.styled-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20%;
  pointer-events: none; /* Let clicks pass to the graphic if needed */
  z-index: 10;
}

.demo-text {
  font-family: 'Bangers', cursive;
  font-size: 5rem;
  color: #fff;
  letter-spacing: 0.2rem;
  text-shadow: 0 4px 10px rgba(0,0,0,0.3);
  margin-left: -15rem;
  transform: rotate(-5deg);
}

.crazy-text {
  font-family: 'Caveat', cursive, sans-serif;
  font-size: 6rem;
  color: #ea21e9;
  text-shadow: 0 4px 10px rgba(0,0,0,0.3);
  margin-top: -3rem;
  z-index: 2;
  transform: rotate(-10deg);
}

.vote-text {
  font-family: 'Bangers', cursive;
  font-size: 7rem;
  color: #ff5722;
  letter-spacing: 0.3rem;
  text-shadow: 0 4px 10px rgba(0,0,0,0.3);
  margin-top: -4rem;
  margin-left: 10rem;
  transform: rotate(-2deg);
}

.accent-x {
  position: absolute;
  font-family: 'Bangers', cursive;
  font-size: 35rem;
  color: #00ff2a;
  opacity: 0.8;
  top: -5%;
  right: 5%;
  z-index: 1;
  transform: rotate(15deg);
  text-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
</style>
