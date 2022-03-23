<template>
	<div
		class="bg-main-grey border shadow-2xl border-black rounded-2xl h-3/12 w-4/12 space-y-6 flex flex-col p-4"
	>
		<BlinkAnimation class="w-96 mx-auto" image-name="logo hd menu/logo" />

		<Button :msg="'Jouer sur navigateur'"> Jouer sur navigateur </Button>
		<Button :msg="'Jouer sur navigateur'"> Télécharger </Button>
		<Button :msg="'Jouer sur navigateur'"> Jouer sur android </Button>
		<p class="text-xs text-white text-center mx-2">
			Ce jeu vidéo est open-source et libre. Il a été développé à 100% par
			des bénévoles du
			<span class="underline">Discord insoumis</span> avec l'accord du
			créateur de BABA IS YOU que nous remercions pour son œuvre et sa
			bienveillance mais avec lequel nous ne sommes nullement affiliés.
			Moteur de jeu : Godot 3.4.
		</p>
	</div>
</template>
<script setup lang="ts">
import Button from "./MainButton.vue";
import BlinkAnimation from "./BlinkAnimation.vue";
</script>
