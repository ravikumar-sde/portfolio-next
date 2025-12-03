'use client'
import RapidopsLogo from '../Assets/rapidops-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Experience = () => {
    return (
        <div
            className='relative w-full min-h-screen flex items-center py-8 md:py-0'
        >
            {/* Section gradient accent */}
            <div className="absolute top-1/4 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-1/4 left-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className='w-full md:w-3/4 lg:w-2/4 m-auto px-4 md:px-0 pb-8 text-[#dde1e7]'>
                {/* Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4 bg-linear-to-r from-[#dde1e7] via-amber-400 to-[#dde1e7] bg-clip-text text-transparent">
                    Experience
                </h2>
                <p className='text-[#9ca3af] text-base md:text-lg mb-6 md:mb-8'>
                    My professional journey and contributions
                </p>

                {/* Company Logo with enhanced styling */}
                <Link
                    href="https://rapidops.com/"
                    target="_blank"
                    className="group relative inline-block w-fit mb-6 md:mb-8"
                >
                    <div className="absolute inset-0 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-[#1a1d23] border border-[#2a2d35] group-hover:border-amber-500/50 rounded-xl p-3 md:p-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/20">
                        <Image
                            src={RapidopsLogo}
                            alt="rapidops-logo"
                            width={100}
                            height={100}
                            className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300 md:w-[140px] md:h-[140px]"
                        />
                    </div>
                </Link>

                {/* Timeline Container */}
                <div className='relative'>
                    {/* Timeline line with gradient */}
                    <div className='w-0.5 bg-linear-to-b from-amber-500 via-amber-400 to-amber-500 absolute top-0 left-3 bottom-5 shadow-lg shadow-amber-500/30'></div>

                    {/* First Position */}
                    <div className="relative pl-12 pb-8 group/position">
                        {/* First timeline dot */}
                        <div className="absolute top-6 left-0 w-6 h-6 flex items-center justify-center">
                            <div className="absolute w-6 h-6 bg-amber-500 rounded-full animate-ping opacity-20"></div>
                            <div className="relative w-4 h-4 bg-amber-500 rounded-full border-2 border-[#0a0c10] shadow-lg shadow-amber-500/50"></div>
                        </div>
                        <div className="bg-[#1a1d23] border border-[#2a2d35] hover:border-amber-500/30 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 relative">
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover/position:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

                            {/* Date badge */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-1.5 inline-flex items-center gap-2">
                                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className='text-sm font-semibold text-amber-400'>Sept. 2022 - Mar. 2023</span>
                                </div>
                            </div>

                            {/* Position title */}
                            <h3 className='text-xl font-bold text-[#dde1e7] mb-4 flex items-center gap-2'>
                                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Software Engineer Intern
                            </h3>

                            {/* Responsibilities */}
                            <ul className='space-y-3'>
                                <li className='flex items-start gap-3 text-[#9ca3af] hover:text-[#dde1e7] transition-colors duration-200'>
                                    <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='text-sm leading-relaxed'>
                                        Collaborated with senior developers to implement APIs and database schemas.
                                    </span>
                                </li>
                                <li className='flex items-start gap-3 text-[#9ca3af] hover:text-[#dde1e7] transition-colors duration-200'>
                                    <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='text-sm leading-relaxed'>
                                        Conducted pair programming to enhance code quality and foster knowledge sharing.
                                    </span>
                                </li>
                                <li className='flex items-start gap-3 text-[#9ca3af] hover:text-[#dde1e7] transition-colors duration-200'>
                                    <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='text-sm leading-relaxed'>
                                        Authored comprehensive unit test cases for the APIs to ensure reliability and functionality.
                                    </span>
                                </li>
                                <li className='flex items-start gap-3 text-[#9ca3af] hover:text-[#dde1e7] transition-colors duration-200'>
                                    <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='text-sm leading-relaxed'>
                                        Implemented robust development architecture to optimize system performance.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Second Position */}
                    <div className="relative pl-12 pb-8 group/position">
                        {/* Second timeline dot */}
                        <div className="absolute top-6 left-0 w-6 h-6 flex items-center justify-center">
                            <div className="absolute w-6 h-6 bg-amber-500 rounded-full animate-ping opacity-20"></div>
                            <div className="relative w-4 h-4 bg-amber-500 rounded-full border-2 border-[#0a0c10] shadow-lg shadow-amber-500/50"></div>
                        </div>

                        <div className="bg-[#1a1d23] border border-[#2a2d35] hover:border-amber-500/30 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 relative">
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover/position:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

                            {/* Date badge with "Current" indicator */}
                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-1.5 inline-flex items-center gap-2">
                                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className='text-sm font-semibold text-amber-400'>Mar. 2023 - Current</span>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-1.5 inline-flex items-center gap-1.5">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className='text-xs font-semibold text-green-400'>Active</span>
                                </div>
                            </div>

                            {/* Position title */}
                            <h3 className='text-xl font-bold text-[#dde1e7] mb-4 flex items-center gap-2'>
                                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Jr. Software Engineer
                            </h3>

                            {/* Responsibilities */}
                            <ul className='space-y-3'>
                                <li className='flex items-start gap-3 text-[#9ca3af] hover:text-[#dde1e7] transition-colors duration-200'>
                                    <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='text-sm leading-relaxed'>
                                        Developed innovative and scalable server-side solutions as a part of Experro&apos;s admin panel team.
                                    </span>
                                </li>
                                <li className='flex items-start gap-3 text-[#9ca3af] hover:text-[#dde1e7] transition-colors duration-200'>
                                    <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='text-sm leading-relaxed'>
                                        Implemented parallel and asynchronous operations using thread pooling.
                                    </span>
                                </li>
                                <li className='flex items-start gap-3 text-[#9ca3af] hover:text-[#dde1e7] transition-colors duration-200'>
                                    <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='text-sm leading-relaxed'>
                                        Designed and developed index-based database schemas for multiple services.
                                    </span>
                                </li>
                                <li className='flex items-start gap-3 text-[#9ca3af] hover:text-[#dde1e7] transition-colors duration-200'>
                                    <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='text-sm leading-relaxed'>
                                        Authored database migration and optimized scripts, resulting in improved database performance.
                                    </span>
                                </li>
                                <li className='flex items-start gap-3 text-[#9ca3af] hover:text-[#dde1e7] transition-colors duration-200'>
                                    <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='text-sm leading-relaxed'>
                                        Collaborated in an innovative team environment, fostering effective communication and knowledge sharing.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;       