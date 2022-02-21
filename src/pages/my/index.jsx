import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro';
import { AtButton, } from 'taro-ui'
import { Request } from "../../utils/request";
import { getGlobalData, setGlobalData } from "../../utils/global";

const app = getApp();
export default class PrivacyPolicy extends Component {

  constructor() {
    super(...arguments)
    this.state = {
    }
  }

  // 登出
  loginOut(){
    Request({
      url: `/applet/onlinebooking/UserInfo`,
      method: 'put',
      token: getGlobalData("token"),
      data: {loginState: 1, id: getGlobalData("id")},
    }).then(UserInfoRes => {
      if(UserInfoRes.code == 200){
        Taro.reLaunch({
          url: `/pages/login/index`,
        })
      } else {
        Taro.showToast({
          title: UserInfoRes.msg,
          icon: 'none',
          duration: 1500
        })
      }
    })


    
  }
  render () {
    return (
      <View className='index'>
        <Text>个人中心</Text>
        <AtButton type='primary' circle className='loginButton' onClick={this.loginOut} >退出登录</AtButton>
      </View>
    )
  }
}
