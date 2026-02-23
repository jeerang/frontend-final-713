<template>
  <div class="card">
    <div class="header">
      <div>
        <h2 class="title">รายชื่อจังหวัด และเขตเลือกตั้ง</h2>
        <p class="subtitle">เพิ่มรายการ จังหวัด และเขตการเลือกตั้ง</p>
      </div>
      <div class="toggle-container">
        <span class="toggle-label">สถานะเปิดหีบทุกเขต</span>
        <label class="switch">
          <input type="checkbox" checked>
          <span class="slider round"></span>
        </label>
      </div>
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
      <button class="btn btn-primary">เพิ่มรายการ</button>
    </div>

    <table class="data-table">
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>จังหวัด</th>
          <th>เขตเลือกตั้ง</th>
          <th>จำนวนผู้มีสิทธิเลือกตั้ง</th>
          <th>จำนวนผู้ลงสมัคร</th>
          <th>จำนวนพรรค</th>
          <th>สถานะปิดหีบ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{ i }}</td>
          <td>รายชื่อจังหวัด</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>
            <label class="switch">
              <input type="checkbox" checked>
              <span class="slider round"></span>
            </label>
          </td>
          <td class="actions">
            <button class="btn btn-action btn-edit">แก้ไข</button>
            <button class="btn btn-action btn-delete">ลบ</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-main);
}

.subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: 4px;
}

.toggle-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toggle-label {
  font-size: 0.9rem;
  font-weight: 500;
}

/* Switches */
.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--primary);
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.filters {
  display: flex;
  justify-content: space-between;
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

.btn {
  padding: 10px 20px;
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

.btn-primary:hover {
  background-color: var(--primary-hover);
}

.btn-action {
  padding: 6px 14px;
  font-size: 0.85rem;
}

.btn-edit {
  background-color: var(--primary-light);
  color: var(--primary);
}

.btn-delete {
  background-color: #f76e6e;
  color: white;
  margin-left: 8px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  padding: 16px 8px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;
}

.data-table th {
  color: var(--text-main);
  font-weight: 600;
  white-space: nowrap;
}

.data-table td {
  color: var(--text-secondary);
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
