export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"Hello! Is it me you're looking for?"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/projects.html.js"), meta: {"title":"Projects"} }],
  ["/insights/", { loader: () => import(/* webpackChunkName: "insights_index.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/insights/index.html.js"), meta: {"title":"Insights"} }],
  ["/insights/vuepress-setup-guide.html", { loader: () => import(/* webpackChunkName: "insights_vuepress-setup-guide.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/insights/vuepress-setup-guide.html.js"), meta: {"title":"VuePress Setup Guide"} }],
  ["/insights/why-structured-content-is-the-new-foundation-for-ai-seo-and-user-experience.html", { loader: () => import(/* webpackChunkName: "insights_why-structured-content-is-the-new-foundation-for-ai-seo-and-user-experience.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/insights/why-structured-content-is-the-new-foundation-for-ai-seo-and-user-experience.html.js"), meta: {"title":"Why Structured Content Is the New Foundation for AI, SEO, and User Experience"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
