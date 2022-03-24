<template>
	<main
		class="relative flex justify-center w-full min-h-screen p-16 align-center"
	>
		<BackgroundImages />
		<MainPresenter class="relative" />
	</main>
</template>

<script setup lang="ts">
import BackgroundImages from "@/components/BackgroundImages.vue";
import MainPresenter from "@/components/MainPresenter.vue";
</script>
