/**
 * schema.org structured data, emitted as one linked @graph.
 * Sample content (see site.ts) is never included, and contact fields
 * only appear once they're filled in.
 */
import { site, services, faqs, work, hero, featured, stories, isSample } from "../data/site";

const SITE = site.url.replace(/\/$/, "");
const ids = { org: `${SITE}/#organization`, website: `${SITE}/#website`, page: `${SITE}/#webpage`, logo: `${SITE}/#logo` };
const muxThumb = (id: string, t = 2) => `https://image.mux.com/${id}/thumbnail.jpg?time=${t}&width=1280`;

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

export function graph() {
  const org: Record<string, unknown> = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ids.org,
    name: site.name,
    url: `${SITE}/`,
    description: site.description,
    logo: { "@type": "ImageObject", "@id": ids.logo, url: `${SITE}/brand/logo.png`, width: 1024, height: 1024 },
    image: `${SITE}/og.png`,
    email: site.email,
    knowsAbout: ["Meta advertising", "Facebook advertising", "Instagram advertising", "Lead generation", "Video production", "Web design"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.body, provider: { "@id": ids.org } },
      })),
    },
  };
  if (site.phone.tel) org.telephone = site.phone.tel;
  if (site.location.city) {
    org.address = {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    };
  }
  if (site.social.length) org.sameAs = site.social;

  const videos = [
    ...(featured.video.playbackId
      ? [videoNode(featured.video.playbackId, `${featured.client.name} of ${featured.client.business}: $80K+ in work booked off $647 in Meta ad spend`, featured.story.join(" "), featured.video.posterTime, featured.video.uploadDate)]
      : []),
    ...(hero.vsl.playbackId ? [videoNode(hero.vsl.playbackId, hero.vsl.title, site.description, hero.vsl.posterTime, hero.vsl.uploadDate)] : []),
    ...stories
      .filter((st) => !isSample(st) && st.video?.playbackId && st.name)
      .map((st) => videoNode(st.video!.playbackId, `${st.name} on working with ${site.name}`, st.outcome, st.video!.posterTime, st.video!.uploadDate)),
    ...work
      .filter((w) => !isSample(w) && w.playbackId)
      .map((w) => videoNode(w.playbackId!, `${w.client}: ${w.title}`, `${w.title} for ${w.client} (${w.industry}).`, w.posterTime)),
  ];

  const realFaqs = faqs.filter((f) => !f.a.startsWith("CONFIRM"));

  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      { "@type": "WebSite", "@id": ids.website, url: `${SITE}/`, name: site.name, publisher: { "@id": ids.org }, inLanguage: "en-US" },
      {
        "@type": "WebPage",
        "@id": ids.page,
        url: `${SITE}/`,
        name: `${site.name} | Meta ads, content and websites for service businesses`,
        description: site.description,
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.org },
        primaryImageOfPage: `${SITE}/og.png`,
        inLanguage: "en-US",
        ...(videos.length ? { video: videos.map((v) => ({ "@id": v["@id"] })) } : {}),
      },
      ...videos,
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        isPartOf: { "@id": ids.page },
        mainEntity: realFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

/** A plain page that belongs to the site, for pages other than the homepage. */
export function pageGraph(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${SITE}${path}#webpage`, url: `${SITE}${path}`, name, description, isPartOf: { "@id": ids.website }, about: { "@id": ids.org }, inLanguage: "en-US" },
    ],
  };
}
