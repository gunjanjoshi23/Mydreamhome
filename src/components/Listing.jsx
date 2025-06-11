import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaCar, FaHeart, FaStar, FaArrowsAltH } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    padding: '40px 30px',
    backgroundColor: 'transparent', // make container transparent so gradient shows through
    minHeight: '100vh',
  },
  card: (color) => ({
    position: 'relative',
    backgroundColor: '#ffffff', // default white, overridden dynamically
    padding: '20px',
    borderRadius: '12px',
    color: '#333',
    boxShadow: `0 6px 20px rgba(0,0,0,0.1)`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  }),
  cardHover: {
    transform: 'translateY(-10px)',
    boxShadow: `0 12px 30px rgba(0,0,0,0.2)`,
  },
  badge: (color) => ({
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#fff',
    border: `2px solid ${color}`,
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '13px',
    color,
    fontWeight: '600',
  }),
  title: {
    fontSize: '20px',
    margin: '12px 0 6px 0',
    fontWeight: '600',
  },
  text: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.5',
    marginTop: '10px',
  },
  link: (color) => ({
    marginTop: '15px',
    display: 'inline-block',
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    backgroundColor: color,
    transition: 'background-color 0.3s ease',
  }),
  searchInput: {
    padding: '12px 15px',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    margin: '20px auto',
    outline: 'none',
    display: 'block',
  },
  likeIcon: (liked) => ({
    position: 'absolute',
    top: 12,
    right: 12,
    color: liked ? 'red' : '#888',
    background: '#fff',
    padding: '8px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '18px',
    boxShadow: '0 0 6px rgba(0,0,0,0.1)',
    transition: 'color 0.3s ease',
  }),
};

const pastelColors = [
  '#e3f2fd', // light blue
  '#e8f5e9', // light green
  '#fff3e0', // light orange
  '#fce4ec', // light pink
  '#ede7f6', // light purple
];

const Listing = () => {
  const [properties, setProperties] = useState([]);
  const [liked, setLiked] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/properties');
        setProperties(res.data);
      } catch (err) {
        console.error('Error fetching properties:', err);
      }
    };
    fetchProperties();
  }, []);

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProperties = properties.filter((property) => {
    const title = property.title ?? '';
    const location = property.location ?? '';
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <Header />
      <section
        style={{
          paddingTop: '130px',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #e0f7fa, #80deea)', // soft blue gradient background
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <input
            type="text"
            placeholder="Search by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        <div style={styles.container}>
          {filteredProperties.map((property, index) => {
            const shadowColor = '#4caf50'; // lime green

            return (
              <div
                key={property._id}
                style={{
                  ...styles.card(shadowColor),
                  backgroundColor: pastelColors[index % pastelColors.length],
                  ...(hovered === property._id ? styles.cardHover : {}),
                }}
                onMouseEnter={() => setHovered(property._id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ position: 'relative' }}>
                  <Link to={`/property/${property._id}`}>
                    <img
                      src={`http://localhost:5500${property.image}`}
                      alt={property.title}
                      style={{
                        width: '100%',
                        height: '220px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    />
                  </Link>
                  <FaHeart
                    onClick={() => toggleLike(property._id)}
                    style={styles.likeIcon(liked[property._id])}
                  />
                  <div style={styles.badge(shadowColor)}>{property.location}</div>
                </div>
                <h3 style={styles.title}>{property.title}</h3>
                <span style={{ fontWeight: 'bold', fontSize: '16px', color: shadowColor }}>
                  ${property.price}
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    fontSize: '14px',
                    color: '#444',
                    marginTop: '10px',
                  }}
                >
                  <span>
                    <FaBed /> {property.beds}
                  </span>
                  <span>
                    <FaBath /> {property.baths}
                  </span>
                  <span>
                    <MdMeetingRoom /> {property.rooms}
                  </span>
                  <span>
                    <FaCar /> {property.parking}
                  </span>
                  <span>
                    <FaArrowsAltH /> {property.size}
                  </span>
                  <span>
                    <FaStar style={{ color: 'gold' }} /> {property.rating}
                  </span>
                </div>
                <p style={styles.text}>
                  {property.details?.length > 200
                    ? property.details.slice(0, 200) + '...'
                    : property.details}
                </p>
                <Link to={`/property/${property._id}`} style={styles.link(shadowColor)}>
                  Book Now
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Listing;
