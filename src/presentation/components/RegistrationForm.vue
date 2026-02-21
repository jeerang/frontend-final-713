<template>
  <div class="form-container delay-fade-in">
    <div class="header-section">
      <h2 class="title">ระบุข้อมูลสมัครสร้างรายชื่อผู้ใช้งาน</h2>
      <p class="subtitle">หมายเลขประจำตัว 13 หลัก และรหัสผ่านใช้เพื่อระบุเข้าใช้งานระบบ</p>
    </div>

    <form @submit.prevent="onSubmit" class="form-body">
      <!-- Row 1 -->
      <div class="form-row flex-row">
        <div class="form-group flex-1">
          <label>ชื่อ</label>
          <input type="text" v-model="form.firstName" />
        </div>
        <div class="form-group flex-1">
          <label>นามสกุล</label>
          <input type="text" v-model="form.lastName" />
        </div>
      </div>

      <!-- Row 2 -->
      <div class="form-row flex-row">
        <div class="form-group flex-1">
          <label>หมายเลขประจำตัว 13 หลัก</label>
          <input type="text" v-model="form.idNumber" maxlength="13" />
        </div>
        <div class="form-group flex-1">
          <label>เลขหลังบัตร</label>
          <input type="text" v-model="form.backCardNumber" />
        </div>
      </div>

      <!-- Row 3 -->
      <div class="form-row">
        <div class="form-group">
          <label>ที่อยู่</label>
          <input type="text" v-model="form.address" />
        </div>
      </div>

      <!-- Row 4 -->
      <div class="form-row flex-row">
        <div class="form-group flex-1">
          <label>จังหวัด</label>
          <div class="custom-select">
            <select v-model="form.province">
              <option value="" disabled selected>เลือกจังหวัด</option>
              <option value="bangkok">กรุงเทพมหานคร</option>
              <option value="chiangmai">เชียงใหม่</option>
              <!-- other options -->
            </select>
          </div>
        </div>
        <div class="form-group flex-1">
          <label>เขตการเลือกตั้ง</label>
          <div class="custom-select">
            <select v-model="form.electoralDistrict">
              <option value="" disabled selected>เลือกจังหวัด</option>
              <option value="district1">เขต 1</option>
              <option value="district2">เขต 2</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="form-actions">
        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="isSubmitting">กำลังดำเนินการ...</span>
          <span v-else>สมัครใช้งาน</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createEmptyRegistration } from '../../domain/entities/RegistrationEntity';
import { SubmitRegistrationUseCase } from '../../domain/usecases/SubmitRegistrationUseCase';

const form = ref(createEmptyRegistration());
const isSubmitting = ref(false);
const useCase = new SubmitRegistrationUseCase();

const onSubmit = async () => {
  isSubmitting.value = true;
  await useCase.execute(form.value);
  isSubmitting.value = false;
  alert('Registration Successful (Demo)');
  form.value = createEmptyRegistration();
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm); /* Minimal shadow for premium look, maybe hover effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.form-container:hover {
  box-shadow: var(--shadow-md);
}

.delay-fade-in {
  animation: fadeIn 0.6s ease-out 0.2s both;
}

.header-section {
  margin-bottom: 2rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1b1e;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: flex;
  gap: 1.25rem;
}

.flex-row {
  flex-direction: row;
}

@media (max-width: 600px) {
  .flex-row {
    flex-direction: column;
  }
}

.flex-1 {
  flex: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-size: 0.85rem;
  font-weight: 500;
  color: #3f4148;
}

input, select {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: var(--font-family);
  font-size: 0.9rem;
  color: var(--text-main);
  background-color: var(--bg-input);
  border: 1px solid var(--border-input);
  border-radius: var(--radius-md);
  outline: none;
  transition: all 0.2s ease;
}

input:hover, select:hover {
  border-color: #aeb4c0;
}

input:focus, select:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(89, 71, 236, 0.15);
}

/* Custom Select styling to replace native arrow */
.custom-select {
  position: relative;
}
.custom-select select {
  appearance: none;
  padding-right: 2.5rem;
}
.custom-select::after {
  content: "▼";
  font-size: 0.7rem;
  color: var(--text-muted);
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.form-actions {
  margin-top: 1rem;
}

.submit-btn {
  width: 100%;
  padding: 0.85rem;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background-color: var(--primary);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.submit-btn:hover:not(:disabled) {
  background-color: var(--primary-hover);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(1px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
