<template>
  <div class="bg-white">
    <!-- Header -->
    <header class="bg-green-700/80 text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div class="container mx-auto pr-4 py-3 flex justify-between items-center">
        <a href="/home" class="text-2xl font-bold ml-2 md:ml-1 lg:ml-2">慶奇科技</a>
        <nav class="hidden md:flex space-x-6 items-center">
          <a class="hover:text-green-200" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a>
          <a class="hover:text-green-200" href="#installations">場域實績</a>
          <a class="hover:text-green-200" href="/education">食農教育</a>
          <a class="hover:text-green-200" href="#contact">聯絡我們</a>
          <a class="hover:text-green-200" href="https://md.webduino.io/s/22TOZk5pV">使用教學</a>
        </nav>
        <button class="md:hidden text-white">
          <span class="material-icons">menu</span>
        </button>
      </div>
    </header>

    <!-- Main -->
    <main>
      <!-- Hero Section -->
      <section 
        class="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-white overflow-hidden"
        style="background-image: url('https://md.webduino.io/uploads/upload_accf01f5f5a02fc7b9bb62bdcc561651.png'); background-size: cover; background-position: center;"
      >
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
        <div class="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="white" preserveAspectRatio="none" style="width: 100%; height: 180px;">
            <path d="M0,160 C480,320 960,320 1440,160 L1440,320 L0,320 Z"></path>
          </svg>
        </div>
        <div class="relative z-10 text-center px-4 -mt-20">
          <img src="/assets/logo.png" alt="樂農智慧農業" class="mx-auto mb-8 h-32 md:h-40 lg:h-48 w-auto"/>
          <div class="space-x-4">
            <a class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300" href="https://agric-dashboard.webduino.io/login">登入樂農系統</a>
            <a class="bg-white hover:bg-gray-100 text-green-600 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300" href="/integrator-register">整合商登錄</a>
          </div>
        </div>
      </section>
      <div class="bg-white pt-0 pb-4">
        <div class="container mx-auto px-4">
          <img src="/assets/5icon.png" alt="五個功能圖標" class="w-full h-auto object-contain"/>
        </div>
      </div>

      <!-- Icons Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="flex flex-col items-center mt-4 pt-2 pb-8 md:pt-12 md:pb-12">
            <svg class="w-32 h-32 md:w-40 md:h-40 mb-6 md:mb-8 transform rotate-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.36 243.53">
              <path class="fill-green-700" d="M132.3,12.31L50.06.2c-10.23-1.51-19.83,5.63-21.33,15.86L.2,209.89c-1.5,10.22,5.62,19.83,15.86,21.33l82.24,12.11c10.23,1.51,19.83-5.64,21.33-15.86l28.53-193.83c1.51-10.22-5.63-19.83-15.86-21.33ZM79.07,24.93l15.63,2.3c1.38.2,2.35,1.49,2.15,2.87-.2,1.38-1.5,2.34-2.88,2.14l-15.63-2.3c-1.38-.2-2.35-1.5-2.15-2.88s1.5-2.33,2.88-2.13ZM58.65,227.25c-4.63-.68-7.83-4.99-7.15-9.63s4.99-7.83,9.62-7.15,7.83,4.99,7.15,9.62c-.68,4.63-4.99,7.84-9.62,7.16ZM108.5,207.1l-93.15-13.71L38.19,38.22l93.15,13.71-22.84,155.17Z"/>
            </svg>
            <div class="text-center text-2xl md:text-3xl font-semibold text-gray-800">
              <p class="mb-4">拿起手機就能控制場域</p>
              <p>用科技延續農業的傳承與驕傲</p>
            </div>
          </div>
        </div>
      </section>

      <div class="w-full border-b border-gray-200"></div>

      <!-- 全台安裝場域 -->
      <section class="py-16" id="installations">
        <div class="container mx-auto px-4 text-center">
          <h3 class="text-3xl font-bold text-green-700 mb-4">全台安裝場域</h3>
                      <div class="relative inline-block">
              <img alt="台灣安裝場域地圖" class="mx-auto max-w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" src="/assets/台灣地圖2.png"/>
              <img alt="桃城蒔菜標記" class="absolute top-[8%] left-[76%] md:top-[10%] md:left-[75%] lg:top-[10%] lg:left-[76%] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 cursor-pointer hover:scale-110 transition-transform duration-300" src="/assets/SVG/桃城蒔菜.svg" @click="openFarmPopup('taocheng')"/>
              <img alt="富春山農場標記" class="absolute bottom-[20%] left-[46%] md:bottom-[18%] md:left-[48%] lg:bottom-[18%] lg:left-[48%] transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 cursor-pointer hover:scale-110 transition-transform duration-300" src="/assets/SVG/富春山農場.svg" @click="openFarmPopup('fuchun')"/>
              <img alt="儒園鮮果標記" class="absolute bottom-[11%] left-[50%] md:bottom-[9%] md:left-[52%] lg:bottom-[9%] lg:left-[52%] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 cursor-pointer hover:scale-110 transition-transform duration-300" src="/assets/SVG/儒園鮮果.svg" @click="openFarmPopup('ruyuan')"/>
            </div>
        </div>
      </section>

      <!-- Pop-up Window -->
      <div v-if="currentFarm" class="fixed inset-0 flex items-center justify-center z-50" @click="closePopup">
        <div class="bg-white bg-opacity-85 backdrop-blur-md border-4 border-white rounded-lg shadow-2xl max-w-xl w-full mx-4 max-h-[90vh] flex flex-col" @click.stop>
          <!-- 固定標題區域 -->
          <div class="flex justify-between items-center p-8 pb-4 flex-shrink-0">
            <h2 class="text-2xl font-bold text-green-700">{{ getFarmTitle() }}</h2>
            <button @click="closePopup" class="text-gray-500 hover:text-gray-700">
              <span class="material-icons">close</span>
            </button>
          </div>
          <!-- 可滾動內容區域 -->
          <div class="px-8 pb-8 overflow-y-auto flex-1">
            <!-- 桃城蒔菜照片展示 -->
            <div v-if="currentFarm === 'taocheng'" class="space-y-6">
              <div class="text-center">
                <img alt="桃城蒔菜場域照片1" class="w-full h-64 object-contain rounded-lg mb-3" src="/assets/場域照片/桃城1.jpg"/>
                <p class="text-base text-gray-700 font-medium">馬達控制器</p>
              </div>
              
              <div class="text-center">
                <img alt="桃城蒔菜場域照片2" class="w-full h-64 object-contain rounded-lg mb-3" src="/assets/場域照片/桃城2.jpg"/>
                <p class="text-base text-gray-700 font-medium">馬達控制器</p>
              </div>
              
              <div class="text-center">
                <img alt="桃城蒔菜場域照片3" class="w-full h-64 object-contain rounded-lg mb-3" src="/assets/場域照片/桃城3.jpg"/>
                <p class="text-base text-gray-700 font-medium">馬達控制器偵測流量計數據保護馬達管路</p>
              </div>
              
              <div class="text-center">
                <img alt="桃城蒔菜場域照片4" class="w-full h-64 object-contain rounded-lg mb-3" src="/assets/場域照片/桃城4.jpg"/>
                <p class="text-base text-gray-700 font-medium">灌溉用控制器</p>
              </div>
              
              <div class="text-center">
                <img alt="桃城蒔菜場域照片5" class="w-full h-64 object-contain rounded-lg mb-3" src="/assets/場域照片/桃城5.jpg"/>
                <p class="text-base text-gray-700 font-medium">溫室內環境感測器</p>
              </div>
              
              <div class="text-center">
                <img alt="桃城蒔菜場域照片6" class="w-full h-64 object-contain rounded-lg mb-3" src="/assets/場域照片/桃城6.jpg"/>
                <p class="text-base text-gray-700 font-medium">溫室外累積光度環境感測器</p>
              </div>
            </div>

            <!-- 富春山農場照片展示 -->
            <div v-if="currentFarm === 'fuchun'" class="space-y-6">
              <div class="text-center">
                <img alt="富春山農場場域照片1" class="w-full h-64 object-contain rounded-lg mb-3" src="/assets/場域照片/富春山1.jpg"/>
                <p class="text-base text-gray-700 font-medium">自動液肥控制系統：加壓馬達、電磁閥、文氏管、三台灌溉用控制器</p>
              </div>
              
              <div class="text-center">
                <img alt="富春山農場場域照片2" class="w-full h-64 object-contain rounded-lg mb-3" src="/assets/場域照片/富春山2.jpg"/>
                <p class="text-base text-gray-700 font-medium">電箱與控制器</p>
              </div>
              
              <div class="text-center">
                <img alt="富春山農場場域照片3" class="w-full h-80 object-contain rounded-lg mb-3" src="/assets/場域照片/富春山3.jpg"/>
                <p class="text-base text-gray-700 font-medium">環境感測器，偵測網室內環境的溫濕度。</p>
              </div>
            </div>

                          <!-- 儒園鮮果照片展示 -->
              <div v-if="currentFarm === 'ruyuan'" class="space-y-6">
                <div class="text-center">
                  <img alt="儒園鮮果場域照片1" class="w-full h-80 object-contain rounded-lg mb-3" src="/assets/場域照片/儒園1.jpg"/>
                  <p class="text-base text-gray-700 font-medium">灌溉、降溫用控制器</p>
                </div>
                
                <div class="text-center">
                  <img alt="儒園鮮果場域照片2" class="w-full h-80 object-contain rounded-lg mb-3" src="/assets/場域照片/儒園2.jpg"/>
                  <p class="text-base text-gray-700 font-medium">偵測環境溫濕度用環境感測器</p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <!-- 農研技術核心科技 -->
      <section class="py-16 bg-green-50">
        <div class="container mx-auto px-8 md:px-12 lg:px-16">
          <h3 class="text-3xl font-bold text-green-700 text-center mb-12">農研技術核心科技</h3>
          <div class="text-center mb-12">
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">樂農智慧農業是以<span class="text-green-600 font-semibold">農民需求</span>、在地農民豐富的栽種經驗，以及田間感測器建立場域專屬模型，透過雲端平台進行自動化控制，<span class="text-green-600 font-semibold">讓農業變得更輕鬆</span>。</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <img alt="手機遠端遙控圖示" class="h-20 w-20 mx-auto mb-4" src="/assets/SVG/4_01.svg"/>
              <h4 class="text-xl font-semibold mb-2">環境監測</h4>
              
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <img alt="AI智慧控制圖示" class="h-20 w-20 mx-auto mb-4" src="/assets/SVG/4_02.svg"/>
              <h4 class="text-xl font-semibold mb-2">數據分析</h4>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <img alt="數據分析圖示" class="h-20 w-20 mx-auto mb-4" src="/assets/SVG/4_03.svg"/>
              <h4 class="text-xl font-semibold mb-2">專屬模型</h4>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <img alt="數據分析圖示" class="h-20 w-20 mx-auto mb-4" src="/assets/SVG/4_04.svg"/>
              <h4 class="text-xl font-semibold mb-2">自動控制</h4>
            </div>
          </div>
          <div class="mt-16 bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center">
            <img alt="感測器場域監測圖" class="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-8" src="https://md.webduino.io/uploads/upload_d9104de43bc3ff1f4e3e238c4959a7ae.png"/>
            <div class="md:w-1/2">
              <h4 class="text-2xl font-bold text-green-700 mb-4">新一代樂農小主機</h4>
              <p class="text-gray-700 mb-4 text-xl">可同時連接 3-10 種裝置。因應多樣態客製化環控與栽培需求，整合各式 RS485 裝置。</p>
              <a class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">最新資訊</a>
            </div>
          </div>
          
          <!-- 產品介紹 -->
          <div class="mt-16">
            <h3 class="text-3xl font-bold text-green-700 text-center mb-12">主機介紹</h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <img alt="產品一示意圖" class="w-3/4 h-40 object-contain rounded-md mb-4 mx-auto" src="/assets/tinyhost.png"/>
                <h4 class="text-xl font-semibold text-green-700 mb-2">樂農小主機｜基礎入門</h4>
                <p class="text-gray-600 mb-4 text-lg">可串接 3 種感 / 控設備。即時確認設備的連接與類型。
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <img alt="產品二示意圖" class="w-3/4 h-40 object-contain rounded-md mb-4 mx-auto" src="/assets/tinyhost_pro.png"/>
                <h4 class="text-xl font-semibold text-green-700 mb-2">樂農小主機 PRO｜進階實用</h4>
                <p class="text-gray-600 mb-4 text-lg">串接可達 10 種設備，連接影像 / 感測 / 控制，操作場域更便利！
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <img alt="產品三示意圖" class="w-3/4 h-40 object-contain rounded-md mb-4 mx-auto" src="/assets/wifi_4way.png"/>
                <h4 class="text-xl font-semibold text-green-700 mb-2">Wi-Fi 四路控制器｜感測首選</h4>
                <p class="text-gray-600 mb-4 text-lg">24小時雲端監控，隨時隨地掌握農場狀況，數據分析一目了然。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <!-- 我們可以控制什麼 -->
       <section class="py-16">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold text-green-700 text-center mb-12">我們可以控制什麼</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-13.png" alt="澆灌水" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">澆灌水</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-14.png" alt="風扇" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">風扇</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-15.png" alt="馬達" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">馬達</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-16.png" alt="水霧" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">水霧</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-17.png" alt="捲簾" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">捲簾</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-18.png" alt="燈光" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">燈光</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-19.png" alt="光度" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">光度</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-20.png" alt="溫濕度" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">溫濕度</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-21.png" alt="土壤濕度" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">土壤濕度</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-22.png" alt="流量計" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">流量計</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-23.png" alt="雨量計" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">雨量計</p>
            </div>
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow">
              <img src="/assets/0_con-24.png" alt="各式 RS485" class="w-12 h-12 mb-2"/>
              <p class="text-gray-700">各式 RS485</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 串接氣象站 -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold text-green-700 text-center mb-12">串接氣象站</h3>
          <img alt="場域控制儀表板截圖" class="w-3/4 h-auto object-contain rounded-lg shadow-xl mx-auto" src="/assets/氣象站.png"/>
        </div>
      </section>

      <!-- 場域控制一目瞭然 -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold text-green-700 text-center mb-12">場域控制一目瞭然</h3>
          <img alt="場域控制儀表板截圖" class="w-3/4 h-auto object-contain rounded-lg shadow-xl mx-auto" src="/assets/儀表板_25.png"/>
        </div>
      </section>

     

      <!-- 手機控制 -->
      <section class="py-16">
        <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img alt="手機控制場域示意圖" class="w-full rounded-lg shadow-lg" src="/assets/3_1.png"/>
          </div>
          <div class="text-center md:text-left">
            <h3 class="text-3xl font-bold text-green-700 mb-4">ㄧ機在手，場域我懂</h3>
            <p class="text-xl text-gray-700 mb-6">打開手機就能立即看到場域溫濕度與設備是否啟動等狀態！讓農務管理更輕鬆。</p>
            <a class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300" href="#">了解更多</a>
          </div>
          <div>
            <img alt="手機控制場域示意圖" class="w-full rounded-lg shadow-lg" src="/assets/3_2.png"/>
          </div>
          <div class="text-center md:text-left">
            <h3 class="text-3xl font-bold text-green-700 mb-4">有問題只要 LINE 一下</h3>
            <p class="text-xl text-gray-700 mb-6">打開APP/網頁就能立即掌握現場溫濕度與設備運轉狀態，啟動自動化控制，讓農務管理更輕鬆。</p>
            <a class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300" href="#">了解更多</a>
          </div>
          <div>
            <img alt="手機控制場域示意圖" class="w-full rounded-lg shadow-lg" src="/assets/3_3.png"/>
          </div>
          <div class="text-center md:text-left">
            <h3 class="text-3xl font-bold text-green-700 mb-4">用積木降低客製成本</h3>
            <p class="text-xl text-gray-700 mb-6">專家輔助</p>
            <a class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300" href="#">了解更多</a>
          </div>
        </div>
      </section>

      <!-- 誰適合使用樂農 -->
      <section class="py-16 bg-green-50">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold text-green-700 text-center mb-12">誰適合使用樂農</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <img alt="LINE客服支援示意圖" class="w-full h-48 object-cover rounded-md mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcbkvT5djV2Pv7R_BEUTFQaZ_Dm7pIRYUTDBM1rYz9Vg9SWKWtVdZndGAz_79I-EHLWqhdI5YaIw_-ZYNdUXHKdBZyTfCTDOX5UcQUYzp74ZD1vQcHy0rIeLS0MK2yqYg4NwP2mNzyKrdlCTKskr9898xMxzWEXzLiwBv75BLbL0vxOhKcp2wIPyMrF7T8u3ipaIlCK83FxWHjIAsdbGumuiwt90YW4sRsnGXvEo3_r4Qsald9k9jOZ8BapDRoJc9Ti3rPJkLxJiMG"/>
              <h4 class="text-xl font-semibold text-green-700 mb-2">農戶/相關單位</h4>
              <p class="text-gray-600 mb-4 text-lg">樂農智慧農業提供完整的環控解決方案，讓您輕鬆管理農場。</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <img alt="澆水完成通知示意圖" class="w-full h-48 object-cover rounded-md mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO0iV8s_hjaIKm3L3LRGjK2BbboKKHUPduwPJ7Gzu_07gtPlI0NT7ywnWPhr0CfhRbJqIilUfpYWCOy0kR6U8TC7eAXqxGy1nawjltPenPA6jHMh72VSYAZeVKpf20VjfdebwKyeqAaV1oW04_pmlWRXsQBPiQ6MUBd6zbDe9QH2ePo85m9YRoAfehKWZJiaTKmbp_KuKHplTVqYWQSXbEpvvms7dosQJ9JVO_tElqat4QcAeFlE30faZsQPnppKafgE8hESfSaL-A"/>
              <h4 class="text-xl font-semibold text-green-700 mb-2">校園/相關單位</h4>
              <p class="text-gray-600 mb-4 text-lg">慶奇深耕智慧農業與科技教育多年，</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <img alt="成本降低示意圖" class="w-full h-48 object-cover rounded-md mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPAsYsnCQpktIrSpOgXbR2DT8gfRHlM_PQLcRPyQdJyqQJ1pjieGoJRtRKgZP7IbEXUjjT5MXZ0wX9CM-dOcs3PcMVd-Z1DbMZ1j_LHCQNgPGr-ICX0JeX1HipT2TGelq2exiINUP1zzbU56t1kzvOqHiLnS5ixiaI8i6RsPdvOXkMS889iV1jqPfeCaR06OSYGNS5POkmuNea4vv5FR0LF70ijMB4iWMgjDUUgShRMWkr4DPy0GPpKYwjKrhbvr6SiK44ZZ4im6Oq"/>
              <h4 class="text-xl font-semibold text-green-700 mb-2">SI 整合商</h4>
              <p class="text-gray-600 mb-4 text-lg">我們專注技術的開發，與您攜手配合，讓農戶更輕鬆踏入智慧農業。</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 class="text-lg font-semibold text-white mb-3" id="contact">聯絡我們</h5>
            <p class="mb-1">慶奇科技股份有限公司</p>
            <p class="mb-1"><span class="material-icons text-sm inline-block align-middle mr-1">place</span> 高雄市前鎮區復興四路 2 號 4 樓 A10</p>
            <p class="mb-1"><span class="material-icons text-sm inline-block align-middle mr-1">phone</span> 07-3388-511</p>
            <p class="mb-1"><span class="material-icons text-sm inline-block align-middle mr-1">email</span> service@webduino.io</p>
          </div>
          <div>
            <h5 class="text-lg font-semibold text-white mb-3">快速連結</h5>
            <ul class="space-y-1">
              <li><a class="hover:text-green-400" href="#">產品介紹</a></li>
              <li><a class="hover:text-green-400" href="#installations">場域實績</a></li>
              <li><a class="hover:text-green-400" href="#">食農教育</a></li>
              
            </ul>
          </div>
          <div>
            <h5 class="text-lg font-semibold text-white mb-3">關注我們</h5>
            <div class="flex space-x-4">
              <a class="text-gray-400 hover:text-white" href="#"><img alt="Facebook icon" class="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj0469GvjxwDlqnECXSV_ypXfmB7cLw_yXMNyQdtj6OnI3_RkzFtmTF7ECgIJNDT4tyBB6Q7DG4v2Z8PjzQQXzfrqQB-mdWQuv0khop_iZlI4VaJGA9Ijl5pPclEq1H8a9veoU77zXqoWDnwD4gjRD3-WJR77PIw_A81jUIsY_ewcm4D2iGS9QYiEuZ3sv9HzTB_vZsS0mrOgUEEQ11hkco1Edvjv3K3qLtoVLlBCFaTW78M1Zb5cmE0q2K-F4QvhcO7RkzfEyEIIF"/></a>
              <a class="text-gray-400 hover:text-white" href="#"><img alt="LINE icon" class="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlrWtpnODJWwwPkOu6yEQQnx19ma8vwZlJ_2oqOqCUMvHHTEh1Tj1oknx8FYv_-g4mYhngPA5Q82aSLwuYIi_Kfa10yq1mScKlsgnRE5w5D-z4QTC3OZzkEWMHYDSiS7hejQcXPuAe5lxDVdBEDXnEh-tdYqLnTP0wD730Al4y3X2HIpU_Zufgjl8FWAApwhPJIHOttC4wHof9yzh16g6SKE5RlV2PmDiXRqcXXYA3YiJgSh5y-u9mbEe3o0UGW0h77ODYO74rOv1m"/></a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 pt-8 text-center text-sm">
          <p>© 2025 慶奇科技股份有限公司 版權所有</p>
          <p>本網站內容均受著作權法保護，未經授權不得轉載。</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AgricHome',
  data() {
    return {
      currentFarm: null // 當前選中的農場：'taocheng'、'fuchun'、'ruyuan'
    }
  },
  methods: {
    openFarmPopup(farmName) {
      this.currentFarm = farmName
    },
    closePopup() {
      this.currentFarm = null
    },
    getFarmTitle() {
      switch (this.currentFarm) {
        case 'taocheng':
          return '桃城蒔菜 - 安裝場域'
        case 'fuchun':
          return '富春山農場 - 安裝場域'
        case 'ruyuan':
          return '儒園鮮果 - 安裝場域'
        default:
          return '農場資訊'
      }
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style> 