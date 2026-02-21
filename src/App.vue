<template>
  <router-view v-slot="{ Component }">
    <transition name="page-transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
</script>

<style scoped>
.page-transition-enter-active {
  animation: pageIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.page-transition-leave-active {
  animation: pageOut 0.25s cubic-bezier(0.4, 0, 1, 1) both;
}

@keyframes pageIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pageOut {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-8px); }
}
</style>
