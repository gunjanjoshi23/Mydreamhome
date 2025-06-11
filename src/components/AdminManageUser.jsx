import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from './Sidebar'; // Adjust path as needed

const AdminManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        `http://localhost:5500/admin-manageprofile?page=${currentPage}&limit=${limit}&search=${searchTerm}`
      );
      setUsers(res.data.users);
      setTotalPages(res.data.totalPages);
    };

    const timer = setTimeout(() => fetchUsers(), 300);
    return () => clearTimeout(timer);
  }, [searchTerm, currentPage, limit]);

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure to delete this user?")) {
      await axios.delete(`http://localhost:5500/delete/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main style={styles.mainContent}>
        <h2 style={styles.heading}>User Management</h2>

        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset page when search changes
          }}
          style={styles.searchInput}
          spellCheck={false}
          autoComplete="off"
        />

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.th}>S.NO</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>Registered On</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((u, i) => (
                  <tr key={u._id} style={styles.tableRow}>
                    <td style={styles.td}>{(currentPage - 1) * limit + i + 1}</td>
                    <td style={styles.td}>{u.name}</td>
                    <td style={styles.td}>{u.email}</td>
                    <td style={styles.td}>{u.contact || "-"}</td>
                    <td style={styles.td}>{[u.city, u.country].filter(Boolean).join(", ")}</td>
                    <td style={styles.td}>
                      {new Date(u.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td style={styles.td}>
                      <button onClick={() => deleteUser(u._id)} style={styles.deleteBtn} aria-label={`Delete user ${u.name}`}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={{...styles.td, textAlign: "center"}} colSpan="7">
                    No users found.
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
            style={{ ...styles.paginationBtn, ...(currentPage === 1 ? styles.disabledBtn : {}) }}
          >
            Previous
          </button>

          <span style={styles.pageInfo}>
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{ ...styles.paginationBtn, ...(currentPage === totalPages ? styles.disabledBtn : {}) }}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#fff8f2",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  mainContent: {
    flex: 1,
    padding: "30px 40px",
    maxWidth: "100%",
    boxSizing: "border-box",
  },
  heading: {
    marginBottom: "25px",
    fontWeight: "700",
    fontSize: "1.9rem",
    color: "#2c3e50",
    letterSpacing: "0.03em",
  },
  searchInput: {
    padding: "10px 14px",
    marginBottom: "20px",
    width: "280px",
    maxWidth: "100%",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1.8px solid #d1d8e0",
    outline: "none",
    transition: "border-color 0.3s ease",
    boxShadow: "0 1px 4px rgb(0 0 0 / 0.05)",
  },
  tableWrapper: {
    overflowX: "auto",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgb(149 157 165 / 0.2)",
    backgroundColor: "white",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "700px",
  },
  tableHeaderRow: {
    backgroundColor: "#f7f9fc",
    textTransform: "uppercase",
    fontSize: "0.85rem",
    letterSpacing: "0.08em",
  },
  th: {
    padding: "14px 20px",
    borderBottom: "2px solid #e0e6ed",
    textAlign: "center",
    color: "#34495e",
    fontWeight: "600",
  },
  td: {
    padding: "14px 20px",
    borderBottom: "1px solid #f0f2f5",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#555",
  },
  tableRow: {
    transition: "background-color 0.3s ease",
    cursor: "default",
  },
  tableRowHover: {
    backgroundColor: "#f9fafb",
  },
  deleteBtn: {
    padding: "8px 16px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.25s ease",
    boxShadow: "0 2px 6px rgba(231, 76, 60, 0.4)",
  },
  deleteBtnHover: {
    backgroundColor: "#c0392b",
  },
  pagination: {
    marginTop: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    userSelect: "none",
  },
  paginationBtn: {
    padding: "8px 16px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
    boxShadow: "0 3px 6px rgba(52, 152, 219, 0.5)",
  },
  disabledBtn: {
    backgroundColor: "#a0aec0",
    cursor: "not-allowed",
    boxShadow: "none",
  },
  pageInfo: {
    fontSize: "1rem",
    color: "#34495e",
  },
};

export default AdminManageUsers;
