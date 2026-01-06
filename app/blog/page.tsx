import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#EFE34B]">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}} />
            <Navbar />

            {/* Header Section */}
            <div className="pt-32 pb-8 px-6 md:px-12 max-w-[1440px] mx-auto">
                <h1 className="text-6xl md:text-7xl font-bold mb-10 font-[clash-display]">Blog</h1>

                {/* Pill Navigation Menu */}
                <div className="inline-flex bg-white p-2 rounded-full shadow-sm flex-wrap gap-1">
                    <button className="px-6 py-2 bg-[#EFE34B] rounded-full font-semibold text-black text-sm md:text-base">
                        All
                    </button>
                    <button className="px-5 py-2 hover:bg-gray-100 rounded-full font-medium text-gray-700 text-sm md:text-base transition-colors">
                        Lead Generation
                    </button>
                    <button className="px-5 py-2 hover:bg-gray-100 rounded-full font-medium text-gray-700 text-sm md:text-base transition-colors">
                        Marketing
                    </button>
                    <button className="px-5 py-2 hover:bg-gray-100 rounded-full font-medium text-gray-700 text-sm md:text-base transition-colors">
                        Sales Development
                    </button>
                    <button className="px-5 py-2 hover:bg-gray-100 rounded-full font-medium text-gray-700 text-sm md:text-base transition-colors">
                        Sales Operations
                    </button>
                </div>
            </div>

            {/* Blog Content Grid */}
            <div className="px-6 md:px-12 max-w-[1440px] mx-auto pb-20">

                {/* Featured Post (Big Card) */}
                <div className="bg-white rounded-[32px] flex flex-col lg:flex-row items-stretch mb-8 shadow-sm overflow-hidden min-h-[350px] md:min-h-[420px]">
                    <div className="lg:w-1/2 flex flex-col items-start gap-3 p-8 md:p-10 justify-center">
                        <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-[1.1] font-[clash-display] tracking-tight text-[#121212]">
                            Surfer SEO vs Ahrefs: Comparing the Pros and Cons of Two Popular SEO Tools
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed max-w-[90%]">
                            Reposting on Instagram might be new territory but it's fairly simple once you know how. Use this guide to learn how to repost on stories and your feed.
                        </p>

                        <div className="mt-5">
                            <Link href="#" className="flex items-center gap-3 font-bold text-base hover:underline group text-[#121212]">
                                <span className="bg-[#EFE34B] w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-black shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </span>
                                Read full article
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full relative min-h-[250px] lg:min-h-full">
                        <Image
                            src="/images/blog-banner-01.jpg"
                            alt="Featured Blog Post"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Grid of Smaller Posts */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Card 1 - Takes 2 columns (Wait 40%) */}
                    <div className="md:col-span-2 bg-white rounded-[40px] shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                        <div className="w-full h-[220px] relative group">
                            <Image
                                src="/images/blog-left-3.jpg"
                                alt="Surfer SEO vs Ahrefs"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col gap-3 flex-grow">
                            <h3 className="text-lg md:text-xl font-bold font-[clash-display] leading-tight text-[#121212]">
                                Surfer SEO vs Ahrefs: Comparing the Pros and Cons of Two Popular SEO Tools
                            </h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                Reposting on Instagram might be new territory but it's fairly simple once you know how. Use this guide to learn how to repost on stories and your feed.
                            </p>
                            <Link href="#" className="flex items-center gap-3 font-bold mt-auto group text-[#121212] text-xs md:text-sm pt-2">
                                <span className="bg-[#EFE34B] w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-black shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </span>
                                Read full article
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 - Takes 3 columns (Width 60%) */}
                    <div className="md:col-span-3 bg-white rounded-[40px] shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                        <div className="w-full h-[220px] bg-[#F3F4F6] relative group">
                            <Image
                                src="/images/blog-right-2.png"
                                alt="SEO Tools Comparison"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col gap-3 flex-grow">
                            <h3 className="text-lg md:text-xl font-bold font-[clash-display] leading-tight text-[#121212]">
                                Surfer SEO vs Ahrefs: Comparing the Pros and Cons of Two Popular SEO Tools
                            </h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                Reposting on Instagram might be new territory but it's fairly simple once you know how. Use this guide to learn how to repost on stories and your feed.
                            </p>
                            <Link href="#" className="flex items-center gap-3 font-bold mt-auto group text-[#121212] text-xs md:text-sm pt-2">
                                <span className="bg-[#EFE34B] w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-black shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </span>
                                Read full article
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Second Grid of Blog Posts (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-[40px] shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                        <div className="w-full h-[220px] relative group">
                            <Image
                                src="/images/blog-grid-1.jpg"
                                alt="Audience Data Campaigns"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col gap-3 flex-grow">
                            <h3 className="text-lg md:text-xl font-bold font-[clash-display] leading-tight text-[#121212]">
                                4 Simple Steps to Turn Audience Data into Campaigns That Drive Engagement
                            </h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                How to use Mailchimp to collect, organize, and understand your audience data—then use it to market smarter.
                            </p>
                            <Link href="#" className="flex items-center gap-3 font-bold mt-auto group text-[#121212] text-xs md:text-sm pt-2">
                                <span className="bg-[#EFE34B] w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-black shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </span>
                                Read full article
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[40px] shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                        <div className="w-full h-[220px] relative group">
                            <Image
                                src="/images/blog-grid-2.jpg"
                                alt="Segmentation Power"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col gap-3 flex-grow">
                            <h3 className="text-lg md:text-xl font-bold font-[clash-display] leading-tight text-[#121212]">
                                Harnessing The Power of Segmentation to Bolster Engagement and Bookings
                            </h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                Prestigious sporting lodge Poronui noticed that their new inquiries had started to dwindle. So they approached Auckland-based agency Calibrate.
                            </p>
                            <Link href="#" className="flex items-center gap-3 font-bold mt-auto group text-[#121212] text-xs md:text-sm pt-2">
                                <span className="bg-[#EFE34B] w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-black shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </span>
                                Read full article
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-[40px] shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                        <div className="w-full h-[220px] relative group">
                            <Image
                                src="/images/blog-grid-3.jpg"
                                alt="Customer Retention"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col gap-3 flex-grow">
                            <h3 className="text-lg md:text-xl font-bold font-[clash-display] leading-tight text-[#121212]">
                                Customer Retention Through Automation: A Case Study
                            </h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                Learn how Vital Agency worked with their client, Blue Water Mortgage, to deal with a shifting market and helped them refocus.
                            </p>
                            <Link href="#" className="flex items-center gap-3 font-bold mt-auto group text-[#121212] text-xs md:text-sm pt-2">
                                <span className="bg-[#EFE34B] w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-black shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </span>
                                Read full article
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section - Simple Approach */}
            <div className="mt-8 flex flex-col items-center text-center mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-[clash-display] leading-[1.15] mb-8 max-w-4xl text-[#121212] uppercase tracking-tight">
                    A SIMPLE APPROACH TO <br className="hidden md:block" /> SOCIAL COMMERCE
                </h2>
                <div className="mb-12">
                    <button className="bg-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform shadow-sm flex items-center gap-3 text-black">
                        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                        REQUEST A DEMO
                    </button>
                </div>
                <div className="w-full max-w-[850px] relative mt-8 h-[250px] md:h-[460px]">
                    {/* Floating Design Elements - Left: Stats Card */}
                    <div className="absolute -left-2 md:-left-20 top-24 z-30 hidden md:block">
                        <div
                            className="bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                            style={{ animation: 'float 6s ease-in-out infinite' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium font-sans">Revenue</p>
                                    <p className="text-base font-bold text-gray-900 font-sans">$12,400</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Design Elements - Right: Users/Active Card */}
                    <div className="absolute -right-2 md:-right-20 top-16 z-30 hidden md:block">
                        <div
                            className="bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center gap-4 hover:scale-105 transition-all duration-300 cursor-pointer"
                            style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}
                        >
                            <div className="flex -space-x-3">
                                <div className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white"></div>
                                <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white"></div>
                                <div className="w-9 h-9 rounded-full bg-[#EFE34B] border-2 border-white flex items-center justify-center text-[10px] font-bold text-black border-none">+</div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium font-sans">Total Leads</p>
                                <p className="text-base font-bold text-gray-900 font-sans">4,800+</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Design Elements - Left: Contacts Card (New) */}
                    <div className="absolute -left-2 md:-left-12 bottom-32 z-30 hidden md:block">
                        <div
                            className="bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                            style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '0.5s' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium font-sans">Active Contacts</p>
                                    <p className="text-base font-bold text-gray-900 font-sans">2,540</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Design Elements - Right: Emails Card (New) */}
                    <div className="absolute -right-2 md:-right-12 bottom-24 z-30 hidden md:block">
                        <div
                            className="bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center gap-3 hover:scale-105 transition-all duration-300 cursor-pointer"
                            style={{ animation: 'float 5.5s ease-in-out infinite', animationDelay: '2s' }}
                        >
                            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium font-sans">Emails Sent</p>
                                <p className="text-base font-bold text-gray-900 font-sans">15.2k</p>
                            </div>
                        </div>
                    </div>

                    {/* Layer 1 (Deepest - Darker Yellow) */}
                    <div className="absolute top-12 -left-6 md:-left-16 -right-6 md:-right-16 bottom-0 bg-[#C9B020] rounded-t-[40px] md:rounded-t-[56px] -z-20 opacity-80"></div>

                    {/* Layer 2 (Middle - Medium Yellow) */}
                    <div className="absolute top-6 -left-3 md:-left-8 -right-3 md:-right-8 bottom-4 bg-[#E6D035] rounded-t-[36px] md:rounded-t-[48px] -z-10"></div>

                    <div className="w-full h-full overflow-hidden rounded-t-xl relative z-10">
                        <Image
                            src="/images/dashboard-ui.png"
                            alt="Social Commerce Dashboard"
                            width={900}
                            height={600}
                            className="w-full h-auto rounded-t-xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>





            {/* Accelerate Growth Section */}
            <section
                className="mt-0 py-24 px-6 relative overflow-hidden"
                style={{
                    backgroundImage: 'url(/images/bg-subscribe.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#111' // Fallback color
                }}
            >
                <div className="max-w-[1100px] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-wide text-white uppercase mb-2">
                                ACCELERATE YOUR
                            </h2>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-wide text-[#EFE34B] uppercase">
                                BUSINESS GROWTH.
                            </h2>
                        </div>

                        {/* Right Form */}
                        <div className="lg:pl-12">
                            <label className="block text-white text-sm mb-2 pl-4">Email*</label>
                            <div className="flex bg-[#222] rounded-full p-1 border border-gray-600 max-w-lg">
                                <input
                                    type="email"
                                    placeholder="What's your work email?"
                                    className="flex-1 bg-transparent text-white px-6 py-3 outline-none placeholder-gray-400 rounded-l-full"
                                />
                                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap">
                                    Contact Us
                                </button>
                            </div>
                            <p className="text-gray-400 text-xs mt-3 pl-4">
                                Free leads | Credit cards not required
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
