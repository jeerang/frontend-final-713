<template>
  <div class="form-container delay-fade-in" :class="{ 'form-success-state': showSuccess }">

    <!-- Success Overlay -->
    <transition name="success-transition">
      <div v-if="showSuccess" class="success-overlay">
        <div class="success-content">
          <div class="success-icon-ring">
            <svg class="success-checkmark" viewBox="0 0 52 52">
              <circle class="checkmark-circle" cx="26" cy="26" r="24" fill="none" />
              <path class="checkmark-check" fill="none" d="M14 27l7 7 16-16" />
            </svg>
          </div>
          <h3 class="success-title">ลงทะเบียนสำเร็จ!</h3>
          <p class="success-message">ข้อมูลของท่านถูกบันทึกเรียบร้อยแล้ว</p>
          <button class="btn-secondary" @click="resetForm">ลงทะเบียนใหม่</button>
        </div>
      </div>
    </transition>

    <!-- Form Content -->
    <template v-if="!showSuccess">
      <div class="header-section">
        <div class="logo-badge">
          <span class="logo-icon">🗳️</span>
        </div>
        <h2 class="title">สมัครสร้างรายชื่อผู้ใช้งาน</h2>
        <p class="subtitle">กรอกหมายเลขประจำตัว 13 หลัก และข้อมูลส่วนตัวเพื่อลงทะเบียนเข้าใช้ระบบ</p>
      </div>

      <!-- Step Indicator -->
      <div class="step-indicator">
        <div class="step" :class="{ active: true, completed: isStep1Complete }">
          <div class="step-dot">1</div>
          <span class="step-label">ข้อมูลส่วนตัว</span>
        </div>
        <div class="step-line" :class="{ filled: isStep1Complete }"></div>
        <div class="step" :class="{ active: isStep1Complete, completed: isStep2Complete }">
          <div class="step-dot">2</div>
          <span class="step-label">ที่อยู่</span>
        </div>
        <div class="step-line" :class="{ filled: isStep2Complete }"></div>
        <div class="step" :class="{ active: isStep2Complete }">
          <div class="step-dot">3</div>
          <span class="step-label">ยืนยัน</span>
        </div>
      </div>

      <form @submit.prevent="onSubmit" class="form-body" novalidate>
        <!-- Row 1: Name -->
        <div class="form-section">
          <div class="section-label">ข้อมูลส่วนตัว</div>
          <div class="form-row flex-row">
            <div class="form-group flex-1" :class="{ 'has-error': touched.firstName && errors.firstName }">
              <label for="reg-firstName">ชื่อ <span class="required">*</span></label>
              <div class="input-wrapper">
                <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input
                  id="reg-firstName"
                  type="text"
                  v-model="form.firstName"
                  placeholder="ชื่อจริง"
                  @blur="touch('firstName')"
                  :class="{ 'input-error': touched.firstName && errors.firstName }"
                />
              </div>
              <transition name="error-msg">
                <span v-if="touched.firstName && errors.firstName" class="error-text">{{ errors.firstName }}</span>
              </transition>
            </div>
            <div class="form-group flex-1" :class="{ 'has-error': touched.lastName && errors.lastName }">
              <label for="reg-lastName">นามสกุล <span class="required">*</span></label>
              <div class="input-wrapper">
                <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input
                  id="reg-lastName"
                  type="text"
                  v-model="form.lastName"
                  placeholder="นามสกุล"
                  @blur="touch('lastName')"
                  :class="{ 'input-error': touched.lastName && errors.lastName }"
                />
              </div>
              <transition name="error-msg">
                <span v-if="touched.lastName && errors.lastName" class="error-text">{{ errors.lastName }}</span>
              </transition>
            </div>
          </div>
        </div>

        <!-- Row 2: ID -->
        <div class="form-row flex-row">
          <div class="form-group flex-1" :class="{ 'has-error': touched.idNumber && errors.idNumber }">
            <label for="reg-idNumber">หมายเลขประจำตัว 13 หลัก <span class="required">*</span></label>
            <div class="input-wrapper">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="13" y2="12"/></svg>
              <input
                id="reg-idNumber"
                type="text"
                v-model="form.idNumber"
                maxlength="13"
                placeholder="X-XXXX-XXXXX-XX-X"
                @blur="touch('idNumber')"
                @input="onIdNumberInput"
                :class="{ 'input-error': touched.idNumber && errors.idNumber }"
              />
            </div>
            <div class="input-meta">
              <transition name="error-msg">
                <span v-if="touched.idNumber && errors.idNumber" class="error-text">{{ errors.idNumber }}</span>
              </transition>
              <span class="char-count" :class="{ 'char-count-full': form.idNumber.length === 13 }">{{ form.idNumber.length }}/13</span>
            </div>
          </div>
          <div class="form-group flex-1" :class="{ 'has-error': touched.backCardNumber && errors.backCardNumber }">
            <label for="reg-backCard">เลขหลังบัตร <span class="required">*</span></label>
            <div class="input-wrapper">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              <input
                id="reg-backCard"
                type="text"
                v-model="form.backCardNumber"
                placeholder="เลขหลังบัตรประชาชน"
                @blur="touch('backCardNumber')"
                :class="{ 'input-error': touched.backCardNumber && errors.backCardNumber }"
              />
            </div>
            <transition name="error-msg">
              <span v-if="touched.backCardNumber && errors.backCardNumber" class="error-text">{{ errors.backCardNumber }}</span>
            </transition>
          </div>
        </div>

        <!-- Row 3: Address -->
        <div class="form-section">
          <div class="section-label">ที่อยู่ตามทะเบียนบ้าน</div>
          <div class="form-row">
            <div class="form-group" :class="{ 'has-error': touched.address && errors.address }">
              <label for="reg-address">ที่อยู่ <span class="required">*</span></label>
              <div class="input-wrapper">
                <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
                <input
                  id="reg-address"
                  type="text"
                  v-model="form.address"
                  placeholder="บ้านเลขที่ ถนน ตำบล/แขวง อำเภอ/เขต"
                  @blur="touch('address')"
                  :class="{ 'input-error': touched.address && errors.address }"
                />
              </div>
              <transition name="error-msg">
                <span v-if="touched.address && errors.address" class="error-text">{{ errors.address }}</span>
              </transition>
            </div>
          </div>
        </div>

        <!-- Row 4: Province & District -->
        <div class="form-row flex-row">
          <div class="form-group flex-1" :class="{ 'has-error': touched.province && errors.province }">
            <label for="reg-province">จังหวัด <span class="required">*</span></label>
            <div class="custom-select" :class="{ 'select-error': touched.province && errors.province }">
              <svg class="input-icon select-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <select id="reg-province" v-model="form.province" @blur="touch('province')" @change="touch('province')">
                <option value="" disabled selected>เลือกจังหวัด</option>
                <option value="bangkok">กรุงเทพมหานคร</option>
                <option value="chiangmai">เชียงใหม่</option>
                <option value="chiangrai">เชียงราย</option>
                <option value="chonburi">ชลบุรี</option>
                <option value="nakhonratchasima">นครราชสีมา</option>
                <option value="khonkaen">ขอนแก่น</option>
                <option value="songkhla">สงขลา</option>
                <option value="phuket">ภูเก็ต</option>
                <option value="suratthani">สุราษฎร์ธานี</option>
                <option value="nonthaburi">นนทบุรี</option>
              </select>
              <svg class="select-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"/></svg>
            </div>
            <transition name="error-msg">
              <span v-if="touched.province && errors.province" class="error-text">{{ errors.province }}</span>
            </transition>
          </div>
          <div class="form-group flex-1" :class="{ 'has-error': touched.electoralDistrict && errors.electoralDistrict }">
            <label for="reg-district">เขตการเลือกตั้ง <span class="required">*</span></label>
            <div class="custom-select" :class="{ 'select-error': touched.electoralDistrict && errors.electoralDistrict }">
              <svg class="input-icon select-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <select id="reg-district" v-model="form.electoralDistrict" @blur="touch('electoralDistrict')" @change="touch('electoralDistrict')">
                <option value="" disabled selected>เลือกเขตเลือกตั้ง</option>
                <option value="district1">เขต 1</option>
                <option value="district2">เขต 2</option>
                <option value="district3">เขต 3</option>
                <option value="district4">เขต 4</option>
                <option value="district5">เขต 5</option>
              </select>
              <svg class="select-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"/></svg>
            </div>
            <transition name="error-msg">
              <span v-if="touched.electoralDistrict && errors.electoralDistrict" class="error-text">{{ errors.electoralDistrict }}</span>
            </transition>
          </div>
        </div>

        <!-- Submit Button with Loading State -->
        <div class="form-actions">
          <button type="submit" class="submit-btn" :disabled="isSubmitting" :class="{ 'btn-loading': isSubmitting }">
            <span v-if="isSubmitting" class="btn-spinner"></span>
            <span v-if="isSubmitting">กำลังดำเนินการ...</span>
            <span v-else class="btn-content">
              <span>สมัครใช้งาน</span>
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </span>
          </button>
        </div>

        <p class="terms-text">
          การสมัครใช้งานแสดงว่าท่านยอมรับ <a href="#">ข้อกำหนดและเงื่อนไข</a> ของระบบ
        </p>

        <!-- Divider -->
        <div class="divider">
          <span class="divider-line"></span>
          <span class="divider-text">หรือ</span>
          <span class="divider-line"></span>
        </div>

        <!-- Login Link -->
        <div class="login-section">
          <p class="login-text">มีบัญชีอยู่แล้ว?</p>
          <router-link to="/" class="login-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="login-icon"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10,17 15,12 10,7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
            <span>เข้าสู่ระบบ</span>
          </router-link>
        </div>
      </form>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import {
  createEmptyRegistration,
  validateRegistration,
  hasErrors,
  type ValidationErrors,
  type RegistrationEntity,
} from '../../domain/entities/RegistrationEntity';
import { SubmitRegistrationUseCase } from '../../domain/usecases/SubmitRegistrationUseCase';

const form = ref<RegistrationEntity>(createEmptyRegistration());
const isSubmitting = ref(false);
const showSuccess = ref(false);
const errors = ref<ValidationErrors>({});
const touched = ref<Record<string, boolean>>({});
const useCase = new SubmitRegistrationUseCase();

// Live validation as user types (after they've touched the field)
watch(form, () => {
  const currentErrors = validateRegistration(form.value);
  // Only show errors for touched fields
  const filteredErrors: ValidationErrors = {};
  for (const key of Object.keys(touched.value)) {
    if (touched.value[key] && (currentErrors as Record<string, string>)[key]) {
      (filteredErrors as Record<string, string>)[key] = (currentErrors as Record<string, string>)[key];
    }
  }
  errors.value = filteredErrors;
}, { deep: true });

const touch = (field: string) => {
  touched.value[field] = true;
  // Trigger validation for this field
  const currentErrors = validateRegistration(form.value);
  if ((currentErrors as Record<string, string>)[field]) {
    (errors.value as Record<string, string>)[field] = (currentErrors as Record<string, string>)[field];
  } else {
    delete (errors.value as Record<string, string>)[field];
  }
};

const onIdNumberInput = () => {
  // Strip non-numeric characters
  form.value.idNumber = form.value.idNumber.replace(/\D/g, '');
};

// Step completion
const isStep1Complete = computed(() => {
  return !!(form.value.firstName && form.value.lastName && form.value.idNumber && form.value.backCardNumber);
});

const isStep2Complete = computed(() => {
  return isStep1Complete.value && !!(form.value.address && form.value.province && form.value.electoralDistrict);
});

const onSubmit = async () => {
  // Touch all fields
  const allFields: (keyof RegistrationEntity)[] = ['firstName', 'lastName', 'idNumber', 'backCardNumber', 'address', 'province', 'electoralDistrict'];
  allFields.forEach(f => { touched.value[f] = true; });

  // Validate
  const validationErrors = validateRegistration(form.value);
  errors.value = validationErrors;

  if (hasErrors(validationErrors)) {
    return;
  }

  isSubmitting.value = true;
  const result = await useCase.execute(form.value);
  isSubmitting.value = false;

  if (result.success) {
    showSuccess.value = true;
  }
};

const resetForm = () => {
  form.value = createEmptyRegistration();
  touched.value = {};
  errors.value = {};
  showSuccess.value = false;
};
</script>

<style scoped>
.form-container {
  max-width: 620px;
  width: 100%;
  padding: 2.5rem;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-slow), box-shadow var(--transition-slow);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), #8b7cf7, #c084fc);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.form-container:hover {
  box-shadow: var(--shadow-lg);
}

.delay-fade-in {
  animation: fadeIn 0.6s ease-out 0.2s both;
}

/* === Header === */
.header-section {
  margin-bottom: 2rem;
  text-align: center;
}

.logo-badge {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  animation: fadeInScale 0.5s 0.4s ease both;
}

.title {
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.4rem;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* === Step Indicator === */
.step-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.step-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid var(--border-input);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: all var(--transition-normal);
  flex-shrink: 0;
}

.step.active .step-dot {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--primary-light);
}

.step.completed .step-dot {
  border-color: var(--success);
  background: var(--success);
  color: white;
}

.step-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 500;
  white-space: nowrap;
  transition: color var(--transition-normal);
}

.step.active .step-label {
  color: var(--text-secondary);
}

.step.completed .step-label {
  color: var(--success);
}

.step-line {
  width: 40px;
  height: 2px;
  background: var(--border-input);
  margin: 0 0.5rem;
  border-radius: 999px;
  transition: background var(--transition-normal);
  flex-shrink: 0;
}

.step-line.filled {
  background: var(--success);
}

/* === Form Section === */
.form-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.section-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.flex-row {
  flex-direction: row;
}

@media (max-width: 600px) {
  .flex-row {
    flex-direction: column;
  }
  .step-label {
    display: none;
  }
}

.flex-1 {
  flex: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

label {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.required {
  color: var(--error);
  font-weight: 600;
}

/* === Input Wrapper with Icon === */
.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  color: var(--text-muted);
  pointer-events: none;
  transition: color var(--transition-fast);
  z-index: 1;
}

.input-wrapper input {
  padding-left: 2.6rem;
}

.input-wrapper input:focus + .input-icon,
.input-wrapper:focus-within .input-icon {
  color: var(--primary);
}

input, select {
  width: 100%;
  padding: 0.72rem 1rem;
  font-family: var(--font-family);
  font-size: 0.88rem;
  color: var(--text-main);
  background-color: var(--bg-input);
  border: 1.5px solid var(--border-input);
  border-radius: var(--radius-md);
  outline: none;
  transition: all var(--transition-fast);
}

input::placeholder {
  color: #b8bcc4;
}

input:hover, select:hover {
  border-color: #aeb4c0;
}

input:focus, select:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3.5px var(--primary-glow);
}

.input-error {
  border-color: var(--border-error) !important;
  background-color: var(--error-bg) !important;
}

.input-error:focus {
  box-shadow: 0 0 0 3.5px rgba(239, 68, 68, 0.15) !important;
}

/* Input meta row (error + char count) */
.input-meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 1.2rem;
}

.char-count {
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-left: auto;
  transition: color var(--transition-fast);
}

.char-count-full {
  color: var(--success);
  font-weight: 600;
}

/* === Error Messages === */
.error-text {
  font-size: 0.76rem;
  color: var(--error);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.error-text::before {
  content: '⚠';
  font-size: 0.7rem;
}

.error-msg-enter-active {
  animation: slideUp 0.25s ease-out forwards;
}

.error-msg-leave-active {
  animation: fadeOut 0.15s ease-in forwards;
}

@keyframes fadeOut {
  to { opacity: 0; transform: translateY(-4px); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* === Custom Select === */
.custom-select {
  position: relative;
}

.select-icon-left {
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  color: var(--text-muted);
  pointer-events: none;
  z-index: 1;
  transition: color var(--transition-fast);
}

.custom-select:focus-within .select-icon-left {
  color: var(--primary);
}

.custom-select select {
  appearance: none;
  padding-left: 2.6rem;
  padding-right: 2.5rem;
  cursor: pointer;
}

.select-chevron {
  position: absolute;
  right: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: var(--text-muted);
  pointer-events: none;
  transition: transform var(--transition-fast);
}

.custom-select:focus-within .select-chevron {
  transform: translateY(-50%) rotate(180deg);
  color: var(--primary);
}

.select-error select {
  border-color: var(--border-error) !important;
  background-color: var(--error-bg) !important;
}

/* === Submit Button === */
.form-actions {
  margin-top: 0.75rem;
}

.submit-btn {
  width: 100%;
  padding: 0.9rem;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 0.95rem;
  color: white;
  background: linear-gradient(135deg, var(--primary), #7c6cf0);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.submit-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.submit-btn:hover:not(:disabled)::after {
  transform: translateX(100%);
}

.submit-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, var(--primary-hover), #6b5ce0);
  box-shadow: 0 4px 16px rgba(89, 71, 236, 0.35);
  transform: translateY(-1px);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0px);
  box-shadow: 0 2px 8px rgba(89, 71, 236, 0.25);
}

.submit-btn:disabled {
  opacity: 0.75;
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-arrow {
  width: 18px;
  height: 18px;
  transition: transform var(--transition-fast);
}

.submit-btn:hover:not(:disabled) .btn-arrow {
  transform: translateX(3px);
}

.btn-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

/* === Terms === */
.terms-text {
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 1rem;
  line-height: 1.5;
}

.terms-text a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.terms-text a:hover {
  text-decoration: underline;
}

/* === Success State === */
.success-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 380px;
  text-align: center;
}

.success-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.success-icon-ring {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--success-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeInScale 0.5s ease both;
}

.success-checkmark {
  width: 44px;
  height: 44px;
}

.checkmark-circle {
  stroke: var(--success);
  stroke-width: 2;
  stroke-dasharray: 151;
  stroke-dashoffset: 151;
  animation: checkmarkCircle 0.6s ease-out 0.2s forwards;
}

@keyframes checkmarkCircle {
  to { stroke-dashoffset: 0; }
}

.checkmark-check {
  stroke: var(--success);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: checkmark 0.4s ease-out 0.7s forwards;
}

@keyframes checkmark {
  to { stroke-dashoffset: 0; }
}

.success-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-main);
  animation: fadeIn 0.4s ease 0.3s both;
}

.success-message {
  font-size: 0.9rem;
  color: var(--text-muted);
  animation: fadeIn 0.4s ease 0.5s both;
}

.btn-secondary {
  margin-top: 0.5rem;
  padding: 0.7rem 2rem;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--primary);
  background: var(--primary-light);
  border: 1.5px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  animation: fadeIn 0.4s ease 0.7s both;
}

.btn-secondary:hover {
  background: transparent;
  border-color: var(--primary);
}

/* === Transition === */
.success-transition-enter-active {
  animation: fadeInScale 0.5s ease both;
}

.success-transition-leave-active {
  animation: fadeOut 0.3s ease both;
}

/* === Divider === */
.divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.25rem 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: var(--border-input);
}

.divider-text {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* === Login Section === */
.login-section {
  text-align: center;
}

.login-text {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.login-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.78rem;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--primary);
  background: var(--primary-light);
  border: 1.5px solid transparent;
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.login-btn:hover {
  background: transparent;
  border-color: var(--primary);
  transform: translateY(-1px);
}

.login-icon {
  width: 17px;
  height: 17px;
}
</style>
