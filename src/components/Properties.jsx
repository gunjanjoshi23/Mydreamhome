

// // src/components/Properties.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { VscSettings } from 'react-icons/vsc';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import { FaBed, FaBath, FaCar, FaHeart, FaStar, FaArrowsAltH } from 'react-icons/fa';
// import { MdMeetingRoom } from 'react-icons/md';
// import axios from 'axios';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const Properties = () => {
//   const [properties, setProperties] = useState([]);
//   const [liked, setLiked] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await axios.get('http://localhost:5500/api/properties');
//         setProperties(res.data);

//         if (isLoggedIn) {
//           const favRes = await axios.get('http://localhost:5500/api/favorites', {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//           });
//           const favObj = {};
//           favRes.data.forEach(fav => {
//             favObj[fav.propertyId] = true;
//           });
//           setLiked(favObj);
//         } else {
//           const guestFav = JSON.parse(localStorage.getItem('guestFavorites')) || [];
//           const favObj = {};
//           guestFav.forEach(id => { favObj[id] = true });
//           setLiked(favObj);
//         }
//       } catch (err) {
//         console.error('Error fetching properties or favorites:', err);
//       }
//     };
//     fetchProperties();
//   }, [isLoggedIn]);

//   const toggleLike = async (id) => {
//     if (isLoggedIn) {
//       try {
//         if (!liked[id]) {
//           await axios.post('http://localhost:5500/api/favorites', { propertyId: id }, {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//           });
//         } else {
//           await axios.delete(`http://localhost:5500/api/favorites/${id}`, {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//           });
//         }
//         setLiked(prev => ({ ...prev, [id]: !prev[id] }));
//       } catch (err) {
//         console.error('Error updating favorites:', err);
//       }
//     } else {
//       const guestFav = JSON.parse(localStorage.getItem('guestFavorites')) || [];
//       let updatedFav;
//       if (!liked[id]) {
//         updatedFav = [...guestFav, id];
//       } else {
//         updatedFav = guestFav.filter(favId => favId !== id);
//       }
//       localStorage.setItem('guestFavorites', JSON.stringify(updatedFav));
//       setLiked(prev => ({ ...prev, [id]: !prev[id] }));
//     }
//   };

//   const styles = {
//     card: (color) => ({
//       position: "relative",
//       backgroundColor: "#111",
//       width: "100%",
//       padding: "20px",
//       borderRadius: "12px",
//       color: "#fff",
//       boxShadow: `0 0 20px ${color}`,
//       transition: "transform 0.3s",
//       cursor: "pointer",
//       minHeight: "550px",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-between"
//     }),
//     badge: (color) => ({
//       position: "absolute",
//       top: "10px",
//       left: "10px",
//       backgroundColor: "#000",
//       border: `2px solid ${color}`,
//       padding: "8px",
//       borderRadius: "5px",
//       fontSize: "12px",
//       color: color,
//       fontWeight: 600,
//     }),
//   };

//   return (
//     <section style={{ padding: '60px 20px', background: '#0a0a0a' }}>
//       <div style={{ textAlign: 'center', marginBottom: '10px' }}>
//         <span style={{ color: '#7d993e', fontSize: '18px', fontWeight: 600 }}>
//           Your Future Home Awaits!
//         </span>
//         <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0', color: 'white' }}>
//           Find Your Dream Here
//         </h2>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', color: 'white' }}>
//         <h5 style={{ fontSize: '16px' }}>
//           <span style={{ fontWeight: 'bold' }}>Showing 1–{properties.length}</span> of 3k+ properties
//         </h5>
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <Link to="/filter" style={{
//             background: '#82c43c',
//             padding: '8px 12px',
//             borderRadius: '8px',
//             display: 'flex',
//             alignItems: 'center',
//             textDecoration: 'none'
//           }}>
//             <VscSettings size={20} color="#fff" />
//           </Link>
//           <Link to="/favourites" style={{
//             background: '#f44336',
//             padding: '8px 12px',
//             borderRadius: '8px',
//             color: 'white',
//             fontWeight: 'bold',
//             display: 'flex',
//             alignItems: 'center',
//             textDecoration: 'none'
//           }}>
//             Favorites
//           </Link>
//         </div>
//       </div>

//       <Swiper
//         spaceBetween={30}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         breakpoints={{
//           600: { slidesPerView: 1 },
//           900: { slidesPerView: 2 },
//           1300: { slidesPerView: 3 },
//           1500: { slidesPerView: 4 },
//         }}
//         modules={[Autoplay]}
//       >
//         {properties.map((property) => (
//           <SwiperSlide key={property._id}>
//             <div style={styles.card('#83b735')}>
//               <div style={{ position: 'relative' }}>
//                 <img
//                   src={`http://localhost:5500${property.image}`}
//                   alt={property.title}
//                   style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }}
//                 />
//                 <div style={styles.badge('#83b735')}>{property.location}</div>

//                 <FaHeart
//                   onClick={() => toggleLike(property._id)}
//                   style={{
//                     position: 'absolute',
//                     top: 12,
//                     right: 12,
//                     color: liked[property._id] ? 'red' : '#fff',
//                     background: 'rgba(0,0,0,0.3)',
//                     padding: '6px',
//                     borderRadius: '50%',
//                     cursor: 'pointer'
//                   }}
//                 />
//               </div>

//               <div style={{ marginTop: '16px' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
//                   <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{property.name}</h3>
//                   <span style={{ fontWeight: 'bold', color: '#83b735', fontSize: '16px' }}>${property.price}</span>
//                 </div>

//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '14px', color: '#ccc' }}>
//                   <span><FaBed /> {property.beds}</span>
//                   <span><FaBath /> {property.baths}</span>
//                   <span><MdMeetingRoom /> {property.rooms}</span>
//                   <span><FaCar /> {property.parking}</span>
//                   <span><FaArrowsAltH /> {property.size}</span>
//                   <span><FaStar style={{ color: 'gold' }} /> {property.rating}</span>
//                 </div>

//                 <p style={{ fontSize: '16px', color: '#ddd', lineHeight: '1.5', marginTop: '10px' }}>
//                   {property.details?.length > 200
//                     ? property.details.slice(0, 200) + '...'
//                     : property.details}
//                 </p>

//                 <Link to={`/property/${property._id}`} style={{
//                   display: 'inline-block',
//                   backgroundColor: '#83b735',
//                   color: '#fff',
//                   padding: '10px 20px',
//                   borderRadius: '8px',
//                   textDecoration: 'none',
//                   fontWeight: 600,
//                   marginTop: '10px'
//                 }}>
//                   Book Now
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Properties;


// src/components/Properties.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { VscSettings } from 'react-icons/vsc';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import { FaBed, FaBath, FaCar, FaHeart, FaStar, FaArrowsAltH } from 'react-icons/fa';
// import { MdMeetingRoom } from 'react-icons/md';
// import axios from 'axios';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const Properties = () => {
//   const [properties, setProperties] = useState([]);
//   const [liked, setLiked] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await axios.get('http://localhost:5500/api/properties');
//         setProperties(res.data);

//         if (isLoggedIn) {
//           const favRes = await axios.get('http://localhost:5500/api/favorites', {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//           });
//           const favObj = {};
//           favRes.data.forEach(fav => {
//             favObj[fav.propertyId] = true;
//           });
//           setLiked(favObj);
//         } else {
//           const guestFav = JSON.parse(localStorage.getItem('guestFavorites')) || [];
//           const favObj = {};
//           guestFav.forEach(id => { favObj[id] = true });
//           setLiked(favObj);
//         }
//       } catch (err) {
//         console.error('Error fetching properties or favorites:', err);
//       }
//     };
//     fetchProperties();
//   }, [isLoggedIn]);

//   const toggleLike = async (id) => {
//     if (isLoggedIn) {
//       try {
//         if (!liked[id]) {
//           await axios.post('http://localhost:5500/api/favorites', { propertyId: id }, {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//           });
//         } else {
//           await axios.delete(`http://localhost:5500/api/favorites/${id}`, {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//           });
//         }
//         setLiked(prev => ({ ...prev, [id]: !prev[id] }));
//       } catch (err) {
//         console.error('Error updating favorites:', err);
//       }
//     } else {
//       const guestFav = JSON.parse(localStorage.getItem('guestFavorites')) || [];
//       let updatedFav;
//       if (!liked[id]) {
//         updatedFav = [...guestFav, id];
//       } else {
//         updatedFav = guestFav.filter(favId => favId !== id);
//       }
//       localStorage.setItem('guestFavorites', JSON.stringify(updatedFav));
//       setLiked(prev => ({ ...prev, [id]: !prev[id] }));
//     }
//   };

//   const styles = {
//     card: (color) => ({
//       position: "relative",
//       backgroundColor: "#111",
//       width: "100%",
//       padding: "20px",
//       borderRadius: "12px",
//       color: "#fff",
//       boxShadow: `0 0 20px ${color}`,
//       transition: "transform 0.3s",
//       cursor: "pointer",
//       minHeight: "550px",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-between"
//     }),
//     badge: (color) => ({
//       position: "absolute",
//       top: "10px",
//       left: "10px",
//       backgroundColor: "#000",
//       border: `2px solid ${color}`,
//       padding: "8px",
//       borderRadius: "5px",
//       fontSize: "12px",
//       color: color,
//       fontWeight: 600,
//     }),
//   };

//   return (
//     <section style={{ padding: '60px 20px', background: '#0a0a0a' }}>
//       <div style={{ textAlign: 'center', marginBottom: '10px' }}>
//         <span style={{ color: '#7d993e', fontSize: '18px', fontWeight: 600 }}>
//           Your Future Home Awaits!
//         </span>
//         <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0', color: 'white' }}>
//           Find Your Dream Here
//         </h2>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', color: 'white' }}>
//         <h5 style={{ fontSize: '16px' }}>
//           <span style={{ fontWeight: 'bold' }}>Showing 1–{properties.length}</span> of 3k+ properties
//         </h5>
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <Link to="/filter" style={{
//             background: '#82c43c',
//             padding: '8px 12px',
//             borderRadius: '8px',
//             display: 'flex',
//             alignItems: 'center',
//             textDecoration: 'none'
//           }}>
//             <VscSettings size={20} color="#fff" />
//           </Link>
//           <Link to="/favourites" style={{
//             background: '#f44336',
//             padding: '8px 12px',
//             borderRadius: '8px',
//             color: 'white',
//             fontWeight: 'bold',
//             display: 'flex',
//             alignItems: 'center',
//             textDecoration: 'none'
//           }}>
//             Favorites
//           </Link>
//         </div>
//       </div>

//       <Swiper
//         spaceBetween={30}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         breakpoints={{
//           600: { slidesPerView: 1 },
//           900: { slidesPerView: 2 },
//           1300: { slidesPerView: 3 },
//           1500: { slidesPerView: 4 },
//         }}
//         modules={[Autoplay]}
//       >
//         {properties.map((property) => (
//           <SwiperSlide key={property._id}>
//             <div style={styles.card('#83b735')}>
//               <div style={{ position: 'relative' }}>
//                 <Link to={`/property/${property._id}`}>
//                   <img
//                     src={`http://localhost:5500${property.image}`}
//                     alt={property.title}
//                     style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }}
//                   />
//                 </Link>
//                 <div style={styles.badge('#83b735')}>{property.location}</div>

//                 <FaHeart
//                   onClick={() => toggleLike(property._id)}
//                   style={{
//                     position: 'absolute',
//                     top: 12,
//                     right: 12,
//                     color: liked[property._id] ? 'red' : '#fff',
//                     background: 'rgba(0,0,0,0.3)',
//                     padding: '6px',
//                     borderRadius: '50%',
//                     cursor: 'pointer'
//                   }}
//                 />
//               </div>

//               <div style={{ marginTop: '16px' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
//                   <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{property.names}</h3>
//                   <span style={{ fontWeight: 'bold', color: '#83b735', fontSize: '16px' }}>${property.price}</span>
//                 </div>

//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '14px', color: '#ccc' }}>
//                   <span><FaBed /> {property.beds}</span>
//                   <span><FaBath /> {property.baths}</span>
//                   <span><MdMeetingRoom /> {property.rooms}</span>
//                   <span><FaCar /> {property.parking}</span>
//                   <span><FaArrowsAltH /> {property.size}</span>
//                   <span><FaStar style={{ color: 'gold' }} /> {property.rating}</span>
//                 </div>

//                 <p style={{ fontSize: '16px', color: '#ddd', lineHeight: '1.5', marginTop: '10px' }}>
//                   {property.details?.length > 200
//                     ? property.details.slice(0, 200) + '...'
//                     : property.details}
//                 </p>

//                 <Link to={`/property/${property._id}`} style={{
//                   display: 'inline-block',
//                   backgroundColor: '#83b735',
//                   color: '#fff',
//                   padding: '10px 20px',
//                   borderRadius: '8px',
//                   textDecoration: 'none',
//                   fontWeight: 600,
//                   marginTop: '10px'
//                 }}>
//                   Book Now
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Properties;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VscSettings } from 'react-icons/vsc';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaBed, FaBath, FaCar, FaHeart, FaStar, FaArrowsAltH } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md';
import axios from 'axios';
import 'swiper/css';

const styles = {
  section: {
    padding: '50px 20px',
background: 'linear-gradient(to right, #7b2ff7, #f107a3)'
// background: 'linear-gradient(to right, #89f7fe, #66a6ff)'
// background: 'linear-gradient(to right, #ffecd2, #fcb69f)'
// background: 'linear-gradient(to right, #a8edea, #fed6e3)'
// background: 'linear-gradient(to right, #f6d365, #fda085)'


,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  headerTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#1c2938',
    marginBottom: '10px',
    letterSpacing: '1.2px',
  },
  headerSubtitle: {
    fontSize: '20px',
    color: '#4a5a6a',
    fontWeight: '500',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '35px',
    padding: '0 10px',
    flexWrap: 'wrap',
    gap: '15px',
  },
  topBarText: {
    fontSize: '16px',
    color: '#425060',
    fontWeight: '600',
  },
  actions: {
    display: 'flex',
    gap: '15px',
  },
  button: {
    backgroundColor: '#ffffff',
    border: '1.5px solid #7aa1d2',
    padding: '8px 16px',
    borderRadius: '8px',
    color: '#3f5367',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 8px rgba(122,161,210,0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#7aa1d2',
    color: '#fff',
    borderColor: '#4f72b8',
  },
  card: {
    background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
    borderRadius: '14px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    marginBottom: '25px',
    cursor: 'pointer',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: '14px 14px 0 0',
    boxShadow: '0 6px 20px rgba(0, 123, 255, 0.25)',
    overflow: 'hidden',
    borderBottom: '5px solid #007bff',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s ease',
  },
  imageHover: {
    transform: 'scale(1.05)',
  },
  badge: {
    position: 'absolute',
    top: '14px',
    left: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '14px',
    padding: '6px 12px',
    borderRadius: '8px',
    fontWeight: '600',
    boxShadow: '0 2px 6px rgba(0, 123, 255, 0.6)',
  },
  heartIcon: {
    position: 'absolute',
    top: '14px',
    right: '14px',
    fontSize: '26px',
    color: '#bbb',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    userSelect: 'none',
    filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.15))',
  },
  heartIconHover: {
    color: '#e74c3c',
  },
  heartLiked: {
    color: '#e74c3c',
    filter: 'drop-shadow(0 0 4px #e74c3c)',
  },
  details: {
    padding: '22px 20px',
    background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
    borderRadius: '0 0 14px 14px',
    color: '#2a3a4b',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  titlePrice: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  title: {
    fontSize: '22px',
    margin: 0,
    fontWeight: '700',
    color: '#1a2533',
  },
  price: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#2ecc71',
  },
  icons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    fontSize: '15px',
    marginBottom: '18px',
    color: '#657786',
    fontWeight: '600',
  },
  iconItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  goldStar: {
    color: '#f1c40f',
  },
description: {
  color: '#666',
  marginBottom: '1rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 3,        // limits to ~3 lines (adjust as needed)
  WebkitBoxOrient: 'vertical',
  wordBreak: 'break-word',
},
  bookBtn: {
    alignSelf: 'flex-start',
    padding: '12px 28px',
    backgroundColor: '#27ae60',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '16px',
    boxShadow: '0 5px 12px rgba(39, 174, 96, 0.5)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  },
  bookBtnHover: {
    backgroundColor: '#219150',
    boxShadow: '0 8px 18px rgba(33, 145, 80, 0.7)',
  },
};

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [liked, setLiked] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [imageHoverIndex, setImageHoverIndex] = useState(null);
  const [bookBtnHoverIndex, setBookBtnHoverIndex] = useState(null);
  const [buttonHover, setButtonHover] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/properties');
        setProperties(res.data);

        if (isLoggedIn) {
          const favRes = await axios.get('http://localhost:5500/api/favorites', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          });
          const favObj = {};
          favRes.data.forEach(fav => (favObj[fav.propertyId] = true));
          setLiked(favObj);
        } else {
          const guestFav = JSON.parse(localStorage.getItem('guestFavorites')) || [];
          const favObj = {};
          guestFav.forEach(id => (favObj[id] = true));
          setLiked(favObj);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };
    fetchProperties();
  }, [isLoggedIn]);

  const toggleLike = async (id) => {
    if (isLoggedIn) {
      try {
        if (!liked[id]) {
          await axios.post(
            'http://localhost:5500/api/favorites',
            { propertyId: id },
            {
              headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            }
          );
        } else {
          await axios.delete(`http://localhost:5500/api/favorites/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          });
        }
        setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
      } catch (err) {
        console.error('Error updating favorites:', err);
      }
    } else {
      const guestFav = JSON.parse(localStorage.getItem('guestFavorites')) || [];
      const updatedFav = liked[id] ? guestFav.filter((f) => f !== id) : [...guestFav, id];
      localStorage.setItem('guestFavorites', JSON.stringify(updatedFav));
      setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>Find Your Dream Here</h2>
        <p style={styles.headerSubtitle}>Your Future Home Awaits!</p>
      </div>

      <div style={styles.topBar}>
        <span style={styles.topBarText}>
          Showing 1–{properties.length} of 3k+ properties
        </span>
        <div style={styles.actions}>
          <Link
            to="/filter"
            style={{ ...styles.button, ...(buttonHover ? styles.buttonHover : {}) }}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            <VscSettings size={20} />
            Filter
          </Link>
          <Link
            to="/favourites"
            style={{ ...styles.button, ...(buttonHover ? styles.buttonHover : {}) }}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Favorites
          </Link>
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          600: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1300: { slidesPerView: 3 },
          1500: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}
      >
        {properties.map((property, index) => (
          <SwiperSlide key={property._id}>
            <div
              style={{
                ...styles.card,
                ...(hoverIndex === index ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div
                style={styles.imageWrapper}
                onMouseEnter={() => setImageHoverIndex(index)}
                onMouseLeave={() => setImageHoverIndex(null)}
              >
                <Link to={`/property/${property._id}`}>
                  <img
                    src={`http://localhost:5500${property.image}`}
                    alt={property.title}
                    style={{
                      ...styles.image,
                      ...(imageHoverIndex === index ? styles.imageHover : {}),
                    }}
                  />
                </Link>
                <span style={styles.badge}>{property.location}</span>
                <FaHeart
                  style={{
                    ...styles.heartIcon,
                    ...(liked[property._id] ? styles.heartLiked : {}),
                  }}
                  onClick={() => toggleLike(property._id)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#e74c3c')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = liked[property._id] ? '#e74c3c' : '#bbb')
                  }
                />
              </div>
              <div style={styles.details}>
                <div style={styles.titlePrice}>
                  <h3 style={styles.title}>{property.names}</h3>
                  <span style={styles.price}>${property.price}</span>
                </div>
                <div style={styles.icons}>
                  <span style={styles.iconItem}>
                    <FaBed /> {property.beds} Beds
                  </span>
                  <span style={styles.iconItem}>
                    <FaBath /> {property.baths} Baths
                  </span>
                  <span style={styles.iconItem}>
                    <FaCar /> {property.parking} Parking
                  </span>
                  <span style={styles.iconItem}>
                    <MdMeetingRoom /> {property.rooms} Rooms
                  </span>
                  <span style={styles.iconItem}>
                    <FaArrowsAltH /> {property.size} sqft
                  </span>
                  <span style={styles.iconItem}>
                    <FaStar style={styles.goldStar} /> {property.review} Reviews
                  </span>
                </div>
                <p style={styles.description}>
                  {property.details.split(' ').slice(0, 35).join(' ')}{property.details.split(' ').length > 35 ? '...' : ''}
                </p>
                <Link
                  to={`/property/${property._id}`}
                  style={{
                    ...styles.bookBtn,
                    ...(bookBtnHoverIndex === index ? styles.bookBtnHover : {}),
                  }}
                  onMouseEnter={() => setBookBtnHoverIndex(index)}
                  onMouseLeave={() => setBookBtnHoverIndex(null)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Properties;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { VscSettings } from 'react-icons/vsc';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import { FaBed, FaBath, FaCar, FaHeart, FaStar, FaArrowsAltH } from 'react-icons/fa';
// import { MdMeetingRoom } from 'react-icons/md';
// import axios from 'axios';
// import 'swiper/css';

// const styles = {
//   section: {
//     padding: '50px 20px',
//     background: 'linear-gradient(to right, #f9fafc, #e1eefe)',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     minHeight: '100vh',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '40px',
//   },
//   headerTitle: {
//     fontSize: '36px',
//     fontWeight: '700',
//     color: '#1c2938',
//     marginBottom: '10px',
//     letterSpacing: '1.2px',
//   },
//   headerSubtitle: {
//     fontSize: '20px',
//     color: '#4a5a6a',
//     fontWeight: '500',
//   },
//   topBar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '35px',
//     padding: '0 10px',
//     flexWrap: 'wrap',
//     gap: '15px',
//   },
//   topBarText: {
//     fontSize: '16px',
//     color: '#425060',
//     fontWeight: '600',
//   },
//   actions: {
//     display: 'flex',
//     gap: '15px',
//   },
//   button: {
//     backgroundColor: '#ffffff',
//     border: '1.5px solid #7aa1d2',
//     padding: '8px 16px',
//     borderRadius: '8px',
//     color: '#3f5367',
//     textDecoration: 'none',
//     fontWeight: '600',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     boxShadow: '0 4px 8px rgba(122,161,210,0.2)',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//   },
//   buttonHover: {
//     backgroundColor: '#7aa1d2',
//     color: '#fff',
//     borderColor: '#4f72b8',
//   },
//   card: {
//     background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
//     borderRadius: '14px',
//     boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
//     overflow: 'hidden',
//     marginBottom: '25px',
//     cursor: 'pointer',
//     transition: 'transform 0.35s ease, box-shadow 0.35s ease',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardHover: {
//     transform: 'translateY(-8px)',
//     boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
//   },
//   imageWrapper: {
//     position: 'relative',
//     borderRadius: '14px 14px 0 0',
//     boxShadow: '0 6px 20px rgba(0, 123, 255, 0.25)',
//     overflow: 'hidden',
//     borderBottom: '5px solid #007bff',
//   },
//   image: {
//     width: '100%',
//     height: '220px',
//     objectFit: 'cover',
//     display: 'block',
//     transition: 'transform 0.4s ease',
//   },
//   imageHover: {
//     transform: 'scale(1.05)',
//   },
//   badge: {
//     position: 'absolute',
//     top: '14px',
//     left: '14px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     fontSize: '14px',
//     padding: '6px 12px',
//     borderRadius: '8px',
//     fontWeight: '600',
//     boxShadow: '0 2px 6px rgba(0, 123, 255, 0.6)',
//   },
//   heartIcon: {
//     position: 'absolute',
//     top: '14px',
//     right: '14px',
//     fontSize: '26px',
//     color: '#bbb',
//     cursor: 'pointer',
//     transition: 'color 0.3s ease',
//     userSelect: 'none',
//     filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.15))',
//   },
//   heartIconHover: {
//     color: '#e74c3c',
//   },
//   heartLiked: {
//     color: '#e74c3c',
//     filter: 'drop-shadow(0 0 4px #e74c3c)',
//   },
//   details: {
//     padding: '22px 20px',
//     background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
//     borderRadius: '0 0 14px 14px',
//     color: '#2a3a4b',
//     flexGrow: 1,
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   titlePrice: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '16px',
//   },
//   title: {
//     fontSize: '22px',
//     margin: 0,
//     fontWeight: '700',
//     color: '#1a2533',
//   },
//   price: {
//     fontSize: '20px',
//     fontWeight: '700',
//     color: '#2ecc71',
//   },
//   icons: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '10px',
//     fontSize: '15px',
//     marginBottom: '18px',
//     color: '#657786',
//     fontWeight: '600',
//   },
//   iconItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   goldStar: {
//     color: '#f1c40f',
//   },
//   description: {
//     fontSize: '16px',
//     color: '#4a5a6a',
//     marginBottom: '20px',
//     flexGrow: 1,
//     lineHeight: '1.4',
//     minHeight: '75px',
//   },
//   bookBtn: {
//     alignSelf: 'flex-start',
//     padding: '12px 28px',
//     backgroundColor: '#27ae60',
//     color: '#fff',
//     borderRadius: '8px',
//     textDecoration: 'none',
//     fontWeight: '700',
//     fontSize: '16px',
//     boxShadow: '0 5px 12px rgba(39, 174, 96, 0.5)',
//     transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
//   },
//   bookBtnHover: {
//     backgroundColor: '#219150',
//     boxShadow: '0 8px 18px rgba(33, 145, 80, 0.7)',
//   },
// };

// const Properties = () => {
//   const [properties, setProperties] = useState([]);
//   const [liked, setLiked] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [hoverIndex, setHoverIndex] = useState(null);
//   const [imageHoverIndex, setImageHoverIndex] = useState(null);
//   const [bookBtnHoverIndex, setBookBtnHoverIndex] = useState(null);
//   const [filterHover, setFilterHover] = useState(false);
//   const [favHover, setFavHover] = useState(false);

//   useEffect(() => {
//     setIsLoggedIn(!!localStorage.getItem('token'));
//   }, []);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await axios.get('http://localhost:5500/api/properties');
//         setProperties(res.data);

//         if (isLoggedIn) {
//           const favRes = await axios.get('http://localhost:5500/api/favorites', {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//           });
//           const favObj = {};
//           favRes.data.forEach(fav => (favObj[fav.propertyId] = true));
//           setLiked(favObj);
//         } else {
//           const guestFav = JSON.parse(localStorage.getItem('guestFavorites')) || [];
//           const favObj = {};
//           guestFav.forEach(id => (favObj[id] = true));
//           setLiked(favObj);
//         }
//       } catch (err) {
//         console.error('Error:', err);
//       }
//     };
//     fetchProperties();
//   }, [isLoggedIn]);

//   const toggleLike = async (id) => {
//     if (isLoggedIn) {
//       try {
//         if (!liked[id]) {
//           await axios.post(
//             'http://localhost:5500/api/favorites',
//             { propertyId: id },
//             {
//               headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//             }
//           );
//         } else {
//           await axios.delete(`http://localhost:5500/api/favorites/${id}`, {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//           });
//         }
//         setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
//       } catch (err) {
//         console.error('Error updating favorites:', err);
//       }
//     } else {
//       const guestFav = JSON.parse(localStorage.getItem('guestFavorites')) || [];
//       const updatedFav = liked[id] ? guestFav.filter((f) => f !== id) : [...guestFav, id];
//       localStorage.setItem('guestFavorites', JSON.stringify(updatedFav));
//       setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
//     }
//   };

//   return (
//     <section style={styles.section}>
//       <div style={styles.header}>
//         <h2 style={styles.headerTitle}>Find Your Dream Here</h2>
//         <p style={styles.headerSubtitle}>Your Future Home Awaits!</p>
//       </div>

//       <div style={styles.topBar}>
//         <span style={styles.topBarText}>
//           Showing 1–{properties.length} of 3k+ properties
//         </span>
//         <div style={styles.actions}>
//           <Link
//             to="/filter"
//             style={{ ...styles.button, ...(filterHover ? styles.buttonHover : {}) }}
//             onMouseEnter={() => setFilterHover(true)}
//             onMouseLeave={() => setFilterHover(false)}
//           >
//             <VscSettings size={20} />
//             Filter
//           </Link>
//           <Link
//             to="/favourites"
//             style={{ ...styles.button, ...(favHover ? styles.buttonHover : {}) }}
//             onMouseEnter={() => setFavHover(true)}
//             onMouseLeave={() => setFavHover(false)}
//           >
//             Favorites
//           </Link>
//         </div>
//       </div>

//       <Swiper
//         spaceBetween={30}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         breakpoints={{
//           600: { slidesPerView: 1 },
//           900: { slidesPerView: 2 },
//           1300: { slidesPerView: 3 },
//           1500: { slidesPerView: 4 },
//         }}
//         modules={[Autoplay]}
//       >
//         {properties.map((property, index) => (
//           <SwiperSlide key={property._id}>
//             <div
//               style={{
//                 ...styles.card,
//                 ...(hoverIndex === index ? styles.cardHover : {}),
//               }}
//               onMouseEnter={() => setHoverIndex(index)}
//               onMouseLeave={() => setHoverIndex(null)}
//             >
//               <div
//                 style={styles.imageWrapper}
//                 onMouseEnter={() => setImageHoverIndex(index)}
//                 onMouseLeave={() => setImageHoverIndex(null)}
//               >
//                 <Link to={`/property/${property._id}`}>
//                   <img
//                     src={`http://localhost:5500${property.image.startsWith('/') ? property.image : '/' + property.image}`}
//                     alt={property.names}
//                     style={{
//                       ...styles.image,
//                       ...(imageHoverIndex === index ? styles.imageHover : {}),
//                     }}
//                   />
//                 </Link>
//                 <span style={styles.badge}>{property.location}</span>
//                 <FaHeart
//                   style={{
//                     ...styles.heartIcon,
//                     ...(liked[property._id] ? styles.heartLiked : {}),
//                   }}
//                   onClick={() => toggleLike(property._id)}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = '#e74c3c')}
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.color = liked[property._id] ? '#e74c3c' : '#bbb')
//                   }
//                 />
//               </div>
//               <div style={styles.details}>
//                 <div style={styles.titlePrice}>
//                   <h3 style={styles.title}>{property.names}</h3>
//                   <span style={styles.price}>${property.price}</span>
//                 </div>
//                 <div style={styles.icons}>
//                   <span style={styles.iconItem}>
//                     <FaBed /> {property.beds} Beds
//                   </span>
//                   <span style={styles.iconItem}>
//                     <FaBath /> {property.baths} Baths
//                   </span>
//                   <span style={styles.iconItem}>
//                     <FaCar /> {property.parking} Parking
//                   </span>
//                   <span style={styles.iconItem}>
//                     <MdMeetingRoom /> {property.rooms} Rooms
//                   </span>
//                   <span style={styles.iconItem}>
//                     <FaArrowsAltH /> {property.size} sqft
//                   </span>
//                   <span style={styles.iconItem}>
//                     <FaStar /> {property.rating}
//                   </span>
//                                 <p style={styles.description}>{property.details}</p>

//                 </div>
//                 <Link
//                   to={`/property/${property._id}`}
//                   style={{
//                     ...styles.bookNowButton,
//                     ...(bookBtnHoverIndex === index ? styles.bookNowButtonHover : {}),
//                   }}
//                   onMouseEnter={() => setBookBtnHoverIndex(index)}
//                   onMouseLeave={() => setBookBtnHoverIndex(null)}
//                 >
//                   Book Now
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Properties;
