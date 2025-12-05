'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export default function WorkPage() {
    const projects = [
        { name: 'Logistics Dashboard', image: '/project-logistics.png', category: 'Web App' },
        { name: 'E-commerce Site', image: '/project-ecommerce.png', category: 'E-commerce' },
        { name: 'E-commerce Site', image: '/project-ecommerce.png', category: 'E-commerce' },
        { name: 'Healthcare App', image: '/project-healthcare.png', category: 'Mobile' },
        { name: 'Salesforce Sales', image: '/project-logistics.png', category: 'CRM' },
        { name: 'E-commerce Site', image: '/project-ecommerce.png', category: 'E-commerce' }
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            <PageHero
                title="Our Work"
                subtitle="Discover our portfolio of successful projects and the impact we've made for our clients."
            />

            {/* Search Bar */}
            <section style={{ background: 'white', padding: '2rem 0', borderBottom: '1px solid var(--gray-light)' }}>
                <div className="container">
                    <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="🔍 Search"
                            style={{
                                width: '100%',
                                padding: '1rem 1.5rem',
                                borderRadius: '0.5rem',
                                border: '2px solid var(--gray-light)',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="section-padding light-gradient">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: 'white',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                }}
                            >
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '60%', background: 'var(--gray-light)' }}>
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.25rem 0.75rem',
                                        background: 'var(--gray-light)',
                                        borderRadius: '0.25rem',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        color: 'var(--text-dark)',
                                        marginBottom: '0.75rem'
                                    }}>
                                        {project.category}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)' }}>{project.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Case Study</h2>

                    <div style={{
                        background: 'var(--gray-light)',
                        borderRadius: '1rem',
                        padding: '3rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ borderRadius: '0.75rem', overflow: 'hidden', background: 'white', padding: '1rem' }}>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', background: 'var(--navy-dark)' }}>
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '3rem'
                                    }}>
                                        💻
                                    </div>
                                </div>
                            </div>
                            <div style={{ borderRadius: '0.75rem', overflow: 'hidden', background: 'white', padding: '1rem' }}>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', background: 'var(--navy-medium)' }}>
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '3rem'
                                    }}>
                                        📱
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'white', borderRadius: '0.75rem', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', color: 'var(--orange-accent)', lineHeight: 1, marginBottom: '1rem' }}>"</div>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                "Nexus Solutions transformed our entire digital infrastructure. Their expertise and dedication
                                resulted in a 300% increase in our online engagement and streamlined our operations significantly."
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--gray-light)' }}></div>
                                <div>
                                    <div style={{ fontWeight: '600', color: 'var(--text-dark)', fontSize: '1.125rem' }}>Jane Doe</div>
                                    <div style={{ color: 'var(--text-light)' }}>CEO</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
