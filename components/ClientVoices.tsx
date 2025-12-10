'use client';

import { motion } from 'framer-motion';

export default function ClientVoices() {
    const testimonials = [
        { name: 'Tafadzwa Muvezwa', role: 'CEO, Neocentric Interiors', quote: 'I truly appreciate the quality of your web designs, particulary as demonstrated in the one of my company.' },
        { name: 'Dionne Chiwa', role: 'Operations Manager, Royals Heaven Resort', quote: 'The website you made was genuinely amazing, interesting and self speaking to users. Thank you' },
        { name: 'Brian Choga', role: 'Communications,Kp3 SDA Church', quote: 'Your designs and products are quality and affordable, we really apprecaite your good work.' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section className="section-padding light-gradient">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    Client Voices
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
                >
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            className="card"
                            style={{ background: 'white', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{ fontSize: '3rem', color: 'var(--orange-accent)', lineHeight: 1 }}>"</div>
                            <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', fontSize: '1rem', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                                {testimonial.quote}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1 }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--gray-light)' }}></div>
                                <div>
                                    <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>{testimonial.name}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
