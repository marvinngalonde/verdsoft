'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FeaturedProjects() {
    const [currentIndex, setCurrentIndex] = useState(1); // Start in the middle

    const projects = [
        { 
            name: "Logistics Dashboard", 
            image: "/project-logistics.png", 
            desc: "Real-time fleet tracking and analytics.",
            id: 0
        },
        { 
            name: "E-commerce Site", 
            image: "/project-ecommerce.png", 
            desc: "Modern storefront with seamless checkout.",
            id: 1 
        },
        { 
            name: "Healthcare App", 
            image: "/project-healthcare.png", 
            desc: "Patient monitoring and telemedicine portal.",
            id: 2 
        }
    ];

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Calculate slots: Left, Center, Right
    const getVisibleProjects = () => {
        const total = projects.length;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;

        return [
            { ...projects[prevIndex], position: 'left' },
            { ...projects[projects[currentIndex] ? currentIndex : 0], position: 'center' },
            { ...projects[nextIndex], position: 'right' }
        ];
    };

    const visibleProjects = getVisibleProjects();

    return (
        <section style={{ 
            background: '#081018', // Deep Navy background
            padding: '6rem 0',
            position: 'relative', 
            overflow: 'hidden' 
        }}>
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
            
            <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{ 
                    textAlign: 'center', 
                    marginBottom: '4rem', 
                    color: 'white',
                    fontSize: '2.5rem',
                    fontWeight: '700'
                }}>Featured Projects</h2>

                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    
                    {/* Left Navigation Button */}
                    <button
                        onClick={prevProject}
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)', // Glass button
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            zIndex: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            left: '0',
                            top: '38%', 
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                    >
                        ‹
                    </button>

                    {/* CAROUSEL */}
                    <div style={{ 
                        display: 'flex', 
                        gap: '2rem', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        width: '100%',
                        padding: '0 60px'
                    }}>
                        {visibleProjects.map((project) => {
                            const isCenter = project.position === 'center';
                            
                            return (
                                <div
                                    // Use ID as key to help React track the element, but typically for 
                                    // smooth non-library CSS transitions in this specific layout, 
                                    // re-using the slot index can sometimes look smoother. 
                                    // However, here we animate the properties.
                                    key={`${project.id}`} 
                                    style={{
                                        // "Flex" transition handles the width expansion/contraction
                                        flex: isCenter ? '0 0 45%' : '0 0 25%',
                                        
                                        // "Transform" handles the scaling
                                        transform: isCenter ? 'scale(1)' : 'scale(0.9)',
                                        
                                        // "Opacity" handles the fade
                                        opacity: isCenter ? 1 : 0.5,
                                        
                                        position: 'relative',
                                        zIndex: isCenter ? 10 : 1,
                                        
                                        // Smooth cubic-bezier for a more "animated" feel than standard ease
                                        transition: 'all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)'
                                    }}
                                >
                                    {/* --- GLASSMORPHIC CARD --- */}
                                    <div style={{
                                        // GLASSMORPHISM BACKGROUNDS:
                                        // Center: Semi-transparent Orange Gradient + Blur
                                        // Sides: Semi-transparent Dark Grey + Blur
                                        background: isCenter 
                                            ? 'linear-gradient(135deg, rgba(224, 155, 107, 0.85) 0%, rgba(220, 165, 133, 0.75) 100%)' 
                                            : 'rgba(30, 41, 59, 0.3)',
                                        
                                        backdropFilter: 'blur(12px)', // The blur magic
                                        WebkitBackdropFilter: 'blur(12px)',
                                        
                                        borderRadius: '1.5rem',
                                        padding: '1rem',
                                        
                                        // Center gets a nice soft shadow, sides are flat
                                        boxShadow: isCenter ? '0 20px 60px rgba(220, 165, 133, 0.15)' : 'none',
                                        marginBottom: '1.5rem',
                                        height: '340px', 
                                        
                                        display: 'flex',
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        
                                        // Glass Borders
                                        border: isCenter 
                                            ? '1px solid rgba(255, 255, 255, 0.4)' 
                                            : '1px solid rgba(255, 255, 255, 0.08)',
                                            
                                        // Transition the background/border smoothly too
                                        transition: 'all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)'
                                    }}>
                                        {/* Image Wrapper */}
                                        <div style={{ 
                                            position: 'relative', 
                                            width: '90%', 
                                            height: '85%', 
                                            borderRadius: '0.75rem',
                                            overflow: 'hidden',
                                            // Make the image pop off the glass slightly
                                            boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
                                            // Smooth image resizing
                                            transition: 'all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)'
                                        }}>
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill
                                                style={{ objectFit: 'contain' }} 
                                            />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div style={{ 
                                        textAlign: 'left', 
                                        paddingLeft: '0.5rem',
                                        // Fade out text for inactive cards
                                        opacity: isCenter ? 1 : 0,
                                        transform: isCenter ? 'translateY(0)' : 'translateY(10px)',
                                        transition: 'all 0.6s ease 0.1s' // Slight delay for text
                                    }}>
                                        <h3 style={{ 
                                            color: 'white', 
                                            fontSize: '1.25rem', 
                                            fontWeight: '700', 
                                            marginBottom: '0.5rem',
                                            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                        }}>
                                            {project.name}
                                        </h3>
                                        <p style={{ 
                                            color: '#cbd5e1', 
                                            fontSize: '0.95rem' 
                                        }}>
                                            {project.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        onClick={nextProject}
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            zIndex: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            right: '0',
                            top: '38%',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
}