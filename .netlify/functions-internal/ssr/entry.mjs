import { renderers } from './renderers.mjs';
import { manifest } from './manifest_kGtt19Dm.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_scAMtswU.mjs');
const _page1 = () => import('./chunks/404_Yowx-swk.mjs');
const _page2 = () => import('./chunks/_id__fHDINmGR.mjs');
const _page3 = () => import('./chunks/index_SVBRAA3I.mjs');
const _page4 = () => import('./chunks/index_server_6MN_zGHN.mjs');
const _page5 = () => import('./chunks/_id__zsSpk-0J.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.3.2_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/aserver/[id].astro", _page2],
    ["src/pages/index.astro", _page3],
    ["src/pages/index_server.astro", _page4],
    ["src/pages/launch/[id].astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
