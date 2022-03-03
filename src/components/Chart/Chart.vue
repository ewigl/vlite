<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, toRefs, ref } from 'vue'

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
    required: true
  }
})
const { options } = toRefs(props)
const echartsContainer = ref()
const chart = ref()

onMounted(() => {
  // console.log('onMounted chart')
  // console.log(options)
  chart.value = echarts.init(echartsContainer.value)
  chart.value.setOption(options.value)
})
</script>

<template>
  <div class="echarts-container" ref="echartsContainer" />
</template>

<style scoped lang="less">
.echarts-container {
  width: 100%;
  height: 100%;
}
</style>
