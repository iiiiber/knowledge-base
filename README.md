# 知识库文档系统

一个现代化的静态知识库文档网站，基于 Vue 3 + Vite 构建。

## ✨ 特性

- 📚 **左侧导航分类** - 支持多级分类嵌套，展开/折叠交互
- 📄 **文章内容展示** - Markdown 渲染、代码高亮、表格支持
- 🔗 **文章导航** - 右侧固定导航栏，快速跳转章节
- 🔍 **全文搜索** - 支持搜索文档标题、内容和分类
- 🌙 **主题切换** - 支持浅色/深色模式
- 📱 **响应式设计** - 完美适配桌面端、平板和手机端
- ⌨️ **快捷键支持** - ⌘K 快速打开搜索

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📂 项目结构

```
knowledge-base/
├── src/
│   ├── data/
│   │   └── docs.js          # 文档数据（分类和文章内容）
│   ├── router/
│   │   └── index.js         # 路由配置
│   ├── views/
│   │   ├── Home.vue         # 首页
│   │   └── Article.vue      # 文章详情页
│   ├── App.vue              # 主应用组件（布局）
│   └── main.js              # 入口文件
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 文档分类

1. **入门指南** - 简介、快速开始、安装部署、配置说明
2. **API 参考** - 用户接口、项目接口、Webhook接口、数据分析
3. **使用指南** - 认证授权、最佳实践、故障排除、迁移指南
4. **SDK 文档** - JavaScript、Python、Go、Java
5. **关于** - 更新日志、贡献指南、开源协议

## 🛠️ 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Vue Router** - Vue.js 官方路由管理器
- **CSS3** - 使用 CSS 变量和 Flexbox 布局

## 📝 许可证

MIT License

## 🙏 致谢

- Vue.js 官方文档
- Vite 官方文档
