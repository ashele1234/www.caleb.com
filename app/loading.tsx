import { FaCode } from "react-icons/fa";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md">
            <div className="flex flex-col items-center gap-4">
                <div className="relative flex items-center justify-center">
                    {/* Outer spinning ring */}
                    <div className="absolute inset-0 rounded-xl border-t-2 border-violet-500 border-r-2 border-r-transparent animate-spin h-16 w-16"></div>
                    {/* Inner spinning ring */}
                    <div className="absolute inset-2 rounded-xl border-b-2 border-cyan-400 border-l-2 border-l-transparent animate-[spin_1.5s_linear_infinite_reverse] h-12 w-12"></div>

                    {/* Static center logo */}
                    <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 p-3 rounded-xl text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                        <FaCode className="text-xl animate-pulse" />
                    </div>
                </div>
                <div className="text-white font-black tracking-widest uppercase text-sm animate-pulse">
                    Loading<span className="text-fuchsia-500">...</span>
                </div>
            </div>
        </div>
    );
}
