---
title: Hextra 主题
layout: hextra-home
---

<div class="hx:flex hx:flex-col hx:justify-center hx:items-center hx:min-h-[calc(100vh-200px)]">
  <div class="hx:mt-6 hx:mb-6">
  {{< hextra/hero-headline >}}
    寒江雪的<br class="hx:sm:block hx:hidden" />知识体系搭建计划
  {{< /hextra/hero-headline >}}
  </div>

  <div class="hx:mb-12">
  {{< hextra/hero-subtitle >}}
    构建个人技术知识库，记录寒江雪的学习与成长
  {{< /hextra/hero-subtitle >}}
  </div>

  <div class="hx:mb-12">
  {{< hextra/hero-button text="查看知识图谱" link="/web/languages/" >}}
  </div>

  {{< hextra/feature-grid >}}
    {{< hextra/feature-card
      title="编程语言"
      subtitle="只需使用 Markdown 进行编辑。多样的 Shortcode 组件开箱即用。"
      link="/web/languages/"
    >}}
    {{< hextra/feature-card
      title="CS 基础"
      subtitle="内置 FlexSearch 全文搜索，无需额外设置。"
      link="/web/cs-basics/"
    >}}
    {{< hextra/feature-card
      title="行业方向"
      subtitle="包含 云原生&DevOps 和 AI 。"
      link="/web/industry/"
    >}}
  {{< /hextra/feature-grid >}}

  <div class="hx:mt-12 hx:flex hx:flex-wrap hx:justify-center hx:gap-6">
    <a href="https://cold-rivers-snow.github.io/" target="_blank" class="hx:text-gray-600 dark:hx:text-gray-400 hover:hx:text-primary-600 dark:hover:hx:text-primary-400 hx:font-medium hx:transition-colors">
      {{< icon name="cursor-click" attributes="height=20" >}} 博客
    </a>
    <a href="https://github.com/cold-rivers-snow/web" target="_blank" class="hx:text-gray-600 dark:hx:text-gray-400 hover:hx:text-primary-600 dark:hover:hx:text-primary-400 hx:font-medium hx:transition-colors">
      {{< icon name="github" attributes="height=20" >}} GitHub
    </a>
    <a href="/web/about/" class="hx:text-gray-600 dark:hx:text-gray-400 hover:hx:text-primary-600 dark:hover:hx:text-primary-400 hx:font-medium hx:transition-colors">
      {{< icon name="user" attributes="height=20" >}} 关于
    </a>
  </div>
</div>


