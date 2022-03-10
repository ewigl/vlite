<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { useRouter } from 'vue-router' // 引入自定义router
import { computed } from 'vue'
import { useStore } from '@store/store'

const store = useStore()

const router = useRouter() // 初始化router

const routes = computed(() => {
  return router.options.routes
})
</script>

<template>
  <el-scrollbar>
    <el-menu
      router
      :collapse="!store.state.isSidebarOpened"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#fff"
    >
      <MenuItem v-for="route in routes" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<style scoped lang="less">
@import '@styles/variables.less';
.el-menu {
  height: 100%;
  position: absolute;
  width: @sidebarWidth;
  &--collapse {
    width: @sidebarCollapsedWidth;
  }
}
</style>
