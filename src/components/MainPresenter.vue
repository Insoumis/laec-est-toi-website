<template>
	<div
		class="flex h-screen sm:h-auto flex-col sm:w-4/12 w-screen md:px-12 md:py-8 p-4 space-y-6 border border-black shadow-2xl bg-main-grey sm:rounded-2xl h-3/12 sm:min-w-[600px]"
	>
		<BlinkAnimation class="mx-auto h-14" />
		<video controls poster="/preview.jpg">
			<source src="/teaser-v02.mp4" type="video/mp4" />
		</video>
		<div class="flex self-center flex-col items-start">
			<router-link class="flex pointer" to="/game">
				<Button class="flex items-center font-draxel h-full">
					<IconPlay class="h-6 w-6 mr-6" />
					<div class="w-full flex">Jouer sur navigateur</div>
				</Button>
			</router-link>
			<Button class="hidden lg:block font-draxel">
				<div class="flex space-x-4">
					<a class="flex" :href="currDLLink">
						<IconCommand class="h-6 w-6 mr-6" />
						Telecharger
					</a>
					<div class="flex space-x-4 pl-4">
						<a :href="`/dl/laec-est-vous-win64.zip`">
							<IconWindow
								class="w-6 h-6 text-white hover:text-gold"
							/>
						</a>

						<a :href="`/dl/laec-est-vous_0-5-4_linux64.tar.gz`">
							<IconLinux
								class="w-6 h-6 text-white hover:text-gold"
							/>
						</a>
						<a :href="`/dl/laec-est-vous-mac.zip`">
							<IconMac
								class="w-6 h-6 text-white hover:text-gold"
							/>
						</a>
					</div>
				</div>
			</Button>
			<a class="flex" href="/dl/LAEC-IS-YOU-1003/LAEC_IS_YOU.apk">
				<Button class="flex align-center font-draxel">
					<IconArcade class="h-6 w-6 mr-6" />
					<div class="w-full flex">Jouer sur android</div>
				</Button>
			</a>
		</div>
		<p class="mx-2 text-xs text-center text-white">
			Ce jeu vidéo est open-source et libre (sauf les musiques). Il a été
			développé à 100% par des bénévoles du
			<a
				class="hover:text-gold underline"
				href=" https://discord-insoumis.fr/"
				>Discord insoumis</a
			>
			avec l'accord du créateur de BABA IS YOU, que nous remercions et
			avec lequel nous ne sommes pas affiliés.
		</p>
		<div class="w-full h-full flex justify-center space-x-4">
			<IconGodot class="w-6 h-6" /> <IconLibre class="w-6 h-6" />
		</div>
	</div>
</template>
<script setup lang="ts">
import Button from "./MainButton.vue";
import BlinkAnimation from "./BlinkAnimation.vue";
import { computed } from "vue";
import IconMac from "./icon/IconMac.vue";
import IconLinux from "./icon/IconLinux.vue";
import IconWindow from "./icon/IconWindow.vue";
import IconCommand from "./icon/IconCommand.vue";
import IconPlay from "./icon/IconPlay.vue";
import IconArcade from "./icon/IconArcade.vue";
import IconGodot from "./icon/IconGodot.vue";
import IconLibre from "./icon/IconLibre.vue";

const currDLLink = computed(
	() => new URL(`/dl/${getOs() ? getOs() : "Windows"}`, import.meta.url).href
);

const getOs = () => {
	var userAgent = window.navigator.userAgent,
		platform =
			window.navigator?.userAgentData?.platform ??
			window.navigator.platform,
		macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
		windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
		iosPlatforms = ["iPhone", "iPad", "iPod"],
		os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = "laec-est-vous-mac.zip";
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = "laec-est-vous-win64.zip";
	} else if (/Android/.test(userAgent)) {
		os = "LAEC-IS-YOU-1003/LAEC IS YOU.apk";
	} else if (!os && /Linux/.test(platform)) {
		os = "laec-est-vous_0-5-4_linux64.tar.gz";
	}

	return os;
};
</script>
