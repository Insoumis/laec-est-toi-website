// Pre-render the app into static HTML.
// run `npm run generate` and then `dist/static` can be served as a static site.

const fs = require("fs");
const path = require("path");

const toAbsolute = (p) => path.resolve(__dirname, p);

const manifest = require("./dist/static/ssr-manifest.json");
const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const { render } = require("./dist/server/entry-server.js");

// determine routes to pre-render from src/pages
const routesToPrerender = fs
	.readdirSync(toAbsolute("src/views"))
	.map((file) => {
		const name = file.replace(/View\.vue$/, "").toLowerCase();
		return name === "home" ? `/` : `/${name}`;
	});

(async () => {
	// pre-render each route...
	for (const url of routesToPrerender) {
		const [appHtml, preloadLinks, headTags, htmlAttrs, bodyAttrs] =
			await render(url, manifest);

		const html = template
			.replace(`<html lang="fr">`, `<html lang="fr"${htmlAttrs}>`)
			.replace(`<!--head-tags-->`, headTags)
			.replace(`<!--preload-links-->`, preloadLinks)
			.replace(`<body>`, `<body${bodyAttrs}>`)
			.replace(`<!--app-html-->`, appHtml);

		const filePath = `dist/static${url === "/" ? "/index" : url}.html`;
		fs.writeFileSync(toAbsolute(filePath), html);
		console.log("pre-rendered:", filePath);
	}

	// done, delete ssr manifest
	// fs.unlinkSync(toAbsolute("dist/static/ssr-manifest.json"));
})();
