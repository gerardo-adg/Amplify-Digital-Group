/**
 * Every word and number on the landing page lives here.
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
  email: "hello@amplifydigitalgroup.net", // CONFIRM
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
  primaryCta: "Get my free strategy call",
  ctaNote: "7 quick questions · About 60 seconds · We'll call you personally",
  // The VSL (film it horizontal, 16:9). Leave playbackId empty to show the
  // placeholder frame; the caption only shows once the video is in.
  vsl: {
    playbackId: "",
    posterTime: 0,
    title: "How Amplify Digital Group gets home-service businesses booked with Meta ads",
    caption: "Watch how Evaristo booked $80K+ in work off $647 in ad spend.",
    uploadDate: "", // e.g. "2026-11-05T12:00:00-08:00"
  },
};

export type Service = {
  title: string;
  body: string;
  points: string[];
  icon: "web" | "video" | "ads";
  // The main service gets the big card
  main?: boolean;
};
export const services: Service[] = [
  {
    icon: "ads",
    main: true,
    title: "Meta ads",
    body: "Our main service. Facebook and Instagram campaigns that put your business in front of the people in your area who need what you do, and turn them into leads.",
    points: ["We script, film and edit your ads", "We launch and manage your campaigns", "Targeted to the areas you serve", "Budgets you approve"],
  },
  {
    icon: "video",
    title: "High-quality content",
    body: "We come to you, film the work and the people, and cut it for your ads, your site and your social.",
    points: ["On-site shoots", "Short-form for Reels and TikTok", "Ad creative that stops the scroll"],
  },
  {
    icon: "web",
    title: "Websites",
    body: "Fast, good-looking sites built around one goal: getting the visitor to call or book.",
    points: ["Custom design, no templates", "Built for phones first", "Schema markup built in"],
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
  // He booked $80–90K; the headline uses the low end so it never overstates.
  results: [
    { value: 80, prefix: "$", suffix: "K+", label: "in work booked" },
    { value: 647, prefix: "$", suffix: "", label: "in ad spend" },
  ],
  timeframe: "Two weeks after his Meta ads went live, with estimates still pending.",
  concern: "He'd been burned by a marketer before.",
  // His words on the call about almost not signing
  concernQuote: "At one point I was like, I'm never gonna do this.",
  // One short paragraph under the numbers; the video does the rest
  story: [
    "He booked $80–90K in work, over $120 for every $1 of ad spend. Don't take our word for it: in the video, we call Evaristo and he tells you himself.",
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
    a: "So had Evaristo. Two weeks after we launched his Meta ads, he'd booked $80K+ in work off $647 in ad spend.",
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
    result: "$80K+ booked off $647 in ads",
    detail: "Two weeks after his Meta ads went live, with estimates still pending.",
    quote: "The marketing pays for itself.",
    name: "Evaristo",
    business: "Sky Roofing Unlimited Inc. · Stockton, CA",
    video: { ...featured.video, title: "Evaristo of Sky Roofing Unlimited Inc.: $80K+ booked off $647 in Meta ad spend", label: "Watch the call" },
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
    a: "Meta ads can start bringing in leads within the first couple of weeks after launch. Evaristo at Sky Roofing booked over $80K in work off $647 in ad spend, two weeks in. Every market is different, and we'll talk through yours on the call.",
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
