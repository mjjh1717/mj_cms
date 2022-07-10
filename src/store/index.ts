// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// 为 store state 声明类型
export interface State {
  name: string
  token: string
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    name: 'codermjjh',
    token: ''
  }
})
