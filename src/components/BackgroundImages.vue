<template>
	<img
		aria-hidden="true"
		src="@/assets/lol.jpg"
		class="fixed bottom-0 object-cover w-full h-full"
		alt=""
	/>

	<img
		aria-hidden="true"
		class="fixed top-0 object-cover w-full h-full opacity-60"
		:src="gradientUrl"
		alt="gradient de fond"
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
