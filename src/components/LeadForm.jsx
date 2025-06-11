import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const LeadForm = () => {
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: ''
  });

  const handleChange = (e) => {
    setLeadData({ ...leadData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5500/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      });

      const data = await res.json();
      alert(data.message || 'Lead submitted!');
      setLeadData({ name: '', email: '', phone: '', interest: '' });
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to submit lead');
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          backgroundImage: `url('https://images4.alphacoders.com/829/thumb-1920-829688.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          marginTop: '110px',
        }}
      >
        <div style={{ flex: 1, padding: '60px' }}>
          <h1 style={{ fontSize: '38px', fontWeight: 'bold' }}>
            Ready to take the next step?
            <br />
            Share your interest with us!
          </h1>
          <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              <div
                style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#00d084',
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: '30px',
                  marginRight: '15px',
                }}
              >
                01
              </div>
              <div>
                <h4 style={{ margin: 0, color: '#00d084' }}>Connect With Us</h4>
                <p>We help you explore the best real estate deals that match your needs.</p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  border: '2px solid #00d084',
                  color: '#00d084',
                  textAlign: 'center',
                  lineHeight: '26px',
                  marginRight: '15px',
                }}
              >
                02
              </div>
              <div>
                <h4 style={{ margin: 0, color: '#00d084' }}>Tailored Solutions</h4>
                <p>Let us know what you're looking for, and we'll guide you through it.</p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: 'teal',
            margin: '60px',
            borderRadius: '10px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>REQUEST A CALLBACK</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="*Your Name"
              required
              value={leadData.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="*Your Email"
              required
              value={leadData.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={leadData.phone}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="interest"
              placeholder="Tell us what you're looking for"
              value={leadData.interest}
              onChange={handleChange}
              rows={4}
              style={{ ...inputStyle, resize: 'none' }}
            />
            <button type="submit" style={buttonStyle}>SUBMIT</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: '500',
  color: '#333',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#0d1b2a',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '16px',
};

export default LeadForm;
