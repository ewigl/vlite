<script setup lang="ts">
import { useStore } from '@store/store' // 引入自定义store
const store = useStore() // 初始化store
import { onMounted, ref, reactive, computed } from 'vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-scrollbar wrap-class="sidebar-wrapper">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <span>Navigator One</span>
        </template>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <span>Navigator Two</span>
        </template>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped></style>
