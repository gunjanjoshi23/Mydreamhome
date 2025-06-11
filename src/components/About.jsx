import React from 'react';
import { FaScreenpal, FaUpDown } from 'react-icons/fa6';
import { FaEnvelope, FaMap, FaMapMarkedAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* LEFT IMAGE */}
        <div style={styles.leftImageWrapper}>
          <img
            src="/photo-555.avif"
            alt="San Francisco"
            style={styles.leftImage}
          />
          <span style={styles.leftImageTag}>San Francisco</span>
        </div>

        {/* RIGHT TEXT */}
        <div style={styles.rightText}>
          <h2 style={styles.heading}>
            Empowering You to Find<br /> Your Dream Home,<br /> Effortlessly
          </h2>
          <p style={styles.paragraph}>
            We simplify the journey to your perfect home with expert guidance, verified listings, and tools designed to make every step clear and stress-free.
          </p>

          {/* Feature List */}
          <div style={styles.featureList}>
            <Feature icon={<FaScreenpal />} text="Virtual property tours and viewings" />
            <Feature icon={<FaUpDown />} text="Real-time market price updates" />
            <Feature icon={<FaMap />} text="Interactive floor plans and maps" />
            <Feature icon={<FaMapMarkedAlt />} text="Access to off-market properties" />
            <Feature icon={<FaEnvelope />} text="Direct messaging with agents and owners" />
          </div>
        </div>

      </div>

      <div style={styles.bottomSection}>
        {/* Text Section */}
        <div style={styles.bottomText}>
          <h2 style={styles.heading}>
            Simplifying Your Real Estate Journey Every Step of the Way
          </h2>
          <p style={styles.paragraph}>
            From property search to closing the deal, we provide the tools, support, and expertise you need to navigate the real estate process with confidence and ease.
          </p>

          {/* Feature List */}
          <div style={styles.featureList}>
            <Feature icon={<FaScreenpal />} text="In-app scheduling for property viewings" />
            <Feature icon={<FaUpDown />} text="Real-time market price updates" />
            <Feature icon={<FaMap />} text="User-friendly interface for smooth navigation" />
            <Feature icon={<FaMapMarkedAlt />} text="Detailed agent and realtor profiles" />
            <Feature icon={<FaEnvelope />} text="Access to off-market properties" />
          </div>
        </div>

        {/* Image Section */}
        <div style={styles.bottomImageWrapper}>
          <img
            src="/images (12).jpg"
            alt="Golden Coast"
            style={styles.bottomImage}
          />
          <span style={styles.bottomImageTag}>Golden Coast</span>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, text }) => (
  <div style={styles.featureItem}>
    <div style={styles.iconWrapper}>{React.cloneElement(icon, { style: styles.icon })}</div>
    <span>{text}</span>
  </div>
);

const styles = {
  section: {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    backgroundAttachment: 'fixed',
    color: '#f0f0f0',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
  },
  container: {
    display: 'flex',
    gap: '60px',
    maxWidth: '1200px',
    margin: '0 auto 100px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  leftImageWrapper: {
    flex: '1 1 40%',
    position: 'relative',
    minWidth: '320px',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  leftImage: {
    width: '100%',
    display: 'block',
    borderRadius: '30px',
    objectFit: 'cover',
    transformOrigin: 'center center',
  },
  leftImageTag: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'rgba(255,255,255,0.85)',
    color: '#333',
    padding: '8px 18px',
    borderRadius: '25px',
    fontWeight: '700',
    fontSize: '14px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
  },
  rightText: {
    flex: '1 1 50%',
    minWidth: '320px',
  },
  heading: {
    fontSize: '42px',
    fontWeight: '900',
    marginBottom: '24px',
    lineHeight: '1.15',
    color: '#fff',
    textShadow: '0 2px 8px rgba(0,0,0,0.4)',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#d6d6d6',
    marginBottom: '40px',
    maxWidth: '520px',
  },
  featureList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    fontSize: '16px',
    color: '#e2e8f0',
  },
  iconWrapper: {
    color: '#4caf50',
    fontSize: '22px',
    minWidth: '24px',
  },
  icon: {
    color: '#4caf50',
    fontSize: '24px',
  },

  bottomSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '50px',
  },
  bottomText: {
    flex: '1 1 500px',
    minWidth: '320px',
  },
  bottomImageWrapper: {
    flex: '1 1 400px',
    position: 'relative',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  bottomImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '30px',
    display: 'block',
  },
  bottomImageTag: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#222',
    padding: '8px 18px',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
  },

  // Responsive tweaks
  '@media (max-width: 900px)': {
    container: {
      flexDirection: 'column',
      gap: '40px',
    },
    bottomSection: {
      flexDirection: 'column',
    },
  },
};

export default About;
