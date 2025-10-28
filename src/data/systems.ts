export interface SystemData {
  system_name: string;
  slug: string;
  price: string;
  description: string;
  what_you_can_expect: string;
  who_this_is_for: string[];
  who_this_is_not_for: string[];
  inputs_required: string[];
  outputs_delivered: string[];
  requirements: string[];
  timeline_days: string;
}

export const systemsData: SystemData[] = [
  {
    system_name: "Cold Outreach Follow-up",
    slug: "cold-outreach-follow-up",
    price: "$4,995",
    description: "Automated sequences that nurture cold leads through personalized touchpoints based on engagement signals. This system tracks prospect behavior and triggers contextual follow-ups at optimal times, turning cold outreach into a systematic revenue channel.",
    what_you_can_expect: "Recover 15-20% of cold leads that would otherwise go dark. At 100 cold leads/month, that's 15-20 additional conversations per month.",
    who_this_is_for: [
      "You're running cold outreach campaigns with inconsistent follow-up",
      "You have leads going cold because your team can't keep up with manual touchpoints",
      "You want to systematize follow-up without losing the personal touch"
    ],
    who_this_is_not_for: [
      "You don't have an existing outreach process or CRM in place",
      "You're getting fewer than 50 new leads per month",
      "You expect the system to write personalized emails for you"
    ],
    inputs_required: [
      "CRM or lead database (HubSpot, Pipedrive, Airtable, etc.)",
      "Email sending platform (Gmail, Outlook, SendGrid, etc.)",
      "Existing outreach templates or messaging framework"
    ],
    outputs_delivered: [
      "Automated follow-up sequences triggered by engagement signals",
      "Lead scoring and tagging based on behavior",
      "Dashboard showing engagement metrics and conversion rates",
      "Documentation and training video for your team"
    ],
    requirements: [
      "Access to CRM and email platform APIs",
      "Defined follow-up cadence and messaging strategy",
      "At least one team member designated for system oversight"
    ],
    timeline_days: "5-7 days"
  },
  {
    system_name: "CRM Enrichment",
    slug: "crm-enrichment",
    price: "$3,995",
    description: "Pull data from multiple sources to automatically enrich contact records with company info, social profiles, and behavioral data. Every new lead gets complete context without manual research.",
    what_you_can_expect: "Save 2-3 hours per day on manual contact research. Enrich 100% of new leads with company size, industry, tech stack, and social profiles within minutes of entry.",
    who_this_is_for: [
      "Your sales team wastes hours researching prospects manually",
      "You have incomplete contact data scattered across multiple tools",
      "You need consistent lead intelligence before outreach"
    ],
    who_this_is_not_for: [
      "You don't have budget for data enrichment APIs ($100-300/month)",
      "Your CRM doesn't support custom fields or API access",
      "You're working with consumer contacts (B2C) rather than businesses"
    ],
    inputs_required: [
      "CRM system with API access",
      "List of data sources you want to pull from (Clearbit, Hunter, LinkedIn, etc.)",
      "Defined fields you want enriched in your CRM"
    ],
    outputs_delivered: [
      "Automated enrichment workflow triggered on new contact creation",
      "Standardized data fields populated from multiple sources",
      "Error handling and data quality checks",
      "Monthly enrichment reporting dashboard"
    ],
    requirements: [
      "Active subscriptions to enrichment data providers",
      "CRM admin access for custom field creation",
      "Clear definition of which contacts should be enriched"
    ],
    timeline_days: "3-5 days"
  }
];

export const getSystemBySlug = (slug: string): SystemData | undefined => {
  return systemsData.find(system => system.slug === slug);
};
