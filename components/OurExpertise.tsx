'use client';

import Image from 'next/image';

export default function OurExpertise() {
    const services = [
        {
            title: 'Custom Software',
            desc: 'Tailored solutions for complex challenges.',
            icon: '/icons/custom-software.png',
            bgImage: '/images/cards/custom-software-bg.png'
        },
        {
            title: 'Web & Hosting',
            desc: 'Scalable, secure platforms and hosting.',
            icon: '/icons/web-hosting.png',
            bgImage: '/images/cards/web-hosting-bg.png'
        },
        {
            title: 'Mobile Applications',
            desc: 'Intuitive apps for iOS and Android.',
            icon: '/icons/mobile-apps.png',
            bgImage: '/images/cards/mobile-apps-bg.png'
        },
        {
            title: 'IT Consultation',
            desc: 'Strategic guidance for digital transformation.',
            icon: '/icons/consultation.png',
            bgImage: '/images/cards/consultation-bg.png'
        },
        {
            title: 'Software Sales',
            desc: 'Curated software solutions for your business.',
            icon: '/icons/software-sales.png',
            bgImage: '/images/cards/software-sales-bg.png'
        },
        {
            title: 'Training & Workshops',
            desc: 'Empowering your team with knowledge.',
            icon: '/icons/training.png',
            bgImage: '/images/cards/training-bg.png'
        }
    ];

    return (
        <section style={{
            backgroundColor: '#f0f4f8', // Light Section Background
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            padding: '5rem 0'
        }}>
            <div className="container">
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '3.5rem',
                    color: '#0f172a',
                    fontSize: '2.5rem',
                    fontWeight: '700'
                }}>
                    Our Expertise
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, idx) => (
                        <div key={idx} style={{
                            backgroundColor: '#0f172a', // The "Component Color" (Dark Navy)
                            borderRadius: '16px',
                            padding: '2.5rem',
                            position: 'relative',
                            overflow: 'hidden',
                            // Blue Glow Effect
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 0 20px rgba(56, 189, 248, 0.2)',
                            border: '1px solid rgba(56, 189, 248, 0.1)', // Subtle tech border
                            transition: 'all 0.3s ease',
                            zIndex: 1
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 30px rgba(56, 189, 248, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 0 20px rgba(56, 189, 248, 0.2)';
                            }}
                        >
                            {/* --- BACKGROUND IMAGE LAYER --- */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 0,
                                // Fades the edges of the image into the card background color
                                maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                            }}>
                                <Image
                                    src={service.bgImage}
                                    alt=""
                                    fill
                                    style={{ 
                                        objectFit: 'cover',
                                        opacity: 0.6 // Adjust image visibility
                                    }}
                                />

                                {/* --- TRANSPARENCY SHIFT OVERLAY --- 
                                    Right side is Color Filled (#0f172a). 
                                    Left side is Not Filled (Transparent).
                                */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to right, transparent 0%, #0f172a 70%, #0f172a 100%)'
                                }}></div>
                            </div>

                            {/* --- CONTENT LAYER --- */}
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div style={{ marginBottom: '1.5rem', position: 'relative', width: '48px', height: '48px' }}>
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>

                                <h3 style={{
                                    color: 'white',
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '0.75rem',
                                    // Text shadow ensures readability against the image on the left
                                    textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                                }}>
                                    {service.title}
                                </h3>

                                <p style={{
                                    color: '#cbd5e1', // Light grey text
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    maxWidth: '90%',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                                }}>
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}