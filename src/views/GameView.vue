<template>
	<header
		v-if="currRatio < 1 || height > 400"
		class="relative grid grid-cols-3 py-3 bg-black shadow-md"
	>
		<div class="flex items-center px-8">
			<router-link
				class="shrink-0 p-4 pointer text-white hover:text-gold"
				to="/"
			>
				<IconLeave class="w-5 h-5" />
			</router-link>
			<a
				class="hidden ml-16 md:inline-block"
				href="https://discord-insoumis.fr/"
			>
				<IconDiscordInsoumis class="text-white w-36 hover:text-gold"
			/></a>
		</div>
		<BlinkAnimation class="mx-auto w-80" />
	</header>
	<main
		ref="gameContainer"
		class="relative flex justify-center flex-1 w-full bg-main-grey align-center"
	>
		<iframe class="grow" src="/laec-est-vous_0-5-5_html5/index.html" />
	</main>
	<footer
		v-if="currRatio < 1 || height > 400"
		class="py-5 text-center text-white bg-black shadow-md"
	>
		Jeu développé par des bénévoles du Discord insoumis
	</footer>
</template>

<script setup lang="ts">
import IconLeave from "@/components/icon/IconLeave.vue";
import IconDiscordInsoumis from "@/components/icon/IconDiscordInsoumis.vue";
import BlinkAnimation from "@/components/BlinkAnimation.vue";

import { useElementBounding } from "@vueuse/core";
import { computed, ref } from "vue";

const gameContainer = ref<null | HTMLIFrameElement>(null);

const { width, height } = useElementBounding(gameContainer);

const currRatio = computed(() => width.value / height.value);
</script>
