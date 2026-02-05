export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"Hello! Is it me you're looking for?"} }],
  ["/consulting.html", { loader: () => import(/* webpackChunkName: "consulting.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/consulting.html.js"), meta: {"title":"GEO, AEO & Technical SEO Consulting"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/projects.html.js"), meta: {"title":"Projects"} }],
  ["/insights/", { loader: () => import(/* webpackChunkName: "insights_index.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/insights/index.html.js"), meta: {"title":"Insights"} }],
  ["/insights/why-structured-content-is-the-new-foundation-for-ai-seo-and-user-experience.html", { loader: () => import(/* webpackChunkName: "insights_why-structured-content-is-the-new-foundation-for-ai-seo-and-user-experience.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/insights/why-structured-content-is-the-new-foundation-for-ai-seo-and-user-experience.html.js"), meta: {"title":"Why Structured Content Is the New Foundation for AI, SEO, and User Experience"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
