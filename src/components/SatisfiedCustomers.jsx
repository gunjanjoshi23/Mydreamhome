import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SatisfiedCustomers = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/testimonials', { withCredentials: true });
        if (res.data.success && Array.isArray(res.data.testimonials)) {
          setTestimonials(res.data.testimonials);
        } else {
          console.error("Invalid response format:", res.data);
          setTestimonials([]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5 seconds per slide for better readability

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <section style={styles.wrapper} aria-label="Satisfied Customers Testimonials">
      <div style={styles.overlay}></div>

      <div style={styles.container}>
        <h2 style={styles.title}>Customer Feedback & Experiences</h2>

        <p style={styles.reviewHighlight}>127k Excellent Reviews</p>
        <p style={styles.reviewHighlight} aria-label="Star rating">⭐⭐⭐⭐⭐</p>

        {loading ? (
          <p style={styles.loadingText}>Loading testimonials...</p>
        ) : testimonials.length > 0 ? (
          <div style={styles.slider}>
            <article key={testimonials[currentIndex]._id || currentIndex} style={styles.card}>
              <div style={styles.iconWrapper}>
                <img
                  src="https://cdn4.vectorstock.com/i/1000x1000/72/93/online-testimonial-logo-icon-design-vector-22947293.jpg"
                  alt="User icon"
                  style={styles.icon}
                />
              </div>
              <h3 style={styles.name}>{testimonials[currentIndex]?.user?.name || 'Anonymous'}</h3>
              <p style={styles.message}>"{testimonials[currentIndex]?.testimonial}"</p>
            </article>
          </div>
        ) : (
          <p style={styles.loadingText}>No testimonials available.</p>
        )}
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    position: 'relative',
    minHeight: '450px',
    backgroundImage:
      `linear-gradient(135deg, rgba(2,0,36,0.7) 0%, rgba(9,9,121,0.6) 35%, rgba(0,212,255,0.5) 100%), 
       url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    fontFamily: "'Poppins', sans-serif",
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    zIndex: 2,
  },
  container: {
    position: 'relative',
    zIndex: 3,
    textAlign: 'center',
    maxWidth: '700px',
    width: '100%',
    padding: '0 15px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#f0f0f0',
    textShadow: '1px 1px 8px rgba(0,0,0,0.7)',
  },
  reviewHighlight: {
    color: '#FFD700',
    fontSize: '1.3rem',
    margin: '8px 0 28px 0',
    fontWeight: '600',
    letterSpacing: '1.2px',
  },
  loadingText: {
    color: '#eee',
    fontSize: '1.1rem',
    marginTop: '40px',
  },
  slider: {
    position: 'relative',
    transition: 'opacity 0.7s ease-in-out',
    minHeight: '180px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '20px',
    padding: '30px 25px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.35)',
    backdropFilter: 'blur(12px)',
    color: '#fff',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '1.1rem',
    fontStyle: 'italic',
    position: 'relative',
    animation: 'fadeInUp 0.8s ease forwards',
  },
  iconWrapper: {
    width: '90px',
    height: '90px',
    margin: '0 auto 20px',
    backgroundColor: '#0077cc',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 15px rgba(0, 119, 204, 0.7)',
  },
  icon: {
    width: '45px',
    height: '45px',
    filter: 'invert(100%)',
  },
  name: {
    fontSize: '1.3rem',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#f0f0f0',
    textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
  },
  message: {
    lineHeight: '1.6',
    color: '#ddd',
  },

  // Add keyframes for animation (for completeness, you'd ideally add this to CSS):
  // but React inline styles don’t support @keyframes,
  // so you can add these in your global CSS:
  // @keyframes fadeInUp {
  //   from {opacity: 0; transform: translateY(15px);}
  //   to {opacity: 1; transform: translateY(0);}
  // }
};

export default SatisfiedCustomers;
