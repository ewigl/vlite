<script setup lang="ts">
import Breadcrumb from './components/Breadcrumb.vue'
</script>

<template>
  <div class="navbar">
    <i-ep-fold class="navbar-hamburger" />
    <Breadcrumb></Breadcrumb>
  </div>
</template>
<style lang="less">
.navbar {
  height: 3.2rem;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
