<template>
	<div
		class="flex flex-col sm:w-4/12 w-full p-4 space-y-6 border border-black shadow-2xl bg-main-grey sm:rounded-2xl h-3/12 sm:min-w-[450px]"
	>
		<BlinkAnimation class="mx-auto w-96" />
		<video controls poster="/preview.jpg">
			<source src="/teaser-v02.mp4" type="video/mp4" />
		</video>
		<div class="flex flex-col items-center h-full">
			<Button class="flex items-center space-x-4 font-draxel">
				<IconPlay class="w-6 h-6 mr-4" />
				<router-link to="/game"> Jouer sur navigateur</router-link>
			</Button>
			<Button class="hidden lg:block font-draxel"
				><div class="flex space-x-4">
					<IconCommand class="w-6 h-6 mr-4" />
					<a :href="currDLLink"> Telecharger </a>
					<div class="flex space-x-4">
						<a :href="`/dl/Windows`"
							><IconWindow
								class="w-6 h-6 text-white hover:text-gold"
							/>
						</a>

						<a :href="`/dl/Linux`"
							><IconLinux
								class="w-6 h-6 text-white hover:text-gold"
							/>
						</a>
						<a :href="`/dl/Linux`"
							><IconMac
								class="w-6 h-6 text-white hover:text-gold"
							/>
						</a>
					</div>
				</div>
			</Button>
			<Button class="flex space-x-4 align-center font-draxel">
				<IconArcade class="w-6 h-6 mr-4" />
				<a>Jouer sur android </a>
			</Button>
		</div>
		<p class="mx-2 text-xs text-center text-white">
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
import { computed } from "vue";
import IconMac from "./icon/IconMac.vue";
import IconLinux from "./icon/IconLinux.vue";
import IconWindow from "./icon/IconWindow.vue";
import IconCommand from "./icon/IconCommand.vue";
import IconPlay from "./icon/IconPlay.vue";
import IconArcade from "./icon/IconArcade.vue";

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
		os = "MacOS";
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = "iOS";
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = "Windows";
	} else if (/Android/.test(userAgent)) {
		os = "Android";
	} else if (!os && /Linux/.test(platform)) {
		os = "Linux";
	}

	return os;
};
</script>
