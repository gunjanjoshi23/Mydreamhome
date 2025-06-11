// import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar'; // Adjust path as needed

// function AdminDashboard() {
//   const [data, setData] = useState(null);

//   const dashboardData = {
//     forSale: 560,
//     forRent: 660,
//     customers: 5560,
//     agents: 60,
//     recentCustomers: [
//       { name: "Zinnat Ali", role: "Member" },
//       { name: "Akbor Juia", role: "Member" },
//       { name: "Katrina Ray", role: "Member" }
//     ],
//     referrals: {
//       "Social Media": 20,
//       "Marketplace": 50,
//       "Websites": 70,
//       "Digital Arts": 60,
//       "Others": 10
//     },
//     revenue: [400, 600, 500, 700, 800, 750, 900, 850, 950, 700, 800, 850],
//     propertyList: [
//       { title: "Star Sun Hotel & Apartment", price: "$500", location: "North Carolina,USA", img: "https://via.placeholder.com/300x200" },
//       { title: "Star Sun Hotel & Apartment", price: "$500", location: "North Carolina,USA", img: "https://via.placeholder.com/300x200" },
//       { title: "Star Sun Hotel & Apartment", price: "$500", location: "North Carolina,USA", img: "https://via.placeholder.com/300x200" }
//     ]
//   };

//   useEffect(() => {
//     setData(dashboardData);
//   }, []);

//   if (!data) return <div>Loading...</div>;

//   const colors = {
//     background: "#f9f9fb",
//     card: "Teal ",
//     border: "#eee",
//     text: "#333",
//     sidebar: "#fff",
//     primary: "#6e5ed2"
//   };

//   return (
// <div
//   style={{
//     display: "flex",
//     fontFamily: "sans-serif",
//     backgroundColor: colors.background,
//     color: colors.text,
//     minHeight: "100vh",
//     backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/023/308/451/large_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-free-photo.jpg")`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat"
//   }}
// >
//       <Sidebar />

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: "30px" }}>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
//           <h2>Welcome to Express Admin!</h2>
//         </div>

//         {/* Stats */}
//         <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
//           {[
//             { label: "Properties for Sale", value: data.forSale },
//             { label: "Properties for Rent", value: data.forRent },
//             { label: "Total Customers", value: data.customers },
//             { label: "Total Agents", value: data.agents }
//           ].map((card, idx) => (
//             <div key={idx} style={{
//               flex: 1,
//               background: colors.card,
//               padding: "20px",
//               borderRadius: "16px",
//               boxShadow: "0 0 15px rgba(0,0,0,0.05)"
//             }}>
//               <p style={{ margin: "0 0 10px", fontWeight: "500", color: "#999" }}>{card.label}</p>
//               <h3 style={{ margin: 0, fontSize: "24px" }}>{card.value}</h3>
//             </div>
//           ))}
//         </div>

//         {/* Referrals & Recent Customers */}
//         <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
//           <div style={{
//             flex: 2,
//             background: colors.card,
//             padding: "20px",
//             borderRadius: "16px",
//             boxShadow: "0 0 15px rgba(0,0,0,0.05)"
//           }}>
//             <h4 style={{ marginBottom: "15px" }}>Property Referrals</h4>
//             {Object.entries(data.referrals).map(([key, value]) => (
//               <p key={key} style={{ margin: "6px 0" }}>{key}: <strong>{value}%</strong></p>
//             ))}
//           </div>
//           <div style={{
//             flex: 1,
//             background: colors.card,
//             padding: "20px",
//             borderRadius: "16px",
//             boxShadow: "0 0 15px rgba(0,0,0,0.05)"
//           }}>
//             <h4 style={{ marginBottom: "15px" }}>Recent Customers</h4>
//             {data.recentCustomers.map((cust, idx) => (
//               <p key={idx} style={{ margin: "8px 0" }}>{cust.name} - <span style={{ color: "#999" }}>{cust.role}</span></p>
//             ))}
//           </div>
//         </div>

//         {/* Revenue */}
//         <div style={{
//           background: colors.card,
//           padding: "20px",
//           borderRadius: "16px",
//           boxShadow: "0 0 15px rgba(0,0,0,0.05)",
//           marginBottom: "30px"
//         }}>
//           <h4 style={{ marginBottom: "10px" }}>Revenue (Monthly)</h4>
//           <p>{data.revenue.join(", ")}</p>
//         </div>

//         {/* Property List */}
//         <div style={{
//           background: colors.card,
//           padding: "20px",
//           borderRadius: "16px",
//           boxShadow: "0 0 15px rgba(0,0,0,0.05)"
//         }}>
//           <h4 style={{ marginBottom: "20px" }}>Property List</h4>
//           <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//             {data.propertyList.map((item, idx) => (
//               <div key={idx} style={{
//                 background: "#fafafa",
//                 borderRadius: "12px",
//                 padding: "10px",
//                 width: "220px",
//                 boxShadow: "0 0 10px rgba(0,0,0,0.05)"
//               }}>
//                 <img src={item.img} alt="property" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
//                 <h5 style={{ margin: "10px 0 5px", fontSize: "16px" }}>{item.title}</h5>
//                 <p style={{ margin: "0 0 5px", fontSize: "14px", color: "#777" }}>{item.location}</p>
//                 <strong style={{ fontSize: "15px" }}>{item.price}</strong>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;



// // import React, { useEffect, useState } from "react";
// // // import Sidebar from './Sidebar'; // Adjust path as needed


// // const AdminDashboard = () => {
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     fetch("http://localhost:5500/api/admin/dashboard-data")
// //       .then((res) => res.json())
// //       .then((data) => setData(data))
// //       .catch((err) => console.error("Dashboard fetch error:", err));
// //   }, []);

// //   if (!data) return <div>Loading...</div>;

// //   return (
// //     //       <Sidebar />

// //     <div style={{ padding: "20px", fontFamily: "Arial" }}>
// //       <h1>Admin Dashboard</h1>
// //       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
// //         <Card title="For Sale" value={data.forSale} />
// //         <Card title="For Rent" value={data.forRent} />
// //         <Card title="Total Customers" value={data.customers} />
// //         <Card title="Total Agents" value={data.agents} />
// //       </div>

// //       <h2 style={{ marginTop: "30px" }}>Latest Listings</h2>
// //       <div style={{ display: "flex", gap: "20px" }}>
// //         {data.propertyList.map((p, idx) => (
// //           <div key={idx} style={{ border: "1px solid #ccc", padding: "10px" }}>
// //             <img src={p.img} alt="property" width="200" />
// //             <h4>{p.title}</h4>
// //             <p>{p.location}</p>
// //             <strong>{p.price}</strong>
// //           </div>
// //         ))}
// //       </div>

// //       <h2 style={{ marginTop: "30px" }}>Recent Customers</h2>
// //       <ul>
// //         {data.recentCustomers.map((c, idx) => (
// //           <li key={idx}>
// //             {c.name} - {c.role}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // const Card = ({ title, value }) => (
// //   <div
// //     style={{
// //       background: "#f5f5f5",
// //       padding: "20px",
// //       borderRadius: "10px",
// //       width: "200px",
// //     }}
// //   >
// //     <h3>{title}</h3>
// //     <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
// //   </div>
// // );

// // export default AdminDashboard;


// // // src/components/AdminDashboard.js
// // import React, { useEffect, useState } from 'react';
// // import Sidebar from './Sidebar';
// // import axios from 'axios';

// // function AdminDashboard() {
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     const fetchDashboard = async () => {
// //       try {
// //         const response = await axios.get('/admindashboard');
// //         setData(response.data.stats);
// //       } catch (error) {
// //         console.error('Failed to fetch admin dashboard data:', error);
// //       }
// //     };

// //     fetchDashboard();
// //   }, []);

// //   if (!data) return <div>Loading...</div>;

// //   const colors = {
// //     background: "#f9f9fb",
// //     card: "aqua",
// //     text: "#333",
// //   };

// //   return (
// //     <div style={{
// //       display: "flex",
// //       fontFamily: "sans-serif",
// //       backgroundColor: colors.background,
// //       color: colors.text,
// //       minHeight: "100vh",
// //       backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/023/308/451/large_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-free-photo.jpg")`,
// //       backgroundSize: "cover",
// //       backgroundPosition: "center"
// //     }}>
// //       <Sidebar />
// //       <div style={{ flex: 1, padding: "30px" }}>
// //         <h2 style={{ marginBottom: "30px" }}>Welcome to Real Estate Admin!</h2>

// //         <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
// //           {[
// //             { label: "Registered Users", value: data.totalUsers },
// //             { label: "Listed Properties", value: data.totalProperties },
// //             { label: "Total Inquiries", value: data.totalInquiries },
// //             { label: "Locations Covered", value: data.totalLocations },
// //             { label: "Subscribers", value: data.totalSubscribers },
// //             { label: "Contact Messages", value: data.totalContacts },
// //             { label: "Testimonials", value: data.totalTestimonials }
// //           ].map((card, idx) => (
// //             <div key={idx} style={{
// //               flex: "1 1 200px",
// //               background: colors.card,
// //               padding: "20px",
// //               borderRadius: "16px",
// //               boxShadow: "0 0 15px rgba(0,0,0,0.05)"
// //             }}>
// //               <p style={{ marginBottom: "10px", fontWeight: "500", color: "#555" }}>{card.label}</p>
// //               <h3>{card.value}</h3>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminDashboard;


// import React from 'react';
// import Sidebar from './Sidebar'; // Adjust path as needed


// const AdminDashboard = () => {
//   return (
//     <div style={{ fontFamily: 'sans-serif', display: 'flex', height: '100vh', background: 'linear-gradient(to bottom right, #e3f2fd, #fce4ec)' }}>
//       {/* Sidebar */}


//       {/* Main Panel */}
//       <div style={{ flexGrow: 1, padding: '20px' }}>
//         {/* Top Bar */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//           <input type="text" placeholder="Search property..." style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #ccc' }} />
//           <div>
//             <select style={{ padding: '8px 12px', borderRadius: '6px', marginRight: '10px' }}>
//               <option>English</option>
//             </select>
//             <span style={{ marginRight: '10px' }}>🔔</span>
//             <span>Admin User</span>
//           </div>
//         </div>

//         <h2>Hi Admin, <span style={{ fontWeight: 'normal' }}>Overview</span></h2>

//         {/* Cards Row 1 */}
//         <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
//             <h4>Total Revenue</h4>
//             <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$1,245,678</p>
//             <span style={{ color: 'green' }}>+10%</span>
//           </div>

//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 2, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
//             <h4>Website Activity</h4>
//             <div style={{ height: '60px', background: '#e0f7fa', borderRadius: '10px' }}>
//               {/* Chart Placeholder */}
//             </div>
//           </div>

//           <div style={{ background: '#03a9f4', color: 'white', borderRadius: '16px', padding: '20px', flex: 1, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
//             <h4>Support Contact</h4>
//             <p style={{ fontSize: '20px' }}>+1 800 555 1234</p>
//             <p>support@dreamhome.com</p>
//           </div>
//         </div>

//         {/* Cards Row 2 */}
//         <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//             <h4>Total Listings</h4>
//             <p style={{ fontSize: '20px', fontWeight: 'bold' }}>320</p>
//             <span style={{ color: 'green' }}>+5%</span>
//           </div>

//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//             <h4>Booked Properties</h4>
//             <p style={{ fontSize: '20px', fontWeight: 'bold' }}>145</p>
//             <span style={{ color: '#2196f3' }}>45%</span>
//           </div>

//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//             <h4>Available Properties</h4>
//             <p style={{ fontSize: '20px', fontWeight: 'bold' }}>175</p>
//             <span style={{ color: '#f44336' }}>55%</span>
//           </div>

//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//             <h4>New Clients</h4>
//             <p style={{ fontSize: '20px', fontWeight: 'bold' }}>28</p>
//             <span style={{ color: '#ffc107' }}>✓</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useEffect, useState } from 'react';
// import Sidebar from './Sidebar'; // Make sure Sidebar.jsx exists
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:5500/api/admin/stats')
//       .then(res => setStats(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div style={{ fontFamily: 'sans-serif', display: 'flex', height: '100vh', background: 'linear-gradient(to bottom right, #e3f2fd, #fce4ec)' }}>
//       <Sidebar />

//       <div style={{ flexGrow: 1, padding: '20px' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//           <input type="text" placeholder="Search property..." style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #ccc' }} />
//           <div>
//             <select style={{ padding: '8px 12px', borderRadius: '6px', marginRight: '10px' }}>
//               <option>English</option>
//             </select>
//             <span style={{ marginRight: '10px' }}>🔔</span>
//             <span>Admin User</span>
//           </div>
//         </div>

//         <h2>Hi Admin, <span style={{ fontWeight: 'normal' }}>Overview</span></h2>

//         <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//             <h4>Total Revenue</h4>
//             <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${stats.totalRevenue}</p>
//             <span style={{ color: 'green' }}>+10%</span>
//           </div>

//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 2 }}>
//             <h4>Website Activity</h4>
//             <div style={{ height: '60px', background: '#e0f7fa', borderRadius: '10px' }} />
//           </div>

//           <div style={{ background: '#03a9f4', color: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//             <h4>Support Contact</h4>
//             <p style={{ fontSize: '20px' }}>+1 800 555 1234</p>
//             <p>my@dreamhome.com</p>
//           </div>
//         </div>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(3, 1fr)',
//             gap: '20px',
//             marginTop: '20px',
//           }}
//         >
//           <Card title="Total Listings" value={stats.Listing} color="green" />
//           <Card title="Booked Properties" value={stats.Booking} color="#2196f3" />
//           <Card title="Available Properties" value={stats.Listing} color="#f44336" />
//           <Card title="New Clients" value={stats.User} color="#ffc107" symbol="✓" />
//             <Card title="Brokers" value={stats.Broker} color="#2196f3" symbol="✓" />

//           <Card title="Contact Queries" value={stats.Contact} color="#ffc107" symbol="✓" />
//           <Card title="Testimonials" value={stats.Testimonial} color="#ffc107" symbol="✓" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, value, color, symbol }) => (
//   <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//     <h4>{title}</h4>
//     <p style={{ fontSize: '30px', fontWeight: 'bold' }}>{value}</p>
//     <span style={{ color }}>{symbol || `${value > 0 ? '+' : ''}${value}%`}</span>
//   </div>
// );

// export default AdminDashboard;

// import React, { useEffect, useState } from 'react';
// import Sidebar from './Sidebar';
// import axios from 'axios';
// import {
//   LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
// } from 'recharts';

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:5500/api/admin/stats')
//       .then(res => setStats(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   // Example website activity data format (you should replace it with real data from API)
//   const activityData = stats.websiteActivity || [
//     { date: 'Mon', visits: 400 },
//     { date: 'Tue', visits: 300 },
//     { date: 'Wed', visits: 500 },
//     { date: 'Thu', visits: 700 },
//     { date: 'Fri', visits: 600 },
//     { date: 'Sat', visits: 800 },
//     { date: 'Sun', visits: 750 },
//   ];

//   return (
//     <div style={{ fontFamily: 'sans-serif', display: 'flex', height: '100vh', background: 'linear-gradient(to bottom right, #e3f2fd, #fce4ec)' }}>
//       <Sidebar />

//       <div style={{ flexGrow: 1, padding: '20px' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//           <input
//             type="text"
//             placeholder="Search property..."
//             style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #ccc' }}
//           />
//           <div>
//             <select style={{ padding: '8px 12px', borderRadius: '6px', marginRight: '10px' }}>
//               <option>English</option>
//             </select>
//             <span style={{ marginRight: '10px' }}>🔔</span>
//             <span>Admin User</span>
//           </div>
//         </div>

//         <h2>Hi Admin, <span style={{ fontWeight: 'normal' }}>Overview</span></h2>

//         {/* Top summary cards */}
//         <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//             <h4>Total Revenue</h4>
//             <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${stats.totalRevenue || 0}</p>
//             <span style={{ color: 'green' }}>+10%</span>
//           </div>

//           {/* Website Activity with LineChart */}
//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 2, minWidth: 0 }}>
//             <h4>Website Activity</h4>
//             <ResponsiveContainer width="100%" height={100}>
//               <LineChart data={activityData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
//                 <CartesianGrid stroke="#f5f5f5" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="visits" stroke="#03a9f4" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           <div style={{ background: '#03a9f4', color: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//             <h4>Support Contact</h4>
//             <p style={{ fontSize: '20px' }}>+1 800 555 1234</p>
//             <p>my@dreamhome.com</p>
//           </div>
//         </div>

//         {/* Stats grid */}
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(3, 1fr)',
//             gap: '20px',
//             marginTop: '20px',
//           }}
//         >
//           {/* User stats */}
//           <Card title="Total Users" value={stats.User || 0} color="green" />
          
//           {/* Broker stats */}
//           <Card title="Total Agent" value={stats.Broker || 0} color="#2196f3" />
          
//           {/* Other stats */}
//           <Card title="Booked Properties" value={stats.Booking || 0} color="#2196f3" />
//           <Card title="Available Properties" value={stats.Listing || 0} color="#f44336" />
          
//           {/* Contact & testimonial */}
//           <Card title="Contact Queries" value={stats.Contact || 0} color="#ff9800" />
//           <Card title="Testimonials" value={stats.Testimonial || 0} color="#4caf50" />
          
//           {/* Ex box example */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, value, color, symbol }) => (
//   <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
//     <h4>{title}</h4>
//     <p style={{ fontSize: '30px', fontWeight: 'bold' }}>{value}</p>
//     <span style={{ color }}>{symbol || `${value > 0 ? '+' : ''}${value}%`}</span>
//   </div>
// );

// export default AdminDashboard;
// import React, { useEffect, useState } from 'react';
// import Sidebar from './Sidebar';
// import axios from 'axios';
// import {
//   LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
// } from 'recharts';

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:5500/api/admin/stats')
//       .then(res => setStats(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const activityData = stats.websiteActivity || [
//     { date: 'Mon', visits: 400 },
//     { date: 'Tue', visits: 300 },
//     { date: 'Wed', visits: 500 },
//     { date: 'Thu', visits: 700 },
//     { date: 'Fri', visits: 600 },
//     { date: 'Sat', visits: 800 },
//     { date: 'Sun', visits: 750 },
//   ];

//   return (
//     <div style={{
//       fontFamily: 'sans-serif',
//       display: 'flex',
//       height: '100vh',
//       background: 'linear-gradient(to bottom right, #e3f2fd, #fce4ec)'
//     }}>
//       <Sidebar />

//       <div style={{ flexGrow: 1, padding: '20px' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//           <input
//             type="text"
//             placeholder="Search property..."
//             style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #ccc' }}
//           />
//           <div>
//             <select style={{ padding: '8px 12px', borderRadius: '6px', marginRight: '10px' }}>
//               <option>English</option>
//             </select>
//             <span style={{ marginRight: '10px' }}>🔔</span>
//             <span>Admin User</span>
//           </div>
//         </div>

//         <h2>Hi Admin, <span style={{ fontWeight: 'normal' }}>Overview</span></h2>

//         <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//             <h4>Total Revenue</h4>
//             <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${stats.totalRevenue || 55789}</p>
//             <span style={{ color: 'green' }}>+10%</span>
//           </div>

//           <div style={{ background: 'white', borderRadius: '16px', padding: '20px', flex: 2, minWidth: 0 }}>
//             <h4>Website Activity</h4>
//             <ResponsiveContainer width="100%" height={100}>
//               <LineChart data={activityData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
//                 <CartesianGrid stroke="#f5f5f5" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="visits" stroke="#03a9f4" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           <div style={{ background: '#03a9f4', color: 'white', borderRadius: '16px', padding: '20px', flex: 1 }}>
//             <h4>Support Contact</h4>
//             <p style={{ fontSize: '20px' }}>+1 800 555 1234</p>
//             <p>my@dreamhome.com</p>
//           </div>
//         </div>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(3, 1fr)',
//             gap: '20px',
//             marginTop: '20px',
//           }}
//         >
//           <Card title="Total Users" value={stats.User || 0} color="#4caf50" />
//           <Card title="Total Agent" value={stats.Broker || 0} color="#2196f3" />
//           <Card title="Booked Properties" value={stats.Booking || 0} color="#673ab7" />
//           <Card title="Available Properties" value={stats.Listing || 0} color="#ff5722" />
//           <Card title="Contact Queries" value={stats.Contact || 0} color="#ff9800" />
//           <Card title="Testimonials" value={stats.Testimonial || 0} color="#009688" />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Enhanced Card Component with hover effects and colored backgrounds
// const Card = ({ title, value, color }) => (
//   <div
//     style={{
//       background: color,
//       color: 'white',
//       borderRadius: '20px',
//       padding: '24px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//       transition: 'transform 0.3s ease',
//       cursor: 'pointer',
//     }}
//     onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
//     onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
//   >
//     <h4 style={{ fontSize: '18px', marginBottom: '10px', fontWeight: 500 }}>{title}</h4>
//     <p style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>{value}</p>
//     <span style={{ opacity: 0.9 }}>Updated today</span>
//   </div>
// );

// export default AdminDashboard;

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
