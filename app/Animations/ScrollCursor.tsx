import React, { useEffect, useRef } from 'react';

interface ScrollCursorProps {
    position: { x: number, y: number };
    isVisible: boolean;
}

const ScrollCursor = ({ position, isVisible }: ScrollCursorProps) => {
    const { x, y } = position;
    const draggableElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (draggableElement.current) {
            const positionX = x - (draggableElement.current.offsetWidth / 2);
            const positionY = y - (draggableElement.current.offsetHeight / 2);
            draggableElement.current.style.left = `${positionX}px`;
            draggableElement.current.style.top = `${positionY}px`;
        }
    }, [x, y]);

    return (
        <div className='fixed pointer-events-none overflow-hidden z-100' ref={draggableElement}>
            {isVisible && (
                <div
                    className='w-30 h-30 border opacity-50 backdrop-blur-xl border-white rounded-full flex items-center justify-center text-white text-xs'
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                </div>
            )}
        </div>
    )
}

export default ScrollCursor