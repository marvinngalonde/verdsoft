import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Services', href: '/services' },
        { name: 'Our Work', href: '/work' },
        { name: 'Consultation', href: '/services' },
        { name: 'Training', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <nav style={{ background: 'var(--navy-dark)', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--orange-accent)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>Nexus<br />Solutions</span>
                </Link>
                <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0 }}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                style={{
                                    color: pathname === item.href ? 'var(--orange-accent)' : 'white',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: '500',
                                    transition: 'color 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange-accent)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = pathname === item.href ? 'var(--orange-accent)' : 'white'}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
