import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

const app = getApp();
export default class PrivacyPolicy extends Component {
  render () {
    return (
      <View className='index'>
        <Text>用户协议</Text>
      </View>
    )
  }
}
