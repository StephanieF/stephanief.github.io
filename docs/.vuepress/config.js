import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import markdownIt from 'markdown-it'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { googleTagManagerPlugin } from '@vuepress/plugin-google-tag-manager'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { seoPlugin } from '@vuepress/plugin-seo'


export default defineUserConfig({
  lang: 'en-US',

  // Head links
  head: [
    [
      'link',
      { rel: 'apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png' }
    ],
    [
      'link',
      { rel: 'icon', href: '/favicon-32x32.png', type:'image/png', sizes:'32x32' }
    ],
    [
      'link',
      { rel: 'icon', href: '/favicon-16x16.png', type:'image/png', sizes:'16x16' }
    ],
    [
      'link',
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3'}
    ]
  ],

  title: 'Stephanie Fuda',
  description: 'Turning data chaos into organized knowledge',

  theme: defaultTheme({
    logo: 'StephanieCodes-Logo-2.png',

    navbar: ['/', '/projects'],

    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://github.com/StephanieF',

    // defaults to false, set to true to enable
    editLink: false,

    // Enable last updated timestamp
    lastUpdated: true,
  }),

  plugins: [
    markdownMathPlugin({
      // options
    }),
    googleTagManagerPlugin({
      id: 'GTM-PDKZZTJT',
    }),
    sitemapPlugin({
      hostname: 'https://www.stephaniecod.es/',
      outFile: 'sitemap.xml'
    }),
    seoPlugin({
      hostname: 'https://www.stephaniecod.es/'
    }),
  ],
  bundler: viteBundler(),
})
