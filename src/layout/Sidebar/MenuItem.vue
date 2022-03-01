<script setup lang="ts">
import { ref, toRef, onMounted } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const props = defineProps<{
  item: RouteRecordRaw
  basePath?: string
}>()

const onlyOneChild = ref()
const basePath = toRef(props, 'basePath')

// onMounted(() => {
//   console.log('basePath.value', basePath.value)
// })

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

// function resolvePath(routePath: string) {
//   return props.basePath + routePath
// }
</script>

<template>
  <template v-if="hasOnlyOneChild(item.children, item)">
    <el-menu-item :index="item.path" :route="item.path">
      {{ item.name }}
    </el-menu-item>
  </template>
  <el-sub-menu v-else :index="item.path">
    <template #title>{{ item.name }}</template>
    <MenuItem v-for="child in item.children" :item="child" />
  </el-sub-menu>
</template>
