// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BrokerDashboard = () => {
//   const [stats, setStats] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:5500/api/broker/stats')
//       .then(res => setStats(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div style={{
//       fontFamily: 'sans-serif',
//       display: 'flex',
//       height: '100vh',
//       background: 'linear-gradient(to bottom right, #f3f4f6, #e0f7fa)'
//     }}>
//       <Sidebar />

//       <div style={{ flexGrow: 1, padding: '20px' }}>
//         <header style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           marginBottom: '20px'
//         }}>
//           <input type="text" placeholder="Search deals..." style={{
//             padding: '10px 16px',
//             borderRadius: '8px',
//             border: '1px solid #ccc'
//           }} />
//           <div>
//             <select style={{ padding: '8px 12px', borderRadius: '6px', marginRight: '10px' }}>
//               <option>English</option>
//             </select>
//             <span style={{ marginRight: '10px' }}>🔔</span>
//             <span>Agent Admin</span>
//           </div>
//         </header>

//         <h2>Welcome Agent, <span style={{ fontWeight: 'normal' }}>Dashboard</span></h2>

//         <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
//           <Card title="Total Deals Closed" value={stats.closedDeals} color="green" />
//           <Card title="Total Earnings" value={`$${stats.totalEarnings}`} color="#2196f3" />
//           <Card title="New Leads" value={stats.newLeads} color="#ff9800" />
//           <Card title="Support Contact" value="1-800-BROKER" color="#f44336" symbol="📞" />
//         </div>

//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(3, 1fr)',
//           gap: '20px',
//           marginTop: '20px'
//         }}>
//           <Card title="Active Listings" value={stats.activeListings} color="#4caf50" />
//           <Card title="Pending Approvals" value={stats.pendingApprovals} color="#ff5722" />
//           <Card title="Client Messages" value={stats.messages} color="#673ab7" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, value, color, symbol }) => (
//   <div style={{
//     background: 'white',
//     borderRadius: '16px',
//     padding: '20px',
//     boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//     cursor: 'pointer'
//   }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = 'scale(1.02)';
//       e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = 'scale(1)';
//       e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
//     }}
//   >
//     <h4>{title}</h4>
//     <p style={{ fontSize: '26px', fontWeight: 'bold' }}>{value}</p>
//     <span style={{ color, fontWeight: 'bold' }}>{symbol || ''}</span>
//   </div>
// );

// const Sidebar = () => {
//   const menuItems = [
//     { icon: '🏠', label: 'Dashboard', active: true },
//     { icon: '📋', label: "Add Listing", path: "/admin/listings/add" },
//     { icon: '📋', label: "Manage Listings", path: "/admin/listings/manage" },
//     { icon: '📞', label: 'Leads' },
//     { icon: '📁', label: 'Deals' },
//     { icon: '📨', label: 'Messages' },
//   ];

//   return (
//     <div style={{
//       width: '220px',
//       background: '#263238',
//       color: 'white',
//       padding: '20px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between'
//     }}>
//       <div>
//         <h3 style={{ marginBottom: '30px' }}>Agent Panel</h3>
//         <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               style={{
//                 marginBottom: '15px',
//                 padding: '10px 15px',
//                 borderLeft: item.active ? '4px solid #00e676' : '4px solid transparent',
//                 backgroundColor: item.active ? '#37474f' : 'transparent',
//                 cursor: 'pointer',
//                 transition: 'background 0.2s'
//               }}
//               onMouseEnter={e => e.currentTarget.style.backgroundColor = '#455a64'}
//               onMouseLeave={e => e.currentTarget.style.backgroundColor = item.active ? '#37474f' : 'transparent'}
//             >
//               {item.icon} {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <button style={{
//           background: '#f44336',
//           color: 'white',
//           border: 'none',
//           padding: '10px 20px',
//           borderRadius: '8px',
//           cursor: 'pointer'
//         }}>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default BrokerDashboard;

import React, { useEffect, useState } from 'react';
import AgentSidebar from './AgentSidebar';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const BrokerDashboard = () => {
  const [stats, setStats] = useState({});
  const [Agentuser, setBrokerName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5500/api/broker/stats')
      .then(res => {
        setStats(res.data);
        setBrokerName(res.data.brokerName || 'Broker');
      })
      .catch(err => console.error(err));
  }, []);

  const activityData = stats.websiteActivity || [
    { date: 'Mon', visits: 100 },
    { date: 'Tue', visits: 200 },
    { date: 'Wed', visits: 180 },
    { date: 'Thu', visits: 250 },
    { date: 'Fri', visits: 300 },
    { date: 'Sat', visits: 350 },
    { date: 'Sun', visits: 280 },
  ];

  return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      display: 'flex',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f1f8e9, #e3f2fd)',
    }}>
      <AgentSidebar />

      <div style={{ flexGrow: 1, padding: '25px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '25px',
        }}>
          <input
            type="text"
            placeholder="Search property..."
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              border: '1px solid #ccc',
              width: '250px'
            }}
          />
          <div>
            <select style={{
              padding: '10px 16px',
              borderRadius: '10px',
              marginRight: '15px',
              border: '1px solid #ccc'
            }}>
              <option>English</option>
            </select>
            <span style={{ marginRight: '10px', fontSize: '20px' }}>🔔</span>
            <strong>Agent Panel</strong>
          </div>
        </div>

<h2 style={{ marginBottom: '20px' }}>
  Welcome <span style={{ color: '#1976d2' }}>{Agentuser}</span>, Dashboard
</h2>

        {/* Summary boxes */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <div style={{
            background: 'linear-gradient(to right, #fbc02d, #ffeb3b)',
            borderRadius: '16px',
            padding: '20px',
            flex: 1,
            color: '#212121',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <h4>Total Revenue</h4>
            <p style={{ fontSize: '26px', fontWeight: 'bold' }}>${stats.totalRevenue || 78900}</p>
            <span style={{ color: '#2e7d32' }}>▲ +12%</span>
          </div>

          <div style={{
            background: 'linear-gradient(to right, #26c6da, #00acc1)',
            color: 'white',
            borderRadius: '16px',
            padding: '20px',
            flex: 1,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <h4>Agent Helpline</h4>
            <p style={{ fontSize: '18px' }}>+1 800 777 2222</p>
            <p>support@realagent.com</p>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '20px',
            flex: 2,
            minWidth: 0,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <h4>Weekly Activity</h4>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={activityData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#f0f0f0" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#66bb6a" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stat Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          <Card title="Total Listings" value={stats.Listing || 0} color="#1565c0" />
          <Card title="Bookings" value={stats.Booking || 0} color="#00838f" />
          <Card title="Leads Received" value={stats.Lead || 0} color="#ef6c00" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div style={{
    background: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 3px 8px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'scale(1.03)';
      e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.08)';
    }}
  >
    <h4 style={{ color: '#555' }}>{title}</h4>
    <p style={{ fontSize: '32px', fontWeight: 'bold', color }}>{value}</p>
    <span style={{ color }}>{value > 0 ? `▲ ${value}%` : `▼ ${value}%`}</span>
  </div>
);

export default BrokerDashboard;
