import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { LiaCertificateSolid } from 'react-icons/lia';

const Achievements = () => {
  const [isVisible, setVisible] = useState(false);

  const statistics = [
    { label: "Happy Clients", value: 12 },
    { label: "Different Cities", value: 3 },
    { label: "Projects Completed", value: 45 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const visible = top < window.innerHeight - 100;
        setVisible(visible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      style={{
        display: 'flex',
        width: '100%',
        minHeight: '400px',
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: 3,
          backgroundColor: '#CBAD7F',
          color: '#fff',
          padding: '60px 40px',
        }}
      >
        <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px' }}>
          Our Achievements
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '40px', maxWidth: '700px', lineHeight: '1.6' }}>
          At My Dream Homes, we’ve helped hundreds of families find their ideal homes. With a growing portfolio of premium properties, a 98% customer satisfaction rate, and recognition as a trusted name in real estate, we take pride in our journey and the dreams we've fulfilled.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '60px',
            flexWrap: 'wrap',
          }}
        >
          {statistics.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '40px', fontWeight: '600' }}>
                {isVisible && <CountUp start={0} end={stat.value} duration={2} />}k+
              </h3>
              <p style={{ fontSize: '16px' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#f2f4d6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <LiaCertificateSolid size={40} color="#000" />
        <p
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            marginTop: '20px',
            color: '#000',
            fontSize: '16px',
            textAlign: 'center',
            maxHeight: '300px',
          }}
        >
          Certified for excellence in property services — delivering trust, transparency, and satisfaction in every deal.
        </p>
      </div>
    </section>
  );
};

export default Achievements;
