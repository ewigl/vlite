<script setup lang="ts">
// import { useStore } from '@store/store' // 引入自定义store
// const store = useStore() // 初始化store
import { useRouter, useRoute } from 'vue-router' // 引入自定义router
import { onMounted, computed } from 'vue'

const router = useRouter() // 初始化router

onMounted(() => {})
const routes = computed(() => {
  // return router.currentRoute
  return router.options.routes
})
</script>

<template>
  <el-scrollbar wrap-class="sidebar-wrapper">
    <el-menu class="el-menu-vertical-demo" :router="true">
      <el-menu-item index="/dashboard">Dashboard</el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <span>Data</span>
        </template>
        <el-menu-item index="/data/table">
          <i-ep-fries></i-ep-fries>
          Table
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped></style>
