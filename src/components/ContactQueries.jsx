import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

function ContactQueries() {
  const [queries, setQueries] = useState([]);

  // Define an array of pastel colors to cycle through
  const pastelColors = [
    '#d0f0f9', // pastel teal
    '#f9d0d0', // pastel pink
    '#d0f9d8', // pastel green
    '#f9f1d0', // pastel yellow
    '#d0d9f9', // pastel blue
    '#f0d0f9', // pastel purple
  ];

  useEffect(() => {
    fetch('http://localhost:5500/api/contact-queries')
      .then(res => res.json())
      .then(data => setQueries(data))
      .catch(err => console.error('Failed to fetch:', err));
  }, []);

  return (
    <div style={styles.container}>
      <Sidebar />
      <main style={styles.mainContent}>
        <h2 style={styles.title}>Contact Queries</h2>
        {queries.length === 0 ? (
          <p style={styles.noData}>No contact queries found.</p>
        ) : (
          <section style={styles.cardsWrapper}>
            {queries.map((q, index) => (
              <article
                key={q._id}
                style={{
                  ...styles.card,
                  backgroundColor: pastelColors[index % pastelColors.length],
                }}
              >
                <p><strong>Name:</strong> {q.name}</p>
                <p><strong>Email:</strong> {q.email}</p>
                <p><strong>Phone:</strong> {q.phone || 'N/A'}</p>
                <p><strong>Message:</strong> {q.message}</p>
                <p style={styles.timestamp}>
                  Submitted on: {new Date(q.createdAt).toLocaleString()}
                </p>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  mainContent: {
    flex: 1,
    padding: '3rem 2rem',
    overflowY: 'auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    fontWeight: '700',
    letterSpacing: '0.05em',
    color: '#2c3e50',
  },
  noData: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#777',
    marginTop: '3rem',
  },
  cardsWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(44, 62, 80, 0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'default',
    userSelect: 'none',
  },
  timestamp: {
    marginTop: '1rem',
    fontSize: '0.85rem',
    color: '#999',
    fontStyle: 'italic',
  },
};

export default ContactQueries;
