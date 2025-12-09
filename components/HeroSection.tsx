'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

interface HeroSectionProps {
    theme: {
        navyDark: string;
        accent: string;
    };
}

export default function HeroSection({ theme }: HeroSectionProps) {
    const router = useRouter();
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            minHeight: '600px',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
        }}>

            {/* 1. BACKGROUND IMAGE LAYER (Right Side) */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '65%',
                    height: '100%',
                    zIndex: 0
                }}
            >
                <Image
                    src="/hero-team.png"
                    alt="Team working"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                />
            </motion.div>

            {/* 2. THE "TRANSPARENCY SHIFT" GRADIENT OVERLAY */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, ${theme.navyDark} 35%, rgba(8,16,24,0.95) 50%, rgba(8,16,24,0) 100%)`,
                zIndex: 1
            }}></div>

            {/* 3. TECH CIRCUIT PATTERN (Left Side Subtle Detail) */}
            <motion.div
                animate={{ opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50%',
                    height: '100%',
                    zIndex: 1,
                    opacity: 0.1,
                    backgroundImage: `
                  radial-gradient(circle at 20% 50%, #4a90e2 1px, transparent 1px),
                  linear-gradient(to right, #4a90e2 1px, transparent 1px),
                  linear-gradient(to bottom, #4a90e2 1px, transparent 1px)
              `,
                    backgroundSize: '40px 40px, 100px 100px, 100px 100px'
                }}
            ></motion.div>

            {/* 4. CONTENT LAYER */}
            <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ maxWidth: '650px', paddingTop: '4rem' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            fontWeight: '700',
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        Architects of the<br />
                        <span style={{ color: 'white' }}>Digital Realm</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '1.1rem',
                            marginBottom: '2.5rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        <span>Custom Software</span>
                        <span>|</span>
                        <span>Web Development</span>
                        <span>|</span>
                        <span>Mobile Apps</span>
                        <div style={{ width: '100%' }}>IT Strategy & Education</div>
                    </motion.div>

                    <MagneticButton
                        onClick={() => router.push('/services')}
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: 'white',
                            background: theme.accent,
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(198, 124, 78, 0.3)',
                        }}
                    >
                        Explore Us
                    </MagneticButton>
                </div>
            </div>
            {/* 5. WAVE DIVIDER (Bottom Transition) */}
            <div style={{
                position: 'absolute',
                bottom: -1,
                left: 0,
                width: '100%',
                overflow: 'hidden',
                lineHeight: 0,
                zIndex: 20,
                pointerEvents: 'none'
            }}>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    style={{
                        position: 'relative',
                        display: 'block',
                        width: 'calc(100% + 1.3px)',
                        height: '60px',
                    }}
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        style={{ fill: '#f0f4f8' }}
                        transform="rotate(180 600 60)"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
