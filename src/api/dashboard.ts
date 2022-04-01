import instance from '@utils/requests/index'

export const getCityList = (params?: any) =>
  instance({
    url: 'https://api.openweathermap.org/geo/1.0/direct',
    method: 'get',
    params
  })

export const getCurrentWeather = (params?: any) =>
  instance({
    url: 'https://api.openweathermap.org/data/2.5/weather',
    method: 'get',
    params
  })
