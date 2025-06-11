// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Header = () => {
// //   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
// //   const [hovered, setHovered] = useState('');
// //   const [user, setUser] = useState(null);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const handleResize = () => setIsMobile(window.innerWidth < 768);
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem('user');
// //     if (storedUser) {
// //       setUser(JSON.parse(storedUser));
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     navigate('/');
// //   };

// //   const isLoggedIn = !!user;
// //   const isAdmin = user?.isAdmin || false;

// //   const styles = {
// //     header: {
// //       backgroundColor: 'olive',
// //       position: 'fixed',
// //       top: 0,
// //       left: 0,
// //       right: 0,
// //       width: '100%',
// //       zIndex: 1000,
// //       padding: '0 4rem',
// //     },
// //     headerContainer: {
// //       display: 'flex',
// //       flexDirection: isMobile ? 'column' : 'row',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       padding: isMobile ? '1rem' : '1.5rem 0',
// //       gap: isMobile ? '1rem' : 0,
// //     },
// //     logo: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: '0.5rem',
// //       justifyContent: isMobile ? 'center' : 'flex-start',
// //     },
// //     logoImg: {
// //       height: isMobile ? '50px' : '70px',
// //     },
// //     logoText: {
// //       fontSize: isMobile ? '1.2rem' : '1.5rem',
// //     },
// //     navLinks: {
// //       display: 'flex',
// //       flexDirection: isMobile ? 'column' : 'row',
// //       alignItems: 'center',
// //       gap: isMobile ? '0.8rem' : '2rem',
// //       marginTop: isMobile ? '1rem' : 0,
// //     },
// //     navLink: {
// //       textDecoration: 'none',
// //       color: 'black',
// //       padding: '0.3rem 0',
// //       fontSize: isMobile ? '0.95rem' : '1rem',
// //       borderBottom: '2px solid transparent',
// //       transition: 'border-bottom 0.3s ease',
// //     },
// //     navLinkHovered: {
// //       textDecoration: 'none',
// //       color: 'black',
// //       padding: '0.3rem 0',
// //       fontSize: isMobile ? '0.95rem' : '1rem',
// //       borderBottom: '2px solid black',
// //       transition: 'border-bottom 0.3s ease',
// //     },
// //     buttonsContainer: {
// //       display: 'flex',
// //       flexDirection: isMobile ? 'column' : 'row',
// //       gap: isMobile ? '0.8rem' : '1rem',
// //       marginTop: isMobile ? '1rem' : 0,
// //       alignItems: 'center',
// //       marginRight: isMobile ? '1rem' : 80,
// //       position: 'relative',
// //     },
// //     button: {
// //       backgroundColor: 'black',
// //       color: 'white',
// //       padding: '0.5rem 1rem',
// //       borderRadius: '8px',
// //       cursor: 'pointer',
// //       width: isMobile ? '100%' : 'auto',
// //       border: 'none',
// //       fontSize: '1rem',
// //     },
// //     link: {
// //       textDecoration: 'none',
// //     },
// //     dropdown: {
// //       position: 'absolute',
// //       top: '120%',
// //       right: 0,
// //       backgroundColor: 'white',
// //       border: '1px solid #ccc',
// //       borderRadius: '6px',
// //       boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
// //       padding: '0.5rem 1rem',
// //       zIndex: 999,
// //       minWidth: '150px',
// //     },
// //     dropdownItem: {
// //       padding: '0.4rem 0',
// //       cursor: 'pointer',
// //       fontSize: '0.95rem',
// //       borderBottom: '1px solid #eee',
// //     },
// //   };

// //   return (
// //     <div style={styles.header}>
// //       <div style={styles.headerContainer}>
// //         {/* Logo */}
// //         <div style={styles.logo}>
// //           <img src="/home.png" alt="Homes" style={styles.logoImg} />
// //           <strong style={styles.logoText}>My Dream Home</strong>
// //         </div>

// //         {/* Nav Links */}
// //         <div style={styles.navLinks}>
// //           {['Home', 'Listing', 'Contact', 'Add Property'].map((item, idx) => {
// //             const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`;
// //             return (
// //               <Link
// //                 key={idx}
// //                 to={path}
// //                 style={hovered === item ? styles.navLinkHovered : styles.navLink}
// //                 onMouseEnter={() => setHovered(item)}
// //                 onMouseLeave={() => setHovered('')}
// //               >
// //                 {item}
// //               </Link>
// //             );
// //           })}
// //         </div>

// //         {/* Buttons / User Dropdown */}
// //         <div style={styles.buttonsContainer}>
// //           {isLoggedIn ? (
// //             <>
// //               <button
// //                 onClick={() => setDropdownOpen(!dropdownOpen)}
// //                 style={styles.button}
// //                 aria-haspopup="true"
// //                 aria-expanded={dropdownOpen}
// //               >
// //                 {user.name} ▼
// //               </button>
// //               {dropdownOpen && (
// //                 <div style={styles.dropdown}>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/profile'); }}>
// //                     Profile
// //                   </div>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/favourites'); }}>
// //                     Favourites
// //                   </div>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/bookings'); }}>
// //                     Bookings
// //                   </div>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/my-testimonial'); }}>
// //                     My Testimonials
// //                   </div>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/post-testimonial'); }}>
// //                     Post Testimonials
// //                   </div>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); handleLogout(); }}>
// //                     Logout
// //                   </div>
// //                 </div>
// //               )}
// //             </>
// //           ) : (
// //             <>
// //               <Link to="/admin" style={styles.link}>
// //                 <button style={styles.button}>Admin Login</button>
// //               </Link>
// //               <Link to="/login" style={styles.link}>
// //                 <button style={styles.button}>Log In</button>
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header; 


// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Header = () => {
// //   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
// //   const [hovered, setHovered] = useState('');
// //   const [user, setUser] = useState(null);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const handleResize = () => setIsMobile(window.innerWidth < 768);
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem('user');
// //     if (storedUser) {
// //       setUser(JSON.parse(storedUser));
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     navigate('/');
// //   };

// //   const isLoggedIn = !!user;

// //   const styles = {
// //     header: {
// //       backgroundColor: 'olive',
// //       position: 'fixed',
// //       top: 0,
// //       left: 0,
// //       right: 0,
// //       width: '100%',
// //       zIndex: 1000,
// //       padding: '0.5rem 1rem',
// //     },
// //     headerContainer: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'space-between',
// //       flexWrap: 'wrap',
// //     },
// //     leftGroup: {
// //       display: 'flex',
// //       gap: '1rem',
// //       alignItems: 'center',
// //       flexWrap: 'wrap',
// //     },
// //     logo: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       flex: 1,
// //       paddingRight:'500px'
// //     },
// //     logoImg: {
// //       height: isMobile ? '50px' : '70px',
// //       marginRight: '1rem',
// //     },
// //     logoText: {
// //       fontSize: isMobile ? '1.2rem' : '1.8rem',
// //       fontWeight: 'bold',
// //       color: 'black',

// //     },
// //     navLink: {
// //       textDecoration: 'none',
// //       color: 'black',
// //       fontSize: '1rem',
// //       borderBottom: '2px solid transparent',
// //       transition: 'border-bottom 0.3s ease',
// //     },
// //     navLinkHovered: {
// //       textDecoration: 'none',
// //       color: 'black',
// //       fontSize: '1rem',
// //       borderBottom: '2px solid black',
// //       transition: 'border-bottom 0.3s ease',
// //     },
// //     button: {
// //       backgroundColor: 'black',
// //       color: 'white',
// //       padding: '0.5rem 1rem',
// //       borderRadius: '8px',
// //       cursor: 'pointer',
// //       border: 'none',
// //       fontSize: '1rem',
// //     },
// //     link: {
// //       textDecoration: 'none',
// //     },
// //     dropdownWrapper: {
// //       position: 'relative',
// //     },
// //     dropdown: {
// //       position: 'absolute',
// //       top: '100%',
// //       right: 0,
// //       backgroundColor: 'white',
// //       border: '1px solid #ccc',
// //       borderRadius: '6px',
// //       boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
// //       padding: '0.5rem 1rem',
// //       zIndex: 999,
// //       minWidth: '150px',
// //       marginTop: '0.5rem',
// //     },
// //     dropdownItem: {
// //       padding: '0.4rem 0',
// //       cursor: 'pointer',
// //       fontSize: '0.95rem',
// //       borderBottom: '1px solid #eee',
// //     },
// //     rightGroup: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: '1rem',
// //     },
// //   };

// //   return (
// //     <div style={styles.header}>
// //       <div style={styles.headerContainer}>
// //         <div style={styles.leftGroup}>
// //           {['Home', 'Listing', 'Contact', 'Add Property'].map((item, idx) => {
// //             const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`;
// //             return (
// //               <Link
// //                 key={idx}
// //                 to={path}
// //                 style={hovered === item ? styles.navLinkHovered : styles.navLink}
// //                 onMouseEnter={() => setHovered(item)}
// //                 onMouseLeave={() => setHovered('')}
// //               >
// //                 {item}
// //               </Link>
// //             );
// //           })}
// //           {!isLoggedIn && (
// //             <>
// //               <Link to="/admin" style={styles.link}>
// //                 <button style={styles.button}>Admin Login</button>
// //               </Link>
// //               <Link to="/login" style={styles.link}>
// //                 <button style={styles.button}>Log In</button>
// //               </Link>
// //             </>
// //           )}
// //         </div>

// //         <div style={styles.logo}>
// //           <img src="/home.png" alt="Homes" style={styles.logoImg} />
// //           <strong style={styles.logoText}>My Dream Home</strong>
// //         </div>

// //         {isLoggedIn && (
// //           <div style={styles.rightGroup}>
// //             <div style={styles.dropdownWrapper}>
// //               <button
// //                 onClick={() => setDropdownOpen(!dropdownOpen)}
// //                 style={styles.button}
// //               >
// //                 {user.name} ▼
// //               </button>
// //               {dropdownOpen && (
// //                 <div style={styles.dropdown}>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/profile'); }}>
// //                     Profile
// //                   </div>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/favourites'); }}>
// //                     Favourites
// //                   </div>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/bookings'); }}>
// //                     Bookings
// //                   </div>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/my-testimonial'); }}>
// //                     My Testimonials
// //                   </div>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/post-testimonial'); }}>
// //                     Post Testimonials
// //                   </div>
// //                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); handleLogout(); }}>
// //                     Logout
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hovered, setHovered] = useState('');
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setDropdownOpen(false);
    navigate('/');
  };

  const isLoggedIn = !!user;
  const isBroker = user?.role === 'broker';

  const styles = {
    header: {
      background:
        'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1000,
      padding: isMobile ? '0.8rem 1rem' : '1rem 3rem',
      boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      userSelect: 'none',
    },
    headerContainer: {
      maxWidth: 1200,
      // margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    leftGroup: {
      display: 'flex',
      gap: isMobile ? '0.8rem' : '1.5rem',
      alignItems: 'center',
      flexWrap: 'wrap',
      flex: 1,
      minWidth: isMobile ? 'auto' : '300px',
      paddingRight: '60px'
    },
logo: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: isMobile ? '0 0 auto' : '0 0 auto', // keep it from growing unnecessarily
  cursor: 'pointer',
  color: 'white',
  textShadow: '0 0 5px rgba(0,0,0,0.4)',
  marginRight: isMobile ? '1rem' : '3rem', // ✅ smaller gap
},
    logoImg: {
      height: isMobile ? '45px' : '70px',
      filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))',
    },
logoText: {
  fontSize: isMobile ? '1rem' : '2rem',
  fontWeight: '900',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  fontFamily: "'Poppins', sans-serif",
  userSelect: 'none',
  display: 'inline-flex', // ✅ fix: was `flex-inline`, which is invalid
  alignItems: 'center',
  marginLeft: '0.5rem',
}
,
    navLink: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: isMobile ? '1rem' : '1.15rem',
      textDecoration: 'none',
      padding: '0.25rem 0',
      borderBottom: '2px solid transparent',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    navLinkHovered: {
      color: '#ffebcd',
      borderBottom: '2.5px solid #ffebcd',
      textShadow: '0 0 8px #ffebcd',
      transition: 'all 0.3s ease',
    },
    button: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: 'Black',
      padding: isMobile ? '0.55rem 1rem' : '0.7rem 1.3rem',
      borderRadius: '30px',
      cursor: 'pointer',
      border: '2px solid #3a1c71',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '700',
      boxShadow: '0 0 15px #ffaf7b',
      backdropFilter: 'blur(8px)',
      transition: 'all 0.3s ease',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    },
    buttonHover: {
      backgroundColor: 'white',
      color: '#3a1c71',
      border: '2px solid #3a1c71',
      boxShadow: '0 0 15px #ffaf7b',
      transition: 'all 0.3s ease',
    },
    link: {
      textDecoration: 'none',
    },
    dropdownWrapper: {
      position: 'relative',
      userSelect: 'none',
    },
    dropdownBtn: {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      color: 'white',
      padding: isMobile ? '0.55rem 1.3rem' : '0.7rem 1.8rem',
      borderRadius: '30px',
      cursor: 'pointer',
      border: '2px solid transparent',
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '700',
      boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      transition: 'all 0.3s ease',
    },
    dropdownBtnOpen: {
      backgroundColor: 'white',
      color: '#3a1c71',
      border: '2px solid #3a1c71',
      boxShadow: '0 0 15px #ffaf7b',
    },
    dropdown: {
      position: 'absolute',
      top: 'calc(100% + 12px)',
      right: 0,
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
      padding: '1rem 0',
      minWidth: '180px',
      zIndex: 1100,
      userSelect: 'none',
    },
    dropdownItem: {
      padding: '0.65rem 1.5rem',
      cursor: 'pointer',
      fontSize: '1rem',
      color: '#333',
      fontWeight: '600',
      transition: 'background-color 0.25s ease',
      whiteSpace: 'nowrap',
    },
    dropdownItemHover: {
      backgroundColor: '#ffaf7b',
      color: 'white',
    },
rightGroup: {
  display: 'flex',
  alignItems: 'center',
  gap: isMobile ? '0.7rem' : '1.2rem',
  flexShrink: 0,
  marginLeft: 'auto', // ✅ Pushes group to the right
}
  };

  // Manage hover states for dropdown items
  const [dropdownHoverIndex, setDropdownHoverIndex] = useState(null);

  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        {/* Left Nav Links */}
        <nav style={styles.leftGroup}>
          {['Home', 'Listing', 'Contact', 'Lead'].map((item, idx) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`;
            return (
              <Link
                key={idx}
                to={path}
                style={hovered === item ? styles.navLinkHovered : styles.navLink}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered('')}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Logo */}
        <div
          style={styles.logo}
          onClick={() => navigate('/')}
          title="Go to Home"
          role="button"
          tabIndex={0}
          onKeyPress={e => (e.key === 'Enter' ? navigate('/') : null)}
        >
          <img src="/home.png" alt="Homes Logo" style={styles.logoImg} />
          <strong style={styles.logoText}>My Dream Home</strong>
        </div>

        {/* Right Side Buttons or User Dropdown */}
        <div style={styles.rightGroup}>
          {!isLoggedIn || isBroker ? (
            <>
              <Link to="/admin" style={styles.link}>
                <button
                  style={styles.button}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
                >
                  Admin Login
                </button>
              </Link>
              <Link to="/login" style={styles.link}>
                <button
                  style={styles.button}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
                >
                  Log In
                </button>
              </Link>
            </>
          ) : (
            <div style={styles.dropdownWrapper} ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  ...styles.dropdownBtn,
                  ...(dropdownOpen ? styles.dropdownBtnOpen : {}),
                }}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                {user.name} <span style={{ fontSize: '0.7rem' }}>▼</span>
              </button>
              {dropdownOpen && (
                <div style={styles.dropdown} role="menu">
                  {[
                    { label: 'Profile', path: '/profile' },
                    { label: 'Favourites', path: '/favourites' },
                    { label: 'Bookings', path: '/my-bookings' },
                    { label: 'My Testimonials', path: '/my-testimonial' },
                    { label: 'Post Testimonials', path: '/post-testimonial' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.dropdownItem,
                        ...(dropdownHoverIndex === index ? styles.dropdownItemHover : {}),
                      }}
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate(item.path);
                      }}
                      onMouseEnter={() => setDropdownHoverIndex(index)}
                      onMouseLeave={() => setDropdownHoverIndex(null)}
                      role="menuitem"
                      tabIndex={0}
                      onKeyPress={e => (e.key === 'Enter' ? navigate(item.path) : null)}
                    >
                      {item.label}
                    </div>
                  ))}
                  <div
                    style={{
                      ...styles.dropdownItem,
                      color: '#d9534f',
                      fontWeight: '700',
                      borderTop: '1px solid #eee',
                      marginTop: '0.5rem',
                    }}
                    onClick={handleLogout}
                    onMouseEnter={() => setDropdownHoverIndex('logout')}
                    onMouseLeave={() => setDropdownHoverIndex(null)}
                    role="menuitem"
                    tabIndex={0}
                    onKeyPress={e => (e.key === 'Enter' ? handleLogout() : null)}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [hovered, setHovered] = useState('');
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/');
//   };

//   const isLoggedIn = !!user;
//   const role = user?.role;

//   const styles = {
//     header: {
//       backgroundColor: '#f4cbbf',
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       width: '100%',
//       zIndex: 1000,
//       padding: '0.5rem 1rem',
//     },
//     headerContainer: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       flexWrap: 'wrap',
//     },
//     leftGroup: {
//       display: 'flex',
//       gap: '1rem',
//       alignItems: 'center',
//       flexWrap: 'wrap',
//     },
//     logo: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       flex: 1,
//     },
//     logoImg: {
//       height: isMobile ? '50px' : '70px',
//       marginRight: '1rem',
//     },
//     logoText: {
//       fontSize: isMobile ? '1.2rem' : '1.8rem',
//       fontWeight: 'bold',
//       color: 'black',
//     },
//     navLink: {
//       textDecoration: 'none',
//       color: 'black',
//       fontSize: '1.2rem',
//       borderBottom: '2px solid transparent',
//       transition: 'border-bottom 0.3s ease',
//     },
//     navLinkHovered: {
//       textDecoration: 'none',
//       color: 'black',
//       fontSize: '1.2rem',
//       borderBottom: '2px solid black',
//       transition: 'border-bottom 0.3s ease',
//     },
//     button: {
//       backgroundColor: 'black',
//       color: 'white',
//       padding: '1rem',
//       borderRadius: '8px',
//       cursor: 'pointer',
//       border: 'none',
//       fontSize: '1rem',
//       marginRight: '50px',
//     },
//     link: {
//       textDecoration: 'none',
//     },
//     dropdownWrapper: {
//       position: 'relative',
//     },
//     dropdown: {
//       position: 'absolute',
//       top: '100%',
//       right: 0,
//       backgroundColor: 'white',
//       border: '1px solid #ccc',
//       borderRadius: '6px',
//       boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//       padding: '0.5rem 1rem',
//       zIndex: 999,
//       minWidth: '150px',
//       marginTop: '0.5rem',
//     },
//     dropdownItem: {
//       padding: '0.4rem 0',
//       cursor: 'pointer',
//       fontSize: '0.95rem',
//       borderBottom: '1px solid #eee',
//     },
//     rightGroup: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '1rem',
//     },
//   };

//   return (
//     <div style={styles.header}>
//       <div style={styles.headerContainer}>
//         <div style={styles.leftGroup}>
//           {['Home', 'Listing', 'Contact', 'Lead'].map((item, idx) => {
//             const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`;
//             return (
//               <Link
//                 key={idx}
//                 to={path}
//                 style={hovered === item ? styles.navLinkHovered : styles.navLink}
//                 onMouseEnter={() => setHovered(item)}
//                 onMouseLeave={() => setHovered('')}
//               >
//                 {item}
//               </Link>
//             );
//           })}
//         </div>

//         <div style={styles.logo}>
//           <img src="/home.png" alt="Homes" style={styles.logoImg} />
//           <strong style={styles.logoText}>My Dream Home</strong>
//         </div>

//         <div style={styles.rightGroup}>
//           {!isLoggedIn ? (
//             <>
//               <Link to="/admin" style={styles.link}>
//                 <button style={styles.button}>Admin Login</button>
//               </Link>
//               <Link to="/login" style={styles.link}>
//                 <button style={styles.button}>User Login</button>
//               </Link>
//             </>
//           ) : (
//             <div style={styles.dropdownWrapper}>
//               <button onClick={() => setDropdownOpen(!dropdownOpen)} style={styles.button}>
//                 {user.name} ({role}) ▼
//               </button>
//               {dropdownOpen && (
//                 <div style={styles.dropdown}>
//                   {role === 'user' && (
//                     <>
//                       <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/profile'); }}>
//                         Profile
//                       </div>
//                       <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/favourites'); }}>
//                         Favourites
//                       </div>
//                       <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/my-bookings'); }}>
//                         Bookings
//                       </div>
//                       <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/my-testimonial'); }}>
//                         My Testimonials
//                       </div>
//                       <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/post-testimonial'); }}>
//                         Post Testimonials
//                       </div>
//                     </>
//                   )}
//                   {role === 'admin' && (
//                     <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/admin/dashboard'); }}>
//                       Admin Dashboard
//                     </div>
//                   )}
//                   {role === 'broker' && (
//                     <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); navigate('/broker/dashboard'); }}>
//                       Broker Dashboard
//                     </div>
//                   )}
//                   <div style={styles.dropdownItem} onClick={() => { setDropdownOpen(false); handleLogout(); }}>
//                     Logout
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


