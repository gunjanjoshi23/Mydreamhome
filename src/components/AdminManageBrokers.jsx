// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar"; // Adjust the path as needed

// const AdminManageBrokers = () => {
//     const [brokers, setBrokers] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [limit] = useState(10);
//     const [totalPages, setTotalPages] = useState(1);

//     useEffect(() => {
//         const fetchBrokers = async () => {
//             try {
//                 const res = await axios.get(
//                     `http://localhost:5500/admin-managebrokers?page=${currentPage}&limit=${limit}&search=${searchTerm}`
//                 );
//                 setBrokers(res.data.users);         // Set the broker list
//                 setTotalPages(res.data.totalPages); // Set the total number of pages
//             } catch (err) {
//                 console.error("Error fetching brokers:", err);
//             }
//         };

//         const delayDebounceFn = setTimeout(() => {
//             fetchBrokers();
//         }, 300);

//         return () => clearTimeout(delayDebounceFn);
//     }, [searchTerm, currentPage, limit]);

//     const deleteBroker = async (id) => {
//         if (window.confirm("Are you sure to delete this broker?")) {
//             try {
//                 await axios.delete(`http://localhost:5500/delete-broker/${id}`);
//                 setBrokers(brokers.filter((b) => b._id !== id));
//             } catch (err) {
//                 alert("Failed to delete broker.");
//             }
//         }
//     };

//     return (
//         <div style={{ display: "flex", backgroundColor: "#F1F7FF", minHeight: "100vh" }}>
//             <Sidebar />
//             <div style={{ padding: "20px", fontFamily: "Arial", flex: 1 }}>
//                 <h2 style={{ marginBottom: "20px" }}>Agent Management</h2>

//                 <input
//                     type="text"
//                     placeholder="Search brokers..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     style={{
//                         padding: "10px",
//                         marginBottom: "20px",
//                         width: "300px",
//                         borderRadius: "5px",
//                         border: "1px solid #ccc",
//                         fontSize: "14px",
//                     }}
//                 />

//                 <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff" }}>
//                     <thead>
//                         <tr style={{ backgroundColor: "#e6f0ff" }}>
//                             <th style={th}>S.No</th>
//                             <th style={th}>Name</th>
//                             <th style={th}>Email</th>
//                             <th style={th}>Phone</th>
//                             <th style={th}>Location</th>
//                             <th style={th}>Agency</th>
//                             <th style={th}>Experience</th>
//                             <th style={th}>Address</th>
//                             <th style={th}>Registered On</th>
//                             <th style={th}>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {brokers.length > 0 ? (
//                             brokers.map((b, i) => (
//                                 <tr key={b._id} style={{ textAlign: "center" }}>
//                                     <td style={td}>{(currentPage - 1) * limit + i + 1}</td>
//                                     <td style={td}>{b.name}</td>
//                                     <td style={td}>{b.email}</td>
//                                     <td style={td}>{b.contact || "-"}</td>
//                                     <td style={td}>{[b.city, b.country].filter(Boolean).join(", ")}</td>
//                                     <td style={td}>{b.agency || "-"}</td>
//                                     <td style={td}>{b.experience || "-"}</td>
//                                     <td style={td}>{b.address || "-"}</td>

//                                     <td style={td}>
//                                         {new Date(b.createdAt).toLocaleDateString("en-US", {
//                                             year: "numeric",
//                                             month: "short",
//                                             day: "numeric",
//                                         })}
//                                     </td>
//                                     <td style={td}>
//                                         <button onClick={() => deleteBroker(b._id)} style={deleteBtn}>
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td style={td} colSpan="7">
//                                     No brokers found.
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>

//                 <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
//                     <button
//                         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                         disabled={currentPage === 1}
//                         style={paginationBtn}
//                     >
//                         Previous
//                     </button>
//                     <span style={{ margin: "0 15px" }}>
//                         Page {currentPage} of {totalPages}
//                     </span>
//                     <button
//                         onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                         disabled={currentPage === totalPages}
//                         style={paginationBtn}
//                     >
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const th = {
//     padding: "10px",
//     borderBottom: "1px solid #ccc",
//     fontWeight: "bold",
// };

// const td = {
//     padding: "10px",
//     borderBottom: "1px solid #eee",
// };

// const deleteBtn = {
//     padding: "6px 12px",
//     backgroundColor: "#dc3545",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
// };

// const paginationBtn = {
//     padding: "6px 14px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
// };

// export default AdminManageBrokers;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar"; // Adjust path as needed

const AdminManageBrokers = () => {
  const [brokers, setBrokers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBrokers = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/admin-managebrokers?page=${currentPage}&limit=${limit}&search=${searchTerm}`
        );
        setBrokers(res.data.users);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error("Error fetching brokers:", err);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchBrokers();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, currentPage, limit]);

  const deleteBroker = async (id) => {
    if (window.confirm("Are you sure you want to delete this broker?")) {
      try {
        await axios.delete(`http://localhost:5500/delete-broker/${id}`);
        setBrokers(brokers.filter((b) => b._id !== id));
      } catch (err) {
        alert("Failed to delete broker.");
      }
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <Sidebar />
      <main style={styles.mainContent}>
        <h2 style={styles.heading}>Agent Management</h2>

        <input
          type="text"
          placeholder="Search brokers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.th}>S.No</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>Agency</th>
                <th style={styles.th}>Experience</th>
                <th style={styles.th}>Address</th>
                <th style={styles.th}>Registered On</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {brokers.length > 0 ? (
                brokers.map((b, i) => (
                  <tr
                    key={b._id}
                    style={
                      i % 2 === 0
                        ? styles.tableRowEven
                        : styles.tableRowOdd
                    }
                  >
                    <td style={styles.tdCenter}>
                      {(currentPage - 1) * limit + i + 1}
                    </td>
                    <td style={styles.td}>{b.name}</td>
                    <td style={styles.td}>{b.email}</td>
                    <td style={styles.tdCenter}>{b.contact || "-"}</td>
                    <td style={styles.td}>
                      {[b.city, b.country].filter(Boolean).join(", ")}
                    </td>
                    <td style={styles.td}>{b.agency || "-"}</td>
                    <td style={styles.tdCenter}>{b.experience || "-"}</td>
                    <td style={styles.td}>{b.address || "-"}</td>
                    <td style={styles.tdCenter}>
                      {new Date(b.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td style={styles.tdCenter}>
                      <button
                        onClick={() => deleteBroker(b._id)}
                        style={styles.deleteBtn}
                        title="Delete Broker"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={styles.noDataTd} colSpan="10">
                    No brokers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{
              ...styles.paginationBtn,
              ...(currentPage === 1 ? styles.disabledBtn : {}),
            }}
          >
            Previous
          </button>
          <span style={styles.pageInfo}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            style={{
              ...styles.paginationBtn,
              ...(currentPage === totalPages ? styles.disabledBtn : {}),
            }}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

const styles = {
  pageWrapper: {
    display: "flex",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#333",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  mainContent: {
    flex: 1,
    padding: "30px 40px",
    maxWidth: "1200px",
    margin: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "12px",
    boxShadow:
      "0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08)",
    display: "flex",
    flexDirection: "column",
    minHeight: "90vh",
  },
  heading: {
    marginBottom: "25px",
    fontWeight: "700",
    fontSize: "28px",
    color: "#3a3a3a",
    textAlign: "center",
  },
  searchInput: {
    padding: "12px 18px",
    marginBottom: "30px",
    width: "320px",
    borderRadius: "25px",
    border: "1.8px solid #a5a5a5",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 1px 6px rgba(102, 126, 234, 0.4)",
  },
  tableWrapper: {
    overflowX: "auto",
    flexGrow: 1,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14.5px",
  },
  tableHeaderRow: {
    backgroundColor: "#5a67d8",
    color: "white",
    textAlign: "center",
    userSelect: "none",
  },
  th: {
    padding: "14px 12px",
    fontWeight: "600",
    borderBottom: "2px solid #ddd",
  },
  td: {
    padding: "12px 10px",
    borderBottom: "1px solid #eee",
    textAlign: "left",
  },
  tdCenter: {
    padding: "12px 10px",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },
  tableRowEven: {
    backgroundColor: "#f9fafc",
    transition: "background-color 0.25s ease",
    cursor: "default",
  },
  tableRowOdd: {
    backgroundColor: "white",
    transition: "background-color 0.25s ease",
    cursor: "default",
  },
  deleteBtn: {
    padding: "7px 14px",
    backgroundColor: "#e53e3e",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "13px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  noDataTd: {
    textAlign: "center",
    padding: "30px",
    fontStyle: "italic",
    color: "#666",
  },
  pagination: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  paginationBtn: {
    padding: "10px 22px",
    backgroundColor: "#5a67d8",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(90, 103, 216, 0.5)",
    transition: "background-color 0.3s ease",
  },
  disabledBtn: {
    backgroundColor: "#a3aed0",
    cursor: "not-allowed",
    boxShadow: "none",
  },
  pageInfo: {
    fontWeight: "600",
    fontSize: "15px",
    color: "#333",
  },
};

export default AdminManageBrokers;
