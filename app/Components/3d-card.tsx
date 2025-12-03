"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/shadcn-io/3d-card";
import Image from "next/image";
import zomatoLogo from '../Assets/Icon.png';

export default function ThreeDCardDemo() {
    return (
        <CardContainer className="inter-var" containerClassName="py-8">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black ddark:border-white/20 border-black/10 w-auto sm:w-[24rem] h-auto rounded-xl p-4 border">
                <CardItem translateZ="100" className="w-full h-48">
                    <Image
                        src={zomatoLogo}
                        alt="ionic-logo"
                        fill
                        className='object-cover'
                    />
                </CardItem>
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Make things float in air
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <div className="flex justify-between items-center mt-16">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Sign up
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}