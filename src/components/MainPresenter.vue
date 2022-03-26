<template>
	<div
		class="flex h-screen sm:h-auto flex-col sm:w-4/12 w-screen md:px-12 md:py-8 p-4 space-y-6 border border-black shadow-2xl bg-main-grey sm:rounded-2xl h-3/12 sm:min-w-[600px]"
	>
		<BlinkAnimation aria-label="trailer du jeu" class="mx-auto mb-2 h-14" />
		<video aria-hidden="true" controls poster="/preview.jpg">
			<source src="/teaser-v02.mp4" type="video/mp4" />
		</video>
		<div class="flex self-center flex-col items-start">
			<router-link class="flex pointer" to="/game">
				<Button class="flex items-center font-draxel h-full">
					<IconPlay aria-hidden="true" class="h-6 w-6 mr-6" />
					<div class="w-full flex">Jouer sur navigateur</div>
				</Button>
			</router-link>
			<Button class="hidden lg:block font-draxel">
				<div class="flex space-x-4">
					<a
						:class="{ 'cursor-default': currDLLink }"
						class="flex"
						aria-hidden="true"
						:href="currDLLink ?? '#'"
					>
						<IconCommand class="h-6 w-6 mr-6" />
						Telecharger
					</a>
					<div class="flex space-x-4 pl-4">
						<a
							aria-label="Telecharger pour Windows"
							:href="WINDOWS_URL"
						>
							<IconWindow
								aria-label="icone windows"
								class="w-6 h-6 text-white hover:text-gold"
							/>
						</a>

						<a
							aria-label="Telecharger pour linux"
							:href="LINUX_URL"
						>
							<IconLinux
								aria-label="icone Linux"
								class="w-6 h-6 text-white hover:text-gold"
							/>
						</a>
						<a
							aria-label="Telecharger pour MacOs"
							:href="MACOS_URL"
						>
							<IconMac
								aria-label="icone Mac"
								class="w-6 h-6 text-white hover:text-gold"
							/>
						</a>
					</div>
				</div>
			</Button>
			<a class="flex" :href="ANDROID_URL">
				<Button class="flex align-center font-draxel">
					<IconArcade aria-hidden="true" class="h-6 w-6 mr-6" />
					<div class="w-full flex">Jouer sur android</div>
				</Button>
			</a>
		</div>
		<p aria-label="Credits" class="mx-2 text-sm text-center text-[#BBB]">
			Ce jeu vidéo est open-source et libre (sauf les musiques). Il a été
			développé à 100% par des bénévoles du
			<a
				class="hover:text-gold text-white underline"
				href=" https://discord-insoumis.fr/"
				>Discord insoumis</a
			>
			avec l'accord du créateur de BABA IS YOU, que nous remercions et
			avec lequel nous ne sommes pas affiliés.
		</p>
		<div class="w-full h-full flex justify-center space-x-4">
			<IconGodot
				aria-hidden="true"
				class="w-6 h-6 text-[#BBB] hover:text-white"
			/>
			<IconLibre
				aria-hidden="true"
				class="w-6 h-6 text-[#BBB] hover:text-white"
			/>
		</div>
	</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import Button from "./MainButton.vue";
import BlinkAnimation from "./BlinkAnimation.vue";
import IconMac from "./icon/IconMac.vue";
import IconLinux from "./icon/IconLinux.vue";
import IconWindow from "./icon/IconWindow.vue";
import IconCommand from "./icon/IconCommand.vue";
import IconPlay from "./icon/IconPlay.vue";
import IconArcade from "./icon/IconArcade.vue";
import IconGodot from "./icon/IconGodot.vue";
import IconLibre from "./icon/IconLibre.vue";

const MACOS_URL = import.meta.env.VITE_GAME_URL_MACOS as string;
const WINDOWS_URL = import.meta.env.VITE_GAME_URL_WINDOWS as string;
const LINUX_URL = import.meta.env.VITE_GAME_URL_LINUX as string;
const ANDROID_URL = import.meta.env.VITE_GAME_URL_ANDROID as string;

const getOs = () => {
	if (import.meta.env.SSR) return null;
	var userAgent = window.navigator.userAgent,
		platform =
			window.navigator?.userAgentData?.platform ??
			window.navigator.platform,
		macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
		windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
		iosPlatforms = ["iPhone", "iPad", "iPod"],
		os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = MACOS_URL;
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = WINDOWS_URL;
	} else if (!os && /Linux/.test(platform)) {
		os = LINUX_URL;
	}

	return os;
};

const currDLLink = ref<string | null>("");

onMounted(() => (currDLLink.value = getOs() ? getOs() : null));
</script>
