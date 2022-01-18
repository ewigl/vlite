<script setup lang="ts">
import Template from './components/Template.vue'
</script>

<template>
  <div>
    <div>Dashboard</div>
    <el-button :disabled="true" type="text" size="default">
      textbutton
    </el-button>
    <Template msg="Hello L"></Template>
  </div>
</template>

<style scoped></style>
