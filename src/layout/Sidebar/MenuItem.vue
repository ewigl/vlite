<script setup lang="ts">
import { ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { useStore } from '@store/store'

const store = useStore()

const props = defineProps<{
  item: RouteRecordRaw
}>()

const onlyOneChild = ref()

const hasOnlyOneChild = (
  children: RouteRecordRaw[] = [],
  parent: RouteRecordRaw
) => {
  const showingChildren = children.filter((item) => {
    if (item?.meta?.hidden) {
      return false
    }
    onlyOneChild.value = item
    return true
  })

  if (showingChildren.length === 1) {
    return true
  }

  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, noShowingChildren: true }
    return true
  }

  return false
}
</script>

<template>
  <template v-if="hasOnlyOneChild(item.children, item)">
    <el-menu-item
      v-if="!item.meta?.hidden"
      :index="item.path"
      :route="item.path"
    >
      <svg-icon :name="item?.meta?.icon"></svg-icon>
      <span>{{ item?.meta?.title }}</span>
    </el-menu-item>
  </template>
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <svg-icon :name="item?.meta?.icon"></svg-icon>
      <span>{{ item?.meta?.title }}</span>
    </template>
    <MenuItem v-for="child in item.children" :item="child" />
  </el-sub-menu>
</template>
