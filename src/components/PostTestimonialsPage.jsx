// import React, { useState } from 'react';

// const PostTestimonials = () => {
//   const [form, setForm] = useState({
//     name: '',
//     message: '',
//     rating: ''
//   });
//   const [success, setSuccess] = useState('');
//   const [error, setError] = useState('');

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setSuccess('');
//     setError('');

//     if (!form.name || !form.message || !form.rating) {
//       setError('All fields are required.');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:5500/api/testimonials', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form)
//       });

//       const data = await res.json();
//       if (data.success) {
//         setSuccess('Testimonial posted successfully!');
//         setForm({ name: '', message: '', rating: '' });
//       } else {
//         setError(data.error || 'Something went wrong.');
//       }
//     } catch (err) {
//       setError('Server error.');
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: '500px',
//       margin: '50px auto',
//       padding: '30px',
//       backgroundColor: '#f9f9f9',
//       borderRadius: '10px',
//       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//       fontFamily: 'sans-serif'
//     }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Post a Testimonial</h2>
//       {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
//       {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '15px' }}>
//           <label>Name:</label><br />
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               border: '1px solid #ccc'
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label>Message:</label><br />
//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             rows="4"
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               border: '1px solid #ccc'
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '20px' }}>
//           <label>Rating (1–5):</label><br />
//           <input
//             type="number"
//             name="rating"
//             value={form.rating}
//             onChange={handleChange}
//             min="1"
//             max="5"
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               border: '1px solid #ccc'
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#007BFF',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             fontSize: '16px',
//             cursor: 'pointer'
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PostTestimonials;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PostTestimonial = () => {
  const [testimonial, setTestimonial] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (testimonial.trim().length < 10) {
      alert("Please enter at least 10 characters.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5500/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ testimonial }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Testimonial posted successfully!");
        setTestimonial("");
      } else {
        alert(data.message || "Error posting testimonial");
      }
    } catch (error) {
      alert("Network error");
    }
  };

  return (
    <>
      <Header />
<div style={{ backgroundColor:"#CBAD7F" }}>
      <div style={styles.banner}>
        <h1>Post a Testimonial</h1>
      </div>

      <div style={{ display: "flex", width: "80%", margin: "20px auto", gap: "20px", }}>
        <div style={styles.sidebar}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={styles.sidebarItem}><Link to="/my-bookings" style={styles.sidebarLink}>My Bookings</Link></li>
            <li style={styles.sidebarItem}><Link to="/profile" style={styles.sidebarLink}>Profile Update</Link></li>
            <li style={styles.sidebarItem}><Link to="/favourites" style={styles.sidebarLink}>My Favorites</Link></li>
            <li style={styles.sidebarItem}><Link to="/post-testimonial" style={styles.sidebarLink}>Post a Testimonial</Link></li>
            <li style={styles.sidebarItem}><Link to="/my-testimonial" style={styles.sidebarLink}>My Testimonials</Link></li>
          </ul>
        </div>

        <div style={styles.formContainer}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>POST A TESTIMONIAL</h2>
          <form onSubmit={handleSubmit}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
              Your Testimonial
            </label>
            <textarea
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              required
              style={styles.textarea}
            />
            <button type="submit" style={styles.submitButton}>Save</button>
          </form>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
};

const styles = {
  banner: {
    paddingTop: '150px',
    marginTop: '100px',
    width: "100%",
    textAlign: "center",
    padding: "50px 20px",
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    backgroundImage: "url('https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  sidebar: {
    width: "25%",
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
  },
  sidebarItem: {
    padding: "12px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
  },
  sidebarLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },
  formContainer: {
    width: "50%",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    background: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#d9534f",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default PostTestimonial;

