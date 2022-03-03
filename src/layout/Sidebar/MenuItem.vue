<script setup lang="ts">
import { ref, toRef, onMounted } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const props = defineProps<{
  item: RouteRecordRaw
  basePath?: string
}>()

const onlyOneChild = ref()
const basePath = toRef(props, 'basePath')

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
      {{ item.name }}
    </el-menu-item>
  </template>
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <svg-icon :name="item?.meta?.icon"></svg-icon>
      {{ item.name }}
    </template>
    <MenuItem v-for="child in item.children" :item="child" />
  </el-sub-menu>
</template>

<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 1.25em;
  margin-right: 0.32rem;
}
</style>
