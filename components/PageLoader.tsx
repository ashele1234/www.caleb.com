"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function PageLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [prevPath, setPrevPath] = useState(pathname);

    useEffect(() => {
        if (pathname !== prevPath) {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
                setPrevPath(pathname);
            }, 700);
            return () => clearTimeout(timer);
        }
    }, [pathname, prevPath]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="page-loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-lg"
                >
                    {/* Progress bar at top */}
                    <motion.div
                        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
                        initial={{ width: "0%" }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    <div className="flex flex-col items-center gap-5">
                        {/* Spinner rings */}
                        <div className="relative flex items-center justify-center w-20 h-20">
                            <div className="absolute inset-0 rounded-2xl border-[3px] border-t-violet-500 border-r-fuchsia-500 border-b-transparent border-l-transparent animate-spin" />
                            <div className="absolute inset-2 rounded-xl border-[3px] border-b-cyan-400 border-l-cyan-400 border-t-transparent border-r-transparent animate-[spin_1s_linear_infinite_reverse]" />
                            <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 p-3 rounded-xl text-white shadow-[0_0_25px_rgba(139,92,246,0.6)]">
                                <FaCode className="text-lg" />
                            </div>
                        </div>

                        {/* Animated dots */}
                        <div className="flex items-center gap-1.5">
                            {[0, 1, 2].map((i) => (
                                <motion.span
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-violet-500"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
