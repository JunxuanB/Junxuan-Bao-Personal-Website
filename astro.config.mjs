// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				en: 'Junxuan Bao',
				'zh-CN': '鲍俊轩',
			  },
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			editLink: {
				baseUrl: 'https://github.com/JunxuanB/Junxuan-Bao-Personal-Website/edit/main/',
			},
			// Set English as the default language for this site.
			defaultLocale: 'zh-cn',
			locales: {
			  // English docs in `src/content/docs/en/`
			  en: {
				label: 'English',
			  },
			  // Simplified Chinese docs in `src/content/docs/zh-cn/`
			  'zh-cn': {
				label: '简体中文',
				lang: 'zh-CN',
			  },
			},
			sidebar: [
				{
					label: 'About Me', 
					translations: {
						'en': "About Me",
						'zh-CN': "关于我",
					},
					slug: 'myself' },
				{
					label: "Full Stack Tutorial",
					translations: {
						'en': "Full Stack Tutorial",
						'zh-CN': "全栈教程",
					},
					badge: {
						text: {
							'en': "Incomplete",
							'zh-CN': "未完成",
						},
						variant: 'tip'
					  },
					items: [
						{
							label: 'README', 
							translations: {
								'en': "README",
								'zh-CN': "必读",
							},
							slug: 'full-stack-tutorial/000-index' },
						{
							label: "Frontend",
							translations: {
								'en': "Frontend",
								'zh-CN': "前端",
							},
							autogenerate: { directory: 'full-stack-tutorial/frontend' },
						},
						{
							label: "Backend",
							translations: {
								'en': "Backend",
								'zh-CN': "后端",
							},
							autogenerate: { directory: 'full-stack-tutorial/backend' },
						},
						{
							label: "Project: E-Fridge",
							translations: {
								'en': "Project: E-Fridge",
								'zh-CN': "项目：赛博冰箱",
							},
							autogenerate: { directory: 'full-stack-tutorial/project-e-fridge' },
						},
					]
				},
			],
		}),
	],
	redirects: {
		'/': '/en',
	},
});
