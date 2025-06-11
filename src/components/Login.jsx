  // import React, { useState } from 'react';
  // import axios from 'axios';
  // import { useNavigate } from 'react-router-dom';


  // const Login = () => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [error, setError] = useState('');
  //   const navigate = useNavigate();


  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const res = await axios.post('http://localhost:5500/api/login', { email, password }, { withCredentials: true });
  //       const user = res.data.user;
  //       localStorage.setItem('user', JSON.stringify(user));
  //       alert('Login successful');
  //       navigate('/');
  //     } catch (err) {
  //       setError('Invalid email or password');
  //     }
  //   };

  //   return (
  //     <div style={styles.container}>
  //       <div style={styles.card}>
  //         <img
  //           src="https://cdn.auth0.com/quantum-assets/dist/latest/logos/auth0/auth0-icon-onlight.svg"
  //           alt="logo"
  //           style={{ width: '50px', marginBottom: 20 }}
  //         />
  //         <h2>Welcome</h2>
  //         <p style={styles.subText}>Log in to My Dream Home</p>

  //         <form onSubmit={handleLogin} style={styles.form}>
  //           <input
  //             type="email"
  //             placeholder="Email address*"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             required
  //             style={styles.input}
  //           />
  //           <input
  //             type="password"
  //             placeholder="Password*"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             required
  //             style={styles.input}
  //           />
  //           <div style={styles.forgot}>
  //             <a href="/forgot-password" style={styles.link}>Forgot password?</a>
  //           </div>
  //           {error && <p style={styles.error}>{error}</p>}
  //           <button type="submit" style={styles.button}>Continue</button>
  //         </form>

  //         <p style={styles.signupText}>Don't have an account? <a href="/signup" style={styles.link}>Sign up</a></p>

  //         <div style={styles.orContainer}>
  //           <hr style={styles.hr} /><span style={styles.or}>OR</span><hr style={styles.hr} />
  //         </div>

  //         <a href="http://localhost:2300/auth/google" style={{ ...styles.googleBtn, textDecoration: 'none', color: '#000' }}>
  //           <img
  //             src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E"
  //             alt="Google"
  //             style={{ width: 20, marginRight: 10 }}
  //           />
  //           Continue with Google
  //         </a>

  //         <a href="/" style={{ ...styles.link, display: 'block', marginBottom: '1rem',marginTop: '2rem' }}>← Back to Home</a>

  //       </div>
  //     </div>
  //   );
  // };

  // const styles = {
  //     container: {
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       height: '100vh',
  //       backgroundColor: 'purple',
  //       padding: '0 10px', // Add padding to prevent overflow on small screens
  //     },
  //     card: {
  //       backgroundColor: 'white',
  //       padding: '2rem',
  //       borderRadius: 8,
  //       boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  //       textAlign: 'center',
  //       maxWidth: '400px',
  //       width: '100%',
  //     },
  //     form: {
  //       display: 'flex',
  //       flexDirection: 'column',
  //       gap: '1rem',
  //     },
  //     input: {
  //       padding: '0.8rem',
  //       borderRadius: 4,
  //       border: '1px solid #ccc',
  //       fontSize: '1rem',
  //     },
  //     button: {
  //       backgroundColor: '#0057ff',
  //       color: 'white',
  //       padding: '0.8rem',
  //       border: 'none',
  //       borderRadius: 4,
  //       fontSize: '1rem',
  //       cursor: 'pointer',
  //     },
  //     link: {
  //       color: '#0057ff',
  //       textDecoration: 'none',
  //     },
  //     forgot: {
  //       textAlign: 'right',
  //     },
  //     signupText: {
  //       marginTop: '1rem',
  //     },
  //     orContainer: {
  //       display: 'flex',
  //       alignItems: 'center',
  //       gap: '0.5rem',
  //       margin: '1rem 0',
  //     },
  //     or: {
  //       fontSize: '0.9rem',
  //       color: '#aaa',
  //     },
  //     hr: {
  //       flex: 1,
  //       border: 'none',
  //       borderBottom: '1px solid #ccc',
  //     },
  //     googleBtn: {
  //       backgroundColor: '#fff',
  //       border: '1px solid #ccc',
  //       padding: '0.7rem',
  //       borderRadius: 4,
  //       cursor: 'pointer',
  //       display: 'flex',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //     },
  //     error: {
  //       color: 'red',
  //       fontSize: '0.9rem',
  //     },
  //     subText: {
  //       fontSize: '0.9rem',
  //       color: '#555',
  //     },
    
  //     // Responsive styles
  //     '@media (max-width: 768px)': {
  //       card: {
  //         padding: '1rem',
  //         maxWidth: '90%', // Allow form to take up more space on small screens
  //       },
  //       input: {
  //         padding: '0.6rem',
  //         fontSize: '0.9rem',
  //       },
  //       button: {
  //         padding: '0.6rem',
  //         fontSize: '0.9rem',
  //       },
  //       googleBtn: {
  //         padding: '0.6rem',
  //       },
  //     },
  //   };
    
  // export default Login;


//   import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5500/api/login', { email, password }, { withCredentials: true });
//       const user = res.data.user;
//       localStorage.setItem('user', JSON.stringify(user));
//       alert('Login successful');
//       navigate('/');
//     } catch (err) {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.wrapper}>
//         <div style={styles.card}>
//           <h2>Welcome</h2>
//           <p style={styles.subText}>Log in to My Dream Home</p>

//           <form onSubmit={handleLogin} style={styles.form}>
//             <input
//               type="email"
//               placeholder="Email address*"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password*"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={styles.input}
//             />
//             <div style={styles.forgot}>
//               <a href="/forgot-password" style={styles.link}>Forgot password?</a>
//             </div>
//             {error && <p style={styles.error}>{error}</p>}
//             <button type="submit" style={styles.button}>Continue</button>
//           </form>

//           <p style={styles.signupText}>Don't have an account? <a href="/signup" style={styles.link}>Sign up</a></p>

//           <div style={styles.orContainer}>
//             <hr style={styles.hr} /><span style={styles.or}>OR</span><hr style={styles.hr} />
//           </div>

//           <a href="http://localhost:2300/auth/google" style={{ ...styles.googleBtn, textDecoration: 'none', color: '#000' }}>
//             <img
//               src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23EA4335' d='M24 9.5c3.5 0 6.3 1.2 8.3 3.1l6.2-6.2C34.5 2.8 29.7 1 24 1 14.6 1 6.7 6.7 3.2 15.3l7.2 5.6C12.3 14.8 17.7 9.5 24 9.5z'/%3E%3Cpath fill='%234285F4' d='M46.1 24.5c0-1.7-.2-3.4-.6-5H24v9.5h12.4c-1.3 3.6-4.2 6.5-8.1 8.1l6.3 4.9C41.7 38.1 46.1 31.9 46.1 24.5z'/%3E%3Cpath fill='%23FBBC05' d='M10.4 28.4c-.9-2.6-.9-5.4 0-8l-7.2-5.6C.6 20.5.6 27.6 3.2 33.6l7.2-5.2z'/%3E%3Cpath fill='%2334A853' d='M24 46c6.6 0 12.1-2.2 16.1-5.9l-6.3-4.9C31.3 37.2 27.8 38.5 24 38.5c-6.3 0-11.7-5.3-13.5-12.7l-7.3 5.3C6.7 41.3 14.6 46 24 46z'/%3E%3C/svg%3E"
//               alt="Google"
//               style={{ width: 20, marginRight: 10 }}
//             />
//             Continue with Google
//           </a>

//           <a href="/" style={{ ...styles.link, display: 'block', marginBottom: '1rem', marginTop: '2rem' }}>← Back to Home</a>
//         </div>

//         <div style={styles.imageSection}>
//           <img
//             src="https://thumbs.dreamstime.com/b/residential-real-estate-buying-selling-renting-homes-apartments-condos-townhouses-investment-shelter-expert-guidance-318813833.jpg"
//             alt="Dream Home"
//             style={styles.image}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: 'purple',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '0 10px',
//   },
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     boxShadow: '0 0 15px rgba(0,0,0,0.2)',
//     overflow: 'hidden',
//     maxWidth: 900,
//     width: '100%',
//   },
//   card: {
//     flex: 1,
//     padding: '2rem',
//     textAlign: 'center',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem',
//   },
//   input: {
//     padding: '0.8rem',
//     borderRadius: 4,
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//   },
//   button: {
//     backgroundColor: '#0057ff',
//     color: 'white',
//     padding: '0.8rem',
//     border: 'none',
//     borderRadius: 4,
//     fontSize: '1rem',
//     cursor: 'pointer',
//   },
//   link: {
//     color: '#0057ff',
//     textDecoration: 'none',
//   },
//   forgot: {
//     textAlign: 'right',
//   },
//   signupText: {
//     marginTop: '1rem',
//   },
//   orContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     margin: '1rem 0',
//   },
//   or: {
//     fontSize: '0.9rem',
//     color: '#aaa',
//   },
//   hr: {
//     flex: 1,
//     border: 'none',
//     borderBottom: '1px solid #ccc',
//   },
//   googleBtn: {
//     backgroundColor: '#fff',
//     border: '1px solid #ccc',
//     padding: '0.7rem',
//     borderRadius: 4,
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   error: {
//     color: 'red',
//     fontSize: '0.9rem',
//   },
//   subText: {
//     fontSize: '0.9rem',
//     color: '#555',
//   },
//   imageSection: {
//   flex: 1,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#f4f4f4',
//   padding: '2rem',
//   // maxHeight: '100%',
//   overflow: 'hidden',
// },

// image: {
//   width: '100%',
//   height: '100%',
//   objectFit: 'contain', // maintains aspect ratio while fitting container
//   maxHeight: '400px',
//     backgroundSize: 'cover',
//   backgroundPosition: 'center',

// },

// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [roleType, setRoleType] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:5500/api/login',
        { email, password, roleType },
        { withCredentials: true }
      );

      const user = res.data.user;
      if (!user) {
        setError('Login failed: User data missing');
        setLoading(false);
        return;
      }

      localStorage.setItem('user', JSON.stringify(user));
      alert('Login successful');

      const role = user.role ? user.role.toLowerCase().trim() : '';

      if (role === 'broker') {
        navigate('/broker-dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Welcome</h2>
          <p style={styles.subText}>Log in to My Dream Home</p>

          <div role="radiogroup" aria-label="Select role" style={styles.roleSelector}>
            <label style={styles.roleLabel}>
              <input
                type="radio"
                name="roleType"
                value="user"
                checked={roleType === 'user'}
                onChange={() => setRoleType('user')}
                style={styles.radioInput}
                aria-checked={roleType === 'user'}
              />
              User
            </label>
            <label style={styles.roleLabel}>
              <input
                type="radio"
                name="roleType"
                value="broker"
                checked={roleType === 'broker'}
                onChange={() => setRoleType('broker')}
                style={styles.radioInput}
                aria-checked={roleType === 'broker'}
              />
              Agent
            </label>
          </div>

          <form onSubmit={handleLogin} style={styles.form} noValidate>
            <input
              type="email"
              placeholder="Email address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
              aria-label="Email address"
              autoComplete="email"
            />
            <input
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
              aria-label="Password"
              autoComplete="current-password"
            />
            <div style={styles.forgot}>
              <a href="/forgot-password" style={styles.link}>
                Forgot password?
              </a>
            </div>
            {error && <p style={styles.error}>{error}</p>}
            <button
              type="submit"
              style={{
                ...styles.button,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
                position: 'relative',
              }}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <span style={styles.spinner} aria-hidden="true"></span>
              ) : (
                'Continue'
              )}
            </button>
          </form>

          <p style={styles.signupText}>
            Don't have an account?{' '}
            <a href="/signup" style={styles.link}>
              Sign up
            </a>
          </p>

          <div style={styles.orContainer}>
            <hr style={styles.hr} />
            <span style={styles.or}>OR</span>
            <hr style={styles.hr} />
          </div>

          <a
            href="http://localhost:2300/auth/google"
            style={{ ...styles.googleBtn, textDecoration: 'none', color: '#000' }}
          >
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23EA4335' d='M24 9.5c3.5 0 6.3 1.2 8.3 3.1l6.2-6.2C34.5 2.8 29.7 1 24 1 14.6 1 6.7 6.7 3.2 15.3l7.2 5.6C12.3 14.8 17.7 9.5 24 9.5z'/%3E%3Cpath fill='%234285F4' d='M46.1 24.5c0-1.7-.2-3.4-.6-5H24v9.5h12.4c-1.3 3.6-4.2 6.5-8.1 8.1l6.3 4.9C41.7 38.1 46.1 31.9 46.1 24.5z'/%3E%3Cpath fill='%23FBBC05' d='M10.4 28.4c-.9-2.6-.9-5.4 0-8l-7.2-5.6C.6 20.5.6 27.6 3.2 33.6l7.2-5.2z'/%3E%3Cpath fill='%2334A853' d='M24 46c6.6 0 12.1-2.2 16.1-5.9l-6.3-4.9C31.3 37.2 27.8 38.5 24 38.5c-6.3 0-11.7-5.3-13.5-12.7l-7.3 5.3C6.7 41.3 14.6 46 24 46z'/%3E%3C/svg%3E"
              alt="Google"
              style={{ width: 20, marginRight: 10 }}
            />
            Continue with Google
          </a>

          <a href="/" style={{ ...styles.link, display: 'block', marginBottom: '1rem', marginTop: '2rem' }}>
            ← Back to Home
          </a>
        </div>

        <div style={styles.imageSection}>
          <img
            src="https://thumbs.dreamstime.com/b/residential-real-estate-buying-selling-renting-homes-apartments-condos-townhouses-investment-shelter-expert-guidance-318813833.jpg"
            alt="Dream Home"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#5a2e8a', // softened purple for better look
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    overflow: 'hidden',
    maxWidth: 900,
    width: '100%',
    minHeight: '450px',
  },
  card: {
    flex: 1,
    padding: '2.5rem 2rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: '0.25rem',
    fontWeight: '700',
    fontSize: '2.25rem',
    color: '#3a1457',
  },
  subText: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1.5rem',
  },
  roleSelector: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '1.25rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#3a1457',
  },
  roleLabel: {
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    transition: 'color 0.25s ease',
  },
  radioInput: {
    cursor: 'pointer',
    width: '18px',
    height: '18px',
    accentColor: '#0057ff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    marginBottom: '1rem',
  },
  input: {
    padding: '0.85rem 1rem',
    borderRadius: 6,
    border: '1.5px solid #ccc',
    fontSize: '1rem',
    outlineOffset: '2px',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#0057ff',
  },
  button: {
    backgroundColor: '#0057ff',
    color: 'white',
    padding: '0.9rem',
    border: 'none',
    borderRadius: 6,
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: '600',
    boxShadow: '0 4px 10px rgba(0, 87, 255, 0.3)',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#003dbb',
  },
  link: {
    color: '#0057ff',
    textDecoration: 'none',
    fontWeight: '600',
  },
  forgot: {
    textAlign: 'right',
    marginBottom: '0.5rem',
  },
  signupText: {
    marginTop: '1.25rem',
    fontSize: '0.95rem',
    color: '#444',
  },
  orContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    margin: '1.5rem 0',
  },
  or: {
    fontSize: '1rem',
    color: '#aaa',
    fontWeight: '600',
  },
  hr: {
    flex: 1,
    border: 'none',
    borderBottom: '1px solid #ddd',
  },
  googleBtn: {
    backgroundColor: '#fff',
    border: '1.5px solid #ccc',
    padding: '0.8rem',
    borderRadius: 6,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s ease',
  },
  googleBtnHover: {
    backgroundColor: '#f5f5f5',
  },
  error: {
    color: '#d93025',
    fontSize: '0.9rem',
    marginTop: '-0.5rem',
    marginBottom: '0.8rem',
    fontWeight: '600',
  },
  imageSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    maxHeight: '420px',
    borderRadius: '0 10px 10px 0',
  },

  // Spinner style for loading button
  spinner: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    border: '3px solid rgba(255, 255, 255, 0.6)',
    borderTopColor: '#fff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

// Add keyframes for spinner animation globally
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default Login;


//   import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         'http://localhost:5500/api/login',
//         { email, password },
//         { withCredentials: true }
//       );
//       const user = res.data.user;
//       localStorage.setItem('user', JSON.stringify(user));
//       alert('Login successful');
//       navigate('/');
//     } catch (err) {
//       setError('Invalid email or password');
//     }
//   };

//   // You can define a primary color for dynamic styles (for example, a blue glow)
//   const primaryColor = 'red';

//   return (
//     <div style={styles.container}>
//       <div style={styles.card(primaryColor)}>
//         <img
//           src="https://cdn.auth0.com/quantum-assets/dist/latest/logos/auth0/auth0-icon-onlight.svg"
//           alt="logo"
//           style={{ width: '50px', marginBottom: 20,marginTop:30,marginLeft:170, }}
//         />
//         <h2>Welcome</h2>
//         <p style={{ color: '#ccc' }}>Log in to My Dream Home</p>

//         <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//           <input
//             type="email"
//             placeholder="Email address*"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{
//               padding: '0.8rem',
//               borderRadius: 4,
//               border: '1px solid #333',
//               fontSize: '1rem',
//               backgroundColor: '#222',
//               color: '#fff',
//             }}
//           />
//           <input
//             type="password"
//             placeholder="Password*"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{
//               padding: '0.8rem',
//               borderRadius: 4,
//               border: '1px solid #333',
//               fontSize: '1rem',
//               backgroundColor: '#222',
//               color: '#fff',
//             }}
//           />
//           <div style={{ textAlign: 'right' }}>
//             <a href="/forgot-password" style={styles.link(primaryColor)}>Forgot password?</a>
//           </div>
//           {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
//           <button
//             type="submit"
//             style={{
//               backgroundColor: primaryColor,
//               color: 'white',
//               padding: '0.8rem',
//               border: 'none',
//               borderRadius: 4,
//               fontSize: '1rem',
//               cursor: 'pointer',
//               marginTop: '10px',
//             }}
//           >
//             Continue
//           </button>
//         </form>

//         <p style={{ marginTop: '1rem', color: '#aaa' }}>
//           Don't have an account?{' '}
//           <a href="/signup" style={styles.link(primaryColor)}>
//             Sign up
//           </a>
//         </p>

//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '0.5rem',
//             margin: '1rem 0',
//             color: '#666',
//           }}
//         >
//           <hr style={{ flex: 1, border: 'none', borderBottom: '1px solid #444' }} />
//           <span>OR</span>
//           <hr style={{ flex: 1, border: 'none', borderBottom: '1px solid #444' }} />
//         </div>

//         <a
//           href="http://localhost:2300/auth/google"
//           style={{
//             backgroundColor: '#fff',
//             border: '1px solid #ccc',
//             padding: '0.7rem',
//             borderRadius: 4,
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             textDecoration: 'none',
//             color: '#000',
//           }}
//         >
//           <img
//             src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E"
//             alt="Google"
//             style={{ width: 20, marginRight: 10 }}
//           />
//           Continue with Google
//         </a>

//         <a href="/" style={{ ...styles.link(primaryColor), display: 'block', marginBottom: '1rem', marginTop: '2rem' }}>
//           ← Back to Home
//         </a>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '40px',
//     padding: '40px',
//     backgroundColor: '#0a0a0a',
//     minHeight: '100vh',
//   },
//   card: (color) => ({
//     position: 'relative',
//     backgroundColor: '#111',
//     width: '450px',
//     padding: '20px',
//     borderRadius: '10px',
//     color: '#fff',
//     boxShadow: `0 0 20px ${color}`,
//     transition: 'transform 0.3s',
//     cursor: 'pointer',
//   }),
//   cardHover: {
//     transform: 'scale(1.05)',
//   },
//   badge: (color) => ({
//     position: 'absolute',
//     top: '10px',
//     left: '10px',
//     backgroundColor: '#000',
//     border: `2px solid ${color}`,
//     padding: '8px',
//     borderRadius: '5px',
//     fontSize: '12px',
//     textAlign: 'center',
//     color,
//   }),
//   title: {
//     fontSize: '22px',
//     margin: '50px 0 10px 0',
//   },
//   text: {
//     fontSize: '14px',
//     lineHeight: '1.6',
//   },
//   link: (color) => ({
//     color,
//     fontWeight: 'bold',
//     textDecoration: 'none',
//   }),
// };

// export default Login;
