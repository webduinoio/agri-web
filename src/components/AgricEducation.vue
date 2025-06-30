<template>
  <div class="bg-primary-yellow">
    <!-- Header -->
    <header class="bg-green-700/80 text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div class="container mx-auto pr-4 py-3 flex justify-between items-center">
        <a href="/home" class="text-2xl font-bold ml-2 md:ml-1 lg:ml-2">慶奇科技</a>
        <nav class="hidden md:flex space-x-6 items-center">
          <a class="hover:text-green-200" href="/">首頁</a>
          <a class="hover:text-green-200" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0">產品介紹</a>
          <a class="hover:text-green-200" href="/home#installations">場域實績</a>
          <a class="hover:text-green-200 text-green-200" href="/education">食農教育</a>
          <a class="hover:text-green-200" href="/#contact">聯絡我們</a>
          <a class="hover:text-green-200" href="https://md.webduino.io/s/22TOZk5pV">使用教學</a>
        </nav>
        <button class="md:hidden text-white">
          <span class="material-icons">menu</span>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-16">
      <div class="container mx-auto px-4 py-8">
        <img src="/assets/三面六項.png" alt="食農教育 ABC 模式" class="w-full max-w-2xl mx-auto rounded-lg mb-2"/>
        <p class="text-center text-gray-500 text-sm mb-4">圖片來源：農業部｜食農教育知能手冊</p>
        <div class="bg-[#8B5A2B] text-white px-8 py-2 rounded-md w-fit mx-auto mb-8 text-xl">食農教育三面六項</div>
        <img src="/assets/全民食農.png" alt="全民食農教育" class="w-full max-w-4xl mx-auto rounded-lg mb-2"/>
        <p class="text-center text-gray-500 text-sm mb-4">圖片來源：農業部｜食農教育知能手冊</p>
        <button class="btn-secondary block mx-auto mb-12 px-8 text-xl">食農教育輔助資訊</button>
      </div>

      <img src="/assets/食農樂農.png" alt="食農教育 x 樂農智慧農業" class="w-full h-auto object-contain mb-12"/>

      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-8 text-primary-brown">結合 SDGs 多項議題</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div class="bg-orange-400 text-white p-6 rounded-lg shadow-lg text-center">
            <img src="/assets/SVG/sdgs2.svg" alt="SDG 2" class="w-16 h-16 mb-2 mx-auto"/>
            <p class="font-semibold text-lg">2. 終止飢餓</p>
            <p>消除飢餓，確保糧食安全與永續農業發展促進。</p>
          </div>
          <div class="bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center">
            <img src="/assets/SVG/sdgs3.svg" alt="SDG 3" class="w-16 h-16 mb-2 mx-auto"/>
            <p class="font-semibold text-lg">3. 良好健康與社會福利</p>
            <p>確保健康生活，促進全民身心福祉與持續發展。</p>
          </div>
          <div class="bg-green-600 text-white p-6 rounded-lg shadow-lg text-center">
            <img src="/assets/SVG/sdgs15.svg" alt="SDG 15" class="w-16 h-16 mb-2 mx-auto"/>
            <p class="font-semibold text-lg">15. 陸域生態</p>
            <p>保護恢復陸域生態，促進永續利用保全與復育。</p>
          </div>
          <div class="bg-amber-600 text-white p-6 rounded-lg shadow-lg text-center">
            <img src="/assets/SVG/sdgs11.svg" alt="SDG 11" class="w-16 h-16 mb-2 mx-auto"/>
            <p class="font-semibold text-lg">11. 永續城鎮與社區</p>
            <p>建設包容安全有韌性永續城市與社區發展促進。</p>
          </div>
          <div class="bg-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
            <img src="/assets/SVG/sdgs12.svg" alt="SDG 12" class="w-16 h-16 mb-2 mx-auto"/>
            <p class="font-semibold text-lg">12. 永續的消費與生產模式</p>
            <p>確保可持續消費生產，減少浪費促進循環落實。</p>
          </div>
          <div class="bg-sky-600 text-white p-6 rounded-lg shadow-lg text-center">
            <img src="/assets/SVG/sdgs13.svg" alt="SDG 13" class="w-16 h-16 mb-2 mx-auto"/>
            <p class="font-semibold text-lg">13. 氣候行動</p>
            <p>採取緊急行動應對氣候變遷減緩影響強化適應。</p>
          </div>
        </div>

        <div class="w-24 mx-auto border-t-2 border-primary-brown my-12"></div>
        <h2 class="text-4xl font-bold text-center mb-8 text-primary-brown">從教育到食農</h2>

        <div class="flex items-center justify-center gap-2 mb-4 max-w-6xl mx-auto">
          <div class="bg-green-700 text-white p-2 rounded-lg w-52 h-24 flex items-center justify-center">
            <h3 class="text-3xl font-semibold">認識</h3>
          </div>
          <span class="material-icons text-[#94AD49] text-6xl font-bold bg-gray-50/50 p-2 rounded-xl">arrow_forward</span>
          <div class="bg-[#94AD49] text-white p-2 rounded-lg w-52 h-24 flex items-center justify-center">
            <h3 class="text-3xl font-semibold">了解</h3>
          </div>
          <span class="material-icons text-[#94AD49] text-6xl font-bold bg-gray-50/50 p-2 rounded-xl">arrow_forward</span>
          <div class="bg-green-700 text-white p-2 rounded-lg w-52 h-24 flex items-center justify-center">
            <h3 class="text-3xl font-semibold">討論</h3>
          </div>
        </div>
        <div class="flex justify-center gap-2 mb-12 max-w-6xl mx-auto">
          <p class="text-center w-52 text-green-700 font-semibold">食農教育基本概念</p>
          <div class="w-20"></div>
          <p class="text-center w-52 text-[#94AD49] font-semibold">智慧農業的技術與原理</p>
          <div class="w-20"></div>
          <p class="text-center w-52 text-green-700 font-semibold">討論如何將技術應用在場域</p>
        </div>

        <div class="flex items-center justify-center gap-2 mb-4 max-w-6xl mx-auto">
          <div class="bg-[#94AD49] text-white p-2 rounded-lg w-52 h-24 flex items-center justify-center">
            <h3 class="text-3xl font-semibold">實作</h3>
          </div>
          <span class="material-icons text-green-700 text-6xl font-bold bg-gray-50/50 p-2 rounded-xl">arrow_forward</span>
          <div class="bg-green-700 text-white p-2 rounded-lg w-52 h-24 flex items-center justify-center">
            <h3 class="text-3xl font-semibold">參訪</h3>
          </div>
          <span class="material-icons text-green-700 text-6xl font-bold bg-gray-50/50 p-2 rounded-xl">arrow_forward</span>
          <div class="bg-[#94AD49] text-white p-2 rounded-lg w-52 h-24 flex items-center justify-center">
            <h3 class="text-3xl font-semibold">成果</h3>
          </div>
        </div>
        <div class="flex justify-center gap-2 mb-12 max-w-6xl mx-auto">
          <p class="text-center w-52 text-[#94AD49] font-semibold">探究與實作科技田間管理</p>
          <div class="w-20"></div>
          <p class="text-center w-52 text-green-700 font-semibold">實地參訪場域，感受現代農業</p>
          <div class="w-20"></div>
          <p class="text-center w-52 text-[#94AD49] font-semibold">成果發表與心得分享</p>
        </div>

        <div class="w-24 mx-auto border-t-2 border-primary-brown my-12"></div>
        <h2 class="text-4xl font-bold text-center mb-8 text-primary-brown">學期課程參考</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div>
            <img alt="課堂食農" class="w-full h-auto rounded-lg shadow-md mb-6" src="/assets/l01.jpg"/>
            <a href="https://resource.webduino.io/docs/selected_course_all/selected_course_03" class="btn-primary block mx-auto text-center max-w-[50%] text-xl">課堂食農</a>
          </div>
          <div>
            <img alt="校園實踐" class="w-full h-auto rounded-lg shadow-md mb-6" src="/assets/l02.jpg"/>
            <a href="https://resource.webduino.io/docs/selected_course_all/selected_course_08" class="btn-primary block mx-auto text-center max-w-[50%] text-xl">校園實踐</a>
          </div>
        </div>
 <div class="w-24 mx-auto border-t-2 border-primary-brown my-12"></div>
        <h2 class="text-4xl font-bold text-center mb-8 text-primary-brown">學校裝設實照</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
          <img alt="School farming setup with sensors" class="w-full h-48 object-cover rounded-lg shadow-md" src="/assets/s-41.jpg"/>
          <img alt="Outdoor farming equipment at a school" class="w-full h-48 object-cover rounded-lg shadow-md" src="/assets/s-42.jpg"/>
          <img alt="Student interacting with farming technology" class="w-full h-48 object-cover rounded-lg shadow-md" src="/assets/s-43.jpg"/>
          <img alt="Close-up of plants in a school garden" class="w-full h-48 object-cover rounded-lg shadow-md" src="/assets/s-44.jpg"/>
          <img alt="Another view of outdoor farming setup" class="w-full h-48 object-cover rounded-lg shadow-md" src="/assets/s-45.jpg"/>
          <img alt="Harvested produce from school garden" class="w-full h-48 object-cover rounded-lg shadow-md" src="/assets/s-46.jpg"/>
        </div>
        <button class="btn-primary block mx-auto px-8 mb-12 text-xl">立即洽詢食農方案</button>
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
  name: 'AgricEducation'
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
  background-color: #8B5A2B;
  color: white;
  padding: 10px 20px;
  border-radius: 9999px;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #744A24;
}

.btn-secondary {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
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