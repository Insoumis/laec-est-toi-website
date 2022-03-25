import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "../views/PageNotFound.vue";
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/game",
			name: "game",
			component: () => import("../views/GameView.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			name: "404",
			component: PageNotFound,
		},
	],
});

export default router;
