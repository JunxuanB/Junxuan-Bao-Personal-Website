// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import AutoImport from "astro-auto-import";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightHeadingBadges from 'starlight-heading-badges'
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://junxuanb.com/",

  integrations: [
    starlight({
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
              badge: {
                text: {
                  en: "Incomplete",
                  "zh-CN": "未完成",
                },
                variant: "tip",
              },
              items: [
                {
                  label: "README",
                  translations: {
                    en: "README",
                    "zh-CN": "必读",
                  },
                  slug: "full-stack-tutorial/000-index",
                },
                {
                  label: "Frontend",
                  translations: {
                    en: "Frontend",
                    "zh-CN": "前端",
                  },
                  autogenerate: { directory: "full-stack-tutorial/frontend" },
                },
                {
                  label: "Backend",
                  translations: {
                    en: "Backend",
                    "zh-CN": "后端",
                  },
                  autogenerate: { directory: "full-stack-tutorial/backend" },
                },
                {
                  label: "Project: E-Fridge",
                  translations: {
                    en: "Project: E-Fridge",
                    "zh-CN": "项目：赛博冰箱",
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
    }),
    AutoImport({
      imports: [
        {
          "@astrojs/starlight/components": ["Aside", "Badge", "Card", "CardGrid"],
        },
      ],
    }),

    // Make sure the MDX integration is included AFTER astro-auto-import
    mdx(),
  ],
  redirects: {
    "/": "/en",
  },
});
