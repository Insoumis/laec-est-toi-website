<template>
	<div
		class="relative flex justify-center my-auto w-full sm:p-16 align-center"
	>
		<BackgroundImages />

		<div
			class="flex font-sofia relative flex-col sm:w-4/12 w-screen md:px-16 md:py-12 p-8 border border-black shadow-2xl bg-main-grey sm:rounded-2xl sm:min-w-[450px] text-white"
		>
			<div class="text-[96px] font-draxel leading-[1.2em] flex">
				<div>Oops</div>

				<img
					class="h-16 w-16 my-auto"
					src="../components/icon/jlm_right_1_2.png"
				/>
			</div>
			<div class="font-draxel text-l">
				La page que vous rechercher n'existe pas.
			</div>
			<div>
				<router-link
					class="pointer text-xl text-white hover:text-gold"
					to="/"
				>
					← Revenir sur la page d’accueil 🐢
				</router-link>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import BackgroundImages from "../components/BackgroundImages.vue";
</script>
