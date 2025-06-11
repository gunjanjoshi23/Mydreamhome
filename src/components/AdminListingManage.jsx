import React, { useEffect, useState } from 'react';
import Sidebar from "./Sidebar";

const AdminListingManage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/api/admin/pending-listings')
      .then(res => res.json())
      .then(data => setListings(data));
  }, []);

  const handleApprove = async (id) => {
    const res = await fetch(`http://localhost:5500/api/admin/approve/${id}`, {
      method: 'PUT',
    });
    if (res.ok) {
      setListings(prev => prev.filter(listing => listing._id !== id));
    }
  };

  const styles = {
    layout: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Segoe UI, sans-serif",
      backgroundColor: "#f5f7fa"
    },
    sidebarWrapper: {
      width: "250px",
      backgroundColor: "#fff",
      borderRight: "1px solid #ddd",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      overflowY: "auto",
      padding: "20px",
      zIndex: 1
    },
    contentWrapper: {
      marginLeft: "250px",
      padding: "30px",
      width: "calc(100% - 250px)",
      overflowY: "auto"
    },
    heading: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#333"
    },
    emptyText: {
      textAlign: "center",
      color: "#777"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px"
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease-in-out"
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover"
    },
    cardContent: {
      padding: "15px"
    },
    cardTitle: {
      margin: "0 0 10px",
      fontSize: "1.2rem",
      color: "#333"
    },
    cardText: {
      margin: "5px 0",
      color: "#555"
    },
    button: {
      width: "100%",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      padding: "10px 0",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "6px",
      transition: "background-color 0.2s ease"
    }
  };

  return (
    <div style={styles.layout}>
      {/* Sidebar */}        <Sidebar />


      {/* Main Content */}
      <div style={styles.contentWrapper}>
        <h2 style={styles.heading}>Pending Listings</h2>

        {listings.length === 0 ? (
          <p style={styles.emptyText}>No pending listings</p>
        ) : (
          <div style={styles.grid}>
            {listings.map(listing => (
              <div key={listing._id} style={styles.card}>
                                <img
                                    src={`http://localhost:5500${listing.image}`}
                                    alt={listing.names || "Listing Image"}
                                    style={{
                                        width: '100%',
                                        height: '190px',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        marginBottom: '15px',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                                    }}
                                />
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{listing.names}</h3>
                  <p style={styles.cardText}><strong>Location:</strong> {listing.location}</p>
                  <p style={styles.cardText}><strong>Price:</strong> ${listing.price}</p>
                  <p style={styles.cardText}><strong>Details:</strong> {listing.details}</p>
                  <button
                    onClick={() => handleApprove(listing._id)}
                    style={styles.button}
                    onMouseOver={e => e.target.style.backgroundColor = "#218838"}
                    onMouseOut={e => e.target.style.backgroundColor = "#28a745"}
                  >
                    Approve Listing
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminListingManage;
