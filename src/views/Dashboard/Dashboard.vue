<script setup lang="ts">
import Template from './components/Template.vue'
import { useRouter, useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'

const router = useRouter()
// const routes = computed(() => {
//   return router.options.routes
// })
</script>

<template>
  <div class="page_wrapper">
    <el-button type="primary" size="default"> Dashboard </el-button>
    <Template msg="Hello Template"></Template>
  </div>
</template>

<style scoped></style>
