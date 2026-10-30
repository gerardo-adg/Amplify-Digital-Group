/**
 * The qualifying quiz at /quiz/. Every answer is sent with the lead to
 * Netlify Forms, using each question's `name` as the field name.
 * Rename, reorder or drop questions freely; keep each `name` unique.
 */

export type Question = { name: string; q: string; help?: string; options: string[] };

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
      q: "Roughly how much does your business make in a year?",
      help: "A ballpark is fine, and it stays between us. It helps us plan the right campaign for you.",
      options: ["Under $250K", "$250K–$500K", "$500K–$1M", "$1M–$5M", "Over $5M"],
    },
    {
      name: "ad_budget",
      q: "How much could you put toward ads each month?",
      help: "Just the ad spend. You approve every dollar.",
      options: ["Under $500", "$500 to $1,000", "$1,000 to $3,000", "Over $3,000", "Not sure yet"],
    },
  ] satisfies Question[],
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
