---
public: false
---

# VuePress Setup Guide

**Published:** November 28, 2025

Setting up VuePress 2.0 for a personal blog or documentation site is straightforward. Here's what you need to know.

## What is VuePress?

VuePress is a static site generator built on Vue.js. It's perfect for documentation sites, blogs, and portfolios.

## Installation

```bash
npm install -D vuepress@2 @vuepress/bundler-vite@2 vue
```

## Basic Configuration

Create a `.vuepress/config.js` file with your site configuration:

```javascript
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'My Site',
  description: 'My awesome site',
  theme: defaultTheme({
    navbar: ['/', '/about'],
  }),
})
```

## Building Your Site

- Development: `npm run docs:dev`
- Production: `npm run docs:build`

---

*Learn more at [VuePress Documentation](https://v2.vuepress.vuejs.org/)*
