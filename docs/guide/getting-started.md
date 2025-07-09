---
title: 快速开始
description: 快速了解如何安装和开始使用 @theojs/lumen 插件。本指南提供 pnpm、npm 和 yarn 安装命令，并概述了主题导入、首页定制、内容组件如公告栏、视频、评论等核心功能模块的入口。
---

# 快速开始

## 安装

你可以通过以下三种包管理器安装 `@theojs/lumen` 插件，选择你熟悉的方式即可

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

## 主要功能模块导航

以下是 `@theojs/lumen` 插件的核心功能模块入口，点击即可查看详细配置和用法

<BoxCube
  :items="[
    {
      name: '导入主题',
      link: 'theme',
      icon: { icon: 'heroicons:puzzle-piece-solid', color: '#ff9800' }
    },
    {
      name: '首页公告栏',
      link: 'notice',
      icon: { icon: 'heroicons-solid:megaphone', color: '#e74c3c' }
    },
    {
      name: '首页下划线',
      link: 'underline',
      icon: { icon: 'heroicons:paint-brush-solid', color: '#3498db' }
    },
    {
      name: '页脚配置',
      link: 'footer',
      icon: { icon: 'heroicons-solid:template', color: '#2ecc71' }
    },
    {
      name: '侧边栏链接',
      link: 'aside',
      icon: { icon: 'heroicons:bars-3-16-solid', color: '#9b59b6' }
    },
    {
      name: '视频组件',
      link: 'vid',
      icon: { icon: 'heroicons-solid:video-camera', color: '#f39c12' }
    },
    {
      name: '链接卡片',
      link: 'linkcard',
      icon: { icon: 'heroicons-solid:rectangle-group', color: '#1abc9c' }
    },
    {
      name: '图片描述',
      link: 'image-description',
      icon: { icon: 'heroicons-solid:photo', color: '#2ecc71' }
    },
    {
      name: '集成评论',
      link: 'comment',
      icon: { icon: 'heroicons-solid:chat', color: '#3498db' }
    },
    {
      name: '站点统计',
      link: 'analytics',
      icon: { icon: 'heroicons:chart-bar-square-solid', color: '#007bff' }
    }
  ]"
/>
