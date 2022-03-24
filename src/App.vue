<template>
	<div class="flex flex-col min-h-screen">
		<RouterView />
	</div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style>
.sofia {
	font-family: "Sofia";
}

.draxel {
	font-family: "Draxel";
}
</style>
