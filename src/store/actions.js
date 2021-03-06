import {
  USER_REGISTER, USER_LOGIN, USER_RESER, GET_GOODS_LIST, RESET_GOODS_LIST, USER_PHONE_LOGIN
} from './mutation-types'

import { reqAutoLogin, reqGoodsList, reqPhoneLogin } from '../network/user'

import router from '../router/index'

export default {
  userRegister({ commit }, user) {
    commit(USER_REGISTER, { user })
  },

  userLogin({ commit }, user) {
    commit(USER_LOGIN, user)
  },

  userPhoneLogin({ commit }, user) {
    commit(USER_PHONE_LOGIN, user)
  },

  async autoLogin({ commit }) {
    const response = await reqAutoLogin()
    const result = response.data
    if (result.status === 0) {
      return
    } else {
      commit(USER_LOGIN, result.data)
    }
  },

  logOut({ commit }, name) {
    commit(USER_RESER, name)
  },

  async goodsList({ commit }, keywords) {
    const response = await reqGoodsList({ keywords })
    const result = response.data
    if (result.status === 0) {
      commit(RESET_GOODS_LIST, result.msg)
    } else {
      commit(GET_GOODS_LIST, result.data)
    }
  },
}