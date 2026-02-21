<template>
  <div class="registration-layout animate-fade-in">
    <!-- Left Panel: Form -->
    <div class="form-panel-wrapper">
      <RegistrationForm />
    </div>
    
    <!-- Right Panel: Decoration/Hero -->
    <div class="hero-panel-wrapper">
      <RegistrationHero />
    </div>
  </div>
</template>

<script setup lang="ts">
import RegistrationForm from '../components/RegistrationForm.vue';
import RegistrationHero from '../components/RegistrationHero.vue';
</script>

<style scoped>
.registration-layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.form-panel-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-page);
  padding: 2rem;
}

.hero-panel-wrapper {
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
}

/* Responsive layout: stack columns on smaller screens */
@media (max-width: 1024px) {
  .registration-layout {
    flex-direction: column;
  }
  .hero-panel-wrapper {
    display: none; /* simple hide for mobile, focus on form */
  }
}
</style>
