<template>
  <div class="card">
    <div class="header">
      <h2 class="title">ผลการลงคะแนนเสียง</h2>
      <p class="subtitle">เขตเลือกตั้งที่ 1 จังหวัดเชียงใหม่ (นับคะแนนแล้ว 100%)</p>
    </div>

    <div class="results-container">
      <div class="result-row" v-for="(candidate, index) in sortedCandidates" :key="index">
        <div class="rank" :class="{ 'top-rank': index === 0 }">{{ index + 1 }}</div>
        
        <div class="candidate-profile">
           <img :src="candidate.avatar" alt="candidate" class="avatar" />
           <div class="details">
             <div class="name-party">
               <span class="name">{{ candidate.name }} (เบอร์ {{ candidate.number }})</span>
               <span class="party">{{ candidate.party }}</span>
             </div>
           </div>
        </div>

        <div class="vote-bar-container">
          <div class="vote-bar bg-primary" :style="{ width: `${(candidate.votes / maxVotes) * 100}%` }">
            <span class="vote-text">{{ candidate.votes.toLocaleString() }} คะแนน</span>
          </div>
        </div>
      </div>
      
      <!-- Vote No -->
      <div class="result-row vote-no-row">
        <div class="rank text-muted">-</div>
        <div class="candidate-profile">
           <div class="avatar fallback-avatar">0</div>
           <div class="details">
             <div class="name-party">
               <span class="name text-muted">ไม่ประสงค์ลงคะแนน</span>
               <span class="party">Vote No</span>
             </div>
           </div>
        </div>
        <div class="vote-bar-container">
          <div class="vote-bar bg-muted" :style="{ width: `${(voteNo / maxVotes) * 100}%` }">
            <span class="vote-text">{{ voteNo.toLocaleString() }} คะแนน</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const candidates = [
  { name: 'นาย A นามสกุล A', number: 1, party: 'พรรคก้าวไกล', votes: 125000, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=A' },
  { name: 'นาง B นามสกุล B', number: 2, party: 'พรรคเพื่อไทย', votes: 98000, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=B' },
  { name: 'นาย C นามสกุล C', number: 3, party: 'พรรคประชาธิปัตย์', votes: 45000, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=C' },
  { name: 'นาง D นามสกุล D', number: 4, party: 'พรรคภูมิใจไทย', votes: 20000, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=D' }
];

const voteNo = 5400;

const sortedCandidates = computed(() => {
  return [...candidates].sort((a, b) => b.votes - a.votes);
});

const maxVotes = computed(() => {
  return Math.max(...candidates.map(c => c.votes), voteNo);
});
</script>

<style scoped>
.card {
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 2.5rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-main);
}

.subtitle {
  font-size: 1rem;
  color: var(--success);
  font-weight: 500;
  margin-top: 8px;
}

.results-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.result-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #f8fafc;
  border-radius: var(--radius-md);
  transition: transform 0.2s;
}

.result-row:hover {
  transform: translateX(4px);
  background-color: #f1f5f9;
}

.rank {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-muted);
  width: 30px;
  text-align: center;
}

.top-rank {
  color: #f59e0b;
  font-size: 2rem;
}

.candidate-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 280px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e2e8f0;
  object-fit: cover;
}

.fallback-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-muted);
}

.details {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--text-main);
  display: block;
}

.party {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.vote-bar-container {
  flex: 1;
  background-color: #e2e8f0;
  height: 36px;
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
}

.vote-bar {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  transition: width 1s ease-out;
  min-width: fit-content;
}

.bg-primary {
  background: linear-gradient(90deg, var(--primary), #8b5cf6);
}

.bg-muted {
  background-color: #94a3b8;
}

.vote-text {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.vote-no-row {
  opacity: 0.85;
}

.text-muted {
  color: var(--text-muted) !important;
}
</style>
