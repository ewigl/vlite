<script setup lang="ts">
import { useStore } from '@store/store' // 引入自定义store
const store = useStore() // 初始化store
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <el-button type="text" size="default" @click="store.state.count++">
            {{ store.state.count }}
          </el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.common-layout {
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    text-align: center;
    line-height: 160px;
  }
}
</style>
