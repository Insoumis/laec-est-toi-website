import { createSSRApp } from "vue";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import createRouter from "./router";
import "./index.css";

export const createApp = () => {
	const app = createSSRApp(App);
	const router = createRouter();
	const head = createHead();
	app.use(router).use(head);
	return { app, router, head };
};
