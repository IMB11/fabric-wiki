import { defineConfig } from 'vitepress'
import { generateVersionRewrites, generateVersionSidebars, generateVersionSwitcher } from './data/versioning'

import DocsSidebar from "./sidebars/docs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fabric Wiki",
  description: "Fabric is a modular modding toolchain targeting Minecraft: Java Edition 1.14 and above, including snapshots.",
  rewrites: {
    ...generateVersionRewrites()
  },
  cleanUrls: true,
  srcExclude: [
    "README.md",
    "LICENSE.md",
    "CONTRIBUTING.md"
  ],
  markdown: {
    lineNumbers: true,
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      generateVersionSwitcher(),
    ],

    i18nRouting: false,

    search: {
      provider: "local"
    },

    outline: "deep",

    sidebar: {
      '/': [],
      '/docs/': DocsSidebar,
      ...generateVersionSidebars()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FabricMC/wiki' }
    ]
  }
})
