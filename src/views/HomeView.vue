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

useHead({
	title: "LAEC EST TOI",
	meta: [
		{
			name: `description`,
			content: `Changez les règles du jeu !`,
		},
		// Facebook meta tags
		{
			name: `og:url`,
			content: `https://www.laec-est-toi.fr`,
		},
		{
			name: `og:type`,
			content: `website`,
		},
		{
			name: `og:title`,
			content: `LAEC EST TOI`,
		},
		{
			name: `og:description`,
			content: `Changez les règles du jeu !`,
		},
		{
			name: "og:image",
			content: `/preview.jpg`,
		},
		// Twitter meta tags
		{
			name: "twitter:card",
			content: `summary_large_image`,
		},
		{
			property: "twitter:domain",
			content: `laec-est-toi.fr`,
		},
		{
			property: "twitter:url",
			content: `https://www.laec-est-toi.fr`,
		},
		{
			name: "twitter:title",
			content: `LAEC EST TOI`,
		},
		{
			name: "twitter:description",
			content: `Changez les règles du jeu !`,
		},
		{
			name: "twitter:image",
			content: `/preview.jpg`,
		},
	],
});
</script>
