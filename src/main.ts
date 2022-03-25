// import { createApp } from "vue";
import { createPinia } from "pinia";
import { createSSRApp } from "vue";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import createRouter from "./router";
import "./index.css";

export const createApp = () => {
	const app = createSSRApp(App);
	const router = createRouter();
	const head = createHead();
	const pinia = createPinia();
	app.use(router).use(head).use(pinia);
	return { app, router };
};
