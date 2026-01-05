'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Pricing() {
    const [showComparison, setShowComparison] = useState(false);
    const [isAnnual, setIsAnnual] = useState(true);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(3); // Default to 3rd question expanded
    const [selectedCategory, setSelectedCategory] = useState('Pricing');

    return (
        <>
            <section className="pt-32 pb-24 px-6 relative bg-[#EFE34B]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight text-black">
                            Supercharge Your Sales Success<br />with Findlead Pricing
                        </h1>
                        <p className="text-lg text-black/80 font-medium">
                            Unlock Revenue Potential with Pricing Plans Tailored to Your Success
                        </p>

                        {/* Toggle */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <span className={`text-sm font-bold ${!isAnnual ? 'text-black' : 'text-black/50'}`}>Monthly</span>
                            <button
                                onClick={() => setIsAnnual(!isAnnual)}
                                className="w-16 h-8 bg-white rounded-full p-1 relative transition-colors"
                            >
                                <div className={`w-6 h-6 bg-[#EFE34B] rounded-full shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
                            </button>
                            <span className={`text-sm font-bold ${isAnnual ? 'text-black' : 'text-black/50'} flex items-center gap-2`}>
                                Annual
                                <span className="bg-white text-xs px-2 py-0.5 rounded-full border border-black/5 shadow-sm">Save 40%</span>
                            </span>
                        </div>
                    </div>

                    {/* 4 Cards Grid - Replicating image layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center mb-16 px-4 md:px-0">

                        {/* Card 1: Free */}
                        <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between h-[650px] relative overflow-hidden">
                            {/* Free Plan Image - Top Right Corner */}
                            <div className="absolute top-0 right-0 z-10">
                                <Image
                                    src="/images/Free.png"
                                    alt="Free Plan"
                                    width={112}
                                    height={112}
                                    style={{ width: 'auto', height: 'auto' }}
                                    className="object-contain"
                                />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-heading font-bold mb-2">Free</h3>
                                <p className="text-xs font-semibold text-gray-500 mb-6 max-w-[180px]">Scale quickly using easy to use email and automation</p>

                                <div className="mb-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-300 group-hover:text-black transition-colors">$0</span>
                                    <span className="text-2xl font-medium text-gray-300 ml-1">/ month</span>
                                </div>
                                <p className="text-xs font-medium text-gray-400 mb-8">Free forever</p>

                                <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

                                <ul className="space-y-4">
                                    <ListItem text="Prospecting bulk show (1,000 contacts)" />
                                    <ListItem text="CRM Integrations" />
                                    <ListItem text="Advanced team management" />
                                    <ListItem text="Contact Sales" />
                                    <ListItem text="Multiple Users" />
                                </ul>
                            </div>

                            <button className="w-full py-3 rounded-lg border border-gray-200 text-gray-400 font-medium hover:text-black hover:border-black transition-colors mt-auto">
                                Request a demo
                            </button>
                        </div>

                        {/* Card 2: Basic */}
                        <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between h-[650px] relative overflow-hidden">
                            {/* Basic Plan Image - Top Right Corner */}
                            <div className="absolute top-0 right-0 z-10">
                                <Image
                                    src="/images/Basic.png"
                                    alt="Basic Plan"
                                    width={112}
                                    height={112}
                                    style={{ width: 'auto', height: 'auto' }}
                                    className="object-contain"
                                />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-heading font-bold mb-2">Basic</h3>
                                <p className="text-xs font-semibold text-gray-500 mb-6 max-w-[180px]">Everything you need to boost performance and revenue</p>

                                <div className="mb-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-800">$299</span>
                                    <span className="text-2xl font-medium text-gray-300 ml-1">/ month</span>
                                </div>
                                <p className="text-xs font-medium text-gray-400 mb-8">Per User, Per Month, Billed annually</p>

                                <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

                                <ul className="space-y-4">
                                    <ListItem text="10000 Credits Annually" />
                                    <ListItem text="ABM Leads" />
                                    <ListItem text="Single User Account" />
                                    <ListItem text="Verified Emails and Phone Numbers" />
                                    <ListItem text="Mobile Direct Dials" />
                                </ul>
                            </div>

                            <button className="w-full py-3 rounded-lg border border-gray-200 text-gray-400 font-medium hover:text-black hover:border-black transition-colors mt-auto">
                                Request a demo
                            </button>
                        </div>

                        {/* Card 3: Professional (Highlighted) */}
                        <div className="bg-[#2B2B2B] text-white rounded-[2rem] p-8 flex flex-col justify-between h-[800px] relative shadow-2xl transform lg:-translate-y-6 z-20 overflow-hidden">
                            {/* Purple Texture Background */}
                            <div className="absolute top-0 right-0 w-full h-[220px] opacity-100 z-0 mask-image-bottom"></div>
                            {/* Professional Plan Image - Top Right Corner */}
                            <div className="absolute top-0 right-0 z-10">
                                <Image
                                    src="/images/Professional.png"
                                    alt="Professional Plan"
                                    width={200}
                                    height={200}
                                    style={{ width: 'auto', height: 'auto' }}
                                    className="object-contain opacity-90"
                                />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-heading font-bold mb-2 text-[#EFE34B]">Professional</h3>
                                <p className="text-xs font-medium text-gray-200 mb-6 max-w-[200px]">Perfect for small teams with simple workflows</p>

                                <div className="mb-2">
                                    <span className="text-6xl font-bold tracking-tight">$499</span>
                                    <span className="text-2xl font-medium text-gray-400 ml-1">/ month</span>
                                </div>
                                <p className="text-xs font-medium text-gray-400 mb-6">Per User, Per Month<br />Billed annually</p>

                                {/* Dropdown Input */}
                                <div className="relative mb-8">
                                    <div className="w-full bg-white text-black px-4 py-3 rounded-lg flex justify-between items-center text-sm font-bold cursor-pointer">
                                        <span>20,000 credits <span className="text-gray-400 font-normal">1 user</span></span>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1L6 6L11 1" /></svg>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    <ListItemDark text="20000 Credits Annually" />
                                    <ListItemDark text="ABM Leads" />
                                    <ListItemDark text="Data Enrichment" />
                                    <ListItemDark text="Advanced Search Filters" />
                                    <ListItemDark text="Technographics" />
                                    <ListItemDark text="Prospecting bulk show" />
                                    <ListItemDark text="Extension bulk show" />
                                </ul>
                            </div>

                            <button className="w-full py-3 rounded-lg bg-[#0066FF] text-white font-bold hover:bg-blue-600 transition-colors mt-8 shadow-lg shadow-blue-900/50">
                                Request a demo
                            </button>
                        </div>

                        {/* Card 4: Managed Service */}
                        <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between h-[650px] relative overflow-hidden">
                            {/* Managed Service Icon/Logo - Top Right Corner */}

                            <div className="relative z-10">
                                <h3 className="text-3xl font-heading font-bold mb-4 leading-tight">Managed<br />Service</h3>
                                <p className="text-xs font-semibold text-gray-500 mb-6 max-w-[200px]">Email & LinkedIn outreach set and managed for you.</p>

                                <div className="mb-2">
                                    <p className="text-sm font-bold mb-1">Starting at</p>
                                    <span className="text-5xl font-bold tracking-tight text-black">$999</span>
                                    <span className="text-2xl font-medium text-gray-300 ml-1">/ month</span>
                                </div>

                                <div className="mt-8 mb-6 space-y-4">
                                    <button className="w-full py-3 rounded-lg bg-[#007AFF] text-white font-bold hover:bg-blue-600 transition-colors shadow-sm">
                                        Contact Sales
                                    </button>
                                    <div className="text-center">
                                        <a href="#" className="text-sm font-bold flex items-center justify-center gap-1 hover:underline">
                                            Learn More
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

                                <ul className="space-y-4">
                                    <ListItem text="20000 Credits Annually" />
                                    <ListItem text="ABM Leads" />
                                    <ListItem text="Data Enrichment" />
                                    <ListItem text="Advanced Search Filters" />
                                    <ListItem text="Technographics" />
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Compare Button */}
                    <div className="text-center pb-12">
                        <button
                            onClick={() => setShowComparison(true)}
                            className="bg-[#007AFF] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto hover:bg-blue-600 transition-colors shadow-lg"
                        >
                            Compare Plan
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1L6 6L11 1" /></svg>
                        </button>
                    </div>

                    {/* Comparison Modal/Table */}
                    {showComparison && (
                        <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-start pt-19 pb-8 px-4 overflow-y-auto" onClick={() => setShowComparison(false)}>
                            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col relative my-auto" onClick={e => e.stopPropagation()}>
                                <div className="p-5 md:p-6 border-b border-gray-200 flex-none relative bg-white rounded-t-2xl">
                                    <button
                                        onClick={() => setShowComparison(false)}
                                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-gray-900">Compare Plans</h2>
                                </div>

                                <div className="overflow-auto p-5 md:p-6 flex-1 custom-scrollbar">
                                    <div className="min-w-[700px]">
                                        {/* Toggle Section */}
                                        <div className="flex items-center gap-3 mb-8">
                                            <span className="text-sm font-medium text-gray-600">Monthly</span>
                                            <button
                                                onClick={() => setIsAnnual(!isAnnual)}
                                                className="w-12 h-6 bg-green-500 rounded-full p-0.5 relative transition-colors"
                                            >
                                                <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                            </button>
                                            <span className="text-sm font-medium text-gray-600">Yearly</span>
                                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">50% OFF</span>
                                        </div>

                                        {/* Table Header */}
                                        <div className="grid grid-cols-4 gap-4 border-b border-gray-200 pb-6 mb-4 text-center items-end sticky top-0 bg-white z-10 pt-2">
                                            <div className="text-left font-bold text-base">Features</div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Basic</h4>
                                                <p className="text-gray-900 font-bold text-xl">$19<span className="text-sm font-normal text-gray-500">/MO</span></p>
                                            </div>
                                            <div className="bg-[#FCF9CB] rounded-t-xl pt-4 -mt-4 pb-2 px-2">
                                                <h4 className="font-bold text-lg mb-1 text-black">Standard</h4>
                                                <p className="text-gray-900 font-bold text-xl">$39<span className="text-sm font-normal text-gray-500">/MO</span></p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Advance</h4>
                                                <p className="text-gray-900 font-bold text-xl">$59<span className="text-sm font-normal text-gray-500">/MO</span></p>
                                            </div>
                                        </div>

                                        {/* Table Content */}
                                        <div className="space-y-8">
                                            <ComparisonSection3Col title="Limits/month">
                                                <ComparisonRow3Col feature="AI Words" basic="100,000" standard="Unlimited" advance="Unlimited" highlighted />
                                                <ComparisonRow3Col feature="Article Writer" basic="5" standard="30" advance="30" highlighted />
                                                <ComparisonRow3Col feature="Keyword Planner" basic={false} standard="30" advance="30" highlighted />
                                                <ComparisonRow3Col feature="Content Optimizer" basic={false} standard="30" advance="30" highlighted />
                                            </ComparisonSection3Col>

                                            <ComparisonSection3Col title="SEO">
                                                <ComparisonRow3Col feature="Cruise Mode (5 min article writer)" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="SERP Analysis" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="SERP Statistics" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Social Listening" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Automated Outlines" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="NLP Entities" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="SEO Articles" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Keyword Planner" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Content Optimizer" basic={true} standard={true} advance={true} highlighted />
                                            </ComparisonSection3Col>

                                            <ComparisonSection3Col title="Writing">
                                                <ComparisonRow3Col feature="SEO Editor for Article Writing" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Long-form Editor for Copywriting" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Write & Instruct Commands" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Paraphrasing" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="AI Copywriter with 50+ Templates" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="AI Writing Chrome Extension" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="AI Documents" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="AI History" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Favorite Outputs" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Auto-Save" basic={true} standard={true} advance={true} highlighted />
                                            </ComparisonSection3Col>

                                            <ComparisonSection3Col title="Collaboration">
                                                <ComparisonRow3Col feature="Sharing Documents" basic={true} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Team Members" basic={false} standard={true} advance={true} highlighted />
                                            </ComparisonSection3Col>

                                            <ComparisonSection3Col title="App Integrations">
                                                <ComparisonRow3Col feature="Semrush" basic={false} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Wordpress" basic={false} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Copyscape" basic={false} standard={true} advance={true} highlighted />
                                            </ComparisonSection3Col>

                                            <ComparisonSection3Col title="Support">
                                                <ComparisonRow3Col feature="Additional Succ Credits" basic={false} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Email" basic={false} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Live Chat" basic={false} standard={true} advance={true} highlighted />
                                                <ComparisonRow3Col feature="Onboarding Training" basic="Videos & Live Webinars" standard="Videos & Live Webinars" advance="Videos & Live Webinars" highlighted />
                                                <ComparisonRow3Col feature="Dedicated CS" basic={false} standard={false} advance={true} highlighted />
                                            </ComparisonSection3Col>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* Testimonials Section - Black Background */}
            <section className="bg-black py-20 px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Infinite Scrolling Testimonials */}
                        <div className="relative h-[600px] overflow-hidden">
                            <div className="flex flex-col gap-6 animate-infinite-scroll">
                                {/* Testimonial 1 */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg flex-shrink-0">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">&quot;This tool helped me close more deals!&quot;</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        FindLead.ai has completely transformed our sales process. The lead quality is incredible and the automation saves us hours every week.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                            JK
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Jennifer K.</p>
                                            <p className="text-gray-500 text-xs">Sales Director</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg flex-shrink-0">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">&quot;Great App for anyone to the marketing!&quot;</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        I can&apos;t imagine going back to manual prospecting. FindLead makes it so easy to find and connect with qualified leads.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                            KA
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Kristina A.</p>
                                            <p className="text-gray-500 text-xs">Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 3 */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg flex-shrink-0">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">&quot;The best pricing tool out there!&quot;</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        The ROI has been incredible. We&apos;ve doubled our pipeline in just 3 months using FindLead&apos;s intelligent targeting.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                            MR
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Michael R.</p>
                                            <p className="text-gray-500 text-xs">CEO</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Duplicate testimonials for seamless loop */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg flex-shrink-0">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">&quot;This tool helped me close more deals!&quot;</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        FindLead.ai has completely transformed our sales process. The lead quality is incredible and the automation saves us hours every week.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                            JK
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Jennifer K.</p>
                                            <p className="text-gray-500 text-xs">Sales Director</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg flex-shrink-0">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">&quot;Great App for anyone to the marketing!&quot;</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        I can&apos;t imagine going back to manual prospecting. FindLead makes it so easy to find and connect with qualified leads.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                            KA
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Kristina A.</p>
                                            <p className="text-gray-500 text-xs">Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg flex-shrink-0">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">&quot;The best pricing tool out there!&quot;</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        The ROI has been incredible. We&apos;ve doubled our pipeline in just 3 months using FindLead&apos;s intelligent targeting.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                            MR
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Michael R.</p>
                                            <p className="text-gray-500 text-xs">CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="text-white">
                            <p className="text-[#EFE34B] font-bold text-sm mb-4 uppercase tracking-wider">TESTIMONIALS</p>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                                Wondering how Findlead manages to turn up sales? Take a look at what users have to say
                            </h2>
                            <button className="bg-[#EFE34B] text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg mt-6 flex items-center gap-2">
                                See it for Free
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 15L15 1M15 1H5M15 1V11" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-[1100px] mx-auto">
                    <div className="mb-12">
                        <h2 className="text-[32px] font-heading font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Sidebar - Categories with vertical border */}
                        <div className="relative">

                            <div className="space-y-6 pl-6 sticky top-24">
                                {['Free trial', 'Pricing', 'Credits', 'Refund'].map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`block text-left text-sm transition-all duration-200 relative pl-4 ${selectedCategory === category
                                            ? 'text-gray-900 font-semibold'
                                            : 'text-gray-300 hover:text-gray-500 font-normal'
                                            }`}
                                    >
                                        {/* Left border indicator - black for active, grey for inactive */}
                                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-5 transition-colors ${selectedCategory === category ? 'bg-black' : 'bg-gray-300'}`}></div>
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - FAQ Items */}
                        <div className="pl-4">
                            <div className="space-y-0 divide-y divide-gray-200">
                                {/* FAQ Item 1 */}
                                <div className="py-6">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === 0 ? null : 0)}
                                        className="w-full flex items-start justify-between text-left"
                                    >
                                        <span className="font-semibold text-base pr-4">What is Findlead?</span>
                                        <span className="text-xl font-light flex-shrink-0">
                                            {expandedFaq === 0 ? '−' : '+'}
                                        </span>
                                    </button>
                                    {expandedFaq === 0 && (
                                        <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                            FindLead.ai is a comprehensive sales intelligence platform that helps businesses find, verify, and connect with potential customers. We provide accurate contact information, company data, and advanced search capabilities to streamline your prospecting process.
                                        </div>
                                    )}
                                </div>

                                {/* FAQ Item 2 */}
                                <div className="py-6">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === 1 ? null : 1)}
                                        className="w-full flex items-start justify-between text-left"
                                    >
                                        <span className="font-semibold text-base pr-4">Is Findlead&apos;s data collection process compliant with privacy laws?</span>
                                        <span className="text-xl font-light flex-shrink-0">
                                            {expandedFaq === 1 ? '−' : '+'}
                                        </span>
                                    </button>
                                    {expandedFaq === 1 && (
                                        <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                            Yes, FindLead.ai is fully compliant with GDPR, CCPA, and other major privacy regulations. We only collect publicly available data and provide clear opt-out mechanisms for individuals who wish to remove their information.
                                        </div>
                                    )}
                                </div>

                                {/* FAQ Item 3 */}
                                <div className="py-6">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === 2 ? null : 2)}
                                        className="w-full flex items-start justify-between text-left"
                                    >
                                        <span className="font-semibold text-base pr-4">Is collecting business contact information a breach of privacy?</span>
                                        <span className="text-xl font-light flex-shrink-0">
                                            {expandedFaq === 2 ? '−' : '+'}
                                        </span>
                                    </button>
                                    {expandedFaq === 2 && (
                                        <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                            No, collecting business contact information from publicly available sources is legal and widely accepted. FindLead.ai focuses on professional business contacts that companies have made publicly available for business purposes.
                                        </div>
                                    )}
                                </div>

                                {/* FAQ Item 4 - Expanded by Default */}
                                <div className="py-6">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === 3 ? null : 3)}
                                        className="w-full flex items-start justify-between text-left"
                                    >
                                        <span className="font-semibold text-base pr-4">Can I end my subscription to Findlead?</span>
                                        <span className="text-xl font-light flex-shrink-0">
                                            {expandedFaq === 3 ? '−' : '+'}
                                        </span>
                                    </button>
                                    {expandedFaq === 3 && (
                                        <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                            Yes, you can easily discontinue your subscription to Findlead through your settings within our web browser extension. Simply access your account settings and click on the subscription management option to cancel at any time.
                                        </div>
                                    )}
                                </div>

                                {/* FAQ Item 5 */}
                                <div className="py-6">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === 4 ? null : 4)}
                                        className="w-full flex items-start justify-between text-left"
                                    >
                                        <span className="font-semibold text-base pr-4">What occurs when I cancel my subscription?</span>
                                        <span className="text-xl font-light flex-shrink-0">
                                            {expandedFaq === 4 ? '−' : '+'}
                                        </span>
                                    </button>
                                    {expandedFaq === 4 && (
                                        <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                            When you cancel your subscription, you&apos;ll continue to have access to your account until the end of your current billing period. After that, your access to premium features will be restricted, but your data will be safely stored for 90 days.
                                        </div>
                                    )}
                                </div>

                                {/* FAQ Item 6 */}
                                <div className="py-6">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === 5 ? null : 5)}
                                        className="w-full flex items-start justify-between text-left"
                                    >
                                        <span className="font-semibold text-base pr-4">Discovering Findlead has your information can be bothersome?</span>
                                        <span className="text-xl font-light flex-shrink-0">
                                            {expandedFaq === 5 ? '−' : '+'}
                                        </span>
                                    </button>
                                    {expandedFaq === 5 && (
                                        <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                                            We understand privacy concerns. If you find your information in our database and wish to have it removed, you can submit an opt-out request through our privacy portal. We process all removal requests within 48 hours.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Ready to Transform */}
            <section className="bg-[#EFE34B] py-16 px-6">
                <div className="max-w-[1100px] mx-auto">
                    <div
                        className="bg-white rounded-3xl px-12 py-16 relative overflow-hidden cta-hover-group"
                    >
                        {/* Left Clapping Hands */}
                        <div className="absolute bottom-0 left-8 flex gap-8">
                            <Image
                                src="/images/left-clap-1.png"
                                alt="Clapping hands"
                                width={80}
                                height={80}
                                style={{ width: 'auto', height: 'auto' }}
                                className="object-contain animate-clap-1"
                            />
                            <Image
                                src="/images/left-clap-2.png"
                                alt="Clapping hands"
                                width={80}
                                height={80}
                                style={{ width: 'auto', height: 'auto' }}
                                className="object-contain animate-clap-2"
                            />
                        </div>

                        {/* Right Clapping Hands */}
                        <div className="absolute bottom-0 right-8 flex gap-8">
                            <Image
                                src="/images/right-clap-3.png"
                                alt="Clapping hands"
                                width={80}
                                height={80}
                                style={{ width: 'auto', height: 'auto' }}
                                className="object-contain animate-clap-3"
                            />
                            <Image
                                src="/images/right-clap-4.png"
                                alt="Clapping hands"
                                width={80}
                                height={80}
                                style={{ width: 'auto', height: 'auto' }}
                                className="object-contain animate-clap-4"
                            />
                        </div>

                        {/* Content */}
                        <div className="text-center relative z-10">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 max-w-3xl mx-auto leading-tight">
                                Ready to transform the way you find online leads once and for all?
                            </h2>
                            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto shadow-lg">
                                Sign up for free
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 15L15 1M15 1H5M15 1V11" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accelerate Growth Section */}
            <section
                className="py-24 px-6 relative overflow-hidden"
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

        </>
    );
}

function ListItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4L3.5 6.5L9 1" /></svg>
            </div>
            <span className="text-sm font-medium text-gray-600">{text}</span>
        </li>
    );
}

function ListItemDark({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#444] flex items-center justify-center shrink-0 border border-gray-600">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4L3.5 6.5L9 1" /></svg>
            </div>
            <span className="text-sm font-medium text-gray-300">{text}</span>
        </li>
    );
}

// Comparison Table Components
function ComparisonSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-lg font-bold mb-4 pl-4 border-l-4 border-[#EFE34B]">{title}</h3>
            <div className="divide-y divide-gray-100">
                {children}
            </div>
        </div>
    );
}

function ComparisonRow({ feature, free, basic, pro, managed, highlighted }: { feature: string; free: string | boolean; basic: string | boolean; pro: string | boolean; managed: string | boolean; highlighted?: boolean }) {
    const renderCell = (value: string | boolean) => {
        if (value === true) {
            return (
                <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-500"><path d="M20 6L9 17L4 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            );
        } else if (value === false) {
            return (
                <div className="flex justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-300"><path d="M18 6L6 18M6 6l12 12" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            );
        }
        return <span className="text-gray-900 font-medium">{value}</span>;
    };

    return (
        <div className="grid grid-cols-5 gap-4 py-4 items-center text-center hover:bg-gray-50 transition-colors">
            <div className="text-left pl-4 font-medium text-gray-600">{feature}</div>
            <div>{renderCell(free)}</div>
            <div>{renderCell(basic)}</div>
            <div className={`${highlighted ? 'bg-[#FCF9CB]/30 -mx-2 rounded' : ''}`}>{renderCell(pro)}</div>
            <div>{renderCell(managed)}</div>
        </div>
    );
}

// 3-Column Comparison Components for the new design
function ComparisonSection3Col({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-base font-bold mb-3 text-gray-700">{title}</h3>
            <div className="divide-y divide-gray-100">
                {children}
            </div>
        </div>
    );
}

function ComparisonRow3Col({ feature, basic, standard, advance, highlighted }: { feature: string; basic: string | boolean; standard: string | boolean; advance: string | boolean; highlighted?: boolean }) {
    const renderCell = (value: string | boolean, isHighlighted: boolean = false) => {
        if (value === true) {
            return (
                <div className="flex justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            );
        } else if (value === false) {
            return (
                <div className="flex justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
            );
        }
        return <span className="text-gray-800 font-medium text-sm">{value}</span>;
    };

    return (
        <div className="grid grid-cols-4 gap-4 py-3 items-center text-center hover:bg-gray-50 transition-colors">
            <div className="text-left text-sm font-medium text-gray-700">{feature}</div>
            <div>{renderCell(basic)}</div>
            <div className="bg-[#FCF9CB]/40 -mx-2 px-2 py-1 rounded">{renderCell(standard, true)}</div>
            <div>{renderCell(advance)}</div>
        </div>
    );
}
