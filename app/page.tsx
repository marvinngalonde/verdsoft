'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    { name: "Logistics Dashboard", image: "/project-logistics.png", desc: "A powerful tool" },
    { name: "E-commerce Site", image: "/project-ecommerce.png", desc: "A seamless site" },
    { name: "Healthcare App", image: "/project-healthcare.png", desc: "Transforming care" }
  ];

  // Create stars for background
  useEffect(() => {
    const heroStars = document.getElementById('hero-stars');
    const projectStars = document.getElementById('project-stars');

    if (heroStars && heroStars.children.length === 0) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        heroStars.appendChild(star);
      }
    }

    if (projectStars && projectStars.children.length === 0) {
      for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        projectStars.appendChild(star);
      }
    }
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '600px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/hero-team.png" alt="Team collaboration" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <div className="gradient-overlay" style={{ position: 'absolute', inset: 0, zIndex: 1 }}></div>
        <div id="hero-stars" className="stars" style={{ zIndex: 2 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '8rem', paddingBottom: '8rem' }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: 'white', marginBottom: '1.5rem' }}>
              Architects of the<br />Digital Realm
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              Custom Software | Web Development | Mobile Apps<br />
              IT Strategy & Education
            </p>
            <button className="btn-primary">Start Your Project</button>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section-padding light-gradient">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', color: 'var(--text-dark)' }}>Our Expertise</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Custom Software', desc: 'Tailored solutions for complex challenges', icon: '⚙️' },
              { title: 'Web & Hosting', desc: 'Scalable infrastructure and hosting', icon: '☁️' },
              { title: 'Mobile Applications', desc: 'Native apps for iOS and Android', icon: '📱' },
              { title: 'IT Consultation', desc: 'Strategic guidance for digital transformation', icon: '💬' },
              { title: 'Software Sales', desc: 'Curated software solutions for your business', icon: '🛒' },
              { title: 'Training & Workshops', desc: 'Empowering your team with expert knowledge', icon: '📚' }
            ].map((service, idx) => (
              <div key={idx} className="card">
                <div className="icon-wrapper" style={{ fontSize: '2.5rem' }}>{service.icon}</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Approach: The Digital Foundry</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '4rem' }}>
            Visualized like the digital by the dependency steps.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { num: '1', title: 'Discover & Blueprint', desc: 'Reduce uncertainties by mapping requirements' },
              { num: '2', title: 'Forge & Refine', desc: 'Iterate upon patterns and complex simulations' },
              { num: '3', title: 'Deploy & Scale', desc: 'Deploy consistently across all operating services' }
            ].map((step, idx) => (
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

      {/* Featured Projects */}
      <section className="section-padding" style={{ background: 'var(--navy-dark)', position: 'relative', overflow: 'hidden' }}>
        <div id="project-stars" className="stars"></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', color: 'white' }}>Featured Projects</h2>

          <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            <button
              onClick={prevProject}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid white',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--orange-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              ‹
            </button>

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: idx === currentProject ? '0 0 60%' : '0 0 20%',
                    transition: 'all 0.5s ease',
                    opacity: idx === currentProject ? 1 : 0.4,
                    transform: idx === currentProject ? 'scale(1)' : 'scale(0.85)'
                  }}
                >
                  <div style={{
                    background: 'white',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: idx === currentProject ? '0 20px 60px rgba(0,0,0,0.3)' : 'none'
                  }}>
                    <div style={{ position: 'relative', width: '100%', paddingBottom: '60%' }}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    {idx === currentProject && (
                      <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>{project.name}</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{project.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextProject}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid white',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--orange-accent)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Client Voices */}
      <section className="section-padding light-gradient">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3.5rem' }}>Client Voices</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'John Elmer', role: 'CEO, TechStart', quote: 'I can be more complete, easy which was a key about structure and very friendly to use.' },
              { name: 'Diana Weiss', role: 'Product Manager', quote: 'Genuinely simple, interesting and straightforward, very friendly to use.' },
              { name: 'Aryn Billons', role: 'Founder, InnovateCo', quote: 'I don\'t feel our core is a minimalistic UX is excellent, and we\'re happy with the operating services.' }
            ].map((testimonial, idx) => (
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

      <Footer />
    </div>
  );
}
