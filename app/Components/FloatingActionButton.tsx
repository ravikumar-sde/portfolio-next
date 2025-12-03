'use client'
import { useState } from 'react';

const FloatingActionButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "devicon-linkedin-plain",
            link: "https://www.linkedin.com/in/ravi-kumar-8284-singh/",
            color: "#0077B5"
        },
        {
            name: "GitHub",
            icon: "devicon-github-original",
            link: "https://github.com/ravikumarsingh9907",
            color: "#ffffff"
        },
        {
            name: "Twitter",
            icon: "devicon-twitter-original",
            link: "https://twitter.com/xmart_rv_singh",
            color: "#1DA1F2"
        }
    ];

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
            {/* Menu Items */}
            <div className={`absolute bottom-16 md:bottom-20 right-0 flex flex-col gap-2 md:gap-3 transition-all duration-500 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
                {/* Resume Download */}
                <div className="flex items-center gap-2 md:gap-3 group">
                    <span className="hidden md:block bg-[#1a1d23] text-amber-400 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-amber-500/30">
                        Download Resume
                    </span>
                    <a
                        href="/resume.pdf"
                        download
                        className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-amber-500 hover:bg-amber-600 rounded-full shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
                        aria-label="Download Resume"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0a0c10]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </a>
                </div>

                {/* Social Links */}
                {socialLinks.map((social, index) => (
                    <div
                        key={social.name}
                        className="flex items-center gap-2 md:gap-3 group"
                        style={{
                            transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                        }}
                    >
                        <span className="hidden md:block bg-[#1a1d23] text-[#dde1e7] px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#2a2d35]">
                            {social.name}
                        </span>
                        <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-[#1a1d23] hover:bg-[#2a2d35] rounded-full shadow-lg border border-[#2a2d35] hover:border-amber-500/50 transition-all duration-300 hover:scale-110 hover:shadow-amber-500/20"
                            aria-label={social.name}
                        >
                            <i className={`${social.icon} text-xl md:text-2xl`} style={{ color: social.color }}></i>
                        </a>
                    </div>
                ))}
            </div>

            {/* Main FAB Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-linear-to-br from-amber-500 to-amber-600 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110 ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                }`}
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-[#0a0c10]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-[#0a0c10]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                )}
            </button>

            {/* Ripple Effect */}
            {isOpen && (
                <div className="absolute bottom-0 right-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-500/20 animate-ping pointer-events-none"></div>
            )}
        </div>
    );
};

export default FloatingActionButton;

