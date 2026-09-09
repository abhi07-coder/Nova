// src/data.js

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const features = [
  {
    icon: "⚡",
    title: "AI Task Automation",
    description:
      "Automate repetitive tasks with intelligent AI workflows that learn from your team's patterns.",
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description:
      "Get real-time insights into team performance, project progress and productivity trends.",
  },
  {
    icon: "🤝",
    title: "Team Collaboration",
    description:
      "Work together seamlessly with shared workspaces, real-time editing and instant updates.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SSO support and compliance tools to keep your data safe.",
  },
  {
    icon: "🔗",
    title: "100+ Integrations",
    description:
      "Connect with Slack, GitHub, Figma, Notion and all the tools your team already uses.",
  },
  {
    icon: "📱",
    title: "Mobile First",
    description:
      "Full-featured mobile apps for iOS and Android so your team stays productive anywhere.",
  },
];

export const trustedCompanies = [
  "Google",
  "Microsoft",
  "Airbnb",
  "Stripe",
  "Notion",
  "Figma",
];

export const howItWorks = [
  {
    step: "01",
    title: "Create Your Workspace",
    description:
      "Sign up and set up your team workspace in under 2 minutes. No credit card required.",
  },
  {
    step: "02",
    title: "Invite Your Team",
    description:
      "Add your teammates via email. Assign roles and permissions instantly.",
  },
  {
    step: "03",
    title: "Automate & Collaborate",
    description:
      "Use AI to automate tasks and collaborate in real-time across projects.",
  },
  {
    step: "04",
    title: "Track & Improve",
    description:
      "Monitor progress with smart dashboards and improve team performance over time.",
  },
];

export const stats = [
  { value: 10000, label: "Teams Using NOVA", suffix: "+" },
  { value: 98, label: "Customer Satisfaction", suffix: "%" },
  { value: 40, label: "Productivity Increase", suffix: "%" },
  { value: 5, label: "Hours Saved Per Week", suffix: "x" },
];

export const solutions = [
  {
    icon: "🚀",
    title: "Startups",
    description:
      "Move fast without breaking things. NOVA gives early-stage teams structure and speed.",
  },
  {
    icon: "🏢",
    title: "Enterprise",
    description:
      "Scale securely with advanced admin controls, audit logs and enterprise SSO.",
  },
  {
    icon: "🎨",
    title: "Creative Teams",
    description:
      "Manage campaigns, assets and feedback in one beautiful workspace.",
  },
  {
    icon: "💻",
    title: "Engineering Teams",
    description:
      "Connect your GitHub repos, track sprints and ship faster with AI assistance.",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechFlow Inc.",
    avatar: "SJ",
    text: "NOVA transformed how our team works. We cut meeting time by 40% and ship twice as fast now.",
  },
  {
    name: "Marcus Chen",
    role: "Product Manager, Buildify",
    avatar: "MC",
    text: "The AI automation alone is worth it. Tasks that took hours now happen automatically.",
  },
  {
    name: "Priya Patel",
    role: "CTO, ScaleUp Labs",
    avatar: "PP",
    text: "Best productivity tool we've used. The integrations work flawlessly with our existing stack.",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Up to 3 team members",
      "5 active projects",
      "Basic analytics",
      "Email support",
      "2GB storage",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 19,
    description: "For growing teams that need more power and automation.",
    features: [
      "Up to 25 team members",
      "Unlimited projects",
      "AI task automation",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "For large organizations with advanced security needs.",
    features: [
      "Unlimited team members",
      "Unlimited everything",
      "Custom AI workflows",
      "Dedicated account manager",
      "SSO & advanced security",
      "Unlimited storage",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "Is there a free plan available?",
    answer:
      "Yes! Our Starter plan is completely free forever with up to 3 team members and 5 active projects.",
  },
  {
    question: "Can I switch plans anytime?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "How does the AI automation work?",
    answer:
      "NOVA's AI learns from your team's workflow patterns and suggests automations. You approve them once and they run automatically.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use bank-grade AES-256 encryption, are SOC 2 Type II certified and never sell your data.",
  },
  {
    question: "Do you offer a trial for paid plans?",
    answer:
      "Yes, all paid plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "Which integrations are supported?",
    answer:
      "We support 100+ integrations including Slack, GitHub, Figma, Jira, Notion, Google Workspace and more.",
  },
];