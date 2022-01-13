<script setup lang="ts">
import Sidebar from '@layout/Sidebar/index.vue'
import { useStore } from '@store/store' // 引入自定义store
const store = useStore() // 初始化store
import { ref } from 'vue'
let temp = ref(1)
</script>

<template>
  <Sidebar class="sidebar-container"></Sidebar>
</template>

<style scoped lang="less">
</style>
