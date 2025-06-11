import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    const fetchFavorites = async () => {
      if (token) {
        try {
          const res = await fetch('http://localhost:5500/api/favorites', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await res.json();
          setFavorites(data);
        } catch (err) {
          console.error('Error fetching favorites:', err);
        }
      } else {
        const guestFavIds = JSON.parse(localStorage.getItem('guestFavorites')) || [];
        if (guestFavIds.length === 0) {
          setFavorites([]);
          return;
        }

        try {
          const res = await fetch('http://localhost:5500/api/properties');
          const allProperties = await res.json();
          const favProps = allProperties.filter((p) => guestFavIds.includes(p._id));
          setFavorites(favProps);
        } catch (err) {
          console.error('Error fetching properties for guest favorites:', err);
        }
      }
    };

    fetchFavorites();
  }, []);

const handleRemoveFavorite = async (propertyId) => {
  const confirmRemove = window.confirm("Are you sure you want to remove this property from your favorites?");
  if (!confirmRemove) return;

  if (isLoggedIn) {
    try {
      await fetch(`http://localhost:5500/api/favorites/${propertyId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setFavorites(favorites.filter((fav) => fav._id !== propertyId));
    } catch (err) {
      console.error('Error removing favorite:', err);
    }
  } else {
    const guestFavs = JSON.parse(localStorage.getItem('guestFavorites')) || [];
    const updatedFavs = guestFavs.filter(id => id !== propertyId);
    localStorage.setItem('guestFavorites', JSON.stringify(updatedFavs));
    setFavorites(favorites.filter((fav) => fav._id !== propertyId));
  }
};


  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f9f9f9', minHeight: '100vh',paddingTop:'110px',backgroundColor:"#CBAD7F" }}>
      <Header />

      <div style={styles.banner}>
        <h1>My Favourites</h1>
      </div>

      <div style={{ display: 'flex', width: '80%', margin: '20px auto', gap: '20px',marginBottom:'120px' }}>
        {/* Sidebar */}
        <div style={{ width: '25%', background: '#f4f4f4', padding: '20px', borderRadius: '8px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={styles.sidebarItem}><Link to="/my-bookings" style={styles.sidebarLink}>My Bookings</Link></li>
            <li style={styles.sidebarItem}><Link to="/profile" style={styles.sidebarLink}>Profile Update</Link></li>
            <li style={styles.sidebarItem}><Link to="/favourites" style={styles.sidebarLink}>My Favourites</Link></li>
            <li style={styles.sidebarItem}><Link to="/post-testimonial" style={styles.sidebarLink}>Post a Testimonial</Link></li>
            <li style={styles.sidebarItem}><Link to="/my-testimonial" style={styles.sidebarLink}>My Testimonials</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={{ flexGrow: 1, padding: '20px', maxWidth: '800px', margin: 'auto' }}>
          <h2 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>MY FAVOURITES</h2>

          {favorites.length > 0 ? (
            <div style={styles.favoritesGrid}>
              {favorites.map((property) => (
                <div key={property._id} style={styles.favoriteCard}>
                  <img
                    src={`http://localhost:5500${property.image}`}
                    alt={property.title}
                    style={styles.propertyImage}
                  />
                  <div style={{ padding: '10px' }}>
                    <h3 style={{ margin: '5px 0' }}>{property.title}</h3>
                    <p style={{ color: '#555', margin: '5px 0' }}>{property.location}</p>
                    <p style={{ color: '#83b735', fontWeight: 'bold', margin: '5px 0' }}>${property.price}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                      <Link
                        to={`/property/${property._id}`}
                        style={styles.detailsButton}
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => handleRemoveFavorite(property._id)}
                        style={styles.removeButton}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: '#777' }}>No favorites added yet.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  banner: {
    width: "100%",
    textAlign: "center",
    padding: "50px 20px",
    color: "white",
    backgroundImage: "url('https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg')",
    backgroundSize: "cover"
  },
  sidebarItem: {
    padding: "12px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd"
  },
  sidebarLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold"
  },
  favoritesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px'
  },
  favoriteCard: {
    background: '#fff',
    padding: '0',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  propertyImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  detailsButton: {
    padding: '8px 12px',
    backgroundColor: '#83b735',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  removeButton: {
    padding: '8px 12px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default Favorites;
