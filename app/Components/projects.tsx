'use client'
import { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import zomatoLogo from '../Assets/Icon.png';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const projects = [
        {
            title: 'Zomato Clone',
            description: 'A full-featured food delivery platform clone with restaurant listings, cart functionality, and order management.',
            technologies: ['React.js', 'Tailwind CSS', 'Redux'],
            category: 'Web App',
            image: zomatoLogo,
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/ravikumarsingh9907'
        },
        {
            title: 'E-Commerce Platform',
            description: 'Modern e-commerce solution with payment integration, inventory management, and admin dashboard.',
            technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'Web App',
            image: zomatoLogo,
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/ravikumarsingh9907'
        },
        {
            title: 'Task Management System',
            description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
            technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
            category: 'Web App',
            image: zomatoLogo,
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/ravikumarsingh9907'
        },
        {
            title: 'AI Chat Application',
            description: 'Intelligent chatbot application powered by AI with natural language processing and context awareness.',
            technologies: ['React.js', 'Python', 'OpenAI', 'FastAPI'],
            category: 'AI/ML',
            image: zomatoLogo,
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/ravikumarsingh9907'
        },
        {
            title: 'Portfolio Website',
            description: 'Modern portfolio website with interactive animations, dark mode, and responsive design.',
            technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
            category: 'Web App',
            image: zomatoLogo,
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/ravikumarsingh9907'
        },
        {
            title: 'Weather Dashboard',
            description: 'Real-time weather tracking application with forecasts, maps, and location-based alerts.',
            technologies: ['React.js', 'Weather API', 'Chart.js'],
            category: 'Web App',
            image: zomatoLogo,
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/ravikumarsingh9907'
        },
    ];

    const categories = ['All', 'Web App', 'AI/ML', 'Mobile'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    // Check scroll position
    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScroll);
            return () => scrollContainer.removeEventListener('scroll', checkScroll);
        }
    }, [filteredProjects]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Auto-scroll functionality
    const startAutoScroll = () => {
        if (autoScrollIntervalRef.current) return; // Already scrolling

        setIsAutoScrolling(true);
        let direction: 'right' | 'left' = 'right';

        autoScrollIntervalRef.current = setInterval(() => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

                // Check if we've reached the end
                if (scrollLeft >= scrollWidth - clientWidth - 10) {
                    direction = 'left';
                } else if (scrollLeft <= 10) {
                    direction = 'right';
                }

                // Smooth continuous scroll
                scrollContainerRef.current.scrollBy({
                    left: direction === 'right' ? 2 : -2,
                    behavior: 'auto'
                });
            }
        }, 20); // Scroll every 20ms for smooth animation
    };

    const stopAutoScroll = () => {
        if (autoScrollIntervalRef.current) {
            clearInterval(autoScrollIntervalRef.current);
            autoScrollIntervalRef.current = null;
            setIsAutoScrolling(false);
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopAutoScroll();
        };
    }, []);

    return (
        <div className='relative w-full min-h-screen flex flex-col py-8 mt-6 md:mt-10'>
            {/* Section gradient accents */}
            <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/12 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-1/4 right-1/3 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none -z-10"></div>

            <div className='w-full md:w-3/4 lg:w-2/4 m-auto px-4 md:px-0 text-[#dde1e7] flex flex-col h-full'>
                {/* Header Section - Fixed */}
                <div className='shrink-0 mb-4 md:mb-6'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-light mb-2 md:mb-3 bg-linear-to-r from-[#dde1e7] via-amber-400 to-[#dde1e7] bg-clip-text text-transparent'>
                        Featured Projects
                    </h2>
                    <p className='text-[#9ca3af] text-sm md:text-base mb-4 md:mb-6'>
                        Explore my latest work and creative solutions
                    </p>

                    {/* Category Filter */}
                    <div className='flex flex-wrap gap-2 md:gap-3'>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-amber-500 text-[#0a0c10] shadow-lg shadow-amber-500/30'
                                        : 'bg-[#1a1d23] text-[#9ca3af] border border-[#2a2d35] hover:border-amber-500/50 hover:text-amber-400'
                                }`}
                            >
                                {category}
                                {category === 'All' && (
                                    <span className='ml-1 md:ml-2 text-xs opacity-70'>({projects.length})</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Horizontal Scrollable Projects */}
                <div className='flex-1 relative overflow-hidden mt-6 md:mt-10'>
                    {/* Left Scroll Button */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className='absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 bg-[#1a1d23] hover:bg-amber-500 border-2 border-amber-500/50 hover:border-amber-500 text-amber-400 hover:text-[#0a0c10] p-2 md:p-3 rounded-full shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm'
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Right Scroll Button */}
                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className='absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 bg-[#1a1d23] hover:bg-amber-500 border-2 border-amber-500/50 hover:border-amber-500 text-amber-400 hover:text-[#0a0c10] p-2 md:p-3 rounded-full shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm'
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Horizontal Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className='h-full overflow-x-auto scrollbar-hide flex items-center gap-4 md:gap-6 px-4 md:px-12 pb-8 md:pb-12'
                        onMouseEnter={startAutoScroll}
                        onMouseLeave={stopAutoScroll}
                    >
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className='shrink-0 w-[280px] md:w-[340px] lg:w-[380px] animate-in fade-in slide-in-from-right-4 duration-700'
                                style={{ animationDelay: `${index * 100}ms` }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    technologies={project.technologies}
                                    image={project.image}
                                    liveLink={project.liveLink}
                                    githubLink={project.githubLink}
                                    isHovered={hoveredIndex === index}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Horizontal Scroll Indicator */}
                    {filteredProjects.length > 0 && !isAutoScrolling && (
                        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 bg-[#1a1d23]/80 backdrop-blur-sm border border-amber-500/30 rounded-full transition-opacity duration-300">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-amber-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            <span className="text-amber-400 text-[10px] md:text-xs font-medium hidden sm:inline">Hover to auto-scroll</span>
                            <span className="text-amber-400 text-[10px] md:text-xs font-medium sm:hidden">Scroll</span>
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-amber-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    )}

                    {/* Auto-scrolling indicator */}
                    {isAutoScrolling && (
                        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-amber-500/90 backdrop-blur-sm rounded-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#0a0c10] rounded-full animate-pulse"></div>
                            <span className="text-[#0a0c10] text-[10px] md:text-xs font-semibold">Auto-scrolling...</span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#0a0c10] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='text-center'>
                                <svg className="w-16 h-16 mx-auto mb-4 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                                <p className='text-[#9ca3af] text-lg'>No projects found in this category</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects