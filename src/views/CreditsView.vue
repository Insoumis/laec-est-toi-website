<template>
	<BackgroundImages />

	<MainHeader should-show />

	<div
		class="relative flex justify-center my-auto w-full sm:p-16 align-center"
	>
		<div
			class="flex font-sofia relative flex-col sm:w-4/12 w-screen md:px-16 md:py-12 border border-black shadow-2xl bg-main-grey sm:rounded-2xl sm:min-w-[600px] text-white"
		>
			<div class="text-6xl font-draxel text-center">Remerciements</div>
			<div class="text-center text-xl space-y-4 mt-6 flex flex-col">
				<div class="italic font-sofia m-4 text-white">
					D'après une idee de Trollune et Fanelia
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">DEVELOPPEURS</div>
					<div>Adrenesis</div>
					<div>Trollune</div>
					<div>Roipoussiere</div>
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">
						DEVELOPPEURS D'OUTILS
					</div>

					<div>Adrenesis</div>
					<div>Trollune</div>
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">GRAPHISTES</div>

					<div>Lametyste</div>
					<div>Niwatori</div>
					<div>AudreyH</div>
					<div>Koten</div>
					<div>Trollune</div>
					<div>Zegueux</div>
					<div>Da_Schtroumpf</div>
					<div>Miidnight</div>
					<div>Manda G</div>
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">
						ARTISTES TECHNIQUE
					</div>

					<div>Adrenesis</div>
					<div>Trollune</div>
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">
						COMPOSITION MUSICALE
					</div>

					<div>Precheurius Studio CK Project</div>
					<div>AlphaXIII Studio CK Project</div>
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">
						PERFORMANCE MUSICALE
					</div>

					<div>Precheurius Studio CK Project</div>
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">BRUITAGES</div>

					<div>Wilfried</div>
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">CONCEPTS DE JEU</div>

					<div>Trollune</div>
					<div>Cyril M.</div>
					<div>Roipoussiere</div>
					<div>Stheal</div>
					<div>IvanC</div>
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">
						CONCEPTION DE NIVEAU
					</div>

					<div>Miidnight</div>
					<div>Trollune</div>
					<div>Dazo</div>
					<div>IvanC</div>
					<div>Zargett</div>
					<div>Copeau</div>
					<div>Koten</div>
					<div>anthony</div>
					<div>Stheal</div>
				</div>

				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">ORGANISATION</div>

					<div>Miidnight</div>
					<div>Precheurius Studio CK Project</div>
				</div>

				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">WEBSITE</div>

					<div>Aikru</div>
					<div>Nate Lafeuille</div>
				</div>

				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">TRAILER</div>

					<div>Zegueux</div>
					<div>Precheurius Studio CK Project</div>
					<div>Ista</div>
					<div>Trollune</div>
					<div>Dazo</div>
				</div>

				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">VERIFICATION</div>

					<div>Koten</div>
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">TESTEUR⋅ES</div>

					<div>DanLo</div>
					<div>NightGlow</div>
					<div>JeanSebastienBachOfficiel</div>
					<div>SpyBob</div>
					<div>anthony</div>
					<div>Matteo & Gianni</div>
					<div>Saccharose4965</div>
				</div>

				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">COMMUNICATION</div>

					<div>Dazo</div>
					<div>Miidnight</div>
					<div>Da_Schtroumpf</div>
					<div>Zegueux</div>
					<div>Majhinell</div>
				</div>

				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">REMERCIEMENTS</div>

					<div>Delphou</div>
					<div>Fanélia</div>
					<div>Karibou</div>
					<div>Ista</div>
					<div>NightGlow</div>
					<div>Gobz</div>
					<div>Cyril M.</div>
					<div>QGuLL</div>
					<div>Wesson</div>
					<div>Sno</div>
				</div>
				<div class="font-draxel">
					<div class="text-2xl mt-2 text-gold">
						REMERCIEMENTS SPECIAUX
					</div>

					<div>BABA IS YOU</div>
					<div>Kenney</div>
					<div>Le Bon Sens</div>
					<div>Cyril M.</div>
					<div>Herastodes</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import BackgroundImages from "../components/BackgroundImages.vue";
import MainHeader from "../components/MainHeader.vue";

import { useHead } from "@vueuse/head";

useHead({
	title: "LAEC EST TOI - Crédits",
	meta: [
		{
			name: `description`,
			content: `Changez les règles du jeu !`,
		},
		// {},
	],
});
</script>
