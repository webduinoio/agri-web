<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Password Modal -->
    <div v-if="showPasswordModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" @click="closePasswordModal">
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4" @click.stop>
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">整合商認證</h2>
        <p class="text-gray-600 mb-4 text-center">請輸入整合商認證碼</p>
        <input 
          v-model="passwordInput" 
          type="password" 
          placeholder="請輸入認證碼"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
          @keyup.enter="checkPassword"
        />
        <div v-if="passwordError" class="text-red-500 text-sm mb-4 text-center">{{ passwordError }}</div>
        <div class="flex gap-4">
          <button @click="closePasswordModal" class="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">取消</button>
          <button @click="checkPassword" class="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">確認</button>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="bg-green-700/80 text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div class="px-4 lg:px-8 py-3 flex justify-between items-center">
        <a href="/home" class="text-2xl font-bold">慶奇科技</a>
        <nav class="hidden md:flex space-x-6 items-center text-lg">
          <a class="hover:text-green-200" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a>
          <a class="hover:text-green-200" href="/home#installations">場域實績</a>
          <a class="hover:text-green-200" href="/education">食農教育</a>
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
            <a class="hover:text-green-200 py-2" href="/home#contact">聯絡我們</a>
            <a class="hover:text-green-200 py-2" href="https://md.webduino.io/s/22TOZk5pV">使用教學</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container mx-auto p-4 md:p-8 max-w-5xl pt-20 md:pt-24 md:mt-4" :class="{ 'opacity-50': showPasswordModal }">
      <!-- Title Header -->
      <header class="mb-0 md:mb-4 text-center">
       
      </header>

      <!-- Main System Image -->
      <section class="mb-8">
        <img alt="智慧巡田自動控制系統圖" class="w-full h-auto rounded-lg shadow-lg" src="/assets/整合商首圖.jpg"/>
        <p class="text-sm text-gray-500 mt-2 text-center">*可依場域搭配不同設備，設備清單請向下參考</p>
      </section>

      <!-- 實際安裝場域參考 -->
      <section class="mb-12">
        <h2 class="section-title bg-green-600">實際安裝場域參考</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card">
            <div class="grid grid-cols-2 gap-1">
              <img alt="露天火龍果田1" class="w-full h-40 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" src="/assets/火龍果1.jpg" @click="openImageModal('/assets/火龍果1.jpg')"/>
              <img alt="露天火龍果田2" class="w-full h-40 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" src="/assets/火龍果2.jpg" @click="openImageModal('/assets/火龍果2.jpg')"/>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-xl text-gray-800">露天 | 火龍果</h3>
            </div>
          </div>
          <div class="card">
            <div class="grid grid-cols-2 gap-1">
              <img alt="溫室短期葉菜1" class="w-full h-40 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" src="/assets/溫室1.jpg" @click="openImageModal('/assets/溫室1.jpg')"/>
              <img alt="溫室短期葉菜2" class="w-full h-40 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" src="/assets/溫室2.jpg" @click="openImageModal('/assets/溫室2.jpg')"/>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-xl text-gray-800">溫室 | 短期葉菜</h3>
            </div>
          </div>
          <div class="card">
            <div class="grid grid-cols-2 gap-1">
              <img alt="網室鹿角蕨蘭花1" class="w-full h-40 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" src="/assets/網室1.jpg" @click="openImageModal('/assets/網室1.jpg')"/>
              <img alt="網室鹿角蕨蘭花2" class="w-full h-40 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" src="/assets/網室2.jpg" @click="openImageModal('/assets/網室2.jpg')"/>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-xl text-gray-800">網室 | 鹿角蕨、蘭花</h3>
            </div>
          </div>
          <div class="card">
            <div class="grid grid-cols-2 gap-1">
              <img alt="校園食農葉菜類花園1" class="w-full h-40 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" src="/assets/校園1.jpg" @click="openImageModal('/assets/校園1.jpg')"/>
              <img alt="校園食農葉菜類花園2" class="w-full h-40 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" src="/assets/校園2.jpg" @click="openImageModal('/assets/校園2.jpg')"/>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-xl text-gray-800">校園食農 | 葉菜類、花園</h3>
            </div>
          </div>
        </div>
      </section>

      <!-- 如何設定 -->
      <section class="mb-12">
        <h2 class="section-title bg-blue-600">如何設定</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://md.webduino.io/s/22TOZk5pV#%E6%A8%82%E8%BE%B2%E5%B0%8F%E4%B8%BB%E6%A9%9F" target="_blank" class="btn btn-primary">樂農小主機</a>
                      <a href="https://md.webduino.io/s/22TOZk5pV#%E6%A8%82%E8%BE%B2%E5%B0%8F%E4%B8%BB%E6%A9%9F-PRO" target="_blank" class="btn btn-primary">樂農小主機 PRO</a>
                      <a href="https://md.webduino.io/s/22TOZk5pV#%E6%A8%82%E8%BE%B2%E5%B0%8F%E4%B8%BB%E6%A9%9F-PRO" target="_blank" class="btn btn-primary">Wi-Fi 四路控制器</a>
          <a href="https://md.webduino.io/s/22TOZk5pV#%E8%A6%96%E8%A6%BA%E5%8C%96%E7%B7%A8%E8%BC%AF%E5%99%A8" target="_blank" class="btn btn-primary">積木程式教學</a>
        </div>
      </section>

      <!-- 設備規格 -->
      <section class="mb-12">
        <h2 class="section-title bg-teal-600">設備規格</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div class="circular-spec-item">
            <div class="circle-container bg-blue-200">
              <img alt="樂農小主機" src="/assets/設備/小主機.png" @click="openTinyHostModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">樂農小主機</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-green-200">
              <img alt="樂農小主機 PRO" src="/assets/設備/小主機 pro.png" @click="openTinyHostProModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">樂農小主機 PRO</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-purple-200">
              <img alt="Wi-Fi 四路控制器" src="/assets/設備/四路控制器.png"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">Wi-Fi 四路控制器</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-orange-200">
                              <img alt="無線轉接器" src="/assets/設備/無線轉接器.png" @click="openWirelessAdapterModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">無線轉接器</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-blue-100">
              <img alt="四路繼電器" src="/assets/設備/四路繼電器.png" @click="openSpecModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">四路繼電器</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-green-100">
              <img alt="八路繼電器" src="/assets/設備/八路繼電器.png" @click="openSpecModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">八路繼電器</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-purple-100">
              <img alt="土壤三合一" src="/assets/設備/土壤三合一.png" @click="openSoilModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">土壤三合一</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-indigo-100">
              <img alt="光度百葉箱" src="/assets/設備/光度百葉箱.png" @click="openWeatherModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">光度百葉箱</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-red-100">
              <img alt="流量計" src="/assets/設備/流量計.png" @click="openFlowModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">流量計</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-yellow-100">
              <img alt="光學雨量計" src="/assets/設備/光學雨量計.png" @click="openRainGaugeModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">光學雨量計</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-gray-200">
              <img alt="紅外線測溫儀" src="/assets/設備/紅外線測溫儀.png" @click="openInfraredModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">紅外線測溫儀</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-cyan-100">
              <img alt="風速計" src="/assets/設備/風速計.png" @click="openWindModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">風速計</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-lime-100">
              <img alt="水質酸鹼度 + 溫度" src="/assets/設備/水質酸鹼度 + 溫度.png" @click="openWaterQualityModal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">水質酸鹼度 + 溫度</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-pink-100">
              <img alt="水濁度偵測" src="/assets/設備/水濁度偵測1.png" @click="openTurbidity1Modal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">水濁度偵測</p>
          </div>
          <div class="circular-spec-item">
            <div class="circle-container bg-orange-100">
              <img alt="水濁度偵測" src="/assets/設備/水濁度偵測2.png" @click="openTurbidity2Modal" class="cursor-pointer"/>
            </div>
            <p class="font-medium text-gray-700 text-lg">水濁度偵測</p>
          </div>
          
        </div>
      </section>

      <!-- 場域報價參考 -->
      <section>
        <h2 class="section-title bg-lime-600">場域報價參考</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="case-study-title text-2xl text-center mb-8">場域作物：花卉</h3>
            <div class="case-study-card">
              <p class="case-study-item text-xl pl-4">場域大小：50 坪</p>
              <p class="case-study-item text-xl pl-4">栽種環境：溫網室</p>
              <p class="case-study-item text-xl pl-4">灌溉方式：噴灌</p>
              <p class="case-study-item text-xl pl-4">需求點：環境變因控制水量與灑水時間</p>
              <button class="mt-4 btn btn-primary w-full bg-lime-500 hover:bg-lime-600">參考報價</button>
            </div>
          </div>
          <div>
            <h3 class="case-study-title text-2xl text-center mb-8">場域作物：有機水稻</h3>
            <div class="case-study-card">
              <p class="case-study-item text-xl pl-4">場域大小：5 分</p>
              <p class="case-study-item text-xl pl-4">栽種環境：露天</p>
              <p class="case-study-item text-xl pl-4">灌溉方式：淹灌</p>
              <p class="case-study-item text-xl pl-4">需求點：控制水量/生態觀察</p>
              <button class="mt-4 btn btn-primary w-full bg-lime-500 hover:bg-lime-600">參考報價</button>
            </div>
          </div>
        </div>
      </section>

    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-12" :class="{ 'opacity-50': showPasswordModal }">
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
              <li><a class="hover:text-green-400" href="/home#installations">場域實績</a></li>
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

    <!-- Image Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" @click="closeImageModal">
      <div class="relative max-w-4xl max-h-full p-4">
        <button @click="closeImageModal" class="absolute -top-2 -right-2 text-white bg-green-500 hover:bg-green-600 rounded-full p-3 transition-all z-10 shadow-lg">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img :src="modalImageSrc" :alt="modalImageAlt" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl" @click.stop>
      </div>
    </div>

    <!-- Spec Modal -->
    <div v-if="showSpecModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeSpecModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeSpecModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">產品規格</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/四八路規格.jpg" alt="四八路繼電器規格" class="mx-auto"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">詳細資訊</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">規格選項</td>
                  <td class="border border-gray-300 px-4 py-3">4 路、8 路</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">尺寸與重量</td>
                  <td class="border border-gray-300 px-4 py-3">4 路：90g，93.3×87mm<br>8 路：147g（不含外殼），148×80mm；含外殼：256g，166×90mm</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">處理器 MCU</td>
                  <td class="border border-gray-300 px-4 py-3">8 位元 MCU</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">通訊協定</td>
                  <td class="border border-gray-300 px-4 py-3">標準 Modbus RTU 協定</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">通訊介面</td>
                  <td class="border border-gray-300 px-4 py-3">RS485 / TTL UART</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">串列傳輸速率</td>
                  <td class="border border-gray-300 px-4 py-3">4800 / 9600 / 19200 bps（預設 9600），支援掉電保存</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">設備位址</td>
                  <td class="border border-gray-300 px-4 py-3">範圍 1~255，預設 255，支援掉電保存</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">繼電器規格</td>
                  <td class="border border-gray-300 px-4 py-3">5V，10A/250V AC 或 10A/30V DC，板載 4 路，壽命 10 萬次，二極體瀉流保護</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">開關控制</td>
                  <td class="border border-gray-300 px-4 py-3">支援手動、閃閉、閃斷模式，延時基數 0.1s，最大時間 6553.5s</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">指示燈</td>
                  <td class="border border-gray-300 px-4 py-3">板載繼電器開關指示燈</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">光耦輸入</td>
                  <td class="border border-gray-300 px-4 py-3">支援 DC 3.3~24V（不可直接控制繼電器）</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">光耦控制繼電器</td>
                  <td class="border border-gray-300 px-4 py-3">高電平有效，啟用：<code class="bg-gray-200 px-1 rounded">00 F0 01 F4 00</code>，禁用：<code class="bg-gray-200 px-1 rounded">00 F0 00 35 C0</code>，預設禁用，支援掉電保存</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">電源輸入</td>
                  <td class="border border-gray-300 px-4 py-3">DC 7~24V，支援 DC-005 插座 或 5.08mm 接線端子（VCC, GND）</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">繼電器輸出端子</td>
                  <td class="border border-gray-300 px-4 py-3">每路對應 NC（常閉）、COM（公共端）、NO（常開）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">通訊端子</td>
                  <td class="border border-gray-300 px-4 py-3">RS485：A+、B-<br>TTL：GND、RXD、TXD（支援 3.3V / 5V 外部設備）</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">串口選擇方式</td>
                  <td class="border border-gray-300 px-4 py-3">RS485：DI 接 TXD，RO 接 RXD<br>TTL：DI、RO 接 NC（不接）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">安裝方式</td>
                  <td class="border border-gray-300 px-4 py-3">需由系統整合商或技術人員安裝</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Soil Modal -->
    <div v-if="showSoilModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeSoilModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeSoilModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">土壤水份電導率溫度三合一傳感器規格表</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/土壤規格.jpg" alt="土壤三合一感測器" class="mx-auto"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">詳細資訊</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">測量參數</td>
                  <td class="border border-gray-300 px-4 py-3">土壤水分、溫度、電導率（鹽分）</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">通訊協議</td>
                  <td class="border border-gray-300 px-4 py-3">RS485（MODBUS 協議）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">土壤水分精度</td>
                  <td class="border border-gray-300 px-4 py-3">典型 ±3%</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">土壤水分分辨率</td>
                  <td class="border border-gray-300 px-4 py-3">0.1%</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">土壤水分量程</td>
                  <td class="border border-gray-300 px-4 py-3">0 ~ 100%</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">溫度精度</td>
                  <td class="border border-gray-300 px-4 py-3">±0.5℃（可選高配 ±0.1℃）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">溫度分辨率</td>
                  <td class="border border-gray-300 px-4 py-3">0.1℃</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">溫度量程</td>
                  <td class="border border-gray-300 px-4 py-3">-70 ~ +150℃（高精度範圍 0~50℃）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">電導率精度</td>
                  <td class="border border-gray-300 px-4 py-3">±3%</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">電導率分辨率</td>
                  <td class="border border-gray-300 px-4 py-3">0.01 mS/cm</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">電導率量程</td>
                  <td class="border border-gray-300 px-4 py-3">0 ~ 20 mS/cm</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">工作溫度範圍</td>
                  <td class="border border-gray-300 px-4 py-3">-40 ~ +85℃</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">採集時間</td>
                  <td class="border border-gray-300 px-4 py-3">< 0.2 秒</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">平均功耗</td>
                  <td class="border border-gray-300 px-4 py-3">23.99mA @ 5V</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">供電電壓</td>
                  <td class="border border-gray-300 px-4 py-3">3.6V ~ 24V</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">接口</td>
                  <td class="border border-gray-300 px-4 py-3">RS485（MODBUS 協議）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">感測器尺寸</td>
                  <td class="border border-gray-300 px-4 py-3">72mm × 45mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Weather Modal -->
    <div v-if="showWeatherModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeWeatherModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeWeatherModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">百葉箱溫溼光度三合一</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/百葉箱規格.jpg" alt="百葉箱規格" class="mx-auto"/>
          </div>
          
          <div class="space-y-8">
            <!-- 光照度規格 -->
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">光照度</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="border border-gray-300 px-4 py-3 text-left font-semibold">項目</th>
                      <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">量程</td>
                      <td class="border border-gray-300 px-4 py-3">0~20萬 LUX</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">精度</td>
                      <td class="border border-gray-300 px-4 py-3">±7%（25℃）</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">工作溫度</td>
                      <td class="border border-gray-300 px-4 py-3">-20~60℃</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">工作濕度</td>
                      <td class="border border-gray-300 px-4 py-3">0%~80% RH</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">供電</td>
                      <td class="border border-gray-300 px-4 py-3">DC 10~30V</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">輸出信號</td>
                      <td class="border border-gray-300 px-4 py-3">RS485（Modbus 協議）</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">回應速度</td>
                      <td class="border border-gray-300 px-4 py-3">< 0.1 秒</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">長期穩定性</td>
                      <td class="border border-gray-300 px-4 py-3">≤ 5% / 年</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 溫濕度規格 -->
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">溫濕度</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="border border-gray-300 px-4 py-3 text-left font-semibold">項目</th>
                      <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">溫度量程</td>
                      <td class="border border-gray-300 px-4 py-3">-40℃ ~ 120℃</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">濕度量程</td>
                      <td class="border border-gray-300 px-4 py-3">0% RH ~ 99% RH</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">溫度精度</td>
                      <td class="border border-gray-300 px-4 py-3">±0.5℃（25℃）</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">濕度精度</td>
                      <td class="border border-gray-300 px-4 py-3">±3% RH（60%，25℃）</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">供電</td>
                      <td class="border border-gray-300 px-4 py-3">DC 10~30V</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">輸出信號</td>
                      <td class="border border-gray-300 px-4 py-3">RS485（Modbus 協議）</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">回應時間</td>
                      <td class="border border-gray-300 px-4 py-3">< 15 秒（1m/s 風速）</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">長期穩定性</td>
                      <td class="border border-gray-300 px-4 py-3">溫度 ≤ 0.1℃，濕度 ≤ 1% RH</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flow Modal -->
    <div v-if="showFlowModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeFlowModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeFlowModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">水流量計（6分） 規格表</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/流量計規格.jpg" alt="流量計規格" class="mx-auto"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">詳細資訊</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">型號</td>
                  <td class="border border-gray-300 px-4 py-3">FS300A</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">接口尺寸</td>
                  <td class="border border-gray-300 px-4 py-3">G3/4"（6分）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">流量範圍</td>
                  <td class="border border-gray-300 px-4 py-3">1 ~ 60 L/min</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">水壓範圍</td>
                  <td class="border border-gray-300 px-4 py-3">≦ 1.75 Mpa</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">工作電壓範圍</td>
                  <td class="border border-gray-300 px-4 py-3">3.5 ~ 24V DC</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">內徑</td>
                  <td class="border border-gray-300 px-4 py-3">16 mm</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">外徑</td>
                  <td class="border border-gray-300 px-4 py-3">26 mm</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">螺牙長度</td>
                  <td class="border border-gray-300 px-4 py-3">17 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- TinyHost Modal -->
    <div v-if="showTinyHostModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeTinyHostModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeTinyHostModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">樂農小主機</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/小主機規格.jpg" alt="樂農小主機規格" class="mx-auto"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">詳細資訊</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">型號</td>
                  <td class="border border-gray-300 px-4 py-3">樂農小主機</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">處理器</td>
                  <td class="border border-gray-300 px-4 py-3">ESP32-C3 單核 32 位元 RISC-V CPU，最高 160 MHz</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">內建記憶體</td>
                  <td class="border border-gray-300 px-4 py-3">400 KB SRAM，384 KB ROM</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">無線連接</td>
                  <td class="border border-gray-300 px-4 py-3">2.4 GHz Wi-Fi (IEEE 802.11b/g/n)，Bluetooth 5 (LE)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">顯示螢幕</td>
                  <td class="border border-gray-300 px-4 py-3">0.96 吋 OLED，解析度 128×64，採用 SSD1306 控制晶片，I2C 介面</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">通訊介面</td>
                  <td class="border border-gray-300 px-4 py-3">RS485，最多可連接 3 個設備</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">支援感測器</td>
                  <td class="border border-gray-300 px-4 py-3">光度、溫濕度、雨量計、流量計、土壤三合一感測器...等</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">支援控制器</td>
                  <td class="border border-gray-300 px-4 py-3">四路控制器（4 接口）、八路控制器（8 接口）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">電源供應</td>
                  <td class="border border-gray-300 px-4 py-3">DC 12V</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">通訊協定</td>
                  <td class="border border-gray-300 px-4 py-3">Modbus RTU（可擴展至其他協定）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">資料存儲</td>
                  <td class="border border-gray-300 px-4 py-3">雲端平台儲存歷史數據</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">遠端監控</td>
                  <td class="border border-gray-300 px-4 py-3">手機網頁 或 Web 網頁</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">自動化控制</td>
                  <td class="border border-gray-300 px-4 py-3">Blockly 介面設計，最多 3 個自定義任務</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">通知功能</td>
                  <td class="border border-gray-300 px-4 py-3">支援 LINE 對話、Telegram 通知</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">實體按鈕</td>
                  <td class="border border-gray-300 px-4 py-3">兩個：重開機按鈕、多功能按鈕（恢復出廠設定、啟動韌體線上更新）</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">安裝方式</td>
                  <td class="border border-gray-300 px-4 py-3">需由系統整合商或技術人員安裝</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">適用場域</td>
                  <td class="border border-gray-300 px-4 py-3">溫室、農場、畜牧場、戶外農業場域等</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- TinyHost Pro Modal -->
    <div v-if="showTinyHostProModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeTinyHostProModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeTinyHostProModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">樂農小主機 PRO</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/小主機 pro 規格.jpg" alt="樂農小主機 PRO 規格" class="mx-auto"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">詳細資訊</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">型號</td>
                  <td class="border border-gray-300 px-4 py-3">樂農小主機Pro</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">處理器</td>
                  <td class="border border-gray-300 px-4 py-3">H618 四核 Cortex-A53，最高 1.5GHz</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">內建記憶體</td>
                  <td class="border border-gray-300 px-4 py-3">1GB DDR4</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">無線連接</td>
                  <td class="border border-gray-300 px-4 py-3">2.4GHz/5GHz Wi-Fi (IEEE 802.11 a/b/g/n/ac)，Bluetooth 5.0</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">有線網路</td>
                  <td class="border border-gray-300 px-4 py-3">RJ45 10/100Mbps 乙太網路接口</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">電源供應</td>
                  <td class="border border-gray-300 px-4 py-3">DC 5V（USB-C）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">資料存儲</td>
                  <td class="border border-gray-300 px-4 py-3">32G 記憶卡</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">遠端監控</td>
                  <td class="border border-gray-300 px-4 py-3">手機網頁 或 Web 網頁</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">搭配網路攝影機</td>
                  <td class="border border-gray-300 px-4 py-3">D-Link DCS-6100LHV2、D-Link DCS-8620LH</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">安裝方式</td>
                  <td class="border border-gray-300 px-4 py-3">需由系統整合商或技術人員安裝</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">適用場域</td>
                  <td class="border border-gray-300 px-4 py-3">溫室、農場、畜牧場、戶外農業場域等</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Wireless Adapter Modal -->
    <div v-if="showWirelessAdapterModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeWirelessAdapterModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeWirelessAdapterModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">無線轉接器</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/無線轉接器規格.jpg" alt="無線轉接器規格" class="mx-auto"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">詳細資訊</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">型號</td>
                  <td class="border border-gray-300 px-4 py-3">無線轉接器</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">處理器</td>
                  <td class="border border-gray-300 px-4 py-3">ESP32-C3 單核 32 位元 RISC-V CPU，最高 160 MHz</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">內建記憶體</td>
                  <td class="border border-gray-300 px-4 py-3">400 KB SRAM，384 KB ROM</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">無線連接</td>
                  <td class="border border-gray-300 px-4 py-3">2.4 GHz Wi-Fi (IEEE 802.11b/g/n)，Bluetooth 5 (LE)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">支援感測器</td>
                  <td class="border border-gray-300 px-4 py-3">土壤三合一感測器</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">電源供應</td>
                  <td class="border border-gray-300 px-4 py-3">USB TypeC (5V)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">資料存儲</td>
                  <td class="border border-gray-300 px-4 py-3">雲端平台儲存歷史數據</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">遠端監控</td>
                  <td class="border border-gray-300 px-4 py-3">手機網頁 或 Web 網頁</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">自動化控制</td>
                  <td class="border border-gray-300 px-4 py-3">Blockly 介面設計，最多 3 個自定義任務</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">通知功能</td>
                  <td class="border border-gray-300 px-4 py-3">支援 LINE 對話、Telegram 通知</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">安裝方式</td>
                  <td class="border border-gray-300 px-4 py-3">需由系統整合商或技術人員安裝</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">適用場域</td>
                  <td class="border border-gray-300 px-4 py-3">溫室、農場、畜牧場、戶外農業場域等</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Infrared Modal -->
    <div v-if="showInfraredModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeInfraredModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeInfraredModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">紅外線測溫儀</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/紅外線測溫儀規格.jpg" alt="紅外線測溫儀規格" class="mx-auto"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">詳細資訊</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">環境溫度</td>
                  <td class="border border-gray-300 px-4 py-3">0 ~ 60℃</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">存儲溫度</td>
                  <td class="border border-gray-300 px-4 py-3">-20 ~ 80℃</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">相對濕度</td>
                  <td class="border border-gray-300 px-4 py-3">10 ~ 95%（不結露）</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">材料</td>
                  <td class="border border-gray-300 px-4 py-3">不鏽鋼</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">工作電源</td>
                  <td class="border border-gray-300 px-4 py-3">5 ~ 36 V DC</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">最大電流</td>
                  <td class="border border-gray-300 px-4 py-3">20 mA</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">通訊信號</td>
                  <td class="border border-gray-300 px-4 py-3">RS485 (Modbus RTU)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Wind Modal -->
    <div v-if="showWindModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeWindModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeWindModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">風速風向參數</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/風速計規格.jpg" alt="風速計規格" class="mx-auto"/>
          </div>
          
          <div class="space-y-8">
            <!-- 風速參數 -->
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">風速參數</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="border border-gray-300 px-4 py-3 text-left font-semibold">項目</th>
                      <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">精度</td>
                      <td class="border border-gray-300 px-4 py-3">±(0.2 m/s ± 0.02 × v) (v 為真實風速)</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">精度</td>
                      <td class="border border-gray-300 px-4 py-3">± 3°</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">量程</td>
                      <td class="border border-gray-300 px-4 py-3">0 ~ 60 m/s</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">量程</td>
                      <td class="border border-gray-300 px-4 py-3">0 ~ 359°</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-3 font-medium">影響時間</td>
                      <td class="border border-gray-300 px-4 py-3">1 s</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="border border-gray-300 px-4 py-3 font-medium">輸出信號</td>
                      <td class="border border-gray-300 px-4 py-3">RS485 / 4G</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Water Quality Modal -->
    <div v-if="showWaterQualityModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeWaterQualityModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeWaterQualityModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">水質酸鹼度 + 溫度</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/水質酸鹼度 + 溫度規格.png" alt="水質酸鹼度 + 溫度規格" class="mx-auto w-1/3"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">產品型號</td>
                  <td class="border border-gray-300 px-4 py-3">XM3318</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">測量範圍</td>
                  <td class="border border-gray-300 px-4 py-3">0 ~ 1000 NTU</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">測量精度</td>
                  <td class="border border-gray-300 px-4 py-3">±3% FS</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">輸出信號</td>
                  <td class="border border-gray-300 px-4 py-3">RS485（可選配電流型或電壓型）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">響應時間</td>
                  <td class="border border-gray-300 px-4 py-3">&lt;500 ms</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">供電電源</td>
                  <td class="border border-gray-300 px-4 py-3">DC 5 ~ 24V</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">輸入端口</td>
                  <td class="border border-gray-300 px-4 py-3">XH2.54-3P</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">波特率</td>
                  <td class="border border-gray-300 px-4 py-3">預設 9600</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">功耗</td>
                  <td class="border border-gray-300 px-4 py-3">&lt;0.2W</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">工作溫濕度</td>
                  <td class="border border-gray-300 px-4 py-3">-30 ~ 65℃，0 ~ 90%RH（無凝結）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">存儲溫濕度</td>
                  <td class="border border-gray-300 px-4 py-3">-30 ~ 65℃，0 ~ 90%RH（無凝結）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Turbidity 1 Modal -->
    <div v-if="showTurbidity1Modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeTurbidity1Modal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeTurbidity1Modal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">水濁度偵測</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/水濁度偵測1規格.png" alt="水濁度偵測規格" class="mx-auto w-1/3"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">產品型號</td>
                  <td class="border border-gray-300 px-4 py-3">XM3318</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">測量範圍</td>
                  <td class="border border-gray-300 px-4 py-3">0 ~ 1000 NTU</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">測量精度</td>
                  <td class="border border-gray-300 px-4 py-3">±3% FS</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">輸出信號</td>
                  <td class="border border-gray-300 px-4 py-3">RS485（可選配電流型或電壓型）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">響應時間</td>
                  <td class="border border-gray-300 px-4 py-3">&lt;500 ms</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">供電電源</td>
                  <td class="border border-gray-300 px-4 py-3">DC 5 ~ 24V</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">輸入端口</td>
                  <td class="border border-gray-300 px-4 py-3">XH2.54-3P</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">波特率</td>
                  <td class="border border-gray-300 px-4 py-3">預設 9600</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">功耗</td>
                  <td class="border border-gray-300 px-4 py-3">&lt;0.2W</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">工作溫濕度</td>
                  <td class="border border-gray-300 px-4 py-3">-30 ~ 65℃，0 ~ 90%RH（無凝結）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">存儲溫濕度</td>
                  <td class="border border-gray-300 px-4 py-3">-30 ~ 65℃，0 ~ 90%RH（無凝結）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Turbidity 2 Modal -->
    <div v-if="showTurbidity2Modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeTurbidity2Modal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeTurbidity2Modal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">水濁度偵測</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/水濁度偵測2規格.png" alt="水濁度偵測規格" class="mx-auto w-1/3"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格說明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">產品型號</td>
                  <td class="border border-gray-300 px-4 py-3">MAQ-136</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">量程規格</td>
                  <td class="border border-gray-300 px-4 py-3">0～1m、0～3m、0～5m、0～10m（最高可定制至 500m）</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">精度等級</td>
                  <td class="border border-gray-300 px-4 py-3">0.5級，可定制 0.2 級</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">年漂移</td>
                  <td class="border border-gray-300 px-4 py-3">±0.2%FS</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">輸出信號</td>
                  <td class="border border-gray-300 px-4 py-3">預設 4~20mA，可定制 0~5V、RS485 等</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">供電方式</td>
                  <td class="border border-gray-300 px-4 py-3">24V DC</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">過載能力</td>
                  <td class="border border-gray-300 px-4 py-3">150%</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">測量介質</td>
                  <td class="border border-gray-300 px-4 py-3">水、油等不銹鋼兼容介質</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">工作溫度</td>
                  <td class="border border-gray-300 px-4 py-3">-10～+40℃</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">存儲溫度</td>
                  <td class="border border-gray-300 px-4 py-3">0～+40℃</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">整體材質</td>
                  <td class="border border-gray-300 px-4 py-3">316L 不銹鋼，304 外殼、橡膠線纜</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">防護等級</td>
                  <td class="border border-gray-300 px-4 py-3">探頭 IP68，整體 IP65</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Rain Gauge Modal -->
    <div v-if="showRainGaugeModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click="closeRainGaugeModal">
      <div class="relative bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <button @click="closeRainGaugeModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="text-left">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">光學雨量感測器</h2>
          <div class="mb-6 text-center">
            <img src="/assets/規格圖片/光學雨量計規格.jpg" alt="光學雨量計規格" class="mx-auto w-1/3"/>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">規格項目</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold">詳細資訊</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">輸出方式</td>
                  <td class="border border-gray-300 px-4 py-3">RS485</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">供電電壓</td>
                  <td class="border border-gray-300 px-4 py-3">DC 12 ~ 24V</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">功耗</td>
                  <td class="border border-gray-300 px-4 py-3">&lt; 0.3W（@12V DC：約 20mA）</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">分辨率</td>
                  <td class="border border-gray-300 px-4 py-3">0.1 mm</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">典型精度</td>
                  <td class="border border-gray-300 px-4 py-3">±5%（@25°C）</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">最大瞬時雨量</td>
                  <td class="border border-gray-300 px-4 py-3">24 mm / min</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">感雨直徑</td>
                  <td class="border border-gray-300 px-4 py-3">6 cm</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">工作溫度範圍</td>
                  <td class="border border-gray-300 px-4 py-3">-40 ~ 60°C</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">工作濕度範圍</td>
                  <td class="border border-gray-300 px-4 py-3">0 ~ 99% RH（無凝結）</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">工作壓力範圍</td>
                  <td class="border border-gray-300 px-4 py-3">標準大氣壓 ±10%</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">長期穩定性</td>
                  <td class="border border-gray-300 px-4 py-3">光照 ≤ 5% / 年（RS485 型）</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-medium">承受電壓</td>
                  <td class="border border-gray-300 px-4 py-3">≤ 30V DC</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3 font-medium">承受電流</td>
                  <td class="border border-gray-300 px-4 py-3">≤ 1A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntegratorRegister',
  data() {
    return {
      showModal: false,
      modalImageSrc: '',
      modalImageAlt: '',
      showSpecModal: false,
      showSoilModal: false,
      showWeatherModal: false,
      showFlowModal: false,
      showTinyHostModal: false,
      showTinyHostProModal: false,
      showWirelessAdapterModal: false,
      showInfraredModal: false,
      showWindModal: false,
      showWaterQualityModal: false,
      showTurbidity1Modal: false,
      showTurbidity2Modal: false,
      showRainGaugeModal: false,
      showMobileMenu: false,
      showPasswordModal: true,
      passwordInput: '',
      passwordError: '',
      isAuthenticated: false
    }
  },
  mounted() {
    // 檢查是否已經認證過 (暫時隱藏記憶功能)
    // const isAuth = sessionStorage.getItem('integratorAuth')
    // if (isAuth === 'true') {
    //   this.isAuthenticated = true
    //   this.showPasswordModal = false
    // }
    
    // 確保頁面在頂部並防止背景滾動
    if (this.showPasswordModal) {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    }
  },
  beforeUnmount() {
    // 恢復滾動
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
  },
  methods: {
    openImageModal(imageSrc) {
      this.modalImageSrc = imageSrc
      this.modalImageAlt = '場域實際安裝圖片'
      this.showModal = true
    },
    closeImageModal() {
      this.showModal = false
      this.modalImageSrc = ''
      this.modalImageAlt = ''
    },
    openSpecModal() {
      this.showSpecModal = true
    },
    closeSpecModal() {
      this.showSpecModal = false
    },
    openSoilModal() {
      this.showSoilModal = true
    },
    closeSoilModal() {
      this.showSoilModal = false
    },
    openWeatherModal() {
      this.showWeatherModal = true
    },
    closeWeatherModal() {
      this.showWeatherModal = false
    },
    openFlowModal() {
      this.showFlowModal = true
    },
    closeFlowModal() {
      this.showFlowModal = false
    },
    openTinyHostModal() {
      this.showTinyHostModal = true
    },
    closeTinyHostModal() {
      this.showTinyHostModal = false
    },
    openTinyHostProModal() {
      this.showTinyHostProModal = true
    },
    closeTinyHostProModal() {
      this.showTinyHostProModal = false
    },
    openWirelessAdapterModal() {
      this.showWirelessAdapterModal = true
    },
    closeWirelessAdapterModal() {
      this.showWirelessAdapterModal = false
    },
    openInfraredModal() {
      this.showInfraredModal = true
    },
    closeInfraredModal() {
      this.showInfraredModal = false
    },
    openWindModal() {
      this.showWindModal = true
    },
    closeWindModal() {
      this.showWindModal = false
    },
    openWaterQualityModal() {
      this.showWaterQualityModal = true
    },
    closeWaterQualityModal() {
      this.showWaterQualityModal = false
    },
    openTurbidity1Modal() {
      this.showTurbidity1Modal = true
    },
    closeTurbidity1Modal() {
      this.showTurbidity1Modal = false
    },
    openTurbidity2Modal() {
      this.showTurbidity2Modal = true
    },
    closeTurbidity2Modal() {
      this.showTurbidity2Modal = false
    },
    openRainGaugeModal() {
      this.showRainGaugeModal = true
    },
    closeRainGaugeModal() {
      this.showRainGaugeModal = false
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    checkPassword() {
      if (this.passwordInput === '123456') {
        this.isAuthenticated = true
        this.showPasswordModal = false
        this.passwordError = ''
        // 恢復滾動
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.width = ''
        // 記住認證狀態 (暫時隱藏記憶功能)
        // sessionStorage.setItem('integratorAuth', 'true')
      } else {
        this.passwordError = '認證碼錯誤，請重新輸入'
        this.passwordInput = ''
      }
    },
    closePasswordModal() {
      // 恢復滾動
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      // 返回首頁
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.section-title {
  background-color: transparent;
  color: #374151;
  padding: 0 0 12px 0;
  border-radius: 0;
  text-align: center;
  font-weight: bold;
  margin-bottom: 36px;
  font-size: 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 1px;
  background-color: #e5e7eb;
}

.btn {
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.25rem;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background-color: #10b981;
  color: white;
}

.btn-primary:hover {
  background-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.circular-spec-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 140px;
  margin: 0 auto;
}

.circular-spec-item .circle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  background-color: #edf2f7;
  aspect-ratio: 1;
  width: 140px;
  height: 140px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 12px;
  overflow: hidden;
}

.circular-spec-item:hover .circle-container {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.circular-spec-item img {
  width: 130px;
  height: 130px;
  object-fit: contain;
  border-radius: 50%;
}

.case-study-card {
  background-color: #f0fdf4;
  border: 1px solid #dcfce7;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.case-study-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #166534;
  margin-bottom: 24px;
  line-height: 1.2;
}

.case-study-item {
  font-size: 1.125rem;
  color: #374151;
  margin-bottom: 4px;
  line-height: 1.3;
}
</style> 