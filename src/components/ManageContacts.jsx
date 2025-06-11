import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar'; // Make sure Sidebar is correctly imported

function ManageContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await fetch('http://localhost:5500/api/contact');
    const data = await res.json();
    setContacts(data);
  };

const toggleStatus = async (id) => {
  try {
    const res = await fetch(`http://localhost:5500/api/contact/toggle/${id}`, {
      method: 'PUT',
    });

    const data = await res.json();
    console.log('Response:', data); // Add this
    alert(data.message);
    fetchContacts();
  } catch (err) {
    console.error('Toggle status failed:', err); // Add this
    alert('Something went wrong!');
  }
};


  return (
    <div style={container}>
      <Sidebar />
      <div style={content}>
        <h2 style={title}>Manage Contact Queries</h2>
        <div style={tableWrapper}>
          <table style={table}>
            <thead>
              <tr style={tableHeaderRow}>
                <th style={tableHeader}>Name</th>
                <th style={tableHeader}>Email</th>
                <th style={tableHeader}>Message</th>
                <th style={tableHeader}>Status</th>
                <th style={tableHeader}>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c._id} style={tableRow}>
                  <td style={tableCell}>{c.name}</td>
                  <td style={tableCell}>{c.email}</td>
                  <td style={tableCell}>{c.message}</td>
                  <td
                    style={{
                      ...tableCell,
                      color: c.status === 'Resolved' ? 'green' : 'red',
                      fontWeight: 'bold',
                    }}
                  >
                    {c.status}
                  </td>
                  <td style={tableCell}>
                    <button
                      onClick={() => toggleStatus(c._id)}
                      style={{
                        ...buttonStyle,
                        backgroundColor: c.status === 'Resolved' ? '#dc3545' : '#28a745',
                      }}
                    >
                      Mark {c.status === 'Resolved' ? 'Unresolved' : 'Resolved'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Inline CSS Styles
const container = { display: 'flex', minHeight: '100vh' };
const content = { flex: 1, padding: '40px', fontFamily: 'Arial' };
const title = { textAlign: 'center', marginBottom: '30px', fontSize: '24px' };
const tableWrapper = { overflowX: 'auto' };
const table = { width: '100%', borderCollapse: 'collapse', minWidth: '800px' };
const tableHeaderRow = { backgroundColor: '#f0f0f0' };
const tableHeader = { padding: '12px', border: '1px solid #ccc', textAlign: 'left' };
const tableRow = { backgroundColor: '#fff' };
const tableCell = { padding: '10px', border: '1px solid #ddd' };
const buttonStyle = {
  padding: '6px 12px',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default ManageContacts;
