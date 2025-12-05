export default function Footer() {
    return (
        <footer style={{ background: 'var(--navy-dark)', color: 'white', padding: '3rem 0 1.5rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem' }}>Contact</h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                            📧 info@nexus.com<br />
                            📞 +9999 999 9999<br />
                            📍 +99 999 9999999<br />
                            📍 123 Main Street
                        </p>
                    </div>

                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem' }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Home', 'Our Work', 'Services', 'Training'].map((link) => (
                                <li key={link} style={{ marginBottom: '0.5rem' }}>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-accent)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem' }}>Social Media</h3>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {['📘', '🐦', '💼'].map((icon, idx) => (
                                <a key={idx} href="#" style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--orange-accent)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem' }}>Stay Connected with Nexus</h3>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    flex: 1,
                                    padding: '0.75rem',
                                    borderRadius: '0.375rem',
                                    border: 'none',
                                    fontSize: '0.95rem'
                                }}
                            />
                            <button className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>→</button>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center' }}>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                        Copyright 2024 Nexus Solutions
                        <span style={{ margin: '0 1rem' }}>|</span>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Privacy</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
