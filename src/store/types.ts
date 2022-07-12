// 为 store state 声明类型
import { ILoginState } from './login/types'
export interface rootState {
  name: string
  token: string
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = rootState & IRootWithModule
