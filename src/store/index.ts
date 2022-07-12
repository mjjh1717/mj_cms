// store.ts
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'

import { rootState, IStoreType } from './types'

export const store = createStore<rootState>({
  state: {
    name: 'codermjjh',
    token: ''
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
