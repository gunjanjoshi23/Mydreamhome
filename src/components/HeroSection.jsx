import React from 'react';

const HeroSection = ({ isMobile }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '100px',
        gap: isMobile ? '2rem' : '4rem',
        padding: isMobile ? '40px 20px' : '80px 80px 120px 80px',
        background: 'linear-gradient(135deg, #004d40 0%, #008274 70%, #00bfa5 100%)',
        borderRadius: '1.5rem',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        color: '#e0f2f1',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: 'relative',
        overflow: 'hidden',
        
      }}
    >
      {/* Left Content */}
      <div style={{ maxWidth: isMobile ? '100%' : '600px' }}>
        <h1
          style={{
            fontSize: isMobile ? '2.4rem' : '3.8rem',
            fontWeight: '900',
            marginBottom: '1rem',
            lineHeight: 1.1,
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          Discover Your Dream
          <br />
          Property Today
        </h1>

        <p
          style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            marginBottom: '2rem',
            color: 'rgba(224, 242, 241, 0.85)',
            fontWeight: '500',
            lineHeight: 1.5,
            maxWidth: '480px',
            textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
          }}
        >
          Whether buying, selling, or exploring, we guide you every step toward your perfect home.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.2rem',
            marginBottom: isMobile ? '4rem' : '6rem',
          }}
        >
          <button
            style={{
              backgroundColor: '#fff',
              border: 'none',
              color: '#00796b',
              fontWeight: '700',
              padding: '0.75rem 1.8rem',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(0, 121, 107, 0.4)',
              transition: 'all 0.3s ease',
              flex: isMobile ? '1 1 100%' : 'unset',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b2dfdb')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            10% OFF On All Properties
          </button>

          <button
            style={{
              backgroundColor: '#004d40',
              border: '2px solid #00bfa5',
              color: '#00bfa5',
              fontWeight: '700',
              padding: '0.75rem 1.8rem',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(0, 191, 165, 0.5)',
              transition: 'all 0.3s ease',
              flex: isMobile ? '1 1 100%' : 'unset',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#00bfa5';
              e.currentTarget.style.color = '#004d40';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#004d40';
              e.currentTarget.style.color = '#00bfa5';
            }}
          >
            Explore
          </button>
        </div>

        {/* User avatars and reviews */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            {['/OIP (1).jpeg', '/vector-users-icon.jpg', '/user-icon-7.jpg', '/OIP.jpeg', '/vector-users-icon.jpg'].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="user"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '2.5px solid #004d40',
                    objectFit: 'cover',
                    position: 'relative',
                    left: `-${i * 14}px`,
                    boxShadow: '0 0 6px rgba(0,0,0,0.3)',
                    backgroundColor: '#e0f2f1',
                    zIndex: 10 - i,
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.2)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              )
            )}
            <div
              style={{
                width: '42px',
                height: '42px',
                backgroundColor: '#004d40',
                borderRadius: '50%',
                marginLeft: '-14px',
                color: '#a7ffeb',
                fontWeight: '900',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 6px rgba(0,0,0,0.4)',
                position: 'relative',
                left: `-${5 * 14}px`,
                userSelect: 'none',
              }}
              title="More users"
            >
              210K+
            </div>
          </div>

          <div style={{ color: '#b2dfdb', lineHeight: 1.4, maxWidth: isMobile ? '100%' : '350px' }}>
            <p
              style={{
                fontWeight: '700',
                fontSize: isMobile ? '1rem' : '1.2rem',
                margin: '0 0 6px 0',
              }}
            >
              People successfully got their dream homes
            </p>
            <p style={{ margin: '0 0 4px 0', fontSize: '1rem', color: '#a7ffeb' }}>⭐⭐⭐⭐⭐</p>
            <p
              style={{
                margin: 0,
                fontWeight: '600',
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#a7ffeb',
              }}
            >
              127k Excellent Reviews
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <img
        src="https://is1-3.housingcdn.com/4f2250e8/c8072369f0f7294ed7e8d1c8efeeb76f/v0/fs/my_home_dreams-nagondanahalli-bengaluru-my_home_infra_project.jpeg"
        alt="house"
        style={{
          width: isMobile ? '100%' : '45%',
          borderRadius: '1.5rem',
          objectFit: 'cover',
          boxShadow: '0 15px 30px rgba(0,0,0,0.35)',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </div>
  );
};

export default HeroSection;
