import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtAvatar, AtNavBar, AtCard } from "taro-ui";
import Taro from "@tarojs/taro";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import yuyueBanner from "../../assets/yuyueBanner.jpeg";

const app = getApp();
export default class Index extends Component {
  componentWillMount() {
    console.log("componentWillMount");
    console.log(app.$app.state.globalData);
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log(Taro.getSystemInfoSync().screenWidth);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidShow() {
    console.log("componentDidShow");
  }

  componentDidHide() {
    console.log("componentDidHide");
  }

  render() {
    return (
      <View className="indexContainer">
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color="#000"
          title="在线"
          rightFirstIconType="bullet-list"
          rightSecondIconType="user"
          leftIconType="chevron-left"
        />
        <Image
          style={
            "width: 100%;height: " +
            (Taro.getSystemInfoSync().screenWidth * 14) / 25 +
            "px;background: #fff;"
          }
          src={yuyueBanner}
        />
        <div class='rxBtnContainer'>
          <div class="rxBtnContainerHeader">
            <div>wechat n</div>
          </div>
          <div class="onlineRXBtn">
            <div>
              <div>在线</div>
            </div>
          </div>
          <div class="rxRecordBtn">
            <div>
              <div>记录</div>
            </div>
          </div>
        </div>
      </View>
    );
  }
}
