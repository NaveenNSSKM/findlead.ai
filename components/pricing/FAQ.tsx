const faqs = [
  {
    q: "Is there a monthly fee hidden anywhere?",
    a: "No. This is a Lifetime Deal. Pay once, own the software forever. You only pay for additional credits if you want to scale beyond your tier.",
  },
  {
    q: "Does it integrate with my CRM?",
    a: "Yes, our Growth and Agency plans offer seamless integration with HubSpot, Pipedrive, and more via Zapier/Make.",
  },
  {
    q: "What is the 14-day Guarantee?",
    a: "If you don't feel like a Sales Sniper within 14 days, we’ll refund 100% of your investment. No questions asked.",
  },
  
];

export default function FAQ() {
  return (
    <section className="relative py-24 px-5 sm:px-8 lg:px-12 bg-[#0B0B0F] overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[#efe34b]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
             Trust & FAQ (The "Risk-Reversal")
          </h2>
         
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group relative bg-[#131316] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 open:border-[#efe34b]/20 open:bg-[#131316]"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-medium text-white transition-colors duration-300 group-hover:text-[#efe34b] [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <span className="ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-open:rotate-180 group-open:bg-[#efe34b] group-open:border-[#efe34b] group-open:text-black">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>

              <div className="px-6 pb-6 text-gray-400 leading-relaxed text-base border-t border-white/5 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
