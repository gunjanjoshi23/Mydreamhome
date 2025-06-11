import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AgentSidebar from "./AgentSidebar";

const BrokerUpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    city: '',
    country: '',
    agency: '',
    experience: '',
    address: '',
    _id: '',
  });

  useEffect(() => {
    axios.get('http://localhost:5500/api/users/current', { withCredentials: true })
      .then(res => {
        if (res.data.role === 'broker') {
          setFormData(res.data);
        } else {
          alert("Only brokers can access this page.");
        }
      })
      .catch(() => alert("Please log in to continue."));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5500/api/users/update-profile/${formData._id}`, formData, { withCredentials: true })
      .then(() => alert("Profile updated successfully!"))
      .catch(() => alert("Update failed."));
  }

  // Group form fields in pairs
  const fields = [
    ['name', 'email'],
    ['contact', 'city'],
    ['country', 'agency'],
    ['experience', 'address']
  ];

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f2f6fc, #dbe9ff)"
    }}>
      <div style={{
        width: "250px",
        borderRight: "1px solid #dee2e6",
        padding: "20px",
        backgroundColor: "#fff"
      }}>
        <AgentSidebar />
      </div>

      <div style={{
        flex: 1,
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "750px",
          backgroundColor: "#ffffff",
          padding: "35px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e3e6f0"
        }}>
          <h2 style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "30px",
            fontWeight: "700",
            color: "#2c3e50"
          }}>Update Broker Profile</h2>

          <form onSubmit={handleSubmit}>
            {fields.map((pair, idx) => (
              <div key={idx} style={{ display: "flex", gap: "20px", marginBottom: "22px" }}>
                {pair.map(field => (
                  <div key={field} style={{ flex: 1 }}>
                    <label style={{
                      display: "block",
                      marginBottom: "6px",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#37474f",
                      textTransform: "capitalize"
                    }}>{field}</label>
                    <input
                      type="text"
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleChange}
                      placeholder={`Enter ${field}`}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        border: "1px solid #cfd8dc",
                        fontSize: "15px",
                        transition: "0.3s",
                        outline: "none",
                        backgroundColor: "#f9fbfd"
                      }}
                      onFocus={(e) => {
                        e.target.style.border = "1px solid #007bff";
                        e.target.style.backgroundColor = "#fff";
                      }}
                      onBlur={(e) => {
                        e.target.style.border = "1px solid #cfd8dc";
                        e.target.style.backgroundColor = "#f9fbfd";
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                fontSize: "16px",
                fontWeight: "600",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
              onMouseEnter={e => e.target.style.backgroundColor = "#0056b3"}
              onMouseLeave={e => e.target.style.backgroundColor = "#007bff"}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrokerUpdateProfile;
