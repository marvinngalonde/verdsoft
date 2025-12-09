'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

// --- SVG ICON COMPONENT ---
interface ServiceIconProps {
    type: 'gear' | 'cloud' | 'mobile' | 'chat' | 'cart' | 'book' | 'server';
    color: string;
}

const ServiceIcon = ({ type, color }: ServiceIconProps) => {
    const icons: Record<string, JSX.Element> = {
        gear: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
        cloud: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
        mobile: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
        chat: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
        cart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />,
        book: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
        server: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    };

    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color}>
            {icons[type] || icons.gear}
        </svg>
    );
};

// --- REUSABLE BACKGROUND COMPONENT ---
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

export default function ServicesPage() {
    const router = useRouter();

    const featuredService = {
        title: 'Custom Software',
        desc: 'Tailored software for complex business needs. We design architectures that are scalable, robust, and specifically engineered to drive your company\'s growth.',
        iconType: 'gear',
        glowColor: '#3b82f6'
    };

    const gridServices = [
        { iconType: 'cloud', title: 'Web & Hosting', desc: 'Secure, scalable platforms and comprehensive hosting solutions. We manage the infrastructure so you can focus on business growth.', glowColor: '#10b981' },
        { iconType: 'mobile', title: 'Mobile Apps', desc: 'Intuitive, high-performance apps for iOS and Android. We craft engaging user experiences that foster customer loyalty and retention.', glowColor: '#8b5cf6' },
        { iconType: 'mobile', title: 'App Development', desc: 'End-to-end mobile development from initial concept to global deployment. Our team handles the entire lifecycle of your mobile journey.', glowColor: '#6366f1' },
        { iconType: 'chat', title: 'IT Consultation', desc: 'Strategic IT guidance to help navigate digital transformation. Get expert advice on technology stacks, architecture, and best practices.', glowColor: '#f59e0b' },
        { iconType: 'cart', title: 'Software Sales', desc: 'Curated software solutions for your business needs. We provide licensed, enterprise-grade software to streamline your operations.', glowColor: '#06b6d4' },
        { iconType: 'cloud', title: 'Web Development', desc: 'Performance-optimized web solutions with 24/7 monitoring. We build sites that are fast, responsive, and SEO-friendly.', glowColor: '#3b82f6' },
    ];

    const bottomServices = [
        {
            iconType: 'book', title: 'Training & Workshops',
            desc: 'Empowering your team with knowledge through hands-on workshops covering the latest technologies, methodologies, and best practices.',
            glowColor: '#ec4899',
            variant: 'light'
        },
        {
            iconType: 'server', title: 'Mobile Hosting',
            desc: 'Specialized hosting solutions optimized for mobile backends. High-performance infrastructure with global CDN support for low latency.',
            glowColor: '#64748b',
            variant: 'dark'
        }
    ];

    return (
        <div className="min-h-screen" style={{ background: '#ecf2f7' }}>
            <Navigation />

            {/* --- HEADER SECTION --- */}
            <section className="hero-section" style={{
                background: '#020617',
                color: 'white',
                padding: '10rem 0 6rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <CircuitBackground />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Our Services</h1>
                    <p style={{ maxWidth: '500px', margin: '0 auto', color: '#94a3b8', fontSize: '1.1rem' }}>
                        Transforming ideas into digital reality with our comprehensive suite of technology services.
                    </p>
                </div>
            </section>

            {/* --- MAIN CONTENT CONTAINER --- 
               Flex Direction: Column + Align Items: Center 
               This is the secret sauce to ensure everything is perfectly aligned down the middle.
            */}
            <div className="container" style={{
                padding: '6rem 1rem',
                maxWidth: '1100px',
                margin: '0 auto',
                display: 'flex',          // 1. Activate Flexbox
                flexDirection: 'column',  // 2. Stack vertically
                alignItems: 'center'      // 3. FORCE CENTER ALIGNMENT
            }}>

                {/* --- 1. FEATURED SECTION --- */}
                <div className="featured-section" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4rem',
                    marginBottom: '8rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center', // Ensures content within this block centers if it wraps
                    width: '100%'             // Take full width to respect parent alignment
                }}>
                    {/* Hexagon Left */}
                    <div style={{
                        flex: '0 0 auto',
                        position: 'relative',
                        width: '180px',
                        height: '180px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        boxShadow: '0 20px 50px rgba(59, 130, 246, 0.3)'
                    }}>
                        <div style={{ transform: 'scale(2.5)' }}>
                            <ServiceIcon type={featuredService.iconType} color="#60a5fa" />
                        </div>
                    </div>

                    {/* Text Right */}
                    <div style={{ flex: 1, minWidth: '300px', textAlign: 'left', maxWidth: '500px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.5rem' }}>
                            {featuredService.title}
                        </h2>
                        <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            {featuredService.desc}
                        </p>
                        <button className="btn-service">Learn More</button>
                    </div>
                </div>


                {/* --- 2. STANDARD GRID --- */}
                <div className="services-grid" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center', // Forces the group of cards to center
                    gap: '4rem',
                    marginBottom: '8rem',
                    width: '100%' // Ensure grid has full width to calculate center
                }}>
                    {gridServices.map((item, idx) => (
                        <div key={idx} className="service-card" style={{
                            flex: '0 1 380px', // Flexible but prefers 380px width
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            transform: 'translateX(40px)'
                        }}>
                            <div style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                background: '#e2e8f0',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid white',
                                boxShadow: `0 0 20px ${item.glowColor}40`
                            }}>
                                <ServiceIcon type={item.iconType} color={item.glowColor} />
                            </div>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
                                {item.title}
                            </h3>

                            <p style={{
                                color: '#64748b',
                                fontSize: '1rem',
                                lineHeight: '1.7',
                                marginBottom: '1.5rem',
                                maxWidth: '280px'
                            }}>
                                {item.desc}
                            </p>
                            <button className="btn-service" onClick={() => router.push('/contact')}>Learn More</button>
                        </div>
                    ))}
                </div>


                {/* --- 3. BOTTOM SPECIAL CARDS --- */}
                <div className="bottom-grid" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center', // Centers these two cards
                    gap: '2rem',
                    width: '100%'
                }}>
                    {bottomServices.map((item, idx) => {
                        const isDark = item.variant === 'dark';
                        return (
                            <div key={idx} className="bottom-card" style={{
                                flex: '0 1 450px', // Wider cards
                                borderRadius: '1.5rem',
                                padding: '3rem',
                                position: 'relative',
                                overflow: 'hidden',
                                background: isDark
                                    ? '#1e293b'
                                    : 'linear-gradient(145deg, #ffffff, #eff6ff)',
                                border: isDark ? 'none' : '1px solid white',
                                boxShadow: isDark
                                    ? '0 20px 40px rgba(0,0,0,0.2)'
                                    : '0 20px 40px rgba(59, 130, 246, 0.1)',
                                textAlign: 'left'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: isDark ? 'rgba(255,255,255,0.1)' : 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    border: isDark ? 'none' : `1px solid ${item.glowColor}30`,
                                    boxShadow: `0 0 15px ${item.glowColor}30`
                                }}>
                                    <ServiceIcon type={item.iconType} color={isDark ? '#cbd5e1' : item.glowColor} />
                                </div>

                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: isDark ? 'white' : '#0f172a',
                                    marginBottom: '1rem'
                                }}>
                                    {item.title}
                                </h3>

                                <p style={{
                                    color: isDark ? '#94a3b8' : '#64748b',
                                    marginBottom: '2rem',
                                    lineHeight: '1.7',
                                    fontSize: '1rem',
                                    maxWidth: '300px'
                                }}>
                                    {item.desc}
                                </p>

                                <button className="btn-service" onClick={() => router.push('/contact')}>
                                    Learn More
                                </button>
                            </div>
                        );
                    })}
                </div>

            </div>

            <style jsx global>{`
                .btn-service {
                    padding: 0.75rem 2rem;
                    background: #C67C4E;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .btn-service:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(198, 124, 78, 0.3);
                }

                @media (max-width: 768px) {
                    .hero-section {
                        padding: 6rem 0 3rem !important;
                    }
                    .featured-section {
                        flex-direction: column !important;
                        gap: 2rem !important;
                        text-align: center !important;
                        margin-bottom: 4rem !important;
                    }
                    .featured-section > div {
                         text-align: center !important;
                         align-items: center !important;
                         min-width: unset !important;
                    }
                    .services-grid {
                        gap: 3rem !important;
                        margin-bottom: 4rem !important;
                    }
                    .service-card {
                        flex: 0 0 100% !important;
                        transform: none !important;
                        align-items: center !important;
                        text-align: center !important;
                        padding: 0 1rem !important;
                    }
                    .bottom-grid {
                        gap: 1.5rem !important;
                    }
                    .bottom-card {
                        flex: 0 0 100% !important;
                        padding: 2rem !important;
                    }
                }
            `}</style>

            <Footer />
        </div>
    );
}