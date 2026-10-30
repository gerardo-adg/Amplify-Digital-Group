/**
 * The qualifying quiz at /quiz/. Every answer is sent with the lead to
 * Netlify Forms, using each question's `name` as the field name.
 * Rename, reorder or drop questions freely; keep each `name` unique.
 */

export type Question = { name: string; q: string; help?: string; options: string[] };
export type PriorityRule = { label: string; when: Record<string, string[]> };

export const quiz = {
  eyebrow: "30-second quiz",
  title: "See if we're a fit",
  intro: "Answer a few quick questions about your business. If we can help, we'll reach out to you personally.",
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
    {
      name: "annual_revenue",
      q: "What's your annual revenue?",
      help: "A ballpark is fine, and it stays between us.",
      // One range per kind of buyer
      options: ["Under $500K", "$500K–$1M", "$1M–$5M", "Over $5M"],
    },
    {
      name: "marketing_budget",
      // Total budget, not just ad spend, so nobody expects $1K to cover everything
      q: "What's your total monthly marketing budget?",
      help: "Our service plus your ad spend, combined. A ballpark is fine.",
      options: ["Under $3K", "$3K–$5K", "$5K–$10K", "$10K–$20K", "Over $20K", "Not Sure Yet"],
    },
  ] satisfies Question[],
  // Each lead gets a hidden "priority" field so you know who to call first.
  // A rule matches when every listed question's answer is one of its options.
  // "Not a fit" is checked first, then "Hot"; everyone else is "Warm".
  priority: {
    notFit: {
      label: "Not a fit",
      when: { annual_revenue: ["Under $500K"], marketing_budget: ["Under $3K"] },
    },
    hot: {
      label: "🔥 Hot",
      when: {
        timeline: ["As Soon as Possible", "Within 30 Days"],
        annual_revenue: ["$500K–$1M", "$1M–$5M", "Over $5M"],
        marketing_budget: ["$3K–$5K", "$5K–$10K", "$10K–$20K", "Over $20K"],
      },
    },
    otherwise: "Warm",
  } as { notFit: PriorityRule; hot: PriorityRule; otherwise: string },
  contact: {
    q: "Where should we reach you?",
    help: "We'll look over your answers and reach out to you personally. No spam, ever.",
    submit: "Get my free strategy call",
    // Consent for calls and texts (TCPA). Have this reviewed if you text leads.
    consent:
      "By sending this, you agree that Amplify Digital Group may contact you by call, text or email about your inquiry, including with automated technology. Consent isn't a condition of any purchase. Message and data rates may apply. Reply STOP to opt out.",
  },
  done: {
    title: "You're all set",
    body: "Thanks! We've got your answers and we'll reach out to you personally soon.",
  },
};
