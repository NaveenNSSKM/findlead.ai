const faqs = [
  {
    q: "Is there a monthly fee hidden anywhere?",
    a: "No. This is a Lifetime Deal. Pay once, own the software forever.",
  },
  {
    q: "Does it integrate with my CRM?",
    a: "Yes. Growth & Agency plans support HubSpot, Pipedrive via Zapier/Make.",
  },
  {
    q: "What is the 14-day guarantee?",
    a: "If you don’t feel like a Sales Sniper, we refund 100%. No questions asked.",
  },
];

export default function FAQ() {
  return (
    <section
      className="
        min-h-screen
        py-20 sm:py-24
        px-5 sm:px-8 lg:px-12
        bg-white/5
      "
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-bold
            mb-10
            text-center
            text-white
          "
        >
          FAQs
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="
                group
                rounded-xl
                bg-black/40
                border border-white/10
                p-5 sm:p-6
                transition
              "
            >
              <summary
                className="
                  cursor-pointer
                  list-none
                  flex items-center justify-between
                  font-semibold
                  text-sm sm:text-base
                  text-white
                "
              >
                {faq.q}

                {/* Chevron */}
                <span
                  className="
                    ml-4
                    text-yellow-400
                    transition-transform
                    group-open:rotate-180
                  "
                >
                  ▼
                </span>
              </summary>

              <p
                className="
                  mt-4
                  text-sm sm:text-base
                  text-gray-300
                  leading-relaxed
                "
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
