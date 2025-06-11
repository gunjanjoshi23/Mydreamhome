import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar'; // Adjust path as needed

const ManageTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/api/testimonials')
      .then(res => res.json())
      .then(data => {
        if (data.success) setTestimonials(data.testimonials);
      })
      .catch(err => console.error('Error fetching testimonials:', err));
  }, []);

  const toggleStatus = async (id) => {
    try {
      const testimonial = testimonials.find(t => t._id === id);
      if (!testimonial) return;

      const newStatus = testimonial.status === 'active' ? 'inactive' : 'active';

      const res = await fetch(`http://localhost:5500/api/testimonials/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      const data = await res.json();
      if (data.success) {
        setTestimonials(testimonials.map(t =>
          t._id === id ? { ...t, status: newStatus } : t
        ));
      }
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  const deleteTestimonial = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this testimonial?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5500/api/testimonials/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (data.success) {
        setTestimonials(testimonials.filter(t => t._id !== id));
        alert('Testimonial deleted successfully.');
      } else {
        alert('Failed to delete testimonial.');
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('Error deleting testimonial.');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f9fafc' }}>

      {/* Sidebar */}
      <div style={{ width: 250, backgroundColor: '#1f2a38', color: '#ecf0f1' }}>
        <Sidebar />
      </div>

      {/* Main content */}
      <main style={{ flexGrow: 1, padding: '48px 64px', backgroundColor: '#f9fafc' }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: 36,
          fontWeight: '700',
          color: '#34495e',
          letterSpacing: '1.2px',
          fontSize: 30,
          textTransform: 'uppercase',
          userSelect: 'none'
        }}>
          Manage Testimonials
        </h2>

        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 28,
        }}>
          {testimonials.length > 0 ? testimonials.map(t => (
            <article
              key={t._id}
              style={{
                backgroundColor: '#e3f2fd',  // Pastel blue background
                padding: '28px 32px',
                borderRadius: 16,
                boxShadow: '0 8px 20px rgba(0,0,0,0.07)',
                border: '1px solid #90caf9', // subtle border
                position: 'relative',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.07)';
              }}
            >
              <div>
                <h3 style={{ marginBottom: 14, color: '#2c3e50', fontWeight: '700', fontSize: 22 }}>
                  {t.user?.name || 'Anonymous'}
                </h3>
                <p style={{ fontStyle: 'italic', color: '#7f8c8d', fontSize: 17, lineHeight: 1.6, minHeight: 72 }}>
                  "{t.testimonial}"
                </p>
              </div>

              <div style={{ marginTop: 16 }}>
                <p style={{ color: '#95a5a6', fontWeight: '700', marginBottom: 6, fontSize: 15 }}>
                  Rating: <span style={{ color: '#f39c12', letterSpacing: 1 }}>{'⭐'.repeat(t.rating)}</span>
                </p>
                <p style={{
                  fontWeight: '700',
                  color: t.status === 'active' ? '#27ae60' : '#c0392b',
                  fontSize: 15,
                  marginBottom: 16
                }}>
                  Status: {t.status.charAt(0).toUpperCase() + t.status.slice(1)}
                </p>

                <div style={{ display: 'flex', gap: 16 }}>
                  <button
                    onClick={() => toggleStatus(t._id)}
                    style={{
                      flex: 1,
                      padding: '12px 0',
                      backgroundColor: t.status === 'active' ? '#e67e22' : '#2980b9',
                      border: 'none',
                      borderRadius: 10,
                      color: '#fff',
                      fontWeight: '700',
                      fontSize: 15,
                      cursor: 'pointer',
                      boxShadow: '0 5px 12px rgba(0,0,0,0.12)',
                      transition: 'background-color 0.3s ease',
                      userSelect: 'none'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = t.status === 'active' ? '#d35400' : '#2471a3';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = t.status === 'active' ? '#e67e22' : '#2980b9';
                    }}
                  >
                    Toggle Status
                  </button>

                  <button
                    onClick={() => deleteTestimonial(t._id)}
                    style={{
                      flex: 1,
                      padding: '12px 0',
                      backgroundColor: '#c0392b',
                      border: 'none',
                      borderRadius: 10,
                      color: '#fff',
                      fontWeight: '700',
                      fontSize: 15,
                      cursor: 'pointer',
                      boxShadow: '0 5px 12px rgba(0,0,0,0.12)',
                      transition: 'background-color 0.3s ease',
                      userSelect: 'none'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#922b21';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = '#c0392b';
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          )) : (
            <p style={{
              gridColumn: '1/-1',
              textAlign: 'center',
              color: '#95a5a6',
              fontSize: 20,
              marginTop: 48,
              userSelect: 'none'
            }}>
              No testimonials found.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default ManageTestimonials;
