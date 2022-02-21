export default {
  pages: [
    // 登录
    'pages/login/index',
    // 首页
    'pages/index/index',
    // 个人中心
    'pages/my/index',
    // 用户协议
    'pages/agreement/userAgreement/index',
    // 隐私政策
    'pages/agreement/privacyPolicy/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    backgroundColor: '#383838',
    selectedColor: '#ccc',
    list: [{
        pagePath: 'pages/index/index',
        text: '预约',
        // iconPath: 'img/menu.png',
        // selectedIconPath: 'img/menu-active.png'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        // iconPath: 'img/Me.png',
        // selectedIconPath: 'img/Me-active.png'
      }
    ]
  },
}
