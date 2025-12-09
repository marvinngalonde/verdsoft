'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Custom SVG component for the crossing tech arrow
const TechCrossingArrow = () => (
    <motion.svg
        width="100%"
        height="60"
        viewBox="0 0 300 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
    >

        {/* --- GROUP 1: THE GLOW (Back Layer) --- */}
        <motion.g
            opacity="0.4"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <path d="M0 30 L 285 30" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" />
            <path d="M275 20 L 285 30 L 275 40" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 50 L 120 50 L 180 10 L 260 10" stroke="#67e8f9" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        {/* --- GROUP 2: THE CORE (Front Layer) --- */}
        <g>
            <path d="M0 30 L 285 30" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
            <path d="M275 20 L 285 30 L 275 40" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 50 L 120 50 L 180 10 L 260 10" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Animated Dots flowing along the path */}
            <motion.circle
                r="3"
                fill="#white"
                animate={{
                    offsetDistance: ["0%", "100%"]
                }}
                style={{
                    offsetPath: "path('M40 50 L 120 50 L 180 10 L 260 10')",
                    opacity: 0.8
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            <circle cx="40" cy="50" r="3" fill="#22d3ee" />
            <circle cx="292" cy="30" r="5" fill="#0ea5e9" />
        </g>
    </motion.svg>
);


export default function OurApproach() {
    const steps = [
        {
            iconSrc: '/icons/custom-software.png',
            title: '1. Discover & Blueprint',
            desc: 'Tailored solution solutions for complex environments.'
        },
        {
            iconSrc: '/icons/consultation.png',
            title: '2. Forge & Refine',
            desc: 'Scalable secure platforms and hosting anti-DDoS environment.'
        },
        {
            iconSrc: '/icons/web-hosting.png',
            title: '3. Deploy & Scale',
            desc: 'Deploy inconsistent architectures and learning solutions.'
        }
    ];

    return (
        <section style={{
            padding: '7rem 0',
            background: '#f8fafc', // Light grey background
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{
                maxWidth: '1100px',
                margin: '0 auto',
                textAlign: 'center',
                padding: '0 20px'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: '#0f172a',
                        marginBottom: '1rem'
                    }}>
                        Our Approach: The Digital Foundry
                    </h2>
                    <p style={{
                        color: '#64748b',
                        fontSize: '1.125rem',
                        maxWidth: '600px',
                        margin: '0 auto 6rem'
                    }}>
                        Visualized the line digited by the approarfory steps.
                    </p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    position: 'relative',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            style={{
                                flex: '1',
                                minWidth: '280px',
                                position: 'relative',
                                zIndex: 2,
                                padding: '0 15px'
                            }}
                        >
                            {/* Icon Circle */}
                            <motion.div
                                style={{
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(145deg, #1e293b, #0f172a)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 2rem',
                                    border: '3px solid #06b6d4',
                                    boxShadow: '0 0 25px rgba(6, 182, 212, 0.6), inset 0 0 10px rgba(6, 182, 212, 0.3)',
                                    position: 'relative'
                                }}
                                whileHover={{
                                    boxShadow: '0 0 40px rgba(6, 182, 212, 0.8), inset 0 0 20px rgba(6, 182, 212, 0.5)',
                                    scale: 1.1
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div style={{ position: 'relative', width: '40px', height: '40px' }}>
                                    <Image
                                        src={step.iconSrc}
                                        alt={step.title}
                                        fill
                                        style={{
                                            objectFit: 'contain',
                                            filter: 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(103, 232, 249, 0.8))'
                                        }}
                                    />
                                </div>
                            </motion.div>

                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: '#0f172a',
                                marginBottom: '1rem'
                            }}>
                                {step.title}
                            </h3>

                            <p style={{
                                color: '#64748b',
                                fontSize: '1rem',
                                lineHeight: '1.6'
                            }}>
                                {step.desc}
                            </p>

                            {/* Arrow Container - Hidden on mobile via CSS usually, or just careful width management */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block" style={{
                                    position: 'absolute',
                                    top: '45px',
                                    left: 'calc(50% + 55px)',
                                    width: 'calc(100% - 110px)',
                                    height: '60px',
                                    zIndex: 1,
                                    pointerEvents: 'none'
                                }}>
                                    <TechCrossingArrow />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}