<template>
  <div class="home">
    <h1>欢迎来到Flask + Vue项目</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const message = ref('加载中...')

onMounted(async () => {
  try {
    const response = await axios.get('/test')
    message.value = response.data.message
  } catch (error) {
    message.value = '后端连接失败'
    console.error(error)
  }
})
</script> 