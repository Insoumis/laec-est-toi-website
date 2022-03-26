<template>
	<main class="relative flex justify-center w-full sm:p-16 align-center">
		<BackgroundImages />
		<MainPresenter class="relative" />
	</main>
</template>

<script setup lang="ts">
import BackgroundImages from "@/components/BackgroundImages.vue";
import MainPresenter from "@/components/MainPresenter.vue";
import { useHead } from "@vueuse/head";

const pageTitle = "LAEC EST TOI";
const pageDescription = `Changez les règles du jeu !`;

useHead({
	title: pageTitle,
	meta: [
		{
			name: `description`,
			content: `Changez les règles du jeu !`,
		},
		// OpenGraph meta tags
		{
			name: `og:url`,
			content: import.meta.env.VITE_WEBSITE_URL,
		},
		{
			name: `og:type`,
			content: `website`,
		},
		{
			name: `og:title`,
			content: pageTitle,
		},
		{
			name: `og:description`,
			content: pageDescription,
		},
		{
			name: "og:image",
			content: import.meta.env.VITE_PREVIEW_IMG_URL,
		},
		// Twitter meta tags
		{
			name: "twitter:card",
			content: `summary_large_image`,
		},
		{
			property: "twitter:domain",
			content: import.meta.env.VITE_WEBSITE_DOMAIN,
		},
		{
			property: "twitter:url",
			content: import.meta.env.VITE_WEBSITE_URL,
		},
		{
			name: "twitter:title",
			content: pageTitle,
		},
		{
			name: "twitter:description",
			content: pageDescription,
		},
		{
			name: "twitter:image",
			content: import.meta.env.VITE_PREVIEW_IMG_URL,
		},
	],
});
</script>
