'use client'
import { useState } from 'react';
import SkillCard from "./SkillCard";
import { CardBody, CardContainer } from "@/components/ui/shadcn-io/3d-card";

const skills = [
    {
        name: "HTML",
        icon: "devicon-html5-plain",
        colour: "red",
        proficiency: "4",
        category: "Frontend",
        experience: "Extensive experience in building semantic, accessible web structures with modern HTML5 features and best practices.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            },
            {
                name: "HTML, CSS, and Javascript for Web Developers",
                link: "https://coursera.org/share/09ccd64988cc09cc541d70a999208e76",
            }
        ]
    },
    {
        name: "CSS",
        icon: "devicon-css3-plain",
        colour: "#0D92F4",
        proficiency: "4",
        category: "Frontend",
        experience: "Proficient in creating responsive, pixel-perfect designs using modern CSS3, Flexbox, Grid, and animations.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            },
            {
                name: "HTML, CSS, and Javascript for Web Developers",
                link: "https://coursera.org/share/09ccd64988cc09cc541d70a999208e76",
            }
        ]
    },
    {
        name: "JavaScript",
        icon: "devicon-javascript-plain",
        colour: "#F5AD18",
        proficiency: "4",
        category: "Frontend",
        experience: "Strong expertise in ES6+ JavaScript, asynchronous programming, DOM manipulation, and modern JavaScript frameworks.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            },
            {
                name: "HTML, CSS, and Javascript for Web Developers",
                link: "https://coursera.org/share/09ccd64988cc09cc541d70a999208e76",
            },
            {
                name: "Programming with JavaScript",
                link: "https://coursera.org/share/06a78dd905d3849c27aa0c40f061f1de",
            }
        ]
    },
    {
        name: "React.js",
        icon: "devicon-react-original",
        colour: "#8CE4FF",
        proficiency: "4",
        category: "Frontend",
        experience: "Extensive experience building scalable React applications with hooks, context API, state management, and Next.js ecosystem.",
        cerfications: [
            {
                name: "React Basics",
                link: "https://coursera.org/share/05f2683186b9667f589afafdaadab8d3",
            },
            {
                name: "Advanced React",
                link: "https://coursera.org/share/88edbb1f88c7f624e5b8267c88cfd78e",
            }
        ]
    },
    {
        name: "Node.js",
        icon: "devicon-nodejs-plain",
        colour: "#3CB371",
        proficiency: "4",
        category: "Backend",
        experience: "Skilled in building high-performance server-side applications, RESTful APIs, and real-time systems with Node.js.",
        cerfications: [
            {
                name: "Server-side Development with NodeJS, Express and MongoDB",
                link: "https://coursera.org/share/c660cb87c047046ca6577efaf8ca0acb",
            }
        ]
    },
    {
        name: "Express.js",
        icon: "devicon-express-original",
        colour: "#F5F5F0",
        proficiency: "4",
        category: "Backend",
        experience: "Proficient in developing robust backend services, middleware implementation, and API development with Express.js.",
        cerfications: [
            {
                name: "Server-side Development with NodeJS, Express and MongoDB",
                link: "https://coursera.org/share/c660cb87c047046ca6577efaf8ca0acb",
            }
        ]
    },
    {
        name: "MySQL",
        icon: "devicon-mysql-plain",
        colour: "teal",
        proficiency: "4",
        category: "Databases",
        experience: "Strong experience in database design, complex queries, optimization, and managing relational databases with MySQL.",
        cerfications: []
    },
    {
        name: "MongoDB",
        icon: "devicon-mongodb-plain",
        colour: "#2E8B57",
        proficiency: "4",
        category: "Databases",
        experience: "Experienced in NoSQL database design, aggregation pipelines, indexing strategies, and working with Mongoose ODM.",
        cerfications: [
            {
                name: "Server-side Development with NodeJS, Express and MongoDB",
                link: "https://coursera.org/share/c660cb87c047046ca6577efaf8ca0acb",
            }
        ]
    },
    {
        name: "Docker",
        icon: "devicon-docker-plain",
        colour: "#67B2D8",
        proficiency: "4",
        category: "Tools",
        experience: "Proficient in containerization, creating Docker images, multi-stage builds, and orchestrating containers for deployment.",
        cerfications: [
            {
                name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
                link: "https://coursera.org/share/76ce0d911beb8733d4fee5dfb0aaa4d2",
            }
        ]
    },
    {
        name: "AWS",
        icon: "devicon-amazonwebservices-plain-wordmark",
        colour: "#FFB22C",
        proficiency: "4",
        category: "Cloud",
        experience: "Experienced in deploying and managing cloud infrastructure using AWS services like EC2, S3, Lambda, and RDS.",
        cerfications: [
            {
                name: "Introduction to Cloud Computing",
                link: "https://coursera.org/share/5c72fa58192c6be8531113d3afef364d",
            }
        ]
    },
]

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isScrollable, setIsScrollable] = useState(false);

    const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'Databases', 'Tools'];

    const filteredSkills = selectedCategory === 'All'
        ? skills
        : skills.filter(skill => skill.category === selectedCategory);

    // Check if content is scrollable
    const checkScrollable = (element: HTMLDivElement | null) => {
        if (element) {
            setIsScrollable(element.scrollHeight > element.clientHeight);
        }
    };

    return (
        <div className="w-full h-screen relative py-8 flex flex-col">
            <div className="absolute top-0 left-1/4 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-amber-500/12 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className="w-full md:w-2/3 lg:w-2/4 m-auto px-4 md:px-0 text-[#dde1e7] h-full flex flex-col">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4 bg-linear-to-r from-[#dde1e7] via-amber-400 to-[#dde1e7] bg-clip-text text-transparent">
                    Technical Skills
                </h2>
                <p className='text-[#9ca3af] text-base md:text-lg mb-4 md:mb-6'>
                    My expertise across various technologies and tools
                </p>

                {/* Category Filter */}
                <div className='flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8'>
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
                                <span className='ml-1 md:ml-2 text-xs opacity-70'>({skills.length})</span>
                            )}
                        </button>
                    ))}
                </div>

                <div className="relative flex-1 overflow-hidden">
                    {filteredSkills.length > 0 ? (
                        <div
                            ref={checkScrollable}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 h-full overflow-y-auto pr-2 pb-8 scrollbar-hide"
                        >
                            {filteredSkills.map(skill => {
                                return (
                                    <CardContainer
                                        key={skill.name}
                                        className="inter-var"
                                        containerClassName="py-0"
                                    >
                                        <CardBody className="relative w-full h-full">
                                            <SkillCard skill={skill} />
                                        </CardBody>
                                    </CardContainer>
                                );
                            })}
                        </div>
                    ) : (
                        <div className='flex items-center justify-center h-full'>
                            <div className='text-center'>
                                <svg className="w-16 h-16 mx-auto mb-4 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                <p className='text-[#9ca3af] text-lg'>No skills found in this category</p>
                            </div>
                        </div>
                    )}

                    {/* Enhanced Scroll Indicator - Right Side - Hidden on mobile and when not scrollable */}
                    {filteredSkills.length > 0 && isScrollable && (
                        <div className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20">
                            <div className="flex flex-col items-center gap-1 animate-bounce">
                                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                            <div className="relative w-1 h-24 bg-amber-500/20 rounded-full overflow-hidden backdrop-blur-sm border border-amber-500/30">
                                <div className="absolute top-0 w-full h-1/4 bg-linear-to-b from-amber-400 to-amber-500 rounded-full shadow-lg shadow-amber-500/50 animate-pulse"></div>
                            </div>
                            <div className="writing-mode-vertical text-amber-400 text-xs font-medium opacity-70 tracking-wider">
                                SCROLL
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}