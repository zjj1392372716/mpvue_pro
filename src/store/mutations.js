import * as types from './mutations-type'

const mutations = {
  // 设置openid
  [types.SET_OPEN_ID] (state, openId) {
    state.openId = openId
  },
  // 设置sessionCode
  [types.SET_SESSION_CODE] (state, sessionCode) {
    state.sessionCode = sessionCode
  }
}
export default mutations
