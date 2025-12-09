'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

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
        { name: 'Neocentric Interiors', image: '/neo.png', category: 'Web App' },
        { name: 'VOP Mobile App', image: '/banvop.png', category: 'Mobile' },
        { name: 'Kp3 App', image: '/kp3.png', category: 'Mobile' },
        { name: 'POS BMS', image: '/posy.png', category: 'Business Management' },
        { name: 'Neocentric Interiors', image: '/neo.png', category: 'Web Design' },
        { name: 'VOP Mobile App', image: '/banvop.png', category: 'Mobile App' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } // Custom easing for "premium" feel
        }
    };

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
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="container"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Our Work</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#94a3b8', fontSize: '1.1rem' }}>
                        Discover our portfolio of successful projects and the impact we've made for our clients.
                    </p>
                </motion.div>
            </section>

            {/* --- SEARCH BAR OR FILTER --- */}
            <section style={{ background: '#f8fafc', padding: '4rem 0 2rem' }}>
                {/* Future: Add Category Filters Here */}
            </section>

            {/* --- PORTFOLIO GRID (Borderless & Flat) --- */}
            <section style={{ padding: '0 0 8rem' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '4rem 3rem' // Vertical Gap 4rem, Horizontal Gap 3rem
                        }}
                    >
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                style={{
                                    cursor: 'pointer',
                                }}
                            >
                                {/* Image Container */}
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    aspectRatio: '4/3',
                                    background: '#cbd5e1', // Placeholder color
                                    borderRadius: '1rem', // Rounded corners on image only
                                    marginBottom: '1.25rem',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}>
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                        className="hover-zoom"
                                    />
                                    {/* Subtle Overlay on Hover */}
                                    <div className="hover-overlay" style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
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
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- FEATURED CASE STUDY (Flat & Clean) --- */}
            <section style={{ background: 'white', padding: '6rem 0', borderTop: '1px solid #f1f5f9' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <h2 style={{ textAlign: 'left', fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '3rem' }}>
                        Featured Case Study
                    </h2>

                    <div className="case-study-flex" style={{
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
                            <Image
                                src="/posy.png"
                                alt="POS BMS System"
                                fill
                                style={{
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        {/* Text Side */}
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
                                POS BMS - Business Management System
                            </h3>
                            <div style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#334155', marginBottom: '2rem', fontStyle: 'italic' }}>
                                "VERDSOFT developed a comprehensive Point of Sale and Business Management System that streamlined our operations. The system resulted in a <span style={{ color: '#C67C4E', fontWeight: '700' }}>40% increase</span> in operational efficiency and significantly improved our inventory management."
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#C67C4E' }}></div>
                                <div>
                                    <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '1rem' }}>Business Owner</div>
                                    <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Retail Management</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Hover Styles handled via Framer Motion mainly now, but we keep zoom */}
            <style jsx global>{`
                .hover-zoom {
                    transition: transform 0.6s ease !important;
                }
                div:hover .hover-zoom {
                    transform: scale(1.05);
                }
                div:hover .hover-overlay {
                    opacity: 1 !important;
                }
                @media (max-width: 768px) {
                    .container {
                        padding-left: 1.5rem !important;
                        padding-right: 1.5rem !important;
                    }
                    .case-study-flex {
                        flex-direction: column !important;
                        gap: 2rem !important;
                    }
                }
            `}</style>

            <Footer />
        </div>
    );
}