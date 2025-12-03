'use client'
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            setTimeout(() => setSubmitStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div className='relative w-full flex flex-col py-8 mt-10'>
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
                        <div className='sm:opacity-0 sm:absolute'>
                            <h3 className='text-xl md:text-2xl font-semibold text-amber-400 mb-4 md:mb-6 flex items-center gap-2'>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                Connect With Me
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
                                            <p className='text-[#9ca3af] text-sm'>@{social.name.toLowerCase()}</p>
                                        </div>
                                        <svg className="w-5 h-5 text-[#9ca3af] group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                ))}
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

                    {/* Right Column - Contact Form */}
                    <div>
                        <h3 className='text-2xl font-semibold text-amber-400 mb-6 flex items-center gap-2'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send Message
                        </h3>

                        <form onSubmit={handleSubmit} className='space-y-6'>
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-[#9ca3af] mb-2'>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 bg-[#1a1d23] border border-[#2a2d35] rounded-lg text-[#dde1e7] placeholder-[#9ca3af]/50 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300'
                                    placeholder='Your name'
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-[#9ca3af] mb-2'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 bg-[#1a1d23] border border-[#2a2d35] rounded-lg text-[#dde1e7] placeholder-[#9ca3af]/50 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300'
                                    placeholder='your.email@example.com'
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium text-[#9ca3af] mb-2'>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className='w-full px-4 py-3 bg-[#1a1d23] border border-[#2a2d35] rounded-lg text-[#dde1e7] placeholder-[#9ca3af]/50 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none'
                                    placeholder='Your message...'
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className='w-full px-6 py-3 bg-linear-to-r from-amber-500 to-amber-600 text-[#0a0c10] font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </>
                                )}
                            </button>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className='p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300'>
                                    <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className='text-green-400 text-sm'>Message sent successfully! I&apos;ll get back to you soon.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

