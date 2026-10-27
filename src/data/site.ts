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
  // CONFIRM: one sentence that says who you help and what they get.
  description:
    "Amplify Digital Group builds websites, video and paid ads for service businesses, and reports on every lead they produce.",
  email: "hello@amplifydigitalgroup.net", // CONFIRM
  phone: { display: "", tel: "" }, // e.g. { display: "(916) 555-0100", tel: "+19165550100" }
  bookingUrl: "#book", // CONFIRM: Calendly or similar link
  location: { city: "", region: "", country: "US" }, // CONFIRM
  social: [] as string[], // full profile URLs: Instagram, YouTube, LinkedIn…
};

export const hero = {
  eyebrow: "Websites · Video · Paid ads",
  title: ["Marketing that", "makes the phone ring."],
  lede:
    "We plan it, film it, build it and run it. Then we show you exactly which calls and jobs came from it, every month.",
  primaryCta: "Book a strategy call",
  secondaryCta: "See our work",
  // Mux playback ID for the showreel. Leave empty to show the placeholder frame.
  showreel: { playbackId: "", title: "Amplify Digital Group showreel", posterTime: 3 },
};

export type Service = { title: string; body: string; points: string[]; icon: "web" | "video" | "ads" | "search" };
// CONFIRM: rename, drop or add to match what you actually sell.
export const services: Service[] = [
  {
    icon: "web",
    title: "Websites that convert",
    body: "Fast, search-ready sites built around one goal: getting the visitor to call or book.",
    points: ["Custom design, no templates", "Schema markup and local SEO built in", "Loads in under two seconds"],
  },
  {
    icon: "video",
    title: "Video content",
    body: "We come to you, film the work and the people, and cut it for your site, ads and social.",
    points: ["On-site shoots", "Short-form for Reels and TikTok", "Ad creative that stops the scroll"],
  },
  {
    icon: "ads",
    title: "Paid ads",
    body: "Meta and Google campaigns aimed at the customers you want, in the areas you serve.",
    points: ["Lead forms and call tracking", "Weekly creative testing", "Budgets you approve"],
  },
  {
    icon: "search",
    title: "Search and reputation",
    body: "Show up when people search for what you do, and give them reasons to pick you.",
    points: ["Google Business Profile", "Review generation", "Local landing pages"],
  },
];

// CONFIRM: your real onboarding steps.
export const steps = [
  { title: "Strategy call", body: "30 minutes on your goals, your market and what has or hasn't worked before. No pitch deck." },
  { title: "Plan and shoot", body: "We map the offer, the pages and the ads, then film on location in a single day." },
  { title: "Build and launch", body: "Site, tracking and campaigns go live together, so every lead is counted from day one." },
  { title: "Report and improve", body: "A plain-English report each month: leads, cost per lead, and what we're changing next." },
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
    title: "New website, project films and local SEO",
    services: ["Website", "Video", "SEO"],
    url: "https://gmroofs.com/",
    sample: true, // CONFIRM you may name them, and add a result + video
  },
  { client: "Client name", industry: "Industry · City", title: "What you made for them", services: ["Video", "Ads"], sample: true },
  { client: "Client name", industry: "Industry · City", title: "What you made for them", services: ["Ads"], sample: true },
];

export type Story = { name: string; business: string; concern: string; outcome: string; quote: string; sample?: boolean };
// The worry they had before signing, what actually happened, and their words.
export const stories: Story[] = [
  {
    name: "Owner name",
    business: "Business · City",
    concern: "“I've been burned by an agency before.”",
    outcome: "What you did differently, and the result in numbers.",
    quote: "Their own words about working with you.",
    sample: true,
  },
  {
    name: "Owner name",
    business: "Business · City",
    concern: "“I don't have time to be on camera.”",
    outcome: "How the shoot day worked and what the footage produced.",
    quote: "Their own words about working with you.",
    sample: true,
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
    a: "Ads can bring in leads within the first couple of weeks after launch. Search rankings take longer, usually a few months. We'll give you a realistic timeline for your market before you sign anything.",
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
