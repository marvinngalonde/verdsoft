'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className="min-h-screen">
            <Navigation />

            <PageHero
                title="Contact"
                subtitle="A place to connect with us. We're here to help and answer any questions you may have."
            />

            {/* Contact Section */}
            <section className="section-padding light-gradient">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                        {/* Contact Form */}
                        <div style={{ background: 'white', borderRadius: '1rem', padding: '3rem', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                            <h2 style={{ marginBottom: '2rem' }}>Contact</h2>

                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-dark)' }}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem',
                                            borderRadius: '0.375rem',
                                            border: '2px solid var(--gray-light)',
                                            fontSize: '1rem',
                                            outline: 'none'
                                        }}
                                        required
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-dark)' }}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem',
                                                borderRadius: '0.375rem',
                                                border: '2px solid var(--gray-light)',
                                                fontSize: '1rem',
                                                outline: 'none'
                                            }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-dark)' }}>
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem',
                                                borderRadius: '0.375rem',
                                                border: '2px solid var(--gray-light)',
                                                fontSize: '1rem',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-dark)' }}>
                                        Message
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={5}
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem',
                                            borderRadius: '0.375rem',
                                            border: '2px solid var(--gray-light)',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            resize: 'vertical'
                                        }}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                                    Send
                                </button>
                            </form>
                        </div>

                        {/* Contact Info & Map */}
                        <div>
                            {/* Contact Information */}
                            <div style={{ background: 'white', borderRadius: '1rem', padding: '2.5rem', marginBottom: '2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ marginBottom: '1.5rem' }}>Contact</h3>
                                <div style={{ color: 'var(--text-light)', lineHeight: '2' }}>
                                    <p>📧 info@nexussolutions.com</p>
                                    <p>📞 +9999 999 9999</p>
                                    <p>📍 +99 999 9999999</p>
                                    <p>🕐 Monday-Fri 9AM-5PM</p>
                                </div>
                            </div>

                            {/* Map */}
                            <div style={{
                                background: 'white',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                height: '400px',
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem'
                                }}>
                                    📍
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    left: '1rem',
                                    right: '1rem',
                                    background: 'white',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }}>
                                    <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Nexus Solutions HQ</p>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>123 Main Street, Tech City</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', textAlign: 'center' }}>
                        <div>
                            <h3 style={{ marginBottom: '1rem' }}>Social Media</h3>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                {['📘', '🐦', '💼'].map((icon, idx) => (
                                    <a key={idx} href="#" style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'var(--gray-light)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.5rem',
                                        transition: 'all 0.3s',
                                        textDecoration: 'none'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--orange-accent)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'var(--gray-light)'}>
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 style={{ marginBottom: '1rem' }}>Quick Links</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Home', 'Services', 'About', 'Contact'].map((link) => (
                                    <li key={link} style={{ marginBottom: '0.5rem' }}>
                                        <a href="#" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ marginBottom: '1rem' }}>Stay Connected</h3>
                            <p style={{ color: 'var(--text-light)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                                Subscribe to our newsletter
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: '0.375rem',
                                        border: '2px solid var(--gray-light)',
                                        fontSize: '0.95rem',
                                        width: '200px'
                                    }}
                                />
                                <button className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>→</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
