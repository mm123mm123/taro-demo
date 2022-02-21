// 全局变量
// const api = '接口地址'
const globalData = {
  'api': 'http://192.168.1.31:8080',
  'access_token': '', // token
  'appId': '',
}
export function setGlobalData (key, val) {
  globalData[key] = val
}
export function getGlobalData (key) {
  return globalData[key]
}