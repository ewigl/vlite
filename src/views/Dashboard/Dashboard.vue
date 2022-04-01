<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { getCityList, getCurrentWeather } from '@/api/dashboard'
import debounce from 'lodash/debounce'
import weatherKeyMaps from './components/weatherKeyMaps'
import type { WeatherInfo, ListItem } from './types'
import { TdtMap } from 'vue-tianditu'

const currentCity = ref(JSON.parse(localStorage.getItem('currentCity') || '{}'))
const selectedCity = ref<string>('')
const selectLoading = ref(false)
const cities = ref<ListItem[]>([])
const currentWeather = ref<WeatherInfo>()

const tiandituConfig = { v: '4.0', tk: import.meta.env.V_TIANDITU_TK }
const tiandituState = reactive({
  center: [currentCity.value.lon, currentCity.value.lat],
  zoom: 10,
  controls: [
    // {
    //   name: 'Copyright',
    //   position: 'bottomleft',
    //   id: 'vlite-tianditu',
    //   content: '来源于天地图'
    //   // bounds: [0, 0, 0, 0]
    // }
  ]
})

// 获取天气信息
const getWeather = () => {
  getCurrentWeather({
    lat: currentCity.value.lat,
    lon: currentCity.value.lon,
    appid: import.meta.env.V_WEATHER_APPID,
    units: 'metric',
    lang: 'zh_cn'
  })
    .then((res) => {
      currentWeather.value = res.data
    })
    .catch((err) => {
      console.log('currentWeather err', err.response)
    })
}

onMounted(() => {
  console.log(import.meta.env.MODE)

  if (currentCity.value.name) {
    getWeather()
  } else {
    console.log('No City Info')
  }
})

const getCities = async (query: string) => {
  selectLoading.value = true
  const res = await getCityList({
    q: query,
    appid: import.meta.env.V_WEATHER_APPID,
    limit: 5
  })
  selectLoading.value = false
  cities.value = res.data.map((item: any) => {
    return {
      label:
        (item.local_names?.zh ? item.local_names?.zh : '') +
        '_' +
        item.name +
        '_' +
        item.state +
        '_' +
        item.country,
      value: `${item.lat}_${item.lon}`,
      ...item
    }
  })
}

const setCity = (value: any) => {
  currentCity.value = { ...value }
  tiandituState.center = [value.lon, value.lat]
  getWeather()
  localStorage.setItem('currentCity', JSON.stringify(value))
}
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-card class="weather-board">
        <el-select
          v-model="selectedCity"
          value-key="value"
          filterable
          placeholder="输入以搜索城市"
          remote
          :remote-method="debounce(getCities, 500)"
          style="width: 50%"
          :loading="selectLoading"
          @change="setCity"
        >
          <el-option
            v-for="city in cities"
            :key="city.value"
            :label="city.label"
            :value="city"
          />
        </el-select>
        <span style="margin-left: 1rem">
          当前城市: {{ currentCity.name ? currentCity.name : '未选择' }}
        </span>
        <div v-if="currentWeather?.weather">
          <svg-icon
            class="weather-icon"
            :name="weatherKeyMaps.get(currentWeather.weather[0].icon)"
          />
          {{ currentWeather.weather[0].description }}
          <p>体感温度: {{ currentWeather?.main.feels_like }} ℃</p>
          <p>湿度: {{ currentWeather?.main.humidity }}</p>
          <p>气压: {{ currentWeather?.main.pressure }}</p>
        </div>
        <div v-else>
          <svg-icon class="weather-icon" name="icon_wushuju" />
          {{ currentCity.name ? '加载中...' : '请选择城市' }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <div style="width: 100%; height: 100%">
        <tdt-map
          :center="tiandituState.center"
          :zoom="tiandituState.zoom"
          :controls="tiandituState.controls"
          :loadConfig="tiandituConfig"
        ></tdt-map>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
.weather-board {
  height: 24rem;
}
.weather-icon {
  width: 8rem;
  height: 8rem;
}
:deep(.tdt-control-copyright.tdt-control > div:not(.tdt-control-copyright)) {
  display: none;
}
</style>
