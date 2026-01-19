# 食農教育頁面規格說明書

## 1. 頁面概述

| 項目 | 說明 |
|------|------|
| **檔案名稱** | AgricEducation.vue |
| **路由路徑** | `/education` |
| **程式碼行數** | ~548 行 |
| **頁面主題** | 食農教育推廣與 SDGs 結合 |

---

## 2. 頁面結構

```
AgricEducation.vue
├── Header（固定導航列）
├── Main Content
│   ├── 頂部介紹區塊
│   ├── SDGs 結合區塊
│   ├── 從教育到食農流程
│   ├── 學期課程參考
│   └── 學校裝設實照
└── Footer（頁尾）
```

---

## 3. 區塊詳細說明

### 3.1 頂部介紹區塊

| 元素 | 說明 |
|------|------|
| 三面六項圖 | `/assets/三面六項.png` |
| 標題 | 食農教育三面六項 |
| 圖片來源 | 農業部｜食農教育知能手冊 |
| 全民食農圖 | `/assets/全民食農.png` |
| 按鈕 | 食農教育補助資訊 |
| 主視覺圖 | `/assets/食農樂農.png`（全寬） |

**動畫效果**: 進入視窗時從下方淡入（translate-y + opacity）

---

### 3.2 SDGs 結合區塊

**標題**: 結合 SDGs 多項議題

| SDG 目標 | 顏色 | 圖標 | 說明 |
|----------|------|------|------|
| 2. 終止飢餓 | 橙色 `bg-orange-400` | sdgs2.svg | 消除飢餓，確保糧食安全與永續農業發展促進 |
| 3. 良好健康與社會福利 | 黃色 `bg-yellow-500` | sdgs3.svg | 確保健康生活，促進全民身心福祉與持續發展 |
| 15. 陸域生態 | 綠色 `bg-green-600` | sdgs15.svg | 保護恢復陸域生態，促進永續利用保全與復育 |
| 11. 永續城鎮與社區 | 琥珀色 `bg-amber-600` | sdgs11.svg | 建設包容安全有韌性永續城市與社區發展促進 |
| 12. 永續的消費與生產模式 | 青色 `bg-teal-600` | sdgs12.svg | 確保可持續消費生產，減少浪費促進循環落實 |
| 13. 氣候行動 | 天藍色 `bg-sky-600` | sdgs13.svg | 採取緊急行動應對氣候變遷減緩影響強化適應 |

**互動功能**:
- 手機版：點擊卡片可翻轉顯示詳細說明
- 桌面版：始終顯示完整資訊
- 自動翻牌：手機版每 3 秒自動翻轉一張卡片

---

### 3.3 從教育到食農流程

**6 步驟流程展示**:

| 步驟 | 顏色 | 說明 |
|------|------|------|
| 認識 | 深綠 `bg-green-700` | 食農教育基本概念 |
| 了解 | 草綠 `bg-[#94AD49]` | 智慧農業的技術與原理 |
| 討論 | 深綠 `bg-green-700` | 討論如何將技術應用在場域 |
| 實作 | 草綠 `bg-[#94AD49]` | 探究與實作科技田間管理 |
| 參訪 | 深綠 `bg-green-700` | 實地參訪科技農業場域 |
| 成果 | 草綠 `bg-[#94AD49]` | 成果發表與心得分享 |

**視覺設計**: 使用箭頭圖標連接各步驟

---

### 3.4 學期課程參考

**課程連結卡片**:

| 課程 | 圖片 | 連結 |
|------|------|------|
| 課堂食農 | l05.jpg | https://resource.webduino.io/docs/selected_course_all/selected_course_03 |
| 校園實踐 | l06.jpg | https://resource.webduino.io/docs/selected_course_all/selected_course_08 |

---

### 3.5 學校裝設實照

**6 張實照展示**:

| 圖片 | 說明 |
|------|------|
| s-41.jpg | School farming setup with sensors |
| s-42.jpg | Outdoor farming equipment at a school |
| s-43.jpg | Student interacting with farming technology |
| s-44.jpg | Close-up of plants in a school garden |
| s-45.jpg | Another view of outdoor farming setup |
| s-46.jpg | Harvested produce from school garden |

**排列方式**: 2x3 網格（手機）/ 3x2 網格（桌面）

---

## 4. 組件狀態

### Data 變數

```javascript
{
  showMobileMenu: false,      // 手機選單開關
  flippedCards: [false, false, false, false, false, false],  // SDG 卡片翻轉狀態
  introVisible: false,        // 介紹區塊動畫
  sdgsVisible: false,         // SDGs 區塊動畫
  processVisible: false,      // 流程區塊動畫
  courseVisible: false,       // 課程區塊動畫
  photoVisible: false,        // 實照區塊動畫
  autoFlipTimer: null,        // 自動翻牌定時器
  currentCardIndex: 0         // 當前翻轉卡片索引
}
```

---

## 5. 互動功能

### 5.1 Intersection Observer

監聽 5 個區塊的可見性，觸發進入動畫：
- introSection
- sdgsSection
- processSection
- courseSection
- photoSection

**配置**:
```javascript
{
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}
```

### 5.2 自動翻牌功能

- 僅在手機版（寬度 < 768px）啟用
- 每 3 秒翻轉一張 SDG 卡片
- 循環翻轉所有 6 張卡片

### 5.3 信箱複製功能

- 點擊 Footer 信箱地址
- 複製 `service@webduino.io` 到剪貼簿
- 顯示成功提示

---

## 6. 樣式定義

### 自訂顏色

| 類別 | 顏色值 |
|------|--------|
| `.bg-primary-yellow` | #FFF9E6 |
| `.text-primary-brown` | #8B5A2B |
| `.bg-primary-brown` | #8B5A2B |

### 按鈕樣式

| 類別 | 顏色 | Hover |
|------|------|-------|
| `.btn-primary` | #94AD49 | #7A9139 |
| `.btn-primary-dark` | #166534 | #14532d |
| `.btn-secondary` | #4CAF50 | #388E3C |

---

## 7. 響應式設計

| 斷點 | 說明 |
|------|------|
| 手機（< 768px） | SDG 卡片可點擊翻轉、自動翻牌、2 欄網格 |
| 平板/桌面（≥ 768px） | SDG 卡片顯示完整內容、3 欄網格 |

---

## 8. 使用資源

### 圖片檔案

```
/assets/
├── 三面六項.png
├── 全民食農.png
├── 食農樂農.png
├── l05.jpg
├── l06.jpg
├── s-41.jpg ~ s-46.jpg
└── SVG/
    ├── sdgs2.svg
    ├── sdgs3.svg
    ├── sdgs11.svg
    ├── sdgs12.svg
    ├── sdgs13.svg
    └── sdgs15.svg
```

### 外部連結

| 連結 | 用途 |
|------|------|
| resource.webduino.io | 課程資源連結 |
| docs.google.com | 產品介紹簡報 |
| md.webduino.io | 使用教學文件 |

---

## 9. 行動號召（CTA）

| 按鈕文字 | 位置 | 功能 |
|----------|------|------|
| 食農教育補助資訊 | 頂部介紹區 | 外部連結（待設定） |
| 立即洽詢食農方案 | 頁面底部 | 聯絡功能（待設定） |

---

*規格文件產生日期: 2026-01-13*
