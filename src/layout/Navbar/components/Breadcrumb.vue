<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter() // 初始化router

const routes = computed(() => {
  return router.options.routes
})
</script>
<template>
  <!-- <el-breadcrumb class="layout-breadcrumb" separator="/"> </el-breadcrumb> -->
</template>

<style lang="less">
.layout-breadcrumb {
  line-height: 3.2rem;
}
</style>
