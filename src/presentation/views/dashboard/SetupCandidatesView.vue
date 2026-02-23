<template>
  <div class="card">
    <div class="header">
      <h2 class="title">รายชื่อผู้มีสิทธิ์เลือกตั้ง และตั้งค่าลงสมัคร</h2>
    </div>

    <div class="filters">
      <div class="dropdowns">
        <select class="select-input">
          <option>ทุกจังหวัด</option>
        </select>
        <select class="select-input">
          <option>ทุกเขตเลือกตั้ง</option>
        </select>
      </div>
      <div class="search-box">
        <svg class="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z" />
        </svg>
        <input type="text" placeholder="ค้นหาด้วยเลขที่บัตรประจำตัว 13 หลัก" class="search-input" />
      </div>
    </div>

    <div class="candidates-list">
      <div v-for="(candidate, index) in candidates" :key="index" class="candidate-row">
        
        <div class="candidate-profile">
          <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${candidate.name.replace(' ', '')}`" class="avatar" />
          <div>
            <div class="candidate-name">{{ candidate.name }}</div>
            <div class="candidate-id">เลขประจำตัว {{ candidate.id }}</div>
          </div>
        </div>

        <div class="candidate-status">
          <div class="status-zone">จังหวัด / เขตการเลือกตั้ง</div>
          <div class="toggle-container">
            <span class="toggle-label">ลงสมัครรับเลือกตั้ง</span>
            <label class="switch">
              <input type="checkbox" v-model="candidate.isCandidate">
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <div class="candidate-form">
          <div class="form-group flex-1">
            <label>สังกัดพรรค</label>
            <select class="input" :disabled="!candidate.isCandidate">
              <option>เลือกพรรค</option>
            </select>
          </div>
          <div class="form-group flex-2">
            <label>นโยบายผู้สมัคร</label>
            <input type="text" class="input" :disabled="!candidate.isCandidate" placeholder="นโยบาย..." />
          </div>
          <div class="form-group flex-1 form-group-number">
            <label>หมายเลขผู้สมัคร</label>
            <input type="number" class="input" min="0" value="0" :disabled="!candidate.isCandidate" />
          </div>
          <div class="form-actions">
            <button class="btn" :class="candidate.isCandidate ? 'btn-primary' : 'btn-disabled'" :disabled="!candidate.isCandidate">ลงสมัคร</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const candidates = ref([
  { name: 'Leslie Alexander', id: '1234567890123', isCandidate: false },
  { name: 'Michael Foster', id: '1234567890123', isCandidate: true },
  { name: 'Dries Vincent', id: '1234567890123', isCandidate: false },
  { name: 'Lindsay Walton', id: '1234567890123', isCandidate: false },
  { name: 'Courtney Henry', id: '1234567890123', isCandidate: false },
  { name: 'Tom Cook', id: '1234567890123', isCandidate: false },
  { name: 'Lex Aston', id: '1234567890123', isCandidate: false }
]);
</script>

<style scoped>
.card {
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 2rem;
}

.header {
  margin-bottom: 2rem;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-main);
}

.filters {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.dropdowns {
  display: flex;
  gap: 1rem;
}

.select-input {
  padding: 10px 16px;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-md);
  outline: none;
  min-width: 180px;
  color: var(--text-secondary);
  background-color: white;
}

.search-box {
  position: relative;
  width: 350px;
}

.search-input {
  width: 100%;
  padding: 10px 16px 10px 40px;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-md);
  outline: none;
}

.icon-search {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--text-muted);
}

.candidates-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.candidate-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.candidate-row:last-child {
  border-bottom: none;
}

.candidate-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 260px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f1f2f6;
  object-fit: cover;
}

.candidate-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-main);
}

.candidate-id {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 2px;
}

.candidate-status {
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.status-zone {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.toggle-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.toggle-label {
  font-size: 0.85rem;
  font-weight: 500;
}

.switch {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
}

.switch input { opacity: 0; width: 0; height: 0; }

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider { background-color: var(--primary); }
input:checked + .slider:before { transform: translateX(16px); }

.candidate-form {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  flex: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-main);
}

.input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: 0.9rem;
}

.input:disabled {
  background-color: #f4f5f9;
  color: #a0aec0;
  border-color: #e2e8f0;
}

.flex-1 { flex: 1; }
.flex-2 { flex: 2; }
.form-group-number { max-width: 100px; }

.form-actions {
  margin-bottom: 1px;
}

.btn {
  padding: 8px 20px;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
}

.btn-disabled {
  background-color: #e2e8f0;
  color: #a0aec0;
  cursor: not-allowed;
}
</style>
