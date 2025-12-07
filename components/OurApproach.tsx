export default function OurApproach() {
    const steps = [
        { num: '1', title: 'Discover & Blueprint', desc: 'Reduce uncertainties by mapping requirements' },
        { num: '2', title: 'Forge & Refine', desc: 'Iterate upon patterns and complex simulations' },
        { num: '3', title: 'Deploy & Scale', desc: 'Deploy consistently across all operating services' }
    ];

    return (
        <section className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Approach: The Digital Foundry</h2>
                <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '4rem' }}>
                    Visualized like the digital by the dependency steps.
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                    {steps.map((step, idx) => (
                        <div key={idx} style={{ textAlign: 'center', maxWidth: '250px', position: 'relative' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'var(--navy-dark)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                fontWeight: '700',
                                margin: '0 auto 1.5rem',
                                border: '4px solid var(--orange-accent)'
                            }}>
                                {step.num}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{step.desc}</p>

                            {idx < 2 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '40px',
                                    left: '100%',
                                    width: '100px',
                                    height: '2px',
                                    background: 'var(--orange-accent)',
                                    display: idx === 2 ? 'none' : 'block'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        right: '-8px',
                                        top: '-4px',
                                        width: 0,
                                        height: 0,
                                        borderTop: '5px solid transparent',
                                        borderBottom: '5px solid transparent',
                                        borderLeft: '10px solid var(--orange-accent)'
                                    }}></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
