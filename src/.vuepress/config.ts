import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "QBY's Blog",
      description: "A blog ",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "QBY的博客",
      description: "博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
