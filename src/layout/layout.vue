<script setup lang="ts">
import Sidebar from '@layout/Sidebar/Sidebar.vue'
import Navbar from '@layout/Navbar/Navbar.vue'
import Content from '@layout/Content/Content.vue'
import { useStore } from '@store/store' // 引入自定义store

const store = useStore() // 初始化store
</script>

<template>
  <Sidebar
    :class="{
      'sidebar-container': true,
      'is-sidebar-opened': store.state.isSidebarOpened
    }"
  ></Sidebar>
  <div
    :class="{
      'main-container': true,
      'is-sidebar-opened': store.state.isSidebarOpened
    }"
  >
    <Navbar></Navbar>
    <Content></Content>
    <el-backtop />
  </div>
</template>

<style scoped lang="less"></style>
