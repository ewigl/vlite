<script setup lang="ts">
import { ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'

defineProps<{
  item: RouteRecordRaw
  basePath: string
}>()

function hasNoChild(item: RouteRecordRaw) {
  return !item.children || item.children.length < 1
}

function hasOnlyOneChild(item: RouteRecordRaw) {
  return item.children && item.children.length === 1
}
</script>

<template>
  <template v-if="hasNoChild(item)">
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
      />
    </el-sub-menu>
  </template>
</template>
