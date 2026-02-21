"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowOutward, MdVisibility, MdArrowDownward, MdSpeed, MdArchitecture, MdTrendingUp, MdCode } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] hero-gradient pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 w-fit backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)] mb-8 mx-auto"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-violet-300 uppercase tracking-widest">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tight text-white mb-6"
          >
            I Build High-Performance <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 glow-text drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              Websites That Convert.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light mb-10"
          >
            Stop losing customers to slow load times and confusing UI. I engineer scalable, SEO-optimized frontend architecture that turns visitors into paying clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link href="/contact" className="glass-button flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold">
              <span>Book a Free Consultation</span>
              <MdArrowOutward className="text-xl" />
            </Link>
            <Link href="/projects" className="glass-button flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold">
              <span>View Case Studies</span>
              <MdVisibility className="text-xl" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-500 animate-bounce"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Discover Value</span>
          <MdArrowDownward className="text-violet-500/50 text-xl" />
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Stat 1 */}
            <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:bg-violet-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-400 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-violet-400 mb-2">3+</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Experience</span>
              <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Stat 2 */}
            <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-5 group-hover:bg-fuchsia-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-fuchsia-400 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-fuchsia-400 mb-2">35%</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Avg Conversion Lift</span>
              <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Stat 3 */}
            <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-cyan-400 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-cyan-400 mb-2">100</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Lighthouse Score</span>
              <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Stat 4 */}
            <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 group-hover:bg-green-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-green-400 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-green-400 mb-2">$2M+</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Client Revenue</span>
              <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-violet-500 font-bold tracking-widest uppercase text-sm mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Impact & Performance.</span></h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              With over 3 years of specializing in the frontend spectrum, I help brands increase engagement and revenue by creating scalable architecture and high-converting user interfaces. My process involves deep discovery, strategic design, and flawless execution.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-violet-400 font-bold hover:text-white transition-colors group">
              <span>Learn more about my process</span>
              <MdArrowOutward className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square mt-8 group">
              <MdSpeed className="text-5xl text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform duration-500" />
              <span className="font-bold text-white tracking-wide">Performance</span>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square group">
              <MdArchitecture className="text-5xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-500" />
              <span className="font-bold text-white tracking-wide">Architecture</span>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square mt-8 group">
              <MdTrendingUp className="text-5xl text-violet-400 mb-4 group-hover:scale-110 transition-transform duration-500" />
              <span className="font-bold text-white tracking-wide">Conversion</span>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square group">
              <MdCode className="text-5xl text-green-400 mb-4 group-hover:scale-110 transition-transform duration-500" />
              <span className="font-bold text-white tracking-wide">Clean Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-24 glass-panel relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-4 block">Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Real Projects. Real Results.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A sneak peek into some of the high-performance applications and dashboards I've built. Dive into the case studies to see the tech stacks and business outcomes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 perspective-1000">
            {/* Project Preview Card 1 */}
            <div className="glass-card rounded-3xl overflow-hidden group">
              <div className="aspect-video bg-slate-800 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">SaaS Analytics Dashboard</h3>
                <p className="text-sm text-slate-400 border-l-2 border-fuchsia-500 pl-3">React, TailwindCSS, Recharts, Zustand</p>
              </div>
            </div>

            {/* Project Preview Card 2 */}
            <div className="glass-card rounded-3xl overflow-hidden group">
              <div className="aspect-video bg-slate-800 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop" alt="AI Interface" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">AI Content Generator</h3>
                <p className="text-sm text-slate-400 border-l-2 border-cyan-500 pl-3">Next.js 14, OpenAI API, Prisma</p>
              </div>
            </div>

            {/* Project Preview Card 3 */}
            <div className="glass-card rounded-3xl overflow-hidden group">
              <div className="aspect-video bg-slate-800 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2097&auto=format&fit=crop" alt="NFT Marketplace" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">Web3 NFT Marketplace</h3>
                <p className="text-sm text-slate-400 border-l-2 border-violet-500 pl-3">React, Ethers.js, Solidity</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/projects" className="glass-button inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold">
              <span>View All 6 Case Studies</span>
              <MdVisibility className="text-xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact / Final CTA Section */}
      <section className="py-24 relative z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto text-center px-6">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">What's Next?</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Ready to scale your digital presence?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Available world-wide for new opportunities. Let's discuss how we can engineer a high-converting frontend for your business.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="glass-button flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
