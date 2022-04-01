<script setup lang="ts">
import { useStore } from '@store/store'
import { computed } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

const store = useStore()

const langs = {
  zhCn,
  en
}

let locale = computed(() => {
  return langs[store.state.locale]
})
</script>
<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
