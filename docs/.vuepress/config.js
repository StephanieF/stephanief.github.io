import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // default theme config
    hostname: "https://stephaniecod.es/",
    lang: 'en-US',
    title: 'Stephanie Cod.es',
    description: 'An engineer\' blog about software, mathematics, and more.',
    // public file path
    // logo: '/hero.png',
    // url
    logo: 'https://vuejs.org/images/logo.png',
    lastUpdated: false,
    contributors: false,
    externalLinkIcon: true,
    robots: {
      allowAll: true,
    },
    sitemap: true,


    //Navbar
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Projects',
        link: 'projects.md',
      },
    ],
  }),
})
