# Skills Bank

技能银行小程序是一个基于积分交换的技能共享平台，用户可以发布自己的技能服务，也可以使用积分预约他人的技能服务。

## 技术栈

- 框架：Taro 4.0.9 + React
- 语言：TypeScript
- 样式：Sass
- 平台：微信小程序（支持多端适配）

## 功能特性

- 技能服务发布与管理
- 技能服务浏览与搜索
- 积分预约与支付
- 订单管理与评价
- 用户个人中心

## 项目结构

```
├── src/                # 源码目录
│   ├── pages/         # 页面组件
│   │   ├── index/     # 首页
│   │   ├── skill/     # 技能相关页面
│   │   ├── order/     # 订单相关页面
│   │   └── profile/   # 个人中心页面
│   ├── assets/        # 静态资源
│   ├── app.config.ts  # 应用配置
│   └── app.ts         # 应用入口
├── config/            # 项目配置
├── types/             # 类型定义
└── package.json       # 项目依赖
```

## 开发环境

### 环境要求

- Node.js (推荐 16.x 以上版本)
- 微信开发者工具

### 安装依赖

```bash
yarn install
```

### 开发调试

```bash
# 微信小程序
yarn dev:weapp

# 支付宝小程序
yarn dev:alipay

# H5
yarn dev:h5
```

### 打包构建

```bash
# 微信小程序
yarn build:weapp

# 支付宝小程序
yarn build:alipay

# H5
yarn build:h5
```

## 环境配置

在项目根目录下创建以下环境配置文件：

- `.env.development`: 开发环境配置
- `.env.production`: 生产环境配置
- `.env.test`: 测试环境配置

配置示例：

```env
TARO_APP_ID=your_miniprogram_appid
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/xxx`
3. 提交代码：`git commit -m 'feat: add xxx'`
4. 推送分支：`git push origin feature/xxx`
5. 提交 Pull Request

## 许可证

[MIT](./LICENSE)