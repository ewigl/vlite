import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  locale: 'zhCn' | 'en'
  isSidebarOpened: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    locale: 'zhCn',
    isSidebarOpened: localStorage.getItem('isSidebarOpened') === 'true'
  },
  getters: {},
  actions: {},
  mutations: {
    changeLanguage(state, locale) {
      state.locale = locale
    },
    toggleSidebar(state) {
      state.isSidebarOpened = !state.isSidebarOpened
      localStorage.setItem('isSidebarOpened', state.isSidebarOpened.toString())
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
