import { defineConfig } from 'vitepress'
import { generateVersionRewrites, generateVersionSidebars, generateVersionSwitcher } from './data/versioning'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fabric Wiki",
  description: "Fabric is a modular modding toolchain targeting Minecraft: Java Edition 1.14 and above, including snapshots.",
  rewrites: {
    ...generateVersionRewrites()
  },
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

    search: {
      provider: "local"
    },

    sidebar: {
      '/': [],
      ...generateVersionSidebars()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FabricMC/wiki' }
    ]
  }
})
