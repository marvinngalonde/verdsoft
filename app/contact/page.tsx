'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// --- REUSABLE BACKGROUND COMPONENT (For Header Consistency) ---
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
            {/* Tech Lines */}
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

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message!');
    };

    return (
        <div className="min-h-screen" style={{ background: '#f8fafc' }}>
            <ContactStyles />
            <Navigation />

            {/* --- HERO SECTION --- */}
            <section style={{
                background: '#020617',
                color: 'white',
                padding: '8rem 0 16rem', // Extra bottom padding to allow map overlap
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <CircuitBackground />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Contact</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#94a3b8', fontSize: '1.1rem' }}>
                        A great relationship starts with a simple conversation. Let's create something amazing together.
                    </p>
                </div>
            </section>

            {/* --- CONTACT INFO SECTION --- */}
            <section style={{
                background: '#f8fafc',
                padding: '4rem 0 2rem',
                position: 'relative',
                zIndex: 10
            }}>
                <div className="container" style={{
                    maxWidth: '800px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {/* Phone Contact */}
                    <a
                        href="tel:+263787062575"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1.5rem 2rem',
                            background: 'white',
                            borderRadius: '1rem',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            textDecoration: 'none',
                            color: '#0f172a',
                            transition: 'all 0.3s ease',
                            minWidth: '250px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #C67C4E, #b56d40)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>Call Us</div>
                            <div style={{ fontSize: '1.125rem', fontWeight: '700' }}>+263 787 062 575</div>
                        </div>
                    </a>

                    {/* WhatsApp Contact */}
                    <a
                        href="https://wa.me/263787062575"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1.5rem 2rem',
                            background: 'white',
                            borderRadius: '1rem',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            textDecoration: 'none',
                            color: '#0f172a',
                            transition: 'all 0.3s ease',
                            minWidth: '250px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #25D366, #128C7E)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>WhatsApp</div>
                            <div style={{ fontSize: '1.125rem', fontWeight: '700' }}>Chat with us</div>
                        </div>
                    </a>
                </div>
            </section>

            {/* --- MAP & FORM OVERLAY SECTION --- */}
            <div style={{ position: 'relative', marginTop: '-10rem', paddingBottom: '0' }}>

                {/* 1. BACKGROUND MAP (Full Width) */}
                <div style={{
                    width: '100%',
                    height: '800px', // Tall enough to hold the form
                    position: 'relative',
                    background: '#e2e8f0', // Fallback color
                    overflow: 'hidden'
                }}>
                    {/* Placeholder for Google Map - styling to match image */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.597654763!2d31.0!3d-17.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ4JzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2szw!4v1600000000000!5m2!1sen!2szw"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>

                {/* 2. FLOATING FORM CARD */}
                <div className="container" style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    maxWidth: '1200px', // Match site width
                    pointerEvents: 'none', // Let clicks pass through to map on sides
                    padding: '0 1rem' // Add padding for mobile edges
                }}>
                    <div className="contact-form-card" style={{
                        width: '100%',
                        maxWidth: '550px', // Width of the form card
                        background: '#1e293b', // Dark Navy Background
                        borderRadius: '1.5rem',
                        padding: '3rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        pointerEvents: 'auto', // Re-enable clicks for form
                        position: 'relative',
                        top: '50px' // Push down slightly into map area
                    }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Contact</h2>

                        <form onSubmit={handleSubmit}>
                            {/* Name Row */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Name</label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    style={inputStyle}
                                />
                            </div>

                            {/* Email & Phone Row */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Email</label>
                                    <input
                                        type="email"
                                        placeholder="demoname@gmail.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your last name"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter your message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{ ...inputStyle, resize: 'vertical' }}
                                />
                            </div>

                            {/* Info & Socials Row */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem', fontSize: '0.9rem', color: '#94a3b8', flexWrap: 'wrap', gap: '2rem' }}>
                                <div>
                                    <div style={{ fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>Contact</div>
                                    <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>sales@verdsoft.co.zw</span>
                                    </div>
                                    <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                        <span>+263 787 062 575</span>
                                    </div>
                                    <div style={{ marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span>Harare, Zimbabwe</span>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>Social Media</div>
                                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                                        <a href="https://www.facebook.com/profile.php?id=61563006754910" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/company/verdsoft-private-limited/" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </a>
                                        <a href="https://www.instagram.com/verdsoft/" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div style={{ textAlign: 'center' }}>
                                <button type="submit" style={{
                                    background: '#C67C4E', // Bronze/Terracotta accent
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.75rem 3rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(198, 124, 78, 0.3)'
                                }}>
                                    Contact
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            {/* SPACER for Footer (since map is absolute/fixed height) */}
            <div style={{ height: '100px', background: '#f8fafc' }}></div>

            <Footer />
        </div>
    );
}

// Reusable Input Style
const inputStyle = {
    width: '100%',
    padding: '0.875rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'white', // White input background as per image
    color: '#0f172a',
    fontSize: '0.95rem',
    outline: 'none'
};

const _styles = `
    @media (max-width: 768px) {
        .contact-form-card {
            padding: 2rem !important;
            border-radius: 1rem !important;
        }
        h2 {
            font-size: 1.75rem !important;
        }
    }
`;

export function ContactStyles() {
    return <style jsx global>{_styles}</style>;
}