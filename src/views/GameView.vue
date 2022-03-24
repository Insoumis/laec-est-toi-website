<template>
	<header class="relative grid grid-cols-3 py-3 bg-black shadow-md">
		<div class="flex items-center px-8">
			<router-link to="/">
				<img
					class="w-5 h-5"
					src="@/assets/icons/quitter32.png"
					alt="Leave icon"
				/>
			</router-link>
			<IconDiscordInsoumis class="ml-16 w-36" />
		</div>
		<BlinkAnimation class="mx-auto w-80" image-name="logo hd menu/logo" />
	</header>
	<main
		class="relative flex justify-center flex-1 w-full bg-main-grey sm:p-16 align-center"
	>
		<!-- TODO: add game here -->
	</main>
	<footer class="py-5 text-center text-white bg-black shadow-md">
		© 2019-2020 Fiscal Kombat | Jeu développé à :100: % par des bénévoles du
		Discord insoumis
	</footer>
</template>

<script setup lang="ts">
import IconDiscordInsoumis from "@/components/icon/IconDiscordInsoumis.vue";
import BlinkAnimation from "@/components/BlinkAnimation.vue";
</script>
