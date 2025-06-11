// // // src/components/Signup.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [city, setCity] = useState('');
//   const [country, setCountry] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     setError('');
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         'http://localhost:5500/api/signup',
//         { name, contact, email, password, confirmPassword, city, country },
//         { withCredentials: true }
//       );
//       alert('Signup successful');
//       navigate('/login');
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.error) {
//         setError(err.response.data.error);
//       } else {
//         setError('Signup failed. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.left}>
//           <img
//             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//             alt="Signup Illustration"
//             style={styles.image}
//           />
//         </div>
//         <div style={styles.right}>
//           <img
//             src="https://cdn.auth0.com/quantum-assets/dist/latest/logos/auth0/auth0-icon-onlight.svg"
//             alt="logo"
//             style={{ width: '50px', marginBottom: 20 }}
//           />
//           <h2>Create an Account</h2>
//           <p style={styles.subText}>Sign up for My Dream Home</p>

//           <form onSubmit={handleSignup} style={styles.form}>
//             <input
//               type="text"
//               placeholder="Full Name*"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               style={styles.input}
//             />
//             <input
//               type="email"
//               placeholder="Email address*"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Contact Number*"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               required
//               style={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="City*"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               required
//               style={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Country*"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
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
//             <input
//               type="password"
//               placeholder="Confirm Password*"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               style={styles.input}
//             />
//             {error && <p style={styles.error}>{error}</p>}
//             <button type="submit" style={styles.button} disabled={loading}>
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </button>
//           </form>

//           <p style={styles.signupText}>
//             Already have an account?{' '}
//             <a href="/login" style={styles.link}>
//               Log in
//             </a>
//           </p>

//           <div style={styles.orContainer}>
//             <hr style={styles.hr} />
//             <span style={styles.or}>OR</span>
//             <hr style={styles.hr} />
//           </div>

//           <a
//             href="http://localhost:5500/auth/google"
//             style={{ ...styles.googleBtn, textDecoration: 'none', color: '#000' }}
//           >
//             <img
//               src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E"
//               alt="Google"
//               style={{ width: 20, marginRight: 10 }}
//             />
//             Sign up with Google
//           </a>

//           <a href="/" style={{ ...styles.link, display: 'block', marginBottom: '1rem', marginTop: '2rem' }}>
//             ← Back to Home
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: 'Teal',
//     padding: '0 10px',
//   },
//   card: {
//     display: 'flex',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//     overflow: 'hidden',
//     width: '90%',
//     maxWidth: '1000px',
//     minHeight: '600px',
//   },
//   left: {
//     flex: 1,
//     backgroundColor: '#eee',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   right: {
//     flex: 1,
//     padding: '2rem',
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
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
// };

// export default Signup;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     password: '',
//     confirmPassword: '',
//     city: '',
//     country: '',
//     role: 'user', // 'user' or 'broker'
//     agency: '',
//     experience: '',
//     address: '',
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const { password, confirmPassword } = formData;

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setError('');
//     setLoading(true);

//     try {
//       const endpoint = formData.role === 'broker' ? '/api/brokers/signup' : '/api/signup';
//       await axios.post(`http://localhost:5500${endpoint}`, formData, { withCredentials: true });
//       alert('Signup successful');
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Signup failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.left}>
//           <img
//             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//             alt="Signup Illustration"
//             style={styles.image}
//           />
//         </div>
//         <div style={styles.right}>
//           <img
//             src="https://cdn.auth0.com/quantum-assets/dist/latest/logos/auth0/auth0-icon-onlight.svg"
//             alt="logo"
//             style={{ width: '50px', marginBottom: 20 }}
//           />
//           <h2>Create an Account</h2>
//           <p style={styles.subText}>Sign up for My Dream Home</p>

//           <form onSubmit={handleSignup} style={styles.form}>
//             <input type="text" name="name" placeholder="Full Name*" onChange={handleChange} required style={styles.input} />
//             <input type="email" name="email" placeholder="Email*" onChange={handleChange} required style={styles.input} />
//             <input type="text" name="contact" placeholder="Contact*" onChange={handleChange} required style={styles.input} />
//             <input type="text" name="city" placeholder="City*" onChange={handleChange} required style={styles.input} />
//             <input type="text" name="country" placeholder="Country*" onChange={handleChange} required style={styles.input} />
//             <input type="password" name="password" placeholder="Password*" onChange={handleChange} required style={styles.input} />
//             <input type="password" name="confirmPassword" placeholder="Confirm Password*" onChange={handleChange} required style={styles.input} />
//             <select name="role" onChange={handleChange} value={formData.role} style={styles.input}>
//               <option value="user">User</option>
//               <option value="broker">Broker</option>
//             </select>

//             {/* Show these only if broker is selected */}
//             {formData.role === 'broker' && (
//               <>
//                 <input type="text" name="agency" placeholder="Agency Name*" onChange={handleChange} required style={styles.input} />
//                 <input type="text" name="experience" placeholder="Experience (in years)*" onChange={handleChange} required style={styles.input} />
//                 <input type="text" name="address" placeholder="Office Address*" onChange={handleChange} required style={styles.input} />
//               </>
//             )}

//             {error && <p style={styles.error}>{error}</p>}

//             <button type="submit" style={styles.button} disabled={loading}>
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </button>
//           </form>

// <p style={styles.signupText}>
//   Already have an account? <a href="/login" style={styles.link}>Log in</a>
// </p>

//           <div style={styles.orContainer}>
//             <hr style={styles.hr} />
//             <span style={styles.or}>OR</span>
//             <hr style={styles.hr} />
//           </div>

//           <a
//             href="http://localhost:5500/auth/google"
//             style={{ ...styles.googleBtn, textDecoration: 'none', color: '#000' }}
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
//               alt="Google"
//               style={{ width: 20, marginRight: 10 }}
//             />
//             Sign up with Google
//           </a>

//           <a href="/" style={{ ...styles.link, display: 'block', marginTop: '2rem' }}>
//             ← Back to Home
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: 'Teal',
//     padding: '0 10px',
//   },
//   card: {
//     display: 'flex',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//     overflow: 'hidden',
//     width: '90%',
//     maxWidth: '1000px',
//     minHeight: '600px',
//   },
//   left: {
//     flex: 1,
//     backgroundColor: '#eee',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   right: {
//     flex: 1,
//     padding: '2rem',
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
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
// };

// export default Signup;


// src/pages/Signup.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     password: '',
//     confirmPassword: '',
//     city: '',
//     country: '',
//     role: 'user',
//     agency: '',
//     experience: '',
//     address: '',
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const { password, confirmPassword } = formData;

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setError('');
//     setLoading(true);

//     try {
//       const endpoint = formData.role === 'broker' ? '/broker/signup' : '/signup';
//       await axios.post(`http://localhost:5500${endpoint}`, formData, {
//         withCredentials: true
//       });
//       alert('Signup successful');
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Signup failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup} style={{ maxWidth: '400px' }}>
//         <input type="text" name="name" placeholder="Full Name*" required onChange={handleChange} /><br />
//         <input type="email" name="email" placeholder="Email*" required onChange={handleChange} /><br />
//         <input type="text" name="contact" placeholder="Contact*" required onChange={handleChange} /><br />
//         <input type="text" name="city" placeholder="City*" required onChange={handleChange} /><br />
//         <input type="text" name="country" placeholder="Country*" required onChange={handleChange} /><br />
//         <input type="password" name="password" placeholder="Password*" required onChange={handleChange} /><br />
//         <input type="password" name="confirmPassword" placeholder="Confirm Password*" required onChange={handleChange} /><br />
//         <select name="role" onChange={handleChange} value={formData.role}>
//           <option value="user">User</option>
//           <option value="broker">Broker</option>
//         </select><br />

//         {formData.role === 'broker' && (
//           <>
//             <input type="text" name="agency" placeholder="Agency Name*" required onChange={handleChange} /><br />
//             <input type="text" name="experience" placeholder="Experience*" required onChange={handleChange} /><br />
//             <input type="text" name="address" placeholder="Office Address*" required onChange={handleChange} /><br />
//           </>
//         )}

//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: 'Teal',
//     padding: '0 10px',
//   },
//   card: {
//     display: 'flex',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//     overflow: 'hidden',
//     width: '90%',
//     maxWidth: '1000px',
//     minHeight: '600px',
//   },
//   left: {
//     flex: 1,
//     backgroundColor: '#eee',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   right: {
//     flex: 1,
//     padding: '2rem',
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
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
//   error: {
//     color: 'red',
//     fontSize: '0.9rem',
//   },
// };

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     password: '',
//     confirmPassword: '',
//     city: '',
//     country: '',
//     role: 'user','broker',
//     agency: '',
//     experience: '',
//     address: '',
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const { password, confirmPassword } = formData;

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setError('');
//     setLoading(true);

//     try {
//       const endpoint = formData.role === 'broker' ? '/broker/signup' : '/signup';
//       await axios.post(`http://localhost:5500${endpoint}`, formData, {
//         withCredentials: true
//       });
//       alert('Signup successful');
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Signup failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.left}>
//           <img
//             src="https://source.unsplash.com/600x600/?real-estate,house"
//             alt="signup"
//             style={styles.image}
//           />
//         </div>
//         <div style={styles.right}>
//           <h2>Signup</h2>
//           <form onSubmit={handleSignup} style={styles.form}>
//             <input type="text" name="name" placeholder="Full Name*" required onChange={handleChange} style={styles.input} />
//             <input type="email" name="email" placeholder="Email*" required onChange={handleChange} style={styles.input} />
//             <input type="text" name="contact" placeholder="Contact*" required onChange={handleChange} style={styles.input} />
//             <input type="text" name="city" placeholder="City*" required onChange={handleChange} style={styles.input} />
//             <input type="text" name="country" placeholder="Country*" required onChange={handleChange} style={styles.input} />
//             <input type="password" name="password" placeholder="Password*" required onChange={handleChange} style={styles.input} />
//             <input type="password" name="confirmPassword" placeholder="Confirm Password*" required onChange={handleChange} style={styles.input} />

//             <select name="role" onChange={handleChange} value={formData.role} style={styles.input}>
//               <option value="user">User</option>
//               <option value="broker">Broker</option>
//             </select>

//             {formData.role === 'broker' && (
//               <>
//                 <input type="text" name="agency" placeholder="Agency Name*" required onChange={handleChange} style={styles.input} />
//                 <input type="text" name="experience" placeholder="Experience*" required onChange={handleChange} style={styles.input} />
//                 <input type="text" name="address" placeholder="Office Address*" required onChange={handleChange} style={styles.input} />
//               </>
//             )}

//             {error && <p style={styles.error}>{error}</p>}
//             <button type="submit" disabled={loading} style={styles.button}>
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: 'Teal',
//     padding: '0 10px',
//   },
//   card: {
//     display: 'flex',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//     overflow: 'hidden',
//     width: '90%',
//     maxWidth: '1000px',
//     minHeight: '600px',
//   },
//   left: {
//     flex: 1,
//     backgroundColor: '#eee',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'contain',
//     maxHeight: '400px',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     paddingTop:'130px'
//   },
//   right: {
//     flex: 1,
//     padding: '2rem',
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
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
//   error: {
//     color: 'red',
//     fontSize: '0.9rem',
//   },
// };

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     password: '',
//     confirmPassword: '',
//     city: '',
//     country: '',
//     role: 'user',
//     agency: '',
//     experience: '',
//     address: '',
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const { password, confirmPassword } = formData;

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setError('');
//     setLoading(true);

//     try {
//       const endpoint = formData.role === 'broker' ? '/broker/signup' : '/signup';
//       const response = await axios.post(`http://localhost:5500${endpoint}`, formData, {
//         withCredentials: true
//       });

//       alert(`${formData.role === 'broker' ? 'Agent' : 'User'} Signup Successful`);
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Signup failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.left}>
//           <img
//             src="https://th.bing.com/th/id/R.d5c5f2246919265f53e6f56f80071dd3?rik=Q7O1od8exJDnbQ&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f37%2f82%2fBI78kU.jpg&ehk=yP98fVqkFdzsxnJdZ17FmIQKByMdglW%2bEUXxXB7Mf6o%3d&risl=&pid=ImgRaw&r=0"
//             alt="signup"
//             style={styles.image}
//           />
//         </div>
//         <div style={styles.right}>
//           <h2>Signup</h2>
//           <form onSubmit={handleSignup} style={styles.form}>
//             <input type="text" name="name" placeholder="Full Name*" required onChange={handleChange} style={styles.input} />
//             <input type="email" name="email" placeholder="Email*" required onChange={handleChange} style={styles.input} />
//             <input type="text" name="contact" placeholder="Contact*" required onChange={handleChange} style={styles.input} />
//             <input type="text" name="city" placeholder="City*" required onChange={handleChange} style={styles.input} />
//             <input type="text" name="country" placeholder="Country*" required onChange={handleChange} style={styles.input} />
//             <input type="password" name="password" placeholder="Password*" required onChange={handleChange} style={styles.input} />
//             <input type="password" name="confirmPassword" placeholder="Confirm Password*" required onChange={handleChange} style={styles.input} />

//             <select name="role" onChange={handleChange} value={formData.role} style={styles.input}>
//               <option value="user">User</option>
//               <option value="broker">Agent</option>
//             </select>

//             {formData.role === 'broker' && (
//               <>
//                 <input type="text" name="agency" placeholder="Agency Name*" required onChange={handleChange} style={styles.input} />
//                 <input type="text" name="experience" placeholder="Experience*" required onChange={handleChange} style={styles.input} />
//                 <input type="text" name="address" placeholder="Office Address*" required onChange={handleChange} style={styles.input} />
//               </>
//             )}

//             {error && <p style={styles.error}>{error}</p>}
//             <button type="submit" disabled={loading} style={styles.button}>
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </button>

//           </form>
//           <p style={styles.signupText}>
//             Already have an account? <a href="/login" style={styles.link}>Log in</a>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '1rem',
    background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '1100px',
    minHeight: '700px',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.4)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
  },
  left: {
    flex: 1,
    background: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d") center/cover no-repeat',
    display: 'block',
  },
  right: {
    flex: 1,
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem 1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  inputFocus: {
    border: '1px solid #00c6ff',
  },
  button: {
    background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
    color: '#fff',
    padding: '0.9rem',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  buttonHover: {
    transform: 'scale(1.03)',
  },
  error: {
    color: '#ff4d4d',
    textAlign: 'center',
    fontSize: '0.9rem',
    marginTop: '-0.5rem',
  },
  label: {
    fontSize: '0.95rem',
    fontWeight: 'bold',
    marginTop: '0.5rem',
  },
  link: {
    color: '#00c6ff',
    textDecoration: 'none',
  },
  footerText: {
    marginTop: '1.5rem',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  responsiveLeft: {
    display: 'none',
  },
};

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    city: '',
    country: '',
    role: 'user',
    agency: '',
    experience: '',
    address: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateMobileView = () => setIsMobile(window.innerWidth < 768);
    updateMobileView();
    window.addEventListener('resize', updateMobileView);
    return () => window.removeEventListener('resize', updateMobileView);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const endpoint = formData.role === 'broker' ? '/broker/signup' : '/signup';
      await axios.post(`http://localhost:5500${endpoint}`, formData, { withCredentials: true });
      alert(`${formData.role === 'broker' ? 'Agent' : 'User'} Signup Successful`);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {!isMobile && <div style={styles.left}></div>}
        <div style={styles.right}>
          <h2 style={styles.heading}>Create Your Account</h2>
          <form onSubmit={handleSignup} style={styles.form}>
            <input type="text" name="name" placeholder="Full Name*" required onChange={handleChange} style={styles.input} />
            <input type="email" name="email" placeholder="Email*" required onChange={handleChange} style={styles.input} />
            <input type="text" name="contact" placeholder="Contact*" required onChange={handleChange} style={styles.input} />
            <input type="text" name="city" placeholder="City*" required onChange={handleChange} style={styles.input} />
            <input type="text" name="country" placeholder="Country*" required onChange={handleChange} style={styles.input} />
            <input type="password" name="password" placeholder="Password*" required onChange={handleChange} style={styles.input} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password*" required onChange={handleChange} style={styles.input} />

            <label style={styles.label}>Select Role</label>
            <select name="role" value={formData.role} onChange={handleChange} style={styles.input}>
              <option value="user">User</option>
              <option value="broker">Agent</option>
            </select>

            {formData.role === 'broker' && (
              <>
                <input type="text" name="agency" placeholder="Agency Name*" required onChange={handleChange} style={styles.input} />
                <input type="text" name="experience" placeholder="Experience*" required onChange={handleChange} style={styles.input} />
                <input type="text" name="address" placeholder="Office Address*" required onChange={handleChange} style={styles.input} />
              </>
            )}

            {error && <div style={styles.error}>{error}</div>}

            <button type="submit" disabled={loading} style={styles.button}>
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>

          <p style={styles.footerText}>
            Already have an account? <a href="/login" style={styles.link}>Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
