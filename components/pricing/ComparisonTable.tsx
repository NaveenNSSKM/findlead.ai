const comparisons = [
  {
    feature: "Cost",
    traditional: "$99–$300 / month",
    findlead: "One-time payment",
  },
  {
    feature: "Strategy",
    traditional: "Spray & Pray",
    findlead: "AI-driven research",
  },
  {
    feature: "Domain Safety",
    traditional: "High risk of burn",
    findlead: "Low volume, high quality",
  },
  {
    feature: "Data Quality",
    traditional: "Stale databases",
    findlead: "Real-time enrichment",
  },
];

export default function ComparisonTable() {
  return (
    <section
      className="
        min-h-screen
        py-20 sm:py-24
        px-5 sm:px-8 lg:px-12
        bg-[#0B0B0F]
      "
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-bold text-center
            mb-12
            text-white
          "
        >
          Why Findlead (The Sniper)?
        </h2>

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden md:grid grid-cols-3 gap-6 text-center">
          
          {/* Header Row */}
          <div></div>
          <div className="font-semibold text-gray-400">
            Traditional Tools
          </div>
          <div className="font-semibold text-yellow-400">
            Findlead
          </div>

          {/* Data Rows */}
          {comparisons.map((row) => (
            <div key={row.feature} className="contents">
              <div className="font-medium text-white">
                {row.feature}
              </div>
              <div className="text-gray-400">
                {row.traditional}
              </div>
              <div className="text-white font-semibold">
                {row.findlead}
              </div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden space-y-6">
          {comparisons.map((row) => (
            <div
              key={row.feature}
              className="
                bg-white/5
                rounded-xl
                p-6
                border border-white/10
              "
            >
              <h3 className="font-semibold text-lg text-white mb-4">
                {row.feature}
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Traditional</span>
                  <span className="text-gray-300">
                    {row.traditional}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-yellow-400">Findlead</span>
                  <span className="text-white font-semibold">
                    {row.findlead}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
