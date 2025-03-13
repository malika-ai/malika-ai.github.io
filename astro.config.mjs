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
				instagram: 'https://www.instagram.com/officialmalika.ai/'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Search', slug: 'tools/search' },
						{ label: 'Cek Ongkir', slug: 'tools/ongkir' },
						{ label: 'Custom Function', slug: 'tools/custom-function' },
						{ label: 'Scheduler', slug: 'tools/scheduler' },
					],
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
