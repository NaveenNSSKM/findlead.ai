export default function ComparisonTable() {
  const comparisons = [
    {
      feature: "Cost",
      traditional: "$99 - $300/Month",
      findlead: "One-Time Payment",
      highlight: true,
    },
    {
      feature: "Strategy",
      traditional: "Spray and Pray Volume",
      findlead: "AI-Driven Research",
      highlight: false,
    },
    {
      feature: "Domain Safety",
      traditional: "High Risk of Burn",
      findlead: "Low Volume, High Quality",
      highlight: false,
    },
    {
      feature: "Data Quality",
      traditional: "Stale Databases",
      findlead: "Real-Time AI Enrichment",
      highlight: true,
    },
    
 
  ];

  return (
    <section className="relative py-24 px-5 sm:px-8 lg:px-12 bg-white overflow-hidden">

      {/* Background Decor - Subtle Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-[#efe34b]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
         
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
            Why Findlead? <br className="hidden sm:block" />
            
          </h2>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block relative bg-[#131316] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="grid grid-cols-12 border-b border-white/5 bg-white/[0.02]">
            <div className="col-span-4 p-6 text-sm font-medium text-gray-500 uppercase tracking-widest pl-10">
              Feature
            </div>
            <div className="col-span-4 p-6 text-sm font-semibold text-gray-400 uppercase tracking-widest text-center">
              Traditional Tools
            </div>
            <div className="col-span-4 p-6 text-sm font-bold text-[#efe34b] uppercase tracking-widest text-center bg-[#efe34b]/5 border-l border-white/5">
              Findlead (The Sniper)
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, idx) => (
            <div
              key={idx}
              className="group grid grid-cols-12 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors duration-200"
            >
              {/* Feature Name */}
              <div className="col-span-4 p-6 pl-10 flex items-center">
                <span className="text-lg font-medium text-white group-hover:text-[#efe34b] transition-colors">
                  {row.feature}
                </span>
              </div>

              {/* Traditional (Competitor) */}
              <div className="col-span-4 p-6 flex items-center justify-center text-center">
                <span className="text-gray-400 font-medium">
                  {row.traditional}
                </span>
              </div>

              {/* Findlead (Winner) */}
              <div className="col-span-4 p-6 flex items-center justify-center text-center bg-[#efe34b]/5 border-l border-white/5 relative">
                {row.highlight && (
                  <div className="absolute inset-0 bg-[#efe34b]/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
                <span className={`relative z-10 font-bold ${row.highlight ? 'text-[#efe34b] text-lg' : 'text-white'}`}>
                  {row.findlead}
                </span>
                {row.highlight && (
                  <svg className="w-5 h-5 text-[#efe34b] ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="md:hidden space-y-4">
          {comparisons.map((row, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl bg-[#131316] border border-white/10 p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  {row.feature}
                </h3>
              </div>

              <div className="space-y-4">
                {/* Competitor Side */}
                <div className="flex items-start gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="mt-1 min-w-[20px] text-gray-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-semibold">Traditional</div>
                    <div className="text-gray-300 font-medium">{row.traditional}</div>
                  </div>
                </div>

                {/* Findlead Side */}
                <div className="flex items-start gap-4 p-3 rounded-lg bg-[#efe34b]/10 border border-[#efe34b]/20">
                  <div className="mt-1 min-w-[20px] text-[#efe34b]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#efe34b] uppercase font-bold">Findlead</div>
                    <div className="text-white font-bold text-lg">{row.findlead}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
