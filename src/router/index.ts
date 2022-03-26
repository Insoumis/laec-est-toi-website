import {
	createRouter as _createRouter,
	createMemoryHistory,
	createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import Credit from "@/views/Credit.vue";
import NotFoundView from "../views/NotFoundView.vue";

export const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/game",
		name: "game",
		component: GameView,
	},
	{
		path: "/credit",
		name: "credit",
		component: Credit,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "404",
		component: NotFoundView,
	},
];

export const createRouter = () => {
	return _createRouter({
		// use appropriate history implementation for server/client
		// import.meta.env.SSR is injected by Vite.
		history: import.meta.env.SSR
			? createMemoryHistory()
			: createWebHistory(import.meta.env.BASE_URL),
		routes,
	});
};

export default createRouter;
