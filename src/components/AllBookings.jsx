// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";

// const AllBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [updatingId, setUpdatingId] = useState(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get("http://localhost:5500/api/booking");
//         const sortedBookings = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
//         setBookings(sortedBookings);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//         alert("Failed to load bookings. Please try again later.");
//         setLoading(false);
//       }
//     };
//     fetchBookings();
//   }, []);

//   const updateBookingStatus = async (id, status) => {
//     const confirm = window.confirm(`Are you sure you want to ${status} this booking?`);
//     if (!confirm) return;

//     setUpdatingId(id);
//     try {
//       await axios.put(`http://localhost:5500/api/booking/${id}`, { status });
//       alert(`Booking has been ${status}!`);
//       setBookings((prev) =>
//         prev.map((b) => (b._id === id ? { ...b, status } : b))
//       );
//     } catch (err) {
//       console.error("Error updating booking:", err);
//       alert("Failed to update booking.");
//     }
//     setUpdatingId(null);
//   };

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case "pending":
//         return { background: "yellow", color: "black", padding: "5px", borderRadius: "5px" };
//       case "confirmed":
//         return { background: "green", color: "white", padding: "5px", borderRadius: "5px" };
//       case "cancelled":
//         return { background: "red", color: "white", padding: "5px", borderRadius: "5px" };
//       default:
//         return {};
//     }
//   };

//   const styles = {
//     layout: { display: "flex", minHeight: "100vh", backgroundColor: '#b48e92' },
//     content: { flex: 1, padding: "20px", fontFamily: "Arial" },
//     heading: { textAlign: "center", marginBottom: "20px", fontSize: "24px" },
//     table: { width: "100%", borderCollapse: "collapse", marginTop: "10px" },
//     th: { background: "#007bff", color: "#fff", padding: "10px", border: "1px solid #ddd" },
//     td: { padding: "10px", border: "1px solid #ddd" },
//     button: { padding: "5px 10px", borderRadius: "5px", cursor: "pointer", marginRight: "5px" },
//     confirmButton: { background: "green", color: "white" },
//     cancelButton: { background: "red", color: "white" },
//     disabledButton: { opacity: 0.5, cursor: "not-allowed" },
//   };

//   return (
//     <div style={styles.layout}>
//       <Sidebar />
//       <div style={styles.content}>
//         <h2 style={styles.heading}>All Property Bookings</h2>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>S.No</th>
//               <th style={styles.th}>Property</th>
//               <th style={styles.th}>User</th>
//               <th style={styles.th}>Email</th>
//               <th style={styles.th}>Price</th>
//               <th style={styles.th}>Date</th>
//               <th style={styles.th}>Status</th>
//               <th style={styles.th}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td style={styles.td} colSpan="7">Loading bookings...</td>
//               </tr>
//             ) : bookings.length > 0 ? (
//               bookings.map((booking, index) => (
//                 <tr key={booking._id}>
//                   <td style={styles.td}>{index + 1}</td>
//                   <td style={styles.td}>{booking.propertyId?.names || ""}</td>
//                   <td style={styles.td}>{booking.name || "Unknown"}</td>
//                   <td style={styles.td}>{booking.email || "Unknown"}</td>
//                   <td style={styles.td}>{booking.propertyId?.price || ""}</td>

//                   <td style={styles.td}>
//                     {new Date(booking.date).toLocaleDateString()}
//                   </td>
//                   <td style={{ ...styles.td, ...getStatusStyle(booking.status) }}>
//                     {booking.status}
//                   </td>
//                   <td style={styles.td}>
//                     {booking.status === "pending" ? (
//                       <>
//                         <button
//                           style={{
//                             ...styles.button,
//                             ...styles.confirmButton,
//                             ...(updatingId === booking._id ? styles.disabledButton : {}),
//                           }}
//                           onClick={() => updateBookingStatus(booking._id, "confirmed")}
//                           disabled={updatingId === booking._id}
//                         >
//                           {updatingId === booking._id ? "Updating..." : "Confirm"}
//                         </button>
//                         <button
//                           style={{
//                             ...styles.button,
//                             ...styles.cancelButton,
//                             ...(updatingId === booking._id ? styles.disabledButton : {}),
//                           }}
//                           onClick={() => updateBookingStatus(booking._id, "cancelled")}
//                           disabled={updatingId === booking._id}
//                         >
//                           {updatingId === booking._id ? "Updating..." : "Cancel"}
//                         </button>
//                       </>
//                     ) : (
//                       "-"
//                     )}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td style={styles.td} colSpan="7">No bookings found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllBookings;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5500/api/booking");
        const sortedBookings = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setBookings(sortedBookings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        alert("Failed to load bookings. Please try again later.");
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const updateBookingStatus = async (id, status) => {
    const confirm = window.confirm(`Are you sure you want to ${status} this booking?`);
    if (!confirm) return;

    setUpdatingId(id);
    try {
      await axios.put(`http://localhost:5500/api/booking/${id}`, { status });
      alert(`Booking has been ${status}!`);
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status } : b))
      );
    } catch (err) {
      console.error("Error updating booking:", err);
      alert("Failed to update booking.");
    }
    setUpdatingId(null);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "pending":
        return {
          backgroundColor: "#f9e79f", // pastel yellow
          color: "#7d6608",
          padding: "6px 12px",
          borderRadius: "20px",
          fontWeight: "600",
          fontSize: "0.9rem",
          textTransform: "capitalize",
          boxShadow: "0 1px 5px rgba(157, 140, 0, 0.3)",
          display: "inline-block",
        };
      case "confirmed":
        return {
          backgroundColor: "#7dcea0", // pastel green
          color: "#145214",
          padding: "6px 12px",
          borderRadius: "20px",
          fontWeight: "600",
          fontSize: "0.9rem",
          textTransform: "capitalize",
          boxShadow: "0 1px 5px rgba(24, 130, 24, 0.3)",
          display: "inline-block",
        };
      case "cancelled":
        return {
          backgroundColor: "#f5b7b1", // pastel red
          color: "#7b241c",
          padding: "6px 12px",
          borderRadius: "20px",
          fontWeight: "600",
          fontSize: "0.9rem",
          textTransform: "capitalize",
          boxShadow: "0 1px 5px rgba(139, 23, 23, 0.3)",
          display: "inline-block",
        };
      default:
        return {};
    }
  };

  const styles = {
    layout: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#eef2f7",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    content: {
      flex: 1,
      padding: "2rem 3rem",
      color: "#2c3e50",
    },
    heading: {
      textAlign: "center",
      marginBottom: "1.8rem",
      fontSize: "2.25rem",
      fontWeight: "700",
      color: "#34495e",
      letterSpacing: "0.05em",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: "0 10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
    },
    th: {
      background:
        "linear-gradient(135deg, #6c8cd5, #8fb6f7)",
      color: "#fff",
      fontWeight: "700",
      padding: "15px",
      textAlign: "left",
      fontSize: "1rem",
      userSelect: "none",
    },
    td: {
      padding: "15px",
      fontSize: "0.95rem",
      verticalAlign: "middle",
      color: "#34495e",
      borderBottom: "none",
    },
    tr: {
      transition: "background-color 0.3s ease",
      cursor: "default",
      borderRadius: "12px",
    },
    trHover: {
      backgroundColor: "#f4f7fb",
    },
    button: {
      padding: "6px 14px",
      borderRadius: "25px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "0.9rem",
      border: "none",
      marginRight: "8px",
      boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      userSelect: "none",
    },
    confirmButton: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
    cancelButton: {
      backgroundColor: "#E74C3C",
      color: "white",
    },
    buttonHover: {
      filter: "brightness(110%)",
      transform: "scale(1.05)",
    },
    disabledButton: {
      opacity: 0.6,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    loadingRow: {
      textAlign: "center",
      fontSize: "1.1rem",
      color: "#777",
    },
  };

  // Optional: Add simple hover effect using React state
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={styles.layout}>
      <Sidebar />
      <div style={styles.content}>
        <h2 style={styles.heading}>All Property Bookings</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>S.No</th>
              <th style={styles.th}>Property</th>
              <th style={styles.th}>User</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td style={{ ...styles.td, ...styles.loadingRow }} colSpan="8">
                  Loading bookings...
                </td>
              </tr>
            ) : bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  style={
                    hoverIndex === index
                      ? { ...styles.tr, ...styles.trHover, borderRadius: "12px" }
                      : styles.tr
                  }
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{booking.propertyId?.names || ""}</td>
                  <td style={styles.td}>{booking.name || "Unknown"}</td>
                  <td style={styles.td}>{booking.email || "Unknown"}</td>
                  <td style={styles.td}>${booking.price || "N/A"}</td>
                  <td style={styles.td}>
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td style={{ ...styles.td, ...getStatusStyle(booking.status) }}>
                    {booking.status}
                  </td>
                  <td style={styles.td}>
                    {booking.status === "pending" ? (
                      <>
                        <button
                          style={{
                            ...styles.button,
                            ...styles.confirmButton,
                            ...(updatingId === booking._id ? styles.disabledButton : {}),
                          }}
                          onClick={() => updateBookingStatus(booking._id, "confirmed")}
                          disabled={updatingId === booking._id}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.filter = "brightness(120%)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.filter = "brightness(100%)")
                          }
                        >
                          {updatingId === booking._id ? "Updating..." : "Confirm"}
                        </button>
                        <button
                          style={{
                            ...styles.button,
                            ...styles.cancelButton,
                            ...(updatingId === booking._id ? styles.disabledButton : {}),
                          }}
                          onClick={() => updateBookingStatus(booking._id, "cancelled")}
                          disabled={updatingId === booking._id}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.filter = "brightness(120%)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.filter = "brightness(100%)")
                          }
                        >
                          {updatingId === booking._id ? "Updating..." : "Cancel"}
                        </button>
                      </>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={{ ...styles.td, ...styles.loadingRow }} colSpan="8">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBookings;

