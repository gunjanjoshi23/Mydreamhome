// import React, { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Header from "./Header";
// import Footer from "./Footer";

// const PropertyDetail = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const dateInputRef = useRef(null);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5500/api/properties/${id}`, { withCredentials: true });
//         setProperty(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load property details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchProperty();
//     else {
//       setError("Invalid property ID.");
//       setLoading(false);
//     }
//   }, [id]);

//   const handleBookVisit = () => setShowBookingForm(true);
//   const handleClose = () => setShowBookingForm(false);

//   // Dynamically load Razorpay SDK
//   const loadRazorpay = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const bookingData = {
//       name: form.name.value,
//       email: form.email.value,
//       date: form.date.value,
//       notes: form.notes.value,
//       propertyId: id,
//     };

//     try {
//       // Create booking and get Razorpay order details
//       const res = await axios.post("http://localhost:5500/api/bookings", bookingData, { withCredentials: true });
//       const { booking, order } = res.data;

//       const razorpayLoaded = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
//       if (!razorpayLoaded) {
//         alert("Razorpay SDK failed to load");
//         return;
//       }

//       const options = {
//         key: "rzp_test_INJ02hOhTb9FAT", // Replace with your Razorpay Key ID
//         amount: order.amount,
//         currency: "INR",
//         name: "Dream Home Booking",
//         description: `Booking for ${property.title}`,
//         order_id: order.id,
//         handler: function (response) {
//           alert("Payment successful!");
//           setShowBookingForm(false);
//         },
//         prefill: {
//           name: bookingData.name,
//           email: bookingData.email,
//         },
//         notes: {
//           bookingId: booking._id,
//         },
//         theme: {
//           color: "#000000",
//         },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     } catch (err) {
//       console.error(err);
//       alert("Booking or payment failed.");
//     }
//   };

//   if (loading) return <div>Loading property details...</div>;
//   if (error) return <div style={{ color: "red" }}>{error}</div>;
//   if (!property) return <div>No property found.</div>;

//   const {
//     title,
//     address,
//     location,
//     beds,
//     baths,
//     area,
//     rooms,
//     price,
//     rating,
//     details,
//     image,
//   } = property;

//   return (
//     <>
//       <Header />
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           padding: "20px",
//           fontFamily: "Arial",
//           marginTop: "100px",
//           paddingTop: "80px",
//           backgroundColor: "#CBAD7F",
//         }}
//       >
//         <div style={{ flex: 1, minWidth: "320px", marginBottom: "20px" }}>
//           <img
//             src={image ? `http://localhost:5500${image}` : "/default-image.jpg"}
//             alt={title || "Property"}
//             style={{
//               width: "100%",
//               height: "300px",
//               objectFit: "cover",
//               borderRadius: "10px",
//             }}
//           />
//           <h2>{title}</h2>
//           <p style={{ color: "gray" }}>{address}</p>
//           <p style={{ color: "green", fontWeight: "bold" }}>{location}</p>
//           <p>
//             🛏 {beds} &nbsp; 🛁 {baths} &nbsp; 🚗 {area} sqft &nbsp; 🏠 {rooms}{" "}
//             Rooms
//           </p>
//           <h3 style={{ color: "#000" }}>${price.toFixed(2)}</h3>
//           <p style={{ color: "green" }}>⭐ {rating}</p>
//           <h4>Property Details</h4>
//           <p style={{ maxWidth: "600px", lineHeight: "1.5" }}>{details}</p>
//           <button
//             onClick={handleBookVisit}
//             style={{
//               marginTop: "20px",
//               padding: "10px 20px",
//               backgroundColor: "black",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Book the visit
//           </button>
//         </div>

//         {/* Google Map */}
//         <div
//           style={{
//             flex: 1,
//             minWidth: "320px",
//             marginLeft: "20px",
//             marginTop: "1rem",
//           }}
//         >
//           <iframe
//             title="Property Location"
//             src={`https://www.google.com/maps?q=${encodeURIComponent(
//               address || location
//             )}&output=embed`}
//             loading="lazy"
//             allowFullScreen
//             style={{
//               width: "100%",
//               height: "300px",
//               border: "none",
//               borderRadius: "12px",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//             }}
//           ></iframe>
//           <div style={{ marginTop: "10px" }}>
//             <a
//               href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//                 address || location
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "blue", textDecoration: "underline" }}
//             >
//               View on Google Maps
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Booking Form Popup */}
//       {showBookingForm && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.6)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               padding: "30px",
//               borderRadius: "8px",
//               width: "400px",
//               maxWidth: "90%",
//               position: "relative",
//             }}
//           >
//             <button
//               onClick={handleClose}
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "10px",
//                 background: "transparent",
//                 border: "none",
//                 fontSize: "18px",
//                 cursor: "pointer",
//               }}
//               aria-label="Close booking form"
//             >
//               ✖
//             </button>
//             <h3 style={{ marginBottom: "20px" }}>Book Your Visit</h3>

//             <form onSubmit={handleBookingSubmit}>
//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Your Name"
//                 required
//                 style={inputStyle}
//               />
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Your Email"
//                 required
//                 style={inputStyle}
//               />
//               <input
//                 name="date"
//                 type="date"
//                 required
//                 style={inputStyle}
//                 ref={dateInputRef}
//                 onClick={() => {
//                   if (dateInputRef.current?.showPicker)
//                     dateInputRef.current.showPicker();
//                   else dateInputRef.current.focus();
//                 }}
//               />
//               <textarea
//                 name="notes"
//                 placeholder="Additional Notes"
//                 style={{ ...inputStyle, height: "80px" }}
//               ></textarea>
//               <button
//                 type="submit"
//                 style={{
//                   ...inputStyle,
//                   backgroundColor: "black",
//                   color: "white",
//                   cursor: "pointer",
//                 }}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//       <Footer />
//     </>
//   );
// };

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   marginBottom: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };

// export default PropertyDetail;


// PropertyDetail.jsx
// import React, { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Header from "./Header";
// import Footer from "./Footer";

// const PropertyDetail = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const dateInputRef = useRef(null);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5500/api/properties/${id}`, {
//           withCredentials: true,
//         });
//         setProperty(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load property details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchProperty();
//     else {
//       setError("Invalid property ID.");
//       setLoading(false);
//     }
//   }, [id]);

//   const handleBookVisit = () => setShowBookingForm(true);
//   const handleClose = () => setShowBookingForm(false);

//   const loadRazorpay = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const bookingData = {
//       name: form.name.value,
//       email: form.email.value,
//       date: form.date.value,
//       notes: form.notes.value,
//       propertyId: id,
//     };

//     try {
//       const res = await axios.post("http://localhost:5500/api/bookings", bookingData, {
//         withCredentials: true,
//       });

//       const { booking, order } = res.data;
//       const loaded = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

//       if (!loaded) {
//         alert("Failed to load Razorpay SDK");
//         return;
//       }

//       const options = {
//         key: "rzp_test_INJ02hOhTb9FAT", // Replace with your key
//         amount: order.amount,
//         currency: "INR",
//         name: "Dream Home Booking",
//         description: `Booking for ${property.title}`,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verifyRes = await axios.post(
//               "http://localhost:5500/api/verify-payment",
//               {
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature,
//               },
//               { withCredentials: true }
//             );

//             alert("Payment successful and verified!");
//             setShowBookingForm(false);
//           } catch (err) {
//             console.error("Payment verification failed", err);
//             alert("Payment verification failed.");
//           }
//         },
//         prefill: {
//           name: bookingData.name,
//           email: bookingData.email,
//         },
//         notes: {
//           bookingId: booking._id,
//         },
//         theme: {
//           color: "#000000",
//         },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     } catch (err) {
//       console.error(err);
//       alert("Booking or payment failed.");
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div style={{ color: "red" }}>{error}</div>;

//   const { title, names, location,address, beds, baths, area, rooms, price, rating, details, image } = property;

//   return (
//     <>
//       <Header />
//       <div style={{ padding: "20px", backgroundColor: "#CBAD7F", marginTop: "100px" }}>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//           <div style={{ flex: 1, minWidth: "300px" }}>
//             <img
//               src={`http://localhost:5500${image}`}
//               alt={title}
//               style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "10px" }}
//             />
//             <h2>{title}</h2>
//             <p>{names}</p>
//             <p>{location}</p>
//             <p>🛏 {beds} | 🛁 {baths} | 📐 {area} sqft | 🏠 {rooms} rooms</p>
//             <h3>₹{price.toFixed(2)}</h3>
//             <p>⭐ {rating}</p>
//             <p>{details}</p>
//             <button onClick={handleBookVisit} style={{ padding: "10px", background: "black", color: "white" }}>
//               Book the visit
//             </button>
//           </div>

//           <div style={{ flex: 1 }}>
//             <iframe
//               src={`https://www.google.com/maps?q=${encodeURIComponent(address || location)}&output=embed`}
//               title="Map"
//               style={{ width: "100%", height: "300px", border: "0", borderRadius: "10px" }}
//               loading="lazy"
//             ></iframe>
//             <a
//               href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//                 address || location
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "blue", textDecoration: "underline", marginTop: "10px", display: "inline-block" }}
//             >
//               View on Google Maps
//             </a>
//           </div>
//         </div>
//       </div>

//       {showBookingForm && (
//         <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "#00000099", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
//           <div style={{ background: "#fff", padding: "30px", borderRadius: "8px", width: "400px", position: "relative" }}>
//             <button onClick={handleClose} style={{ position: "absolute", top: 10, right: 10, fontSize: "18px", background: "none", border: "none" }}>
//               ✖
//             </button>
//             <h3>Book Your Visit</h3>
//             <form onSubmit={handleBookingSubmit}>
//               <input name="name" placeholder="Your Name" required style={inputStyle} />
//               <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />
//               <input
//                 name="date"
//                 type="date"
//                 required
//                 style={inputStyle}
//                 ref={dateInputRef}
//                 onClick={() => {
//                   dateInputRef.current?.showPicker?.();
//                   dateInputRef.current?.focus();
//                 }}
//               />
//               <textarea name="notes" placeholder="Notes" style={{ ...inputStyle, height: "80px" }} />
//               <button type="submit" style={{ ...inputStyle, backgroundColor: "black", color: "white", cursor: "pointer" }}>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//       <Footer />
//     </>
//   );
// };

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   marginBottom: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };

// export default PropertyDetail;
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const dateInputRef = useRef(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`http://localhost:5500/api/properties/${id}`, {
          withCredentials: true,
        });
        setProperty(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProperty();
    else {
      setError("Invalid property ID.");
      setLoading(false);
    }
  }, [id]);

  const handleBookVisit = () => setShowBookingForm(true);
  const handleClose = () => setShowBookingForm(false);

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const bookingData = {
      name: form.name.value,
      email: form.email.value,
      date: form.date.value,
      notes: form.notes.value,
      propertyId: id,
    };

    try {
      const res = await axios.post("http://localhost:5500/api/bookings", bookingData, {
        withCredentials: true,
      });

      const { booking, order } = res.data;
      const loaded = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

      if (!loaded) {
        alert("Failed to load Razorpay SDK");
        return;
      }

      const options = {
        key: "rzp_test_INJ02hOhTb9FAT", // Replace with your key
        amount: order.amount,
        currency: "INR",
        name: "Dream Home Booking",
        description: `Booking for ${property.title}`,
        order_id: order.id,
        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              "http://localhost:5500/api/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              { withCredentials: true }
            );

            alert("Payment successful and verified!");
            setShowBookingForm(false);
          } catch (err) {
            console.error("Payment verification failed", err);
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: bookingData.name,
          email: bookingData.email,
        },
        notes: {
          bookingId: booking._id,
        },
        theme: {
          color: "#6a4f4b",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      alert("Booking or payment failed.");
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const { title, names, location, address, beds, baths, area, rooms, price, rating, details, image } = property;

  return (
    <>
      <Header />
      <main style={styles.mainContainer}>
        <div style={styles.card}>
          <div style={styles.leftPanel}>
            <img
              src={`http://localhost:5500${image}`}
              alt={title}
              style={styles.propertyImage}
              loading="lazy"
            />
            <div style={styles.mapContainer}>
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(address || location)}&output=embed`}
                title="Map"
                style={styles.mapFrame}
                loading="lazy"
              ></iframe>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address || location)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.mapLink}
              >
                View on Google Maps
              </a>
            </div>
          </div>

          <div style={styles.rightPanel}>
            <h1 style={styles.title}>{title}</h1>
            <p style={styles.owner}><strong>Property Name:</strong> {names}</p>
            <p style={styles.location}><strong>Location:</strong> {location}</p>
            <p style={styles.features}>
              🛏 {beds} &nbsp;&nbsp; | &nbsp;&nbsp; 🛁 {baths} &nbsp;&nbsp; | &nbsp;&nbsp; 📐 {area} sqft &nbsp;&nbsp; | &nbsp;&nbsp; 🏠 {rooms} rooms
            </p>
            <h2 style={styles.price}>₹{price.toFixed(2)}</h2>
            <p style={styles.rating}>⭐ {rating.toFixed(1)}</p>
            <p style={styles.details}>{details}</p>

            <button style={styles.bookBtn} onClick={handleBookVisit}>
              Book the Visit
            </button>
          </div>
        </div>
      </main>

      {showBookingForm && (
        <BookingForm
          onClose={handleClose}
          onSubmit={handleBookingSubmit}
          dateInputRef={dateInputRef}
        />
      )}

      <Footer />
    </>
  );
};

const Loader = () => (
  <div style={styles.loader}>Loading property details...</div>
);

const ErrorMessage = ({ message }) => (
  <div style={styles.errorMessage}>{message}</div>
);

const BookingForm = ({ onClose, onSubmit, dateInputRef }) => (
  <div style={styles.bookingOverlay}>
    <div style={styles.bookingModal}>
      <button onClick={onClose} style={styles.closeBtn} aria-label="Close booking form">
        ✖
      </button>
      <h3 style={{ marginBottom: 20, color: "#6a4f4b" }}>Book Your Visit</h3>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          required
          style={styles.inputField}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          style={styles.inputField}
        />
        <input
          name="date"
          type="date"
          required
          style={styles.inputField}
          ref={dateInputRef}
          onClick={() => {
            dateInputRef.current?.showPicker?.();
            dateInputRef.current?.focus();
          }}
        />
        <textarea
          name="notes"
          placeholder="Additional Notes (optional)"
          style={{ ...styles.inputField, height: "80px", resize: "vertical" }}
        />
        <button type="submit" style={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  </div>
);

const styles = {
  mainContainer: {
    padding: "40px 20px",
    maxWidth: "1500px",
    margin: "60px auto 60px",
    background: "linear-gradient(135deg, #f0e5d8, #c4b99e)",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
  },
  leftPanel: {
    flex: "1 1 450px",
    minWidth: "320px",
  },
  propertyImage: {
    width: "100%",
    borderRadius: "15px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
    objectFit: "cover",
    maxHeight: "400px",
  },
  mapContainer: {
    marginTop: "25px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  },
  mapFrame: {
    width: "100%",
    height: "320px",
    border: "none",
  },
  mapLink: {
    display: "inline-block",
    padding: "8px 12px",
    marginTop: "10px",
    fontWeight: "600",
    color: "#6a4f4b",
    textDecoration: "none",
    borderRadius: "8px",
    backgroundColor: "#f7e6d7",
    boxShadow: "0 3px 6px rgba(106, 79, 75, 0.3)",
    transition: "background-color 0.3s ease",
  },
  rightPanel: {
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  title: {
    fontSize: '28px',
    marginBottom: '15px',
    fontWeight: '700',
  },
  owner: {
    fontSize: '18px',
    marginBottom: '8px',
  },
  location: {
    fontSize: '18px',
    marginBottom: '8px',
  },
  features: {
    fontSize: '16px',
    marginBottom: '12px',
    color: '#555',
  },
  price: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#2a9d8f',
  },
  rating: {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#f4a261',
  },
  details: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  bookBtn: {
    padding: '12px 25px',
    fontSize: '18px',
    backgroundColor: '#264653',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },


  bookingOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1100,
    padding: "20px",
  },
  bookingModal: {
    backgroundColor: "#fefcf8",
    padding: "35px 30px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(106, 79, 75, 0.4)",
    width: "100%",
    maxWidth: "420px",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "transparent",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
    color: "#6a4f4b",
  },
  inputField: {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1.8px solid #c4b99e",
    fontSize: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#4b3a2d",
    outlineColor: "#a97857",
    transition: "border-color 0.25s ease",
  },
  submitBtn: {
    width: "100%",
    padding: "14px 0",
    backgroundColor: "#6a4f4b",
    color: "#f9f6f2",
    fontWeight: "700",
    fontSize: "1.2rem",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(106, 79, 75, 0.7)",
    transition: "background-color 0.3s ease",
  },
  loader: {
    marginTop: "150px",
    textAlign: "center",
    fontSize: "1.4rem",
    color: "#6a4f4b",
    fontWeight: "600",
  },
  errorMessage: {
    marginTop: "150px",
    textAlign: "center",
    fontSize: "1.2rem",
    color: "red",
    fontWeight: "600",
  },
};

export default PropertyDetail;
