/** Espelho CJS de LEGACY_REDIRECTS para next.config.js (sem TS no config). */
const LEGACY_REDIRECTS = [
  { source: "/historia", destination: "/sobre", permanent: true },
  { source: "/como-trabalho", destination: "/processo", permanent: true },
  { source: "/cases/:slug", destination: "/projetos/:slug", permanent: true },
  { source: "/exploracao", destination: "/contato", permanent: true },
];

module.exports = { LEGACY_REDIRECTS };
