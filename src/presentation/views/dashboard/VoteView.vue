<template>
  <div class="card">
    <div class="header">
      <h2 class="title">ลงคะแนนเสียง</h2>
      <p class="subtitle">เลือกผู้สมัครที่คุณต้องการลงคะแนน (เลือกได้ 1 ท่าน)</p>
    </div>

    <div class="voting-info">
      <div class="info-badge">เขตเลือกตั้งที่ 1 จังหวัดเชียงใหม่</div>
    </div>

    <div class="candidates-grid">
      <!-- Vote No candidate -->
      <label class="candidate-card vote-no-card" :class="{ 'selected': selectedCandidate === '0' }">
        <input type="radio" name="vote" value="0" v-model="selectedCandidate" class="visually-hidden" />
        <div class="candidate-number">0</div>
        <div class="candidate-details">
          <h3 class="candidate-name">ไม่ประสงค์ลงคะแนน</h3>
          <p class="candidate-party">Vote No</p>
        </div>
        <div class="selection-indicator">
          <svg v-if="selectedCandidate === '0'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
      </label>

      <!-- Candidates -->
      <label v-for="i in 5" :key="i" class="candidate-card" :class="{ 'selected': selectedCandidate === String(i) }">
        <input type="radio" name="vote" :value="String(i)" v-model="selectedCandidate" class="visually-hidden" />
        <div class="candidate-number">{{ i }}</div>
        <div class="candidate-profile">
           <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=Candidate${i}`" alt="candidate" class="avatar" />
        </div>
        <div class="candidate-details">
          <h3 class="candidate-name">นาย/นาง ชื่อผู้สมัคร นามสกุล</h3>
          <p class="candidate-party">พรรคการเมือง {{ i }}</p>
        </div>
        <div class="selection-indicator">
          <svg v-if="selectedCandidate === String(i)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
      </label>
    </div>

    <div class="actions">
      <button class="btn btn-primary btn-large" :disabled="!selectedCandidate" @click="confirmVote">
        ยืนยันการลงคะแนน
      </button>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmModal" class="modal-overlay">
      <div class="modal-content animate-slide-down">
        <h3>ยืนยันการลงคะแนน</h3>
        <p>คุณต้องการยืนยันการลงคะแนนให้หมายเลข {{ selectedCandidate }} ใช่หรือไม่?</p>
        <p class="warning-text">คุณไม่สามารถเปลี่ยนแปลงผลการลงคะแนนได้หลักจากยืนยันแล้ว</p>
        
        <div class="modal-actions">
          <button class="btn btn-cancel" @click="showConfirmModal = false">ยกเลิก</button>
          <button class="btn btn-primary" @click="submitVote">ยืนยัน</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedCandidate = ref<string | null>(null);
const showConfirmModal = ref(false);

const confirmVote = () => {
  if (selectedCandidate.value) {
    showConfirmModal.value = true;
  }
};

const submitVote = () => {
  showConfirmModal.value = false;
  alert('ลงคะแนนสำเร็จ');
  // Routing to results could happen here
};
</script>

<style scoped>
.card {
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-main);
}

.subtitle {
  font-size: 1rem;
  color: var(--text-muted);
  margin-top: 8px;
}

.voting-info {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.info-badge {
  background-color: var(--primary-light);
  color: var(--primary);
  padding: 8px 16px;
  border-radius: 999px;
  font-weight: 500;
  font-size: 0.9rem;
}

.candidates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.candidate-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 2px solid var(--border-input);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.candidate-card:hover {
  border-color: var(--primary-light);
  background-color: #fafafa;
}

.candidate-card.selected {
  border-color: var(--primary);
  background-color: var(--primary-light);
}

.candidate-number {
  font-family: 'Prompt', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  width: 50px;
  text-align: center;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f1f2f6;
  object-fit: cover;
}

.candidate-details {
  flex: 1;
}

.candidate-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 4px;
}

.candidate-party {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.selection-indicator {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.candidate-card.selected .selection-indicator {
  background-color: var(--primary);
  border-color: var(--primary);
  color: white;
}

.selection-indicator svg {
  width: 14px;
  height: 14px;
}

.vote-no-card {
  background-color: #f8fafc;
}

.vote-no-card .candidate-number {
  color: var(--text-muted);
}

.actions {
  display: flex;
  justify-content: center;
}

.btn-large {
  padding: 14px 40px;
  font-size: 1.1rem;
  border-radius: 999px;
}

.btn-primary:disabled {
  background-color: #cbd5e1;
  cursor: not-allowed;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: white;
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  max-width: 450px;
  width: 90%;
  text-align: center;
}

.modal-content h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--text-main);
}

.modal-content p {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.warning-text {
  color: var(--error) !important;
  font-size: 0.85rem;
  margin-bottom: 2rem !important;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 10px 24px;
  border: none;
  font-weight: 500;
  border-radius: var(--radius-md);
  cursor: pointer;
}

.btn-cancel {
  background-color: #f1f5f9;
  color: #475569;
}

.btn-cancel:hover {
  background-color: #e2e8f0;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
}
</style>
