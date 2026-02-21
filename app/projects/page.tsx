"use client";

import { motion } from "framer-motion";
import { MdCode, MdOpenInNew } from "react-icons/md";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center max-w-2xl mx-auto"
                >
                    <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-4 block">Case Studies</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        Real Projects. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Measurable Results.</span>
                    </h1>
                </motion.div>

                <div className="flex flex-col gap-24">
                    {/* Case Study 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 glass-card p-10 rounded-3xl">
                            <h2 className="text-3xl font-bold text-white mb-4">E-Commerce Performance Rebuild</h2>

                            <div className="mb-6">
                                <h4 className="text-fuchsia-400 font-bold mb-1">The Problem</h4>
                                <p className="text-slate-400 text-sm">Slow load times (LCP &gt; 4s) were causing a 35% bounce rate on mobile devices, directly hurting revenue.</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-violet-400 font-bold mb-1">The Solution</h4>
                                <p className="text-slate-400 text-sm">Migrated to Next.js with Server-Side Rendering (SSR) and optimized image delivery pipeline.</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-cyan-400 font-bold mb-1">Tech Stack</h4>
                                <p className="text-slate-400 text-sm">Next.js, TypeScript, TailwindCSS, Shopify Storefront API</p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a href="https://github.com/vercel/next.js/tree/canary/examples/commerce" target="_blank" rel="noopener noreferrer" className="glass-button px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
                                    <MdCode className="text-lg" /> Source Code
                                </a>
                                <a href="https://demo.vercel.store/" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                                    <MdOpenInNew className="text-lg" /> Live Demo
                                </a>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 aspect-[4/3] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden relative group perspective-1000">
                            <div className="w-full h-full bg-slate-800 transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-12 relative">
                                <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" alt="E-Commerce Rebuild" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-2 glass-card p-10 rounded-3xl">
                            <h2 className="text-3xl font-bold text-white mb-4">SaaS Analytics Dashboard</h2>

                            <div className="mb-6">
                                <h4 className="text-fuchsia-400 font-bold mb-1">The Overview</h4>
                                <p className="text-slate-400 text-sm">A comprehensive data visualization dashboard built for a B2B SaaS platform handling thousands of data points.</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-violet-400 font-bold mb-1">Tech Stack</h4>
                                <p className="text-slate-400 text-sm">React, TailwindCSS, Recharts, React Query, Zustand</p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a href="https://github.com/TremorLabs/tremor-raw" target="_blank" rel="noopener noreferrer" className="glass-button px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
                                    <MdCode className="text-lg" /> Source Code
                                </a>
                                <a href="https://raw.tremor.so/" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                                    <MdOpenInNew className="text-lg" /> Live Demo
                                </a>
                            </div>
                        </div>

                        <div className="order-1 lg:order-1 aspect-[4/3] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden relative group perspective-1000">
                            <div className="w-full h-full bg-slate-800 transition-transform duration-700 hover:rotate-y-12 hover:-rotate-x-12 relative">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard Preview" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 glass-card p-10 rounded-3xl">
                            <h2 className="text-3xl font-bold text-white mb-4">AI Content Generator Web App</h2>

                            <div className="mb-6">
                                <h4 className="text-fuchsia-400 font-bold mb-1">The Overview</h4>
                                <p className="text-slate-400 text-sm">A full-stack application leveraging OpenAI's API to generate marketing copy, blog posts, and social media content.</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-violet-400 font-bold mb-1">Tech Stack</h4>
                                <p className="text-slate-400 text-sm">Next.js 14, TypeScript, OpenAI API, Prisma, PostgreSQL</p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a href="https://github.com/steven-tey/dub" target="_blank" rel="noopener noreferrer" className="glass-button px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
                                    <MdCode className="text-lg" /> Source Code
                                </a>
                                <a href="https://dub.co/" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                                    <MdOpenInNew className="text-lg" /> Live Demo
                                </a>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 aspect-[4/3] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden relative group perspective-1000">
                            <div className="w-full h-full bg-slate-800 transition-transform duration-700 hover:-rotate-y-12 hover:rotate-x-12 relative">
                                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop" alt="AI Interface" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 4 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-2 glass-card p-10 rounded-3xl">
                            <h2 className="text-3xl font-bold text-white mb-4">Real Estate Property Explorer</h2>

                            <div className="mb-6">
                                <h4 className="text-fuchsia-400 font-bold mb-1">The Overview</h4>
                                <p className="text-slate-400 text-sm">A dynamic property listing platform with advanced filtering, map integration, and virtual tour capabilities.</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-violet-400 font-bold mb-1">Tech Stack</h4>
                                <p className="text-slate-400 text-sm">React, Next.js, Mapbox GL, Framer Motion, Supabase</p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a href="https://github.com/adrianhajdin/project_realestate" target="_blank" rel="noopener noreferrer" className="glass-button px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
                                    <MdCode className="text-lg" /> Source Code
                                </a>
                                <a href="https://real-estate-project-teal.vercel.app/" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                                    <MdOpenInNew className="text-lg" /> Live Demo
                                </a>
                            </div>
                        </div>

                        <div className="order-1 lg:order-1 aspect-[4/3] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden relative group perspective-1000">
                            <div className="w-full h-full bg-slate-800 transition-transform duration-700 hover:rotate-y-12 hover:-rotate-x-12 relative">
                                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" alt="Real Estate App" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 5 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 glass-card p-10 rounded-3xl">
                            <h2 className="text-3xl font-bold text-white mb-4">Web3 NFT Marketplace</h2>

                            <div className="mb-6">
                                <h4 className="text-fuchsia-400 font-bold mb-1">The Overview</h4>
                                <p className="text-slate-400 text-sm">A decentralized application (dApp) allowing users to mint, buy, and sell NFTs globally with crypto wallet integration.</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-violet-400 font-bold mb-1">Tech Stack</h4>
                                <p className="text-slate-400 text-sm">React, Ethers.js, Solidity, Hardhat, IPFS</p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a href="https://github.com/shuding/nextra" target="_blank" rel="noopener noreferrer" className="glass-button px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
                                    <MdCode className="text-lg" /> Source Code
                                </a>
                                <a href="https://nextra.site/" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                                    <MdOpenInNew className="text-lg" /> Live Demo
                                </a>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 aspect-[4/3] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden relative group perspective-1000">
                            <div className="w-full h-full bg-slate-800 transition-transform duration-700 hover:-rotate-y-12 hover:rotate-x-12 relative">
                                <img src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2097&auto=format&fit=crop" alt="NFT Marketplace" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 6 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-2 glass-card p-10 rounded-3xl">
                            <h2 className="text-3xl font-bold text-white mb-4">Fintech Mobile Wallet Flow</h2>

                            <div className="mb-6">
                                <h4 className="text-fuchsia-400 font-bold mb-1">The Overview</h4>
                                <p className="text-slate-400 text-sm">A highly interactive and secure mobile-first web app mimicking a fintech wallet for sending and receiving funds.</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-violet-400 font-bold mb-1">Tech Stack</h4>
                                <p className="text-slate-400 text-sm">React, TailwindCSS, Framer Motion, Stripe API</p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener noreferrer" className="glass-button px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
                                    <MdCode className="text-lg" /> Source Code
                                </a>
                                <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                                    <MdOpenInNew className="text-lg" /> Live Demo
                                </a>
                            </div>
                        </div>

                        <div className="order-1 lg:order-1 aspect-[4/3] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden relative group perspective-1000">
                            <div className="w-full h-full bg-slate-800 transition-transform duration-700 hover:rotate-y-12 hover:-rotate-x-12 relative">
                                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop" alt="Fintech Wallet" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
