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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
    };

    return (
        <div className="min-h-screen" style={{ background: '#f8fafc' }}>
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
                        allowFullScreen=""
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
                    pointerEvents: 'none' // Let clicks pass through to map on sides
                }}>
                    <div style={{
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
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                                <div>
                                    <div style={{ fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>Contact</div>
                                    <div style={{ marginBottom: '0.25rem' }}>📧 sales@verdsoft.co.zw</div>
                                    <div style={{ marginBottom: '0.25rem' }}>📞 +263 787 062 575</div>
                                    <div style={{ marginBottom: '0.25rem' }}>📍 Harare, Zimbabwe</div>
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>Social Media</div>
                                    <div style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem' }}>
                                        <a href="#" style={{ color: '#94a3b8' }}>📘</a>
                                        <a href="#" style={{ color: '#94a3b8' }}>🐦</a>
                                        <a href="#" style={{ color: '#94a3b8' }}>📸</a>
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