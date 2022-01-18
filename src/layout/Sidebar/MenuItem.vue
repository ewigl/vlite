<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'

defineProps<{
  item: RouteRecordRaw
  basePath: string
}>()

function isLeaf(item: RouteRecordRaw): boolean {
  return (
    !item.children || item.children.length === 0 || item.children.every(isLeaf)
  )
}
</script>

<template>
  <template v-if="isLeaf(item)">
    <el-menu-item :index="item.path" :key="item.path">
      {{ item.name }}
    </el-menu-item>
  </template>
  <template v-else>
    <el-sub-menu :index="basePath" :key="item.path">
      <template #title>{{ item.name }}</template>
      <MenuItem
        v-for="child in item.children"
        :item="child"
        :base-path="basePath + child.path"
      ></MenuItem>
    </el-sub-menu>
  </template>
</template>
