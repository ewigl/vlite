<script setup lang='ts'>
import Breadcrumb from './components/Breadcrumb.vue'

import { useStore } from '@store/store'
import SvgIcon from '@components/SvgIcon/SvgIcon.vue'

const store = useStore()

const handleCommand = (command: string) => {
  store.commit('changeLanguage', command)
}
const handleSidebar = () => {
  store.commit('toggleSidebar')
}
</script>

<template>
  <div
    :class="{ navbar: true, 'is-sidebar-opened': store.state.isSidebarOpened }"
  >
    <span
      @click='handleSidebar'
      style='cursor: pointer'
    >
      <SvgIcon
        class='navbar-hamburger'
        :name="store.state.isSidebarOpened ? 'outdent' : 'indent'"
      />
    </span>
    <Breadcrumb></Breadcrumb>
    <div style='text-align: right'>
      <el-dropdown class='avatar' trigger='click' @command='handleCommand'>
        <el-avatar
          src='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        ></el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command='zhCn'> 中文</el-dropdown-item>
            <el-dropdown-item command='en'> English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang='less'>
.avatar {
  cursor: pointer;
  margin-right: 1rem;
  flex: 1;
  text-align: right;
  vertical-align: middle;
}
</style>
