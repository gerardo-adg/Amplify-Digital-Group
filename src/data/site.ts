/**
 * Every word and number on the website and the landing page lives here.
 *
 * Anything marked `sample: true` is a stand-in. It renders with a small
 * "Sample" tag so nobody mistakes it for a real result, and it is left out
 * of the schema markup. Replace it with the real thing and delete the flag.
 * Never publish invented numbers or quotes.
 */

export const site = {
  name: "Amplify Digital Group",
  shortName: "Amplify",
  url: "https://amplifydigitalgroup.net",
  description:
    "Amplify Digital Group runs Meta ads for service businesses, backed by high-quality content and websites built to turn clicks into booked jobs.",
  email: "gerardo@amplifydigitalgroup.net",
  phone: { display: "", tel: "" }, // e.g. { display: "(916) 555-0100", tel: "+19165550100" }
  // Every "get started" button goes to the quiz funnel
  ctaUrl: "/quiz/",
  // Meta Pixel ID (Events Manager → Data sources). When set, every page
  // tracks PageView and each quiz submission tracks a Lead.
  metaPixelId: "",
  location: { city: "", region: "", country: "US" }, // CONFIRM
  social: [] as string[], // full profile URLs: Instagram, YouTube, LinkedIn…
};

export const hero = {
  // Call out who it's for, say what they already believe, then promise the dream.
  // Headline test variants (2, 3…) will sit alongside this one.
  callout: "Contractors & Home-Service Owners:",
  title: ["You Can Handle More Jobs.", "We'll Bring Them to You."],
  subheadline:
    "We script, film, launch and manage your Meta ads, so you can do what you do best.",
  // What they get, then how they get it
  primaryCta: "Apply Now",
  ctaNote: "4 quick questions · About 30 seconds · We'll call you personally",
  // The VSL (film it horizontal, 16:9). Leave playbackId empty to show the
  // placeholder frame; the caption only shows once the video is in.
  vsl: {
    playbackId: "",
    posterTime: 0,
    title: "How Amplify Digital Group gets home-service businesses booked with Meta ads",
    caption: "Watch how Evaristo did $94K in revenue in his first 30 days off $1,300 in ad spend.",
    uploadDate: "", // e.g. "2026-11-05T12:00:00-08:00"
  },
};

// The website home page hero (the ads landing page uses `hero` above)
export const homeHero = {
  eyebrow: "Meta Ads for Contractors & Home-Service Pros",
  title: ["Video Ads That Keep Your Crews Busy."],
  sub: "We script, film, launch and manage everything. You just answer the phone.",
};

export type Service = {
  slug: string;
  title: string;
  // Short line for cards and the menu
  body: string;
  points: string[];
  icon: "web" | "video" | "ads";
  // The main service gets the big card
  main?: boolean;
  // Its own page at /services/<slug>/
  page: {
    seoTitle: string;
    seoDescription: string;
    headline: string;
    intro: string;
    included: { title: string; body: string }[];
    forWho: string;
  };
};
export const services: Service[] = [
  {
    slug: "meta-ads",
    icon: "ads",
    main: true,
    title: "Meta ads",
    body: "Our main service. Facebook and Instagram campaigns that put your business in front of the people in your area who need what you do, and turn them into leads.",
    points: ["We script, film and edit your ads", "We launch and manage your campaigns", "Targeted to the areas you serve", "Budgets you approve"],
    page: {
      seoTitle: "Meta ads for contractors and home-service businesses",
      seoDescription:
        "Facebook and Instagram ads for contractors, done for you: we script, film and edit the ads, then launch and manage the campaigns in the areas you serve.",
      headline: "Facebook & Instagram ads that bring in real jobs.",
      intro:
        "Meta ads are what we do best. We handle the whole thing: the script, the shoot, the edit, the campaign and the day-to-day management. Your job is to show up for the shoot and answer the phone.",
      included: [
        { title: "Scripting", body: "We write every ad, so you know exactly what to say before the camera rolls." },
        { title: "Filming and editing", body: "We film on location and cut the footage into ads made for Facebook and Instagram." },
        { title: "Campaign setup", body: "We build your campaigns and aim them at the people in the areas you serve." },
        { title: "Ongoing management", body: "We keep running and managing your campaigns after launch." },
        { title: "Budgets you approve", body: "You decide what goes into ads. Nothing gets spent without your OK." },
      ],
      forWho: "Contractors and home-service businesses that can take on more work and want a steadier flow of jobs than referrals alone.",
    },
  },
  {
    slug: "content",
    icon: "video",
    title: "High-quality content",
    body: "We come to you, film the work and the people, and cut it for your ads, your site and your social.",
    points: ["On-site shoots", "Short-form for Reels and TikTok", "Ad creative that stops the scroll"],
    page: {
      seoTitle: "Video content for contractors",
      seoDescription:
        "On-site video shoots for contractors and home-service businesses: ad creative, short-form for Reels and TikTok, and footage for your website.",
      headline: "Video that shows people why they should pick you.",
      intro:
        "We come to you and film the work, the crew and the people behind the business. Then we cut it into ads, short-form videos for Reels and TikTok, and footage for your website.",
      included: [
        { title: "On-site shoots", body: "We film at your jobs and your shop, where the real work happens." },
        { title: "Scripts and coaching", body: "Not comfortable on camera? We script it and guide you through every take." },
        { title: "Ad creative", body: "Videos built to stop the scroll and get people to reach out." },
        { title: "Short-form for social", body: "Vertical cuts for Instagram Reels, Facebook and TikTok." },
      ],
      forWho: "Owners who know their work is good but don't have the time, gear or know-how to show it off on video.",
    },
  },
  {
    slug: "websites",
    icon: "web",
    title: "Websites",
    body: "Fast, good-looking sites built around one goal: getting the visitor to call or book.",
    points: ["Custom design, no templates", "Built for phones first", "Schema markup built in"],
    page: {
      seoTitle: "Websites for contractors",
      seoDescription:
        "Custom websites for contractors and home-service businesses: fast, built for phones first, with search-ready schema markup and a clear path to call or request an estimate.",
      headline: "A website that turns visitors into calls.",
      intro:
        "Your ads and your reputation send people to your website. We build sites that look the part, load fast on a phone and make it easy to call or ask for an estimate.",
      included: [
        { title: "Custom design", body: "Built for your business and your brand, not a template." },
        { title: "Built for phones first", body: "Most of your visitors are on a phone, so that's where we start." },
        { title: "Search-ready", body: "Schema markup, page titles and descriptions set up so search engines understand your business." },
        { title: "A clear next step", body: "Click-to-call and estimate forms on every page, so visitors know what to do." },
      ],
      forWho: "Businesses whose current site is slow, outdated or hard to use on a phone, or who don't have one yet.",
    },
  },
];

// The main site's menu
export const nav = [
  { label: "Services", href: "/services/" },
  { label: "Results", href: "/results/" },
  { label: "About", href: "/about/" },
];

// Contractors we work with, for the scrolling strip under the home hero.
// `logo` is a file in public/clients/ (transparent WebP, 240px tall, light enough to read on the dark band);
// without one, the name shows as text. Only list real clients.
// `scale` shrinks a logo that looks too big next to the others (wide wordmarks).
// `boost` brightens a logo whose colors go too dark in the black-and-white strip.
export const clients: { name: string; logo?: string; width?: number; height?: number; scale?: number; boost?: number }[] = [
  { name: "Triple R Roofing LLC", logo: "/clients/triple-r-roofing.webp", width: 280, height: 240 },
  { name: "Sky Roofing Unlimited Inc.", logo: "/clients/sky-roofing.webp", width: 480, height: 240, scale: 0.85 },
  { name: "Samperio's Roofing Inc.", logo: "/clients/samperios-roofing.webp", width: 239, height: 240 },
  { name: "Speed Plumbing Pros", logo: "/clients/speed-plumbing-pros.webp", width: 370, height: 240 },
  { name: "GM Roofing", logo: "/clients/gm-roofing.webp", width: 384, height: 240, scale: 0.85 },
  { name: "Arbor Evergreen Tree Care", logo: "/clients/arbor-evergreen.webp", width: 220, height: 240 },
  { name: "Blackstone Pools", logo: "/clients/blackstone-pools.webp", width: 825, height: 240, scale: 0.6 },
  { name: "AB Bespoke Home", logo: "/clients/ab-bespoke-home.webp", width: 238, height: 240 },
  { name: "B & S Painting Inc.", logo: "/clients/bs-painting.webp", width: 606, height: 240, scale: 0.7 },
  { name: "Alba's Roofing", logo: "/clients/albas-roofing.webp", width: 637, height: 240, scale: 0.7 },
  { name: "RG Roofing Services Inc", logo: "/clients/rg-roofing.webp", width: 665, height: 240, scale: 0.7, boost: 2.6 },
  { name: "Sierra Valley Tree Service", logo: "/clients/sierra-valley.webp", width: 303, height: 240 },
  { name: "DLM Builders", logo: "/clients/dlm-builders.webp", width: 297, height: 240, boost: 2 },
];

// A website we built: shown on Results and the Websites page
export const websiteProjects = [
  {
    client: "GM Roofing",
    place: "Sacramento Valley, CA",
    url: "https://gmroofs.com/",
    body: "A new website for GM Roofing, with a page for every service and a free estimate form, plus video content for their marketing.",
    tags: ["Website", "Video"],
  },
];

// How every Meta ads client is handled, start to finish.
export const steps = [
  { title: "Script", body: "We write the ads for you, so you know exactly what to say before the camera rolls." },
  { title: "Film", body: "We come to you and film on location. Nervous on camera? We're patient, and it gets easier with every video." },
  { title: "Edit", body: "We cut the footage into scroll-stopping ads made for Facebook and Instagram." },
  { title: "Launch", body: "We build and launch your campaigns, aimed at the people in the areas you serve." },
  { title: "Manage", body: "We keep running and managing your campaigns after launch, so you can get back to the work." },
];

/**
 * The headline proof: one client's result, told in a video where you call
 * him and he confirms it. Shown right under the hero.
 */
export const featured = {
  // The hook from the video
  hook: "Would you say ads are worth it if one of my clients landed over $80K in jobs only two weeks after we launched his ads?",
  // His first 30 days of Meta ads. (The video was recorded at two weeks, when he had $80K+ booked.)
  results: [
    { value: "94", prefix: "$", suffix: "K", label: "in revenue" },
    { value: "1,300", prefix: "$", suffix: "", label: "in ad spend" },
  ],
  timeframe: "His first 30 days of Meta ads with us.",
  concern: "He'd been burned by a marketer before.",
  // His words on the call about almost not signing
  concernQuote: "At one point I was like, I'm never gonna do this.",
  // One short paragraph under the numbers; the video does the rest
  story: [
    "That's over $70 in revenue for every $1 of ad spend. Two weeks in, he already had $80K+ booked, which is when we called him for the video. Don't take our word for it: Evaristo tells you himself.",
  ],
  client: { name: "Evaristo", business: "Sky Roofing Unlimited Inc.", trade: "Roofing", city: "Stockton, CA" },
  quote: "The marketing pays for itself.", // his words on the call
  // Mux playback ID of the video. `ratio` is "9 / 16" for vertical, "16 / 9" for horizontal.
  // posterTime is in seconds: 74 = the 1:14 frame. uploadDate = posted on Instagram (Pacific time).
  video: { playbackId: "2v2jub58TG9M9kdJ6PPqEVfZS9zfpPEuZzRAGh00K00500", ratio: "9 / 16", posterTime: 74, uploadDate: "2026-10-24T12:00:00-07:00" },
};

// The three biggest objections, most common first, answered right under the hero
export const objections = [
  {
    q: "“I've been burned by marketers before.”",
    a: "So had Evaristo. In his first 30 days of Meta ads with us, he did $94K in revenue off $1,300 in ad spend.",
  },
  {
    q: "“I'm not good on camera.”",
    a: "Neither was Giovanni. His first shoot took six hours and we stayed patient. We script every video, and it gets easier each time.",
  },
  {
    q: "“I don't have time for marketing.”",
    a: "Your only job is to show up for the shoot. We script, film, edit, launch and manage everything else.",
  },
];

export type Story = {
  name: string;
  business: string;
  concern: string;
  outcome: string;
  quote: string;
  // A short label like "30 days in", shown on the card
  when?: string;
  // Their own words about the concern, shown under it
  concernQuote?: string;
  // Mux playback ID of their testimonial; `ratio` "9 / 16" for vertical
  video?: { playbackId: string; ratio?: string; posterTime?: number; uploadDate?: string };
  sample?: boolean;
};
// The worry they had before signing, what actually happened, and their words.
export const stories: Story[] = [
  {
    name: "Giovanni",
    business: "GM Roofing · Sacramento, CA",
    when: "30 days in",
    concern: "He was super shy on camera.",
    concernQuote: "When I first started, I was super shy. I remember my first video, it took like 6 hours.",
    outcome:
      "We stayed patient through that first six-hour shoot, waiting and helping him out. With every video since, it's gotten much easier. 30 days in, he's super happy with the service.",
    quote: "Overall, man, they're good people. Highly recommend them to anybody who's looking to market their services online.",
    // posterTime in seconds. Add uploadDate (e.g. "2026-10-20T12:00:00-07:00") to put it in the schema.
    video: { playbackId: "QhpTSe00snqvNVBNpveF5CXp0295WSHzSnKXA01WkwvLhI", ratio: "9 / 16", posterTime: 2 },
  },
];

// The two client proof cards on the landing page, next to their videos
export const proofCards = [
  {
    result: "$94K in 30 days off $1,300 in ads",
    detail: "Revenue from his first 30 days of Meta ads. He had $80K+ booked in the first two weeks.",
    quote: "The marketing pays for itself.",
    name: "Evaristo",
    business: "Sky Roofing Unlimited Inc. · Stockton, CA",
    video: { ...featured.video, title: "Evaristo of Sky Roofing Unlimited Inc. on his first results with Meta ads", label: "Watch the call" },
  },
  {
    result: "Camera-shy to “highly recommend”",
    detail: "30 days in. His first video took six hours, and it's gotten much easier with every one since.",
    quote: "They were super patient there, just waiting, helping me out.",
    name: "Giovanni",
    business: "GM Roofing · Sacramento, CA",
    video: { ...stories[0].video!, title: "Giovanni of GM Roofing on working with Amplify Digital Group", label: "Watch" },
  },
];

// Only answers we know are true; they also go into FAQPage schema.
export const faqs = [
  {
    q: "Who do you work with?",
    a: "Contractors and home-service businesses that want more booked jobs from their own area, like roofers, HVAC companies, plumbers and remodelers.",
  },
  {
    q: "How long until I see results?",
    a: "Meta ads can start bringing in leads within the first couple of weeks after launch. Evaristo at Sky Roofing had $80K+ booked two weeks in, and $94K in revenue by day 30 off $1,300 in ad spend. Every market is different, and we'll talk through yours on the call.",
  },
  {
    q: "What if I'm not comfortable on camera?",
    a: "We script every video and guide you through the shoot. Giovanni at GM Roofing was super shy at first, and his first video took about six hours. We stayed patient, and it's gotten much easier with every video.",
  },
  {
    q: "What happens after I take the quiz?",
    a: "We look over your answers and reach out to you personally to talk about your business and whether we're a fit.",
  },
];

export const isSample = (x: { sample?: boolean }) => Boolean(x.sample);
