import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Study",
        icon: "laptop-code",
        link: "study/",
      },
      {
        text: "Essay",
        icon: "file-lines",
        link: "essay/",
      },
      {
        text: "Game",
        icon: "gamepad",
        link: "game/",
      },
    ],
  },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
