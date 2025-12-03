import { useState } from 'react';

const InteractiveGrid = () => {
    const [hoveredBox, setHoveredBox] = useState<string | null>(null);
    const rows = 80;
    const cols = 120;

    const colors = [
        'rgba(245, 200, 87, 1)',   // Golden - brighter
        'rgba(125, 211, 252, 1)',  // Sky blue - brighter
        'rgba(249, 168, 212, 1)',  // Pink - brighter
        'rgba(134, 239, 172, 1)',  // Green - brighter
        'rgba(252, 165, 165, 1)',  // Red - brighter
        'rgba(216, 180, 254, 1)',  // Purple - brighter
    ];

    const getColorForBox = (i: number, j: number) => {
        const index = (i * cols + j) % colors.length;
        return colors[index];
    };

    return (
        <div className='relative w-full h-full opacity-20'>
            {/* Static grid background */}
            <div
                className='absolute inset-0'
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(100, 116, 139, 0.6) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(100, 116, 139, 0.6) 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 12px',
                }}
            />

            {/* Interactive boxes */}
            <div className='absolute inset-0 grid' style={{
                gridTemplateColumns: `repeat(${cols}, 24px)`,
                gridTemplateRows: `repeat(${rows}, 12px)`,
            }}>
                {Array.from({ length: rows }).map((_, i) =>
                    Array.from({ length: cols }).map((_, j) => {
                        const key = `${i}-${j}`;
                        const isHovered = hoveredBox === key;

                        return (
                            <div
                                key={key}
                                className='transition-all duration-200 pointer-events-auto cursor-pointer'
                                style={{
                                    backgroundColor: isHovered ? getColorForBox(i, j) : 'transparent',
                                }}
                                onMouseEnter={() => setHoveredBox(key)}
                                onMouseLeave={() => setHoveredBox(null)}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default InteractiveGrid;