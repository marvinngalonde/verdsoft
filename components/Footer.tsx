'use client';

import Image from 'next/image';
import Link from 'next/link';

// Background "Digital Lines" Pattern Component
const CircuitBackground = () => (
    <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
    }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Random Tech Lines */}
            <path d="M0 50 H 200 V 150 H 500" stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M100 300 H 300 V 200 H 600" stroke="#dca585" strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M800 50 V 100 H 600" stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="200" cy="150" r="2" fill="#06b6d4" />
            <circle cx="300" cy="200" r="2" fill="#dca585" />
        </svg>
        {/* Soft Radial Glow from bottom right */}
        <div style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
        }}></div>
    </div>
);

const SocialIcon = ({ path }: { path: string }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
    </svg>
);

export default function Footer() {
    return (
        <footer style={{
            background: '#020617', // Very Dark Slate/Navy
            color: 'white',
            position: 'relative',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            {/* Top Glowing Line */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, #06b6d4 50%, transparent 100%)',
                opacity: 0.5
            }}></div>

            <CircuitBackground />

            <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 1rem 2rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>

                    {/* COLUMN 1: BRAND INFO */}
                    <div>
                        {/* Logo */}
                        <div style={{ position: 'relative', width: '160px', height: '50px', marginBottom: '1.5rem' }}>
                            <Image
                                src="/logo.png"
                                alt="Verdsoft"
                                fill
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'left',
                                    filter: 'brightness(0) invert(1)'
                                }}
                            />
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            Architecting the digital future with bespoke software solutions, secure hosting, and strategic IT consultation.
                        </p>
                    </div>

                    {/* COLUMN 2: QUICK LINKS */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '600' }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Home', 'Our Work', 'Services', 'Training'].map((link) => (
                                <li key={link}>
                                    <Link href="#" style={{
                                        color: '#cbd5e1',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        transition: 'color 0.2s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.color = '#06b6d4'; e.currentTarget.style.paddingLeft = '5px'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.paddingLeft = '0px'; }}
                                    >
                                        <span style={{ fontSize: '0.7rem', color: '#06b6d4' }}>›</span> {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: CONTACT INFO (UPDATED) */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '600' }}>Contact Us</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                            {/* Email */}
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ color: '#06b6d4', marginTop: '2px' }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '2px' }}>Email Support</div>
                                    <a href="mailto:sales@verdsoft.co.zw" style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem' }}>
                                        sales@verdsoft.co.zw
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ color: '#06b6d4', marginTop: '2px' }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '2px' }}>Call Us</div>
                                    <a href="tel:+263787062575" style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem' }}>
                                        +263 787 062 575
                                    </a>
                                </div>
                            </div>

                            {/* Address (Optional Placeholder) */}
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ color: '#06b6d4', marginTop: '2px' }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Harare, Zimbabwe</span>
                            </div>

                        </div>
                    </div>

                    {/* COLUMN 4: NEWSLETTER & SOCIAL */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '600' }}>Stay Connected</h3>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    flex: 1,
                                    padding: '0.75rem 1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    backdropFilter: 'blur(5px)'
                                }}
                                onFocus={(e) => e.currentTarget.style.borderColor = '#06b6d4'}
                                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                            <button style={{
                                padding: '0.75rem 1.25rem',
                                background: '#06b6d4',
                                border: 'none',
                                borderRadius: '0.5rem',
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'background 0.3s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#0891b2'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#06b6d4'}
                            >
                                →
                            </button>
                        </div>

                        {/* Social Icons (SVGs) */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {/* WhatsApp */}
                            <a href="https://wa.me/263787062575" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/profile.php?id=61563006754910" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
                                <SocialIcon path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/company/verdsoft-private-limited/" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
                                <SocialIcon path="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/verdsoft/" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
                                <SocialIcon path="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2z" />
                            </a>
                            {/* Twitter/X */}
                            <a href="https://x.com/verdsoft" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
                                <SocialIcon path="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    color: '#64748b',
                    fontSize: '0.875rem'
                }}>
                    <div>© {new Date().getFullYear()} Verdsoft. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</Link>
                        <Link href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const socialIconStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#cbd5e1',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.05)'
};