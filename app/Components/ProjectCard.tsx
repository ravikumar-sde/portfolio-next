'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    image: StaticImageData | string;
    liveLink?: string;
    githubLink?: string;
    isHovered?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies,
    image,
    liveLink,
    githubLink,
    isHovered = false
}) => {
    return (
        <div className='group h-[440px] bg-linear-to-br from-[#1a1d23] to-[#0c0f11] border border-[#2a2d35] hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/20 rounded-xl overflow-hidden relative flex flex-col'>
            {/* Gradient overlay on hover */}
            <div className='absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10'></div>

            {/* Image Section */}
            <div className='relative w-full h-40 shrink-0 overflow-hidden bg-[#0c0f11]'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
                {/* Image overlay gradient */}
                <div className='absolute inset-0 bg-linear-to-t from-[#0c0f11] via-transparent to-transparent opacity-60'></div>

                {/* Floating badge */}
                <div className='absolute top-3 right-3 bg-amber-500/90 backdrop-blur-sm text-[#0c0f11] px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg'>
                    Featured
                </div>
            </div>

            {/* Content Section */}
            <div className='p-4 relative z-20 flex flex-col flex-1 min-h-0'>
                <h3 className='text-lg font-bold mb-2 text-[#dde1e7] group-hover:text-amber-400 transition-colors duration-300 line-clamp-2'>
                    {title}
                </h3>
                <p className='text-[#9ca3af] mb-3 text-sm leading-relaxed h-12 overflow-y-auto scrollbar-hide'>
                    {description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mb-3'>
                    {technologies.slice(0, 4).map((tech, index) => (
                        <span
                            key={index}
                            className='px-2 py-0.5 bg-[#0a0c10] text-amber-400 text-xs font-medium rounded-md border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 cursor-default'
                        >
                            {tech}
                        </span>
                    ))}
                    {technologies.length > 4 && (
                        <span className='px-2 py-0.5 bg-[#0a0c10] text-[#9ca3af] text-xs font-medium rounded-md border border-[#2a2d35]'>
                            +{technologies.length - 4}
                        </span>
                    )}
                </div>

                {/* Action buttons */}
                <div className='flex gap-2 pt-3 border-t border-[#2a2d35] mt-auto'>
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-amber-500 hover:bg-amber-600 text-[#0c0f11] text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105'
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center justify-center gap-2 px-3 py-2.5 bg-[#1a1d23] hover:bg-[#2a2d35] text-[#dde1e7] text-sm font-semibold rounded-lg border border-[#2a2d35] hover:border-amber-500/30 transition-all duration-300'
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;