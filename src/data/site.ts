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
  bookingUrl: "#book", // CONFIRM: Calendly or similar link
  location: { city: "", region: "", country: "US" }, // CONFIRM
  social: [] as string[], // full profile URLs: Instagram, YouTube, LinkedIn…
};

export const hero = {
  eyebrow: "Meta ads · Content · Websites",
  title: ["Meta ads that", "make the phone ring."],
  lede:
    "Facebook and Instagram ads are what we do best. We script, film and edit your ads, then launch and manage the campaigns. Backed by high-quality content and websites built to turn clicks into booked jobs.",
  primaryCta: "Book a strategy call",
  secondaryCta: "See our work",
  // Mux playback ID for the showreel. Leave empty to show the placeholder frame.
  showreel: { playbackId: "", title: "Amplify Digital Group showreel", posterTime: 3 },
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

export type Stat = { value: number; prefix?: string; suffix?: string; label: string; sample?: boolean };
export const stats: Stat[] = [
  { value: 0, suffix: "+", label: "Leads generated for clients", sample: true },
  { value: 0, prefix: "$", label: "Average cost per lead", sample: true },
  { value: 0, label: "Videos produced", sample: true },
  { value: 0, suffix: "%", label: "Clients who stay past year one", sample: true },
];

export type Work = {
  client: string;
  industry: string;
  title: string;
  services: string[];
  result?: string;
  // Mux playback ID; without one the card shows a still frame placeholder.
  playbackId?: string;
  posterTime?: number;
  url?: string;
  sample?: boolean;
};
export const work: Work[] = [
  {
    client: "GM Roofing",
    industry: "Roofing · Sacramento Valley",
    title: "New website and videos",
    services: ["Website", "Video"],
    url: "https://gmroofs.com/",
  },
  { client: "Client name", industry: "Industry · City", title: "What you made for them", services: ["Video", "Ads"], sample: true },
  { client: "Client name", industry: "Industry · City", title: "What you made for them", services: ["Ads"], sample: true },
];

/**
 * The headline proof: one client's result, told in a video where you call
 * him and he confirms it. Shown right under the hero.
 */
export const featured = {
  // The hook from the video
  hook: "Would you say ads are worth it if one of my clients landed over $80K in jobs only two weeks after we launched his ads?",
  result: { value: 80, prefix: "$", suffix: "K+", label: "in jobs landed" },
  timeframe: "2 weeks after his ads went live",
  concern: "He'd been burned by a marketer before.",
  // His words on the call about almost not signing
  concernQuote: "At one point I was like, I'm never gonna do this.",
  story: [
    "Trusting a new marketer wasn't easy for him. It took time before he was ready to work with us.",
    "Two weeks after we launched his ads, he'd landed over $80,000 in jobs.",
    "Don't take our word for it. In the video, we call Evaristo and he tells you himself.",
  ],
  client: { name: "Evaristo", business: "Sky Roofing Unlimited Inc.", trade: "Roofing", city: "Stockton, CA" },
  quote: "The marketing pays for itself.", // his words on the call
  // Mux playback ID of the video. `ratio` is "9 / 16" for vertical, "16 / 9" for horizontal.
  video: { playbackId: "", ratio: "9 / 16", posterTime: 2, uploadDate: "2026-10-24" }, // posted on Instagram
};

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
// The quote and byline only show once they're filled in.
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
    video: { playbackId: "", ratio: "9 / 16" },
  },
  {
    name: "Owner name",
    business: "Business · City",
    concern: "“I can't tell if marketing is even working.”",
    outcome: "What the reporting showed them, month by month.",
    quote: "Their own words about working with you.",
    sample: true,
  },
];

// CONFIRM every answer. These go into FAQPage schema, so they must be true.
export const faqs = [
  {
    q: "Who do you work with?",
    a: "Service businesses that want more booked jobs from their own area: contractors, home services and local professionals. If we don't think we can help you, we'll say so on the first call.",
  },
  {
    q: "How long until I see results?",
    a: "Meta ads can start bringing in leads within the first couple of weeks after launch. Evaristo at Sky Roofing landed over $80K in jobs two weeks in. Every market is different, so we'll give you a realistic timeline for yours before you sign anything.",
  },
  {
    q: "Do I have to be on camera?",
    a: "No. We can film your crew, your work and your finished projects instead. If you do want to be on camera, we keep it short and guide you through it.",
  },
  {
    q: "How will I know it's working?",
    a: "Every call, form and booking is tracked back to where it came from. Each month you get a short report with leads, cost per lead and what we're changing next.",
  },
  {
    q: "Am I locked into a long contract?",
    a: "CONFIRM: describe your actual terms here.",
  },
  {
    q: "What does it cost?",
    a: "It depends on what you need and how fast you want to grow. After the strategy call we send a fixed proposal, with no surprises after you sign.",
  },
];

export const isSample = (x: { sample?: boolean }) => Boolean(x.sample);
