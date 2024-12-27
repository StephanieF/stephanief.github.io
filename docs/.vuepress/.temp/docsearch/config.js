
import { DocSearch, injectDocSearchConfig } from "/home/stephaniefuda/projects/stephanief.github.io/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import '/home/stephaniefuda/projects/stephanief.github.io/node_modules/@docsearch/css/dist/style.css'
import '/home/stephaniefuda/projects/stephanief.github.io/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import '/home/stephaniefuda/projects/stephanief.github.io/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
