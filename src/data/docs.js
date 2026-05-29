export const categories = [
  {
    id: 'getting-started',
    title: '入门指南',
    icon: '📚',
    children: [
      { id: 'intro', title: '简介', path: '/docs/getting-started/intro' },
      { id: 'quick-start', title: '快速开始', path: '/docs/getting-started/quick-start' },
      { id: 'installation', title: '安装部署', path: '/docs/getting-started/installation' },
      { id: 'configuration', title: '配置说明', path: '/docs/getting-started/configuration' }
    ]
  },
  {
    id: 'api-reference',
    title: 'API 参考',
    icon: '🔌',
    children: [
      { id: 'users', title: '用户接口', path: '/docs/api-reference/users', method: 'GET' },
      { id: 'projects', title: '项目接口', path: '/docs/api-reference/projects', method: 'POST' },
      { id: 'webhooks', title: 'Webhook接口', path: '/docs/api-reference/webhooks', method: 'PUT' },
      { id: 'analytics', title: '数据分析', path: '/docs/api-reference/analytics', method: 'GET' }
    ]
  },
  {
    id: 'guides',
    title: '使用指南',
    icon: '📖',
    children: [
      { id: 'authentication', title: '认证授权', path: '/docs/guides/authentication' },
      { id: 'best-practices', title: '最佳实践', path: '/docs/guides/best-practices' },
      { id: 'troubleshooting', title: '故障排除', path: '/docs/guides/troubleshooting' },
      { id: 'migration', title: '迁移指南', path: '/docs/guides/migration' }
    ]
  },
  {
    id: 'sdk',
    title: 'SDK 文档',
    icon: '💻',
    children: [
      { id: 'javascript', title: 'JavaScript', path: '/docs/sdk/javascript' },
      { id: 'python', title: 'Python', path: '/docs/sdk/python' },
      { id: 'go', title: 'Go', path: '/docs/sdk/go' },
      { id: 'java', title: 'Java', path: '/docs/sdk/java' }
    ]
  },
  {
    id: 'about',
    title: '关于',
    icon: 'ℹ️',
    children: [
      { id: 'changelog', title: '更新日志', path: '/docs/about/changelog' },
      { id: 'contributing', title: '贡献指南', path: '/docs/about/contributing' },
      { id: 'license', title: '开源协议', path: '/docs/about/license' }
    ]
  }
]

export const articles = {
  'getting-started/intro': {
    id: 'intro',
    title: '简介',
    category: '入门指南',
    breadcrumb: ['文档', '入门指南', '简介'],
    updateTime: '2024-01-15',
    headings: [
      { id: 'what-is', text: '什么是知识库', level: 2 },
      { id: 'features', text: '主要功能', level: 2 },
      { id: 'architecture', text: '系统架构', level: 2 },
      { id: 'quick-start', text: '快速体验', level: 2 }
    ],
    content: `
## 什么是知识库

欢迎使用知识库文档系统！这是一个现代化的文档管理平台，帮助团队高效管理和分享技术文档。

### 核心价值

我们致力于提供：

- **结构化文档管理**：支持多级分类、标签管理
- **实时协作**：多人协同编辑，版本控制
- **全文搜索**：快速定位所需内容
- **响应式设计**：随时随地访问

## 主要功能

### 文档管理
- 创建、编辑、删除文档
- 支持 Markdown 格式
- 文档版本历史
- 权限控制

### 分类系统
- 多级分类嵌套
- 自定义分类图标
- 分类权限管理

### 搜索功能
- 全文检索
- 关键词高亮
- 搜索历史记录

## 系统架构

\`\`\`
┌─────────────────────────────────┐
│         前端应用层              │
│   (Vue 3 + Vite + Vue Router)   │
├─────────────────────────────────┤
│         API 网关层              │
│     (RESTful API / GraphQL)     │
├─────────────────────────────────┤
│         业务逻辑层              │
│       (Node.js / Express)       │
├─────────────────────────────────┤
│         数据持久层              │
│      (PostgreSQL + Redis)       │
└─────────────────────────────────┘
\`\`\`

## 快速体验

1. **安装依赖**
   \`\`\`bash
   npm install
   \`\`\`

2. **启动开发服务器**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **访问应用**
   \`\`\`
   http://localhost:5173
   \`\`\`
    `
  },
  'getting-started/quick-start': {
    id: 'quick-start',
    title: '快速开始',
    category: '入门指南',
    breadcrumb: ['文档', '入门指南', '快速开始'],
    updateTime: '2024-01-10',
    headings: [
      { id: 'prerequisites', text: '前置条件', level: 2 },
      { id: 'installation', text: '安装步骤', level: 2 },
      { id: 'configuration', text: '配置说明', level: 2 },
      { id: 'run', text: '启动运行', level: 2 }
    ],
    content: `
## 前置条件

在开始之前，请确保您的环境满足以下要求：

| 依赖 | 版本要求 | 说明 |
|------|----------|------|
| Node.js | >= 18.0.0 | JavaScript 运行时 |
| npm | >= 9.0.0 | 包管理器 |
| Git | >= 2.0.0 | 版本控制 |

## 安装步骤

### 克隆仓库

\`\`\`bash
git clone https://github.com/example/knowledge-base.git
cd knowledge-base
\`\`\`

### 安装依赖

\`\`\`bash
npm install
\`\`\`

## 配置说明

### 环境变量

创建 \`.env\` 文件：

\`\`\`env
# 开发环境配置
NODE_ENV=development
PORT=5173
API_URL=http://localhost:3000
\`\`\`

### 配置选项

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| port | number | 5173 | 服务端口 |
| debug | boolean | false | 调试模式 |
| cache | boolean | true | 启用缓存 |

## 启动运行

### 开发模式

\`\`\`bash
npm run dev
\`\`\`

### 生产构建

\`\`\`bash
npm run build
npm run preview
\`\`\`

### 访问地址

开发环境：\`http://localhost:5173\`

生产环境：\`http://your-domain.com\`
    `
  },
  'getting-started/installation': {
    id: 'installation',
    title: '安装部署',
    category: '入门指南',
    breadcrumb: ['文档', '入门指南', '安装部署'],
    updateTime: '2024-01-08',
    headings: [
      { id: 'manual', text: '手动安装', level: 2 },
      { id: 'docker', text: 'Docker 部署', level: 2 },
      { id: 'cloud', text: '云服务部署', level: 2 },
      { id: 'verification', text: '安装验证', level: 2 }
    ],
    content: `
## 手动安装

### 步骤一：下载源码

\`\`\`bash
git clone https://github.com/example/knowledge-base.git
cd knowledge-base
\`\`\`

### 步骤二：安装依赖

\`\`\`bash
npm install
\`\`\`

### 步骤三：构建项目

\`\`\`bash
npm run build
\`\`\`

### 步骤四：启动服务

\`\`\`bash
npm run start
\`\`\`

## Docker 部署

### 使用 Docker Compose

创建 \`docker-compose.yml\`：

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "5173:5173"
    environment:
      - NODE_ENV=production
      - PORT=5173
    volumes:
      - ./data:/app/data
\`\`\`

启动服务：

\`\`\`bash
docker-compose up -d
\`\`\`

## 云服务部署

### Vercel 部署

1. 登录 Vercel 控制台
2. 导入 GitHub 仓库
3. 配置构建命令：\`npm run build\`
4. 部署完成

### Netlify 部署

1. 登录 Netlify 控制台
2. 连接 GitHub 仓库
3. 设置构建命令：\`npm run build\`
4. 部署站点

## 安装验证

### 检查版本

\`\`\`bash
npm run version
\`\`\`

### 健康检查

\`\`\`bash
curl http://localhost:5173/health
\`\`\`

预期输出：

\`\`\`json
{
  "status": "healthy",
  "version": "1.0.0",
  "timestamp": "2024-01-15T10:30:00Z"
}
\`\`\`
    `
  },
  'getting-started/configuration': {
    id: 'configuration',
    title: '配置说明',
    category: '入门指南',
    breadcrumb: ['文档', '入门指南', '配置说明'],
    updateTime: '2024-01-05',
    headings: [
      { id: 'config-file', text: '配置文件', level: 2 },
      { id: 'env-variables', text: '环境变量', level: 2 },
      { id: 'advanced', text: '高级配置', level: 2 },
      { id: 'examples', text: '配置示例', level: 2 }
    ],
    content: `
## 配置文件

### 默认配置

配置文件位于 \`config/default.js\`：

\`\`\`javascript
module.exports = {
  // 服务配置
  server: {
    port: 5173,
    host: '0.0.0.0',
    timeout: 30000
  },
  
  // 数据库配置
  database: {
    host: 'localhost',
    port: 5432,
    name: 'knowledge_base'
  },
  
  // 日志配置
  logging: {
    level: 'info',
    format: 'json'
  }
}
\`\`\`

## 环境变量

### 优先级

1. 命令行参数
2. 环境变量
3. .env 文件
4. 默认配置

### 常用变量

| 变量名 | 说明 | 示例值 |
|--------|------|--------|
| NODE_ENV | 运行环境 | production |
| PORT | 服务端口 | 5173 |
| DB_HOST | 数据库地址 | localhost |
| DB_PORT | 数据库端口 | 5432 |

## 高级配置

### 安全配置

\`\`\`javascript
security: {
  // 跨域配置
  cors: {
    origin: ['https://example.com'],
    credentials: true
  },
  
  // JWT 配置
  jwt: {
    secret: 'your-secret-key',
    expiresIn: '7d'
  },
  
  // 限流配置
  rateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 100
  }
}
\`\`\`

## 配置示例

### 开发环境

\`\`\`env
NODE_ENV=development
PORT=5173
LOG_LEVEL=debug
\`\`\`

### 生产环境

\`\`\`env
NODE_ENV=production
PORT=8080
LOG_LEVEL=info
DB_HOST=db.example.com
\`\`\`
    `
  },
  'api-reference/users': {
    id: 'users',
    title: '用户接口',
    category: 'API 参考',
    breadcrumb: ['文档', 'API 参考', '用户接口'],
    updateTime: '2024-01-12',
    headings: [
      { id: 'overview', text: '接口概述', level: 2 },
      { id: 'endpoints', text: '接口列表', level: 2 },
      { id: 'parameters', text: '参数说明', level: 2 },
      { id: 'responses', text: '响应示例', level: 2 }
    ],
    content: `
## 接口概述

用户接口提供用户管理相关的操作，包括创建、查询、更新和删除用户。

### 基础路径

\`/api/v1/users\`

### 认证方式

所有接口需要在请求头中携带 JWT Token：

\`\`\`bash
Authorization: Bearer <your-token>
\`\`\`

## 接口列表

| 方法 | 路径 | 描述 |
|------|------|------|
| GET | /users | 获取用户列表 |
| GET | /users/:id | 获取单个用户 |
| POST | /users | 创建用户 |
| PUT | /users/:id | 更新用户 |
| DELETE | /users/:id | 删除用户 |

## 参数说明

### 查询参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| page | number | 否 | 页码，默认 1 |
| limit | number | 否 | 每页数量，默认 20 |
| role | string | 否 | 用户角色筛选 |
| status | string | 否 | 用户状态筛选 |

### 请求体示例

\`\`\`json
{
  "name": "张三",
  "email": "zhangsan@example.com",
  "role": "member",
  "status": "active"
}
\`\`\`

## 响应示例

### 成功响应

\`\`\`json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "usr_001",
    "name": "张三",
    "email": "zhangsan@example.com",
    "role": "member",
    "status": "active",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
\`\`\`

### 错误响应

\`\`\`json
{
  "code": 400,
  "message": "参数错误",
  "errors": [
    {
      "field": "email",
      "message": "邮箱格式不正确"
    }
  ]
}
\`\`\`
    `
  },
  'api-reference/projects': {
    id: 'projects',
    title: '项目接口',
    category: 'API 参考',
    breadcrumb: ['文档', 'API 参考', '项目接口'],
    updateTime: '2024-01-11',
    headings: [
      { id: 'overview', text: '接口概述', level: 2 },
      { id: 'create', text: '创建项目', level: 2 },
      { id: 'list', text: '项目列表', level: 2 },
      { id: 'detail', text: '项目详情', level: 2 }
    ],
    content: `
## 接口概述

项目接口用于管理项目资源，支持项目的创建、查询和管理。

### 基础路径

\`/api/v1/projects\`

## 创建项目

### 请求示例

\`\`\`bash
curl -X POST /api/v1/projects \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "新项目",
    "description": "项目描述",
    "status": "active"
  }'
\`\`\`

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | string | 是 | 项目名称 |
| description | string | 否 | 项目描述 |
| status | string | 否 | 项目状态 |

## 项目列表

### 请求示例

\`\`\`bash
curl -X GET /api/v1/projects \\
  -H "Authorization: Bearer <token>" \\
  -d 'page=1&limit=20'
\`\`\`

### 查询参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| page | number | 否 | 页码 |
| limit | number | 否 | 每页数量 |
| status | string | 否 | 状态筛选 |

## 项目详情

### 请求示例

\`\`\`bash
curl -X GET /api/v1/projects/:id \\
  -H "Authorization: Bearer <token>"
\`\`\`

### 响应示例

\`\`\`json
{
  "code": 200,
  "data": {
    "id": "proj_001",
    "name": "新项目",
    "description": "项目描述",
    "status": "active",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
\`\`\`
    `
  },
  'api-reference/webhooks': {
    id: 'webhooks',
    title: 'Webhook接口',
    category: 'API 参考',
    breadcrumb: ['文档', 'API 参考', 'Webhook接口'],
    updateTime: '2024-01-09',
    headings: [
      { id: 'overview', text: '接口概述', level: 2 },
      { id: 'events', text: '事件类型', level: 2 },
      { id: 'setup', text: '配置步骤', level: 2 },
      { id: 'security', text: '安全验证', level: 2 }
    ],
    content: `
## 接口概述

Webhook 接口用于接收系统事件通知，实现实时数据同步。

### 事件推送地址

\`POST /webhooks/events\`

## 事件类型

### 用户事件

| 事件名 | 触发时机 | 说明 |
|--------|----------|------|
| user.created | 用户创建 | 当新用户注册时触发 |
| user.updated | 用户更新 | 当用户信息变更时触发 |
| user.deleted | 用户删除 | 当用户被删除时触发 |

### 项目事件

| 事件名 | 触发时机 | 说明 |
|--------|----------|------|
| project.created | 项目创建 | 当新项目创建时触发 |
| project.updated | 项目更新 | 当项目信息变更时触发 |

## 配置步骤

### 步骤一：创建 Webhook

\`\`\`bash
curl -X POST /api/v1/webhooks \\
  -H "Authorization: Bearer <token>" \\
  -d '{
    "url": "https://your-server.com/webhook",
    "events": ["user.created", "project.created"],
    "secret": "your-secret-key"
  }'
\`\`\`

### 步骤二：验证配置

系统会发送验证请求到配置的 URL：

\`\`\`json
{
  "type": "webhook.verify",
  "token": "verification-token"
}
\`\`\`

## 安全验证

### 签名验证

每个请求都会包含签名头：

\`\`\`
X-Signature: sha256=abc123...
\`\`\`

验证方法：

\`\`\`javascript
const signature = crypto
  .createHmac('sha256', secret)
  .update(JSON.stringify(body))
  .digest('hex');
\`\`\`
    `
  },
  'api-reference/analytics': {
    id: 'analytics',
    title: '数据分析',
    category: 'API 参考',
    breadcrumb: ['文档', 'API 参考', '数据分析'],
    updateTime: '2024-01-07',
    headings: [
      { id: 'overview', text: '接口概述', level: 2 },
      { id: 'metrics', text: '指标类型', level: 2 },
      { id: 'queries', text: '查询示例', level: 2 },
      { id: 'charts', text: '图表数据', level: 2 }
    ],
    content: `
## 接口概述

数据分析接口提供数据统计和报表功能。

### 基础路径

\`/api/v1/analytics\`

## 指标类型

### 用户指标

| 指标 | 说明 | 示例 |
|------|------|------|
| active_users | 活跃用户数 | 1234 |
| new_users | 新增用户数 | 156 |
| retention | 用户留存率 | 78% |

### 业务指标

| 指标 | 说明 | 示例 |
|------|------|------|
| page_views | 页面浏览量 | 10000 |
| api_calls | API 调用次数 | 50000 |
| error_rate | 错误率 | 0.5% |

## 查询示例

### 获取用户统计

\`\`\`bash
curl -X GET /api/v1/analytics/users \\
  -H "Authorization: Bearer <token>" \\
  -d 'start_date=2024-01-01&end_date=2024-01-31'
\`\`\`

### 响应示例

\`\`\`json
{
  "code": 200,
  "data": {
    "active_users": 1234,
    "new_users": 156,
    "retention": 0.78,
    "period": "2024-01"
  }
}
\`\`\`

## 图表数据

### 获取趋势数据

\`\`\`bash
curl -X GET /api/v1/analytics/trends \\
  -H "Authorization: Bearer <token>" \\
  -d 'metric=active_users&period=7d'
\`\`\`

### 趋势响应

\`\`\`json
{
  "code": 200,
  "data": {
    "labels": ["1月1日", "1月2日", "1月3日"],
    "values": [100, 120, 115]
  }
}
\`\`\`
    `
  },
  'guides/authentication': {
    id: 'authentication',
    title: '认证授权',
    category: '使用指南',
    breadcrumb: ['文档', '使用指南', '认证授权'],
    updateTime: '2024-01-14',
    headings: [
      { id: 'overview', text: '认证方式', level: 2 },
      { id: 'jwt', text: 'JWT 认证', level: 2 },
      { id: 'api-key', text: 'API Key', level: 2 },
      { id: 'refresh', text: 'Token 刷新', level: 2 }
    ],
    content: `
## 认证方式

系统支持多种认证方式：

1. **JWT Token**：适用于前后端分离场景
2. **API Key**：适用于服务端调用
3. **OAuth 2.0**：适用于第三方应用集成

## JWT 认证

### 获取 Token

\`\`\`bash
curl -X POST /api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "password"
  }'
\`\`\`

### 响应示例

\`\`\`json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "def50200...",
  "expires_in": 3600
}
\`\`\`

### 使用 Token

\`\`\`bash
curl -X GET /api/v1/users \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."
\`\`\`

## API Key

### 创建 API Key

\`\`\`bash
curl -X POST /api/v1/auth/api-key \\
  -H "Authorization: Bearer <token>" \\
  -d '{
    "name": "My App",
    "expires_at": "2025-01-01"
  }'
\`\`\`

### 使用 API Key

\`\`\`bash
curl -X GET /api/v1/users \\
  -H "X-API-Key: your-api-key"
\`\`\`

## Token 刷新

### 刷新 Access Token

\`\`\`bash
curl -X POST /api/v1/auth/refresh \\
  -H "Content-Type: application/json" \\
  -d '{
    "refresh_token": "def50200..."
  }'
\`\`\`
    `
  },
  'guides/best-practices': {
    id: 'best-practices',
    title: '最佳实践',
    category: '使用指南',
    breadcrumb: ['文档', '使用指南', '最佳实践'],
    updateTime: '2024-01-13',
    headings: [
      { id: 'api-design', text: 'API 设计', level: 2 },
      { id: 'security', text: '安全实践', level: 2 },
      { id: 'performance', text: '性能优化', level: 2 },
      { id: 'monitoring', text: '监控告警', level: 2 }
    ],
    content: `
## API 设计

### RESTful 规范

1. **使用合适的 HTTP 方法**
   - GET：查询资源
   - POST：创建资源
   - PUT：更新资源
   - DELETE：删除资源

2. **统一的命名规范**
   - 使用复数名词：/users 而非 /user
   - 使用连字符：/api/v1/user-profile

3. **版本控制**
   \`\`\`
   /api/v1/users
   /api/v2/users
   \`\`\`

## 安全实践

### 输入验证

\`\`\`javascript
// 使用 Joi 进行参数验证
const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
\`\`\`

### 参数过滤

\`\`\`javascript
// 只允许指定字段
const allowedFields = ['name', 'email', 'role'];
const filteredBody = pick(req.body, allowedFields);
\`\`\`

### 防止 SQL 注入

\`\`\`javascript
// 使用参数化查询
const user = await db.query(
  'SELECT * FROM users WHERE id = $1',
  [userId]
);
\`\`\`

## 性能优化

### 缓存策略

\`\`\`javascript
// 使用 Redis 缓存
const cacheKey = \`user:\${userId}\`;
const cached = await redis.get(cacheKey);

if (cached) {
  return JSON.parse(cached);
}

const user = await db.getUser(userId);
await redis.set(cacheKey, JSON.stringify(user), 'EX', 3600);
\`\`\`

### 分页查询

\`\`\`javascript
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 20;
const offset = (page - 1) * limit;

const users = await db.query(
  'SELECT * FROM users LIMIT $1 OFFSET $2',
  [limit, offset]
);
\`\`\`

## 监控告警

### 日志记录

\`\`\`javascript
// 使用 Winston 记录日志
logger.info('User logged in', {
  userId: user.id,
  timestamp: new Date()
});
\`\`\`

### 错误追踪

\`\`\`javascript
// 使用 Sentry 捕获错误
Sentry.captureException(error);
\`\`\`
    `
  },
  'guides/troubleshooting': {
    id: 'troubleshooting',
    title: '故障排除',
    category: '使用指南',
    breadcrumb: ['文档', '使用指南', '故障排除'],
    updateTime: '2024-01-16',
    headings: [
      { id: 'common-errors', text: '常见错误', level: 2 },
      { id: 'debugging', text: '调试技巧', level: 2 },
      { id: 'logs', text: '日志分析', level: 2 },
      { id: 'support', text: '获取支持', level: 2 }
    ],
    content: `
## 常见错误

### 401 Unauthorized

**原因**：Token 无效或过期

**解决方案**：

1. 检查 Token 是否正确
2. 检查 Token 是否过期
3. 使用刷新 Token 获取新的 Access Token

\`\`\`bash
curl -X POST /api/v1/auth/refresh \\
  -d 'refresh_token=your-refresh-token'
\`\`\`

### 403 Forbidden

**原因**：权限不足

**解决方案**：

1. 检查用户角色权限
2. 确认 API Key 权限范围
3. 联系管理员提升权限

### 429 Too Many Requests

**原因**：请求频率超限

**解决方案**：

1. 降低请求频率
2. 实现请求重试机制
3. 联系管理员调整限流阈值

## 调试技巧

### 使用 Debug 模式

\`\`\`bash
NODE_ENV=development npm run dev
\`\`\`

### 开启详细日志

\`\`\`bash
LOG_LEVEL=debug npm run start
\`\`\`

### 使用 API 调试工具

推荐使用：
- Postman
- curl
- HTTPie

## 日志分析

### 日志格式

\`\`\`json
{
  "level": "error",
  "message": "Database connection failed",
  "timestamp": "2024-01-15T10:30:00Z",
  "stack": "Error: Connection refused..."
}
\`\`\`

### 日志位置

\`\`\`
logs/
├── app.log      # 应用日志
├── error.log    # 错误日志
└── access.log   # 访问日志
\`\`\`

## 获取支持

### 社区支持

- GitHub Issues: https://github.com/example/knowledge-base/issues
- 讨论区: https://github.com/example/knowledge-base/discussions

### 企业支持

\`\`\`
support@example.com
工作时间: 周一至周五 9:00-18:00
\`\`\`
    `
  },
  'guides/migration': {
    id: 'migration',
    title: '迁移指南',
    category: '使用指南',
    breadcrumb: ['文档', '使用指南', '迁移指南'],
    updateTime: '2024-01-06',
    headings: [
      { id: 'backup', text: '数据备份', level: 2 },
      { id: 'upgrade', text: '升级步骤', level: 2 },
      { id: 'migration', text: '数据迁移', level: 2 },
      { id: 'rollback', text: '回滚方案', level: 2 }
    ],
    content: `
## 数据备份

### 数据库备份

\`\`\`bash
pg_dump knowledge_base > backup.sql
\`\`\`

### 文件备份

\`\`\`bash
tar -czvf backup.tar.gz ./data ./uploads
\`\`\`

### 备份验证

\`\`\`bash
psql -d test_db -f backup.sql
\`\`\`

## 升级步骤

### 步骤一：检查版本

\`\`\`bash
npm run version
\`\`\`

### 步骤二：备份数据

\`\`\`bash
./scripts/backup.sh
\`\`\`

### 步骤三：更新代码

\`\`\`bash
git pull origin main
\`\`\`

### 步骤四：安装依赖

\`\`\`bash
npm install
\`\`\`

### 步骤五：执行迁移

\`\`\`bash
npm run migrate
\`\`\`

### 步骤六：重启服务

\`\`\`bash
npm run restart
\`\`\`

## 数据迁移

### 迁移脚本

\`\`\`bash
node scripts/migrate-data.js
\`\`\`

### 迁移配置

\`\`\`javascript
{
  source: {
    host: 'old-db.example.com',
    database: 'old_db'
  },
  target: {
    host: 'new-db.example.com',
    database: 'new_db'
  }
}
\`\`\`

## 回滚方案

### 停止服务

\`\`\`bash
npm run stop
\`\`\`

### 恢复数据

\`\`\`bash
psql -d knowledge_base -f backup.sql
\`\`\`

### 回滚代码

\`\`\`bash
git revert HEAD
\`\`\`

### 重启服务

\`\`\`bash
npm run start
\`\`\`
    `
  },
  'sdk/javascript': {
    id: 'javascript',
    title: 'JavaScript SDK',
    category: 'SDK 文档',
    breadcrumb: ['文档', 'SDK 文档', 'JavaScript'],
    updateTime: '2024-01-17',
    headings: [
      { id: 'installation', text: '安装', level: 2 },
      { id: 'quick-start', text: '快速开始', level: 2 },
      { id: 'api', text: 'API 参考', level: 2 },
      { id: 'examples', text: '使用示例', level: 2 }
    ],
    content: `
## 安装

### 使用 npm

\`\`\`bash
npm install @example/sdk
\`\`\`

### 使用 yarn

\`\`\`bash
yarn add @example/sdk
\`\`\`

### 使用 CDN

\`\`\`html
<script src="https://cdn.example.com/sdk/v1/index.js"></script>
\`\`\`

## 快速开始

### 初始化客户端

\`\`\`javascript
import { KnowledgeBase } from '@example/sdk';

const client = new KnowledgeBase({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.example.com'
});
\`\`\`

### 获取用户列表

\`\`\`javascript
const users = await client.users.list({
  page: 1,
  limit: 20
});

console.log(users.data);
\`\`\`

## API 参考

### 用户模块

\`\`\`javascript
// 获取用户
const user = await client.users.get('usr_001');

// 创建用户
const newUser = await client.users.create({
  name: '张三',
  email: 'zhangsan@example.com'
});

// 更新用户
const updated = await client.users.update('usr_001', {
  name: '李四'
});

// 删除用户
await client.users.delete('usr_001');
\`\`\`

### 项目模块

\`\`\`javascript
// 获取项目列表
const projects = await client.projects.list();

// 创建项目
const project = await client.projects.create({
  name: '新项目'
});
\`\`\`

## 使用示例

### 完整示例

\`\`\`javascript
import { KnowledgeBase } from '@example/sdk';

const client = new KnowledgeBase({
  apiKey: process.env.API_KEY
});

async function main() {
  // 获取用户列表
  const users = await client.users.list();
  
  // 遍历用户
  for (const user of users.data) {
    console.log(user.name, user.email);
  }
  
  // 创建新项目
  const project = await client.projects.create({
    name: 'Demo Project',
    description: '示例项目'
  });
  
  console.log('项目创建成功:', project.id);
}

main().catch(console.error);
\`\`\`
    `
  },
  'sdk/python': {
    id: 'python',
    title: 'Python SDK',
    category: 'SDK 文档',
    breadcrumb: ['文档', 'SDK 文档', 'Python'],
    updateTime: '2024-01-18',
    headings: [
      { id: 'installation', text: '安装', level: 2 },
      { id: 'quick-start', text: '快速开始', level: 2 },
      { id: 'api', text: 'API 参考', level: 2 },
      { id: 'examples', text: '使用示例', level: 2 }
    ],
    content: `
## 安装

### 使用 pip

\`\`\`bash
pip install knowledge-base-sdk
\`\`\`

### 使用 poetry

\`\`\`bash
poetry add knowledge-base-sdk
\`\`\`

## 快速开始

### 初始化客户端

\`\`\`python
from knowledge_base import KnowledgeBase

client = KnowledgeBase(
    api_key='your-api-key',
    base_url='https://api.example.com'
)
\`\`\`

### 获取用户列表

\`\`\`python
users = client.users.list(page=1, limit=20)

for user in users.data:
    print(user.name, user.email)
\`\`\`

## API 参考

### 用户模块

\`\`\`python
# 获取用户
user = client.users.get('usr_001')

# 创建用户
new_user = client.users.create(
    name='张三',
    email='zhangsan@example.com'
)

# 更新用户
updated = client.users.update(
    'usr_001',
    name='李四'
)

# 删除用户
client.users.delete('usr_001')
\`\`\`

### 项目模块

\`\`\`python
# 获取项目列表
projects = client.projects.list()

# 创建项目
project = client.projects.create(
    name='新项目'
)
\`\`\`

## 使用示例

### 完整示例

\`\`\`python
import os
from knowledge_base import KnowledgeBase

client = KnowledgeBase(
    api_key=os.getenv('API_KEY')
)

def main():
    # 获取用户列表
    users = client.users.list()
    
    # 遍历用户
    for user in users.data:
        print(f"{user.name} <{user.email}>")
    
    # 创建新项目
    project = client.projects.create(
        name='Demo Project',
        description='示例项目'
    )
    
    print(f'项目创建成功: {project.id}')

if __name__ == '__main__':
    main()
\`\`\`
    `
  },
  'sdk/go': {
    id: 'go',
    title: 'Go SDK',
    category: 'SDK 文档',
    breadcrumb: ['文档', 'SDK 文档', 'Go'],
    updateTime: '2024-01-19',
    headings: [
      { id: 'installation', text: '安装', level: 2 },
      { id: 'quick-start', text: '快速开始', level: 2 },
      { id: 'api', text: 'API 参考', level: 2 },
      { id: 'examples', text: '使用示例', level: 2 }
    ],
    content: `
## 安装

\`\`\`bash
go get github.com/example/knowledge-base-go
\`\`\`

## 快速开始

### 初始化客户端

\`\`\`go
package main

import (
    "github.com/example/knowledge-base-go"
)

func main() {
    client := knowledgebase.NewClient(
        "your-api-key",
        knowledgebase.WithBaseURL("https://api.example.com"),
    )
}
\`\`\`

### 获取用户列表

\`\`\`go
users, err := client.Users.List(&knowledgebase.ListUsersParams{
    Page:  1,
    Limit: 20,
})

if err != nil {
    log.Fatal(err)
}

for _, user := range users.Data {
    fmt.Printf("%s <%s>\n", user.Name, user.Email)
}
\`\`\`

## API 参考

### 用户模块

\`\`\`go
// 获取用户
user, err := client.Users.Get("usr_001")

// 创建用户
newUser, err := client.Users.Create(&knowledgebase.CreateUserParams{
    Name:  "张三",
    Email: "zhangsan@example.com",
})

// 更新用户
updated, err := client.Users.Update("usr_001", &knowledgebase.UpdateUserParams{
    Name: "李四",
})

// 删除用户
err := client.Users.Delete("usr_001")
\`\`\`

### 项目模块

\`\`\`go
// 获取项目列表
projects, err := client.Projects.List(nil)

// 创建项目
project, err := client.Projects.Create(&knowledgebase.CreateProjectParams{
    Name: "新项目",
})
\`\`\`

## 使用示例

### 完整示例

\`\`\`go
package main

import (
    "fmt"
    "log"
    "os"
    
    "github.com/example/knowledge-base-go"
)

func main() {
    client := knowledgebase.NewClient(os.Getenv("API_KEY"))
    
    // 获取用户列表
    users, err := client.Users.List(nil)
    if err != nil {
        log.Fatal(err)
    }
    
    // 遍历用户
    for _, user := range users.Data {
        fmt.Printf("%s <%s>\n", user.Name, user.Email)
    }
    
    // 创建新项目
    project, err := client.Projects.Create(&knowledgebase.CreateProjectParams{
        Name:        "Demo Project",
        Description: "示例项目",
    })
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Printf("项目创建成功: %s\n", project.ID)
}
\`\`\`
    `
  },
  'sdk/java': {
    id: 'java',
    title: 'Java SDK',
    category: 'SDK 文档',
    breadcrumb: ['文档', 'SDK 文档', 'Java'],
    updateTime: '2024-01-20',
    headings: [
      { id: 'installation', text: '安装', level: 2 },
      { id: 'quick-start', text: '快速开始', level: 2 },
      { id: 'api', text: 'API 参考', level: 2 },
      { id: 'examples', text: '使用示例', level: 2 }
    ],
    content: `
## 安装

### Maven

\`\`\`xml
<dependency>
    <groupId>com.example</groupId>
    <artifactId>knowledge-base-sdk</artifactId>
    <version>1.0.0</version>
</dependency>
\`\`\`

### Gradle

\`\`\`groovy
implementation 'com.example:knowledge-base-sdk:1.0.0'
\`\`\`

## 快速开始

### 初始化客户端

\`\`\`java
import com.example.knowledgebase.KnowledgeBase;
import com.example.knowledgebase.KnowledgeBaseClient;

public class App {
    public static void main(String[] args) {
        KnowledgeBaseClient client = new KnowledgeBaseClient.Builder()
            .apiKey("your-api-key")
            .baseUrl("https://api.example.com")
            .build();
    }
}
\`\`\`

### 获取用户列表

\`\`\`java
UserListResponse response = client.users().list(
    new ListUsersParams()
        .page(1)
        .limit(20)
);

for (User user : response.getData()) {
    System.out.println(user.getName() + " <" + user.getEmail() + ">");
}
\`\`\`

## API 参考

### 用户模块

\`\`\`java
// 获取用户
User user = client.users().get("usr_001");

// 创建用户
User newUser = client.users().create(
    new CreateUserParams()
        .name("张三")
        .email("zhangsan@example.com")
);

// 更新用户
User updated = client.users().update("usr_001",
    new UpdateUserParams()
        .name("李四")
);

// 删除用户
client.users().delete("usr_001");
\`\`\`

### 项目模块

\`\`\`java
// 获取项目列表
ProjectListResponse projects = client.projects().list();

// 创建项目
Project project = client.projects().create(
    new CreateProjectParams()
        .name("新项目")
);
\`\`\`

## 使用示例

### 完整示例

\`\`\`java
import com.example.knowledgebase.*;

public class Main {
    public static void main(String[] args) {
        KnowledgeBaseClient client = new KnowledgeBaseClient.Builder()
            .apiKey(System.getenv("API_KEY"))
            .build();
        
        try {
            // 获取用户列表
            UserListResponse users = client.users().list();
            
            // 遍历用户
            for (User user : users.getData()) {
                System.out.println(user.getName() + " <" + user.getEmail() + ">");
            }
            
            // 创建新项目
            Project project = client.projects().create(
                new CreateProjectParams()
                    .name("Demo Project")
                    .description("示例项目")
            );
            
            System.out.println("项目创建成功: " + project.getId());
            
        } catch (KnowledgeBaseException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`
    `
  },
  'about/changelog': {
    id: 'changelog',
    title: '更新日志',
    category: '关于',
    breadcrumb: ['文档', '关于', '更新日志'],
    updateTime: '2024-01-21',
    headings: [
      { id: 'v1.0.0', text: 'v1.0.0', level: 2 },
      { id: 'v0.9.0', text: 'v0.9.0', level: 2 },
      { id: 'v0.8.0', text: 'v0.8.0', level: 2 },
      { id: 'v0.7.0', text: 'v0.7.0', level: 2 }
    ],
    content: `
## v1.0.0

**发布日期**：2024年1月15日

### 新增功能

- ✅ 完整的用户管理系统
- ✅ 项目管理功能
- ✅ Webhook 事件通知
- ✅ 数据分析仪表板
- ✅ 多语言 SDK（JS、Python、Go、Java）
- ✅ 响应式设计支持

### 改进

- ⚡ 性能优化：API 响应速度提升 50%
- 🎨 UI 改进：全新设计风格
- 🔧 配置优化：支持环境变量配置

### 修复

- 🐛 修复用户创建时的邮箱验证问题
- 🐛 修复分页查询的边界情况

## v0.9.0

**发布日期**：2024年1月5日

### 新增功能

- ✅ 认证系统重构
- ✅ API Key 支持
- ✅ 日志系统升级
- ✅ 监控告警功能

### 改进

- ⚡ 缓存策略优化
- 🔧 配置文件重构

## v0.8.0

**发布日期**：2023年12月20日

### 新增功能

- ✅ 用户认证系统
- ✅ 项目管理模块
- ✅ 基础 API 接口

### 改进

- ⚡ 数据库查询优化
- 🔧 项目结构调整

## v0.7.0

**发布日期**：2023年12月1日

### 新增功能

- ✅ 项目初始化
- ✅ 基础架构搭建
- ✅ 开发环境配置

### 改进

- 🔧 代码规范制定
- 📝 文档初始化
    `
  },
  'about/contributing': {
    id: 'contributing',
    title: '贡献指南',
    category: '关于',
    breadcrumb: ['文档', '关于', '贡献指南'],
    updateTime: '2024-01-22',
    headings: [
      { id: 'code-of-conduct', text: '行为准则', level: 2 },
      { id: 'how-to-contribute', text: '贡献方式', level: 2 },
      { id: 'development', text: '开发流程', level: 2 },
      { id: 'pull-request', text: 'PR 规范', level: 2 }
    ],
    content: `
## 行为准则

### 我们的承诺

我们承诺为每个人提供一个友好、安全和包容的环境，无论年龄、性别、性取向、残疾、外貌、体型、种族或宗教。

### 行为规范

- 尊重他人，使用友善的语言
- 接受建设性的反馈
- 关注社区的共同利益
- 对他人保持同理心

### 不允许的行为

- 骚扰或歧视性言论
- 人身攻击或侮辱
- 不适当的图像或内容
- 未经授权的分享他人隐私

## 贡献方式

### 报告问题

1. 检查是否已有相关 Issue
2. 提供详细的问题描述
3. 附上复现步骤
4. 提供截图或日志

### 提交代码

1. Fork 仓库
2. 创建功能分支
3. 提交代码
4. 创建 Pull Request

### 改进文档

1. 发现文档问题
2. 提交修改建议
3. 参与文档翻译

## 开发流程

### 环境设置

\`\`\`bash
# 克隆仓库
git clone https://github.com/example/knowledge-base.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev
\`\`\`

### 代码规范

- 使用 ESLint 检查代码
- 遵循 Airbnb 风格指南
- 使用 Prettier 格式化代码

\`\`\`bash
# 代码检查
npm run lint

# 代码格式化
npm run format
\`\`\`

### 测试

\`\`\`bash
# 运行测试
npm run test

# 测试覆盖率
npm run coverage
\`\`\`

## PR 规范

### PR 标题

使用语义化的标题：

\`\`\`
feat: 添加用户管理功能
fix: 修复登录验证问题
docs: 更新 API 文档
refactor: 重构认证模块
\`\`\`

### PR 描述

包含以下内容：

1. 变更目的
2. 实现方案
3. 测试情况
4. 相关 Issue

### 审查流程

1. PR 创建后自动运行 CI
2. 需要至少一个审查者批准
3. 通过所有测试后合并
    `
  },
  'about/license': {
    id: 'license',
    title: '开源协议',
    category: '关于',
    breadcrumb: ['文档', '关于', '开源协议'],
    updateTime: '2024-01-23',
    headings: [
      { id: 'license-type', text: '协议类型', level: 2 },
      { id: 'permissions', text: '允许的行为', level: 2 },
      { id: 'conditions', text: '遵守条件', level: 2 },
      { id: 'limitations', text: '限制条款', level: 2 }
    ],
    content: `
## 协议类型

本项目采用 **MIT License** 开源协议。

## 允许的行为

根据 MIT 协议，您可以：

- ✅ 自由使用本软件
- ✅ 修改源代码
- ✅ 分发副本
- ✅ 用于商业用途
- ✅ 私用或商用

## 遵守条件

使用本软件时，您需要：

1. **保留版权声明**：在所有副本或重要部分中保留版权声明和许可声明

2. **包含许可文本**：包含 MIT 许可证的完整文本

## 限制条款

MIT 协议的限制：

- ❌ 不提供担保
- ❌ 不承担责任
- ❌ 不保证适用性

## 许可证全文

\`\`\`
MIT License

Copyright (c) 2024 Example Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
\`\`\`
    `
  }
}
