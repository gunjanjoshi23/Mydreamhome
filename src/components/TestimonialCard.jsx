import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    width: '45%',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const profileStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const verifiedStyle = {
    backgroundColor: '#c9f7c9',
    color: '#228B22',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '0.8em',
    display: 'flex',
    alignItems: 'center',
  };

  const starStyle = {
    color: 'green',
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div style={profileStyle}>
          <img src={testimonial.image} alt="user" style={imageStyle} />
          <strong>{testimonial.name}</strong>
        </div>
        {testimonial.verified && (
          <div style={verifiedStyle}>
            ✓ Verified
          </div>
        )}
      </div>
      <div style={{ marginTop: '10px' }}>
        <div style={starStyle}>{'★'.repeat(testimonial.rating)}</div>
        <h4>{testimonial.title}</h4>
        <p>{testimonial.message}</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {testimonial.photos.map((url, idx) => (
            <img key={idx} src={url} alt="property" width="50" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
