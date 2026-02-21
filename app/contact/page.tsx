"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MdMail, MdLocationOn, MdCheckCircle, MdError, MdSend } from "react-icons/md";
import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            const res = await fetch("https://formsubmit.co/ajax/Calebashele@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    ...formData,
                    _subject: "New Portfolio Contact Message!",
                    _template: "table",
                    _captcha: "false",
                }),
            });
            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-slate-950">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        Let's Build Something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">That Grows Your Business.</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-lg">
                        Ready to upgrade your digital presence? Book a free discovery call or drop me a message below. I reply within 24 hours.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/20">
                                <MdMail className="text-violet-400 text-xl" />
                            </div>
                            <a href="mailto:Calebashele@gmail.com" className="text-lg font-medium hover:text-violet-400 transition-colors">Calebashele@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                                <MdLocationOn className="text-cyan-400 text-xl" />
                            </div>
                            <span className="text-lg font-medium">Available Worldwide</span>
                        </div>
                    </div>
                </motion.div>

                <div className="perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-panel p-10 rounded-[2rem] shadow-2xl shadow-violet-500/10 border border-white/10 relative overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center text-center py-10 gap-6"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                        <MdCheckCircle className="text-green-400 text-4xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                                        <p className="text-slate-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                                    </div>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="glass-button px-6 py-3 rounded-xl font-bold text-sm"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : status === "error" ? (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center text-center py-10 gap-6"
                                >
                                    <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                                        <MdError className="text-red-400 text-4xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-2">Something went wrong</h3>
                                        <p className="text-slate-400">Please try again or email me directly at Calebashele@gmail.com</p>
                                    </div>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="glass-button px-6 py-3 rounded-xl font-bold text-sm"
                                    >
                                        Try Again
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-6 relative z-10"
                                >
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-300">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="glass-input rounded-xl px-4 py-3"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-300">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="glass-input rounded-xl px-4 py-3"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-slate-300">How can I help you?</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="glass-input rounded-xl px-4 py-3"
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="glass-button flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-black mt-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <MdSend className="text-xl" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
