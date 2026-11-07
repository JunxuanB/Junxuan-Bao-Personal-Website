// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import AutoImport from "astro-auto-import";
import starlightHeadingBadges from "starlight-heading-badges";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://junxuanb.com/",

  integrations: [starlight({
    plugins: [
      starlightHeadingBadges(),
    ],
    title: {
      en: "Junxuan Bao · Tutorials",
      "zh-CN": "鲍俊轩 · 教程",
    },
    lastUpdated: true,
    credits: true,
    social: {
      linkedin: "https://www.linkedin.com/in/junxuanb/",
      email: "mailto:Junxuan.Bao@Gmail.com",
      github: "https://github.com/JunxuanB",
    },
    editLink: {
      baseUrl:
        "https://github.com/JunxuanB/Junxuan-Bao-Personal-Website/edit/main/",
    },
    defaultLocale: "zh-cn",
    locales: {
      // English docs in `src/content/docs/en/`
      en: {
        label: "English",
      },
      // Simplified Chinese docs in `src/content/docs/zh-cn/`
      "zh-cn": {
        label: "简体中文",
        lang: "zh-CN",
      },
    },
    sidebar: [
      {
        label: "Home",
        translations: { en: "Home", "zh-CN": "返回主页" },
        link: "/zh/",
      },
      {
        label: "Full Stack Tutorial",
        translations: {
          en: "Full Stack Tutorial",
          "zh-CN": "全栈教程",
        },
        items: [
          {
            label: "Welcome",
            translations: { en: "Welcome", "zh-CN": "欢迎" },
            slug: "full-stack-tutorial/000-index",
          },
          {
            label: "TypeScript Quick Start",
            translations: {
              en: "TypeScript Quick Start",
              "zh-CN": "TypeScript 快速上手",
            },
            autogenerate: { directory: "full-stack-tutorial/basic" },
          },
          {
            label: "React + Ant Design Quick Start",
            translations: {
              en: "React + Ant Design Quick Start",
              "zh-CN": "React + Ant Design 前端快速上手",
            },
            autogenerate: { directory: "full-stack-tutorial/frontend" },
          },
        ],
      },
    ],
  }), // Make sure the MDX integration is included AFTER astro-auto-import
  AutoImport({
    imports: [
      "./src/components/Blur.tsx",
      {
        "@astrojs/starlight/components": [
          "Aside",
          "Badge",
          "Card",
          "CardGrid",
          "LinkCard",
        ],
      },
      {
        "astro-embed": ["LinkPreview"]
      }
    ],
  }), mdx(), sitemap(), react()],
  redirects: {
    "/en": "/",
    "/en/myself": "/",
    "/en/about-us": "/business/",
    "/zh-cn": "/zh/",
    "/zh-cn/myself": "/zh/",
    "/zh-cn/about-us": "/zh/business/",
  },
});