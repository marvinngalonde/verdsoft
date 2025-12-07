'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FeaturedProjects() {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        { name: "Logistics Dashboard", image: "/project-logistics.png", desc: "A powerful tool" },
        { name: "E-commerce Site", image: "/project-ecommerce.png", desc: "A seamless site" },
        { name: "Healthcare App", image: "/project-healthcare.png", desc: "Transforming care" }
    ];

    // Create stars for background
    useEffect(() => {
        const projectStars = document.getElementById('project-stars');

        if (projectStars && projectStars.children.length === 0) {
            for (let i = 0; i < 80; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                projectStars.appendChild(star);
            }
        }
    }, []);

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section className="section-padding" style={{ background: 'var(--navy-dark)', position: 'relative', overflow: 'hidden' }}>
            <div id="project-stars" className="stars"></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', color: 'white' }}>Featured Projects</h2>

                <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
                    <button
                        onClick={prevProject}
                        style={{
                            position: 'absolute',
                            left: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.1)',
                            border: '2px solid white',
                            color: 'white',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            zIndex: 10,
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--orange-accent)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    >
                        ‹
                    </button>

                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                style={{
                                    flex: idx === currentProject ? '0 0 60%' : '0 0 20%',
                                    transition: 'all 0.5s ease',
                                    opacity: idx === currentProject ? 1 : 0.4,
                                    transform: idx === currentProject ? 'scale(1)' : 'scale(0.85)'
                                }}
                            >
                                <div style={{
                                    background: 'white',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    boxShadow: idx === currentProject ? '0 20px 60px rgba(0,0,0,0.3)' : 'none'
                                }}>
                                    <div style={{ position: 'relative', width: '100%', paddingBottom: '60%' }}>
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    {idx === currentProject && (
                                        <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                                            <h3 style={{ marginBottom: '0.5rem' }}>{project.name}</h3>
                                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{project.desc}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={nextProject}
                        style={{
                            position: 'absolute',
                            right: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.1)',
                            border: '2px solid white',
                            color: 'white',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            zIndex: 10,
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--orange-accent)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
}
