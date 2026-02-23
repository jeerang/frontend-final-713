<template>
  <div class="card">
    <div class="header-banner">
      <div class="back-link" @click="$router.push('/dashboard/vote/parties')">
        <svg viewBox="0 0 24 24" fill="none" class="back-icon" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        <span>กลับไปรายชื่อพรรค</span>
      </div>
      
      <div class="party-info">
        <img src="https://api.dicebear.com/7.x/identicon/svg?seed=party1" alt="logo" class="party-logo" />
        <div class="party-text">
          <h2 class="title">พรรคทดสอบประชาธิปไตย ที่ 1</h2>
          <p class="subtitle">นโยบายหลัก: พัฒนาประเทศด้วยระบบดิจิทัล</p>
        </div>
      </div>
    </div>

    <div class="members-section">
      <div class="section-title">
        <h3>รายชื่อสมาชิกพรรค (<span class="count">12 ท่าน</span>)</h3>
      </div>
      
      <div class="members-grid">
        <div v-for="i in 12" :key="i" class="member-card">
          <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=Member${i}`" alt="member" class="member-avatar" />
          <div class="member-details">
            <h4 class="member-name">นาย/นาง สมาชิกพรรค ที่ {{ i }}</h4>
            <p class="member-role">สมาชิก</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 2.5rem;
  overflow: hidden;
  position: relative;
}

.header-banner {
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--border-input);
  padding-bottom: 2rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.5rem;
  padding: 4px 12px;
  border-radius: 999px;
  transition: all 0.2s;
}

.back-link:hover {
  background-color: var(--primary-light);
}

.back-icon {
  width: 16px;
  height: 16px;
}

.party-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.party-logo {
  width: 100px;
  height: 100px;
  border-radius: var(--radius-md);
  background-color: #f8fafc;
  padding: 10px;
  border: 1px solid var(--border-input);
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.members-section {
  padding-top: 1rem;
}

.section-title {
  margin-bottom: 2rem;
}

.section-title h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 8px;
}

.count {
  color: var(--primary);
  background: var(--primary-light);
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.9rem;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.member-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f8fafc;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  transition: all 0.2s;
}

.member-card:hover {
  background-color: white;
  border-color: var(--primary-light);
  box-shadow: var(--shadow-sm);
  transform: translateY(-2px);
}

.member-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e2e8f0;
}

.member-details {
  flex: 1;
}

.member-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 4px;
}

.member-role {
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
