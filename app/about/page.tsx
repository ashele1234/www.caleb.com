"use client";

import { motion } from "framer-motion";
import { MdCode, MdArchitecture, MdSpeed, MdArrowForward } from "react-icons/md";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiFigma } from "react-icons/si";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-slate-950">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-gradient pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-bold tracking-widest uppercase mb-6">
                            Behind the Code
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                            Engineer by Trade. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">Creator by Nature.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed mb-8">
                            I don't just build websites; I engineer digital experiences. With over 3 years focused purely on the frontend ecosystem, I've transformed complex requirements into sleek, performant, and highly scalable user interfaces.
                        </p>
                        <div className="flex gap-4">
                            <a href="/contact" className="glass-button inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold">
                                Let's Work Together
                            </a>
                        </div>
                    </motion.div>

                    {/* Image / Stats Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative glow blob */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-cyan-600/20 rounded-[2.5rem] blur-2xl -z-10"></div>
                        <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none z-10"></div>

                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group shadow-[0_30px_80px_rgba(139,92,246,0.2)]">
                            <img
                                src="/caleb-photo.png"
                                alt="Ashele Caleb Olusegun – Frontend Engineer"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>

                            {/* Open to Work badge */}
                            <div className="absolute top-6 right-6 px-4 py-2 glass-card rounded-full border border-white/10 backdrop-blur-md flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-bold text-white tracking-wide">Open to Work</span>
                            </div>

                            {/* Floating Stat Badge */}
                            <div className="absolute bottom-8 left-8 right-8 p-5 glass-card rounded-2xl border border-white/10 backdrop-blur-md">
                                <p className="text-3xl font-black text-white mb-0.5">100k+</p>
                                <p className="text-xs font-bold text-violet-400 uppercase tracking-widest">Lines of Code Shipped</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Tech Stack Marquee / Grid */}
                <div className="mb-32 text-center">
                    <h3 className="text-2xl font-bold text-white mb-12">The Arsenal</h3>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70">
                        <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity"><SiReact className="text-5xl text-[#61DAFB]" /><span className="text-sm font-bold text-slate-300">React</span></div>
                        <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity"><SiNextdotjs className="text-5xl text-white" /><span className="text-sm font-bold text-slate-300">Next.js</span></div>
                        <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity"><SiTypescript className="text-5xl text-[#3178C6]" /><span className="text-sm font-bold text-slate-300">TypeScript</span></div>
                        <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity"><SiTailwindcss className="text-5xl text-[#06B6D4]" /><span className="text-sm font-bold text-slate-300">Tailwind</span></div>
                        <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity"><SiNodedotjs className="text-5xl text-[#339933]" /><span className="text-sm font-bold text-slate-300">Node.js</span></div>
                        <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity"><SiFigma className="text-5xl text-[#F24E1E]" /><span className="text-sm font-bold text-slate-300">Figma</span></div>
                    </div>
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 perspective-1000">
                    <div className="glass-card p-10 rounded-3xl hover:rotate-y-12 hover:-rotate-x-12 transition-transform duration-500 group">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                            <MdSpeed className="text-3xl text-cyan-400 group-hover:scale-125 transition-transform" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Obsessive Performance</h3>
                        <p className="text-slate-400 leading-relaxed">Milliseconds matter. I optimize critical rendering paths, bundle sizes, and asset delivery to ensure perfect Lighthouse scores and zero layout shifts.</p>
                    </div>
                    <div className="glass-card p-10 rounded-3xl hover:translate-y-[-10px] hover:scale-105 transition-transform duration-500 group">
                        <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                            <MdArchitecture className="text-3xl text-violet-400 group-hover:scale-125 transition-transform" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Scalable Systems</h3>
                        <p className="text-slate-400 leading-relaxed">Writing code for tomorrow. I build modular component libraries and enforce strict typing to keep codebases maintainable as teams and features grow.</p>
                    </div>
                    <div className="glass-card p-10 rounded-3xl hover:-rotate-y-12 hover:rotate-x-12 transition-transform duration-500 group">
                        <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center mb-6 group-hover:bg-fuchsia-500/20 transition-colors">
                            <MdCode className="text-3xl text-fuchsia-400 group-hover:scale-125 transition-transform" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Pixel Perfect UI</h3>
                        <p className="text-slate-400 leading-relaxed">Bridging the gap between design and engineering. I translate complex Figma files into fluid, responsive, and accessible interfaces.</p>
                    </div>
                </div>

                {/* Experience / Journey */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center">The Journey So Far</h2>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2"></div>

                        {/* Timeline Item 1 */}
                        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 group">
                            <div className="order-2 md:order-1 md:w-1/2 md:text-right pr-12 pl-16 md:pl-0">
                                <h4 className="text-2xl font-bold text-white mb-2">Senior Frontend Engineer</h4>
                                <p className="text-violet-400 font-bold mb-4">Tech Innovations Inc. • 2024 - Present</p>
                                <p className="text-slate-400">Leading the migration of a legacy dashboard to Next.js 14, improving LCP by 40% and mentoring junior developers.</p>
                            </div>
                            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-slate-950 z-10 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                            <div className="order-1 md:order-3 md:w-1/2 md:pl-12 hidden md:block"></div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 group">
                            <div className="order-1 md:w-1/2 md:pr-12 hidden md:block"></div>
                            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 z-10 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                            <div className="order-2 md:order-3 md:w-1/2 pl-16 md:pl-12">
                                <h4 className="text-2xl font-bold text-white mb-2">Frontend Developer</h4>
                                <p className="text-cyan-400 font-bold mb-4">Creative Digital Agency • 2022 - 2024</p>
                                <p className="text-slate-400">Developed high-converting marketing sites and headless e-commerce platforms for enterprise clients using React and TailwindCSS.</p>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group">
                            <div className="order-2 md:order-1 md:w-1/2 md:text-right pr-12 pl-16 md:pl-0">
                                <h4 className="text-2xl font-bold text-white mb-2">Freelance Web Developer</h4>
                                <p className="text-fuchsia-400 font-bold mb-4">Independent • 2021 - 2022</p>
                                <p className="text-slate-400">Started my journey building bespoke websites for local businesses, focusing on SEO and mobile responsiveness.</p>
                            </div>
                            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-fuchsia-500 border-4 border-slate-950 z-10 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(217,70,239,0.5)]"></div>
                            <div className="order-1 md:order-3 md:w-1/2 md:pl-12 hidden md:block"></div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
