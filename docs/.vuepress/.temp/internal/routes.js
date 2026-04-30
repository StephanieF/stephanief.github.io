export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/about.md"), meta: {"title":"Hello! Is it me you're looking for?"} }],
  ["/consulting.html", { loader: () => import(/* webpackChunkName: "consulting.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/consulting.md"), meta: {"title":"GEO, AEO & Technical SEO Consulting"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/index.md"), meta: {"title":"Home"} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/projects.md"), meta: {"title":"Projects"} }],
  ["/insights/content-architecture-for-conversational-search.html", { loader: () => import(/* webpackChunkName: "insights_content-architecture-for-conversational-search.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/insights/content-architecture-for-conversational-search.md"), meta: {"title":"Content Architecture for Conversational Search"} }],
  ["/insights/", { loader: () => import(/* webpackChunkName: "insights_index.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/insights/index.md"), meta: {"title":"Insights"} }],
  ["/insights/measuring-success-analytics-for-geo-and-aeo.html", { loader: () => import(/* webpackChunkName: "insights_measuring-success-analytics-for-geo-and-aeo.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/insights/measuring-success-analytics-for-geo-and-aeo.md"), meta: {"title":"Measuring Success: Analytics for GEO and AEO"} }],
  ["/insights/schema-markup-strategies-for-ai-discovery.html", { loader: () => import(/* webpackChunkName: "insights_schema-markup-strategies-for-ai-discovery.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/insights/schema-markup-strategies-for-ai-discovery.md"), meta: {"title":"Schema Markup Strategies for AI Discovery"} }],
  ["/insights/technical-implementation-of-geo-strategies.html", { loader: () => import(/* webpackChunkName: "insights_technical-implementation-of-geo-strategies.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/insights/technical-implementation-of-geo-strategies.md"), meta: {"title":"Technical Implementation of GEO Strategies"} }],
  ["/insights/why-structured-content-is-the-new-foundation-for-ai-seo-and-user-experience.html", { loader: () => import(/* webpackChunkName: "insights_why-structured-content-is-the-new-foundation-for-ai-seo-and-user-experience.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/insights/why-structured-content-is-the-new-foundation-for-ai-seo-and-user-experience.md"), meta: {"title":"Why Structured Content Is the New Foundation for AI, SEO, and User Experience"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/stephanie-fuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateRoutes?.(routes)
  __VUE_HMR_RUNTIME__.updateRedirects?.(redirects)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateRoutes?.(m.routes)
    __VUE_HMR_RUNTIME__.updateRedirects?.(m.redirects)
  })
}
