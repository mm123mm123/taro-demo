import { Component } from "react";
import "./app.scss";
import { Request } from "./utils/request";
import { getGlobalData, setGlobalData } from "./utils/global";
import Taro from "@tarojs/taro";
import "./style/custom-theme.scss";

class App extends Component {
  componentDidMount() {
    this.onWxLogin();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  state = {
    globalData: 1
  };

  // 获取用户openId
  onWxLogin = () => {
    wx.login(
      Taro.switchTab({
        url: `/pages/index/index`
      })
    );
  };

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
