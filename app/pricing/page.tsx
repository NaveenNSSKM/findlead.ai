import PricingHeader from "@/components/pricing/PricingHeader";
import PricingTable from "@/components/pricing/PricingTable";
import FeatureBreakdown from "@/components/pricing/FeatureBreakdown";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import FAQ from "@/components/pricing/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PricingPage() {
  return (
    <main className="bg-[#0B0B0F] text-white">
        <Navbar />
      <PricingHeader />
      <PricingTable />
      <FeatureBreakdown />
      <ComparisonTable />
      <FAQ />
      <Footer />
    </main>
  );
}
