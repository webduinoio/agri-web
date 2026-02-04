<template>
  <footer id="contact" class="bg-gray-800 text-gray-300 py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-8 mb-6 text-center md:text-left">
        <span class="font-semibold text-white">慶奇科技股份有限公司</span>
        <span class="hidden md:inline text-gray-500">|</span>
        <span><span class="material-icons text-sm inline-block align-middle mr-1">place</span>高雄市前鎮區復興四路 2 號 4 樓 A10</span>
        <span class="hidden md:inline text-gray-500">|</span>
        <span><span class="material-icons text-sm inline-block align-middle mr-1">phone</span><a href="tel:07-3388-511" class="hover:text-green-400">07-3388-511</a></span>
        <span class="hidden md:inline text-gray-500">|</span>
        <span><span class="material-icons text-sm inline-block align-middle mr-1">email</span><a href="#" @click.prevent="copyEmail" class="hover:text-green-400 cursor-pointer">service@webduino.io</a></span>
      </div>
      <div class="border-t border-gray-700 pt-6 text-center text-sm">
        <p>© 2025 慶奇科技股份有限公司 版權所有</p>
        <p>本網站內容均受著作權法保護，未經授權不得轉載。</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const copyEmail = () => {
  navigator.clipboard.writeText('service@webduino.io')
  alert('已複製 Email 至剪貼簿')
}
</script>
