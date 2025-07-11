<template>
  <div class="bg-white min-h-screen">
    <!-- Header -->
    <header class="bg-green-700/80 text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div class="px-4 lg:px-8 py-3 flex justify-between items-center">
        <a href="/home" class="text-2xl font-bold">慶奇科技</a>
        <nav class="hidden md:flex space-x-6 items-center text-lg">
          <a class="hover:text-green-200" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a>
          <a class="hover:text-green-200" href="/home#installations">場域實績</a>
          <a class="hover:text-green-200" href="/education">食農教育</a>
          <a class="hover:text-green-200" href="/reference-planning">參考規劃</a>
          <a class="hover:text-green-200" href="/home#contact">聯絡我們</a>
          <a class="hover:text-green-200" href="https://md.webduino.io/s/22TOZk5pV">使用教學</a>
        </nav>
        <button class="md:hidden text-white" @click="toggleMobileMenu">
          <span class="material-icons">menu</span>
        </button>
        <!-- Mobile Menu -->
        <div v-if="showMobileMenu" class="absolute top-full left-0 right-0 bg-green-700 md:hidden">
          <nav class="flex flex-col space-y-2 p-4">
            <a class="hover:text-green-200 py-2" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a>
            <a class="hover:text-green-200 py-2" href="/home#installations">場域實績</a>
            <a class="hover:text-green-200 py-2" href="/education">食農教育</a>
            <a class="hover:text-green-200 py-2" href="/reference-planning">參考規劃</a>
            <a class="hover:text-green-200 py-2" href="/home#contact">聯絡我們</a>
            <a class="hover:text-green-200 py-2" href="https://md.webduino.io/s/22TOZk5pV">使用教學</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-20">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold text-green-700 text-center mb-8">參考規劃</h1>
        <p class="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">為不同規模的農場提供智慧農業解決方案。</p>
        
        <!-- 卡片網格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto px-8">
          <!-- 卡片 1: 小型溫室 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" @click="openPopup('greenhouse-timing')">
            <div class="h-56 overflow-hidden">
              <img src="/assets/溫室1.jpg" alt="小型溫室規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">溫室環控｜定時灌溉</h3>
              <p class="text-gray-600">整合環境監測與自動灌溉系統。</p>
            </div>
          </div>

          <!-- 卡片 2: 中型網室 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" @click="openPopup('greenhouse-light')">
            <div class="h-56 overflow-hidden">
              <img src="/assets/網室1.jpg" alt="中型網室規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">溫室環控｜光積值灌溉</h3>
              <p class="text-gray-600">配備氣象站與多點感測器監控。</p>
            </div>
          </div>

          <!-- 卡片 3: 大型農場 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-56 overflow-hidden">
              <img src="/assets/農戶.jpg" alt="大型農場規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">溫室環控｜注肥</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>

          <!-- 卡片 4: 校園農場 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-56 overflow-hidden">
              <img src="/assets/校園1.jpg" alt="校園農場規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">溫室環控｜降溫</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>

          <!-- 卡片 5: 果樹栽培 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-56 overflow-hidden">
              <img src="/assets/火龍果1.jpg" alt="果樹栽培規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">盆花土壤濕度計灌溉</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>

          <!-- 卡片 6: 葉菜類栽培 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-56 overflow-hidden">
              <img src="/assets/溫室2.jpg" alt="葉菜類栽培規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">遮陰網及補光燈</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>

          <!-- 卡片 7: 水耕栽培 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-56 overflow-hidden">
              <img src="/assets/設備/水質酸鹼度 + 溫度.png" alt="水耕栽培規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">風扇水牆自動降溫</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>

          <!-- 卡片 8: 智慧監控中心 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-56 overflow-hidden">
              <img src="/assets/儀表板_25.png" alt="智慧監控中心規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">Google 試算表控制及記錄</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 彈出視窗 -->
    <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center z-50" @click="closePopup">
      <div class="bg-white bg-opacity-95 backdrop-blur-md border-4 border-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col" @click.stop>
        <!-- 標題區域 -->
        <div class="flex justify-between items-center p-8 pb-4 flex-shrink-0">
          <h2 class="text-3xl font-bold text-green-700">{{ popupTitle }}</h2>
          <button @click="closePopup" class="text-gray-500 hover:text-gray-700">
            <span class="material-icons text-2xl">close</span>
          </button>
        </div>
        
        <!-- 內容區域 -->
        <div class="px-8 pb-8 overflow-y-auto flex-1">
          <!-- 標題下方圖片 -->
          <div class="mb-6">
            <img v-if="popupTitle === '溫室環控｜定時灌溉'" src="/assets/溫室1.jpg" alt="溫室規劃示意圖" class="w-full h-48 object-cover rounded-lg shadow-md"/>
            <img v-if="popupTitle === '溫室環控｜光積值灌溉'" src="/assets/網室1.jpg" alt="網室規劃示意圖" class="w-full h-48 object-cover rounded-lg shadow-md"/>
          </div>
          <!-- 定時灌溉內容 -->
          <div v-if="popupTitle === '溫室環控｜定時灌溉'">
            <!-- 上方兩欄：規劃參考和設備參考 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <!-- 規劃參考 -->
              <div>
                <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">規劃參考</h3>
                <div class="bg-gray-200 p-6 rounded-lg">
                  <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">系統說明</h4>
                      <p class="text-base text-gray-600">環境數據收集、定時灌溉控制系統</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">怎麼控制</h4>
                      <p class="text-base text-gray-600">時間排程自動灌溉控制，並根據環境數據調整灌溉頻率。( 例如：下雨了土壤很濕就不會灌溉囉！)</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 設備參考 -->
              <div>
                <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">設備參考</h3>
                <div class="bg-gray-200 p-6 rounded-lg">
                  <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">主機</h4>
                      <div class="text-center mb-2">
                        <img src="/assets/tinyhost_pro.png" alt="樂農小主機 PRO" class="w-32 h-32 mx-auto object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">樂農小主機 PRO</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">感測</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/土壤三合一.png" alt="土壤濕度三合一" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/光度百葉箱.png" alt="光度百葉箱" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">土壤濕度三合一、光溫濕度百葉箱</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">控制</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/四路繼電器.png" alt="四路繼電器" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/八路繼電器.png" alt="八路繼電器" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">四/八路控制器、電磁閥、馬達</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 下方：桃改場專家積木 -->
            <div>
              <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">桃改場專家積木</h3>
              <div class="bg-gray-200 p-6 rounded-lg">
                <div class="text-center mb-6">
                  <img src="/assets/場域規劃/積木/積木01.png" alt="桃改場專家積木" class="w-full max-w-lg mx-auto shadow-sm cursor-pointer hover:opacity-80 transition-opacity" @error="handleImageError" @click="openImageModal('/assets/場域規劃/積木/積木01.png', '桃改場專家積木')"/>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">定時灌溉</h4>
                    <p class="text-base text-gray-600">可設定多時段自動灌溉排程</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">土壤監控</h4>
                    <p class="text-base text-gray-600">即時監控溫室環境參數</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">數據記錄</h4>
                    <p class="text-base text-gray-600">自動記錄灌溉與環境數據</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 光積值灌溉內容 -->
          <div v-if="popupTitle === '溫室環控｜光積值灌溉'">
            <!-- 上方兩欄：規劃參考和設備參考 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <!-- 規劃參考 -->
              <div>
                <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">規劃參考</h3>
                <div class="bg-gray-200 p-6 rounded-lg">
                  <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">系統架構</h4>
                      <p class="text-base text-gray-600">網室環境監控與光積值灌溉控制系統</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">控制邏輯</h4>
                      <p class="text-base text-gray-600">基於光積值計算的智慧灌溉控制</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">監控項目</h4>
                      <p class="text-base text-gray-600">溫度、濕度、光照強度、光積值累積</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 設備參考 -->
              <div>
                <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">設備參考</h3>
                <div class="bg-gray-200 p-6 rounded-lg">
                  <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">主機</h4>
                      <div class="text-center mb-2">
                        <img src="/assets/tinyhost_pro.png" alt="樂農小主機 PRO" class="w-32 h-32 mx-auto object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">樂農小主機 PRO</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">感測</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/土壤三合一.png" alt="土壤濕度三合一" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/光度百葉箱.png" alt="光度百葉箱" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">土壤濕度三合一、光度百葉箱</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">控制</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/四路繼電器.png" alt="四路繼電器" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/八路繼電器.png" alt="八路繼電器" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">四/八路控制器、電磁閥、馬達</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 下方：桃改場專家積木 -->
            <div>
              <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">桃改場專家積木</h3>
              <div class="bg-gray-200 p-6 rounded-lg">
                <div class="text-center mb-6">
                  <img src="/assets/場域規劃/積木/積木01.png" alt="桃改場專家積木" class="w-full max-w-lg mx-auto shadow-sm cursor-pointer hover:opacity-80 transition-opacity" @error="handleImageError" @click="openImageModal('/assets/場域規劃/積木/積木01.png', '桃改場專家積木')"/>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">光積值灌溉</h4>
                    <p class="text-base text-gray-600">根據光積值自動計算灌溉時機</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">環境監控</h4>
                    <p class="text-base text-gray-600">即時監控網室環境參數</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">數據分析</h4>
                    <p class="text-base text-gray-600">光積值趨勢分析與預測</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 圖片放大模態框 -->
    <div v-if="showImageModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75" @click="closeImageModal">
      <div class="relative max-w-4xl max-h-[90vh] mx-4" @click.stop>
        <img :src="modalImageSrc" :alt="modalImageAlt" class="w-full h-auto max-h-[90vh] object-contain rounded-lg"/>
        <button @click="closeImageModal" class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
          <span class="material-icons">close</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReferencePlanning',
  data() {
    return {
      showMobileMenu: false,
      showPopup: false,
      popupTitle: '',
      showImageModal: false,
      modalImageSrc: '',
      modalImageAlt: ''
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    openPopup(type) {
      this.showPopup = true
      // 禁止背景滾動
      document.body.style.overflow = 'hidden'
      switch(type) {
        case 'greenhouse-timing':
          this.popupTitle = '溫室環控｜定時灌溉'
          break
        case 'greenhouse-light':
          this.popupTitle = '溫室環控｜光積值灌溉'
          break
        default:
          this.popupTitle = '參考規劃'
      }
    },
    closePopup() {
      this.showPopup = false
      this.popupTitle = ''
      // 恢復背景滾動
      document.body.style.overflow = 'auto'
    },
    handleImageError(event) {
      // 圖片載入失敗時隱藏圖片元素
      event.target.style.display = 'none'
    },
    openImageModal(src, alt) {
      this.modalImageSrc = src
      this.modalImageAlt = alt
      this.showImageModal = true
    },
    closeImageModal() {
      this.showImageModal = false
      this.modalImageSrc = ''
      this.modalImageAlt = ''
    }
  }
}
</script>

<style scoped>
</style> 