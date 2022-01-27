const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/get-started.svelte"),
	() => import("../../src/routes/begin-nu.svelte"),
	() => import("../../src/routes/bedankt.svelte"),
	() => import("../../src/routes/thanks.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/get-started.svelte
	[/^\/get-started\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/begin-nu.svelte
	[/^\/begin-nu\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/bedankt.svelte
	[/^\/bedankt\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/thanks.svelte
	[/^\/thanks\/?$/, [c[0], c[6]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];