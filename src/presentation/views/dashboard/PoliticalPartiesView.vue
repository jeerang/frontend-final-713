<template>
  <div class="card">
    <div class="header">
      <div>
        <h2 class="title">รายชื่อพรรคการเมือง</h2>
        <p class="subtitle">เพิ่มพรรคการเมือง โดยระบุชื่อพรรค, นโยบายพรรค และอัปโหลดโลโก้พรรค</p>
      </div>
      <div>
        <button class="btn btn-primary btn-add">เพิ่มพรรคการเมือง</button>
      </div>
    </div>

    <div class="search-section">
      <div class="search-box">
        <svg class="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z" />
        </svg>
        <input type="text" placeholder="ค้นหาชื่อพรรค" class="search-input" />
      </div>
    </div>

    <table class="data-table">
      <thead>
        <tr>
          <th width="80"></th>
          <th>พรรคการเมือง</th>
          <th>นโยบายพรรค</th>
          <th>จำนวนสมาชิก</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 6" :key="i">
          <td class="index-col">{{ i }}</td>
          <td>
            <div class="party-info">
              <img :src="`https://api.dicebear.com/7.x/identicon/svg?seed=party${i}`" alt="logo" class="party-logo" />
              <span class="party-name">ชื่อพรรคการเมือง</span>
            </div>
          </td>
          <td>นโยบายพรรคการเมือง</td>
          <td>1</td>
          <td class="actions">
            <button class="btn btn-action btn-edit">แก้ไข</button>
            <button class="btn btn-action btn-members">รายชื่อสมาชิก</button>
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
  margin-bottom: 1.5rem;
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

.search-section {
  margin-bottom: 2rem;
}

.search-box {
  position: relative;
  max-width: 400px;
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
  font-weight: 500;
  color: var(--text-main);
}

.party-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.party-logo {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  object-fit: cover;
  background-color: #f1f2f6;
}

.party-name {
  font-weight: 500;
  color: var(--text-main);
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.btn-action {
  padding: 8px 16px;
  font-size: 0.85rem;
}

.btn-edit {
  background-color: var(--primary-light);
  color: var(--primary);
}

.btn-members {
  background-color: var(--primary);
  color: white;
}
</style>
