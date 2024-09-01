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

  title: 'Stephanie Fuda',
  description: 'Behold! Now I am become developer, the greeter of worlds!',

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
    docsearchPlugin({
      // options
      apikey: process.env.API_KEY,
      indexName: process.env.INDEXNAME,
      appId: process.env.APPID,
      maxResultsPerGroup: 5,
      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
      },
    }),
  ],


  bundler: viteBundler(),
})
