import React from 'react';

const Footer = () => {
  const footerWrapperStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f9faf7',
    color: '#333',
    paddingTop: '40px',
    borderTop: '4px solid #4CAF50',
  };

  const topBannerStyle = {
    background: 'linear-gradient(90deg, #d7e4c4 0%, #f9faf7 100%)',
    padding: '40px 20px',
    textAlign: 'center',
    boxShadow: 'inset 0 -5px 15px rgba(76, 175, 80, 0.15)',
    borderRadius: '12px',
    margin: '0 20px 60px',
  };

  const topBannerText = {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#2f4f2f',
    marginBottom: '12px',
  };

  const topBannerDesc = {
    fontSize: '1rem',
    color: '#556b2f',
    maxWidth: '640px',
    margin: '0 auto',
    lineHeight: '1.5',
  };

  const contactRowStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    marginTop: '25px',
    flexWrap: 'wrap',
  };

  const contactInfo = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#4b633e',
  };

  const bottomFooterStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '60px 40px 40px',
    flexWrap: 'wrap',
    gap: '50px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const columnStyle = {
    flex: '1 1 220px',
    minWidth: '220px',
    color: '#3b4d29',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '18px',
  };

  const logoIcon = {
    fontSize: '2.8rem',
    marginRight: '14px',
    color: '#4caf50',
    textShadow: '1px 1px 3px #3e7c17',
  };

  const sectionTitle = {
    fontWeight: '700',
    marginBottom: '18px',
    fontSize: '1.2rem',
    borderBottom: '3px solid #4caf50',
    paddingBottom: '6px',
    color: '#3b4d29',
  };

  const linkStyle = {
    display: 'block',
    marginBottom: '12px',
    color: '#5a6d3a',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  };

  const linkHover = {
    color: '#4caf50',
    cursor: 'pointer',
  };

  const copyrightStyle = {
    backgroundColor: '#d7e4c4',
    textAlign: 'center',
    padding: '15px 10px',
    fontSize: '0.9rem',
    color: '#546a2b',
    marginTop: '40px',
    boxShadow: 'inset 0 5px 8px rgba(76, 175, 80, 0.15)',
  };

  // Hover effect for links - handled via inline styles using React state (optional)
  // Here simplified: We'll add onMouseEnter and onMouseLeave handlers to toggle style.

  // For simplicity, I'll create a reusable Link component inside Footer:

  const FooterLink = ({ href, children }) => {
    const [hover, setHover] = React.useState(false);
    return (
      <a
        href={href}
        style={hover ? { ...linkStyle, ...linkHover } : linkStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </a>
    );
  };

  return (
    <footer style={footerWrapperStyle}>
      <div style={topBannerStyle}>
        <div style={topBannerText}>We are always here to help</div>
        <p style={topBannerDesc}>
          Whether you're buying, selling, or just exploring options, our team is ready to guide you every
          step of the way.
        </p>
        <div style={contactRowStyle}>
          <div style={contactInfo}>
            <span role="img" aria-label="location" style={{ fontSize: '1.3rem' }}>
              📍
            </span>{' '}
            <b>Location:</b> 123, Avenue, Cl
          </div>
          <div style={contactInfo}>
            <span role="img" aria-label="phone" style={{ fontSize: '1.3rem' }}>
              📞
            </span>{' '}
            <b>Phone:</b> +0123456789
          </div>
          <div style={contactInfo}>
            <span role="img" aria-label="email" style={{ fontSize: '1.3rem' }}>
              ✉️
            </span>{' '}
            <b>Email:</b> my@dreamhomes.com
          </div>
        </div>
      </div>

      <div style={bottomFooterStyle}>
        {/* Left Column */}
        <div style={columnStyle}>
          <div style={logoStyle}>
            <span style={logoIcon}>🏠</span>
            <div>
              <strong style={{ fontSize: '1.6rem' }}>My Dream Homes</strong>
            </div>
          </div>
          <p style={{ lineHeight: '1.6', color: '#556b2f' }}>
            Discover your perfect property with My Dream Homes — where comfort, style, and convenience
            come together. Browse top listings, explore ideal locations, and make your dream a reality
            today.
          </p>
        </div>

        {/* Customer Service */}
        <div style={columnStyle}>
          <div style={sectionTitle}>Customer Service</div>
          <FooterLink href="#">Help center</FooterLink>
          <FooterLink href="#">Payment methods</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Shipping status</FooterLink>
          <FooterLink href="#">Complaints</FooterLink>
        </div>

        {/* Legal */}
        <div style={columnStyle}>
          <div style={sectionTitle}>Legal</div>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Cookie settings</FooterLink>
          <FooterLink href="#">Terms & conditions</FooterLink>
          <FooterLink href="#">Cancellation</FooterLink>
          <FooterLink href="#">Imprint</FooterLink>
        </div>

        {/* Others */}
        <div style={columnStyle}>
          <div style={sectionTitle}>Others</div>
                    <FooterLink href="/admin">Admin Login</FooterLink>
          <FooterLink href="/login">Agent Login</FooterLink>

          <FooterLink href="#">Our teams</FooterLink>
          <FooterLink href="#">Sustainability</FooterLink>
          <FooterLink href="#">Press</FooterLink>
          <FooterLink href="#">Jobs</FooterLink>
          <FooterLink href="#">Newsletter</FooterLink>
        </div>
      </div>

      <div style={copyrightStyle}>
        <span>© 2025 My Dream Homes</span>{' '}
        <span style={{ float: 'right' }}>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
