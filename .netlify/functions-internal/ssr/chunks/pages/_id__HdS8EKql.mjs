/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as createTransitionScope, i as renderHead } from '../astro_rugqU-6t.mjs';
import { useState } from 'preact/hooks';
import { jsxs, Fragment, jsx } from 'preact/jsx-runtime';

function Counter() {
  const [counter, setCounter] = useState(0);
  return jsxs(Fragment, {
    children: [jsx("span", {
      class: "text-yellow-300 text-xl mr-4",
      children: counter
    }), jsx("button", {
      class: "border px-4 py-2 text-xl",
      onClick: () => setCounter((counter2) => counter2 + 1),
      type: "button",
      children: "+"
    }), jsx("button", {
      class: "border px-4 py-2 text-xl",
      onClick: () => setCounter((counter2) => counter2 - 1),
      type: "button",
      children: "-"
    })]
  });
}

const $$Astro$4 = createAstro();
const $$HeaderButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  const { bgColor, bgColorHover, urlRef } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`flex-row justify-center  text-white cursor-pointer ${bgColor}  hover:${bgColorHover} focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100`, "class")}${addAttribute(urlRef, "href")}> ${renderSlot($$result, $$slots["before-text"])} ${renderSlot($$result, $$slots["default"])} </a>`;
}, "D:/dev_20220602/HTML_CS_JS/033_Astrojs_tuto_001/src/components/HeaderButton.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="mb-4 text-5xl tracking-tihgt font-extrabold text-white">
spaceX launches 🚀
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
all the information about SpaceX launches
</p> </div> ${renderComponent($$result, "Counter", Counter, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/dev_20220602/HTML_CS_JS/033_Astrojs_tuto_001/src/components/Counter", "client:component-export": "Counter", "data-astro-transition-persist": createTransitionScope($$result, "aivadjtx") })} <nav class="flex flex-col items-center justify-between w-full text-center md:flex-row"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "bgColor": "bg-red-900", "bgColorHover": "bg-red-400", "urlRef": "/" }, { "before-text": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12h-6a3 3 0 0 1 -3 -3v-2c0 -1.083 .574 -2.033 1.435 -2.56m3.565 -.44h10a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-2"></path><path d="M16 12h2a3 3 0 0 1 3 3v2m-1.448 2.568a2.986 2.986 0 0 1 -1.552 .432h-12a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h6"></path><path d="M7 8v.01"></path><path d="M7 16v.01"></path><path d="M3 3l18 18"></path></svg>`, "default": ($$result2) => renderTemplate` 
CON páginas pregeneradas
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "bgColor": "bg-green-900", "bgColorHover": "bg-green-400", "urlRef": "/index_server" }, { "before-text": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M7 8l0 .01"></path><path d="M7 16l0 .01"></path></svg>`, "default": ($$result2) => renderTemplate` 
SIN páginas pregeneradas
` })} </nav> </header>`;
}, "D:/dev_20220602/HTML_CS_JS/033_Astrojs_tuto_001/src/components/Header.astro", "self");

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/dev_20220602/HTML_CS_JS/033_Astrojs_tuto_001/node_modules/.pnpm/astro@4.3.2_typescript@5.3.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "D:/dev_20220602/HTML_CS_JS/033_Astrojs_tuto_001/src/layouts/Layout.astro", void 0);

const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit: 12
      }
    })
  });
  const {
    docs: launches
  } = await res.json();
  return launches;
};
const getLauncheById = async ({
  id
}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  return launch;
};

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch = null;
  if (id) {
    launch = await getLauncheById({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <picture class="flex justify-center p-4"> <img class="mb-5 rounded-lg"${addAttribute(launch?.links?.patch.small, "src")}${addAttribute(launch?.name, "alt")}> </picture> <h2 class="text-4xl text-white font-bold">Launch # ${launch?.flight_number}</h2> <p class="text-lg">${launch?.details}</p> ${launch != null ? launch?.id : "..."} </article> ` })}`;
}, "D:/dev_20220602/HTML_CS_JS/033_Astrojs_tuto_001/src/pages/aserver/[id].astro", void 0);

const $$file = "D:/dev_20220602/HTML_CS_JS/033_Astrojs_tuto_001/src/pages/aserver/[id].astro";
const $$url = "/aserver/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, getLauncheById as a, getLatestLaunches as g };
