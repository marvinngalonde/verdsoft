export default function OurExpertise() {
    const services = [
        { title: 'Custom Software', desc: 'Tailored solutions for complex challenges', icon: '⚙️' },
        { title: 'Web & Hosting', desc: 'Scalable infrastructure and hosting', icon: '☁️' },
        { title: 'Mobile Applications', desc: 'Native apps for iOS and Android', icon: '📱' },
        { title: 'IT Consultation', desc: 'Strategic guidance for digital transformation', icon: '💬' },
        { title: 'Software Sales', desc: 'Curated software solutions for your business', icon: '🛒' },
        { title: 'Training & Workshops', desc: 'Empowering your team with expert knowledge', icon: '📚' }
    ];

    return (
        <section className="section-padding light-gradient">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', color: 'var(--text-dark)' }}>Our Expertise</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {services.map((service, idx) => (
                        <div key={idx} className="card">
                            <div className="icon-wrapper" style={{ fontSize: '2.5rem' }}>{service.icon}</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
