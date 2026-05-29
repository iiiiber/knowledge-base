<template>
  <div class="article-container">
    <nav class="breadcrumb">
      <a href="/">文档</a>
      <span>/</span>
      <a :href="`/docs/${category}`">{{ article?.category }}</a>
      <span>/</span>
      <strong>{{ article?.title }}</strong>
    </nav>

    <article class="article-content">
      <div v-if="article">
        <div class="article-header">
          <h1>{{ article.title }}</h1>
          <p class="article-desc">这里是文章的简要描述信息。</p>
          <div class="article-meta">
            <span>📅 {{ article.updateTime }} 更新</span>
            <span>✏️ 在 GitHub 上编辑</span>
          </div>
        </div>

        <div v-html="renderedContent"></div>
      </div>

      <div v-else>
        <div class="not-found">
          <h2>文档未找到</h2>
          <p>抱歉，您访问的文档不存在。</p>
          <a href="/" class="back-link">返回首页</a>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { articles } from '../data/docs'

const route = useRoute()

const category = ref('')
const articleId = ref('')
const article = ref(null)
const emit = defineEmits(['update-headings'])

const renderedContent = computed(() => {
  if (!article.value) return ''
  
  let content = article.value.content
  
  content = content.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const language = lang || 'text'
    return `<pre><code class="language-${language}">${escapeHtml(code.trim())}</code></pre>`
  })
  
  content = content.replace(/`([^`]+)`/g, '<code>$1</code>')
  
  content = content.replace(/^### (.+)$/gm, '<h3 id="$1">$1</h3>')
  
  content = content.replace(/^## (.+)$/gm, '<h2 id="$1">$1</h2>')
  
  content = content.replace(/^# (.+)$/gm, '<h1>$1</h1>')
  
  content = content.replace(/^\* (.+)$/gm, '<li>$1</li>')
  content = content.replace(/^(\d+)\. (.+)$/gm, '<li>$1. $2</li>')
  content = content.replace(/(<li>[\s\S]*?<\/li>)+/g, '<ul>$1</ul>')
  
  content = content.replace(/^\|(.+)\|$/gm, (match) => {
    if (match.includes('---')) {
      return '<tr>' + match.split('|').filter(c => c.trim()).map(() => '<th></th>').join('') + '</tr>'
    }
    return '<tr>' + match.split('|').filter(c => c.trim()).map(cell => `<td>${cell.trim()}</td>`).join('') + '</tr>'
  })
  content = content.replace(/(<tr>[\s\S]*?<\/tr>)+/g, '<table><tbody>$1</tbody></table>')
  
  content = content.replace(/^(?!<)([\s\S]*?)(?=\n\n|\n<h|$)/gm, (match) => {
    if (!match.trim() || match.startsWith('<') || match.match(/^\d+\./) || match.match(/^\*/)) return match
    return `<p>${match.trim()}</p>`
  })
  
  return content
})

const escapeHtml = (str) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const loadArticle = () => {
  category.value = route.params.category
  articleId.value = route.params.article
  
  const key = `${category.value}/${articleId.value}`
  article.value = articles[key] || null
  
  if (article.value && article.value.headings) {
    emit('update-headings', article.value.headings)
  } else {
    emit('update-headings', [])
  }
}

onMounted(() => {
  loadArticle()
})

watch(() => route.params, () => {
  loadArticle()
})
</script>

<style scoped>
.article-container {
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

.article-content :deep(h2) {
  scroll-margin-top: 80px;
}

.article-content :deep(h3) {
  scroll-margin-top: 80px;
}

.not-found {
  text-align: center;
  padding: 60px 20px;
}

.not-found h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.not-found p {
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.back-link {
  display: inline-block;
  padding: 10px 20px;
  background: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: var(--radius);
  font-weight: 500;
}

.back-link:hover {
  background: var(--accent-hover);
}
</style>
