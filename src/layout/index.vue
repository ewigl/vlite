<script setup lang="ts">
import Sidebar from '@layout/Sidebar/index.vue'
import Navbar from '@layout/Navbar/index.vue'

import { useStore } from '@store/store' // 引入自定义store
const store = useStore() // 初始化store
import { ref } from 'vue'
let temp = ref(1)
</script>

<template>
  <Sidebar class="sidebar-container"></Sidebar>
  <div class="main-container">
    <div :class="{ 'fixed-header': true }">
      <Navbar></Navbar>
      <span>Content</span>
      <!-- <navbar /> -->
    </div>
    <!-- <app-main /> -->
  </div>
</template>

<style scoped lang="less"></style>
