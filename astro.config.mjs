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
  // Keep whitespace between inline elements (Astro 7 defaults to "jsx").
  compressHTML: true,

  integrations: [starlight({
    plugins: [
      starlightHeadingBadges(),
    ],
    title: {
      en: "Junxuan Bao · Tutorials",
      "zh-CN": "鲍俊轩 · 教程",
    },
    lastUpdated: true,
    // The site has its own 404 page (src/pages/404.astro).
    disable404Route: true,
    credits: true,
    social: [
      { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/junxuanb/" },
      { icon: "email", label: "Email", href: "mailto:Junxuan.Bao@Gmail.com" },
      { icon: "github", label: "GitHub", href: "https://github.com/JunxuanB" },
    ],
    editLink: {
      baseUrl:
        "https://github.com/JunxuanB/Junxuan-Bao-Personal-Website/edit/main/",
    },
    // Tutorials live under /zh-cn/. The (empty) English root locale
    // keeps Astro from requiring a locale prefix, so the custom
    // pages at /, /business/ and /zh/ also work with `astro dev`.
    locales: {
      root: {
        label: "English",
        lang: "en",
      },
      // Simplified Chinese docs in `src/content/docs/zh-cn/`
      "zh-cn": {
        label: "简体中文",
        lang: "zh-CN",
      },
    },
    sidebar: [
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
            items: [{ autogenerate: { directory: "full-stack-tutorial/basic" } }],
          },
          {
            label: "React + Ant Design Quick Start",
            translations: {
              en: "React + Ant Design Quick Start",
              "zh-CN": "React + Ant Design 前端快速上手",
            },
            items: [{ autogenerate: { directory: "full-stack-tutorial/frontend" } }],
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
    "/en/privacy-notice": "/privacy-notice/",
    "/en/myself": "/",
    "/en/about-us": "/business/",
    "/zh-cn": "/zh/",
    "/zh-cn/myself": "/zh/",
    "/zh-cn/about-us": "/zh/business/",
  },
});