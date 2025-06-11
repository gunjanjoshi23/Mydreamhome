import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ProfileUpdate = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    city: '',
    country: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [btnHover, setBtnHover] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/user/profile', {
          withCredentials: true,
        });
        setForm({
          name: res.data.name || '',
          email: res.data.email || '',
          contact: res.data.contact || '',
          city: res.data.city || '',
          country: res.data.country || '',
        });
      } catch (err) {
        setError('Failed to load profile');
      }
    };
    fetchProfile();
  }, []);

  const handleFocus = (name) => setFocusedInput(name);
  const handleBlur = () => setFocusedInput(null);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const res = await axios.put('http://localhost:5500/api/user/profile', form, {
        withCredentials: true,
      });
      setSuccess(res.data.message || 'Profile updated successfully.');
    } catch (err) {
      setError(err.response?.data?.message || 'Update failed');
    }
    setLoading(false);
  };

  const styles = {
    pageWrapper: {
      fontFamily: 'Segoe UI, sans-serif',
      background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)',
      minHeight: '100vh',
      paddingTop: '100px',
      color: '#333',
      paddingBottom: '40px',
    },
    banner: {
      width: "100%",
      textAlign: "center",
      padding: "60px 20px",
      color: "#fff",
      backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1470&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginBottom: '40px',
      fontSize: '36px',
      fontWeight: 'bold',
      letterSpacing: '2px',
      textShadow: '2px 2px 5px rgba(0,0,0,0.6)',
      borderRadius: '10px',
    },
    layout: {
      display: "flex",
      flexWrap: "wrap",
      width: "85%",
      margin: "0 auto",
      gap: "20px",
      justifyContent: 'center',
    },
    sidebar: {
      width: "250px",
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    sidebarItem: {
      padding: "12px 0",
      borderBottom: "1px solid #eee",
    },
    sidebarLink: {
      textDecoration: "none",
      color: "#444",
      fontWeight: "bold",
      display: "block",
      transition: "color 0.3s",
    },
    container: {
      flex: 1,
      minWidth: '300px',
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
      backdropFilter: 'blur(8px)',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      marginBottom: '20px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '16px',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    inputFocus: {
      borderColor: '#a3834f',
      boxShadow: '0 0 6px rgba(163, 131, 79, 0.4)',
      backgroundColor: '#fffaf3',
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#a3834f',
      color: '#fff',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#876c3b',
    },
    error: {
      color: '#dc3545',
      marginBottom: '20px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    success: {
      color: '#28a745',
      marginBottom: '20px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  };

  return (
    <>
      <Header />
      <div style={styles.pageWrapper}>
        <div style={styles.banner}>Update Your Profile</div>

        <div style={styles.layout}>
          <div style={styles.sidebar}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={styles.sidebarItem}><Link to="/my-bookings" style={styles.sidebarLink}>My Bookings</Link></li>
              <li style={styles.sidebarItem}><Link to="/profile-update" style={styles.sidebarLink}>Profile Update</Link></li>
              <li style={styles.sidebarItem}><Link to="/favourites" style={styles.sidebarLink}>My Favorites</Link></li>
              <li style={styles.sidebarItem}><Link to="/post-testimonial" style={styles.sidebarLink}>Post a Testimonial</Link></li>
              <li style={styles.sidebarItem}><Link to="/my-testimonial" style={styles.sidebarLink}>My Testimonials</Link></li>
            </ul>
          </div>

          <div style={styles.container}>
            <h2 style={styles.heading}>Update Profile</h2>
            <form onSubmit={handleSubmit}>
              {['name', 'email', 'contact', 'city', 'country'].map((field) => (
                <input
                  key={field}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={form[field]}
                  onChange={handleChange}
                  onFocus={() => handleFocus(field)}
                  onBlur={handleBlur}
                  required
                  style={{
                    ...styles.input,
                    ...(focusedInput === field ? styles.inputFocus : {}),
                  }}
                />
              ))}

              {error && <p style={styles.error}>{error}</p>}
              {success && <p style={styles.success}>{success}</p>}

              <button
                type="submit"
                style={{
                  ...styles.button,
                  ...(btnHover ? styles.buttonHover : {})
                }}
                disabled={loading}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
              >
                {loading ? 'Updating...' : 'Update Profile'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileUpdate;
