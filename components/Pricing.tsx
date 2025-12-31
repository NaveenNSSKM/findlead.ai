'use client';

import { useState } from 'react';

export default function Pricing() {
    const [showComparison, setShowComparison] = useState(false);
    const [isAnnual, setIsAnnual] = useState(true);

    return (
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
                        {/* Circle Graphic */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-bl-full z-0"></div>
                        <div className="absolute top-8 right-8 z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <div className="w-8 h-8 rounded-full border-[3px] border-blue-200"></div>
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
                        {/* Purple Graphic */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400 rounded-bl-full z-0"></div>
                        <div className="absolute top-5 right-5 z-10">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
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
                        {/* Purple Texture Graphic */}
                        <div className="absolute top-0 right-0 w-full h-[220px] bg-gradient-to-br from-[#6A5ACD] to-[#8A2BE2] opacity-100 z-0 mask-image-bottom"></div>
                        {/* Abstract Star Pattern background in header */}
                        <div className="absolute top-4 right-4 z-10 opacity-30">
                            <svg width="100" height="100" viewBox="0 0 24 24" fill="white"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" /></svg>
                        </div>
                        <div className="absolute top-10 right-10 z-20">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" /></svg>
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
                    <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-between h-[650px] relative">
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
                    <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-4" onClick={() => setShowComparison(false)}>
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col relative" onClick={e => e.stopPropagation()}>
                            <div className="p-6 border-b border-gray-100 flex-none relative">
                                <button
                                    onClick={() => setShowComparison(false)}
                                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">Compare Plans</h2>
                            </div>

                            <div className="overflow-auto p-4 md:p-8 flex-1 custom-scrollbar">
                                <div className="min-w-[900px]">
                                    {/* Table Header */}
                                    <div className="grid grid-cols-5 gap-4 border-b border-[#EFE34B] pb-6 mb-8 text-center items-end sticky top-0 bg-white z-10 pt-2">
                                        <div className="text-left font-bold text-lg">Features</div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">Free</h4>
                                            <p className="text-gray-500 font-medium">$0</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">Basic</h4>
                                            <p className="text-gray-500 font-medium">$299</p>
                                        </div>
                                        <div className="bg-[#FCF9CB] rounded-t-lg pt-4 -mt-4 pb-2 border-b-2 border-[#EFE34B]">
                                            <h4 className="font-bold text-xl mb-1 text-black">Professional</h4>
                                            <p className="text-gray-800 font-medium">$499</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">Managed Service</h4>
                                            <p className="text-gray-500 font-medium">$999</p>
                                        </div>
                                    </div>

                                    {/* Table Content */}
                                    <div className="space-y-12">
                                        <ComparisonSection title="Limits/month">
                                            <ComparisonRow feature="AI Words" free="10,000" basic="100,000" pro="Unlimited" managed="Unlimited" highlighted />
                                            <ComparisonRow feature="Article Writer" free="1" basic="5" pro="30" managed="30" highlighted />
                                            <ComparisonRow feature="Keyword Planner" free={false} basic={false} pro="30" managed="30" highlighted />
                                            <ComparisonRow feature="Content Optimizer" free={false} basic={false} pro="30" managed="30" highlighted />
                                        </ComparisonSection>

                                        <ComparisonSection title="SEO">
                                            <ComparisonRow feature="Cruise Mode (5 min article writer)" free={true} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="SERP Analysis" free={true} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="SERP Statistics" free={true} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="Social Listening" free={false} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="Automated Outlines" free={true} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="NLP Entities" free={false} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="SEO Articles" free={false} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="Keyword Planner" free={false} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="Content Optimizer" free={false} basic={true} pro={true} managed={true} highlighted />
                                        </ComparisonSection>

                                        <ComparisonSection title="Writing">
                                            <ComparisonRow feature="SEO Editor" free={true} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="Long-form Editor" free={false} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="Paraphrasing" free={true} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="AI Copywriter" free={true} basic={true} pro={true} managed={true} highlighted />
                                        </ComparisonSection>

                                        <ComparisonSection title="Collaboration">
                                            <ComparisonRow feature="Sharing Documents" free={false} basic={true} pro={true} managed={true} highlighted />
                                            <ComparisonRow feature="Team Members" free={false} basic={false} pro={true} managed={true} highlighted />
                                        </ComparisonSection>

                                        <ComparisonSection title="Support">
                                            <ComparisonRow feature="Email Support" free="Standard" basic="Priority" pro="Priority" managed="Dedicated" highlighted />
                                            <ComparisonRow feature="Onboarding Training" free={false} basic="Videos" pro="Videos & Live" managed="Dedicated CS" highlighted />
                                        </ComparisonSection>
                                    </div>

                                    <div className="mt-12 text-center text-gray-500 text-sm">
                                        Full feature list available upon request.
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </section>
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
