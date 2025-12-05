'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export default function ServicesPage() {
    const services = [
        {
            icon: '⚙️',
            title: 'Custom Software',
            desc: 'Tailored software solutions designed to address your unique business challenges. We build scalable, robust applications that grow with your needs.',
            color: '#3b82f6'
        },
        {
            icon: '☁️',
            title: 'Web & Hosting',
            desc: 'Comprehensive web development and reliable hosting solutions. From responsive websites to cloud infrastructure management.',
            color: '#10b981'
        },
        {
            icon: '📱',
            title: 'Mobile Apps',
            desc: 'Native and cross-platform mobile applications for iOS and Android. Engaging user experiences that drive customer loyalty.',
            color: '#8b5cf6'
        },
        {
            icon: '📱',
            title: 'Mobile App',
            desc: 'End-to-end mobile app development services. From concept to deployment, we handle the entire mobile journey.',
            color: '#6366f1'
        },
        {
            icon: '💬',
            title: 'IT Consultation',
            desc: 'Strategic IT guidance to help you navigate digital transformation. Expert advice on technology stack, architecture, and best practices.',
            color: '#f59e0b'
        },
        {
            icon: '☁️',
            title: 'Web & Hosting',
            desc: 'Scalable web solutions with enterprise-grade hosting. Performance optimization and 24/7 monitoring included.',
            color: '#06b6d4'
        },
        {
            icon: '📚',
            title: 'Training & Workshops',
            desc: 'Comprehensive training programs to upskill your team. Hands-on workshops covering the latest technologies and methodologies.',
            color: '#ec4899'
        },
        {
            icon: '🖥️',
            title: 'Mobile Hosting',
            desc: 'Specialized hosting solutions optimized for mobile backends. High-performance infrastructure with global CDN support.',
            color: '#64748b'
        }
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            <PageHero
                title="Services"
                subtitle="We're here to help you with all your software and consulting needs."
            />

            {/* Services Grid */}
            <section className="section-padding light-gradient">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: 'white',
                                    borderRadius: '1rem',
                                    padding: '2.5rem',
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
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '1rem',
                                    background: service.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    {service.icon}
                                </div>

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
                                    {service.title}
                                </h3>

                                <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    {service.desc}
                                </p>

                                <button
                                    className="btn-primary"
                                    style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem' }}
                                >
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
