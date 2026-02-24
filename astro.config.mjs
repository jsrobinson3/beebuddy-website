// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://beebuddyai.com',
	integrations: [
		starlight({
			title: 'BeeBuddy',
			description:
				'AI-powered beekeeping management platform. ' +
				'Track hives, log inspections, and get intelligent recommendations.',
			logo: {
				alt: 'BeeBuddy',
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/jsrobinson3/BeeBuddy' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'guides/introduction' },
						{ label: 'Quick Start', slug: 'guides/quickstart' },
						{ label: 'Installation', slug: 'guides/installation' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Managing Apiaries', slug: 'guides/apiaries' },
						{ label: 'Hive Inspections', slug: 'guides/inspections' },
						{ label: 'AI Recommendations', slug: 'guides/ai-recommendations' },
						{ label: 'Delete Your Account', slug: 'guides/delete-account' },
					],
				},
				{
					label: 'API Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Contributing',
					items: [
						{ label: 'How to Contribute', slug: 'contributing/how-to-contribute' },
						{ label: 'Development Setup', slug: 'contributing/development-setup' },
					],
				},
				{
					label: 'Legal',
					items: [
						{ label: 'Privacy Policy', slug: 'legal/privacy' },
						{ label: 'Terms of Service', slug: 'legal/terms' },
					],
				},
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://beebuddyai.com/og-image.png',
					},
				},
			],
		}),
	],
});
