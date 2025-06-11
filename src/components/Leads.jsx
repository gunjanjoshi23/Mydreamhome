import React, { useEffect, useState } from 'react';
import AgentSidebar from './AgentSidebar';

const Leads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/api/leads')
      .then(res => res.json())
      .then(data => setLeads(data))
      .catch(err => console.error('Failed to fetch leads:', err));
  }, []);

  return (
    <div style={styles.pageContainer}>
      <AgentSidebar />
      
      <main style={styles.mainContent}>
        <h2 style={styles.heading}>Leads</h2>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Interested In</th>
                <th style={styles.th}>Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead._id}>
                  <td style={styles.td}>{lead.name}</td>
                  <td style={styles.td}>{lead.email}</td>
                  <td style={styles.td}>{lead.phone}</td>
                  <td style={styles.td}>{lead.interest || '-'}</td>
                  <td style={styles.td}>{new Date(lead.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  mainContent: {
    flex: 1,
    padding: '30px',
    overflowX: 'auto',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '25px',
    color: '#263238',
  },
  tableWrapper: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    padding: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '16px',
    color: '#37474f',
  },
  th: {
    backgroundColor: '#263238',
    color: 'white',
    padding: '15px',
    textAlign: 'left',
    fontWeight: '600',
    letterSpacing: '0.05em',
  },
  td: {
    padding: '14px 15px',
    borderBottom: '1px solid #eee',
    verticalAlign: 'middle',
  },
};

export default Leads;
