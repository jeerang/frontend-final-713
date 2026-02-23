<template>
  <div class="profile-container">
    <div class="card">
      <h2 class="title">บันทึกข้อมูลผู้ใช้งาน</h2>

      <div class="profile-header">
        <div class="avatar-circle">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
        </div>
        <div class="upload-actions">
          <button class="btn btn-primary btn-sm">เปลี่ยนรูป</button>
          <p class="help-text">ใช้รูปโปรไฟล์ JPG or PNG.</p>
        </div>
      </div>

      <div class="form-grid">
        <div class="form-group border-right">
          <label>ชื่อ</label>
          <input type="text" class="input" value="มีสิทธิ์" disabled />
        </div>
        <div class="form-group">
          <label>นามสกุล</label>
          <input type="text" class="input" value="ลงคะแนน" disabled />
        </div>

        <div class="form-group border-right">
          <label>หมายเลขประจำตัว 13 หลัก</label>
          <input type="text" class="input" value="1234567890123" disabled />
        </div>
        <div class="form-group">
          <label>เลขหลังบัตร</label>
          <input type="text" class="input" value="M123547264812" disabled />
        </div>

        <div class="form-group full-width">
          <label>ที่อยู่</label>
          <input type="text" class="input" value="51/26 ถนนประชาสัมพันธ์" disabled />
        </div>

        <div class="form-group border-right">
          <label>จังหวัด</label>
          <div class="select-wrapper">
            <select class="input" disabled>
              <option>เชียงใหม่</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>เขตการเลือกตั้ง</label>
          <div class="select-wrapper">
            <select class="input" disabled>
              <option>16</option>
            </select>
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="btn btn-cancel">ยกเลิก</button>
        <button class="btn btn-primary ml-2">แก้ไข</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.card {
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 3rem;
  width: 100%;
  max-width: 600px;
}

.title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.avatar-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f1f2f6;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-actions .btn-sm {
  padding: 8px 16px;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.help-text {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-main);
  margin-bottom: 8px;
}

.input {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid var(--border-input);
  border-radius: var(--radius-md);
  background-color: #fafafa;
  color: var(--text-secondary);
  font-family: inherit;
}

.input:disabled {
  background-color: #f9f9f9;
  color: #7f8c8d;
}

.btn {
  padding: 10px 24px;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
}

.btn-cancel {
  background-color: #f1f2f6;
  color: var(--text-secondary);
}

.btn-cancel:hover {
  background-color: #e2e8f0;
}

.ml-2 {
  margin-left: 12px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.select-wrapper {
  position: relative;
}
.select-wrapper::after {
  content: '▼';
  font-size: 0.6rem;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}
</style>
