'use client';

import Image from 'next/image';

// Custom SVG component for the crossing tech arrow
// FIX: Removed <defs> with IDs to prevent conflicts in the loop.
// USES LAYERING: Draws a thick glowing line behind a thin solid line.
const TechCrossingArrow = () => (
    <svg width="100%" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
        
        {/* --- GROUP 1: THE GLOW (Back Layer) --- 
            Thicker strokes, lower opacity, lighter color to simulate light.
        */}
        <g opacity="0.4">
            {/* Main Line Glow */}
            <path d="M0 30 L 285 30" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" />
            {/* Arrowhead Glow */}
            <path d="M275 20 L 285 30 L 275 40" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Crossing Line Glow */}
            <path d="M40 50 L 120 50 L 180 10 L 260 10" stroke="#67e8f9" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </g>

        {/* --- GROUP 2: THE CORE (Front Layer) --- 
            Solid strokes, darker color for visibility/contrast against white.
        */}
        <g>
            {/* 1. MAIN STRAIGHT LINE (Solid Blue) */}
            <path d="M0 30 L 285 30" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
            
            {/* 2. ARROWHEAD (Solid Blue) */}
            <path d="M275 20 L 285 30 L 275 40" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

            {/* 3. CROSSING LINE (Lighter Cyan, Thinner) */}
            <path d="M40 50 L 120 50 L 180 10 L 260 10" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            
            {/* 4. DOTS/DECORATION */}
            <circle cx="40" cy="50" r="3" fill="#22d3ee" />
            <circle cx="292" cy="30" r="5" fill="#0ea5e9" />
        </g>
    </svg>
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

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    position: 'relative'
                }}>
                    {steps.map((step, idx) => (
                        <div key={idx} style={{
                            flex: '1',
                            maxWidth: '300px',
                            position: 'relative',
                            zIndex: 2,
                            padding: '0 15px'
                        }}>
                            {/* Icon Circle */}
                            <div style={{
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
                            }}>
                                <div style={{ position: 'relative', width: '40px', height: '40px' }}>
                                    <Image 
                                        src={step.iconSrc} 
                                        alt={step.title} 
                                        fill 
                                        style={{ 
                                            objectFit: 'contain', 
                                            // Makes the icon white with a cyan shadow
                                            filter: 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(103, 232, 249, 0.8))' 
                                        }} 
                                    />
                                </div>
                            </div>

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

                            {/* Arrow Container */}
                            {idx < steps.length - 1 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '45px', 
                                    left: 'calc(50% + 55px)', 
                                    width: 'calc(100% - 110px)', 
                                    height: '60px',
                                    zIndex: 1,
                                    minWidth: '150px' 
                                }}>
                                    <TechCrossingArrow />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}