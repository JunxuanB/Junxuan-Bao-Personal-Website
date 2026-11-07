# Junxuan Bao · Personal & Business Website

Source code for [junxuanb.com](https://junxuanb.com), built with [Astro](https://astro.build).

| Path | Page |
| --- | --- |
| `/` · `/zh/` | Personal page (English / 简体中文) |
| `/business/` · `/zh/business/` | JUNXUAN BAO SOLUTIONS INC. |
| `/full-stack-tutorial/` · `/zh-cn/full-stack-tutorial/` | Free tutorials (Starlight, English / 简体中文): TypeScript Quick Start, React + Ant Design Quick Start |
| `/privacy-notice/` | Privacy notice |

## Editing content

- Personal page copy: `src/data/personal.ts`
- Business page copy: `src/data/business.ts`
- Images: `src/assets/` (EaseCation images are reused from easecation.net, mapped in `src/data/images.ts`)
- Styles: `src/styles/site.css`
- Inquiry form: set `PUBLIC_WEB3FORMS_KEY` (from web3forms.com) to enable it; see `.env.example`

## Development

Requires Node.js 22.23.4 or later (see `.nvmrc`). Built with Astro 7 and Starlight 0.42.

```bash
npm install
npm run dev
npm run build
```
