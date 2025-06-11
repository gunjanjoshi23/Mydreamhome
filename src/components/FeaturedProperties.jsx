import React from 'react';

const FeaturedProperties = ({ properties }) => {
  return (
    <div>
      <h2 style={{ marginTop: '2rem' }}>Featured Properties</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {properties.map((property) => (
          <div key={property.id} style={{ width: '300px', borderRadius: '8px', border: '1px solid #ccc' }}>
            <img
              src={property.imageUrl}
              alt={property.name}
              style={{
                width: '100%',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                objectFit: 'cover',
                height: '200px',
              }}
            />
            <div style={{ padding: '1rem' }}>
              <h3>{property.name}</h3>
              <p>{property.description}</p>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
