---
title: 快速开始
head:
  - - meta
    - name: description
      content: 快速了解如何安装和开始使用 @theojs/lumen 插件。本指南提供 pnpm、npm 和 yarn 安装命令，并概述了主题导入、首页定制、内容组件如公告栏、视频、评论等核心功能模块的入口。
  - - meta
    - name: keywords
      content: '@theojs/lumen 快速开始 安装教程 VitePress 主题插件 Vue组件 功能模块 pnpm npm yarn 导入主题 首页公告栏 侧边栏链接 视频组件 Twikoo评论 站点统计 theojs Lumen'
---

## 安装

::: code-group

```sh [pnpm]
pnpm add @theojs/lumen
```

```sh [npm]
npm install @theojs/lumen
```

```sh [yarn]
yarn add @theojs/lumen
```

:::

## 快速开始

<BoxCube
  :items="[
    {
      name: '导入主题',
      link: 'theme',
      icon: 'heroicons:puzzle-piece-solid',
      color: '#ff9800'
    },
    {
      name: '首页公告栏',
      link: 'Announcement',
      icon: 'heroicons-solid:megaphone',
      color: '#e74c3c'
    },
    {
      name: '首页下划线',
      link: 'HomeUnderline',
      icon: 'heroicons:paint-brush-solid',
      color: '#3498db'
    },
    {
      name: '页脚配置',
      link: 'HomeFooter',
      icon: 'heroicons-solid:template',
      color: '#2ecc71'
    },
    {
      name: '侧边栏链接',
      link: 'DocAsideLogo',
      icon: 'heroicons:bars-3-16-solid',
      color: '#9b59b6'
    },
    {
      name: '视频组件',
      link: 'DocVideoLink',
      icon: 'heroicons-solid:video-camera',
      color: '#f39c12'
    },
    {
      name: '链接卡片',
      link: 'LinkCard',
      icon: 'heroicons-solid:rectangle-group',
      color: '#1abc9c'
    },
    {
      name: '页面分享按钮',
      link: 'ShareButton',
      icon: 'heroicons-solid:share',
      color: '#007bff'
    },
    {
      name: '图片描述',
      link: 'Image-description',
      icon: 'heroicons-solid:photo',
      color: '#2ecc71'
    },
    {
      name: 'Twikoo 评论',
      link: 'DocTwikoo',
      icon: 'heroicons-solid:chat',
      color: '#3498db'
    },
    {
      name: '站点统计',
      link: 'analytics',
      icon: 'heroicons:chart-bar-square-solid',
      color: '#007bff'
    }
  ]"
/>
