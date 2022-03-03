<script setup lang="ts">
import { onMounted } from 'vue'
import Charts from '@/components/Charts/Charts.vue'

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

let pieChartData = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
onMounted(() => {
  console.log('onMounted Dashboard')
})
</script>

<template>
  <div class="page_wrapper">
    <el-row>
      <el-col :span="12">
        <Charts class="e-charts" :options="lineChartData"></Charts>
      </el-col>
      <el-col :span="12">
        <Charts class="e-charts" :options="pieChartData"></Charts>
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
