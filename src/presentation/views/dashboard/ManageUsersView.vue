<template>
  <div class="card">
    <div class="header">
      <h2 class="title">รายชื่อผู้ใช้งาน</h2>
      <p class="subtitle">จัดการบริหารรายชื่อผู้ใช้งานระบบ</p>
    </div>

    <div class="filters">
      <div class="search-box">
        <svg class="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z" />
        </svg>
        <input type="text" placeholder="ค้นหาด้วยเลขที่ประจำตัว 13 หลัก" class="search-input" />
      </div>
    </div>

    <table class="data-table">
      <thead>
        <tr>
          <th width="80">ลำดับ</th>
          <th>ชื่อ</th>
          <th>นามสกุล</th>
          <th>เลขประจำตัว</th>
          <th>ที่อยู่</th>
          <th>จังหวัด</th>
          <th>เขตเลือกตั้ง</th>
          <th>กกต.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td class="index-col">{{ i }}</td>
          <td>ชื่อ</td>
          <td>นามสกุล</td>
          <td>1234567890123</td>
          <td>123/45 ตำบล อำเภอ</td>
          <td>เชียงใหม่</td>
          <td>1</td>
          <td>
            <label class="switch">
              <input type="checkbox" :checked="i === 1 || i === 7 || i === 10">
              <span class="slider round"></span>
            </label>
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

.filters {
  display: flex;
  margin-bottom: 2rem;
}

.search-box {
  position: relative;
  width: 320px;
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

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  padding: 16px 8px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.95rem;
  vertical-align: middle;
}

.data-table th {
  color: var(--text-main);
  font-weight: 600;
  white-space: nowrap;
}

.data-table td {
  color: var(--text-secondary);
}

.index-col {
  font-weight: 600;
  color: var(--text-main);
}

.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.switch input { opacity: 0; width: 0; height: 0; }

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #e2e8f0;
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
  box-shadow: var(--shadow-xs);
}

input:checked + .slider { background-color: var(--primary); }
input:checked + .slider:before { transform: translateX(20px); }
</style>
