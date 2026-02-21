"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between perspective-1000">
                <Link href="/" className="flex items-center gap-3 group hover:rotate-y-12 transition-transform duration-500">
                    <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 p-2.5 rounded-xl text-white flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] transition-shadow">
                        <FaCode className="text-2xl" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white">CALEB<span className="text-fuchsia-500">.</span></span>
                </Link>

                <div className="hidden md:flex items-center gap-2 glass-card px-2 py-1.5 rounded-full">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isActive
                                    ? 'text-white'
                                    : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {isActive && (
                                    <span className="absolute inset-0 bg-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/20 -z-10"></span>
                                )}
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/contact" className="glass-button px-6 py-2.5 rounded-full text-sm font-black hidden md:block">
                        Book a Consultation
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 focus:outline-none bg-white/5 rounded-lg border border-white/10 backdrop-blur-md"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-3xl py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 border-b border-white/10 shadow-2xl">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-gradient-to-r from-violet-500/20 to-transparent border-l-4 border-violet-500 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-4 glass-button px-4 py-3 rounded-xl text-center font-black"
                    >
                        Book a Consultation
                    </Link>
                </div>
            )}
        </nav>
    );
}
