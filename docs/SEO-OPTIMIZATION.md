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
| 8 | 建立各頁面獨立 meta 資訊 | 低 | ⬜ 待處理 |

---

## 1. 補充 index.html meta 標籤

**目前狀態：**
```html
<title>慶奇科技</title>
<!-- 無其他 meta 標籤 -->
```

**建議新增：**
```html
<meta name="description" content="樂農智慧農業系統，全台 200+ 場域使用中。提供環境監測、自動灌溉、溫室環控等解決方案，支援手機遠端操控，適合農戶、校園及 SI 整合商。">
<meta name="keywords" content="智慧農業,自動灌溉,溫室環控,農業物聯網,IoT農業,環境監測,樂農,慶奇科技">
<meta name="author" content="慶奇科技股份有限公司">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://your-domain.com/">
```

---

## 2. 優化網頁標題 (title)

**目前：** `慶奇科技`

**建議：** `樂農智慧農業系統 | 自動灌溉、環境監測、溫室環控 - 慶奇科技`

**各頁面標題建議：**
| 頁面 | 建議標題 |
|------|----------|
| 首頁 | 樂農智慧農業系統 \| 自動灌溉、環境監測 - 慶奇科技 |
| 食農教育 | 食農教育 \| SDGs 永續發展結合智慧農業 - 樂農 |
| 整合商登錄 | SI 整合商專區 \| 設備規格與報價參考 - 樂農 |
| 參考規劃 | 場域規劃方案 \| 溫室環控、灌溉系統配置 - 樂農 |

---

## 3. 加入 Open Graph 社群分享標籤

**用途：** 分享到 Facebook、LINE 時顯示正確的預覽圖和說明

**建議新增：**
```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="樂農智慧農業系統 | 慶奇科技">
<meta property="og:description" content="全台 200+ 場域使用中，手機遠端操控農場，自動灌溉、環境監測一次搞定。">
<meta property="og:image" content="https://your-domain.com/assets/og-image.jpg">
<meta property="og:url" content="https://your-domain.com/">
<meta property="og:site_name" content="樂農智慧農業">
<meta property="og:locale" content="zh_TW">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="樂農智慧農業系統 | 慶奇科技">
<meta name="twitter:description" content="全台 200+ 場域使用中，手機遠端操控農場。">
<meta name="twitter:image" content="https://your-domain.com/assets/og-image.jpg">
```

**注意：** 需準備一張 1200x630 像素的社群分享預覽圖

---

## 4. 加入 Schema.org 結構化資料

**用途：** 幫助 Google 理解網站內容，可能顯示複合式搜尋結果

**建議加入 Organization 結構化資料：**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "慶奇科技股份有限公司",
  "alternateName": "樂農智慧農業",
  "url": "https://your-domain.com",
  "logo": "https://your-domain.com/assets/logo.png",
  "description": "樂農智慧農業系統，提供環境監測、自動灌溉、溫室環控等解決方案",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "復興四路 2 號 4 樓 A10",
    "addressLocality": "前鎮區",
    "addressRegion": "高雄市",
    "addressCountry": "TW"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+886-7-3388-511",
    "contactType": "customer service",
    "email": "service@webduino.io"
  },
  "sameAs": [
    "https://www.facebook.com/agrickit"
  ]
}
</script>
```

**可選：加入 Product 結構化資料（針對樂農小主機）**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "樂農小主機",
  "description": "智慧農業控制主機，可串接 3 種感測/控制設備，支援手機遠端操控",
  "brand": {
    "@type": "Brand",
    "name": "樂農"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "慶奇科技股份有限公司"
  },
  "category": "智慧農業設備"
}
</script>
```

---

## 5. 首頁加入隱藏式 H1 標題

**問題：** 目前首頁沒有 `<h1>` 標籤，Logo 是圖片

**建議：** 在 Hero Section 加入視覺隱藏但對 SEO 有效的 H1

```html
<h1 class="sr-only">樂農智慧農業系統 - 環境監測與自動灌溉控制</h1>
```

**需加入的 CSS：**
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## 6. 優化圖片 alt 屬性

**目前已有基本 alt，建議更具描述性：**

| 目前 | 建議 |
|------|------|
| `alt="台灣安裝場域地圖"` | `alt="樂農智慧農業全台超過200個安裝場域分布圖"` |
| `alt="小主機們"` | `alt="樂農小主機系列產品 - 基礎版與PRO版"` |
| `alt="手機遠端遙控圖示"` | `alt="環境監測功能 - 即時收集溫濕度光度等數據"` |
| `alt="場域控制儀表板截圖"` | `alt="樂農雲端儀表板 - 場域環境數據即時監控畫面"` |

---

## 7. 加入效益數據區塊

**目的：** 增加說服力，讓潛在用戶了解實際效益

**建議內容（需與公司確認實際數據）：**
- 節省灌溉用水 XX%
- 減少人力巡田時間 XX%
- 全台已安裝 200+ 場域
- 支援 XX 種感測/控制設備

---

## 8. 建立各頁面獨立 meta 資訊

**目前問題：** SPA 架構下所有頁面共用同一組 meta

**解決方案：** 使用 Vue Router 的導航守衛動態更新 meta

```javascript
// 在 main.js 或 router 設定中
router.beforeEach((to, from, next) => {
  const defaultTitle = '樂農智慧農業系統 | 慶奇科技'
  document.title = to.meta.title || defaultTitle

  // 更新 meta description
  const descriptionEl = document.querySelector('meta[name="description"]')
  if (descriptionEl) {
    descriptionEl.setAttribute('content', to.meta.description || '預設描述')
  }

  next()
})
```

---

## 執行順序建議

1. **第一階段（立即執行）：** 項目 1-3，修改 index.html
2. **第二階段（本週）：** 項目 4-5，加入結構化資料和 H1
3. **第三階段（下週）：** 項目 6-8，細節優化

---

*文件建立日期: 2026-01-19*
