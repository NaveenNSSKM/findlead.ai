const plans = [
  {
    name: "Professional",
    price: "$199",
    highlight: false,
    features: [
      "Solo Founders",
      "1 User Seat",
      "100 Leads",
      "8,000 Emails",
      "1,000 Credits",
      "Included",
      "Included",
      "  —",
      "  —",
      "Standard",

    ],
    cta: "Get Started",
  },
  {
    name: "Growth (Best Value)",
    price: "$349",
    highlight: true,
    badge: "Best Value",
    features: [
      "Small GTM Teams",
      "2 User Seats",
      "500 Leads",
      "20,000 Emails",
      "5,000 Credits",
      "Included",
      "Included",
      "Remove Branding",
      "CRM Integrations",
      "Standard",
    ],
    cta: "Claim Lifetime Deal",
  },
  {
    name: "Agency",
    price: "$899",
    highlight: false,
    features: [
      "Lead Gen Agencies",
      "5 User Seats",
      "1,500 Leads",
      "60,000 Emails",
      "15,000 Credits",
      "Included",
      "Included",
      "Remove Branding",
      "API Access",
      "Priority Support",
    ],
    cta: "Contact for Agency",
  },
];


export default function PricingTable() {
  return (
    <section
      className="
        min-h-screen
        py-20 sm:py-24
        px-5 sm:px-8 lg:px-12
        bg-white
      "
    >
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
        {plans.map((plan, planIndex) => (
          <div
            key={`plan-${planIndex}`}
            className={`
              relative
              rounded-2xl
              border
              p-6 sm:p-8
              h-full
              flex flex-col
              shadow-lg
              ${plan.highlight
                ? "border-yellow-400 bg-[#111111] lg:scale-105"
                : "border-gray-200 bg-[#0F0F14]"
              }
              ${planIndex === 2
                ? "sm:col-span-2 sm:justify-self-center sm:w-[calc(50%-1rem)] lg:col-span-1 lg:w-full lg:justify-self-auto"
                : ""
              }
            `}
          >
            {/* Badge */}
            {plan.badge && (
              <span
                className="
                  absolute -top-4 left-1/2 -translate-x-1/2
                  bg-yellow-400 text-black
                  px-4 py-1
                  text-xs sm:text-sm
                  rounded-full font-semibold
                "
              >
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
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={`plan-${planIndex}-feature-${featureIndex}`}
                  className="flex gap-2 items-center"
                >
                  <span
                    className={
                      feature === "—"
                        ? "text-gray-500"
                        : "text-yellow-400"
                    }
                  >
                    {feature === "—" ? "—" : "✔"}
                  </span>
                  <span
                    className={
                      feature === "—" ? "text-gray-500" : ""
                    }
                  >
                    {feature}
                  </span>
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
