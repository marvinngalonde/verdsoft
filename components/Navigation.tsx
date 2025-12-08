'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Our Work', href: '/work' },

        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <nav style={{
            position: 'absolute', // Sits on top of the hero image
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'transparent',
            padding: '1.5rem 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                {/* Logo with Filter for Dark Background */}
                <Link href="/" style={{ position: 'relative', width: '180px', height: '50px', display: 'block' }}>
                    <Image
                        src="/logo.png"
                        alt="VERDSOFT"
                        fill
                        style={{
                            objectFit: 'contain',
                            objectPosition: 'left',
                            // Turns the dark blue logo pure white to match the design
                            filter: 'brightness(0) invert(1)'
                        }}
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex" style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, alignItems: 'center' }}>
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
                                    textShadow: '0 2px 4px rgba(0,0,0,0.5)' // Added shadow for better readability over images
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
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                    ☰
                </button>
            </div>
        </nav>
    );
}