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
	],
});
</script>
