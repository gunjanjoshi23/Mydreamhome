// import React, { useEffect, useState } from "react";
// import AgentSidebar from "./AgentSidebar";
// import axios from "axios";

// const BrokerBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await axios.get("http://localhost:5500/api/booking");
//         const sorted = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
//         setBookings(sorted);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to load broker bookings:", err);
//         alert("Error loading bookings");
//         setLoading(false);
//       }
//     };
//     fetchBookings();
//   }, []);

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case "pending":
//         return { backgroundColor: "yellow", color: "black", padding: "5px", borderRadius: "5px" };
//       case "confirmed":
//         return { backgroundColor: "green", color: "white", padding: "5px", borderRadius: "5px" };
//       case "cancelled":
//         return { backgroundColor: "red", color: "white", padding: "5px", borderRadius: "5px" };
//       default:
//         return {};
//     }
//   };

//   const styles = {
//     layout: { display: "flex", minHeight: "100vh", backgroundColor: "#d7c7bb" },
//     content: { flex: 1, padding: "20px", fontFamily: "Arial" },
//     heading: { textAlign: "center", marginBottom: "20px", fontSize: "24px" },
//     table: { width: "100%", borderCollapse: "collapse", marginTop: "10px" },
//     th: { background: "#333", color: "#fff", padding: "10px", border: "1px solid #ddd" },
//     td: { padding: "10px", border: "1px solid #ddd" },
//   };

//   return (
//     <div style={styles.layout}>
//       <AgentSidebar />
//       <div style={styles.content}>
//         <h2 style={styles.heading}>Broker - Property Bookings Status</h2>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>S.No</th>
//               <th style={styles.th}>Property</th>
//               <th style={styles.th}>User</th>
//               <th style={styles.th}>Email</th>
//               <th style={styles.th}>Date</th>
//               <th style={styles.th}>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr><td style={styles.td} colSpan="6">Loading...</td></tr>
//             ) : bookings.length > 0 ? (
//               bookings.map((booking, index) => (
//                 <tr key={booking._id}>
//                   <td style={styles.td}>{index + 1}</td>
//                   <td style={styles.td}>{booking.propertyId?.names || "Unknown"}</td>
//                   <td style={styles.td}>{booking.name || "Unknown"}</td>
//                   <td style={styles.td}>{booking.email || "Unknown"}</td>
//                   <td style={styles.td}>{new Date(booking.date).toLocaleDateString()}</td>
//                   <td style={{ ...styles.td, ...getStatusStyle(booking.status) }}>
//                     {booking.status}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr><td style={styles.td} colSpan="6">No bookings found</td></tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BrokerBookings;



import React, { useEffect, useState } from "react";
import AgentSidebar from "./AgentSidebar";
import axios from "axios";

const BrokerBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/booking", { withCredentials: true });
        const sorted = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBookings(sorted);
      } catch (err) {
        console.error("Failed to load broker bookings:", err);
        alert("Error loading bookings");
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "pending":
        return {
          backgroundColor: "#FFEB3B",
          color: "#333",
          padding: "6px 12px",
          borderRadius: "20px",
          fontWeight: "600",
          textTransform: "capitalize",
          display: "inline-block",
          letterSpacing: "0.5px",
        };
      case "confirmed":
        return {
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "20px",
          fontWeight: "600",
          textTransform: "capitalize",
          display: "inline-block",
          letterSpacing: "0.5px",
        };
      case "cancelled":
        return {
          backgroundColor: "#F44336",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "20px",
          fontWeight: "600",
          textTransform: "capitalize",
          display: "inline-block",
          letterSpacing: "0.5px",
        };
      default:
        return {};
    }
  };

  const styles = {
    layout: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#f2f4f7",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#333",
      // padding: 0,  // remove padding here to reduce top space
    },

    content: {
      flex: 1,
      padding: "15px 40px 30px 40px", // keep your desired padding here
      maxWidth: "1100px",
      // margin: "auto",
      background: "#fff",
      borderRadius: "15px",
      boxShadow: "0 12px 28px rgba(0,0,0,0.1)",
    },

    heading: {
      textAlign: "center",
      marginTop: "10px",  // or reduce further if you want less space
      marginBottom: "15px",
      fontSize: "28px",
      fontWeight: "700",
      color: "#222",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: "0 12px",
      fontSize: "15px",
      color: "#444",
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    },
    th: {
      background: "#263238",
      color: "#f9f9f9",
      padding: "14px 18px",
      textAlign: "left",
      fontWeight: "700",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      userSelect: "none",
    },
    td: {
      background: "#fff",
      padding: "14px 18px",
      verticalAlign: "middle",
      borderBottom: "12px solid transparent",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      borderRadius: "8px",
      transition: "background-color 0.3s ease",
    },
    noData: {
      textAlign: "center",
      padding: "25px 0",
      fontStyle: "italic",
      color: "#999",
    },
    loading: {
      textAlign: "center",
      padding: "25px 0",
      fontWeight: "600",
      color: "#666",
    },
  };

  return (
    <div style={styles.layout}>
      <AgentSidebar />
      <div style={styles.content}>
        <h2 style={styles.heading}>Broker - Property Bookings Status</h2>
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
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td style={{ ...styles.td, ...styles.loading }} colSpan="6">
                  Loading...
                </td>
              </tr>
            ) : bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  style={{ transition: "background-color 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{booking.propertyId?.names || "Unknown"}</td>
                  <td style={styles.td}>{booking.name || "Unknown"}</td>
                  <td style={styles.td}>{booking.email || "Unknown"}</td>
                  <td style={styles.td}>${booking.price || "N/A"}</td>

                  <td style={styles.td}>{new Date(booking.date).toLocaleDateString()}</td>
                  <td style={{ ...styles.td, ...getStatusStyle(booking.status) }}>{booking.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={{ ...styles.td, ...styles.noData }} colSpan="6">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrokerBookings;

