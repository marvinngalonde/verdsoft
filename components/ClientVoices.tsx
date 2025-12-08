export default function ClientVoices() {
    const testimonials = [
        { name: 'Tafadzwa Muvezwa', role: 'CEO, Neocentric Interiors', quote: 'I truly appreciate the quality of your web designs, particulary as demonstrated in the one of my company.' },
        { name: 'Dionne Chiwa', role: 'Operations Manager, Royals Heaven Resort', quote: 'The website you made was genuinely amazing, interesting and self speaking to users. Thank you' },
        { name: 'Brian Choga', role: 'Communications,Kp3 SDA Church', quote: 'Your designs and products are quality and affordable, we really apprecaite your good work.' }
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
