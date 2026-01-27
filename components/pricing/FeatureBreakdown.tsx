export default function FeatureBreakdown() {
  return (
    <section
      className="
        min-h-screen
        py-20 sm:py-24
        px-5 sm:px-8 lg:px-12
        bg-white/5
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10 lg:gap-12
        "
      >
        {/* Card 1 */}
        <div className="bg-black/40 rounded-2xl p-6 sm:p-8 h-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
            The Findlead Enrich App
          </h2>
          <ul className="text-sm sm:text-base text-gray-300 space-y-3">
            <li className="flex gap-2">
              <span className="text-yellow-400">✔</span>
              Verified Leads: Bounce-checked to protect sender reputation
            </li>
            <li className="flex gap-2">
              <span className="text-yellow-400">✔</span>
              AI Lead Scoring: A–D ranking based on conversion likelihood
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-black/40 rounded-2xl p-6 sm:p-8 h-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
            The AI Outreach Engine
          </h2>
          <ul className="text-sm sm:text-base text-gray-300 space-y-3">
            <li className="flex gap-2">
              <span className="text-yellow-400">✔</span>
              Sequential Drips with adaptive tone
            </li>
            <li className="flex gap-2">
              <span className="text-yellow-400">✔</span>
              Sentiment-powered inbox highlighting replies that matter
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-black/40 rounded-2xl p-6 sm:p-8 h-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
            The Strategic AI Agent
          </h2>
          <ul className="text-sm sm:text-base text-gray-300 space-y-3">
            <li className="flex gap-2">
              <span className="text-yellow-400">✔</span>
              Research Agent for funding, job changes, pain points
            </li>
            <li className="flex gap-2">
              <span className="text-yellow-400">✔</span>
              Campaign Agent builds ICP → strategy → sequences
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
