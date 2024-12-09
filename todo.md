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