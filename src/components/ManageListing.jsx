// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AgentSidebar from "./AgentSidebar";
// import { Link } from 'react-router-dom';


// const ManageListing = () => {
//     const [listings, setListings] = useState([]);

//     useEffect(() => {
//         fetchListings();
//     }, []);

//     const fetchListings = async () => {
//         try {
//             const res = await axios.get('http://localhost:5500/api/listings');
//             setListings(res.data);
//         } catch (err) {
//             console.error('Error fetching listings:', err);
//         }
//     };

//     const handleDelete = async (id) => {
//         const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
//         if (!confirmDelete) return;

//         try {
//             await axios.delete(`http://localhost:5500/api/listings/${id}`);
//             setListings(listings.filter(listing => listing._id !== id));
//             alert("Listing deleted successfully!");
//         } catch (err) {
//             console.error('Error deleting listing:', err);
//             alert("Failed to delete the listing. Please try again.");
//         }
//     };


//     return (
//         <div style={{ display: 'flex', minHeight: '100vh',backgroundColor:'#b1ddf1' }}>
//             <AgentSidebar />
//             <div style={{ flex: 1, padding: '20px', backgroundColor: '#b1ddf1', fontFamily: 'Arial' }}>
//                 <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Manage Listings</h2>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
//                     {listings.length === 0 ? (
//                         <p style={{ textAlign: 'center' }}>No listings available.</p>
//                     ) : (
//                         listings.map((listing) => (
//                             <div key={listing._id} style={{
//                                 border: '1px solid #ccc',
//                                 borderRadius: '10px',
//                                 padding: '15px',
//                                 width: '300px',
//                                 backgroundColor: '#fff',
//                                 boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//                             }}>
//                                 <div style={{ position: 'relative' }}>
//                                     <img
//                                         src={`http://localhost:5500${listing.image}`}
//                                         alt={listing.title}
//                                         style={{
//                                             width: '100%',
//                                             height: '180px',
//                                             objectFit: 'cover',
//                                             borderRadius: '10px',
//                                             objectFit: 'cover'
//                                         }}
//                                     />
//                                 </div>
//                                 <h3 style={{ margin: '10px 0 5px' }}>{listing.name}</h3>
//                                 <p><strong>Location:</strong> {listing.location}</p>
//                                 <p><strong>Price:</strong> ${listing.price}</p>
//                                 <p><strong>Rooms:</strong> {listing.rooms}</p>
//                                 <p><strong>Parking:</strong> {listing.parking}</p>
//                                 <p><strong>Beds:</strong> {listing.beds}</p>
//                                 <p><strong>Baths:</strong> {listing.baths}</p>
//                                 <p style={{ fontSize: '16px', color: 'black', lineHeight: '1.5', marginTop: '10px' }}>
//                                     {listing.details?.length > 200
//                                         ? listing.details.slice(0, 200) + '...'
//                                         : listing.details}
//                                 </p>
//                                 <button
//                                     onClick={() => handleDelete(listing._id)}
//                                     style={{
//                                         backgroundColor: '#ff4d4f',
//                                         color: '#fff',
//                                         border: 'none',
//                                         padding: '8px 12px',
//                                         borderRadius: '5px',
//                                         cursor: 'pointer',
//                                         marginTop: '10px',
//                                         width: '100%'
//                                     }}
//                                 >
//                                     Delete
//                                 </button>
//                                 <Link
//                                     to={`/admin/edit-listing/${listing._id}`}
//                                     style={{
//                                         display: 'inline-block',
//                                         textAlign: 'center',
//                                         backgroundColor: '#1890ff',
//                                         color: '#fff',
//                                         textDecoration: 'none',
//                                         padding: '8px 12px',
//                                         borderRadius: '5px',
//                                         marginTop: '10px',
//                                         width: '90%'
//                                     }}
//                                 >
//                                     Edit
//                                 </Link>


//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManageListing;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AgentSidebar from "./AgentSidebar";
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true; // ✅ Send cookies with request

const ManageListing = () => {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchListings();
    }, []);

    const fetchListings = async () => {
        try {
            const res = await axios.get('http://localhost:5500/api/listings');
            setListings(res.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching listings:', err);
            setError('Failed to fetch listings. Make sure you are logged in.');
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:5500/api/listings/${id}`);
            setListings(listings.filter(listing => listing._id !== id));
            alert("Listing deleted successfully!");
        } catch (err) {
            console.error('Error deleting listing:', err);
            alert("Failed to delete the listing. Please try again.");
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#e9f0f7' }}>
            <AgentSidebar />
            <div style={{ flex: 1, padding: '25px 40px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#0a3d62', fontWeight: '700', letterSpacing: '1.2px' }}>Manage Listings</h2>

                {loading ? (
                    <p style={{ textAlign: 'center', color: '#333' }}>Loading...</p>
                ) : error ? (
                    <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                ) : listings.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#555' }}>No listings available.</p>
                ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
                        {listings.map((listing) => (
                            <div
                                key={listing._id}
                                style={{
                                    borderRadius: '15px',
                                    padding: '20px',
                                    width: '320px',
                                    background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'default',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.2)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                                }}
                            >
                                <img
                                    src={`http://localhost:5500${listing.image}`}
                                    alt={listing.names || "Listing Image"}
                                    style={{
                                        width: '100%',
                                        height: '190px',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        marginBottom: '15px',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                                    }}
                                />
                                <h3 style={{ margin: '0 0 8px', color: '#1e272e', fontWeight: '700', fontSize: '1.3rem' }}>{listing.names}</h3>
                                <p style={{ margin: '4px 0', color: '#2f3640' }}><strong>Location:</strong> {listing.location}</p>
                                <p style={{ margin: '4px 0', color: '#2f3640' }}><strong>Price:</strong> ${listing.price}</p>
                                <p style={{ margin: '4px 0', color: '#2f3640' }}><strong>Rooms:</strong> {listing.rooms}</p>
                                <p style={{ margin: '4px 0', color: '#2f3640' }}><strong>Parking:</strong> {listing.parking}</p>
                                <p style={{ margin: '4px 0', color: '#2f3640' }}><strong>Beds:</strong> {listing.beds}</p>
                                <p style={{ margin: '4px 0 12px', color: '#2f3640' }}><strong>Baths:</strong> {listing.baths}</p>
                                <p style={{ fontSize: '0.95rem', color: '#34495e', lineHeight: 1.5, flexGrow: 1 }}>
                                    {listing.details?.length > 200 ? listing.details.slice(0, 200) + '...' : listing.details}
                                </p>
                                <button
                                    onClick={() => handleDelete(listing._id)}
                                    style={{
                                        backgroundColor: '#ff4757',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '10px 0',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        marginTop: '15px',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        boxShadow: '0 4px 12px rgba(255,71,87,0.4)',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e84118'}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ff4757'}
                                >
                                    Delete
                                </button>
                                <Link
                                    to={`/agent/edit-listing/${listing._id}`}
                                    style={{
                                        display: 'block',
                                        textAlign: 'center',
                                        backgroundColor: '#273c75',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        padding: '10px 0',
                                        borderRadius: '8px',
                                        marginTop: '10px',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        boxShadow: '0 4px 12px rgba(39,60,117,0.4)',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#192a56'}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#273c75'}
                                >
                                    Edit
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageListing;
