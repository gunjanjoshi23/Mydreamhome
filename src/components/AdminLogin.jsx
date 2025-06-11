// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5500/admin",
//         formData,
//         { withCredentials: true }
//       );
//       localStorage.setItem("admin", JSON.stringify(response.data));
//       navigate("/admindashboard");
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Admin login failed");
//     }
//   };

//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       backgroundImage:
//         "url('https://www.carsiceland.com/assets/img/blog/173/thingvellir-national-park.webp')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     },
//     formWrapper: {
//       background: "rgba(255, 255, 255, 0.9)",
//       padding: "30px",
//       borderRadius: "10px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//       maxWidth: "400px",
//       width: "100%",
//       textAlign: "center",
//       zIndex: 1,
//     },
//     title: {
//       fontSize: "24px",
//       marginBottom: "15px",
//       color: "#333",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       margin: "8px 0",
//       borderRadius: "5px",
//       border: "1px solid #ddd",
//       fontSize: "16px",
//     },
//     button: {
//       width: "100%",
//       padding: "10px",
//       marginTop: "10px",
//       background: "black",
//       color: "white",
//       border: "none",
//       fontSize: "18px",
//       cursor: "pointer",
//       borderRadius: "5px",
//     },
//     errorMessage: {
//       color: "red",
//       marginTop: "10px",
//       fontSize: "14px",
//     },
//     linkText: {
//       marginTop: "10px",
//       fontSize: "14px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {/* Login Form */}
//       <form style={styles.formWrapper} onSubmit={handleSubmit}>
//         <h2 style={styles.title}>Admin Login</h2>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             style={styles.input}
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             style={styles.input}
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//         {message && <p style={styles.errorMessage}>{message}</p>}
//         <p style={styles.linkText}>
//           <a href="/">Back to Home</a>
//         </p>
//       </form>
//     </div>
//   );
// };

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5500/admin",
        formData,
        { withCredentials: true }
      );
      localStorage.setItem("admin", JSON.stringify(response.data));
      navigate("/admindashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Admin login failed");
    }
  };

  const styles = {
container: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundImage: 
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
     url('https://wallpaperaccess.com/full/2056415.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
},
    formWrapper: {
      background: "rgba(255, 255, 255, 0.95)",
      padding: "40px 35px",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
      maxWidth: "420px",
      width: "100%",
      textAlign: "center",
      zIndex: 1,
      animation: "fadeInUp 0.7s ease forwards",
    },
    title: {
      fontSize: "28px",
      marginBottom: "25px",
      color: "#222",
      fontWeight: "700",
      letterSpacing: "1.2px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "600",
      fontSize: "14px",
      color: "#555",
      textAlign: "left",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      marginBottom: "20px",
      borderRadius: "8px",
      border: "1.8px solid #ccc",
      fontSize: "16px",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      outline: "none",
      boxSizing: "border-box",
    },
    inputFocus: {
      borderColor: "#ff6b6b",
      boxShadow: "0 0 8px rgba(255, 107, 107, 0.5)",
    },
    button: {
      width: "100%",
      padding: "12px",
      marginTop: "10px",
      background: "linear-gradient(45deg, #ff6b6b, #f06595)",
      color: "white",
      border: "none",
      fontSize: "20px",
      fontWeight: "600",
      cursor: "pointer",
      borderRadius: "10px",
      boxShadow: "0 5px 15px rgba(240, 101, 149, 0.6)",
      transition: "background 0.4s ease, transform 0.2s ease",
    },
    buttonHover: {
      background: "linear-gradient(45deg, #f06595, #ff6b6b)",
      transform: "scale(1.05)",
    },
    errorMessage: {
      color: "#e63946",
      marginTop: "15px",
      fontSize: "15px",
      fontWeight: "600",
    },
    linkText: {
      marginTop: "18px",
      fontSize: "15px",
      color: "#555",
      transition: "color 0.3s ease",
    },
    link: {
      color: "#ff6b6b",
      textDecoration: "none",
      fontWeight: "600",
    },
  };

  const [buttonHovered, setButtonHovered] = useState(false);
  const [focusedInput, setFocusedInput] = useState("");

  return (
    <div style={styles.container}>
      <form
        style={styles.formWrapper}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <h2 style={styles.title}>Admin Login</h2>

        <label style={styles.label} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          style={{
            ...styles.input,
            ...(focusedInput === "email" ? styles.inputFocus : {}),
          }}
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedInput("email")}
          onBlur={() => setFocusedInput("")}
          required
        />

        <label style={styles.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          style={{
            ...styles.input,
            ...(focusedInput === "password" ? styles.inputFocus : {}),
          }}
          value={formData.password}
          onChange={handleChange}
          onFocus={() => setFocusedInput("password")}
          onBlur={() => setFocusedInput("")}
          required
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(buttonHovered ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Login
        </button>

        {message && <p style={styles.errorMessage}>{message}</p>}

        <p style={styles.linkText}>
          <a
            href="/"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = "#f06595")}
            onMouseLeave={(e) => (e.target.style.color = "#ff6b6b")}
          >
            Back to Home
          </a>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
