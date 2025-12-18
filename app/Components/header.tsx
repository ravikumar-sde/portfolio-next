'use client';
import { useState } from 'react';
import { AppleHelloEnglishEffect } from "@/components/ui/shadcn-io/apple-hello-effect";
import TypingAnimation from '../Animations/TypingAnimation';

export default function Header() {
    const [startTyping, setStartTyping] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Animated gradient background blobs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[90px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

            <div className="w-full md:w-2/3 lg:w-3/5 xl:w-1/2 m-auto px-4 md:px-8 z-10">
                <div className="flex flex-col gap-6 md:gap-8 items-center text-center">
                    {/* Hello Animation with enhanced styling */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full"></div>
                        <AppleHelloEnglishEffect
                            className='text-amber-500 relative z-10 drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]'
                            onAnimationComplete={() => setStartTyping(true)}
                        />
                    </div>

                    {/* Main heading with gradient */}
                    <div className="space-y-4 md:space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-linear-to-r from-[#dde1e7] via-amber-400 to-[#dde1e7] bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <span className='text-2xl font-light'>I&apos;m</span> Ravi Kumar
                        </h1>

                        {/* Typing animation container */}
                        <div className="relative min-h-20 md:min-h-[100px] flex items-center justify-center">
                            <h2 className="font-semibold tracking-[0.02rem] leading-relaxed text-xl md:text-2xl lg:text-3xl text-[#a8adb2] relative max-w-full px-4">
                                <span className="invisible">I&apos;m a Software Engineer and GenAI Enthusiast.</span>
                                {startTyping && (
                                    <span className="absolute top-0 left-0 w-full px-4">
                                        <TypingAnimation
                                            text="I'm a Software Engineer and GenAI Enthusiast."
                                            speed={40}
                                            delay={0}
                                            className="text-[#dde1e7]"
                                            showCursor={true}
                                        />
                                    </span>
                                )}
                            </h2>
                        </div>

                        {/* Tagline/Description */}
                        <p className="text-[#9ca3af] text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                            Building scalable web applications with modern technologies
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="group relative px-8 py-3 bg-amber-500 hover:bg-amber-600 text-[#0a0c10] font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105 flex items-center gap-2 cursor-pointer"
                            >
                                <span>View My Work</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-3 bg-[#1a1d23] hover:bg-[#2a2d35] text-[#dde1e7] font-semibold rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer"
                            >
                                Get In Touch
                            </button>
                        </div>

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-3 justify-center pt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
                            {['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-[#1a1d23] border border-[#2a2d35] hover:border-amber-500/50 text-[#9ca3af] hover:text-amber-400 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-amber-400 text-xs font-medium">Scroll Down</span>
                            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}