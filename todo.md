[x] Thêm vue-router chuyển trang giữa các page
[x] fix tsconfig error và cấu hình lại để chạy được nhờ vite-env.d.ts

```
// src/vite-env.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

[x] thêm alias path không dùng lib cho typescript ( sử dụng url)
[x] thêm auto-import để không cần import những thư viện cơ bản
[x] thêm pinia (khuyến nghị) để thay thế cho vuex để quản lý state
[x] thêm vitest để viết test
[x] thêm eslint, eslint-config-prettier để tránh xung đột với prettier
[x] thêm prettier
[x] thêm commitlint
