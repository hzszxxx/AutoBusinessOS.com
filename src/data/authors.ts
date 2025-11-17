export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

// Pre-defined authors for consistency
export const AUTHORS = {
  michael_chen: {
    name: "Michael Chen",
    role: "Senior Automation Consultant",
    bio: "Enterprise automation specialist with 10+ years of experience helping Fortune 500 companies optimize their business processes. Former solutions architect at Salesforce and SAP.",
    linkedin: "https://linkedin.com/in/automation-expert",
    twitter: "https://twitter.com/automation_insights"
  },
  sarah_johnson: {
    name: "Sarah Johnson",
    role: "Digital Transformation Strategist",
    bio: "Focused on helping mid-market companies achieve measurable ROI through intelligent automation. Has led 100+ successful automation implementations across various industries.",
    linkedin: "https://linkedin.com/in/sarah-automation"
  },
  david_kim: {
    name: "David Kim",
    role: "AI & Automation Researcher",
    bio: "Specializes in AI-powered automation solutions and emerging technologies. Published researcher with expertise in machine learning applications for business process optimization.",
    twitter: "https://twitter.com/ai_automation_dk"
  },
  emily_rodriguez: {
    name: "Emily Rodriguez",
    role: "E-commerce Automation Expert",
    bio: "8 years of experience optimizing e-commerce operations through automation. Has helped online retailers scale from 100 to 10,000+ daily orders while reducing operational costs.",
    linkedin: "https://linkedin.com/in/ecommerce-automation"
  },
  james_wilson: {
    name: "James Wilson",
    role: "SaaS Operations Specialist",
    bio: "Expert in customer success automation and support optimization for B2B SaaS companies. Previously scaled support operations at multiple high-growth startups.",
    linkedin: "https://linkedin.com/in/saas-automation"
  },
  automation_team: {
    name: "AutoBusinessOS Team",
    role: "Research & Editorial Team",
    bio: "Our team of automation specialists, researchers, and industry analysts collaborate to bring you the latest insights, best practices, and comprehensive guides on business automation.",
    email: "editorial@autobusinessos.com"
  }
} as const;
