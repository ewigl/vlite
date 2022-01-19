<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'

defineProps<{
  item: RouteRecordRaw
  basePath: string
}>()

let onlyOneChild: RouteRecordRaw

function hasOnlyOneChild(
  children: object[] = [],
  parent: RouteRecordRaw
): boolean {
  let itemChildren = children.filter((item) => {
    onlyOneChild = item as RouteRecordRaw
    return true
  })
  if (itemChildren.length === 1) {
    return true
  }
  if (itemChildren.length === 0) {
    onlyOneChild = { ...parent, path: '' }
    return true
  }
  return false
}
</script>

<template>
  <template v-if="hasOnlyOneChild(item.children, item)">
    <el-menu-item :index="onlyOneChild.path" :key="onlyOneChild.path">
      {{ onlyOneChild.name }}
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
