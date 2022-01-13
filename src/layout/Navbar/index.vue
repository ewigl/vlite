<script setup lang="ts">
import Breadcrumb from './components/Breadcrumb.vue'

import { useStore } from '@store/store'

const store = useStore()
console.log(store)
</script>

<template>
  <div class="navbar">
    <span
      @click="store.state.isSidebarOpened = !store.state.isSidebarOpened"
      style="cursor: pointer"
    >
      <i-ep-expand
        v-if="store.state.isSidebarOpened"
        class="navbar-hamburger"
      />
      <i-ep-fold v-else class="navbar-hamburger" />
    </span>
    <Breadcrumb></Breadcrumb>
  </div>
</template>

<style lang="less"></style>
