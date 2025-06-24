// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Malika Tools Docs',
			head: [
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/webp', href: '/favicon.webp' } }
			],
			social: {
				instagram: 'https://www.instagram.com/officialmalika.ai/',
				github: 'https://github.com/malika-ai'
			},
			sidebar: [
				{
					label: 'General',
					items: [
						{ label: 'Malika and Cekat AI', slug: 'general/malika-cekat' },
						{ label: 'Understanding Malika Tools', slug: 'general/malika-tools' },
					],
				},
				{
					label: 'Tools',
					items: [
						{ label: 'Search', slug: 'tools/search' },
						{ label: 'Cek Ongkir', slug: 'tools/ongkir' },
						{ label: 'Custom Function', slug: 'tools/custom-function' },
					],
				},
				{
					label: 'Misc',
					items: [
						{ label: 'Server Observability', slug: 'misc/server-observability' },
						{ label: 'Investigating Errors', slug: 'misc/investigating-errors' },
					],
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
