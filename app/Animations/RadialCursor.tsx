import React, { useEffect, useRef } from 'react';

interface RadialCursorProps {
    position: { x: number, y: number };
    isVisible: boolean;
}

const RadialCursor = ({ position, isVisible }: RadialCursorProps) => {
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
        <div className='fixed pointer-events-none -z-100 overflow-hidden' ref={draggableElement}>
            {isVisible && (
                <div
                    className='w-90 h-90 backdrop-blur-3xl rounded-full flex items-center justify-center text-white text-xs'
                    style={{
                        background: 'radial-gradient(circle, rgba(245, 200, 87, 0.2) 0%, transparent 70%)'
                    }}
                >
                </div>
            )}
        </div>
    )
}

export default RadialCursor