<template>
	<header
		v-if="shouldShow"
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
				class="hidden ml-16 lg:inline-block"
				href="https://discord-insoumis.fr/"
			>
				<IconDiscordInsoumis
					aria-hidden="true"
					class="text-white w-36 hover:text-gold"
			/></a>
		</div>
		<BlinkAnimation aria-hidden="true" class="m-auto w-80" />
	</header>
</template>

<script setup lang="ts">
import IconLeave from "@/components/icon/IconLeave.vue";
import IconDiscordInsoumis from "@/components/icon/IconDiscordInsoumis.vue";
import BlinkAnimation from "@/components/BlinkAnimation.vue";

defineProps<{
	shouldShow: boolean;
}>();
</script>
