<template>
  <div class="hello-world">
    <h2>{{ message }}</h2>
    <p class="description">{{ description }}</p>
    <div class="features">
      <div class="feature">
        <span class="icon">🌱</span>
        <span>現代化Vue框架</span>
      </div>
      <div class="feature">
        <span class="icon">⚡</span>
        <span>Vite快速建置</span>
      </div>
      <div class="feature">
        <span class="icon">🚀</span>
        <span>ES6模組語法</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  setup() {
    const message = ref('Hello World!')
    const description = ref('歡迎來到您的Vue農業應用程式')

    return {
      message,
      description
    }
  }
}
</script>

<style scoped>
.hello-world {
  padding: 20px;
}

h2 {
  color: #42b983;
  font-size: 2.5em;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.description {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 10px;
  min-width: 120px;
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: scale(1.05);
}

.icon {
  font-size: 2em;
  margin-bottom: 8px;
}

.feature span:last-child {
  font-size: 0.9em;
  color: #555;
  text-align: center;
}

@media (max-width: 600px) {
  .features {
    flex-direction: column;
    align-items: center;
  }
  
  .feature {
    width: 80%;
  }
}
</style> 