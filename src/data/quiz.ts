/**
 * The qualifying quiz at /quiz/. Every answer is sent with the lead to
 * Netlify Forms, using each question's `name` as the field name.
 * Rename, reorder or drop questions freely; keep each `name` unique.
 */

// `show` limits a question to certain earlier answers, e.g. { service: ["A Website"] }
// `multi` lets people pick more than one answer (checkboxes and a Next button).
// `display` shows friendlier wording for an option (plus a small line under it)
// while the option itself is what gets saved with the lead.
export type Question = {
  name: string; q: string; help?: string; options: string[]; multi?: boolean;
  show?: Record<string, string[]>;
  // Like `show`, but every answer must be one of these (e.g. only "A Website" picked)
  showOnly?: Record<string, string[]>;
  // Asked on the Meta ads landing page only
  adsPageOnly?: boolean;
  display?: Record<string, { label: string; sub?: string }>;
};
type When = Record<string, string[]>;

const soon = ["As Soon as Possible", "Within 30 Days"];

export const quiz = {
  eyebrow: "30-Second Quiz",
  title: "See if we're a fit",
  intro: "Answer a few quick questions about your business. If we can help, we'll reach out to you personally.",
  // First question on the website's /quiz/ page only. The Meta ads landing
  // page (/start/) skips it and sends `serviceDefault` instead.
  service: {
    name: "service",
    q: "What do you need help with?",
    help: "Pick all that apply.",
    multi: true,
    // Saved as the service name; shown as the goal
    options: ["Meta Ads", "High-Quality Content", "A Website"],
    display: {
      "Meta Ads": { label: "Get more leads and booked jobs", sub: "Video ads aimed at homeowners in your area" },
      "High-Quality Content": { label: "Look more professional online", sub: "Photos and videos of your work for social media" },
      "A Website": { label: "Get a website that brings in calls", sub: "A new website, or a rebuild of the one you have" },
    },
  } satisfies Question,
  serviceDefault: "Meta Ads",
  // Every question qualifies the lead. Easy ones first; the money questions
  // come last, once people have momentum.
  questions: [
    {
      name: "business_type",
      q: "What kind of business do you run?",
      options: [
        "Roofing",
        "General Contractor or Remodeling",
        "HVAC, Plumbing or Electrical",
        "Landscaping",
        "Painting",
        "Other Home Service",
      ],
    },
    {
      name: "timeline",
      q: "When do you want to get started?",
      options: ["As Soon as Possible", "Within 30 Days", "In 1–3 Months", "Just Looking for Now"],
    },
    // Website path
    {
      name: "has_website",
      show: { service: ["A Website"] },
      q: "Do you have a website right now?",
      options: ["No, I Don't Have One", "Yes, but It's Outdated", "Yes, but It Doesn't Bring in Calls"],
    },
    // Only on the ads landing page (/start/); the website quiz skips it
    {
      name: "annual_revenue",
      adsPageOnly: true,
      q: "What's your annual revenue?",
      help: "A ballpark is fine, and it stays between us.",
      options: ["Under $500K", "$500K–$1M", "$1M–$5M", "Over $5M"],
    },
    // One budget question at most. Monthly for ads and/or content (even if
    // they also want a website); the one-time website budget only when a
    // website is all they picked.
    {
      name: "marketing_budget",
      show: { service: ["Meta Ads", "High-Quality Content"] },
      q: "What's your total monthly marketing budget?",
      help: "Everything you'd spend each month, including our service. A ballpark is fine.",
      options: ["Under $2K", "$2K–$3K", "$3K–$5K", "$5K–$10K", "Over $10K", "Not Sure Yet"],
    },
    {
      name: "website_budget",
      showOnly: { service: ["A Website"] },
      q: "What's your budget for the website?",
      help: "A one-time cost. A ballpark is fine.",
      options: ["Under $1,500", "$1,500–$2,500", "Over $2,500", "Not Sure Yet"],
    },
  ] satisfies Question[],
  // Each lead gets a hidden "priority" field so you know who to call first.
  // Based on a $2K–$3K monthly fee: under $3K total leaves almost nothing for
  // ads, and $5K+ leaves room for both the fee and a real ad budget.
  // Each service they picked gets its own label: "Not a fit" if a notFit rule
  // matches, else "Hot" if a hot rule matches, else "Warm". The lead gets the
  // best of those (Hot, then Warm, then Not a fit), so a good fit for one
  // service isn't thrown out for another. A rule matches when every listed
  // question's answer is one of its options.
  priority: {
    labels: { hot: "🔥 Hot", warm: "Warm", notFit: "Not a fit" },
    byService: {
      // The monthly budget decides it, not revenue: a $5K/month shop is a fit at any size
      "Meta Ads": {
        // Under $3K total leaves almost nothing for ads after a $2K–$3K fee
        notFit: [{ marketing_budget: ["Under $2K", "$2K–$3K"] }],
        hot: [{ timeline: soon, marketing_budget: ["$3K–$5K", "$5K–$10K", "Over $10K"] }],
      },
      "High-Quality Content": {
        notFit: [{ marketing_budget: ["Under $2K"] }],
        hot: [{ timeline: soon, marketing_budget: ["$2K–$3K", "$3K–$5K", "$5K–$10K", "Over $10K"] }],
      },
      // With other services picked there's no website budget question, so this one is Warm
      "A Website": {
        notFit: [{ website_budget: ["Under $1,500"] }],
        hot: [{ timeline: soon, website_budget: ["$1,500–$2,500", "Over $2,500"] }],
      },
    },
  } as { labels: { hot: string; warm: string; notFit: string }; byService: Record<string, { notFit: When[]; hot: When[] }> },
  contact: {
    q: "Where should we reach you?",
    help: "We'll look over your answers and reach out to you personally. No spam, ever.",
    submit: "Apply Now",
    // Consent for calls and texts (TCPA). Have this reviewed if you text leads.
    consent:
      "By clicking Apply Now, you agree that Amplify Digital Group may call and text you at the number you provided, including with automated technology and prerecorded messages, and email you about your inquiry and our services. Consent isn't a condition of any purchase. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help.",
  },
  done: {
    title: "You're all set",
    body: "Thanks! We've got your answers and we'll reach out to you personally soon.",
  },
};
