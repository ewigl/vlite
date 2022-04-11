<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCurrentWeather, getCityByLatLon } from '@/api/dashboard'
// import debounce from 'lodash/debounce'
import weatherKeyMaps from './components/weatherKeyMaps'
import type { WeatherInfo, GeoInfo } from './types'

const currentCity = ref({
  lat: 0,
  lon: 0,
  name: ''
})
const currentWeather = ref<WeatherInfo>()

const getWeather = (geo: GeoInfo) => {
  getCurrentWeather({
    lat: geo.lat,
    lon: geo.lon,
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
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords
      getCityByLatLon({
        lat: latitude,
        lon: longitude,
        appid: import.meta.env.V_WEATHER_APPID
      })
        .then((res) => {
          currentCity.value = {
            name: res.data[0].local_names.zh
              ? res.data[0].local_names.zh
              : res.data[0].name,
            lat: latitude,
            lon: longitude
          }
          getWeather({
            lat: latitude,
            lon: longitude
          })
        })
        .catch((err) => {
          console.log('getCityByLatLon err', err)
        })
      getWeather({
        lat: latitude,
        lon: longitude
      })
    },
    (err) => {
      console.log('getCurrentPosition error', err)
      currentCity.value = {
        name: '北京',
        lat: 39.9042,
        lon: 116.4074
      }
      getWeather({
        lat: 39.9042,
        lon: 116.4074
      })
    },
    {
      enableHighAccuracy: true,
      timeout: 4000,
      maximumAge: 0
    }
  )
})
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-card class="weather-board">
        <span>
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
          加载中...
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="weather-board"> </el-card>
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
</style>
