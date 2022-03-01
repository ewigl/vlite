<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { NavigationFailure, useRouter } from 'vue-router' // 引入自定义router
import { computed } from 'vue'
import { MenuItemClicked } from 'element-plus/lib/components/menu/src/types'
import path from 'path'

const router = useRouter() // 初始化router

const routes = computed(() => {
  return router.options.routes
})
</script>

<template>
  <el-scrollbar wrap-class="sidebar-wrapper">
    <el-menu class="el-menu-vertical-demo" router>
      <MenuItem v-for="route in routes" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<style scoped></style>
