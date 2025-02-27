export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/profile/index',
    'pages/skill/publish/index',
    'pages/skill/detail/index',
    'pages/order/list',
    'pages/review/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#1677ff',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '技能广场',
      },
      {
        pagePath: 'pages/skill/publish/index',
        text: '发布',
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
      }
    ]
  }
})
