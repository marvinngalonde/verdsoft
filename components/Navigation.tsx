'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
    const pathname = usePathname();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Our Work', href: '/work' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <>
            <style jsx>{`
                .desktop-nav {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    align-items: center;
                }
                
                .mobile-toggle {
                    display: none;
                }
                
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    
                    .mobile-toggle {
                        display: block !important;
                    }
                }
            `}</style>

            <nav style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: isMobileMenuOpen ? '#081018' : 'transparent',
                transition: 'background 0.3s ease',
                padding: '1rem 0'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    {/* Logo */}
                    <Link href="/" style={{
                        position: 'relative',
                        width: '140px',
                        height: '40px',
                        display: 'block',
                        flexShrink: 0
                    }}>
                        <Image
                            src="/logo.png"
                            alt="VERDSOFT"
                            fill
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'left',
                                filter: 'brightness(0) invert(1)'
                            }}
                            priority
                        />
                    </Link>

                    {/* Desktop Links */}
                    <ul className="desktop-nav">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    style={{
                                        color: 'rgba(255,255,255,0.9)',
                                        textDecoration: 'none',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        transition: 'color 0.3s',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            position: 'relative',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '1.75rem',
                            cursor: 'pointer',
                            zIndex: 1002,
                            padding: '0.5rem',
                            margin: '-0.5rem'
                        }}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div style={{
                    display: isMobileMenuOpen ? 'flex' : 'none',
                    flexDirection: 'column',
                    background: '#081018',
                    padding: '1rem 0',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    zIndex: 999
                }}>
                    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    router.push(item.href);
                                }}
                                style={{
                                    color: pathname === item.href ? '#C67C4E' : 'rgba(255,255,255,0.8)',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    padding: '0.5rem 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}