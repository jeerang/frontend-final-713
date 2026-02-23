<template>
  <div class="dashboard-layout">
    <!-- Top Navigation -->
    <header class="top-nav">
      <div class="nav-container">
        <!-- Main Menus (Right aligned) -->
        <nav class="main-menu">
          <router-link to="/dashboard/vote" class="menu-item">ลงคะแนนเสียง/ดูผลคะแนน</router-link>
          <router-link to="/dashboard/parties" class="menu-item" :class="{ 'router-link-active': isPartiesActive }">รายชื่อพรรค</router-link>
          <router-link to="/dashboard/admin" class="menu-item">ระบบบริหารการเลือกตั้ง</router-link>
          <router-link to="/dashboard/system" class="menu-item" :class="{ 'router-link-active': isSystemActive }">จัดการระบบ</router-link>
          <router-link to="/dashboard/profile" class="menu-item">ข้อมูลผู้ใช้งาน</router-link>
        </nav>
      </div>
    </header>

    <!-- Sub Navigation -->
    <div v-if="hasSubNav" class="sub-nav">
      <div class="nav-container sub-nav-container">
        <!-- Sub menu for 'รายชื่อพรรค' -->
        <template v-if="isPartiesActive">
          <router-link to="/dashboard/parties" class="sub-menu-item" exact-active-class="sub-menu-active">พรรคการเมือง</router-link>
          <router-link to="/dashboard/parties/candidates" class="sub-menu-item" exact-active-class="sub-menu-active">ตั้งค่าผู้ลงสมัคร</router-link>
        </template>
        
        <!-- Sub menu for 'จัดการระบบ' -->
        <template v-if="isSystemActive">
          <router-link to="/dashboard/system/constituencies" class="sub-menu-item" exact-active-class="sub-menu-active">จัดการเขตเลือกตั้ง</router-link>
          <router-link to="/dashboard/system/users" class="sub-menu-item" exact-active-class="sub-menu-active">จัดการรายชื่อผู้ใช้งาน</router-link>
        </template>
      </div>
    </div>

    <!-- Main Content Box -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isPartiesActive = computed(() => route.path.startsWith('/dashboard/parties'));
const isSystemActive = computed(() => route.path.startsWith('/dashboard/system'));

const hasSubNav = computed(() => isPartiesActive.value || isSystemActive.value);
</script>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
  background-color: var(--bg-page);
  display: flex;
  flex-direction: column;
}

.top-nav {
  background-color: white;
  border-bottom: 1px solid var(--primary);
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem;
  height: 60px;
}

.nav-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.main-menu {
  display: flex;
  gap: 2rem;
}

.menu-item {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 18px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.menu-item:hover {
  color: var(--primary);
}

.menu-item.router-link-active {
  color: var(--primary);
}

.sub-nav {
  background-color: var(--bg-page);
  border-bottom: 1px solid #e2e8f0;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 4rem;
}

.sub-nav-container {
  justify-content: flex-start;
  gap: 1rem;
}

.sub-menu-item {
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: var(--radius-md);
  transition: all 0.2s;
}

.sub-menu-item:hover {
  background-color: rgba(89, 71, 236, 0.05);
}

.sub-menu-item.sub-menu-active {
  background-color: rgba(89, 71, 236, 0.1);
  color: var(--primary);
}

.main-content {
  flex: 1;
  padding: 2rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
