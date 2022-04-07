import instance from '@utils/requests/index'

// get Cities by query
export const getCityList = (params?: any) =>
  instance({
    url: 'https://api.openweathermap.org/geo/1.0/direct',
    method: 'get',
    params
  })

// get Weather by query
export const getCurrentWeather = (params?: any) =>
  instance({
    url: 'https://api.openweathermap.org/data/2.5/weather',
    method: 'get',
    params
  })

// get Cities by lat and lon(reverse geocoding)
export const getCityByLatLon = (params?: any) =>
  instance({
    url: 'http://api.openweathermap.org/geo/1.0/reverse',
    method: 'get',
    params
  })
