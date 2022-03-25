<template>
	<header
		v-if="currRatio < 1 || height > 400"
		aria-label="Header"
		class="relative grid grid-cols-3 py-3 bg-black shadow-md"
	>
		<div aria-label="barre de navigation" class="flex items-center px-8">
			<router-link
				aria-label="retour a la page d'accueil"
				class="shrink-0 p-4 pointer text-white hover:text-gold"
				to="/"
			>
				<IconLeave aria-hidden="true" class="w-5 h-5" />
			</router-link>
			<a
				aria-label="Lien vers le Discord Insoumis"
				class="hidden ml-16 md:inline-block"
				href="https://discord-insoumis.fr/"
			>
				<IconDiscordInsoumis
					aria-hidden="true"
					class="text-white w-36 hover:text-gold"
			/></a>
		</div>
		<BlinkAnimation aria-hidden="true" class="mx-auto w-80" />
	</header>
	<main
		aria-label="container du jeu L'AEC est toi'"
		ref="gameContainer"
		class="relative flex justify-center flex-1 w-full bg-main-grey align-center"
	>
		<iframe
			aria-label="jeu L'AEC"
			class="grow"
			src="/laec-est-vous_0-5-5_html5/index.html"
		/>
	</main>
	<footer
		aria-label="credits"
		v-if="currRatio < 1 || height > 400"
		class="py-5 text-center text-white bg-black shadow-md"
	>
		Jeu développé par des bénévoles du
		<a
			class="hover:text-gold text-white underline"
			href=" https://discord-insoumis.fr/"
			>Discord insoumis</a
		>
	</footer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useHead } from "@vueuse/head";
import { useElementBounding } from "@vueuse/core";

import IconLeave from "@/components/icon/IconLeave.vue";
import IconDiscordInsoumis from "@/components/icon/IconDiscordInsoumis.vue";
import BlinkAnimation from "@/components/BlinkAnimation.vue";

useHead({
	title: "LAEC EST TOI",
	meta: [
		{
			name: `description`,
			content: `Changez les règles du jeu !`,
		},
	],
});

const gameContainer = ref<null | HTMLIFrameElement>(null);

const { width, height } = useElementBounding(gameContainer);

const currRatio = computed(() => width.value / height.value);
</script>
