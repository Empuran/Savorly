"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function LogosPage() {
    return (
        <div className="min-h-screen bg-secondary/30 flex flex-col items-center justify-center p-8">
            <div className="max-w-4xl w-full space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-serif font-bold text-foreground">Choose Your Logo</h1>
                    <p className="text-muted-foreground text-lg">
                        Review the options below and let me know which one you prefer (1, 2, or 3).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Option 1: The Fresh 'S' */}
                    <Card className="p-8 flex flex-col items-center gap-6 hover:shadow-lg transition-shadow">
                        <div className="w-32 h-32 relative bg-primary rounded-3xl flex items-center justify-center shadow-inner">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white" fillOpacity="0.1" />
                                <path d="M9.5 14c-2.5 0-2.5-4 0-4 1.5 0 2.5 1 2.5 3s-1 4-2.5 4z" fill="currentColor" />
                                <path d="M14.5 10c2.5 0 2.5 4 0 4-1.5 0-2.5-1-2.5-3s1-4 2.5-4z" fill="currentColor" />
                                <path d="M12 2C9 2 7 4 7 7c0 1.5 1 3 2.5 3C11 10 11 11 12 11s1-1 2.5-1C16 10 17 8.5 17 7c0-3-2-5-5-5z" fill="currentColor" opacity="0.8" />
                                <path d="M12 22c3 0 5-2 5-5 0-1.5-1-3-2.5-3C13 14 13 13 12 13s-1 1-2.5 1C8 14 7 15.5 7 17c0 3 2 5 5 5z" fill="currentColor" opacity="0.8" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">Option 1</h3>
                            <p className="text-sm text-muted-foreground">Organic "S" Shape</p>
                        </div>
                    </Card>

                    {/* Option 2: The Elegant Utensils */}
                    <Card className="p-8 flex flex-col items-center gap-6 hover:shadow-lg transition-shadow">
                        <div className="w-32 h-32 relative bg-foreground rounded-3xl flex items-center justify-center shadow-inner">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-background">
                                <path d="M3 2v7c0 1.1.9 2 2 2h4V2H3zm19 0h-6v9c0 1.1.9 2 2 2h4V2zm-9 0v20h2V2h-2zm-6 13h4v9H7v-9zm10 0h4v9h-4v-9z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">Option 2</h3>
                            <p className="text-sm text-muted-foreground">Modern Utensils</p>
                        </div>
                    </Card>

                    {/* Option 3: The Passionate Flame */}
                    <Card className="p-8 flex flex-col items-center gap-6 hover:shadow-lg transition-shadow">
                        <div className="w-32 h-32 relative bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-inner">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M12 2C12 2 5 8 5 13C5 17.42 8.58 21 13 21C17.42 21 21 17.42 21 13C21 10 19 8 19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 15C9 15 11 16 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">Option 3</h3>
                            <p className="text-sm text-muted-foreground">Passion Flame</p>
                        </div>
                    </Card>

                    {/* Option 4: The Combined Masterpiece */}
                    <Card className="p-8 flex flex-col items-center gap-6 hover:shadow-lg transition-shadow ring-2 ring-primary bg-primary/5">
                        <div className="w-32 h-32 relative bg-primary rounded-xl flex items-center justify-center shadow-lg">
                            {/* Base S shape with Flame top and Fork negative space */}
                            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                                {/* Flame Top */}
                                <path d="M12 2C12 2 8 6 8 10C8 12 9 13 10 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 2C12 2 16 6 16 10C16 12 15 13 14 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

                                {/* Fork Tines inside the flame/S */}
                                <path d="M10 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M12 9V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M14 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

                                {/* S Bottom Curvature */}
                                <path d="M8 14C8 14 8 18 12 18C15 18 16 16 16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M9 22H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2 text-primary">Option 4</h3>
                            <p className="text-sm text-muted-foreground font-medium">Combined Elements</p>
                        </div>
                    </Card>

                    {/* Option 5: Animated Typographic Logo */}
                    <Card className="p-12 flex flex-col items-center gap-8 hover:shadow-lg transition-shadow md:col-span-3 bg-gradient-to-r from-background to-secondary/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />

                        {/* Animation Container */}
                        <div className="relative flex items-end gap-3">
                            {/* Bouncing Icon */}
                            <div className="relative mb-2 animate-[float_3s_ease-in-out_infinite]">
                                {/* Steam */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1">
                                    <div className="w-1 h-3 bg-primary/40 rounded-full animate-[steam_2s_ease-out_infinite]" />
                                    <div className="w-1 h-3 bg-primary/40 rounded-full animate-[steam_2s_ease-out_infinite_0.4s]" />
                                    <div className="w-1 h-3 bg-primary/40 rounded-full animate-[steam_2s_ease-out_infinite_0.8s]" />
                                </div>

                                {/* Pot/Bowl Icon */}
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-primary drop-shadow-md">
                                    <path d="M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M20 12c0 5-4 9-8 9s-8-4-8-9" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 21v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M8 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>

                            {/* Text Reveal */}
                            <div className="flex flex-col">
                                <span className="text-5xl md:text-6xl font-serif font-black tracking-tight text-foreground relative">
                                    Savorly
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full origin-left animate-[draw-text_1s_ease-out_forwards]" />
                                </span>
                                <span className="text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase mt-1 animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-300 fill-mode-forwards">
                                    Taste the magic
                                </span>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <h3 className="text-xl font-bold mb-2">Option 5 (Animated)</h3>
                            <p className="text-sm text-muted-foreground">Animated Typography & Icon</p>
                        </div>
                    </Card>

                    {/* Option 6: Ultra Animated */}
                    <Card className="p-12 flex flex-col items-center gap-8 hover:shadow-lg transition-shadow md:col-span-3 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-background border-primary/20 relative overflow-hidden">

                        {/* Animation Container */}
                        <div className="relative flex flex-col md:flex-row items-center gap-6">

                            {/* Rattling Icon */}
                            <div className="relative group">
                                <div className="animate-[rattle_0.2s_ease-in-out_infinite_3s] hover:animate-[rattle_0.2s_ease-in-out_infinite]">
                                    <div className="relative w-24 h-24 transform transition-transform hover:scale-110">
                                        <Image
                                            src="https://d1hbpr09pwz0sk.cloudfront.net/logo_url/savorly-f010b8f1"
                                            alt="Savorly Icon"
                                            fill
                                            className="object-contain drop-shadow-xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shimmering Text */}
                            <div className="flex flex-col items-center md:items-start">
                                <h1 className="text-6xl md:text-7xl font-serif font-black tracking-tighter bg-gradient-to-r from-primary via-orange-400 to-primary bg-[length:200%_auto] text-transparent bg-clip-text animate-[shimmer_3s_linear_infinite]">
                                    Savorly
                                </h1>
                                <div className="flex gap-1 overflow-hidden">
                                    {['T', 'a', 's', 't', 'e', '\u00A0', 't', 'h', 'e', '\u00A0', 'm', 'a', 'g', 'i', 'c'].map((char, i) => (
                                        <span
                                            key={i}
                                            className="text-sm font-bold uppercase tracking-widest text-muted-foreground animate-[pop-in_0.5s_ease-out_forwards]"
                                            style={{ animationDelay: `${1.5 + (i * 0.05)}s`, opacity: 0 }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <h3 className="text-xl font-bold mb-2 text-primary">Option 6 (Ultra Animated)</h3>
                            <p className="text-sm text-muted-foreground">Boiling Pot & Shimmering Text</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
