<template>
	<main
		:style="{
			backgroundImage: `url('${gradientUrl}')`,
		}"
		class="h-screen relative w-full flex justify-center align-center p-16"
	>
		<img
			class="absolute left-0 bottom-0"
			:src="blueOverlayUrl"
			alt="éoliennes bleues"
		/>
		<img
			class="absolute right-0 bottom-0"
			:src="yellowOverlayUrl"
			alt="fusées jaunes"
		/>

		<MainPresenter class="relative" />
	</main>
</template>

<script setup lang="ts">
import MainPresenter from "@/components/MainPresenter.vue";

const gradientUrl = new URL(`../assets/calques/0_gradient.png`, import.meta.url)
	.href;

const blueOverlayUrl = new URL(`../assets/calques/1_bleu.png`, import.meta.url)
	.href;
const yellowOverlayUrl = new URL(
	`../assets/calques/2_jaune.png`,
	import.meta.url
).href;
</script>
