'use client';

import Image from "next/image";

interface HeroSectionProps {
    theme: {
        navyDark: string;
        accent: string;
    };
}

export default function HeroSection({ theme }: HeroSectionProps) {
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
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '65%',
                height: '100%',
                zIndex: 0
            }}>
                <Image
                    src="/hero-team.png"
                    alt="Team working"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                />
            </div>

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
            <div style={{
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
            }}></div>

            {/* 4. CONTENT LAYER */}
            <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ maxWidth: '650px', paddingTop: '4rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: '700',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                    }}>
                        Architects of the<br />
                        <span style={{ color: 'white' }}>Digital Realm</span>
                    </h1>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '1.1rem',
                        marginBottom: '2.5rem',
                        flexWrap: 'wrap'
                    }}>
                        <span>Custom Software</span>
                        <span>|</span>
                        <span>Web Development</span>
                        <span>|</span>
                        <span>Mobile Apps</span>
                        <div style={{ width: '100%' }}>IT Strategy & Education</div>
                    </div>

                    <button style={{
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'white',
                        background: theme.accent,
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(198, 124, 78, 0.3)',
                        transition: 'transform 0.2s'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Start Your Project
                    </button>
                </div>
            </div>
        </section>
    );
}
