'use client'

const Contact = () => {
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "devicon-linkedin-plain",
            link: "https://www.linkedin.com/in/ravi-kumar-b21592175/",
            color: "#0077B5"
        },
        {
            name: "GitHub",
            icon: "devicon-github-original",
            link: "https://github.com/ravikumar-sde",
            color: "#ffffff"
        },
        {
            name: "Twitter",
            icon: "devicon-twitter-original",
            link: "https://x.com/xmart_rv_singh",
            color: "#1DA1F2"
        }
    ];

    const handleEmailClick = () => {
        window.location.href = 'mailto:ravikumarsingh9907@gmail.com';
    };

    return (
        <div id="contact" className='relative w-full flex flex-col py-8 mt-10'>
            {/* Section gradient accents */}
            <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-amber-500/12 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className='w-full md:w-2/3 lg:w-2/4 m-auto px-4 md:px-0 text-[#dde1e7] flex flex-col h-full'>
                {/* Header - Fixed */}
                <div className='shrink-0 mb-4 md:mb-6'>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-2 md:mb-3 bg-linear-to-r from-[#dde1e7] via-amber-400 to-[#dde1e7] bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className='text-[#9ca3af] text-sm md:text-base mb-4 md:mb-6'>
                        Let&apos;s connect and discuss opportunities
                    </p>
                </div>

                {/* Scrollable Content */}
                <div className='flex-1 relative overflow-hidden'>
                    <div className='h-full overflow-y-auto scrollbar-hide pb-8'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 sm:w-2/3 sm:max-w-full m-auto'>
                            {/* Left Column - Social Links & Resume */}
                            <div className='space-y-6 md:space-y-8'>
                                {/* Social Media Links */}
                                <div>
                                    <h3 className='text-xl md:text-2xl font-semibold text-amber-400 mb-4 md:mb-6 flex items-center gap-2'>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                        Connect with me
                                    </h3>
                                    <div className='space-y-4'>
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='group flex items-center gap-4 p-4 bg-[#1a1d23] border border-[#2a2d35] hover:border-amber-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10'
                                            >
                                                <div className='w-12 h-12 flex items-center justify-center rounded-lg bg-[#0a0c10] group-hover:bg-amber-500/10 transition-colors duration-300'>
                                                    <i className={`${social.icon} text-3xl`} style={{ color: social.color }}></i>
                                                </div>
                                                <div className='flex-1'>
                                                    <p className='text-[#dde1e7] font-medium group-hover:text-amber-400 transition-colors duration-300'>{social.name}</p>
                                                </div>
                                                <svg className="w-5 h-5 text-[#9ca3af] group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Email Contact */}
                            <div className='flex flex-col justify-center gap-8'>
                                <div className='space-y-6'>
                                    <h3 className='text-2xl font-semibold text-amber-400 mb-6 flex items-center gap-2'>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Email me
                                    </h3>

                                    {/* Email Display */}
                                    <div className='p-6 bg-[#1a1d23] border border-[#2a2d35] rounded-xl'>
                                        {/* <div className='flex items-center gap-3 mb-4'>
                                            <div className='w-12 h-12 flex items-center justify-center rounded-lg bg-amber-500/20'>
                                                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className='text-sm text-[#9ca3af]'>Email Address</p>
                                                <p className='text-[#dde1e7] font-medium'>ravikumarsingh9907@gmail.com</p>
                                            </div>
                                        </div>

                                        <p className='text-[#9ca3af] text-sm mb-6'>
                                            Feel free to reach out for collaborations, opportunities, or just to say hello!
                                        </p> */}

                                        {/* Write to Me Button */}
                                        <button
                                            onClick={handleEmailClick}
                                            className='w-full px-6 py-4 bg-linear-to-r from-amber-500 to-amber-600 text-[#0a0c10] font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 hover:shadow-lg hover:shadow-amber-500/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300 flex items-center justify-center gap-3 group'
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Write to Me
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                {/* Resume Download */}
                                <div>
                                    <h3 className='text-2xl font-semibold text-amber-400 mb-6 flex items-center gap-2'>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Resume
                                    </h3>
                                    <a
                                        href="/resume.pdf"
                                        download
                                        className='group flex items-center gap-4 p-4 bg-linear-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 hover:border-amber-500 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20'
                                    >
                                        <div className='w-12 h-12 flex items-center justify-center rounded-lg bg-amber-500/20 group-hover:bg-amber-500/30 transition-colors duration-300'>
                                            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-[#dde1e7] font-medium group-hover:text-amber-400 transition-colors duration-300'>Download Resume</p>
                                            <p className='text-[#9ca3af] text-sm'>PDF Format</p>
                                        </div>
                                        <svg className="w-5 h-5 text-amber-400 group-hover:translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

