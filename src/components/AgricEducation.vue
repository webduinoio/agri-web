<template>
  <div class="bg-primary-yellow">
    <!-- Header -->
    <header class="bg-green-700/80 text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div class="px-4 lg:px-8 py-3 flex justify-between items-center">
        <a href="/home" class="text-2xl font-bold">慶奇科技</a>
        <nav class="hidden md:flex space-x-6 items-center text-lg">
          <a class="hover:text-green-200" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a>
          <a class="hover:text-green-200" href="/home#installations">場域實績</a>
          <a class="hover:text-green-200 text-green-200" href="/education">食農教育</a>
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
            <a class="hover:text-green-200 text-green-200 py-2" href="/education">食農教育</a>
            <a class="hover:text-green-200 py-2" href="/home#contact">聯絡我們</a>
            <a class="hover:text-green-200 py-2" href="https://md.webduino.io/s/22TOZk5pV">使用教學</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-16">
      <!-- 頂部介紹區塊 -->
      <div ref="introSection" class="container mx-auto px-4 py-8 transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': introVisible, 'translate-y-20 opacity-0': !introVisible }">
        <img src="/assets/三面六項.png" alt="食農教育 ABC 模式" class="w-full max-w-2xl mx-auto rounded-lg mb-2"/>
        <div class="text-center text-gray-500 font-bold text-3xl md:text-4xl lg:text-5xl mb-2 lg:mb-4">食農教育三面六項</div>
        <p class="text-center text-gray-500 text-sm mb-8">圖片來源：農業部｜食農教育知能手冊</p>
        <img src="/assets/全民食農.png" alt="全民食農教育" class="w-full max-w-4xl mx-auto rounded-lg mb-2"/>
        <p class="text-center text-gray-500 text-sm mb-4 lg:mt-4">圖片來源：農業部｜食農教育知能手冊</p>
        <button class="btn-secondary block mx-auto mb-12 px-10 text-xl md:text-2xl lg:text-2xl font-bold md:font-medium">食農教育補助資訊</button>
      </div>

      <img src="/assets/食農樂農.png" alt="食農教育 x 樂農智慧農業" class="w-full h-auto object-contain mb-12"/>

      <div class="container mx-auto px-4">
        <!-- SDGs 區塊 -->
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-brown">結合 SDGs 多項議題</h2>
        <div ref="sdgsSection" class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div class="flex flex-col transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': sdgsVisible, 'translate-y-10 opacity-0': !sdgsVisible }" :style="{ 'animation-delay': sdgsVisible ? '0ms' : '0ms' }">
            <div 
              class="bg-orange-400 text-white rounded-lg shadow-lg text-center aspect-square flex flex-col justify-center md:aspect-auto h-40 md:h-56 cursor-pointer md:cursor-default transition-all duration-300"
              :class="flippedCards[0] ? 'pt-4 px-6 pb-6 md:p-6' : 'p-6'"
              @click="toggleCard(0)"
            >
              <!-- 手機版：圖片+標題 或 小圖片+標題+敘述文字 -->
              <div v-if="!flippedCards[0]" class="md:hidden flex flex-col justify-center h-full">
                <img src="/assets/SVG/sdgs2.svg" alt="SDG 2" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-bold text-lg">2. 終止飢餓</p>
              </div>
              <div v-else class="md:hidden flex flex-col justify-start h-full">
                <img src="/assets/SVG/sdgs2.svg" alt="SDG 2" class="w-8 h-8 mb-3 mx-auto transition-all duration-500"/>
                <p class="font-bold text-base mb-2">2. 終止飢餓</p>
                <p class="text-xs leading-tight flex-1 flex items-center justify-center">消除飢餓，確保糧食安全與永續農業發展促進。</p>
              </div>
              <!-- 中螢幕以上：保持原樣 -->
              <div class="hidden md:flex md:flex-col md:justify-center">
                <img src="/assets/SVG/sdgs2.svg" alt="SDG 2" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-semibold text-lg">2. 終止飢餓</p>
                <p class="hidden md:block mt-3">消除飢餓，確保糧食安全與永續農業發展促進。</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': sdgsVisible, 'translate-y-10 opacity-0': !sdgsVisible }" :style="{ 'animation-delay': sdgsVisible ? '100ms' : '0ms' }">
            <div 
              class="bg-yellow-500 text-white rounded-lg shadow-lg text-center aspect-square flex flex-col justify-center md:aspect-auto h-40 md:h-56 cursor-pointer md:cursor-default transition-all duration-300"
              :class="flippedCards[1] ? 'pt-4 px-6 pb-6 md:p-6' : 'p-6'"
              @click="toggleCard(1)"
            >
              <div v-if="!flippedCards[1]" class="md:hidden flex flex-col justify-center h-full">
                <img src="/assets/SVG/sdgs3.svg" alt="SDG 3" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-bold text-lg">3. 良好健康與社會福利</p>
              </div>
              <div v-else class="md:hidden flex flex-col justify-start h-full">
                <img src="/assets/SVG/sdgs3.svg" alt="SDG 3" class="w-8 h-8 mb-3 mx-auto transition-all duration-500"/>
                <p class="font-bold text-base mb-2">3. 良好健康與社會福利</p>
                <p class="text-xs leading-tight flex-1 flex items-center justify-center">確保健康生活，促進全民身心福祉與持續發展。</p>
              </div>
              <div class="hidden md:flex md:flex-col md:justify-center">
                <img src="/assets/SVG/sdgs3.svg" alt="SDG 3" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-semibold text-lg">3. 良好健康與社會福利</p>
                <p class="hidden md:block mt-3">確保健康生活，促進全民身心福祉與持續發展。</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': sdgsVisible, 'translate-y-10 opacity-0': !sdgsVisible }" :style="{ 'animation-delay': sdgsVisible ? '200ms' : '0ms' }">
            <div 
              class="bg-green-600 text-white rounded-lg shadow-lg text-center aspect-square flex flex-col justify-center md:aspect-auto h-40 md:h-56 cursor-pointer md:cursor-default transition-all duration-300"
              :class="flippedCards[2] ? 'pt-4 px-6 pb-6 md:p-6' : 'p-6'"
              @click="toggleCard(2)"
            >
              <div v-if="!flippedCards[2]" class="md:hidden flex flex-col justify-center h-full">
                <img src="/assets/SVG/sdgs15.svg" alt="SDG 15" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-bold text-lg">15. 陸域生態</p>
              </div>
              <div v-else class="md:hidden flex flex-col justify-start h-full">
                <img src="/assets/SVG/sdgs15.svg" alt="SDG 15" class="w-8 h-8 mb-3 mx-auto transition-all duration-500"/>
                <p class="font-bold text-base mb-2">15. 陸域生態</p>
                <p class="text-xs leading-tight flex-1 flex items-center justify-center">保護恢復陸域生態，促進永續利用保全與復育。</p>
              </div>
              <div class="hidden md:flex md:flex-col md:justify-center">
                <img src="/assets/SVG/sdgs15.svg" alt="SDG 15" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-semibold text-lg">15. 陸域生態</p>
                <p class="hidden md:block mt-3">保護恢復陸域生態，促進永續利用保全與復育。</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': sdgsVisible, 'translate-y-10 opacity-0': !sdgsVisible }" :style="{ 'animation-delay': sdgsVisible ? '300ms' : '0ms' }">
            <div 
              class="bg-amber-600 text-white rounded-lg shadow-lg text-center aspect-square flex flex-col justify-center md:aspect-auto h-40 md:h-56 cursor-pointer md:cursor-default transition-all duration-300"
              :class="flippedCards[3] ? 'pt-4 px-6 pb-6 md:p-6' : 'p-6'"
              @click="toggleCard(3)"
            >
              <div v-if="!flippedCards[3]" class="md:hidden flex flex-col justify-center h-full">
                <img src="/assets/SVG/sdgs11.svg" alt="SDG 11" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-bold text-lg">11. 永續城鎮與社區</p>
              </div>
              <div v-else class="md:hidden flex flex-col justify-start h-full">
                <img src="/assets/SVG/sdgs11.svg" alt="SDG 11" class="w-8 h-8 mb-3 mx-auto transition-all duration-500"/>
                <p class="font-bold text-base mb-2">11. 永續城鎮與社區</p>
                <p class="text-xs leading-tight flex-1 flex items-center justify-center">建設包容安全有韌性永續城市與社區發展促進。</p>
              </div>
              <div class="hidden md:flex md:flex-col md:justify-center">
                <img src="/assets/SVG/sdgs11.svg" alt="SDG 11" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-semibold text-lg">11. 永續城鎮與社區</p>
                <p class="hidden md:block mt-3">建設包容安全有韌性永續城市與社區發展促進。</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': sdgsVisible, 'translate-y-10 opacity-0': !sdgsVisible }" :style="{ 'animation-delay': sdgsVisible ? '400ms' : '0ms' }">
            <div 
              class="bg-teal-600 text-white rounded-lg shadow-lg text-center aspect-square flex flex-col justify-center md:aspect-auto h-40 md:h-56 cursor-pointer md:cursor-default transition-all duration-300"
              :class="flippedCards[4] ? 'pt-4 px-6 pb-6 md:p-6' : 'p-6'"
              @click="toggleCard(4)"
            >
              <div v-if="!flippedCards[4]" class="md:hidden flex flex-col justify-center h-full">
                <img src="/assets/SVG/sdgs12.svg" alt="SDG 12" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-bold text-lg">12. 永續的消費與生產模式</p>
              </div>
              <div v-else class="md:hidden flex flex-col justify-start h-full">
                <img src="/assets/SVG/sdgs12.svg" alt="SDG 12" class="w-8 h-8 mb-3 mx-auto transition-all duration-500"/>
                <p class="font-bold text-base mb-2">12. 永續的消費與生產模式</p>
                <p class="text-xs leading-tight flex-1 flex items-center justify-center">確保可持續消費生產，減少浪費促進循環落實。</p>
              </div>
              <div class="hidden md:flex md:flex-col md:justify-center">
                <img src="/assets/SVG/sdgs12.svg" alt="SDG 12" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-semibold text-lg">12. 永續的消費與生產模式</p>
                <p class="hidden md:block mt-3">確保可持續消費生產，減少浪費促進循環落實。</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': sdgsVisible, 'translate-y-10 opacity-0': !sdgsVisible }" :style="{ 'animation-delay': sdgsVisible ? '500ms' : '0ms' }">
            <div 
              class="bg-sky-600 text-white rounded-lg shadow-lg text-center aspect-square flex flex-col justify-center md:aspect-auto h-40 md:h-56 cursor-pointer md:cursor-default transition-all duration-300"
              :class="flippedCards[5] ? 'pt-4 px-6 pb-6 md:p-6' : 'p-6'"
              @click="toggleCard(5)"
            >
              <div v-if="!flippedCards[5]" class="md:hidden flex flex-col justify-center h-full">
                <img src="/assets/SVG/sdgs13.svg" alt="SDG 13" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-bold text-lg">13. 氣候行動</p>
              </div>
              <div v-else class="md:hidden flex flex-col justify-start h-full">
                <img src="/assets/SVG/sdgs13.svg" alt="SDG 13" class="w-8 h-8 mb-3 mx-auto transition-all duration-500"/>
                <p class="font-bold text-base mb-2">13. 氣候行動</p>
                <p class="text-xs leading-tight flex-1 flex items-center justify-center">採取緊急行動應對氣候變遷減緩影響強化適應。</p>
              </div>
              <div class="hidden md:flex md:flex-col md:justify-center">
                <img src="/assets/SVG/sdgs13.svg" alt="SDG 13" class="w-16 h-16 mb-4 mx-auto"/>
                <p class="font-semibold text-lg">13. 氣候行動</p>
                <p class="hidden md:block mt-3">採取緊急行動應對氣候變遷減緩影響強化適應。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-24 mx-auto border-t-2 border-primary-brown my-12"></div>
        
        <!-- 從教育到食農流程區塊 -->
        <div ref="processSection" class="transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': processVisible, 'translate-y-20 opacity-0': !processVisible }">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-brown">從教育到食農</h2>

          <div class="flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-4 max-w-6xl mx-auto">
            <div class="bg-green-700 text-white p-1 md:p-2 rounded-lg w-40 h-12 md:w-52 md:h-24 flex items-center justify-center">
              <h3 class="text-xl md:text-3xl font-bold md:font-semibold tracking-[0.05em] md:tracking-normal">認識</h3>
            </div>
            <span class="material-icons text-[#94AD49] text-lg md:text-6xl font-bold bg-gray-50/50 p-1 md:p-2 rounded-xl">arrow_forward</span>
            <div class="bg-[#94AD49] text-white p-1 md:p-2 rounded-lg w-40 h-12 md:w-52 md:h-24 flex items-center justify-center">
              <h3 class="text-xl md:text-3xl font-bold md:font-semibold tracking-[0.05em] md:tracking-normal">了解</h3>
            </div>
            <span class="material-icons text-[#94AD49] text-lg md:text-6xl font-bold bg-gray-50/50 p-1 md:p-2 rounded-xl">arrow_forward</span>
            <div class="bg-green-700 text-white p-1 md:p-2 rounded-lg w-40 h-12 md:w-52 md:h-24 flex items-center justify-center">
              <h3 class="text-xl md:text-3xl font-bold md:font-semibold tracking-[0.05em] md:tracking-normal">討論</h3>
            </div>
          </div>
          <div class="flex justify-center gap-1 md:gap-2 mb-8 md:mb-12 max-w-6xl mx-auto">
            <p class="text-center w-40 md:w-52 text-green-700 font-bold md:font-semibold text-sm md:text-lg tracking-[0.05em] md:tracking-normal">食農教育基本概念</p>
            <div class="w-8 md:w-20"></div>
            <p class="text-center w-40 md:w-52 text-[#94AD49] font-bold md:font-semibold text-sm md:text-lg tracking-[0.05em] md:tracking-normal">智慧農業的技術與原理</p>
            <div class="w-8 md:w-20"></div>
            <p class="text-center w-40 md:w-52 text-green-700 font-bold md:font-semibold text-sm md:text-lg tracking-[0.05em] md:tracking-normal">討論如何將技術應用在場域</p>
          </div>

          <div class="flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-4 max-w-6xl mx-auto">
            <div class="bg-[#94AD49] text-white p-1 md:p-2 rounded-lg w-40 h-12 md:w-52 md:h-24 flex items-center justify-center">
              <h3 class="text-xl md:text-3xl font-bold md:font-semibold tracking-[0.05em] md:tracking-normal">實作</h3>
            </div>
            <span class="material-icons text-green-700 text-lg md:text-6xl font-bold bg-gray-50/50 p-1 md:p-2 rounded-xl">arrow_forward</span>
            <div class="bg-green-700 text-white p-1 md:p-2 rounded-lg w-40 h-12 md:w-52 md:h-24 flex items-center justify-center">
              <h3 class="text-xl md:text-3xl font-bold md:font-semibold tracking-[0.05em] md:tracking-normal">參訪</h3>
            </div>
            <span class="material-icons text-green-700 text-lg md:text-6xl font-bold bg-gray-50/50 p-1 md:p-2 rounded-xl">arrow_forward</span>
            <div class="bg-[#94AD49] text-white p-1 md:p-2 rounded-lg w-40 h-12 md:w-52 md:h-24 flex items-center justify-center">
              <h3 class="text-xl md:text-3xl font-bold md:font-semibold tracking-[0.05em] md:tracking-normal">成果</h3>
            </div>
          </div>
          <div class="flex justify-center gap-1 md:gap-2 mb-8 md:mb-12 max-w-6xl mx-auto">
            <p class="text-center w-40 md:w-52 text-[#94AD49] font-bold md:font-semibold text-sm md:text-lg tracking-[0.05em] md:tracking-normal">探究與實作科技田間管理</p>
            <div class="w-8 md:w-20"></div>
            <p class="text-center w-40 md:w-52 text-green-700 font-bold md:font-semibold text-sm md:text-lg tracking-[0.05em] md:tracking-normal">實地參訪科技農業場域</p>
            <div class="w-8 md:w-20"></div>
            <p class="text-center w-40 md:w-52 text-[#94AD49] font-bold md:font-semibold text-sm md:text-lg tracking-[0.05em] md:tracking-normal">成果發表與心得分享</p>
          </div>
        </div>

        <div class="w-24 mx-auto border-t-2 border-primary-brown my-12"></div>
        
        <!-- 學期課程參考區塊 -->
        <div ref="courseSection" class="transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': courseVisible, 'translate-y-20 opacity-0': !courseVisible }">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-brown">學期課程參考</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-12 mx-auto px-8 md:px-0" style="max-width: 56rem;">
            <div class="transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': courseVisible, 'translate-y-10 opacity-0': !courseVisible }" :style="{ 'animation-delay': courseVisible ? '0ms' : '0ms' }">
              <a href="https://resource.webduino.io/docs/selected_course_all/selected_course_03" class="block rounded-lg shadow-md mb-3 md:mb-6 hover:opacity-90 transition-opacity cursor-pointer">
                <img alt="課堂食農" class="w-full h-auto rounded-lg" src="/assets/l05.jpg"/>
              </a>
            </div>
            <div class="transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': courseVisible, 'translate-y-10 opacity-0': !courseVisible }" :style="{ 'animation-delay': courseVisible ? '200ms' : '0ms' }">
              <a href="https://resource.webduino.io/docs/selected_course_all/selected_course_08" class="block rounded-lg shadow-md mb-3 md:mb-6 hover:opacity-90 transition-opacity cursor-pointer">
                <img alt="校園實踐" class="w-full h-auto rounded-lg" src="/assets/l06.jpg"/>
              </a>
            </div>
          </div>
        </div>
        
        <div class="w-24 mx-auto border-t-2 border-primary-brown my-12"></div>
        
        <!-- 學校裝設實照區塊 -->
        <div ref="photoSection" class="transition-all duration-1000 ease-out" :class="{ 'translate-y-0 opacity-100': photoVisible, 'translate-y-20 opacity-0': !photoVisible }">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-brown">學校裝設實照</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
            <img alt="School farming setup with sensors" class="w-full aspect-square md:h-48 object-cover rounded-lg shadow-md transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': photoVisible, 'translate-y-10 opacity-0': !photoVisible }" :style="{ 'animation-delay': photoVisible ? '0ms' : '0ms' }" src="/assets/s-41.jpg"/>
            <img alt="Outdoor farming equipment at a school" class="w-full aspect-square md:h-48 object-cover rounded-lg shadow-md transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': photoVisible, 'translate-y-10 opacity-0': !photoVisible }" :style="{ 'animation-delay': photoVisible ? '100ms' : '0ms' }" src="/assets/s-42.jpg"/>
            <img alt="Student interacting with farming technology" class="w-full aspect-square md:h-48 object-cover rounded-lg shadow-md transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': photoVisible, 'translate-y-10 opacity-0': !photoVisible }" :style="{ 'animation-delay': photoVisible ? '200ms' : '0ms' }" src="/assets/s-43.jpg"/>
            <img alt="Close-up of plants in a school garden" class="w-full aspect-square md:h-48 object-cover rounded-lg shadow-md transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': photoVisible, 'translate-y-10 opacity-0': !photoVisible }" :style="{ 'animation-delay': photoVisible ? '300ms' : '0ms' }" src="/assets/s-44.jpg"/>
            <img alt="Another view of outdoor farming setup" class="w-full aspect-square md:h-48 object-cover rounded-lg shadow-md transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': photoVisible, 'translate-y-10 opacity-0': !photoVisible }" :style="{ 'animation-delay': photoVisible ? '400ms' : '0ms' }" src="/assets/s-45.jpg"/>
            <img alt="Harvested produce from school garden" class="w-full aspect-square md:h-48 object-cover rounded-lg shadow-md transition-all duration-700 ease-out" :class="{ 'translate-y-0 opacity-100': photoVisible, 'translate-y-10 opacity-0': !photoVisible }" :style="{ 'animation-delay': photoVisible ? '500ms' : '0ms' }" src="/assets/s-46.jpg"/>
          </div>
        </div>
        
        <button class="btn-primary block mx-auto px-10 mb-12 text-xl" style="font-weight: 700 !important;">
          <span class="md:font-medium">立即洽詢食農方案</span>
        </button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 class="text-lg font-semibold text-white mb-3" id="contact">聯絡我們</h5>
            <p class="mb-1">慶奇科技股份有限公司</p>
            <p class="mb-1"><span class="material-icons text-sm inline-block align-middle mr-1">place</span> 高雄市前鎮區復興四路 2 號 4 樓 A10</p>
            <p class="mb-1"><span class="material-icons text-sm inline-block align-middle mr-1">phone</span> <a href="tel:07-3388-511" class="hover:text-green-400">07-3388-511</a></p>
            <p class="mb-1"><span class="material-icons text-sm inline-block align-middle mr-1">email</span> <a href="#" @click.prevent="copyEmail" class="hover:text-green-400 cursor-pointer">service@webduino.io</a></p>
          </div>
          <div>
            <h5 class="text-lg font-semibold text-white mb-3">快速連結</h5>
            <ul class="space-y-1">
              <li><a class="hover:text-green-400" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a></li>
              <li><a class="hover:text-green-400" href="/home#installations">場域實績</a></li>
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
  name: 'AgricEducation',
  data() {
    return {
      showMobileMenu: false,
      flippedCards: [false, false, false, false, false, false],
      // 動畫控制變數
      introVisible: false,
      sdgsVisible: false,
      processVisible: false,
      courseVisible: false,
      photoVisible: false,
      // 自動翻牌相關
      autoFlipTimer: null,
      currentCardIndex: 0
    }
  },
  mounted() {
    // 設置 Intersection Observer 來監聽各個區塊
    this.introObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.introVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    this.sdgsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.sdgsVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    this.processObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.processVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    this.courseObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.courseVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    this.photoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.photoVisible = true
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // 開始觀察各個區塊
    if (this.$refs.introSection) {
      this.introObserver.observe(this.$refs.introSection)
    }
    if (this.$refs.sdgsSection) {
      this.sdgsObserver.observe(this.$refs.sdgsSection)
    }
    if (this.$refs.processSection) {
      this.processObserver.observe(this.$refs.processSection)
    }
    if (this.$refs.courseSection) {
      this.courseObserver.observe(this.$refs.courseSection)
    }
    if (this.$refs.photoSection) {
      this.photoObserver.observe(this.$refs.photoSection)
    }

    // 手機版自動翻牌功能
    this.startAutoFlip()
  },
  beforeDestroy() {
    // 清理 observers
    if (this.introObserver) {
      this.introObserver.disconnect()
    }
    if (this.sdgsObserver) {
      this.sdgsObserver.disconnect()
    }
    if (this.processObserver) {
      this.processObserver.disconnect()
    }
    if (this.courseObserver) {
      this.courseObserver.disconnect()
    }
    if (this.photoObserver) {
      this.photoObserver.disconnect()
    }

    // 清理自動翻牌定時器
    if (this.autoFlipTimer) {
      clearInterval(this.autoFlipTimer)
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    toggleCard(index) {
      this.flippedCards[index] = !this.flippedCards[index]
    },
    // 開始自動翻牌（僅手機版）
    startAutoFlip() {
      // 只在手機版啟用自動翻牌
      if (window.innerWidth < 768) {
        this.autoFlipTimer = setInterval(() => {
          // 翻轉當前卡片
          this.flippedCards[this.currentCardIndex] = !this.flippedCards[this.currentCardIndex]
          
          // 移動到下一個卡片
          this.currentCardIndex = (this.currentCardIndex + 1) % this.flippedCards.length
        }, 3000) // 每3秒翻一次
      }
    },
    // 複製信箱到剪貼簿
    copyEmail() {
      const email = 'service@webduino.io'
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          // 可以添加一個簡單的提示
          alert('信箱已複製到剪貼簿！')
        }).catch(err => {
          console.error('複製失敗:', err)
          this.fallbackCopyEmail(email)
        })
      } else {
        this.fallbackCopyEmail(email)
      }
    },
    // 備用的複製方法（適用於較舊的瀏覽器）
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
html {
  scroll-behavior: smooth;
}

.bg-primary-yellow {
  background-color: #FFF9E6;
}

.text-primary-brown {
  color: #8B5A2B;
}

.bg-primary-brown {
  background-color: #8B5A2B;
}

.border-primary-brown {
  border-color: #8B5A2B;
}

.btn-primary {
  background-color: #94AD49;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 9999px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #7A9139;
}

.btn-primary-dark {
  background-color: #166534;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 9999px;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s ease;
}

.btn-primary-dark:hover {
  background-color: #14532d;
}

.btn-secondary {
  background-color: #4CAF50;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 9999px;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: #388E3C;
}

.card {
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style> 