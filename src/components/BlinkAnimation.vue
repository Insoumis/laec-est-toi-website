<template>
	<img :src="imgUrlPerNumber[currImgNumber]" alt="animation frame" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIntervalFn } from "@vueuse/core";

import frame1 from "@/assets/logo hd menu/logo1.png";
import frame2 from "@/assets/logo hd menu/logo2.png";
import frame3 from "@/assets/logo hd menu/logo3.png";

const currImgNumber = ref<1 | 2 | 3>(1);

const imgUrlPerNumber = {
	1: frame1,
	2: frame2,
	3: frame3,
};

const { pause, resume } = useIntervalFn(() => {
	currImgNumber.value =
		currImgNumber.value === 3
			? 1
			: ((currImgNumber.value + 1) as 1 | 2 | 3);
}, 250);
</script>
