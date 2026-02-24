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
					label: 'Hive Management',
					items: [
						{ label: 'Managing Apiaries', slug: 'guides/apiaries' },
						{ label: 'Hive Inspections', slug: 'guides/inspections' },
						{ label: 'Queen Management', slug: 'guides/queen-management' },
						{ label: 'Hive Events', slug: 'guides/hive-events' },
						{ label: 'Logging Treatments', slug: 'guides/treatments' },
						{ label: 'Recording Harvests', slug: 'guides/harvests' },
					],
				},
				{
					label: 'Planning & Tasks',
					items: [
						{ label: 'Task Management', slug: 'guides/tasks' },
						{ label: 'AI Recommendations', slug: 'guides/ai-recommendations' },
					],
				},
				{
					label: 'App Settings & Data',
					items: [
						{ label: 'Settings & Preferences', slug: 'guides/settings' },
						{ label: 'Offline Use & Data Sync', slug: 'guides/offline-sync' },
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
