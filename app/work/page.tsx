'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// --- REUSABLE BACKGROUND COMPONENT (Theme Consistency) ---
const CircuitBackground = ({ opacity = 0.15 }) => (
    <div style={{
        position: 'absolute',
        inset: 0,
        opacity: opacity,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
    }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-hero)" />
            {/* Tech Lines matching other pages */}
            <path d="M0 50 H 200 V 150 H 600" stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.6" />
            <path d="M100 300 H 400 V 100 H 800" stroke="#dca585" strokeWidth="1" fill="none" opacity="0.6" />
            <path d="M900 50 V 250 H 500" stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.6" />
            <circle cx="200" cy="150" r="2.5" fill="#06b6d4" />
            <circle cx="400" cy="100" r="2.5" fill="#dca585" />
        </svg>
        <div style={{
            position: 'absolute',
            top: '-30%',
            left: '-10%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
        }}></div>
    </div>
);

export default function WorkPage() {
    const projects = [
        { name: 'Logistics Dashboard', image: '/project-logistics.png', category: 'Web App' },
        { name: 'E-commerce Site', image: '/project-ecommerce.png', category: 'E-commerce' },
        { name: 'Healthcare App', image: '/project-healthcare.png', category: 'Mobile' },
        { name: 'Salesforce Sales', image: '/project-logistics.png', category: 'CRM' },
        { name: 'Fashion Store', image: '/project-ecommerce.png', category: 'E-commerce' },
        { name: 'EduTech Platform', image: '/project-healthcare.png', category: 'Web App' }
    ];

    return (
        <div className="min-h-screen" style={{ background: '#f8fafc' }}>
            <Navigation />

            {/* --- HERO SECTION --- */}
            <section style={{
                background: '#020617',
                color: 'white',
                padding: '10rem 0 6rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <CircuitBackground />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Our Work</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#94a3b8', fontSize: '1.1rem' }}>
                        Discover our portfolio of successful projects and the impact we've made for our clients.
                    </p>
                </div>
            </section>

            {/* --- SEARCH BAR --- */}
            <section style={{ background: '#f8fafc', padding: '4rem 0 2rem' }}>

            </section>

            {/* --- PORTFOLIO GRID (Borderless & Flat) --- */}
            <section style={{ padding: '0 0 8rem' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '4rem 3rem' // Vertical Gap 4rem, Horizontal Gap 3rem
                    }}>
                        {projects.map((project, idx) => (
                            <div key={idx} style={{
                                cursor: 'pointer',
                                // No background, no shadow, no border radius on the container itself
                            }}>
                                {/* Image Container */}
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    aspectRatio: '4/3',
                                    background: '#cbd5e1', // Placeholder color
                                    borderRadius: '1rem', // Rounded corners on image only
                                    marginBottom: '1.25rem',
                                    overflow: 'hidden'
                                }}>
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="hover-zoom"
                                    />
                                    {/* Subtle Overlay on Hover */}
                                    <div className="hover-overlay" style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0,0,0,0)',
                                        transition: 'background 0.3s ease'
                                    }}></div>
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '700',
                                        color: '#0f172a',
                                        marginBottom: '0.25rem'
                                    }}>
                                        {project.name}
                                    </h3>
                                    <div style={{
                                        color: '#64748b',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}>
                                        {project.category}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FEATURED CASE STUDY (Flat & Clean) --- */}
            <section style={{ background: 'white', padding: '6rem 0', borderTop: '1px solid #f1f5f9' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <h2 style={{ textAlign: 'left', fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '3rem' }}>
                        Featured Case Study
                    </h2>

                    <div style={{
                        display: 'flex',
                        gap: '4rem',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        {/* Image Side */}
                        <div style={{
                            flex: 1,
                            minWidth: '300px',
                            position: 'relative',
                            aspectRatio: '16/9',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            background: '#f1f5f9'
                        }}>
                            <div style={{
                                position: 'absolute',
                                inset: '0',
                                background: '#1e293b',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#475569',
                                fontSize: '1.5rem'
                            }}>
                                [Case Study Image]
                            </div>
                        </div>

                        {/* Text Side */}
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <div style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#334155', marginBottom: '2rem', fontStyle: 'italic' }}>
                                "Nexus Solutions transformed our entire digital infrastructure. Their expertise resulted in a <span style={{ color: '#06b6d4', fontWeight: '700' }}>300% increase</span> in online engagement."
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#cbd5e1' }}></div>
                                <div>
                                    <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '1rem' }}>Jane Doe</div>
                                    <div style={{ color: '#64748b', fontSize: '0.85rem' }}>CEO, Global Corp</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Hover Styles */}
            <style jsx global>{`
                .hover-zoom:hover {
                    transform: scale(1.03);
                }
            `}</style>

            <Footer />
        </div>
    );
}