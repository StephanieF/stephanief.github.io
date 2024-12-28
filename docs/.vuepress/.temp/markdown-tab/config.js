import { CodeTabs } from "/home/stephaniefuda/projects/stephanief.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/stephaniefuda/projects/stephanief.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/stephaniefuda/projects/stephanief.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};