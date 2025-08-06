export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About 📡"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/introduction.html.js"), meta: {"title":"Hello from mars 📡"} }],
  ["/personal-site.html", { loader: () => import(/* webpackChunkName: "personal-site.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/personal-site.html.js"), meta: {"title":"Personal Site"} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/projects.html.js"), meta: {"title":"Projects"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/stephaniefuda/projects/stephanief.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
