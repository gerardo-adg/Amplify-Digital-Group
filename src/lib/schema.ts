/**
 * schema.org structured data, emitted as one linked @graph per page.
 * Sample content (see site.ts) is never included, and contact fields
 * only appear once they're filled in.
 */
import { site, services, faqs, hero, featured, stories, isSample, type Service } from "../data/site";

const SITE = site.url.replace(/\/$/, "");
export const ids = { org: `${SITE}/#organization`, website: `${SITE}/#website`, logo: `${SITE}/#logo` };
const muxThumb = (id: string, t = 2) => `https://image.mux.com/${id}/thumbnail.jpg?time=${t}&width=1280`;
const pageId = (path: string) => `${SITE}${path}#webpage`;

function videoNode(playbackId: string, name: string, description: string, posterTime?: number, uploadDate?: string) {
  return {
    "@type": "VideoObject",
    "@id": `${SITE}/#video-${playbackId}`,
    name,
    description,
    thumbnailUrl: muxThumb(playbackId, posterTime),
    contentUrl: `https://stream.mux.com/${playbackId}.m3u8`,
    ...(uploadDate ? { uploadDate } : {}),
    publisher: { "@id": ids.org },
  };
}

/** Client videos with enough detail for Google (an upload date is required). */
export function clientVideos() {
  return [
    ...(featured.video.playbackId && featured.video.uploadDate
      ? [videoNode(featured.video.playbackId, `${featured.client.name} of ${featured.client.business}: 30 days of Meta ads, on the jobsite`, featured.story.join(" "), featured.video.posterTime, featured.video.uploadDate)]
      : []),
    ...(featured.callVideo.playbackId && featured.callVideo.uploadDate
      ? [videoNode(featured.callVideo.playbackId, `${featured.client.name} of ${featured.client.business} on the phone, two weeks after launch`, featured.hook, featured.callVideo.posterTime, featured.callVideo.uploadDate)]
      : []),
    ...stories
      .filter((st) => !isSample(st) && st.video?.playbackId && st.video.uploadDate && st.name)
      .map((st) => videoNode(st.video!.playbackId, `${st.name} on working with ${site.name}`, st.outcome, st.video!.posterTime, st.video!.uploadDate)),
  ];
}

const serviceId = (s: Service) => `${SITE}/services/${s.slug}/#service`;
export function serviceNode(s: Service) {
  return {
    "@type": "Service",
    "@id": serviceId(s),
    name: s.title,
    serviceType: s.title,
    description: s.page.seoDescription,
    url: `${SITE}/services/${s.slug}/`,
    provider: { "@id": ids.org },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "BusinessAudience", audienceType: "Contractors and home-service businesses" },
  };
}

function orgNode() {
  const org: Record<string, unknown> = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ids.org,
    name: site.name,
    url: `${SITE}/`,
    description: site.description,
    logo: { "@type": "ImageObject", "@id": ids.logo, url: `${SITE}/brand/logo.png`, width: 1024, height: 1024 },
    image: `${SITE}/og.png`,
    legalName: site.legalName,
    email: site.email,
    knowsAbout: ["Meta advertising", "Facebook advertising", "Instagram advertising", "Lead generation", "Video production", "Web design"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing services",
      itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@id": serviceId(s) } })),
    },
  };
  if (site.phone.tel) org.telephone = site.phone.tel;
  if (site.location.city) {
    org.address = { "@type": "PostalAddress", addressLocality: site.location.city, addressRegion: site.location.region, addressCountry: site.location.country };
  }
  if (site.social.length) org.sameAs = site.social;
  return org;
}

export function faqNode(path: string, list = faqs) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE}${path}#faq`,
    isPartOf: { "@id": pageId(path) },
    mainEntity: list.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

type Crumb = { name: string; path: string };
type PageOpts = {
  path: string;
  name: string;
  description: string;
  type?: string;
  // Trail after Home, e.g. [{ name: "Services", path: "/services/" }]
  crumbs?: Crumb[];
  // More nodes for this page (services, FAQs, videos…)
  nodes?: Record<string, unknown>[];
};

/** The full graph for a page: the organization, the site, the page and anything extra. */
export function pageGraph(pathOrOpts: string | PageOpts, name?: string, description?: string) {
  const o: PageOpts = typeof pathOrOpts === "string" ? { path: pathOrOpts, name: name!, description: description! } : pathOrOpts;
  const nodes = o.nodes ?? [];
  const videos = nodes.filter((n) => n["@type"] === "VideoObject");
  const page: Record<string, unknown> = {
    "@type": o.type ?? "WebPage",
    "@id": pageId(o.path),
    url: `${SITE}${o.path}`,
    name: o.name,
    description: o.description,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.org },
    primaryImageOfPage: `${SITE}/og.png`,
    inLanguage: "en-US",
    ...(videos.length ? { video: videos.map((v) => ({ "@id": v["@id"] })) } : {}),
  };
  const graph: Record<string, unknown>[] = [
    orgNode(),
    { "@type": "WebSite", "@id": ids.website, url: `${SITE}/`, name: site.name, publisher: { "@id": ids.org }, inLanguage: "en-US" },
    page,
  ];
  if (o.crumbs?.length) {
    const trail = [{ name: "Home", path: "/" }, ...o.crumbs];
    page.breadcrumb = { "@id": `${SITE}${o.path}#breadcrumb` };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${SITE}${o.path}#breadcrumb`,
      itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE}${c.path}` })),
    });
  }
  return { "@context": "https://schema.org", "@graph": [...graph, ...nodes] };
}

/** The ads landing page (/start/). */
export function graph() {
  const vsl = hero.vsl.playbackId ? [videoNode(hero.vsl.playbackId, hero.vsl.title, site.description, hero.vsl.posterTime, hero.vsl.uploadDate)] : [];
  return pageGraph({
    path: "/start/",
    name: `${site.name} | Meta ads, content and websites for service businesses`,
    description: site.description,
    nodes: [...clientVideos(), ...vsl, faqNode("/start/")],
  });
}
