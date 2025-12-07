export default function ClientVoices() {
    const testimonials = [
        { name: 'John Elmer', role: 'CEO, TechStart', quote: 'I can be more complete, easy which was a key about structure and very friendly to use.' },
        { name: 'Diana Weiss', role: 'Product Manager', quote: 'Genuinely simple, interesting and straightforward, very friendly to use.' },
        { name: 'Aryn Billons', role: 'Founder, InnovateCo', quote: 'I don\'t feel our core is a minimalistic UX is excellent, and we\'re happy with the operating services.' }
    ];

    return (
        <section className="section-padding light-gradient">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3.5rem' }}>Client Voices</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="card" style={{ background: 'white' }}>
                            <div style={{ fontSize: '3rem', color: 'var(--orange-accent)', lineHeight: 1 }}>"</div>
                            <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
                                {testimonial.quote}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--gray-light)' }}></div>
                                <div>
                                    <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>{testimonial.name}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
