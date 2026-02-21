"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date());
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="w-full bg-slate-950 border-t border-white/10 py-8 relative z-50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-slate-400 text-sm font-bold">
                    &copy; {new Date().getFullYear()} Ashele Caleb Olusegun. All rights reserved.
                </div>

                <motion.div
                    className="glass-card px-6 py-2 rounded-full border border-white/10 flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-white font-mono text-sm tracking-widest font-bold">
                        {time ? time.toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: true,
                        }) : "Syncing Time..."}
                    </span>
                    <span className="text-slate-500 text-xs font-bold uppercase ml-1 block">Local Time</span>
                </motion.div>
            </div>
        </footer>
    );
}
