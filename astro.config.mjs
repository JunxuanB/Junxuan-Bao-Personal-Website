// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import AutoImport from "astro-auto-import";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightHeadingBadges from "starlight-heading-badges";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://junxuanb.com/",

  integrations: [starlight({
    plugins: [
      starlightUtils({
        multiSidebar: {
          switcherStyle: "horizontalList",
        },
      }),
      starlightHeadingBadges(),
    ],
    title: {
      en: "Junxuan Bao",
      "zh-CN": "鲍俊轩",
    },
    lastUpdated: true,
    credits: true,
    social: {
      instagram: "https://unsplash.com/@junxuanb",
      email: "mailto:Junxuan.Bao@Gmail.com",
      github: "https://github.com/JunxuanB",
    },
    editLink: {
      baseUrl:
        "https://github.com/JunxuanB/Junxuan-Bao-Personal-Website/edit/main/",
    },
    // Set English as the default language for this site.
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
        label: "Main",
        translations: {
          en: "Main",
          "zh-CN": "主页",
        },
        items: [
          {
            label: "About Me",
            translations: {
              en: "About Me",
              "zh-CN": "关于我",
            },
            slug: "myself",
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
                translations: {
                  en: "Welcome",
                  "zh-CN": "欢迎",
                },
                slug: "full-stack-tutorial/000-index",
              },
              {
                label: "Language Basics",
                translations: {
                  en: "Language Basics",
                  "zh-CN": "语言基础",
                },
                badge: {
                  text: {
                    en: "Completed",
                    "zh-CN": "已完结",
                  },
                  variant: "success",
                },
                autogenerate: { directory: "full-stack-tutorial/basic" },
              },
              {
                label: "Frontend",
                translations: {
                  en: "Frontend",
                  "zh-CN": "前端",
                },
                badge: {
                  text: {
                    en: "Completed",
                    "zh-CN": "已完结",
                  },
                  variant: "success",
                },
                autogenerate: { directory: "full-stack-tutorial/frontend" },
              },
              {
                label: "Backend",
                translations: {
                  en: "Backend",
                  "zh-CN": "后端",
                },
                badge: {
                  text: {
                    en: "In Progress",
                    "zh-CN": "未完成",
                  },
                  variant: "tip",
                },
                autogenerate: { directory: "full-stack-tutorial/backend" },
              },
              {
                label: "Project: E-Fridge",
                translations: {
                  en: "Project: E-Fridge",
                  "zh-CN": "项目：赛博冰箱",
                },
                badge: {
                  text: {
                    en: "In Progress",
                    "zh-CN": "未完成",
                  },
                  variant: "tip",
                },
                autogenerate: {
                  directory: "full-stack-tutorial/project-e-fridge",
                },
              },
            ],
          },
        ],
      },
      {
        label: "Blog",
        translations: {
          en: "Blog",
          "zh-CN": "博客",
        },
        autogenerate: { directory: "blog" },
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
    "/": "/en",
  },
});