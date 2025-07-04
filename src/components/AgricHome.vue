<template>
  <div class="bg-white">
    <!-- Header -->
    <header class="bg-green-700/80 text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div class="px-4 lg:px-8 py-3 flex justify-between items-center">
        <a href="/home" class="text-2xl font-bold">慶奇科技</a>
        <nav class="hidden md:flex space-x-6 items-center text-lg">
          <a class="hover:text-green-200" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a>
          <a class="hover:text-green-200" href="#installations">場域實績</a>
          <a class="hover:text-green-200" href="/education">食農教育</a>
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
            <a class="hover:text-green-200 py-2" href="#installations">場域實績</a>
            <a class="hover:text-green-200 py-2" href="/education">食農教育</a>
            <a class="hover:text-green-200 py-2" href="#contact">聯絡我們</a>
            <a class="hover:text-green-200 py-2" href="https://md.webduino.io/s/22TOZk5pV">使用教學</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main>
      <!-- Hero Section -->
      <section 
        class="relative h-[400px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-white overflow-hidden"
        style="background-image: url('https://md.webduino.io/uploads/upload_accf01f5f5a02fc7b9bb62bdcc561651.png'); background-size: cover; background-position: center;"
      >
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
        <div class="absolute bottom-0 w-full">
          <!-- 手機版：較淺的波浪，下方平行部分較短 -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280" fill="white" preserveAspectRatio="none" style="width: 100%; height: 120px;" class="block md:hidden">
            <path d="M0,200 C480,260 960,260 1440,200 L1440,280 L0,280 Z"></path>
          </svg>
          <!-- 桌面版：原本的波浪 -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="white" preserveAspectRatio="none" style="width: 100%; height: 180px;" class="hidden md:block">
            <path d="M0,160 C480,320 960,320 1440,160 L1440,320 L0,320 Z"></path>
          </svg>
        </div>
        <div class="relative z-10 text-center px-4 mt-8 md:-mt-20">
          <img src="/assets/logo.png" alt="樂農智慧農業" class="mx-auto mb-6 md:mb-8 h-24 md:h-40 lg:h-48 w-auto object-contain"/>
          <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center">
            <a class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 md:px-8 rounded-lg shadow-md transition duration-300 text-lg md:text-xl" href="https://agric-dashboard.webduino.io/login">登入樂農系統</a>
            <a class="bg-white hover:bg-gray-100 text-green-600 font-semibold py-3 px-6 md:px-8 rounded-lg shadow-md transition duration-300 text-lg md:text-xl" href="/integrator-register">整合商登錄</a>
          </div>
        </div>
      </section>
      <div class="bg-white pt-0 pb-4 mt-2 md:mt-0">
        <div class="px-4 lg:px-8">
          <img src="/assets/5icon.png" alt="五個功能圖標" class="w-full h-auto object-contain"/>
        </div>
      </div>

      <!-- Icons Section -->
      <section class="py-8 md:py-16 bg-white">
        <div class="container mx-auto px-4">
          <div ref="heroSection" class="flex flex-col items-center mt-2 pt-1 pb-4 md:pt-12 md:pb-12 transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': heroVisible, 'translate-y-20 opacity-0': !heroVisible }">
            <svg class="w-24 h-24 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-4 md:mb-8 transform rotate-12 transition-all duration-1000 ease-out drop-shadow-lg" :class="{ 'animate-phone': heroVisible }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.36 243.53">
              <path class="fill-green-700" d="M132.3,12.31L50.06.2c-10.23-1.51-19.83,5.63-21.33,15.86L.2,209.89c-1.5,10.22,5.62,19.83,15.86,21.33l82.24,12.11c10.23,1.51,19.83-5.64,21.33-15.86l28.53-193.83c1.51-10.22-5.63-19.83-15.86-21.33ZM79.07,24.93l15.63,2.3c1.38.2,2.35,1.49,2.15,2.87-.2,1.38-1.5,2.34-2.88,2.14l-15.63-2.3c-1.38-.2-2.35-1.5-2.15-2.88s1.5-2.33,2.88-2.13ZM58.65,227.25c-4.63-.68-7.83-4.99-7.15-9.63s4.99-7.83,9.62-7.15,7.83,4.99,7.15,9.62c-.68,4.63-4.99,7.84-9.62,7.16ZM108.5,207.1l-93.15-13.71L38.19,38.22l93.15,13.71-22.84,155.17Z"/>
            </svg>
            <div class="text-center text-xl md:text-3xl font-normal md:font-semibold text-gray-700 md:text-gray-800 transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': textVisible, 'translate-y-8 opacity-0': !textVisible }">
              <p class="mb-2 md:mb-4">拿起手機就能控制場域</p>
              <p>用科技延續農業的傳承與驕傲</p>
            </div>
          </div>
        </div>
      </section>

      <div class="w-full border-b border-gray-200"></div>

      <!-- 全台安裝場域 -->
      <section ref="installationsSection" class="py-8 md:py-16 transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': installationsVisible, 'translate-y-20 opacity-0': !installationsVisible }" id="installations">
        <div class="container mx-auto px-4 text-center">
          <h3 class="text-3xl md:text-4xl font-bold text-green-700 mb-4">全台安裝場域</h3>
          <p class="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-4 font-semibold">全台超過 200 個場域安裝使用中</p>
                      <div class="relative inline-block w-full max-w-sm md:max-w-lg lg:max-w-4xl mx-auto" style="aspect-ratio: 1066/1244;">
              <img alt="台灣安裝場域地圖" class="w-full h-full object-cover rounded-lg md:shadow-md md:hover:shadow-xl transition-shadow duration-300" src="/assets/台灣地圖2.png"/>
              <img alt="桃城蒔菜標記" class="absolute top-[9%] left-[77.3%] md:top-[9.5%] md:left-[77%] lg:top-[11%] lg:left-[77%] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 cursor-pointer hover:scale-110 transition-transform duration-300" src="/assets/SVG/桃城蒔菜.svg" @click="openFarmPopup('taocheng')"/>
              <img alt="富春山農場標記" class="absolute bottom-[11%] left-[49.5%] md:bottom-[14%] md:left-[49.5%] lg:bottom-[18%] lg:left-[49.5%] transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 cursor-pointer hover:scale-110 transition-transform duration-300" src="/assets/SVG/富春山農場.svg" @click="openFarmPopup('fuchun')"/>
              <img alt="儒園鮮果標記" class="absolute bottom-[3%] left-[53%] md:bottom-[6.5%] md:left-[53%] lg:bottom-[10%] lg:left-[53%] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 cursor-pointer hover:scale-110 transition-transform duration-300" src="/assets/SVG/儒園鮮果.svg" @click="openFarmPopup('ruyuan')"/>
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
                      <h3 class="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6 md:mb-12">農研技術核心科技</h3>
          <div class="text-center mb-8 md:mb-12">
                          <p class="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">樂農智慧農業是<span class="text-green-600 font-semibold">以農民需求為出發點</span>、藉由農民的栽種經驗，以及場域感測器收集的數據建立專屬模型，能透過雲端平台進行自動化控制，<span class="text-green-600 font-semibold">減輕農務負擔與成本</span>。</p>
          </div>
          <div ref="techSection" class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
            <div class="bg-white p-4 md:p-6 rounded-lg shadow-lg aspect-square flex flex-col justify-center pt-6 md:pt-6 transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': techVisible, 'translate-y-10 opacity-0': !techVisible }" :style="{ 'animation-delay': techVisible ? '0ms' : '0ms' }">
              <img alt="手機遠端遙控圖示" class="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-4" src="/assets/SVG/4_01.svg"/>
              <h4 class="text-lg md:text-2xl font-bold md:font-semibold mb-2 text-green-700">環境監測</h4>
              
            </div>
            <div class="bg-white p-4 md:p-6 rounded-lg shadow-lg aspect-square flex flex-col justify-center pt-6 md:pt-6 transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': techVisible, 'translate-y-10 opacity-0': !techVisible }" :style="{ 'animation-delay': techVisible ? '200ms' : '0ms' }">
              <img alt="AI智慧控制圖示" class="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-4" src="/assets/SVG/4_02.svg"/>
              <h4 class="text-lg md:text-2xl font-bold md:font-semibold mb-2 text-green-700">數據分析</h4>
            </div>
            <div class="bg-white p-4 md:p-6 rounded-lg shadow-lg aspect-square flex flex-col justify-center pt-6 md:pt-6 transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': techVisible, 'translate-y-10 opacity-0': !techVisible }" :style="{ 'animation-delay': techVisible ? '400ms' : '0ms' }">
              <img alt="數據分析圖示" class="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-4" src="/assets/SVG/4_03.svg"/>
              <h4 class="text-lg md:text-2xl font-bold md:font-semibold mb-2 text-green-700">專屬模型</h4>
            </div>
            <div class="bg-white p-4 md:p-6 rounded-lg shadow-lg aspect-square flex flex-col justify-center pt-6 md:pt-6 transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': techVisible, 'translate-y-10 opacity-0': !techVisible }" :style="{ 'animation-delay': techVisible ? '600ms' : '0ms' }">
              <img alt="數據分析圖示" class="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-4" src="/assets/SVG/4_04.svg"/>
              <h4 class="text-lg md:text-2xl font-bold md:font-semibold mb-2 text-green-700">自動控制</h4>
            </div>
          </div>


        </div>
      </section>

      <!-- 新一代樂農小主機 -->
      <section ref="newHostSection" class="py-6 md:py-8 bg-white transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': newHostVisible, 'translate-y-20 opacity-0': !newHostVisible }">
        <div class="px-4 lg:px-8">
          <div class="bg-white p-4 md:p-12 lg:p-16 rounded-2xl flex flex-col md:flex-row items-center max-w-7xl mx-auto">
            <!-- 手機版：標題在上面 -->
            <div class="md:hidden text-center mb-2">
              <h4 class="text-3xl font-bold text-green-700 mb-2">新一代樂農小主機</h4>
            </div>
            
            <img alt="小主機們" class="w-full md:w-1/2 rounded-lg mb-1 md:mb-0 md:mr-12" src="https://md.webduino.io/uploads/upload_d9104de43bc3ff1f4e3e238c4959a7ae.png"/>
            
            <div class="md:w-1/2 text-center md:text-left">
              <!-- 桌面版：標題在這裡 -->
              <h4 class="hidden md:block text-3xl md:text-4xl font-bold text-green-700 mb-6">新一代樂農小主機</h4>
              <p class="text-gray-700 mb-6 text-lg md:text-2xl mt-0" style="line-height: 1.5;">可同時連接 3-10 種裝置。因應多樣態客製化環控與栽培需求，整合各式 RS485 裝置。</p>
              <a class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg shadow-md transition duration-300 text-lg" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">最新資訊</a>
            </div>
          </div>
        </div>
      </section>
          
      <!-- 主機介紹 -->
      <section class="py-8 md:py-16 bg-gray-100">
        <div class="px-4 lg:px-8">
          <h3 class="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">主機介紹</h3>
          <!-- 手機版輪播 -->
          <div ref="productSection" class="md:hidden relative max-w-sm mx-auto">
            <!-- 左箭頭 -->
            <button @click="prevProduct" class="absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow-md transition-all duration-300 hover:scale-105">
              <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <!-- 右箭頭 -->
            <button @click="nextProduct" class="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow-md transition-all duration-300 hover:scale-105">
              <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            <!-- 產品輪播容器 -->
            <div class="overflow-hidden">
              <div class="flex transition-transform duration-500 ease-out" 
                   :style="{ transform: `translateX(-${currentProductIndex * 100}%)` }"
                   @touchstart="handleTouchStart"
                   @touchmove="handleTouchMove"
                   @touchend="handleTouchEnd">
                <div v-for="(product, index) in products" :key="index" class="w-full flex-shrink-0 px-4">
                  <div class="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-700 ease-out" 
                       :class="{ 
                         'translate-y-0 opacity-100': productVisible, 
                         'translate-y-10 opacity-0': !productVisible,
                         'scale-90 opacity-60': index !== currentProductIndex,
                         'scale-100 opacity-100': index === currentProductIndex
                       }">
                    <img :alt="product.alt" class="w-3/4 h-40 object-contain rounded-md mb-2 mx-auto" :src="product.image"/>
                    <h4 class="font-bold text-green-700 mb-1 h-16 flex items-center justify-center" style="font-size: 1.375rem;">{{ product.title }}</h4>
                    <p class="text-gray-600 mb-4 text-lg">{{ product.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 指示點 -->
            <div class="flex justify-center mt-4 space-x-2">
              <button v-for="(product, index) in products" :key="index" 
                      @click="currentProductIndex = index"
                      class="w-2 h-2 rounded-full transition-colors"
                      :class="{ 'bg-green-700': index === currentProductIndex, 'bg-gray-300': index !== currentProductIndex }">
              </button>
            </div>
          </div>
          
          <!-- 桌面版網格 -->
          <div ref="productSectionDesktop" class="hidden md:grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div class="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': productVisible, 'translate-y-10 opacity-0': !productVisible }" :style="{ 'animation-delay': productVisible ? '0ms' : '0ms' }">
                <img alt="產品一示意圖" class="w-3/4 h-40 object-contain rounded-md mb-4 mx-auto" src="/assets/tinyhost.png"/>
              <h4 class="text-2xl font-bold text-green-700 mb-2 h-16 flex items-center justify-center">樂農小主機｜基礎入門</h4>
              <p class="text-gray-600 mb-4 text-lg md:text-lg">可串接 3 種感 / 控設備。即時確認設備的連接與類型。
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': productVisible, 'translate-y-10 opacity-0': !productVisible }" :style="{ 'animation-delay': productVisible ? '300ms' : '0ms' }">
                <img alt="產品二示意圖" class="w-3/4 h-40 object-contain rounded-md mb-4 mx-auto" src="/assets/tinyhost_pro.png"/>
              <h4 class="text-2xl font-bold text-green-700 mb-2 h-16 flex items-center justify-center">樂農小主機 PRO｜進階實用</h4>
              <p class="text-gray-600 mb-4 text-lg md:text-lg">串接可達 10 種設備，連接影像 / 感測 / 控制，操作場域更便利！
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': productVisible, 'translate-y-10 opacity-0': !productVisible }" :style="{ 'animation-delay': productVisible ? '600ms' : '0ms' }">
                <img alt="產品三示意圖" class="w-3/4 h-40 object-contain rounded-md mb-4 mx-auto" src="/assets/wifi_4way.png"/>
              <h4 class="text-2xl font-bold text-green-700 mb-2 h-16 flex items-center justify-center">Wi-Fi 四路控制器｜感測首選</h4>
              <p class="text-gray-600 mb-4 text-lg md:text-lg">24小時雲端監控，隨時隨地掌握農場狀況，數據分析一目了然。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 智慧管理好輕鬆 -->
      <section class="py-16 bg-green-50">
        <div class="px-4 lg:px-8">
                      <h3 class="text-3xl md:text-4xl font-bold text-green-700 text-center mb-16">智慧管理好輕鬆</h3>
          <div ref="smartSection" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <!-- 第一項 -->
            <div class="text-center transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': smartVisible, 'translate-y-10 opacity-0': !smartVisible }" :style="{ 'animation-delay': smartVisible ? '0ms' : '0ms' }">
              <div class="bg-white rounded-lg shadow-lg p-6">
                <img alt="手機控制場域示意圖" class="w-3/4 h-40 object-contain mb-4 mx-auto" src="/assets/3_1.png"/>
                <h4 class="text-2xl font-bold text-green-700 mb-2">ㄧ機在手，場域我懂</h4>
                <p class="text-gray-600 mb-4 text-lg md:text-lg">打開手機就能立即看到場域各項環境數值與控制設備運轉狀態！</p>
            </div>
            </div>
            
            <!-- 第二項 -->
            <div class="text-center transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': smartVisible, 'translate-y-10 opacity-0': !smartVisible }" :style="{ 'animation-delay': smartVisible ? '300ms' : '0ms' }">
              <div class="bg-white rounded-lg shadow-lg p-6">
                <img alt="手機控制場域示意圖" class="w-3/4 h-40 object-contain mb-4 mx-auto" src="/assets/3_2.png"/>
                <h4 class="text-2xl font-bold text-green-700 mb-2">有問題就 LINE 一下</h4>
                <p class="text-gray-600 mb-4 text-lg md:text-lg">用通訊軟體操作場域設備、了解場域狀況，讓農務管理更輕鬆。</p>
            </div>
            </div>
            
            <!-- 第三項 -->
            <div class="text-center transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': smartVisible, 'translate-y-10 opacity-0': !smartVisible }" :style="{ 'animation-delay': smartVisible ? '600ms' : '0ms' }">
              <div class="bg-white rounded-lg shadow-lg p-6">
                <img alt="手機控制場域示意圖" class="w-3/4 h-40 object-contain mb-4 mx-auto" src="/assets/3_3.png"/>
                <h4 class="text-2xl font-bold text-green-700 mb-2">用積木降低客製成本</h4>
                <p class="text-gray-600 mb-4 text-lg md:text-lg">專家輔助客製化解決方案。讓每個場域都有專屬智慧農業方案。</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 串接氣象站 -->
      <section ref="weatherSection" class="py-8 md:py-20 bg-gradient-to-br from-blue-50 to-green-50 transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': weatherVisible, 'translate-y-20 opacity-0': !weatherVisible }">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">串接氣象站</h3>
          <p class="text-xl text-gray-600 text-center mb-6 md:mb-12 max-w-2xl mx-auto">即時監測氣象數據，智慧預測環境變化，讓農作物在最適宜的條件下成長。</p>
          <div class="bg-white p-8 rounded-2xl shadow-2xl max-w-5xl mx-auto">
            <img alt="場域控制儀表板截圖" class="w-full h-auto object-contain rounded-lg" src="/assets/氣象站.png"/>
          </div>
        </div>
      </section>

      <!-- 場域控制一目瞭然 -->
      <section ref="dashboardSection" class="py-8 md:py-20 bg-gradient-to-br from-green-50 to-blue-50 transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': dashboardVisible, 'translate-y-20 opacity-0': !dashboardVisible }">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">場域控制一目瞭然</h3>
          <p class="text-xl text-gray-600 text-center mb-6 md:mb-12 max-w-2xl mx-auto">直觀的儀表板設計，讓您輕鬆掌握所有設備狀態，一鍵操控整個農場。</p>
          <div class="bg-white p-8 rounded-2xl shadow-2xl max-w-5xl mx-auto">
            <img alt="場域控制儀表板截圖" class="w-full h-auto object-contain rounded-lg" src="/assets/儀表板_25.png"/>
          </div>
        </div>
      </section>

      <!-- 我們可以控制什麼 -->
      <section ref="controlSection" class="py-16 transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-20 opacity-0': !controlVisible }">
        <div class="container mx-auto px-4">
                      <h3 class="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">我們可以控制什麼</h3>
          <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '0ms' : '0ms' }">
              <img src="/assets/0_con-13.png" alt="澆灌水" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">澆灌水</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '50ms' : '0ms' }">
              <img src="/assets/0_con-14.png" alt="風扇" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">風扇</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '100ms' : '0ms' }">
              <img src="/assets/0_con-15.png" alt="馬達" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">馬達</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '150ms' : '0ms' }">
              <img src="/assets/0_con-16.png" alt="水霧" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">水霧</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '200ms' : '0ms' }">
              <img src="/assets/0_con-17.png" alt="捲簾" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">捲簾</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '250ms' : '0ms' }">
              <img src="/assets/0_con-18.png" alt="燈光" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">燈光</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '300ms' : '0ms' }">
              <img src="/assets/0_con-19.png" alt="光度" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">光度</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '350ms' : '0ms' }">
              <img src="/assets/0_con-20.png" alt="溫濕度" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">溫濕度</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '400ms' : '0ms' }">
              <img src="/assets/0_con-21.png" alt="土壤濕度" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">土壤濕度</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '450ms' : '0ms' }">
              <img src="/assets/0_con-22.png" alt="流量計" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">流量計</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '500ms' : '0ms' }">
              <img src="/assets/0_con-23.png" alt="雨量計" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-base md:text-base lg:text-base">雨量計</p>
            </div>
            <div class="flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 bg-gray-100 rounded-lg shadow aspect-square transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': controlVisible, 'translate-y-10 opacity-0': !controlVisible }" :style="{ 'animation-delay': controlVisible ? '550ms' : '0ms' }">
              <img src="/assets/0_con-24.png" alt="各式 RS485" class="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 md:mb-3 lg:mb-3"/>
              <p class="text-gray-700 text-sm md:text-base lg:text-base">各式 RS485</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 誰適合使用樂農 -->
      <section class="py-16 bg-green-50">
        <div class="container mx-auto px-4">
                      <h3 class="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">誰適合使用樂農</h3>
          <div ref="userSection" class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 md:p-4 lg:p-6 rounded-lg shadow-lg text-center transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': userVisible, 'translate-y-10 opacity-0': !userVisible }" :style="{ 'animation-delay': userVisible ? '0ms' : '0ms' }">
              <img alt="農戶示意圖" class="w-full h-48 md:h-40 lg:h-48 object-cover rounded-md mb-4 md:mb-3 lg:mb-4" src="/assets/農戶.jpg"/>
              <h4 class="text-2xl font-bold text-green-700 mb-2">農戶/相關單位</h4>
              <p class="text-gray-600 mb-4 md:mb-2 lg:mb-4 text-lg">樂農提供低門檻的智慧農業解決方案，從小場域到大規模都能彈性使用，讓您輕鬆管理農場。</p>
            </div>
            <div class="bg-white p-6 md:p-4 lg:p-6 rounded-lg shadow-lg text-center transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': userVisible, 'translate-y-10 opacity-0': !userVisible }" :style="{ 'animation-delay': userVisible ? '400ms' : '0ms' }">
              <img alt="校園示意圖" class="w-full h-48 md:h-40 lg:h-48 object-cover rounded-md mb-4 md:mb-3 lg:mb-4" src="/assets/s-41.jpg"/>
              <h4 class="text-2xl font-bold text-green-700 mb-2">校園/相關單位</h4>
              <p class="text-gray-600 mb-4 md:mb-2 lg:mb-4 text-lg">我們深耕智慧農業與科技教育多年。讓學生在實作中學習，了解食農同時還能扎穩科技實力，一舉兩得！</p>
            </div>
            <div class="bg-white p-6 md:p-4 lg:p-6 rounded-lg shadow-lg text-center transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': userVisible, 'translate-y-10 opacity-0': !userVisible }" :style="{ 'animation-delay': userVisible ? '800ms' : '0ms' }">
              <img alt="SI整合商示意圖" class="w-full h-48 md:h-40 lg:h-48 object-cover rounded-md mb-4 md:mb-3 lg:mb-4" src="/assets/SI.png"/>
              <h4 class="text-2xl font-bold text-green-700 mb-2">SI 整合商</h4>
              <p class="text-gray-600 mb-4 md:mb-2 lg:mb-4 text-lg">我們專注技術的開發，與您在規劃場域的專業攜手配合，幫助農戶更輕鬆踏入智慧農業。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 相關報導 -->
      <section ref="newsSection" class="py-16 bg-white transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': newsVisible, 'translate-y-20 opacity-0': !newsVisible }">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">相關報導</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- YouTube 影片 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-out hover:shadow-xl hover:scale-105" :class="{ 'translate-y-0 opacity-100': newsVisible, 'translate-y-10 opacity-0': !newsVisible }" :style="{ 'animation-delay': newsVisible ? '0ms' : '0ms' }">
              <div class="relative aspect-video">
                <iframe 
                  class="w-full h-full" 
                  src="https://www.youtube.com/embed/X9cX8nzDrjk" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
              <div class="p-6">
                <a href="https://youtu.be/X9cX8nzDrjk?si=LcLX255H8zwpJbIw" target="_blank" class="block">
                  <h4 class="text-xl font-bold text-green-700 mb-2 hover:text-green-600 cursor-pointer">太陽公公來節水：滑手機的智慧農業管理</h4>
                </a>
                <a href="https://youtu.be/X9cX8nzDrjk?si=LcLX255H8zwpJbIw" target="_blank" class="text-gray-500 hover:text-gray-700 font-semibold">觀看完整影片 →</a>
              </div>
            </div>

            <!-- 新頭殼新聞 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-out hover:shadow-xl hover:scale-105" :class="{ 'translate-y-0 opacity-100': newsVisible, 'translate-y-10 opacity-0': !newsVisible }" :style="{ 'animation-delay': newsVisible ? '200ms' : '0ms' }">
              <a href="https://newtalk.tw/news/view/2022-04-18/741454" target="_blank" class="block">
                <div class="relative aspect-video">
                  <img src="/assets/報導/02.jpg" alt="新頭殼新聞預覽圖" class="w-full h-full object-cover"/>
                </div>
              </a>
              <div class="p-6">
                <a href="https://newtalk.tw/news/view/2022-04-18/741454" target="_blank" class="block">
                  <h4 class="text-xl font-bold text-green-700 mb-2 hover:text-green-600 cursor-pointer">食農教育新潮流 新北市鶯歌、永和國中智慧e化跨域行</h4>
                </a>
                <a href="https://newtalk.tw/news/view/2022-04-18/741454" target="_blank" class="text-gray-500 hover:text-gray-700 font-semibold">閱讀完整報導 →</a>
              </div>
            </div>

            <!-- 食力新聞 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-out hover:shadow-xl hover:scale-105" :class="{ 'translate-y-0 opacity-100': newsVisible, 'translate-y-10 opacity-0': !newsVisible }" :style="{ 'animation-delay': newsVisible ? '400ms' : '0ms' }">
              <a href="https://www.foodnext.net/life/education/paper/5593704179?fbclid=IwAR0cyabGxGEESDUdSq4XhMuyaczGiqFBSEbD9pns9rCpxVk_vYReuFFQQW0" target="_blank" class="block">
                <div class="relative aspect-video">
                  <img src="/assets/報導/03.jpg" alt="食力新聞預覽圖" class="w-full h-full object-cover"/>
                </div>
              </a>
              <div class="p-6">
                <a href="https://www.foodnext.net/life/education/paper/5593704179?fbclid=IwAR0cyabGxGEESDUdSq4XhMuyaczGiqFBSEbD9pns9rCpxVk_vYReuFFQQW0" target="_blank" class="block">
                  <h4 class="text-xl font-bold text-green-700 mb-2 hover:text-green-600 cursor-pointer">手機就能遠端澆水、檢索適栽種類！桃園農改場智慧植栽管理系統成校園食育推手</h4>
                </a>
                <a href="https://www.foodnext.net/life/education/paper/5593704179?fbclid=IwAR0cyabGxGEESDUdSq4XhMuyaczGiqFBSEbD9pns9rCpxVk_vYReuFFQQW0" target="_blank" class="text-gray-500 hover:text-gray-700 font-semibold">閱讀完整報導 →</a>
              </div>
            </div>

            <!-- Webduino 資源網報導 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-out hover:shadow-xl hover:scale-105" :class="{ 'translate-y-0 opacity-100': newsVisible, 'translate-y-10 opacity-0': !newsVisible }" :style="{ 'animation-delay': newsVisible ? '600ms' : '0ms' }">
              <a href="https://resource.webduino.io/blog/science-fair-masterpiece" target="_blank" class="block">
                <div class="relative aspect-video">
                  <img src="/assets/報導/04.webp" alt="Webduino 資源網報導預覽圖" class="w-full h-full object-cover"/>
                </div>
              </a>
              <div class="p-6">
                <a href="https://resource.webduino.io/blog/science-fair-masterpiece" target="_blank" class="block">
                  <h4 class="text-xl font-bold text-green-700 mb-2 hover:text-green-600 cursor-pointer">智慧植栽系統打造 AI 科技菜園，台中國安國小奪科展佳作</h4>
                </a>
                <a href="https://resource.webduino.io/blog/science-fair-masterpiece" target="_blank" class="text-gray-500 hover:text-gray-700 font-semibold">閱讀完整報導 →</a>
              </div>
            </div>

            <!-- 雄蜂授粉智慧灌溉影片 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-out hover:shadow-xl hover:scale-105" :class="{ 'translate-y-0 opacity-100': newsVisible, 'translate-y-10 opacity-0': !newsVisible }" :style="{ 'animation-delay': newsVisible ? '800ms' : '0ms' }">
              <div class="relative aspect-video">
                <iframe 
                  class="w-full h-full" 
                  src="https://www.youtube.com/embed/_ZHjH14OKos" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
              <div class="p-6">
                <a href="https://youtu.be/_ZHjH14OKos?si=czPyLhdECDVoxxiW" target="_blank" class="block">
                  <h4 class="text-xl font-bold text-green-700 mb-2 hover:text-green-600 cursor-pointer">雄蜂授粉.智慧灌溉 陳冠銘種出美味番茄</h4>
                </a>
                <a href="https://youtu.be/_ZHjH14OKos?si=czPyLhdECDVoxxiW" target="_blank" class="text-gray-500 hover:text-gray-700 font-semibold">觀看完整影片 →</a>
              </div>
            </div>

            <!-- 上下游新聞報導 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-out hover:shadow-xl hover:scale-105" :class="{ 'translate-y-0 opacity-100': newsVisible, 'translate-y-10 opacity-0': !newsVisible }" :style="{ 'animation-delay': newsVisible ? '1000ms' : '0ms' }">
              <a href="https://www.newsmarket.com.tw/blog/171433/?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExTWRFcU5CZFlUUGkyYVcxdgEeSE_rv3wyd56rdSmUDYHZXbAtar1EuuNqJv0vFh-56bxe_bVu9c5ZxIk7LO4_aem_g1hn-FyUeSqyZ_Ptnkkwjg" target="_blank" class="block">
                <div class="relative aspect-video">
                  <img src="/assets/報導/06.jpg" alt="上下游新聞報導預覽圖" class="w-full h-full object-cover"/>
                </div>
              </a>
              <div class="p-6">
                <a href="https://www.newsmarket.com.tw/blog/171433/?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExTWRFcU5CZFlUUGkyYVcxdgEeSE_rv3wyd56rdSmUDYHZXbAtar1EuuNqJv0vFh-56bxe_bVu9c5ZxIk7LO4_aem_g1hn-FyUeSqyZ_Ptnkkwjg" target="_blank" class="block">
                  <h4 class="text-xl font-bold text-green-700 mb-2 hover:text-green-600 cursor-pointer">紅龍果快中暑了？智慧感控灑水退燒！幫農民對抗極端天候，手機用Line就可遙控</h4>
                </a>
                <a href="https://www.newsmarket.com.tw/blog/171433/?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExTWRFcU5CZFlUUGkyYVcxdgEeSE_rv3wyd56rdSmUDYHZXbAtar1EuuNqJv0vFh-56bxe_bVu9c5ZxIk7LO4_aem_g1hn-FyUeSqyZ_Ptnkkwjg" target="_blank" class="text-gray-500 hover:text-gray-700 font-semibold">閱讀完整報導 →</a>
              </div>
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
              <li><a class="hover:text-green-400" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a></li>
              <li><a class="hover:text-green-400" href="#installations">場域實績</a></li>
              <li><a class="hover:text-green-400" href="/education">食農教育</a></li>
              <li><a class="hover:text-green-400" href="/integrator-register">整合商專區</a></li>
              
            </ul>
          </div>
          <div>
            <h5 class="text-lg font-semibold text-white mb-3">關注我們</h5>
            <div class="flex justify-start">
              <a href="https://www.facebook.com/agrickit" target="_blank"><img alt="Facebook icon" class="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj0469GvjxwDlqnECXSV_ypXfmB7cLw_yXMNyQdtj6OnI3_RkzFtmTF7ECgIJNDT4tyBB6Q7DG4v2Z8PjzQQXzfrqQB-mdWQuv0khop_iZlI4VaJGA9Ijl5pPclEq1H8a9veoU77zXqoWDnwD4gjRD3-WJR77PIw_A81jUIsY_ewcm4D2iGS9QYiEuZ3sv9HzTB_vZsS0mrOgUEEQ11hkco1Edvjv3K3qLtoVLlBCFaTW78M1Zb5cmE0q2K-F4QvhcO7RkzfEyEIIF"/></a>
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
      currentFarm: null, // 當前選中的農場：'taocheng'、'fuchun'、'ruyuan'
      showMobileMenu: false, // 手機版選單顯示狀態
      heroVisible: false, // 控制hero區塊動畫顯示
      techVisible: false, // 控制技術區塊動畫顯示
      textVisible: false, // 控制文字動畫顯示
      productVisible: false, // 控制產品區塊動畫顯示
      smartVisible: false, // 控制智慧管理區塊動畫顯示
      userVisible: false, // 控制用戶區塊動畫顯示
      installationsVisible: false, // 控制全台安裝場域區塊動畫顯示
      newHostVisible: false, // 控制新一代樂農小主機區塊動畫顯示
      weatherVisible: false, // 控制串接氣象站區塊動畫顯示
      dashboardVisible: false, // 控制場域控制一目瞭然區塊動畫顯示
      controlVisible: false, // 控制我們可以控制什麼區塊動畫顯示
      newsVisible: false, // 控制相關報導區塊動畫顯示
      currentProductIndex: 0, // 當前顯示的產品索引
      touchStartX: 0, // 觸控開始的X座標
      touchEndX: 0, // 觸控結束的X座標
      isSwiping: false, // 是否正在滑動
      products: [
        {
          image: '/assets/tinyhost.png',
          alt: '產品一示意圖',
          title: '樂農小主機｜基礎入門',
          description: '可串接 3 種感 / 控設備。即時確認設備的連接與類型。'
        },
        {
          image: '/assets/tinyhost_pro.png',
          alt: '產品二示意圖',
          title: '樂農小主機 PRO｜進階實用',
          description: '串接可達 10 種設備，連接影像 / 感測 / 控制，操作場域更便利！'
        },
        {
          image: '/assets/wifi_4way.png',
          alt: '產品三示意圖',
          title: 'Wi-Fi 四路控制器｜感測首選',
          description: '24小時雲端監控，隨時隨地掌握農場狀況，數據分析一目了然。'
        }
      ]
    }
  },
  mounted() {
    // 設置 Intersection Observer 來監聽 hero 區塊
    this.heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.heroVisible = true
          // 延遲1秒後顯示文字（等手機動畫開始）
          setTimeout(() => {
            this.textVisible = true
          }, 1000)
        }
      })
    }, {
      threshold: 0.1, // 當 10% 的元素可見時觸發
      rootMargin: '0px 0px -50px 0px' // 在元素進入視窗前 50px 時觸發
    })

    // 設置 Intersection Observer 來監聽技術區塊
    this.techObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.techVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 設置 Intersection Observer 來監聽產品區塊
    this.productObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.productVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 設置 Intersection Observer 來監聽智慧管理區塊
    this.smartObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.smartVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 設置 Intersection Observer 來監聽用戶區塊
    this.userObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.userVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 新增的 Intersection Observer
    // 設置 Intersection Observer 來監聽全台安裝場域區塊
    this.installationsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.installationsVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 設置 Intersection Observer 來監聽新一代樂農小主機區塊
    this.newHostObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.newHostVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 設置 Intersection Observer 來監聽串接氣象站區塊
    this.weatherObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.weatherVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 設置 Intersection Observer 來監聽場域控制一目瞭然區塊
    this.dashboardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.dashboardVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 設置 Intersection Observer 來監聽我們可以控制什麼區塊
    this.controlObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.controlVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 設置 Intersection Observer 來監聽相關報導區塊
    this.newsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.newsVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 開始觀察 hero 區塊
    if (this.$refs.heroSection) {
      this.heroObserver.observe(this.$refs.heroSection)
    }

    // 開始觀察技術區塊
    if (this.$refs.techSection) {
      this.techObserver.observe(this.$refs.techSection)
    }

    // 開始觀察產品區塊
    if (this.$refs.productSection) {
      this.productObserver.observe(this.$refs.productSection)
    }
    if (this.$refs.productSectionDesktop) {
      this.productObserver.observe(this.$refs.productSectionDesktop)
    }

    // 開始觀察智慧管理區塊
    if (this.$refs.smartSection) {
      this.smartObserver.observe(this.$refs.smartSection)
    }

    // 開始觀察用戶區塊
    if (this.$refs.userSection) {
      this.userObserver.observe(this.$refs.userSection)
    }

    // 開始觀察新增的區塊
    if (this.$refs.installationsSection) {
      this.installationsObserver.observe(this.$refs.installationsSection)
    }
    if (this.$refs.newHostSection) {
      this.newHostObserver.observe(this.$refs.newHostSection)
    }
    if (this.$refs.weatherSection) {
      this.weatherObserver.observe(this.$refs.weatherSection)
    }
    if (this.$refs.dashboardSection) {
      this.dashboardObserver.observe(this.$refs.dashboardSection)
    }
    if (this.$refs.controlSection) {
      this.controlObserver.observe(this.$refs.controlSection)
    }
    if (this.$refs.newsSection) {
      this.newsObserver.observe(this.$refs.newsSection)
    }
  },
  beforeDestroy() {
    // 清理 observers
    if (this.heroObserver) {
      this.heroObserver.disconnect()
    }
    if (this.techObserver) {
      this.techObserver.disconnect()
    }
    if (this.productObserver) {
      this.productObserver.disconnect()
    }
    if (this.smartObserver) {
      this.smartObserver.disconnect()
    }
    if (this.userObserver) {
      this.userObserver.disconnect()
    }
    // 清理新增的 observers
    if (this.installationsObserver) {
      this.installationsObserver.disconnect()
    }
    if (this.newHostObserver) {
      this.newHostObserver.disconnect()
    }
    if (this.weatherObserver) {
      this.weatherObserver.disconnect()
    }
    if (this.dashboardObserver) {
      this.dashboardObserver.disconnect()
    }
    if (this.controlObserver) {
      this.controlObserver.disconnect()
    }
    if (this.newsObserver) {
      this.newsObserver.disconnect()
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
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    nextProduct() {
      this.currentProductIndex = (this.currentProductIndex + 1) % this.products.length
    },
    prevProduct() {
      this.currentProductIndex = this.currentProductIndex === 0 ? this.products.length - 1 : this.currentProductIndex - 1
    },
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX
      this.isSwiping = true
    },
    handleTouchMove(event) {
      if (!this.isSwiping) return
    },
    handleTouchEnd(event) {
      if (!this.isSwiping) return
      
      this.touchEndX = event.changedTouches[0].clientX
      const touchDiff = this.touchStartX - this.touchEndX
      const minSwipeDistance = 50 // 最小滑動距離
      
      if (Math.abs(touchDiff) > minSwipeDistance) {
        if (touchDiff > 0) {
          // 向左滑動，顯示下一個產品
          this.handleInfiniteSwipe('next')
        } else {
          // 向右滑動，顯示上一個產品
          this.handleInfiniteSwipe('prev')
        }
      }
      
      this.isSwiping = false
      this.touchStartX = 0
      this.touchEndX = 0
    },
    // 新增：無限循環的滑動邏輯
    handleInfiniteSwipe(direction) {
      if (direction === 'next') {
        // 如果是最後一張，滑動到第一張
        if (this.currentProductIndex === this.products.length - 1) {
          this.currentProductIndex = 0
        } else {
          this.currentProductIndex++
        }
      } else {
        // 如果是第一張，滑動到最後一張
        if (this.currentProductIndex === 0) {
          this.currentProductIndex = this.products.length - 1
        } else {
          this.currentProductIndex--
        }
      }
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

h3 {
  letter-spacing: 0.05em;
}

@keyframes phoneAnimation {
  0% {
    transform: rotate(12deg) scale(1);
  }
  25% {
    transform: rotate(15deg) scale(1.05);
  }
  50% {
    transform: rotate(9deg) scale(1.1);
  }
  75% {
    transform: rotate(15deg) scale(1.05);
  }
  85% {
    transform: rotate(10deg) scale(0.98);
  }
  95% {
    transform: rotate(13deg) scale(1.02);
  }
  100% {
    transform: rotate(12deg) scale(1);
  }
}

.animate-phone {
  animation: phoneAnimation 2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 