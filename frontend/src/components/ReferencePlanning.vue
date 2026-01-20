<template>
  <div class="bg-white min-h-screen">
    <!-- Header -->
    <header class="bg-green-700/80 text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div class="px-4 lg:px-8 py-3 flex justify-between items-center">
        <router-link to="/home" class="text-2xl font-bold">慶奇科技</router-link>
        <nav class="hidden md:flex space-x-6 items-center text-lg">
          <a class="hover:text-green-200" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a>
          <router-link class="hover:text-green-200" to="/home#installations">場域實績</router-link>
          <router-link class="hover:text-green-200" to="/education">食農教育</router-link>
          <router-link class="hover:text-green-200" to="/reference-planning">參考規劃</router-link>
          <a class="hover:text-green-200" href="#contact">聯絡我們</a>
          <a class="hover:text-green-200" href="https://md.webduino.io/s/22TOZk5pV">使用教學</a>
        </nav>
        <button class="md:hidden text-white" @click="toggleMobileMenu">
          <span class="material-icons">menu</span>
        </button>
        <!-- Mobile Menu -->
        <div v-if="showMobileMenu" class="absolute top-full left-0 right-0 bg-green-700 md:hidden">
          <nav class="flex flex-col space-y-2 p-4">
            <a class="hover:text-green-200 py-2" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a>
            <router-link class="hover:text-green-200 py-2" to="/home#installations">場域實績</router-link>
            <router-link class="hover:text-green-200 py-2" to="/education">食農教育</router-link>
            <router-link class="hover:text-green-200 py-2" to="/reference-planning">參考規劃</router-link>
            <a class="hover:text-green-200 py-2" href="#contact">聯絡我們</a>
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
              <img src="/assets/場域規劃/情境/溫室環控定時灌溉_情境.jpg" alt="小型溫室規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">溫室環控｜定時灌溉</h3>
              <p class="text-gray-600">整合環境監測與自動灌溉系統。</p>
            </div>
          </div>

          <!-- 卡片 2: 中型網室 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" @click="openPopup('greenhouse-light')">
            <div class="h-56 overflow-hidden">
              <img src="/assets/場域規劃/情境/溫室環控光積值灌溉_情境.jpg" alt="中型網室規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">溫室環控｜光積值灌溉</h3>
              <p class="text-gray-600">配備氣象站與多點感測器監控。</p>
            </div>
          </div>

          <!-- 卡片 3: 大型農場 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" @click="openPopup('greenhouse-fertilizer')">
            <div class="h-56 overflow-hidden">
              <img src="/assets/場域規劃/情境/溫室環控注肥_情境.jpg" alt="大型農場規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">溫室環控｜注肥</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>

          <!-- 卡片 4: 校園農場 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" @click="openPopup('greenhouse-cooling')">
            <div class="h-56 overflow-hidden">
              <img src="/assets/場域規劃/情境/溫室環控降溫_情境.png" alt="環控降溫" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">溫室環控｜降溫</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>

          <!-- 卡片 5: 果樹栽培 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" @click="openPopup('pot-soil-irrigation')">
            <div class="h-56 overflow-hidden">
              <img src="/assets/場域規劃/情境/盆花土壤濕度計灌溉_情境.jpg" alt="果樹栽培規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">盆花土壤濕度計灌溉</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>

          <!-- 卡片 6: 葉菜類栽培 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" @click="openPopup('shade-light')">
            <div class="h-56 overflow-hidden">
              <img src="/assets/場域規劃/情境/遮陰網及補光燈_情境.png" alt="葉菜類栽培規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">遮陰網及補光燈</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>

          <!-- 卡片 7: 水耕栽培 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" @click="openPopup('fan-cooling')">
            <div class="h-56 overflow-hidden">
              <img src="/assets/場域規劃/情境/風扇水牆自動降溫_情境.png" alt="風扇水牆自動降溫規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold text-green-700 mb-3">風扇水牆自動降溫</h3>
              <p class="text-gray-600">整合多區域控制與數據分析平台。</p>
            </div>
          </div>

          <!-- 卡片 8: 智慧監控中心 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" @click="openPopup('google-sheet')">
            <div class="h-56 overflow-hidden">
              <img src="/assets/場域規劃/情境/Google試算表控制及記錄_情境.jpg" alt="智慧監控中心規劃" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
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
            <img v-if="popupTitle === '溫室環控｜定時灌溉'" src="/assets/場域規劃/情境/溫室環控定時灌溉_情境.jpg" alt="溫室規劃示意圖" class="w-full h-48 object-cover rounded-lg shadow-md"/>
            <img v-if="popupTitle === '溫室環控｜光積值灌溉'" src="/assets/場域規劃/情境/溫室環控光積值灌溉_情境.jpg" alt="網室規劃示意圖" class="w-full h-48 object-cover rounded-lg shadow-md"/>
            <img v-if="popupTitle === '溫室環控｜注肥'" src="/assets/場域規劃/情境/溫室環控注肥_情境.jpg" alt="農場規劃示意圖" class="w-full h-48 object-cover rounded-lg shadow-md"/>
            <img v-if="popupTitle === '溫室環控｜降溫'" src="/assets/場域規劃/情境/溫室環控降溫_情境.png" alt="環控降溫示意圖" class="w-full h-48 object-cover rounded-lg shadow-md"/>
            <img v-if="popupTitle === '盆花土壤濕度計灌溉'" src="/assets/場域規劃/情境/盆花土壤濕度計灌溉_情境.jpg" alt="盆花土壤濕度計灌溉示意圖" class="w-full h-48 object-cover rounded-lg shadow-md"/>
            <img v-if="popupTitle === '遮陰網及補光燈'" src="/assets/場域規劃/情境/遮陰網及補光燈_情境.png" alt="遮陰網及補光燈示意圖" class="w-full h-48 object-cover rounded-lg shadow-md"/>
            <img v-if="popupTitle === '風扇水牆自動降溫'" src="/assets/場域規劃/情境/風扇水牆自動降溫_情境.png" alt="風扇水牆自動降溫示意圖" class="w-full h-48 object-cover rounded-lg shadow-md"/>
            <img v-if="popupTitle === 'Google 試算表控制及記錄'" src="/assets/場域規劃/情境/Google試算表控制及記錄_情境.jpg" alt="智慧監控中心規劃示意圖" class="w-full h-48 object-cover rounded-lg shadow-md"/>
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
                      <p class="text-base text-gray-600">環境數據收集、定時灌溉控制</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">怎麼控制</h4>
                      <p class="text-base text-gray-600">時間排程自動灌溉，並根據環境數據調整灌溉頻率。( 例如：下雨了土壤很濕就不會灌溉囉！)</p>
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
              <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">搭配桃改場 - 專家積木 01</h3>
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
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">系統說明</h4>
                      <p class="text-base text-gray-600">環境監控、光積值灌溉控制</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">怎麼運作</h4>
                      <p class="text-base text-gray-600">基於光積值計算的智慧灌溉控制。( 根據照多少太陽會蒸發多少水，來幫作物補充流失的水份，這樣就不會浪費掉多餘水囉！ )</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">可收集數據</h4>
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
                  <img src="/assets/場域規劃/積木/00.png" alt="桃改場專家積木" class="w-full max-w-lg mx-auto shadow-sm cursor-pointer hover:opacity-80 transition-opacity" @error="handleImageError" @click="openImageModal('/assets/場域規劃/積木/積木01.png', '桃改場專家積木')"/>
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

          <!-- 注肥內容 -->
          <div v-if="popupTitle === '溫室環控｜注肥'">
            <!-- 上方兩欄：規劃參考和設備參考 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <!-- 規劃參考 -->
              <div>
                <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">規劃參考</h3>
                <div class="bg-gray-200 p-6 rounded-lg">
                  <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">系統說明</h4>
                      <p class="text-base text-gray-600">智慧注肥系統、精準施肥控制</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">怎麼運作</h4>
                      <p class="text-base text-gray-600">根據作物生長階段和土壤狀況，自動調配並注入適量肥料，確保作物營養均衡。</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">可收集數據</h4>
                      <p class="text-base text-gray-600">土壤養分、pH值、EC值、施肥記錄</p>
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
                        <img src="/assets/設備/水質酸鹼度 + 溫度.png" alt="水質酸鹼度溫度" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">土壤濕度三合一、文氏管</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">控制</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/四路繼電器.png" alt="四路繼電器" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/流量計.png" alt="流量計" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600"></p>
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
                  <div class="w-full max-w-lg mx-auto bg-white rounded-lg shadow-sm h-64"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">精準注肥</h4>
                    <p class="text-base text-gray-600">根據土壤狀況自動調配肥料</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">養分監控</h4>
                    <p class="text-base text-gray-600">即時監控土壤養分狀況</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">施肥記錄</h4>
                    <p class="text-base text-gray-600">詳細記錄施肥時間與用量</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 降溫內容 -->
          <div v-if="popupTitle === '溫室環控｜降溫'">
            <!-- 上方兩欄：規劃參考和設備參考 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <!-- 規劃參考 -->
              <div>
                <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">規劃參考</h3>
                <div class="bg-gray-200 p-6 rounded-lg">
                  <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">系統說明</h4>
                      <p class="text-base text-gray-600">智慧降溫系統、環境溫度控制</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">怎麼運作</h4>
                      <p class="text-base text-gray-600">當溫度超過設定值時，自動啟動風扇、水牆等降溫設備，維持適宜的作物生長環境。</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">可收集數據</h4>
                      <p class="text-base text-gray-600">溫度、濕度、風速、降溫設備運轉狀態</p>
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
                      <p class="text-base text-gray-600">樂農小主機 PRO-</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">感測</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/光度百葉箱.png" alt="光度百葉箱" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/風速計.png" alt="風速計" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">光度百葉箱、風速計</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">控制</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/四路繼電器.png" alt="四路繼電器" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/八路繼電器.png" alt="八路繼電器" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">四/八路繼電器、風扇、水牆</p>
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
                  <img src="/assets/場域規劃/積木/積木04.png" alt="桃改場專家積木" class="w-full max-w-lg mx-auto shadow-sm cursor-pointer hover:opacity-80 transition-opacity" @error="handleImageError" @click="openImageModal('/assets/場域規劃/積木/積木01.png', '桃改場專家積木')"/>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">智慧降溫</h4>
                    <p class="text-base text-gray-600">自動控制降溫設備運轉</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">環境監控</h4>
                    <p class="text-base text-gray-600">即時監控溫室環境參數</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">節能控制</h4>
                    <p class="text-base text-gray-600">優化降溫設備使用效率</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 盆花土壤濕度計灌溉內容 -->
          <div v-if="popupTitle === '盆花土壤濕度計灌溉'">
            <!-- 上方兩欄：規劃參考和設備參考 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <!-- 規劃參考 -->
              <div>
                <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">規劃參考</h3>
                <div class="bg-gray-200 p-6 rounded-lg">
                  <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">系統說明</h4>
                      <p class="text-base text-gray-600">盆花智慧灌溉、土壤濕度監控</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">怎麼運作</h4>
                      <p class="text-base text-gray-600">透過土壤濕度感測器監控盆花土壤狀況，當濕度低於設定值時自動啟動灌溉系統。</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">可收集數據</h4>
                      <p class="text-base text-gray-600">土壤濕度、溫度、灌溉頻率、用水量</p>
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
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/wifi_4way.png" alt="樂農小主機" class="w-32 h-32 object-contain"/>
                        <img src="/assets/設備/無線轉接器.png" alt="樂農小主機" class="w-32 h-32 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">Wi-Fi 四路控制器、無線轉接器</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">感測</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/土壤三合一.png" alt="土壤濕度三合一" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/光度百葉箱.png" alt="土壤濕度三合一" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">土壤濕度三合一、光度百葉箱</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">控制</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/四路控制器.png" alt="四路控制器" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">Wi-Fi 四路控制器 ( 內含四路繼電器 )</p>
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
                  <img src="/assets/場域規劃/積木/積木05.png" alt="桃改場專家積木" class="w-full max-w-lg mx-auto shadow-sm cursor-pointer hover:opacity-80 transition-opacity" @error="handleImageError" @click="openImageModal('/assets/場域規劃/積木/積木05.png', '桃改場專家積木')"/>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">智慧灌溉</h4>
                    <p class="text-base text-gray-600">根據土壤濕度自動灌溉</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">濕度監控</h4>
                    <p class="text-base text-gray-600">即時監控盆花土壤狀況</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">節水管理</h4>
                    <p class="text-base text-gray-600">避免過度灌溉浪費水資源</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 遮陰網及補光燈內容 -->
          <div v-if="popupTitle === '遮陰網及補光燈'">
            <!-- 上方兩欄：規劃參考和設備參考 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <!-- 規劃參考 -->
              <div>
                <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">規劃參考</h3>
                <div class="bg-gray-200 p-6 rounded-lg">
                  <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">系統說明</h4>
                      <p class="text-base text-gray-600">光照控制系統、遮陰與補光</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">怎麼運作</h4>
                      <p class="text-base text-gray-600">根據光照強度自動控制遮陰網開關和補光燈啟閉，為作物提供最適宜的光照環境。</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">可收集數據</h4>
                      <p class="text-base text-gray-600">光照強度、遮陰網狀態、補光燈使用時間</p>
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
                        <img src="/assets/設備/光度百葉箱.png" alt="光度百葉箱" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/紅外線測溫儀.png" alt="紅外線測溫儀" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">光度百葉箱、紅外線測溫儀</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">控制</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/四路繼電器.png" alt="四路繼電器" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/八路繼電器.png" alt="八路繼電器" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">四/八路繼電器、遮陰網馬達、補光燈</p>
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
                  <img src="/assets/場域規劃/積木/積木06.png" alt="桃改場專家積木" class="w-full max-w-lg mx-auto shadow-sm cursor-pointer hover:opacity-80 transition-opacity" @error="handleImageError" @click="openImageModal('/assets/場域規劃/積木/積木06.png', '桃改場專家積木')"/>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">光照控制</h4>
                    <p class="text-base text-gray-600">自動控制遮陰網與補光燈</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">環境監控</h4>
                    <p class="text-base text-gray-600">即時監控光照與溫度狀況</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">節能管理</h4>
                    <p class="text-base text-gray-600">優化光照設備使用效率</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 風扇水牆自動降溫內容 -->
          <div v-if="popupTitle === '風扇水牆自動降溫'">
            <!-- 上方兩欄：規劃參考和設備參考 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <!-- 規劃參考 -->
              <div>
                <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">規劃參考</h3>
                <div class="bg-gray-200 p-6 rounded-lg">
                  <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">系統說明</h4>
                      <p class="text-base text-gray-600">高效降溫系統、風扇水牆控制</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">怎麼運作</h4>
                      <p class="text-base text-gray-600">結合風扇與水牆系統，透過蒸發冷卻原理快速降低溫室溫度，提供涼爽的生長環境。</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">可收集數據</h4>
                      <p class="text-base text-gray-600">溫度、濕度、風速、水牆運轉狀態</p>
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
                        <img src="/assets/設備/光度百葉箱.png" alt="光度百葉箱" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/風速計.png" alt="風速計" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">光度百葉箱、紅外線測溫儀</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">控制</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/四路繼電器.png" alt="四路繼電器" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/八路繼電器.png" alt="八路繼電器" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">四/八路繼電器、風扇、水牆馬達</p>
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
                  <img src="/assets/場域規劃/積木/積木07.png" alt="桃改場專家積木" class="w-full max-w-lg mx-auto shadow-sm cursor-pointer hover:opacity-80 transition-opacity" @error="handleImageError" @click="openImageModal('/assets/場域規劃/積木/積木07.png', '桃改場專家積木')"/>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">高效降溫</h4>
                    <p class="text-base text-gray-600">風扇水牆協同降溫控制</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">環境監控</h4>
                    <p class="text-base text-gray-600">即時監控溫濕度變化</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">節能運轉</h4>
                    <p class="text-base text-gray-600">優化降溫設備使用效率</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Google 試算表控制及記錄內容 -->
          <div v-if="popupTitle === 'Google 試算表控制及記錄'">
            <!-- 上方兩欄：規劃參考和設備參考 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <!-- 規劃參考 -->
              <div>
                <h3 class="text-3xl font-bold text-green-700 mb-4 text-center">規劃參考</h3>
                <div class="bg-gray-200 p-6 rounded-lg">
                  <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">系統說明</h4>
                      <p class="text-base text-gray-600">系統控制與感測資料數據收集</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">怎麼運作</h4>
                      <p class="text-base text-gray-600">透過試算表控制設備並將測得的資料透過主機自動上傳至 Google 試算表，提供歷史記錄和數據分析功能。（例如將土壤三合一測得的溫度、濕度、電導度做紀錄）</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">可收集數據</h4>
                      <p class="text-base text-gray-600">所有感測器數據、設備運轉記錄、歷史趨勢</p>
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
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/wifi_4way.png" alt="WiFi 4路" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/無線轉接器.png" alt="無線轉接器" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">Wi-Fi 四路控制器、無線轉接器</p>
                    </div>
                    <div class="bg-white p-4 rounded-md shadow-sm text-center">
                      <h4 class="font-semibold text-gray-800 mb-2 text-lg">感測</h4>
                      <div class="flex justify-center space-x-2 mb-2">
                        <img src="/assets/設備/土壤三合一.png" alt="土壤濕度三合一" class="w-28 h-28 object-contain"/>
                        <img src="/assets/設備/光度百葉箱.png" alt="光度百葉箱" class="w-28 h-28 object-contain"/>
                      </div>
                      <p class="text-base text-gray-600">各種感測器設備</p>
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
                  <img src="/assets/場域規劃/積木/積木08.png" alt="桃改場專家積木" class="w-full max-w-lg mx-auto shadow-sm cursor-pointer hover:opacity-80 transition-opacity" @error="handleImageError" @click="openImageModal('/assets/場域規劃/積木/積木01.png', '桃改場專家積木')"/>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">雲端記錄</h4>
                    <p class="text-base text-gray-600">自動上傳數據至 Google 試算表</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">設備控制</h4>
                    <p class="text-base text-gray-600">透過試算表進行設定及紀錄</p>
                  </div>
                  <div class="bg-white p-4 rounded-md shadow-sm">
                    <h4 class="font-semibold text-gray-800 mb-2 text-lg">數據分析</h4>
                    <p class="text-base text-gray-600">歷史趨勢分析與報表生成</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer id="contact" class="bg-gray-800 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h5 class="text-lg font-semibold text-white mb-3">聯絡我們</h5>
            <p class="mb-1">慶奇科技股份有限公司</p>
            <p class="mb-1"><span class="material-icons text-sm inline-block align-middle mr-1">place</span> 高雄市前鎮區復興四路 2 號 4 樓 A10</p>
            <p class="mb-1"><span class="material-icons text-sm inline-block align-middle mr-1">phone</span> <a href="tel:07-3388-511" class="hover:text-green-400">07-3388-511</a></p>
            <p class="mb-1"><span class="material-icons text-sm inline-block align-middle mr-1">email</span> <a href="#" @click.prevent="copyEmail" class="hover:text-green-400 cursor-pointer">service@webduino.io</a></p>
          </div>
          <div>
            <h5 class="text-lg font-semibold text-white mb-3">快速連結</h5>
            <ul class="space-y-1">
              <li><a class="hover:text-green-400" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a></li>
              <li><router-link class="hover:text-green-400" to="/home#installations">場域實績</router-link></li>
              <li><router-link class="hover:text-green-400" to="/education">食農教育</router-link></li>
              <li><router-link class="hover:text-green-400" to="/integrator-register">整合商專區</router-link></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-700 pt-8 text-center text-sm">
          <p>© 2025 慶奇科技股份有限公司 版權所有</p>
          <p>本網站內容均受著作權法保護，未經授權不得轉載。</p>
        </div>
      </div>
    </footer>

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
        case 'greenhouse-fertilizer':
          this.popupTitle = '溫室環控｜注肥'
          break
        case 'greenhouse-cooling':
          this.popupTitle = '溫室環控｜降溫'
          break
        case 'pot-soil-irrigation':
          this.popupTitle = '盆花土壤濕度計灌溉'
          break
        case 'shade-light':
          this.popupTitle = '遮陰網及補光燈'
          break
        case 'fan-cooling':
          this.popupTitle = '風扇水牆自動降溫'
          break
        case 'google-sheet':
          this.popupTitle = 'Google 試算表控制及記錄'
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
    },
    // 複製信箱到剪貼簿
    copyEmail() {
      const email = 'service@webduino.io'
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          alert('信箱已複製到剪貼簿！')
        }).catch(err => {
          console.error('複製失敗:', err)
          this.fallbackCopyEmail(email)
        })
      } else {
        this.fallbackCopyEmail(email)
      }
    },
    // 備用的複製方法
    fallbackCopyEmail(text) {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand('copy')
        alert('信箱已複製到剪貼簿！')
      } catch (err) {
        console.error('複製失敗:', err)
      }
      document.body.removeChild(textArea)
    }
  }
}
</script>

<style scoped>
</style> 