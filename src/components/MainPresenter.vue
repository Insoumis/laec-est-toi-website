<template>
	<div class="bg-main-grey h-3/12 w-4/12 space-y-6 flex flex-col p-4">
		<BlinkAnimation class="w-96 mx-auto" image-name="logo hd menu/logo" />

		<Button :msg="'Jouer sur navigateur'"> Jouer sur navigateur </Button>
		<Button :msg="'Jouer sur navigateur'"> Télécharger </Button>
		<Button :msg="'Jouer sur navigateur'"> Jouer sur android </Button>
	</div>
</template>
<script setup lang="ts">
import Button from "./MainButton.vue";
import BlinkAnimation from "./BlinkAnimation.vue";
</script>
