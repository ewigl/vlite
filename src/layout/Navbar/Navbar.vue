<script setup lang="ts">
import Breadcrumb from './components/Breadcrumb.vue'

import { useStore } from '@store/store'

const store = useStore()
</script>

<template>
  <div class="navbar">
    <span
      @click="store.state.isSidebarOpened = !store.state.isSidebarOpened"
      style="cursor: pointer"
    >
      <i-ep-fold v-if="store.state.isSidebarOpened" class="navbar-hamburger" />
      <i-ep-expand v-else class="navbar-hamburger" />
    </span>
    <Breadcrumb></Breadcrumb>
  </div>
</template>

<style lang="less"></style>
