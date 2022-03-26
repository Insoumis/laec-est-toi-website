<template>
	<MainHeader :should-show="shouldShow" />
	<main
		aria-label="container du jeu L'AEC est toi'"
		class="relative flex justify-center flex-1 w-full bg-main-grey align-center"
	>
		<iframe
			aria-label="jeu L'AEC"
			class="grow"
			src="/laec-est-vous_0-5-6_html5/index.html"
		/>
	</main>
	<footer
		aria-label="credits"
		v-if="shouldShow"
		class="py-5 text-center text-white bg-black shadow-md"
	>
		Jeu développé par des bénévoles du
		<a
			class="hover:text-gold text-white underline"
			href=" https://discord-insoumis.fr/"
		>
			Discord insoumis
		</a>
	</footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { useWindowSize } from "@vueuse/core";

import MainHeader from "@/components/MainHeader.vue";

useHead({
	title: "LAEC EST TOI",
	meta: [
		{
			name: `description`,
			content: `Changez les règles du jeu !`,
		},
	],
});

const { width, height } = useWindowSize();

const currRatio = computed(() => width.value / height.value);
const shouldShow = computed(() => currRatio.value < 1 || height.value > 600);
</script>
