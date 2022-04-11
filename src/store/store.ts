import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  locale: 'zhCn' | 'en'
  count: number
  name: string
  isSidebarOpened: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    locale: 'zhCn',
    count: 0,
    name: 'Vue',
    isSidebarOpened: false
  },
  getters: {
    count(state) {
      return state.count
    }
  },
  actions: {},
  mutations: {
    changeLanguage(state, locale) {
      state.locale = locale
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
