# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案簡介

樂農智慧農業系統 (agri-web) - 慶奇科技的農業 IoT 產品行銷網站，使用 Vue 3 + Vite 建置。

## 常用指令

```bash
cd frontend
npm run dev      # 開發模式 (port 3003)
npm run build    # 生產環境建置
npm run preview  # 預覽建置結果
```

## 技術架構

- **前端框架**: Vue 3.5 (Composition API)
- **路由**: Vue Router 4 (History Mode)
- **建置工具**: Vite 6
- **CSS**: Tailwind CSS (CDN)
- **圖標**: Google Material Icons (CDN)
- **部署**: gh-pages

## 路由結構

| 路徑 | 組件 | 說明 |
|------|------|------|
| `/`, `/home` | AgricHome.vue | 首頁 - 產品展示、場域實績、新聞報導 |
| `/education` | AgricEducation.vue | 食農教育 - SDGs 結合、課程案例 |
| `/integrator-register` | IntegratorRegister.vue | 整合商專區 (認證碼: 123456) |
| `/reference-planning` | ReferencePlanning.vue | 場域規劃方案 |

## 目錄結構

```
agri-web/
├── frontend/       # 前端專案
│   ├── src/        # Vue 組件
│   ├── public/     # 靜態資源
│   ├── dist/       # 建置輸出
│   └── ...
├── docs/           # 規格文件
└── deploy/         # 部署配置
```

## 程式碼結構

- `frontend/src/main.js` - Vue 應用程式入口，包含路由配置
- `frontend/src/App.vue` - 根組件，僅包含 `<router-view />`
- `frontend/src/components/` - 頁面組件，每個組件為單一 SFC 包含完整的 HTML、JS、CSS

## 開發注意事項

- 使用 Tailwind CSS 類別進行樣式設計
- 響應式設計使用 `md:` 和 `lg:` 前綴處理斷點
- 動畫效果使用 Intersection Observer API 實現滾動觸發
- 手機版輪播使用觸控滑動事件 (touchstart/touchend/touchmove)
- 生產環境建置會排除 `@stagewise` 開發工具

## 雲端部署

### 測試機 (agric-kit-test.webduino.io)

```bash
# 建置並部署到測試機
cd frontend && npm run build && \
scp -P 2024 -r ./dist/* wa@home.nodered.vip:/mnt/a96g-nfs/agri-kit-frontend/staging/
```

### 正式機 (agric-kit.webduino.io)

```bash
# 建置並部署到正式機
cd frontend && npm run build && \
scp -P 2024 -r ./dist/* wa@home.nodered.vip:/mnt/a96g-nfs/agri-kit-frontend/prod/
```

### 常用部署流程

```bash
# 1. 先部署到測試機驗證
cd frontend && npm run build
scp -P 2024 -r ./dist/* wa@home.nodered.vip:/mnt/a96g-nfs/agri-kit-frontend/staging/

# 2. 測試確認沒問題後，部署到正式機
scp -P 2024 -r ./dist/* wa@home.nodered.vip:/mnt/a96g-nfs/agri-kit-frontend/prod/
```

> 注意：檔案上傳後會立即生效，不需要重啟 Pod。
