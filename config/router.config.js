export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', component: './index/index', title: '首页' },
      { path: '/category', component: './category/index', title: '分类' },
      { path: '/test', component: './test/index', title: '测试页面' },
      { path: '/user/register', component: './user/register', title: '注册' },
      { path: '/user/login', component: './user/login', title: '登录' },
      { path: '/user/forget', component: './user/forget', title: '忘记密码' },
      { path: '/home', component: './home', title: '首页' },
      { path: '/notice', component: './notice', title: '公告' },
      { path: '/recharge', component: './recharge/recharge', title: '充值' },
      // { path: '/recharge/coupon', component: './recharge/coupon', title: '充值' },
      // { path: '/recharge/telphone', component: './recharge/telphone', title: '充值' },
      // { path: '/recharge/tel-coupon', component: './recharge/tel-coupon', title: '充值' },
      {
        path: '/exception',
        component: '../layouts/ExceptionLayout',
        routes: [
          { path: '/exception/403', title: '无权限', component: './exception/403' },
          { path: '/exception/500', title: '服务器出错了', component: './exception/500' },
        ],
      },
      { component: '404', title: '页面没找到' },
    ],
  },
];
