// store.ts
import { createStore } from 'vuex'
import { rootState } from './types'
import login from './login/login'

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
