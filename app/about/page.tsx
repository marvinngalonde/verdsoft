'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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

export default function AboutPage() {
    const teamMembers = [
        { name: 'Joon Dribble', title: 'Experience Designer', desc: 'Lead Visionary', image: '/team/member1.jpg' },
        { name: 'Ucher Donance', title: 'Backend Developer', desc: 'System Architect', image: '/team/member2.jpg' },
        { name: 'Jace HarKi', title: 'Digital Marketer', desc: 'Growth Strategy', image: '/team/member3.jpg' },
        { name: 'Julie Marent', title: 'UX/UI Designer', desc: 'Creative Lead', image: '/team/member4.jpg' },
        { name: 'Rail Waitons', title: 'Product Designer', desc: 'Product Owner', image: '/team/member5.jpg' },
        { name: 'Roxie Sorbic', title: 'Marketing Specialist', desc: 'Brand Voice', image: '/team/member6.jpg' }
    ];

    const timeline = [
        { year: '2015', desc: 'Software solutions studio founded.' },
        { year: '2017', desc: 'Establishment of new headquarters.' },
        { year: '2019', desc: 'Global expansion to 3 continents.' },
        { year: '2020-NOW', desc: 'Award winning tech growth.' }
    ];

    const stats = [
        { number: '50+', label: 'Custom Projects' },
        { number: '99.9%', label: 'Server Uptime' },
        { number: '10+', label: 'Years Experience' },
        { number: '200+', label: 'Developers Trained' },
    ];

    const values = [
        { title: 'Innovation', icon: '💡', desc: 'Pushing boundaries with bleeding-edge tech stacks.' },
        { title: 'Integrity', icon: '🤝', desc: 'Transparent communication and honest delivery.' },
        { title: 'Agility', icon: '⚡', desc: 'Rapid adaptation to changing market needs.' },
        { title: 'Security', icon: '🔒', desc: 'Iron-clad data protection standards.' },
    ];

    return (
        <div className="min-h-screen" style={{ background: '#f8fafc' }}>
            <Navigation />

            {/* --- HERO SECTION --- */}
            <section style={{
                background: '#020617',
                color: 'white',
                padding: '8rem 0 12rem', // Increased padding for overlap
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <CircuitBackground />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                        About <span style={{ color: '#06b6d4' }}>Verdsoft</span>
                    </h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#94a3b8', fontSize: '1.15rem', lineHeight: '1.7' }}>
                        We are passionate about empowering businesses through innovative technology solutions and exceptional partnerships.
                    </p>
                </div>
            </section>

            {/* --- TEAM PHOTO OVERLAP --- */}
            <div className="container" style={{ marginTop: '-8rem', position: 'relative', zIndex: 2 }}>
                <div style={{
                    width: '100%',
                    height: '450px',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    border: '4px solid rgba(255,255,255,0.1)'
                }}>
                    <Image
                        src="/about-team.png"
                        alt="Team Collaboration"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    {/* Overlay Gradient on Image */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,6,23,0.6) 0%, transparent 100%)' }}></div>
                </div>
            </div>

            {/* --- STATS STRIP (New Section) --- */}
            <section style={{ background: '#020617', padding: '4rem 0', marginTop: '-2rem', paddingTop: '6rem', position: 'relative' }}>
                <CircuitBackground opacity={0.05} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
                        {stats.map((stat, idx) => (
                            <div key={idx} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#dca585', marginBottom: '0.5rem' }}>
                                    {stat.number}
                                </div>
                                <div style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- OUR MISSION --- */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                        <div style={{
                            flex: '0 0 180px',
                            height: '200px',
                            background: '#f1f5f9',
                            borderRadius: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            position: 'relative'
                        }}>
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <path d="M12 18v-4"></path>
                                <path d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                            </svg>
                            {/* Decorative glowing dot */}
                            <div style={{ position: 'absolute', top: '20px', right: '20px', width: '10px', height: '10px', background: '#C67C4E', borderRadius: '50%', boxShadow: '0 0 10px #C67C4E' }}></div>
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ height: '2px', width: '40px', background: '#C67C4E' }}></div>
                                <span style={{ color: '#C67C4E', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Our Purpose</span>
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>Mission Statement</h2>
                            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                We design and develop user-friendly apps and websites that help businesses thrive in a fast-changing world. Our mission is to deliver reliable, affordable, and innovative digital solutions that solve real problems, strengthen brands, and open doors for entrepreneurs in Zimbabwe and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- OUR VISION --- */}
            <section style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
                        <div style={{
                            flex: '0 0 180px',
                            height: '200px',
                            background: 'linear-gradient(135deg, #C67C4E, #b56d40)',
                            borderRadius: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(198, 124, 78, 0.3)',
                            position: 'relative'
                        }}>
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            {/* Decorative glowing dot */}
                            <div style={{ position: 'absolute', top: '20px', left: '20px', width: '10px', height: '10px', background: 'white', borderRadius: '50%', boxShadow: '0 0 10px white' }}></div>
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ height: '2px', width: '40px', background: '#06b6d4' }}></div>
                                <span style={{ color: '#06b6d4', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Our Future</span>
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>Vision Statement</h2>
                            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                To become one of Africa's most trusted digital creators—building apps and websites that empower businesses, unlock opportunities, and drive sustainable growth across the continent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORE VALUES (New Section) --- */}
            <section style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '4rem' }}>
                        Core Values
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {values.map((val, idx) => (
                            <div key={idx} style={{
                                padding: '2rem',
                                borderRadius: '1rem',
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#06b6d4'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{val.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>{val.title}</h3>
                                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- LEADERSHIP TEAM --- */}
            {/* <section style={{ background: '#f1f5f9', padding: '6rem 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '4rem' }}>
                        Leadership Team
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
                        {teamMembers.map((member, idx) => (
                            <div key={idx} style={{
                                background: 'white',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{ height: '240px', background: '#cbd5e1', position: 'relative' }}>
                                    <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} />
                                   
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)' }}></div>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.25rem' }}>{member.name}</h3>
                                    <p style={{ color: '#06b6d4', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase' }}>{member.title}</p>
                                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>{member.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}



            {/* --- OUR TECH STACK (New Section) --- */}
            <section style={{ padding: '6rem 0', background: '#020617', position: 'relative' }}>
                <CircuitBackground opacity={0.1} />
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h2 style={{ color: 'white', marginBottom: '3rem' }}>Powered By</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.7 }}>
                        {['React', 'Next.js', 'Python', 'Docker', 'AWS', 'Supabase'].map((tech, idx) => (
                            <div key={idx} style={{
                                fontSize: '1.5rem',
                                color: '#94a3b8',
                                fontWeight: '600',
                                border: '1px solid #1e293b',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(255,255,255,0.05)'
                            }}>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- COMPANY HISTORY --- */}
            {/* <section style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '4rem' }}>Company History</h2>
                    <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', paddingTop: '2rem' }}>
                      
                        <div style={{ position: 'absolute', top: '29px', left: '0', right: '0', height: '2px', background: '#e2e8f0', zIndex: 0 }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                            {timeline.map((item, idx) => (
                                <div key={idx} style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{item.year}</div>
                                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#dca585', border: '3px solid white', boxShadow: '0 0 0 1px #dca585', marginBottom: '2rem' }}></div>
                                    <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '180px', lineHeight: '1.5' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            {/* --- REPLACEMENT SECTION: WHY CHOOSE US --- */}
            <section style={{ padding: '6rem 0', background: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
                        Why Partner With Us?
                    </h2>
                    <p style={{ textAlign: 'center', color: '#64748b', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
                        We might be the fresh energy the industry needs. Here is how we deliver value where others settle for status quo.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                title: 'Client-Centric Agility',
                                desc: 'We are lean and fast. Unlike big agencies, you get direct access to developers and rapid iterations without red tape.',
                                color: '#dca585' // Orange Accent
                            },
                            {
                                title: 'Future-Proof Architecture',
                                desc: 'We do not build for yesterday. We use modern stacks (Next.js, Supabase, Docker) that scale with your vision.',
                                color: '#06b6d4' // Cyan Accent
                            },
                            {
                                title: 'Post-Launch Partnership',
                                desc: 'Our job does not end at deployment. We provide dedicated training and server management to ensure long-term success.',
                                color: '#0f172a' // Navy Accent
                            }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                padding: '2.5rem',
                                borderRadius: '1rem',
                                border: '1px solid #e2e8f0',
                                background: '#ffffff',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.borderColor = item.color;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                }}
                            >
                                {/* Top colored accent line */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '4px',
                                    background: item.color
                                }}></div>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem', marginTop: '0.5rem' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}