<template>
  <div class="card">
    <div class="header">
      <h2 class="title">รายชื่อพรรคการเมือง</h2>
      <p class="subtitle">ข้อมูลรายชื่อพรรค และนโยบายพรรคสำหรับผู้มีสิทธิเลือกตั้ง</p>
    </div>

    <div class="search-section">
      <div class="search-box">
        <svg class="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z" />
        </svg>
        <input type="text" placeholder="ค้นหาชื่อพรรค" class="search-input" />
      </div>
    </div>

    <div class="parties-list">
      <div v-for="i in 8" :key="i" class="party-card">
        <div class="party-logo-wrapper">
          <img :src="`https://api.dicebear.com/7.x/identicon/svg?seed=party${i}`" alt="logo" class="party-logo" />
        </div>
        
        <div class="party-details">
          <h3 class="party-name">พรรคทดสอบประชาธิปไตย ที่ {{ i }}</h3>
          <p class="party-description">
            นโยบายหลัก: เราจะพัฒนาประเทศให้เจริญก้าวหน้า ด้วยระบบดิจิทัลที่ปลอดภัยและทันสมัยที่สุด
          </p>
          <div class="party-meta">
            <span class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              สมาชิก 12 ท่าน
            </span>
          </div>
        </div>

        <div class="party-actions">
          <button class="btn btn-outline" @click="viewMembers">ดูรายชื่อสมาชิก</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const viewMembers = () => {
  router.push('/dashboard/parties/public/members');
};
</script>

<style scoped>
.card {
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 2.5rem;
}

.header {
  margin-bottom: 2rem;
  text-align: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.search-section {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.search-box {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.search-input {
  width: 100%;
  padding: 12px 16px 12px 42px;
  border: 1px solid var(--border-input);
  border-radius: 999px;
  outline: none;
  font-size: 1rem;
  transition: all 0.2s;
}

.search-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-light);
}

.icon-search {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--text-muted);
}

.parties-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.party-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-md);
  transition: all 0.2s;
  background: white;
}

.party-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.party-logo-wrapper {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.party-logo {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-sm);
  background-color: #f1f5f9;
  object-fit: cover;
  padding: 8px;
}

.party-details {
  flex: 1;
  text-align: center;
}

.party-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.party-description {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.party-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
}

.meta-item svg {
  width: 14px;
  height: 14px;
}

.party-actions {
  display: flex;
  justify-content: center;
}

.btn-outline {
  width: 100%;
  padding: 8px 16px;
  border: 1px solid var(--primary);
  color: var(--primary);
  background: transparent;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
}
</style>
