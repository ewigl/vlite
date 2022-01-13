<script setup lang="ts"></script>
<template>
  <el-breadcrumb class="layout-breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="less">
.layout-breadcrumb {
  line-height: 3.2rem;
}
</style>
