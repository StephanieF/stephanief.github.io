export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Stephanie Fuda\",\"description\":\"Turning data chaos into organized knowledge\",\"head\":[[\"link\",{\"rel\":\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"/apple-touch-icon.png\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon-32x32.png\",\"type\":\"image/png\",\"sizes\":\"32x32\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon-16x16.png\",\"type\":\"image/png\",\"sizes\":\"16x16\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://cdn.jsdelivr.net/npm/@docsearch/css@3\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
