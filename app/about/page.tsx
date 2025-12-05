'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
    const teamMembers = [
        { name: 'John Oakes', title: 'Chief Executive Officer', desc: 'Visionary leader' },
        { name: 'Victor Shovalov', title: 'Chief Technology Officer', desc: 'Tech innovator' },
        { name: 'Allan Bartlett', title: 'Head of Development', desc: 'Development expert' },
        { name: 'Julia Nguyen', title: 'Chief Marketing Officer', desc: 'Marketing strategist' },
        { name: 'Rajesh Deshmukh', title: 'Senior Project Manager', desc: 'Project excellence' },
        { name: 'Michael Torres', title: 'Head of Design', desc: 'Design visionary' }
    ];

    const timeline = [
        { year: '2015', title: 'Company Established', desc: 'Founded in collaboration with industry pioneers' },
        { year: '2017', title: 'First Major Client', desc: 'Secured partnership with Fortune 500 company' },
        { year: '2019', title: 'International Expansion', desc: 'Opened offices in 3 continents' },
        { year: '2020-2023', title: 'Rapid Growth', desc: 'Scaled to 200+ employees and 500+ projects' }
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            <PageHero
                title="About Us"
                subtitle="We are passionate about empowering businesses through innovative technology solutions and exceptional partnerships."
            />

            {/* Team Photo Section */}
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                            <Image
                                src="/about-team.png"
                                alt="Our team collaborating"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="section-padding light-gradient">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            margin: '0 auto 2rem',
                            background: 'white',
                            borderRadius: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--orange-accent)" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                        </div>
                        <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.125rem', lineHeight: '1.8' }}>
                            We empower businesses to thrive in the digital age by delivering innovative software solutions
                            that drive growth, enhance efficiency, and create lasting value. Our commitment to excellence
                            and customer satisfaction guides everything we do.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3.5rem' }}>Leadership Team</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="card" style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '50%',
                                    background: idx === 0 ? `url('/team-member-1.png')` : 'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy-medium) 100%)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    margin: '0 auto 1.5rem',
                                    border: '4px solid var(--gray-light)'
                                }}></div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                                <p style={{ color: 'var(--orange-accent)', fontWeight: '600', marginBottom: '0.75rem' }}>
                                    {member.title}
                                </p>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                                    {member.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company History */}
            <section className="section-padding light-gradient">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3.5rem' }}>Company History</h2>

                    <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                        {/* Timeline line */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '0',
                            bottom: '0',
                            width: '2px',
                            background: 'var(--orange-accent)',
                            transform: 'translateX(-50%)'
                        }}></div>

                        {timeline.map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                                marginBottom: '3rem',
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: '45%',
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '0.75rem',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}>
                                    <div style={{
                                        fontSize: '2rem',
                                        fontWeight: '700',
                                        color: 'var(--orange-accent)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {item.year}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>

                                {/* Timeline dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '2rem',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: 'var(--orange-accent)',
                                    border: '4px solid white',
                                    transform: 'translateX(-50%)',
                                    zIndex: 10
                                }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
