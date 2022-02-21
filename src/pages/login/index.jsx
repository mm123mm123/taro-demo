import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtAvatar, AtCheckbox, AtToast } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";
import { Request } from "../../utils/request";
import { getGlobalData, setGlobalData } from "../../utils/global";

const app = getApp();
export default class Login extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      // length> 1 标识已同意用户协议和隐私协议
      checkedList: [],
      showTips: false
    };
    // 多选框的选择项
    this.checkboxOption = [
      {
        value: "agree",
        label: ""
      }
    ];
  }
  // 在微信小程序中这一生命周期方法对应页面的onLoad或入口文件app中的onLaunch
  componentWillMount() {
    console.log("1");
    console.log(app.$app);
  }
  // 在微信小程序中这一生命周期方法对应页面的onReady或入口文件app中的onLaunch，在 componentWillMount后执行
  componentDidMount() {
    console.log("2");
  }

  // 在微信小程序中这一生命周期方法对应 onShow
  componentDidShow() {
    console.log("3");
  }
  // 在微信小程序中这一生命周期方法对应 onHide
  componentDidHide() {
    console.log("4");
  }

  // 页面退出，在微信小程序中这一生命周期方法对应 onUnload
  componentWillUnmount() {
    console.log("5");
  }

  // 同意用户协议和隐私协议
  consentAgreement(value) {
    this.setState({
      checkedList: value
    });
  }
  // 打开提示
  openTips() {
    this.setState({
      showTips: true
    });
  }
  // 获取手机号码
  getPhoneNumber(e) {
    console.log(e.detail.code);

    Taro.switchTab({
      url: `/pages/index/index`
    });
  }
  // 跳转《用户协议》
  userAgreementClick() {
    Taro.navigateTo({
      url: `/pages/agreement/userAgreement/index`
    });
  }
  // 跳转《隐私政策》
  privacyPolicyClick() {
    Taro.navigateTo({
      url: `/pages/agreement/privacyPolicy/index`
    });
  }

  render() {
    return (
      <View className="login">
        <AtAvatar
          circle
          image="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg"
        ></AtAvatar>
        <View className="weappName">***在线预约</View>
        {!this.state.checkedList.length > 0 && (
          <AtButton
            type="primary"
            circle
            className="loginButton"
            onClick={this.openTips.bind(this)}
          >
            微信登录
          </AtButton>
        )}
        {this.state.checkedList.length > 0 && (
          <AtButton
            type="primary"
            circle
            className="loginButton"
            openType="getPhoneNumber"
            onGetPhoneNumber={this.getPhoneNumber.bind(this)}
          >
            微信登录
          </AtButton>
        )}
        <View className="isAgreeBox">
          <View className="isAgree">
            <AtCheckbox
              options={this.checkboxOption}
              selectedList={this.state.checkedList}
              onChange={this.consentAgreement.bind(this)}
            />
          </View>
          <View className="agreement">
            同意 <Text onClick={this.userAgreementClick}>《用户协议》</Text>和
            <Text onClick={this.privacyPolicyClick}>《隐私政策》</Text>
          </View>
        </View>
        <AtToast
          isOpened={this.state.showTips}
          text="请阅读并同意《用户协议》和《隐私政策》"
        ></AtToast>
      </View>
    );
  }
}
