<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any

let echartsData = {
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
let radarData = {
  title: {
    text: 'Basic Radar Chart'
  },
  legend: {
    data: ['Allocated Budget', 'Actual Spending']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
}
onMounted(() => {
  let chartDom = document.getElementById('echartsExample')
  let chart1 = proxy.echarts.init(chartDom)
  chart1.setOption(echartsData)

  let chartDom2 = document.getElementById('echartsExample2')
  let chart2 = proxy.echarts.init(chartDom2)
  chart2.setOption(radarData)
})
</script>

<template>
  <div class="page_wrapper">
    <el-row>
      <el-col :span="12">
        <div id="echartsExample" class="e-charts"></div>
      </el-col>
      <el-col :span="12">
        <div id="echartsExample2" class="e-charts"></div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.e-charts {
  width: 100%;
  height: 24rem;
}
</style>
