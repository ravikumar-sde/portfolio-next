'use client';
import { useState } from 'react';
import Image from 'next/image';
import profilePic from '../Assets/profile-transformed.png';
import { AppleHelloEnglishEffect } from "@/components/ui/shadcn-io/apple-hello-effect";
import TypingAnimation from '../Animations/TypingAnimation';

export default function Header() {
    const [startTyping, setStartTyping] = useState(false);

    return (
        <div className="w-full md:w-3/4 lg:w-2/4 m-auto px-4 md:px-0 min-h-[70vh] md:h-[90vh] flex items-center gap-4 md:gap-6 justify-center mx-auto flex-col lg:flex-row pb-8">
            <div className="border-4 md:border-[0.3125rem] border-solid p-1 md:p-1.25 rounded-full border-[lightpink] bg-[#dde1e7] mr-0 lg:mr-2 z-10">
                <Image src={profilePic} alt="profile-pic" width={180} height={180} className="rounded-full bg-amber-500 md:w-[220px] md:h-[220px]" />
            </div>
            <div className="z-10 flex flex-col gap-3 md:gap-4 items-center lg:items-start text-center lg:text-left">
                <AppleHelloEnglishEffect
                    className='text-amber-500'
                    onAnimationComplete={() => setStartTyping(true)}
                />
                <h2 className="font-bold tracking-[0.03rem] leading-7 md:leading-10 text-xl md:text-3xl text-[#a8adb2] relative max-w-full">
                    <span className="invisible">I&apos;m Ravi Kumar, I&apos;m a Software Engineer and GenAI Entusiastic.</span>
                    {startTyping && (
                        <span className="absolute top-0 left-0 w-full">
                            <TypingAnimation
                                text="I'm Ravi Kumar, I'm a Software Engineer and GenAI Entusiastic."
                                speed={40}
                                delay={0}
                                className="text-[#dde1e7]"
                                showCursor={true}
                            />
                        </span>
                    )}
                </h2>
            </div>
        </div>
    );
}