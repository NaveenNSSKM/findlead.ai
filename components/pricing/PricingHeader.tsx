export default function PricingHeader() {
  return (
    <section className="
      min-h-screen 
      bg-[#efe34b]
      flex items-center justify-center
      px-5 sm:px-8 lg:px-12
    ">
      <div className="text-center max-w-5xl w-full">
        
        {/* Badge */}
        <span className="
          inline-block mb-6
          px-4 py-1.5
          text-xs sm:text-sm
          font-semibold
          text-[#efe34b]
          bg-[#0B0B0F]
          rounded-full
        ">
          ⚡ Limited Time: Early Adopter One-Time Pricing
        </span>

        {/* Headline */}
        <h1 className="
          font-extrabold tracking-tight
          text-[#0B0B0F]
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
          leading-tight
        ">
          Own Your Sales Pipeline.{" "}
          <span className="text-[#1F1F1F] underline decoration-black/20">
            Forever.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="
          mt-6
          mx-auto
          max-w-3xl
          text-base
          sm:text-lg
          md:text-xl
          text-[#2E2E2E]
          leading-relaxed
        ">
          Stop paying monthly for volume you don’t use. Grab a Lifetime Deal on
          the AI Research Agent that finds your perfect leads and books meetings
          while you sleep.
        </p>

      </div>
    </section>
  );
}
