<template>
  <div class="home-container">
    <nav class="breadcrumb">
      <a href="/">文档</a>
      <span>/</span>
      <strong>简介</strong>
    </nav>

    <article class="article-content">
      <div class="article-header">
        <h1>简介</h1>
        <p class="article-desc">欢迎使用知识库文档系统！</p>
        <div class="article-meta">
          <span>📅 2024-01-15 更新</span>
          <span>✏️ 在 GitHub 上编辑</span>
        </div>
      </div>

      <div class="intro-content">
        <h2>什么是知识库</h2>
        <p>欢迎使用知识库文档系统！这是一个现代化的文档管理平台，帮助团队高效管理和分享技术文档。</p>

        <h3>核心价值</h3>
        <p>我们致力于提供：</p>
        <ul>
          <li><strong>结构化文档管理</strong>：支持多级分类、标签管理</li>
          <li><strong>实时协作</strong>：多人协同编辑，版本控制</li>
          <li><strong>全文搜索</strong>：快速定位所需内容</li>
          <li><strong>响应式设计</strong>：随时随地访问</li>
        </ul>

        <h2>主要功能</h2>

        <h3>文档管理</h3>
        <ul>
          <li>创建、编辑、删除文档</li>
          <li>支持 Markdown 格式</li>
          <li>文档版本历史</li>
          <li>权限控制</li>
        </ul>

        <h3>分类系统</h3>
        <ul>
          <li>多级分类嵌套</li>
          <li>自定义分类图标</li>
          <li>分类权限管理</li>
        </ul>

        <h3>搜索功能</h3>
        <ul>
          <li>全文检索</li>
          <li>关键词高亮</li>
          <li>搜索历史记录</li>
        </ul>

        <h2>系统架构</h2>
        <pre><code>┌─────────────────────────────────┐
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
└─────────────────────────────────┘</code></pre>

        <h2>快速体验</h2>
        <ol>
          <li>
            <strong>安装依赖</strong>
            <pre><code>npm install</code></pre>
          </li>
          <li>
            <strong>启动开发服务器</strong>
            <pre><code>npm run dev</code></pre>
          </li>
          <li>
            <strong>访问应用</strong>
            <pre><code>http://localhost:5173</code></pre>
          </li>
        </ol>

        <h2>文档分类</h2>
        <div class="category-grid">
          <div class="category-card">
            <div class="category-icon">📚</div>
            <h3>入门指南</h3>
            <p>快速了解系统的基本概念和使用方法</p>
            <ul class="category-links">
              <li><a href="/docs/getting-started/intro">简介</a></li>
              <li><a href="/docs/getting-started/quick-start">快速开始</a></li>
              <li><a href="/docs/getting-started/installation">安装部署</a></li>
              <li><a href="/docs/getting-started/configuration">配置说明</a></li>
            </ul>
          </div>

          <div class="category-card">
            <div class="category-icon">🔌</div>
            <h3>API 参考</h3>
            <p>完整的 API 接口文档</p>
            <ul class="category-links">
              <li><a href="/docs/api-reference/users">用户接口</a></li>
              <li><a href="/docs/api-reference/projects">项目接口</a></li>
              <li><a href="/docs/api-reference/webhooks">Webhook接口</a></li>
              <li><a href="/docs/api-reference/analytics">数据分析</a></li>
            </ul>
          </div>

          <div class="category-card">
            <div class="category-icon">📖</div>
            <h3>使用指南</h3>
            <p>深入了解系统功能和最佳实践</p>
            <ul class="category-links">
              <li><a href="/docs/guides/authentication">认证授权</a></li>
              <li><a href="/docs/guides/best-practices">最佳实践</a></li>
              <li><a href="/docs/guides/troubleshooting">故障排除</a></li>
              <li><a href="/docs/guides/migration">迁移指南</a></li>
            </ul>
          </div>

          <div class="category-card">
            <div class="category-icon">💻</div>
            <h3>SDK 文档</h3>
            <p>多语言 SDK 使用文档</p>
            <ul class="category-links">
              <li><a href="/docs/sdk/javascript">JavaScript</a></li>
              <li><a href="/docs/sdk/python">Python</a></li>
              <li><a href="/docs/sdk/go">Go</a></li>
              <li><a href="/docs/sdk/java">Java</a></li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-container {
  animation: fadeIn 0.4s ease both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.breadcrumb a {
  color: var(--text-muted);
  text-decoration: none;
}

.breadcrumb a:hover {
  color: var(--accent);
}

.breadcrumb strong {
  color: var(--text-primary);
}

.article-header {
  margin-bottom: 40px;
}

.article-header h1 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--text-primary);
}

.article-desc {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.article-meta {
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: var(--text-muted);
}

.intro-content {
  line-height: 1.7;
}

.intro-content h2 {
  font-size: 18px;
  margin: 32px 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
  color: var(--text-primary);
  scroll-margin-top: 80px;
}

.intro-content h3 {
  font-size: 16px;
  margin: 24px 0 12px;
  color: var(--text-primary);
}

.intro-content p {
  margin: 12px 0;
  color: var(--text-primary);
}

.intro-content ul, 
.intro-content ol {
  margin: 12px 0;
  padding-left: 24px;
  color: var(--text-primary);
}

.intro-content li {
  margin: 6px 0;
}

.intro-content pre {
  background: var(--bg-code);
  padding: 20px;
  border-radius: var(--radius);
  overflow-x: auto;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  color: #cdd6f4;
  margin: 16px 0;
}

.intro-content pre code {
  background: none;
  padding: 0;
  color: inherit;
}

.intro-content code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  background: var(--bg-secondary);
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 0.9em;
  color: var(--accent);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.category-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
}

.category-icon {
  font-size: 28px;
  margin-bottom: 12px;
}

.category-card h3 {
  font-size: 16px;
  margin: 0 0 8px;
  color: var(--text-primary);
}

.category-card p {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0 0 16px;
}

.category-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-links li {
  margin: 6px 0;
}

.category-links a {
  color: var(--accent);
  text-decoration: none;
  font-size: 14px;
}

.category-links a:hover {
  text-decoration: underline;
}
</style>
