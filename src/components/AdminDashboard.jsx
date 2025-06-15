
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5500/api/admin/stats')
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  const activityData = stats.websiteActivity || [
    { date: 'Mon', visits: 400 },
    { date: 'Tue', visits: 300 },
    { date: 'Wed', visits: 500 },
    { date: 'Thu', visits: 700 },
    { date: 'Fri', visits: 600 },
    { date: 'Sat', visits: 800 },
    { date: 'Sun', visits: 750 },
  ];

  return (
    <div style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      height: '100vh',
      background: 'linear-gradient(to bottom right, #e3f2fd, #fce4ec)',
    }}>
      <Sidebar />

      <div style={{ flexGrow: 1, padding: '20px', overflowY: 'auto' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search property..."
            style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
          <div>
            <select style={{ padding: '8px 12px', borderRadius: '6px', marginRight: '10px' }}>
              <option>English</option>
            </select>
            <span style={{ marginRight: '10px' }}>🔔</span>
            <span>Admin User</span>
          </div>
        </div>

        <h2>Hi Admin, <span style={{ fontWeight: 'normal' }}>Overview</span></h2>

        {/* Three cards row: Total Revenue, Website Activity, Support Contact */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          {/* Total Revenue */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <Card
              title="Total Revenue"
              value={`$${stats.totalRevenue || 0}`}
              color="#009688"
              onClick={() => navigate('/admin/bookings')}
            />
          </div>

          {/* Website Activity */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1, minWidth: 0 }}>
            <h4>Website Activity</h4>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={activityData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#03a9f4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Support Contact */}
          <div style={{ background: '#03a9f4', color: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
            <h4>Support Contact</h4>
            <p style={{ fontSize: '20px' }}>+1 800 555 1234</p>
            <p>my@dreamhome.com</p>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <Card title="Total Users" value={stats.User || 0} color="#4caf50" onClick={() => navigate('/admin/users')} />
          <Card title="Total Agent" value={stats.Broker || 0} color="#2196f3" onClick={() => navigate('/admin/broker')} />
          <Card title="Booked Properties" value={stats.Booking || 0} color="#673ab7" onClick={() => navigate('/admin/bookings')} />
          <Card title="Available Properties" value={stats.Listing || 0} color="#ff5722" onClick={() => navigate('/Listing')} />
          <Card title="Contact Queries" value={stats.Contact || 0} color="#ff9800" onClick={() => navigate('/admin/queries/view')} />
          <Card title="Testimonials" value={stats.Testimonial || 0} color="#009688" onClick={() => navigate('/admin/testimonials')} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, color, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: color,
      color: 'white',
      borderRadius: '20px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      userSelect: 'none',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
  >
    <h4 style={{ fontSize: '18px', marginBottom: '10px', fontWeight: 500 }}>{title}</h4>
    <p style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>{value}</p>
    <span style={{ opacity: 0.9 }}>Updated today</span>
  </div>
);

export default AdminDashboard;
