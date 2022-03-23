<template>
	<img :src="currImgUrl" alt="animation frame" />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useIntervalFn } from "@vueuse/core";

const currImgNumber = ref<1 | 2 | 3>(1);

const props = defineProps<{
	imageName: string;
}>();

const currImgUrl = computed(
	() =>
		new URL(
			`../assets/${props.imageName}${currImgNumber.value}.png`,
			import.meta.url
		).href
);

const { pause, resume } = useIntervalFn(() => {
	currImgNumber.value =
		currImgNumber.value === 3
			? 1
			: ((currImgNumber.value + 1) as 1 | 2 | 3);
}, 250);
</script>
