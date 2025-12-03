'use client';
import { useState, useEffect } from 'react';

interface TypingAnimationProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    cursorClassName?: string;
    showCursor?: boolean;
}

const TypingAnimation = ({ 
    text, 
    speed = 50, 
    delay = 0,
    className = '',
    cursorClassName = '',
    showCursor = true
}: TypingAnimationProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Initial delay before starting
        const delayTimeout = setTimeout(() => {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(prev => prev + text[currentIndex]);
                    setCurrentIndex(prev => prev + 1);
                }, speed);

                return () => clearTimeout(timeout);
            } else {
                setIsComplete(true);
            }
        }, delay);

        return () => clearTimeout(delayTimeout);
    }, [currentIndex, text, speed, delay]);

    return (
        <span className={`relative inline-block ${className}`}>
            {/* Hidden text to reserve space */}
            <span className="invisible" aria-hidden="true">
                {text}
            </span>
            {/* Visible typing text positioned absolutely */}
            <span className="absolute top-0 left-0 whitespace-pre-wrap">
                {displayedText}
                {showCursor && !isComplete && (
                    <span
                        className={`inline-block w-0.5 h-6 bg-current ml-1 ${cursorClassName}`}
                        style={{ animation: 'blink 1s step-end infinite' }}
                    />
                )}
            </span>
            <style jsx>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
        </span>
    );
};

export default TypingAnimation;

