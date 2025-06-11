import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  const sectionStyle = {
    padding: '40px',
    backgroundColor: '#f7f7f7',
  };

  const headerStyle = {
    fontSize: '2em',
    marginBottom: '10px',
  };

  const starsStyle = {
    color: 'green',
    marginBottom: '10px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>Customer feedback and experiences</h2>
      <div style={starsStyle}>{'★ ★ ★ ★ ★'}</div>
      <p>Showing 1-{testimonials.length} out of <strong>2k reviews</strong></p>
      <div style={containerStyle}>
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
