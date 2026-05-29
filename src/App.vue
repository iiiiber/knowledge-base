<template>
  <div class="app-container">
    <header class="header">
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <a href="/" class="header-logo">
        <div class="logo-icon">K</div>
        <span class="logo-text">知识库</span>
      </a>
      
      <div class="header-search" @click="openSearch">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          v-model="searchQuery"
          placeholder="搜索文档..." 
          readonly
        >
        <span class="search-kbd">⌘K</span>
      </div>
      
      <div class="header-right">
        <button class="version-badge">
          <span class="dot"></span>
          v1.0.0
        </button>
        <button class="icon-btn desktop-only" title="GitHub">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </button>
        <button class="icon-btn" title="Theme" @click="toggleTheme">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-overlay" v-show="showMobileMenu" @click="toggleMobileMenu"></div>

    <div class="layout">
      <aside class="sidebar" :class="{ 'mobile-open': showMobileMenu }">
        <div class="mobile-header desktop-only">
          <span>导航</span>
        </div>
        <div 
          v-for="category in categories" 
          :key="category.id" 
          class="sidebar-section"
        >
          <div 
            class="sidebar-title" 
            @click="toggleCategory(category.id)"
          >
            {{ category.icon }} {{ category.title }}
            <span class="expand-icon">{{ expandedCategories.includes(category.id) ? '▼' : '▶' }}</span>
          </div>
          <ul class="sidebar-nav" v-show="expandedCategories.includes(category.id)">
            <li v-for="item in category.children" :key="item.id">
              <a 
                :href="item.path" 
                :class="{ active: currentPath === item.path }"
                @click="handleNavClick(item.path)"
              >
                <span v-if="item.method" :class="['method-badge', item.method.toLowerCase()]">
                  {{ item.method }}
                </span>
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <main class="main">
        <router-view @update-headings="handleUpdateHeadings" />
      </main>

      <aside class="on-this-page desktop-only">
        <div class="otp-title">On This Page</div>
        <ul class="otp-links">
          <li v-for="heading in currentHeadings" :key="heading.id">
            <a 
              :href="'#' + heading.id" 
              :class="{ active: activeHeading === heading.id }"
              @click="scrollToHeading(heading.id)"
            >
              {{ heading.text }}
            </a>
          </li>
        </ul>
      </aside>
    </div>

    <!-- Search Modal -->
    <div class="search-modal" v-show="showSearchModal" @click.self="closeSearch">
      <div class="search-container">
        <div class="search-header">
          <input 
            ref="searchInput"
            type="text" 
            v-model="searchQuery"
            placeholder="搜索文档标题、内容..."
            @keyup.enter="performSearch"
            @keyup.esc="closeSearch"
          >
          <button class="search-close" @click="closeSearch">✕</button>
        </div>
        
        <div class="search-results" v-if="searchResults.length > 0">
          <div 
            v-for="result in searchResults" 
            :key="result.id"
            class="search-result-item"
            @click="navigateToResult(result)"
          >
            <div class="result-category">{{ result.category }}</div>
            <div class="result-title" v-html="highlightText(result.title, searchQuery)"></div>
            <div class="result-excerpt" v-html="highlightText(result.excerpt, searchQuery)"></div>
          </div>
        </div>
        
        <div class="search-empty" v-else-if="searchQuery.length > 0">
          <p>未找到相关文档</p>
          <p class="search-hint">尝试其他关键词</p>
        </div>
        
        <div class="search-tips" v-else>
          <p>输入关键词开始搜索</p>
          <div class="shortcuts">
            <span><kbd>Enter</kbd> 搜索</span>
            <span><kbd>Esc</kbd> 关闭</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { categories, articles } from './data/docs'

const searchQuery = ref('')
const expandedCategories = ref(['getting-started', 'api-reference', 'guides', 'sdk', 'about'])
const currentPath = ref('')
const currentHeadings = ref([])
const activeHeading = ref('')
const showMobileMenu = ref(false)
const showSearchModal = ref(false)
const searchInput = ref(null)

const route = useRoute()

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  
  const query = searchQuery.value.toLowerCase()
  const results = []
  
  for (const [key, article] of Object.entries(articles)) {
    const titleMatch = article.title.toLowerCase().includes(query)
    const contentMatch = article.content.toLowerCase().includes(query)
    const categoryMatch = article.category.toLowerCase().includes(query)
    
    if (titleMatch || contentMatch || categoryMatch) {
      let excerpt = ''
      if (contentMatch) {
        const content = article.content.replace(/[#*`|\[\]]/g, '').replace(/\n/g, ' ')
        const index = content.toLowerCase().indexOf(query)
        const start = Math.max(0, index - 30)
        const end = Math.min(content.length, index + query.length + 50)
        excerpt = (start > 0 ? '...' : '') + content.slice(start, end) + (end < content.length ? '...' : '')
      }
      
      results.push({
        id: key,
        title: article.title,
        category: article.category,
        path: `/docs/${key}`,
        excerpt: excerpt || article.content.slice(0, 100).replace(/[#*`]/g, '')
      })
    }
  }
  
  return results.slice(0, 10)
})

const highlightText = (text, query) => {
  if (!query.trim() || !text) return text
  const regex = new RegExp(`(${query})`, 'gi')
  return text.replace(regex, '<mark>$1</mark>')
}

const handleUpdateHeadings = (headings) => {
  currentHeadings.value = headings
}

const toggleCategory = (categoryId) => {
  const index = expandedCategories.value.indexOf(categoryId)
  if (index > -1) {
    expandedCategories.value.splice(index, 1)
  } else {
    expandedCategories.value.push(categoryId)
  }
}

const updateActivePath = (path) => {
  currentPath.value = path
}

const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  if (showMobileMenu.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const openSearch = () => {
  showSearchModal.value = true
  nextTick(() => {
    searchInput.value?.focus()
  })
}

const closeSearch = () => {
  showSearchModal.value = false
  searchQuery.value = ''
}

const performSearch = () => {
  if (searchResults.value.length > 0) {
    navigateToResult(searchResults.value[0])
  }
}

const navigateToResult = (result) => {
  window.location.href = result.path
  closeSearch()
  showMobileMenu.value = false
  document.body.style.overflow = ''
}

const handleNavClick = (path) => {
  updateActivePath(path)
  showMobileMenu.value = false
  document.body.style.overflow = ''
}

const handleKeyboard = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    openSearch()
  }
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    showMobileMenu.value = false
    document.body.style.overflow = ''
  }
}

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
}

const handleScroll = () => {
  const headings = document.querySelectorAll('h2[id], h3[id]')
  let current = ''
  
  headings.forEach((heading) => {
    const rect = heading.getBoundingClientRect()
    if (rect.top <= 100) {
      current = heading.id
    }
  })
  
  activeHeading.value = current
}

watch(() => route.path, (newPath) => {
  currentPath.value = newPath
}, { immediate: true })

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeyboard)
  window.addEventListener('resize', handleResize)
  currentPath.value = route.path
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeyboard)
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
:root {
  --bg: #ffffff;
  --bg-secondary: #f7f8fc;
  --bg-code: #1e1e2e;
  --bg-sidebar: #f0f1f7;
  --border: #e2e4ef;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;
  --accent: #6366f1;
  --accent-light: #eef2ff;
  --accent-hover: #4f46e5;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --method-get: #10b981;
  --method-post: #3b82f6;
  --method-put: #f59e0b;
  --method-delete: #ef4444;
  --sidebar-width: 280px;
  --header-height: 60px;
  --radius: 8px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--text-primary);
  line-height: 1.6;
}

.app-container {
  min-height: 100vh;
}

.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--header-height);
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index: 100;
  gap: 12px;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mobile-menu-btn span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  transition: all 0.3s;
}

.header-logo {
  font-weight: 700;
  font-size: 18px;
  color: var(--text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.logo-icon {
  width: 28px; height: 28px;
  background: var(--accent);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
}

.logo-text {
  display: none;
}

.header-search {
  flex: 1;
  max-width: 480px;
  position: relative;
  cursor: pointer;
}

.header-search input {
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 14px;
  background: var(--bg-secondary);
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
  cursor: pointer;
}

.header-search input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
  background: var(--bg);
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 14px;
}

.search-kbd {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1px 5px;
  font-size: 11px;
  color: var(--text-muted);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.version-badge {
  display: none;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border: 1px solid var(--border);
  border-radius: 20px;
  font-size: 13px;
  color: var(--text-secondary);
  background: var(--bg);
  cursor: pointer;
  transition: all 0.15s;
}

.version-badge:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.version-badge .dot {
  width: 8px; height: 8px;
  background: var(--success);
  border-radius: 50%;
}

.icon-btn {
  width: 36px; height: 36px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.15s;
}

.icon-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.mobile-overlay {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 90;
}

.layout {
  display: flex;
  padding-top: var(--header-height);
  min-height: 100vh;
}

.sidebar {
  position: fixed;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background: var(--bg-sidebar);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  padding: 20px 0;
  z-index: 95;
  transition: transform 0.3s;
}

.mobile-header {
  display: none;
  padding: 0 16px 16px;
  font-weight: 600;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
  margin-bottom: 16px;
}

.sidebar-section {
  margin-bottom: 24px;
}

.sidebar-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  padding: 0 16px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.expand-icon {
  font-size: 8px;
  color: var(--text-muted);
}

.sidebar-nav {
  list-style: none;
}

.sidebar-nav a {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px;
  font-size: 13.5px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 0;
  transition: all 0.12s;
  position: relative;
}

.sidebar-nav a:hover {
  color: var(--text-primary);
  background: rgba(0,0,0,0.04);
}

.sidebar-nav a.active {
  color: var(--accent);
  background: var(--accent-light);
  font-weight: 500;
}

.sidebar-nav a.active::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 2px;
  background: var(--accent);
  border-radius: 0 2px 2px 0;
}

.method-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 3px;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.method-badge.get { background: #d1fae5; color: #065f46; }
.method-badge.post { background: #dbeafe; color: #1e40af; }
.method-badge.put { background: #fef3c7; color: #92400e; }
.method-badge.delete { background: #fee2e2; color: #991b1b; }

.main {
  margin-left: var(--sidebar-width);
  flex: 1;
  padding: 40px 48px;
  max-width: 900px;
}

/* 文章内容全局样式 */
.main h1 { 
  font-size: 28px; 
  margin: 24px 0 16px; 
  color: var(--text-primary);
}

.main h2 { 
  font-size: 18px; 
  margin: 32px 0 16px; 
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
  color: var(--text-primary);
}

.main h3 { 
  font-size: 16px; 
  margin: 24px 0 12px; 
  color: var(--text-primary);
}

.main p { 
  margin: 12px 0; 
  color: var(--text-primary);
}

.main ul, 
.main ol {
  margin: 12px 0;
  padding-left: 24px;
}

.main li { 
  margin: 6px 0; 
  color: var(--text-primary);
}

.main code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  background: var(--bg-secondary);
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 0.9em;
  color: var(--accent);
}

.main pre {
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

.main pre code {
  background: none;
  padding: 0;
  color: inherit;
}

.main table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 14px;
}

.main th, 
.main td {
  padding: 10px 14px;
  border: 1px solid var(--border);
  text-align: left;
}

.main th {
  background: var(--bg-secondary);
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.main blockquote {
  border-left: 3px solid var(--accent);
  padding-left: 16px;
  margin: 16px 0;
  color: var(--text-secondary);
  font-style: italic;
}

.main strong {
  font-weight: 600;
  color: var(--text-primary);
}

.on-this-page {
  position: fixed;
  top: var(--header-height);
  right: 24px;
  width: 200px;
  padding: 20px 0;
  display: none;
}

@media (min-width: 1200px) {
  .on-this-page { display: block; }
}

.otp-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.otp-links {
  list-style: none;
}

.otp-links a {
  display: block;
  padding: 4px 0;
  font-size: 12.5px;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.12s;
  border-left: 2px solid transparent;
  padding-left: 10px;
}

.otp-links a:hover, .otp-links a.active {
  color: var(--accent);
  border-left-color: var(--accent);
}

/* Search Modal */
.search-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}

.search-container {
  background: var(--bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  width: 90%;
  max-width: 600px;
  max-height: 70vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.search-header {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--border);
}

.search-header input {
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-primary);
}

.search-close {
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-close:hover {
  color: var(--text-primary);
}

.search-results {
  overflow-y: auto;
  max-height: 60vh;
}

.search-result-item {
  padding: 16px;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: background 0.12s;
}

.search-result-item:hover {
  background: var(--bg-secondary);
}

.result-category {
  font-size: 11px;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 4px;
}

.result-title {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.result-excerpt {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}

mark {
  background: var(--accent-light);
  color: var(--accent);
  padding: 0 2px;
  border-radius: 2px;
}

.search-empty, .search-tips {
  padding: 40px;
  text-align: center;
  color: var(--text-secondary);
}

.search-hint {
  font-size: 13px;
  margin-top: 8px;
  color: var(--text-muted);
}

.shortcuts {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;
  font-size: 13px;
}

kbd {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 12px;
  margin-right: 4px;
}

/* Responsive Styles */
@media (max-width: 767px) {
  .mobile-menu-btn {
    display: flex;
  }
  
  .header {
    gap: 8px;
  }
  
  .logo-text {
    display: inline;
  }
  
  .header-search {
    max-width: none;
    flex: 1;
  }
  
  .search-kbd {
    display: none;
  }
  
  .version-badge {
    display: flex;
  }
  
  .desktop-only {
    display: none !important;
  }
  
  .sidebar {
    transform: translateX(-100%);
    width: 85%;
    max-width: 300px;
    box-shadow: var(--shadow-md);
  }
  
  .sidebar.mobile-open {
    transform: translateX(0);
  }
  
  .mobile-overlay {
    display: block;
  }
  
  .main {
    margin-left: 0;
    padding: 24px 16px;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .desktop-only {
    display: none !important;
  }
  
  .main {
    margin-left: var(--sidebar-width);
  }
}

.dark {
  --bg: #1a1a2e;
  --bg-secondary: #16213e;
  --bg-code: #0d1117;
  --bg-sidebar: #0f0f23;
  --border: #3d4356;
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --accent-light: rgba(99, 102, 241, 0.15);
}
</style>
