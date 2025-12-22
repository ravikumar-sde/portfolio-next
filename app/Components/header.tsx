'use client';
import { useState } from 'react';
import TypingAnimation from '../Animations/TypingAnimation';

export default function Header() {
    const [startTyping] = useState(true);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0c10] via-[#0f1115] to-[#0a0c10]">
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

            {/* Floating orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            {/* Animated lines */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left side - Content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-sm">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                            <span className="text-amber-400 text-sm font-medium">Available for opportunities</span>
                        </div>

                        {/* Main heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="text-[#dde1e7]">Hi, I&apos;m</span>
                                <br />
                                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                                    Ravi Kumar
                                </span>
                            </h1>

                            {/* Typing animation */}
                            <div className="relative min-h-[80px] flex items-center">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#9ca3af]">
                                    {startTyping && (
                                        <TypingAnimation
                                            text="Software Engineer & GenAI Enthusiast"
                                            speed={50}
                                            delay={0}
                                            className="text-[#dde1e7]"
                                            showCursor={true}
                                        />
                                    )}
                                </h2>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-[#9ca3af] leading-relaxed max-w-xl">
                            Crafting scalable web applications with modern technologies.
                            Passionate about building innovative solutions that make a difference.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-600 text-[#0a0c10] font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative flex items-center gap-2">
                                    View Projects
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group px-8 py-4 bg-transparent hover:bg-[#1a1d23] text-[#dde1e7] font-bold rounded-xl border-2 border-amber-500/50 hover:border-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
                            >
                                <span className="flex items-center gap-2">
                                    Contact Me
                                    <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-[#2a2d35]">
                            <div className="space-y-1">
                                <div className="text-3xl font-bold text-amber-400">2+</div>
                                <div className="text-sm text-[#9ca3af]">Years Experience</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl font-bold text-amber-400">10+</div>
                                <div className="text-sm text-[#9ca3af]">Projects Completed</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl font-bold text-amber-400">5+</div>
                                <div className="text-sm text-[#9ca3af]">Technologies</div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Visual element */}
                    <div className="relative hidden lg:flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                        {/* Code window mockup */}
                        <div className="relative w-full max-w-lg">
                            {/* Floating tech badges */}
                            <div className="absolute -top-8 -left-8 px-4 py-2 bg-[#1a1d23] border border-amber-500/30 rounded-lg shadow-lg shadow-amber-500/20 animate-float z-20">
                                <span className="text-amber-400 font-mono text-sm">React.js</span>
                            </div>
                            <div className="absolute top-1/4 -right-12 px-4 py-2 bg-[#1a1d23] border border-amber-500/30 rounded-lg shadow-lg shadow-amber-500/20 animate-float z-20" style={{ animationDelay: '0.5s' }}>
                                <span className="text-amber-400 font-mono text-sm">Node.js</span>
                            </div>
                            <div className="absolute bottom-1/4 -left-12 px-4 py-2 bg-[#1a1d23] border border-amber-500/30 rounded-lg shadow-lg shadow-amber-500/20 animate-float z-20" style={{ animationDelay: '1s' }}>
                                <span className="text-amber-400 font-mono text-sm">MongoDB</span>
                            </div>
                            <div className="absolute -bottom-8 right-1/4 px-4 py-2 bg-[#1a1d23] border border-amber-500/30 rounded-lg shadow-lg shadow-amber-500/20 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                                <span className="text-amber-400 font-mono text-sm">AWS</span>
                            </div>

                            {/* Main code window */}
                            <div className="relative bg-[#1a1d23] border border-[#2a2d35] rounded-2xl overflow-hidden shadow-2xl z-10">
                                {/* Window header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#0f1115] border-b border-[#2a2d35]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-xs text-[#9ca3af] ml-4 font-mono">portfolio.tsx</span>
                                </div>

                                {/* Code content */}
                                <div className="p-6 font-mono text-sm space-y-2">
                                    <div className="text-purple-400">const <span className="text-amber-400">developer</span> = {'{'}</div>
                                    <div className="pl-4 text-[#9ca3af]">
                                        <span className="text-blue-400">name</span>: <span className="text-green-400">&quot;Ravi Kumar&quot;</span>,
                                    </div>
                                    <div className="pl-4 text-[#9ca3af]">
                                        <span className="text-blue-400">role</span>: <span className="text-green-400">&quot;Software Engineer&quot;</span>,
                                    </div>
                                    <div className="pl-4 text-[#9ca3af]">
                                        <span className="text-blue-400">skills</span>: [
                                    </div>
                                    <div className="pl-8 text-green-400">
                                        &quot;React&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;
                                    </div>
                                    <div className="pl-4 text-[#9ca3af]">],</div>
                                    <div className="pl-4 text-[#9ca3af]">
                                        <span className="text-blue-400">passion</span>: <span className="text-green-400">&quot;Building amazing things&quot;</span>
                                    </div>
                                    <div className="text-purple-400">{'}'};</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}