'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function PricingPage() {
    // Theme colors matching the site
    const theme = {
        navyDark: '#081018',
        navyMedium: '#1e293b',
        accent: '#C67C4E', // Orange/Brown accent
        accentHover: '#b56d40',
        textLight: '#e2e8f0',
        textMuted: '#94a3b8',
        success: '#10b981'
    };

    const tiers = [
        {
            name: "Basic Website Design",
            price: "$300.00",
            description: "Essential online presence for startups.",
            features: [
                "5 Pages website design",
                "Search Engine Optimisation - SEO",
                "Website hosting",
                "Google Maps integration",
                "Social media integration"
            ],
            highlight: false
        },
        {
            name: "Standard Website Design",
            price: "$800.00",
            description: "Growth-focused solution for local businesses.",
            features: [
                "Standard website design",
                "Search Engine Optimisation - SEO",
                "Local business search optimisation",
                "4 - 10 pages website",
                "Social media integration & web chat",
                "Payment gateway - online payments"
            ],
            highlight: true, // Most Popular
            tag: "Most Popular"
        },
        {
            name: "Premium Website Design",
            price: "$1,200.00",
            description: "Full-scale digital transformation.",
            features: [
                "Premium customised website designing",
                "Online stores - eCommerce",
                "Social media pages optimisation",
                "10+ pages website designing",
                "Marketing strategy and optimisation",
                "Search Engine Optimisation - SEO"
            ],
            highlight: false
        }
    ];

    return (
        <div className="min-h-screen" style={{ background: '#f8fafc' }}>
            <Navigation />

            {/* --- HERO HEADER --- */}
            <section style={{
                position: 'relative',
                background: theme.navyDark,
                color: 'white',
                padding: '10rem 0 6rem',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Decor */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    backgroundImage: `radial-gradient(circle at 50% 50%, ${theme.accent} 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}></div>

                {/* Shine Effect */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    background: `radial-gradient(circle, ${theme.accent} 0%, transparent 70%)`,
                    opacity: 0.15,
                    filter: 'blur(60px)',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontWeight: 800, marginBottom: '1.5rem' }}>Transparent Pricing</h1>
                    <p style={{ color: theme.textMuted, maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Choose the perfect plan to reactivate your digital presence. No hidden fees, just results.
                    </p>
                </div>
            </section>

            {/* --- PRICING GRID --- */}
            <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
                <div className="container" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2.5rem',
                    alignItems: 'flex-start' // Align top so cards don't stretch weirdly if different heights
                }}>
                    {tiers.map((tier, index) => (
                        <PricingCard key={index} tier={tier} theme={theme} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

// Separate Component to handle Hover Logic cleaner
function PricingCard({ tier, theme }: { tier: any, theme: any }) {
    const [isHovered, setIsHovered] = useState(false);

    const isHighlight = tier.highlight;

    return (
        <div
            style={{
                flex: '0 1 350px',
                background: 'white',
                borderRadius: '16px',
                padding: '2.5rem',
                position: 'relative',
                border: isHighlight ? `2px solid ${theme.accent}` : '1px solid #e2e8f0',
                boxShadow: isHovered
                    ? `0 20px 40px -10px rgba(0,0,0,0.15), 0 0 20px ${isHighlight ? 'rgba(198, 124, 78, 0.2)' : 'rgba(0,0,0,0.05)'}`
                    : '0 4px 6px -1px rgba(0,0,0,0.05)',
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
                zIndex: isHovered ? 10 : 1
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHighlight && (
                <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: theme.accent,
                    color: 'white',
                    padding: '0.25rem 1rem',
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 10px rgba(198, 124, 78, 0.4)'
                }}>
                    {tier.tag}
                </div>
            )}

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: theme.navyDark, marginBottom: '0.5rem' }}>
                    {tier.name}
                </h3>
                <p style={{ color: theme.textMuted, fontSize: '0.95rem', height: '40px' }}>
                    {tier.description}
                </p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: theme.navyDark }}>
                    {tier.price}
                </span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', textAlign: 'left' }}>
                {tier.features.map((feature: string, i: number) => (
                    <li key={i} style={{
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'flex-start', // Top align icon
                        color: theme.navyMedium,
                        fontSize: '0.95rem'
                    }}>
                        <span style={{
                            color: theme.success,
                            marginRight: '0.75rem',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            lineHeight: '1'
                        }}>✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <button style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '8px',
                border: 'none',
                background: isHighlight ? theme.accent : theme.navyDark,
                color: 'white',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background 0.3s',
                boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.1)' : 'none'
            }}
                onMouseEnter={(e) => {
                    if (!isHighlight) e.currentTarget.style.background = theme.navyMedium;
                    else e.currentTarget.style.background = theme.accentHover;
                }}
                onMouseLeave={(e) => {
                    if (!isHighlight) e.currentTarget.style.background = theme.navyDark;
                    else e.currentTarget.style.background = theme.accent;
                }}
            >
                Get Started
            </button>
        </div>
    );
}
