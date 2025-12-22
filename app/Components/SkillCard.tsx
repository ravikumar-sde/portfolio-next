'use client';
import { useState } from 'react'

interface SkillCardProps {
    skill: {
        name: string;
        icon: string;
        colour: string;
        proficiency?: string;
        experience?: string;
        cerfications: {
            name: string;
            link: string;
        }[];
    };
}

const SkillCard = ({ skill }: SkillCardProps) => {
    const [showLevel, setShowLevel] = useState(false);

    const proficiencyValue = skill.proficiency ? parseInt(skill.proficiency) : 0;

    const getProficiencyLevel = (value: number): string => {
        if (value >= 1 && value <= 2) return 'Beginner';
        if (value >= 3 && value <= 4) return 'Intermediate';
        if (value === 5) return 'Advanced';
        return '';
    };

    return (
        <div className='group/card w-full h-[360px] text-amber-50 flex flex-col gap-4 py-4 px-4 rounded-xl relative overflow-hidden shadow-lg hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300'>
            <div
                className='absolute inset-0 opacity-20 group-hover/card:opacity-25 transition-opacity duration-300'
                style={{ backgroundColor: skill.colour }}
            ></div>
            <div className='absolute inset-0 bg-black/60 backdrop-blur-sm'></div>
            <div className='absolute inset-0 border border-white/10 group-hover/card:border-amber-500/30 rounded-xl transition-colors duration-300'></div>

            {/* Header Section */}
            <div className='relative z-10 flex items-center gap-4 pb-4 border-b border-white/10 group-hover/card:border-amber-500/20 transition-colors duration-300'>
                <div className='shrink-0'>
                    <i
                        className={`${skill.icon} text-5xl p-3 rounded-lg`}
                        style={{ color: skill.colour }}
                    ></i>
                </div>
                <h2 className='text-2xl font-light text-[#dde1e7] group-hover/card:text-amber-400 transition-colors duration-300'>{skill.name}</h2>
            </div>

            {/* Content Section */}
            <div className='relative z-10 flex-1 flex flex-col gap-4 overflow-hidden'>
                {/* Proficiency Section */}
                {proficiencyValue > 0 && (
                    <div
                        className="relative group/proficiency shrink-0"
                        onMouseEnter={() => setShowLevel(true)}
                        onMouseLeave={() => setShowLevel(false)}
                    >
                        <div className="flex items-center gap-1.5">
                            {[1, 2, 3, 4, 5].map((bar) => (
                                <div
                                    key={bar}
                                    className={`h-2 flex-1 rounded-full transition-all duration-500 ease-out ${
                                        bar <= proficiencyValue
                                            ? 'bg-linear-to-r from-amber-400 to-amber-500 shadow-sm shadow-amber-500/50'
                                            : 'bg-black/30 border border-white/20'
                                    } ${bar <= proficiencyValue ? 'scale-100' : 'scale-95'}`}
                                    style={{
                                        transitionDelay: `${bar * 50}ms`
                                    }}
                                />
                            ))}
                        </div>

                        {/* Proficiency Level Tooltip */}
                        {showLevel && (
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-linear-to-br from-[#1a1d23] to-[#0c0f11] text-[#dde1e7] px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border border-amber-500/30 shadow-lg shadow-amber-500/20 z-10 animate-in fade-in slide-in-from-bottom-2 duration-200">
                                {getProficiencyLevel(proficiencyValue)}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1d23] border-r border-b border-amber-500/30 rotate-45"></div>
                            </div>
                        )}
                    </div>
                )}

                {/* Experience Section */}
                {skill.experience && (
                    <div className='shrink-0'>
                        <h3 className='text-sm font-semibold text-amber-400 mb-2 flex items-center gap-2'>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Experience
                        </h3>
                        <p className='text-xs text-[#dde1e7]/80 leading-relaxed line-clamp-3'>
                            {skill.experience}
                        </p>
                    </div>
                )}

                {/* Certifications Section */}
                {skill.cerfications && skill.cerfications.length > 0 && (
                    <div className='flex-1 flex flex-col min-h-0'>
                        <h3 className='text-sm font-semibold text-amber-400 mb-2 flex items-center gap-2 shrink-0'>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            Certifications
                        </h3>
                        <div className='flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-amber-500/30 scrollbar-track-transparent hover:scrollbar-thumb-amber-500/50'>
                            <div className='flex flex-col gap-2'>
                                {skill.cerfications.map(cerfication => (
                                    <a
                                        href={cerfication.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={cerfication.name}
                                        className='group/cert relative flex items-start gap-2 p-2 rounded-md bg-black/30 border border-white/10 hover:border-amber-500/50 hover:bg-black/40 transition-all duration-300'
                                    >
                                        <svg className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <div className='flex-1 min-w-0'>
                                            <p className='text-xs text-[#dde1e7] leading-relaxed group-hover/cert:text-amber-100 transition-colors'>
                                                {cerfication.name}
                                            </p>
                                        </div>
                                        <svg className="w-3 h-3 text-amber-400/50 group-hover/cert:text-amber-400 group-hover/cert:translate-x-0.5 transition-all shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SkillCard;