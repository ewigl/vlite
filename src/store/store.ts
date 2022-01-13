import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
  name: string
  isSidebarOpened: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    name: 'Vue',
    isSidebarOpened: true
  },
  getters: {
    count(state) {
      return state.count
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
