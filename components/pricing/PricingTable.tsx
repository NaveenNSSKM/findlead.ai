const plans = [
  {
    name: "Professional",
    price: "$199",
    highlight: false,
    features: [
      "1 User Seat",
      "100 Verified Leads / mo",
      "8,000 Emails / mo",
      "1,000 AI Agent Credits",
      "AI Research Agent",
      "Sentiment Inbox",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$349",
    highlight: true,
    badge: "Best Value",
    features: [
      "2 User Seats",
      "500 Verified Leads / mo",
      "20,000 Emails / mo",
      "5,000 AI Agent Credits",
      "AI Research Agent",
      "Sentiment Inbox",
      "Remove Branding",
      "CRM Integrations",
    ],
    cta: "Claim Lifetime Deal",
  },
  {
    name: "Agency",
    price: "$899",
    highlight: false,
    features: [
      "5 User Seats",
      "1,500 Verified Leads / mo",
      "60,000 Emails / mo",
      "15,000 AI Agent Credits",
      "AI Research Agent",
      "Sentiment Inbox",
      "White Label",
      "API Access",
      "Priority Support",
    ],
    cta: "Contact for Agency",
  },
];

export default function PricingTable() {
  return (
    <section className="
      min-h-screen
      py-20 sm:py-24
      px-5 sm:px-8 lg:px-12
      bg-[#0B0B0F]
    ">
      <div
        className="
          grid gap-6 sm:gap-8
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          max-w-7xl mx-auto
          items-stretch
        "
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`
              relative
              rounded-2xl
              border
              p-6 sm:p-8
              h-full
              flex flex-col
              ${
                plan.highlight
                  ? "border-yellow-400 bg-yellow-400/10 lg:scale-105"
                  : "border-white/10 bg-white/5"
              }
            `}
          >
            {/* Badge */}
            {plan.badge && (
              <span className="
                absolute -top-4 left-1/2 -translate-x-1/2
                bg-yellow-400 text-black
                px-4 py-1
                text-xs sm:text-sm
                rounded-full font-semibold
              ">
                {plan.badge}
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {plan.name}
            </h3>

            {/* Price */}
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
              {plan.price}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              One-time payment
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-300 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-yellow-400">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className="
                mt-8
                w-full
                py-3
                rounded-lg
                font-semibold
                bg-yellow-400
                text-black
                hover:bg-yellow-300
                transition
              "
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
