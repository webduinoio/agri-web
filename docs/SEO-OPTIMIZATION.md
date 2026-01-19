# 樂農智慧農業網站 - SEO 優化計畫

## 優化項目清單

| # | 項目 | 優先級 | 狀態 |
|---|------|--------|------|
| 1 | 補充 index.html meta 標籤 | 高 | ✅ 完成 |
| 2 | 優化網頁標題 (title) | 高 | ✅ 完成 |
| 3 | 加入 Open Graph 社群分享標籤 | 高 | ✅ 完成 |
| 4 | 加入 Schema.org 結構化資料 | 中 | ✅ 完成 |
| 5 | 首頁加入隱藏式 H1 標題 | 中 | ✅ 完成 |
| 6 | 優化圖片 alt 屬性 | 中 | ✅ 完成 |
| 7 | 加入效益數據區塊 | 低 | ✅ 完成 |
| 8 | 建立各頁面獨立 meta 資訊 | 低 | ✅ 完成 |
| 9 | 外部連結加入 rel="noopener noreferrer" | 高 | ✅ 完成 |
| 10 | 建立 robots.txt | 高 | ✅ 完成 |
| 11 | 建立 sitemap.xml | 高 | ✅ 完成 |
| 12 | 加入 favicon | 中 | ✅ 完成 |

---

## 已完成項目 (1-8)

### 1. 補充 index.html meta 標籤 ✅

已加入 description、keywords、author、robots、canonical 等標籤。

### 2. 優化網頁標題 (title) ✅

各頁面標題：
| 頁面 | 標題 |
|------|------|
| 首頁 | 樂農智慧農業系統 - 慶奇科技 |
| 食農教育 | 食農教育 - 樂農智慧農業 |
| 整合商專區 | SI 整合商專區 - 樂農智慧農業 |
| 參考規劃 | 場域規劃方案 - 樂農智慧農業 |

### 3. 加入 Open Graph 社群分享標籤 ✅

已加入 og:type、og:title、og:description、og:image、og:url、og:site_name、og:locale。

### 4. 加入 Schema.org 結構化資料 ✅

已加入 Organization 類型的結構化資料。

### 5. 首頁加入隱藏式 H1 標題 ✅

已在 Hero Section 加入 `.sr-only` 的 H1 標籤。

### 6. 優化圖片 alt 屬性 ✅

主要圖片已加入描述性 alt 文字。

### 7. 加入效益數據區塊 ✅

已加入場域實績區塊：18.6 公頃、257 間溫室、320 萬年省人工成本。

### 8. 建立各頁面獨立 meta 資訊 ✅

已在 Vue Router 加入導航守衛，動態更新 title 和 meta description。

---

## 已完成項目 (9-12)

### 9. 外部連結加入 rel="noopener noreferrer" ✅

已為所有 `target="_blank"` 的外部連結加入 `rel="noopener noreferrer"` 安全屬性。

修改檔案：
- `AgricHome.vue` - 20 個連結
- `AgricEducation.vue` - 1 個連結
- `IntegratorRegister.vue` - 5 個連結

---

### 10. 建立 robots.txt ✅

已建立 `/public/robots.txt`：
```
User-agent: *
Allow: /

Sitemap: https://agric.webduino.io/sitemap.xml
```

---

### 11. 建立 sitemap.xml ✅

已建立 `/public/sitemap.xml`，包含以下頁面：
- 首頁 (priority: 1.0)
- /education (priority: 0.8)
- /integrator-register (priority: 0.8)
- /reference-planning (priority: 0.8)

**後續動作：** 網站上線後，提交到 Google Search Console

---

### 12. 加入 favicon ✅

已使用樂農 logo SVG 作為 favicon。

**檔案位置：** `/public/favicon.svg`

**index.html 設定：**
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

---

## 全部完成

所有 12 項 SEO 優化已完成！

---

*文件建立日期: 2026-01-19*
*最後更新: 2026-01-19*
