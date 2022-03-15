<script setup lang="ts">
import { onMounted } from 'vue'
import Chart from '@/components/Chart/Chart.vue'

let lineChartData = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}

onMounted(() => {
  // console.log('onMounted Dashboard')
  // console.log('MODE:' + import.meta.env.MODE)
  // console.log('VITE_DEV_API:' + import.meta.env.V_API)
})
</script>

<template>
  <el-row>
    <el-col :span="12">
      <el-calendar />
    </el-col>
    <el-col :span="12">
      <Chart class="e-charts" :options="lineChartData"></Chart>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
.e-charts {
  width: 100%;
  height: 24rem;
}
</style>
