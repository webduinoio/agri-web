# 整合商登錄頁面規格說明書

## 1. 頁面概述

| 項目 | 說明 |
|------|------|
| **檔案名稱** | IntegratorRegister.vue |
| **路由路徑** | `/integrator-register` |
| **程式碼行數** | ~1200+ 行 |
| **頁面主題** | 整合商專區、設備規格與報價參考 |
| **認證碼** | `123456` |

---

## 2. 頁面結構

```
IntegratorRegister.vue
├── Password Modal（密碼認證彈窗）
├── Header（固定導航列）
├── Main Content
│   ├── 系統介紹主圖
│   ├── 實際安裝場域參考
│   ├── 如何設定
│   ├── 設備規格
│   └── 場域報價參考
├── Footer（頁尾）
├── Image Modal（圖片放大模態框）
└── Spec Modals（多個設備規格模態框）
```

---

## 3. 密碼認證功能

### 認證流程

1. 頁面載入時顯示密碼認證彈窗
2. 使用者輸入認證碼
3. 正確認證碼：`123456`
4. 認證成功後關閉彈窗，顯示完整內容
5. 認證失敗顯示錯誤訊息

### 相關變數

```javascript
{
  showPasswordModal: true,    // 密碼彈窗開關
  passwordInput: '',          // 密碼輸入值
  passwordError: ''           // 錯誤訊息
}
```

---

## 4. 區塊詳細說明

### 4.1 系統介紹主圖

| 項目 | 說明 |
|------|------|
| 圖片 | `/assets/整合商首圖.jpg` |
| 說明 | 智慧巡田自動控制系統圖 |
| 備註 | *可依場域搭配不同設備，設備清單請向下參考 |

---

### 4.2 實際安裝場域參考

**4 種場景展示**:

| 場景 | 作物類型 | 圖片 |
|------|----------|------|
| 露天 | 火龍果 | 火龍果1.jpg, 火龍果2.jpg |
| 溫室 | 短期葉菜 | 溫室1.jpg, 溫室2.jpg |
| 網室 | 鹿角蕨、蘭花 | 網室1.jpg, 網室2.jpg |
| 校園食農 | 葉菜類、花園 | 校園1.jpg, 校園2.jpg |

**互動**: 點擊圖片可放大查看

---

### 4.3 如何設定

**教學連結**:

| 項目 | 連結 |
|------|------|
| 樂農小主機 | md.webduino.io 教學頁 |
| 樂農小主機 PRO | md.webduino.io 教學頁 |
| Wi-Fi 四路控制器 | md.webduino.io 教學頁 |
| 積木程式教學 | 視覺化編輯器教學 |

---

### 4.4 設備規格

**15 種設備展示**:

| 設備名稱 | 圖片 | 背景色 | 點擊行為 |
|----------|------|--------|----------|
| 樂農小主機 | 小主機.png | bg-blue-200 | 開啟 TinyHost Modal |
| 樂農小主機 PRO | 小主機 pro.png | bg-green-200 | 開啟 TinyHostPro Modal |
| Wi-Fi 四路控制器 | 四路控制器.png | bg-purple-200 | 開啟 WiFiController Modal |
| 無線轉接器 | 無線轉接器.png | bg-orange-200 | 開啟 WirelessAdapter Modal |
| 四路繼電器 | 四路繼電器.png | bg-blue-100 | 開啟 Spec Modal |
| 八路繼電器 | 八路繼電器.png | bg-green-100 | 開啟 Spec Modal |
| 土壤三合一 | 土壤三合一.png | bg-purple-100 | 開啟 Soil Modal |
| 光度百葉箱 | 光度百葉箱.png | bg-indigo-100 | 開啟 Weather Modal |
| 流量計 | 流量計.png | bg-red-100 | 開啟 Flow Modal |
| 光學雨量計 | 光學雨量計.png | bg-yellow-100 | 開啟 RainGauge Modal |
| 紅外線測溫儀 | 紅外線測溫儀.png | bg-gray-200 | 開啟 Infrared Modal |
| 風速計 | 風速計.png | bg-cyan-100 | 開啟 Wind Modal |
| 水質酸鹼度 + 溫度 | 水質酸鹼度 + 溫度.png | bg-lime-100 | 開啟 WaterQuality Modal |
| 水濁度偵測 1 | 水濁度偵測1.png | bg-pink-100 | 開啟 Turbidity1 Modal |
| 水濁度偵測 2 | 水濁度偵測2.png | bg-orange-100 | 開啟 Turbidity2 Modal |

**排列方式**: 圓形圖標網格（2-5 欄響應式）

---

### 4.5 場域報價參考

**案例 1: 花卉**

| 項目 | 內容 |
|------|------|
| 場域大小 | 50 坪 |
| 栽種環境 | 溫網室 |
| 灌溉方式 | 噴灌 |
| 需求點 | 環境變因控制水量與灑水時間 |

**案例 2: 有機水稻**

| 項目 | 內容 |
|------|------|
| 場域大小 | 5 分 |
| 栽種環境 | 露天 |
| 灌溉方式 | 淹灌 |
| 需求點 | 控制水量/生態觀察 |

---

## 5. 設備規格模態框

### 5.1 四/八路繼電器規格

| 規格項目 | 詳細資訊 |
|----------|----------|
| 規格選項 | 4 路、8 路 |
| 尺寸與重量 | 4 路：90g，93.3×87mm |
| 處理器 MCU | 8 位元 MCU |
| 通訊協定 | 標準 Modbus RTU 協定 |
| 通訊介面 | RS485 / TTL UART |
| 串列傳輸速率 | 4800 / 9600 / 19200 bps |
| 繼電器規格 | 5V，10A/250V AC 或 10A/30V DC |
| 電源輸入 | DC 7~24V |

---

### 5.2 土壤三合一感測器規格

| 規格項目 | 詳細資訊 |
|----------|----------|
| 測量參數 | 土壤水分、溫度、電導率（鹽分） |
| 通訊協議 | RS485（MODBUS 協議） |
| 土壤水分精度 | 典型 ±3% |
| 土壤水分量程 | 0 ~ 100% |
| 溫度精度 | ±0.5℃ |
| 溫度量程 | -70 ~ +150℃ |
| 電導率精度 | ±3% |
| 電導率量程 | 0 ~ 20 mS/cm |
| 供電電壓 | 3.6V ~ 24V |

---

### 5.3 百葉箱溫溼光度三合一規格

| 規格項目 | 詳細資訊 |
|----------|----------|
| 測量參數 | 溫度、濕度、光照強度 |
| 光照度量程 | 0~65535 Lux / 0~200000 Lux |
| 光照度精度 | ±7% |
| 溫度量程 | -40~80℃ |
| 溫度精度 | ±0.5℃ |
| 濕度量程 | 0~100% RH |
| 濕度精度 | ±3% RH |

---

## 6. 組件狀態

### Data 變數

```javascript
{
  showMobileMenu: false,        // 手機選單
  showPasswordModal: true,      // 密碼彈窗
  passwordInput: '',            // 密碼輸入
  passwordError: '',            // 密碼錯誤訊息
  showModal: false,             // 圖片模態框
  modalImageSrc: '',            // 模態框圖片來源
  modalImageAlt: '',            // 模態框圖片替代文字
  showSpecModal: false,         // 繼電器規格模態框
  showSoilModal: false,         // 土壤感測器模態框
  showWeatherModal: false,      // 百葉箱模態框
  showFlowModal: false,         // 流量計模態框
  showRainGaugeModal: false,    // 雨量計模態框
  showInfraredModal: false,     // 紅外線測溫儀模態框
  showWindModal: false,         // 風速計模態框
  showWaterQualityModal: false, // 水質模態框
  showTurbidity1Modal: false,   // 水濁度1模態框
  showTurbidity2Modal: false,   // 水濁度2模態框
  showTinyHostModal: false,     // 小主機模態框
  showTinyHostProModal: false,  // 小主機PRO模態框
  showWiFiControllerModal: false, // WiFi控制器模態框
  showWirelessAdapterModal: false // 無線轉接器模態框
}
```

---

## 7. 方法列表

| 方法名 | 功能 |
|--------|------|
| `toggleMobileMenu()` | 切換手機選單 |
| `checkPassword()` | 驗證密碼 |
| `closePasswordModal()` | 關閉密碼彈窗（返回首頁） |
| `openImageModal(src)` | 開啟圖片放大 |
| `closeImageModal()` | 關閉圖片放大 |
| `openSpecModal()` | 開啟繼電器規格 |
| `closeSpecModal()` | 關閉繼電器規格 |
| `openSoilModal()` | 開啟土壤感測器規格 |
| `closeSoilModal()` | 關閉土壤感測器規格 |
| `openWeatherModal()` | 開啟百葉箱規格 |
| `closeWeatherModal()` | 關閉百葉箱規格 |
| `openTinyHostModal()` | 開啟小主機規格 |
| `openTinyHostProModal()` | 開啟小主機PRO規格 |
| `openWiFiControllerModal()` | 開啟WiFi控制器規格 |
| `openWirelessAdapterModal()` | 開啟無線轉接器規格 |
| `copyEmail()` | 複製信箱 |

---

## 8. 使用資源

### 設備圖片

```
/assets/設備/
├── 小主機.png
├── 小主機 pro.png
├── 四路控制器.png
├── 無線轉接器.png
├── 四路繼電器.png
├── 八路繼電器.png
├── 土壤三合一.png
├── 光度百葉箱.png
├── 流量計.png
├── 光學雨量計.png
├── 紅外線測溫儀.png
├── 風速計.png
├── 水質酸鹼度 + 溫度.png
├── 水濁度偵測1.png
└── 水濁度偵測2.png
```

### 規格圖片

```
/assets/規格圖片/
├── 四八路規格.jpg
├── 土壤規格.jpg
├── 百葉箱規格.jpg
├── 流量計規格.jpg
├── 雨量計規格.jpg
├── 紅外線規格.jpg
├── 風速計規格.jpg
├── 水質規格.jpg
└── 水濁度規格.jpg
```

### 場域照片

```
/assets/
├── 火龍果1.jpg, 火龍果2.jpg
├── 溫室1.jpg, 溫室2.jpg
├── 網室1.jpg, 網室2.jpg
├── 校園1.jpg, 校園2.jpg
└── 整合商首圖.jpg
```

---

## 9. 樣式定義

### Section 標題

```css
.section-title {
  /* 彩色背景標題條 */
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}
```

### 顏色配置

| 區塊 | 顏色類別 |
|------|----------|
| 實際安裝場域參考 | bg-green-600 |
| 如何設定 | bg-blue-600 |
| 設備規格 | bg-teal-600 |
| 場域報價參考 | bg-lime-600 |

### 設備圓形圖標

```css
.circular-spec-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.circle-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}
```

---

## 10. 響應式設計

| 斷點 | 設備網格 | 場域卡片 |
|------|----------|----------|
| 手機（< 640px） | 2 欄 | 1 欄 |
| 平板（640-768px） | 3 欄 | 2 欄 |
| 桌面（768-1024px） | 4 欄 | 2 欄 |
| 大螢幕（≥ 1024px） | 5 欄 | 2 欄 |

---

## 11. 安全性考量

1. 密碼認證僅為簡易前端驗證
2. 認證碼直接顯示在提示文字中（開發/測試用途）
3. 實際生產環境建議使用後端驗證機制

---

*規格文件產生日期: 2026-01-13*
