/**
 * The qualifying quiz at /quiz/. Every answer is sent with the lead to
 * Netlify Forms, using each question's `name` as the field name.
 * Rename, reorder or drop questions freely; keep each `name` unique.
 */

export type Question = { name: string; q: string; help?: string; options: string[] };

export const quiz = {
  eyebrow: "60-second quiz",
  title: "See if we're a fit",
  intro: "Answer a few quick questions about your business. If we can help, we'll reach out to you personally.",
  questions: [
    {
      name: "business_type",
      q: "What kind of business do you run?",
      options: ["Roofing", "HVAC", "Plumbing", "Landscaping", "Remodeling or construction", "Other home service"],
    },
    {
      name: "monthly_revenue",
      q: "Roughly how much does your business bring in each month?",
      help: "A ballpark is fine. It helps us plan the right campaign for you.",
      options: ["Under $20K", "$20K to $50K", "$50K to $100K", "Over $100K"],
    },
    {
      name: "ads_before",
      q: "Have you run Facebook or Instagram ads before?",
      options: ["Never", "Yes, on my own", "Yes, with an agency or marketer", "I'm running them now"],
    },
    {
      name: "biggest_challenge",
      q: "What's your biggest challenge right now?",
      options: [
        "Not enough leads",
        "The leads I get aren't good",
        "Work comes and goes",
        "I got burned by a marketer before",
        "I don't have time for marketing",
      ],
    },
    {
      name: "ad_budget",
      q: "How much could you put toward ads each month?",
      help: "Just the ad spend. You approve every dollar.",
      options: ["Under $500", "$500 to $1,000", "$1,000 to $3,000", "Over $3,000", "Not sure yet"],
    },
    {
      name: "timeline",
      q: "When do you want to get started?",
      options: ["As soon as possible", "In the next month", "In 1 to 3 months", "Just looking for now"],
    },
  ] satisfies Question[],
  contact: {
    q: "Where should we reach you?",
    help: "We'll look over your answers and reach out to you personally. No spam, ever.",
    submit: "Send my answers",
  },
  done: {
    title: "You're all set",
    body: "Thanks! We've got your answers and we'll reach out to you personally soon.",
  },
};
