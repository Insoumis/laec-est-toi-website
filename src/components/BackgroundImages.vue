<template>
	<img
		class="fixed top-0 object-cover w-full h-full"
		:src="gradientUrl"
		alt="gradient de fond"
	/>
	<img
		class="fixed bottom-0 object-cover w-full h-full"
		:src="blueOverlayUrl"
		alt="éoliennes bleues"
	/>
	<img
		class="fixed bottom-0 object-cover w-full h-full"
		:src="yellowOverlayUrl"
		alt="fusées jaunes"
	/>
</template>

<script setup lang="ts">
const gradientUrl = new URL(`../assets/calques/0_gradient.png`, import.meta.url)
	.href;

const blueOverlayUrl = new URL(`../assets/calques/1_bleu.png`, import.meta.url)
	.href;
const yellowOverlayUrl = new URL(
	`../assets/calques/2_jaune.png`,
	import.meta.url
).href;
</script>
