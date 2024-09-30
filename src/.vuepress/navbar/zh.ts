import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "博文",
    icon: "book",
    prefix: "zh/posts/",
    children: [
      {
        text: "科研",
        icon: "laptop-code",
        link: "study/",
      },
      {
        text: "杂文",
        icon: "file-lines",
        link: "essay/",
      },
      {
        text: "游戏",
        icon: "gamepad",
        link: "game/",
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
