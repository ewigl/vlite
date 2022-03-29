//#region 天气具体信息
type Weather = {
  description: string
  icon: string
}

type Main = {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_min: number
  temp_max: number
}

//#endregion

export type WeatherInfo = {
  main: Main
  weather: Weather[]
}
