'use client'
import SkillCard from "./SkillCard";
import { CardBody, CardContainer } from "@/components/ui/shadcn-io/3d-card";

const skills = [
    {
        name: "HTML",
        icon: "devicon-html5-plain",
        colour: "red",
        proficiency: "4",
        experience: "Extensive experience in building semantic, accessible web structures with modern HTML5 features and best practices.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            }
        ]
    },
    {
        name: "CSS",
        icon: "devicon-css3-plain",
        colour: "#0D92F4",
        proficiency: "4",
        experience: "Proficient in creating responsive, pixel-perfect designs using modern CSS3, Flexbox, Grid, and animations.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            }
        ]
    },
    {
        name: "JavaScript",
        icon: "devicon-javascript-plain",
        colour: "#F5AD18",
        proficiency: "4",
        experience: "Strong expertise in ES6+ JavaScript, asynchronous programming, DOM manipulation, and modern JavaScript frameworks.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            }
        ]
    },
    {
        name: "React.js",
        icon: "devicon-react-original",
        colour: "#8CE4FF",
        proficiency: "4",
        experience: "Extensive experience building scalable React applications with hooks, context API, state management, and Next.js ecosystem.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            }
        ]
    },
    {
        name: "Node.js",
        icon: "devicon-nodejs-plain",
        colour: "#3CB371",
        proficiency: "4",
        experience: "Skilled in building high-performance server-side applications, RESTful APIs, and real-time systems with Node.js.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            }
        ]
    },
    {
        name: "Express.js",
        icon: "devicon-express-original",
        colour: "#F5F5F0",
        proficiency: "4",
        experience: "Proficient in developing robust backend services, middleware implementation, and API development with Express.js.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            }
        ]
    },
    {
        name: "MySQL",
        icon: "devicon-mysql-plain",
        colour: "teal",
        proficiency: "4",
        experience: "Strong experience in database design, complex queries, optimization, and managing relational databases with MySQL.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            }
        ]
    },
    {
        name: "MongoDB",
        icon: "devicon-mongodb-plain",
        colour: "#2E8B57",
        proficiency: "4",
        experience: "Experienced in NoSQL database design, aggregation pipelines, indexing strategies, and working with Mongoose ODM.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            }
        ]
    },
    {
        name: "Docker",
        icon: "devicon-docker-plain",
        colour: "#67B2D8",
        proficiency: "4",
        experience: "Proficient in containerization, creating Docker images, multi-stage builds, and orchestrating containers for deployment.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            }
        ]
    },
    {
        name: "AWS",
        icon: "devicon-amazonwebservices-plain-wordmark",
        colour: "#FFB22C",
        proficiency: "4",
        experience: "Experienced in deploying and managing cloud infrastructure using AWS services like EC2, S3, Lambda, and RDS.",
        cerfications: [
            {
                name: "HTML and CSS in depth",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            },
            {
                name: "Kubernetes",
                link: "https://coursera.org/share/be4734d6e8ffcc660f3979dc85d4b2cc",
            }
        ]
    },
]

export default function Skills() {
    return (
        <div className="w-full min-h-screen relative py-8">
            {/* Section gradient accents */}
            <div className="absolute top-0 left-1/4 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-amber-500/12 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className="w-full md:w-3/4 lg:w-2/4 m-auto px-4 md:px-0 text-[#dde1e7] h-full flex flex-col">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4 bg-linear-to-r from-[#dde1e7] via-amber-400 to-[#dde1e7] bg-clip-text text-transparent">
                    Technical Skills
                </h2>
                <p className='text-[#9ca3af] text-base md:text-lg mb-6 md:mb-8'>
                    My expertise across various technologies and tools
                </p>

                <div className="relative flex-1 overflow-hidden">
                    {/* Scrollable Grid - Hidden Scrollbar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-h-[60vh] md:max-h-[65vh] overflow-y-auto pr-2 pb-8 scrollbar-hide">
                        {skills.map(skill => {
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

                    {/* Enhanced Scroll Indicator - Right Side - Hidden on mobile */}
                    <div className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20">
                        {/* Animated Arrow */}
                        <div className="flex flex-col items-center gap-1 animate-bounce">
                            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative w-1 h-24 bg-amber-500/20 rounded-full overflow-hidden backdrop-blur-sm border border-amber-500/30">
                            <div className="absolute top-0 w-full h-1/4 bg-linear-to-b from-amber-400 to-amber-500 rounded-full shadow-lg shadow-amber-500/50 animate-pulse"></div>
                        </div>

                        {/* Scroll Text */}
                        <div className="writing-mode-vertical text-amber-400 text-xs font-medium opacity-70 tracking-wider">
                            SCROLL
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}