---
title: "Docsify"
weight: 1
---

TODO

Docsify 是一款**零构建、轻量级、纯前端**的 Markdown 文档站点生成器，核心是**浏览器端实时渲染**，无需编译 HTML，只需一个 `index.html` + Markdown 文件即可快速搭建可访问的文档站。下面从定位、核心特性、工作原理、快速上手、配置与扩展、部署、对比选型等方面详细介绍。

---

## 一、核心定位与本质
- **一句话定位**：A magical documentation site generator（魔法般的文档站点生成器）。
- **核心设计**：**不生成静态 HTML**，在浏览器端通过 JavaScript 实时加载、解析 Markdown 文件并渲染为网页。
- **技术栈**：基于 Vue 运行时、原生 JS 实现，压缩后仅 ~21KB，轻量高效。
- **适用场景**：
  - 项目 README、技术文档、API 手册
  - 团队知识库、内部 Wiki
  - 个人博客、学习笔记
  - 开源项目文档（如 Vue、Vite 等早期文档）

---

## 二、核心特性（优势）
### 1. 零构建、纯动态渲染（最大亮点）
- 无需 `npm run build`、无需 Webpack/Vite，**写完 Markdown 直接发布**。
- 本地预览：修改 `.md` 文件后刷新浏览器即可生效，**所见即所得**。
- 无编译产物，仅维护 Markdown 源文件，维护成本极低。

### 2. 极简轻量
- 核心库极小（~21KB gzipped），加载速度快。
- 仅需一个 `index.html` 入口 + Markdown 目录，**零配置即可启动**。

### 3. 内置强大功能
- **智能全文搜索**：无需后端，自动索引所有文档，支持模糊匹配。
- **多主题**：内置 `vue.css`、`dark.css`、`pure.css`、`dolphin.css` 等主题。
- **Emoji 支持**：直接在 Markdown 中写 `:smile:` 即可渲染。
- **单页应用（SPA）路由**：无刷新跳转，体验流畅。
- **兼容 IE11**：对老旧浏览器友好。
- **服务端渲染（SSR）**：支持预渲染以优化 SEO。

### 4. 灵活扩展（插件生态）
- 提供插件 API，可自定义功能。
- 常用插件：
  - `docsify-search`：全文搜索（内置）
  - `docsify-pagination`：分页
  - `docsify-tabs`：标签页
  - `docsify-copy-code`：代码块一键复制
  - `docsify-katex`：数学公式
  - `docsify-sidebar-collapse`：侧边栏折叠

### 5. 部署极简
- 支持 GitHub Pages、Gitee Pages、Vercel、Netlify、Nginx、Caddy 等**纯静态托管**。
- 只需上传 `index.html` + Markdown 文件，无需服务器端逻辑。

---

## 三、工作原理（简要）
1. 浏览器加载 `index.html`，引入 `docsify.min.js`。
2. Docsify 读取配置（`window.$docsify`），加载侧边栏/导航栏配置文件（`_sidebar.md`、`_navbar.md`）。
3. 根据 URL 路由（如 `/#/quickstart`），加载对应的 `quickstart.md` 文件。
4. 实时解析 Markdown 为 HTML，渲染到页面，并生成目录、代码高亮、搜索索引等。

---

## 四、快速上手（5 分钟搭建）
### 方式一：纯 CDN（零依赖，推荐）
1. 创建项目目录，新建 `index.html`：
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="UTF-8">
     <title>我的文档站</title>
     <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
     <meta name="description" content="Description">
     <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
     <!-- 引入主题 -->
     <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/vue.css">
   </head>
   <body>
     <div id="app"></div>
     <script>
       window.$docsify = {
         name: '我的文档站',
         repo: 'https://github.com/xxx/xxx', // 可选，右上角仓库链接
         loadSidebar: true, // 启用侧边栏
         loadNavbar: true, // 启用顶部导航
         search: 'auto', // 启用搜索
       }
     </script>
     <!-- 引入 docsify -->
     <script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
     <!-- 引入搜索插件 -->
     <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>
   </body>
   </html>
   ```
2. 新建 `README.md`（首页）：
   ```markdown
   # 欢迎使用 Docsify
   这是我的第一个文档站点。
   ```
3. 新建 `_sidebar.md`（侧边栏）：
   ```markdown
   - [首页](README.md)
   - [快速开始](quickstart.md)
   - [高级配置](advanced.md)
   ```
4. 本地预览：
   ```bash
   # 安装本地静态服务器（可选）
   npm install -g serve
   # 启动服务
   serve .
   # 访问 http://localhost:3000
   ```

### 方式二：使用 CLI（适合本地开发）
```bash
# 全局安装 CLI
npm i docsify-cli -g
# 初始化项目
docsify init ./docs
# 本地预览
docsify serve ./docs
# 访问 http://localhost:3000
```

---

## 五、核心配置与文件结构
### 1. 关键配置项（`window.$docsify`）
```javascript
window.$docsify = {
  name: '文档名称',
  repo: 'https://github.com/xxx', // 右上角仓库链接
  loadSidebar: true, // 加载 _sidebar.md
  loadNavbar: true, // 加载 _navbar.md
  coverpage: true, // 启用封面页 _coverpage.md
  search: { // 搜索配置
    maxAge: 86400000, // 缓存 1 天
    paths: 'auto',
    placeholder: '搜索...'
  },
  themeColor: '#3eaf7c', // 主题色
  auto2top: true, // 切换页面自动回到顶部
  plugins: [ // 插件列表
    function (hook, vm) {
      // 自定义插件逻辑
    }
  ]
}
```

### 2. 约定式文件（核心）
- `index.html`：入口文件，配置与脚本引入。
- `README.md`：默认首页（`/` 路由）。
- `_sidebar.md`：侧边栏导航（需 `loadSidebar: true`）。
- `_navbar.md`：顶部导航（需 `loadNavbar: true`）。
- `_coverpage.md`：封面页（需 `coverpage: true`）。
- 其他 `.md` 文件：对应路由页面（如 `guide.md` → `/#/guide`）。

---

## 六、部署方式（一键上线）
### 1. GitHub Pages（最常用）
1. 将项目推送到 GitHub 仓库。
2. 进入仓库 → Settings → Pages。
3. Source 选择 `Deploy from a branch`，分支选 `main`，目录选 `/(root)`。
4. 保存后，几分钟内即可通过 `https://<username>.github.io/<repo>` 访问。

### 2. Vercel / Netlify
- 直接导入 GitHub 仓库，无需配置，自动部署。
- 支持自定义域名、HTTPS。

### 3. 自建服务器（Nginx）
```nginx
server {
  listen 80;
  server_name docs.example.com;
  root /path/to/your/docs;
  index index.html;

  # 解决 SPA 路由刷新 404
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## 七、与同类工具对比（选型参考）
| 特性 | Docsify | VuePress | Hexo | GitBook |
|---|---|---|---|---|
| **构建方式** | 浏览器实时渲染 | 预编译 HTML | 预编译 HTML | 预编译 HTML |
| **是否需要 build** | ❌ 不需要 | ✅ 需要 | ✅ 需要 | ✅ 需要 |
| **核心优势** | 零构建、极简、轻量 | Vue 生态、功能强大 | 插件丰富、静态博客 | 文档友好、多语言 |
| **上手难度** | ⭐⭐⭐⭐⭐（极低） | ⭐⭐⭐（中等） | ⭐⭐⭐⭐（较高） | ⭐⭐⭐（中等） |
| **适用场景** | 快速文档、知识库 | 大型项目文档、博客 | 个人博客、静态站 | 团队文档、电子书 |
| **体积** | 极小（~21KB） | 较大 | 大 | 中 |

---

## 八、总结与最佳实践
- **Docsify 最适合**：追求**极简、快速、零维护**的文档场景，尤其适合个人/小团队快速搭建技术文档、知识库。
- **最佳实践**：
  - 用 `_sidebar.md` 组织清晰的文档结构。
  - 开启 `search` 提升可检索性。
  - 选择合适主题，保持风格统一。
  - 配合 GitHub Pages 实现自动部署。
  - 复杂场景可通过插件扩展功能。

---

需要我给你生成一个可直接复制的**完整 Docsify 配置模板**（含侧边栏、导航、搜索、代码高亮、复制按钮），你只需替换内容即可上线吗？