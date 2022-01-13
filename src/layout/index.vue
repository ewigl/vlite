<script setup lang="ts">
import Sidebar from '@layout/Sidebar/index.vue'
import Navbar from '@layout/Navbar/index.vue'

import { useStore } from '@store/store' // 引入自定义store

import { ref } from 'vue'

const store = useStore() // 初始化store
</script>

<template>
  <Sidebar
    :class="{
      'sidebar-container': true,
      'is-opened': store.state.isSidebarOpened
    }"
  ></Sidebar>
  <div
    :class="{
      'main-container': true,
      'is-opened': store.state.isSidebarOpened
    }"
  >
    <div :class="{ 'fixed-header': true }">
      <Navbar></Navbar>
      <span>Content</span>
      <!-- <navbar /> -->
    </div>
    <!-- <app-main /> -->
  </div>
</template>

<style scoped lang="less"></style>
