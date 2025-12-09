'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function MagneticButton({
    children,
    style = {},
    className = '',
    onClick
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * 0.15, y: middleY * 0.15 }); // 0.15 = Magnetic strength
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
            style={style}
        >
            {children}
        </motion.button>
    );
}
