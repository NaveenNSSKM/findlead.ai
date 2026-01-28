import React from "react";

/* ---------------- TYPES ---------------- */

type CardProps = {
  title: string;
  icon: React.ReactNode;
  items: string[];
  className?: string;
};

type IconWrapProps = {
  children: React.ReactNode;
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function FeatureBreakdown() {
  return (
    <section className="relative py-24 px-6 sm:px-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-400/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">

        {/* Card 1 */}
        <Card
          title="The Findlead Enrich App"
          icon={<EnrichIcon />}
          items={[
            "Verified Leads: We don't just give you data; we verify it. Every lead is bounce-checked to protect your sender reputation.",
            "AI Lead Scoring: Our algorithm automatically ranks your leads from A to D based on their likelihood to convert.",
          ]}
        />

        {/* Card 2 */}
        <Card
          title="The AI Outreach Engine"
          icon={<OutreachIcon />}
          items={[
            "Sequential Drips: Build multi-step sequences that feel human. If they don't reply to email #1, the AI adjusts the tone for email #2.",
            "Sentiment-Powered Inbox: Our AI highlights only positive replies so you can jump into conversations that matter.",
          ]}
        />

        {/* Card 3 – CENTERED, SAME SIZE */}
        <Card
          title="The Strategic AI Agent"
          icon={<AgentIcon />}
          items={[
            "Research Agent: Finds funding news, job changes, and intent signals to craft hyper-personalized intros.",
            "Campaign Agent (Growth & Agency): Give it a goal, and it builds the full strategy from ICP to sequences.",
          ]}
          className="md:col-span-2 lg:col-span-1"
        />

      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

const Card: React.FC<CardProps> = ({
  title,
  icon,
  items,
  className = "",
}) => (
  <div
    className={`
      group relative rounded-3xl
      bg-white
      border border-[#1f2937]
      p-6
      h-full
      transition-all duration-300
      hover:-translate-y-2
      hover:border-yellow-400/60
      hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]
      ${className}
    `}
  >
    {/* Yellow Accent Glow */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Top Accent Line */}
    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

    <IconWrap>{icon}</IconWrap>

    <h3 className="relative text-2xl font-semibold text-black mb-5">
      {title}
    </h3>

    <ul className="relative space-y-5 text-gray-600 text-sm sm:text-base">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span className="mt-1.5 w-4 h-4 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ---------------- ICON WRAPPER ---------------- */

const IconWrap: React.FC<IconWrapProps> = ({ children }) => (
  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 ring-1 ring-yellow-400/30 flex items-center justify-center text-yellow-400 mb-6">
    {children}
  </div>
);

/* ---------------- SVG ICONS ---------------- */

const EnrichIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

const OutreachIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const AgentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <path d="M9 9h.01M15 9h.01" />
    <path d="M9 14h6" />
  </svg>
);
