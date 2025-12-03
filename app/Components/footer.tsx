'use client';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "devicon-linkedin-plain",
            link: "https://www.linkedin.com/in/ravi-kumar-8284-singh/",
        },
        {
            name: "GitHub",
            icon: "devicon-github-original",
            link: "https://github.com/ravikumarsingh9907",
        },
        {
            name: "Twitter",
            icon: "devicon-twitter-original",
            link: "https://twitter.com/xmart_rv_singh",
        }
    ];

    const quickLinks = [
        { name: "About", href: "#header" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className='relative w-full bg-[#0a0c10] border-t border-[#2a2d35]'>
            <div className='w-full lg:w-2/4 m-auto py-8 md:py-12 px-4'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                    {/* Brand Section */}
                    <div className='space-y-4'>
                        <h3 
                            style={{fontFamily: 'Montserrat Subrayada, sans-serif'}} 
                            className="font-extrabold text-4xl text-amber-400"
                        >
                            RK
                        </h3>
                        <p className='text-[#9ca3af] text-sm leading-relaxed'>
                            Software Engineer passionate about building innovative solutions and exploring GenAI technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-lg font-semibold text-amber-400 mb-4'>Quick Links</h4>
                        <ul className='space-y-2'>
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className='text-[#9ca3af] hover:text-amber-400 transition-colors duration-300 text-sm flex items-center gap-2 group'
                                    >
                                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className='text-lg font-semibold text-amber-400 mb-4'>Connect</h4>
                        <div className='flex gap-4'>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-10 h-10 flex items-center justify-center bg-[#1a1d23] border border-[#2a2d35] hover:border-amber-500/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 group'
                                    aria-label={social.name}
                                >
                                    <i className={`${social.icon} text-xl text-[#9ca3af] group-hover:text-amber-400 transition-colors duration-300`}></i>
                                </a>
                            ))}
                        </div>
                        
                        {/* Email */}
                        <div className='mt-6'>
                            <a
                                href="mailto:ravikumarsingh9907@gmail.com"
                                className='text-[#9ca3af] hover:text-amber-400 transition-colors duration-300 text-sm flex items-center gap-2 group'
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                ravikumarsingh9907@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='border-t border-[#2a2d35] my-8'></div>

                {/* Bottom Bar */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-[#9ca3af] text-sm'>
                        © {currentYear} Ravi Kumar. All rights reserved.
                    </p>
                    
                    <div className='flex items-center gap-2 text-[#9ca3af] text-sm'>
                        <span>Built with</span>
                        <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>using Next.js & Tailwind CSS</span>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <div className='flex justify-center mt-8'>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className='group flex items-center gap-2 px-4 py-2 bg-[#1a1d23] border border-[#2a2d35] hover:border-amber-500/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20'
                        aria-label="Scroll to top"
                    >
                        <svg className="w-4 h-4 text-amber-400 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span className='text-[#9ca3af] group-hover:text-amber-400 text-sm transition-colors duration-300'>
                            Back to Top
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

