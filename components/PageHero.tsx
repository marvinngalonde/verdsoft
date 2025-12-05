'use client';

import { useEffect } from 'react';

interface PageHeroProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
    useEffect(() => {
        const heroStars = document.getElementById('page-hero-stars');

        if (heroStars && heroStars.children.length === 0) {
            for (let i = 0; i < 80; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                heroStars.appendChild(star);
            }
        }
    }, []);

    return (
        <section style={{ position: 'relative', minHeight: '400px', overflow: 'hidden', background: 'var(--navy-dark)' }}>
            {backgroundImage && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.3 }}>
                    <img src={backgroundImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            )}
            <div className="gradient-overlay" style={{ position: 'absolute', inset: 0, zIndex: 1 }}></div>
            <div id="page-hero-stars" className="stars" style={{ zIndex: 2 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
                <h1 style={{ color: 'white', marginBottom: '1rem' }}>{title}</h1>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
