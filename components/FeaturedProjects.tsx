'use client';

import CircularGallery from './CircularGallery';

export default function FeaturedProjects() {
    const projects = [
        {
            name: "Neocentric Interiors",
            image: "/neo.png",
            desc: "Real-time fleet tracking and analytics."
        },
        {
            name: "VOP Mobile App",
            image: "/banvop.png",
            desc: "Modern storefront with seamless checkout."
        },
        {
            name: "Kp3 App",
            image: "/kp3.png",
            desc: "Patient monitoring and telemedicine portal."
        },
        {
            name: "POS BMS",
            image: "/posy.png", // Reusing for demo balance
            desc: "Secure banking and transaction monitoring."
        }
    ];

    const galleryItems = projects.map(project => ({
        image: project.image,
        text: project.name
    }));

    return (
        <section style={{
            background: '#081018', // Deep Navy background
            padding: '6rem 0',
            position: 'relative',
            overflow: 'hidden',
            height: '800px' // Initial height for the gallery
        }}>
            {/* WAVE DIVIDER (Top Transition) */}
            <div style={{
                position: 'absolute',
                top: -1,
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
                        style={{ fill: '#f8fafc' }}
                    ></path>
                </svg>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '100%', height: '100%' }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '2rem',
                    color: 'white',
                    fontSize: '2.5rem',
                    fontWeight: '700'
                }}>Featured Projects</h2>

                <div style={{ height: '600px', width: '100%' }}>
                    <CircularGallery
                        items={galleryItems}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        font="bold 30px Inter"
                    />
                </div>
            </div>
            {/* Background Glow Effect behind the center card */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(220, 165, 133, 0.15) 0%, rgba(8, 16, 24, 0) 70%)',
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>
        </section>
    );
}