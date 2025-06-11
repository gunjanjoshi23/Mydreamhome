// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('http://localhost:5500/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     });
//     const data = await res.json();
//     alert(data.message);
//   };

//   return (
//     <>
//       <Header />
//       <div style={{
//         display: 'flex',
//         minHeight: '100vh',
//         backgroundImage: `url('https://cdn.i-scmp.com/sites/default/files/styles/landscape_250_99/public/d8/images/canvas/2021/12/01/15b731de-522e-4a2a-9c7f-08a87aaac325_f605087d.jpg?itok=p0Qr_FK2&v=1638339341')`,
//         backgroundSize: 'cover',

//         backgroundPosition: 'center',
//         color: 'white',
//         marginTop: '110px'
//       }}>
//         <div style={{ flex: 1, padding: '60px' }}>
//           <h1 style={{ fontSize: '38px', fontWeight: 'bold' }}>
//             The best way to find<br />your properties and<br />trusted service!
//           </h1>
//           <div style={{ marginTop: '40px' }}>
//             <div style={{ display: 'flex', marginBottom: '20px' }}>
//               <div style={{
//                 height: '30px',
//                 width: '30px',
//                 borderRadius: '50%',
//                 backgroundColor: '#00d084',
//                 color: 'white',
//                 textAlign: 'center',
//                 lineHeight: '30px',
//                 marginRight: '15px'
//               }}>01</div>
//               <div>
//                 <h4 style={{ margin: 0, color: '#00d084' }}>What makes us preferred choice.</h4>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//               </div>
//             </div>
//             <div style={{ display: 'flex' }}>
//               <div style={{
//                 height: '30px',
//                 width: '30px',
//                 borderRadius: '50%',
//                 border: '2px solid #00d084',
//                 color: '#00d084',
//                 textAlign: 'center',
//                 lineHeight: '26px',
//                 marginRight: '15px'
//               }}>02</div>
//               <div>
//                 <h4 style={{ margin: 0, color: '#00d084' }}>Mile financing in real estate.</h4>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div style={{
//           flex: 1,
//           backgroundColor: '#30e3ca',
//           margin: '60px',
//           borderRadius: '10px',
//           padding: '40px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center'
//         }}>
//           <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>GET A FREE QUOTE!</h2>
//           <form onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="*Your Name" required value={formData.name} onChange={handleChange}
//               style={inputStyle} />
//             <input type="email" name="email" placeholder="*Your Email" required value={formData.email} onChange={handleChange}
//               style={inputStyle} />
//             <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange}
//               style={inputStyle} />
//             <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}
//               rows={4} style={{ ...inputStyle, resize: 'none' }} />
//             <button type="submit" style={buttonStyle}>SEND MESSAGE</button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// const inputStyle = {
//   width: '100%',
//   padding: '12px',
//   marginBottom: '15px',
//   border: 'none',
//   borderRadius: '4px'
// };

// const buttonStyle = {
//   width: '100%',
//   padding: '12px',
//   backgroundColor: '#0d1b2a',
//   color: 'white',
//   border: 'none',
//   borderRadius: '4px',
//   fontWeight: 'bold',
//   cursor: 'pointer'
// };

// export default ContactUs;


// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5500/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
//       const data = await res.json();
//       alert(data.message);

//       // Page refresh after submission
//       window.location.reload();
//     } catch (error) {
//       alert('Something went wrong. Please try again.');
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div
//         style={{
//           display: 'flex',
//           minHeight: '100vh',
//           backgroundImage: `url('https://cdn.i-scmp.com/sites/default/files/styles/landscape_250_99/public/d8/images/canvas/2021/12/01/15b731de-522e-4a2a-9c7f-08a87aaac325_f605087d.jpg?itok=p0Qr_FK2&v=1638339341')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           marginTop: '110px',
//         }}
//       >
//         <div style={{ flex: 1, padding: '60px' }}>
//           <h1 style={{ fontSize: '38px', fontWeight: 'bold' }}>
//             The best way to find
//             <br />
//             your properties and
//             <br />
//             trusted service!
//           </h1>
//           <div style={{ marginTop: '40px' }}>
//             <div style={{ display: 'flex', marginBottom: '20px' }}>
//               <div
//                 style={{
//                   height: '30px',
//                   width: '30px',
//                   borderRadius: '50%',
//                   backgroundColor: '#00d084',
//                   color: 'white',
//                   textAlign: 'center',
//                   lineHeight: '30px',
//                   marginRight: '15px',
//                 }}
//               >
//                 01
//               </div>
//               <div>
//                 <h4 style={{ margin: 0, color: '#00d084' }}>
//                   What makes us preferred choice.
//                 </h4>
//                 <p>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry.
//                 </p>
//               </div>
//             </div>
//             <div style={{ display: 'flex' }}>
//               <div
//                 style={{
//                   height: '30px',
//                   width: '30px',
//                   borderRadius: '50%',
//                   border: '2px solid #00d084',
//                   color: '#00d084',
//                   textAlign: 'center',
//                   lineHeight: '26px',
//                   marginRight: '15px',
//                 }}
//               >
//                 02
//               </div>
//               <div>
//                 <h4 style={{ margin: 0, color: '#00d084' }}>
//                   Mile financing in real estate.
//                 </h4>
//                 <p>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           style={{
//             flex: 1,
//             backgroundColor: '#30e3ca',
//             margin: '60px',
//             borderRadius: '10px',
//             padding: '40px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//           }}
//         >
//           <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
//             GET A FREE QUOTE!
//           </h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="*Your Name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               style={inputStyle}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="*Your Email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               style={inputStyle}
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Your Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               style={inputStyle}
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               style={{ ...inputStyle, resize: 'none' }}
//             />
//             <button type="submit" style={buttonStyle}>
//               SEND MESSAGE
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// const inputStyle = {
//   width: '100%',
//   padding: '12px',
//   marginBottom: '15px',
//   border: 'none',
//   borderRadius: '4px',
// };

// const buttonStyle = {
//   width: '100%',
//   padding: '12px',
//   backgroundColor: '#0d1b2a',
//   color: 'white',
//   border: 'none',
//   borderRadius: '4px',
//   fontWeight: 'bold',
//   cursor: 'pointer',
// };

// export default ContactUs;


import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5500/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      alert(data.message);
      window.location.reload();
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <div style={leftPanelStyle}>
          <h1 style={headingStyle}>Find Your Perfect Property With Confidence</h1>
          <div style={featureBoxStyle}>
            <Feature number="01" title="Why People Prefer Us" desc="We offer trusted, verified listings with top-notch customer service and seamless experience." />
            <Feature number="02" title="Flexible Real Estate Financing" desc="Explore flexible and transparent financing options tailored to your needs." />
          </div>
        </div>

        <div style={formWrapperStyle}>
          <h2 style={formHeadingStyle}>Get In Touch</h2>
          <form onSubmit={handleSubmit} style={formStyle}>
            <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} style={inputStyle} />
            <input type="email" name="email" placeholder="Your Email *" required value={formData.email} onChange={handleChange} style={inputStyle} />
            <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
            <textarea name="message" placeholder="Your Message" rows={4} value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: 'none' }} />
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

const Feature = ({ number, title, desc }) => (
  <div style={{ display: 'flex', marginBottom: '25px' }}>
    <div style={circleNumberStyle}>{number}</div>
    <div>
      <h4 style={{ margin: '0 0 5px', color: '#00b894' }}>{title}</h4>
      <p style={{ margin: 0 }}>{desc}</p>
    </div>
  </div>
);

// Updated styles with background and form color enhancements
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '60px 5%',
  background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
  marginTop: '90px',
  minHeight: '100vh',
  gap: '30px'
};

const leftPanelStyle = {
  flex: '1 1 400px',
  paddingRight: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingBottom:'800px'
};

const formWrapperStyle = {
  flex: '1 1 400px',
  background: 'linear-gradient(to bottom right, #ffffff, #e3f2fd)',
  borderRadius: '16px',
  padding: '35px',
  boxShadow: '0 4px 25px rgba(0,0,0,0.15)',
};

const headingStyle = {
  fontSize: '32px',
  fontWeight: '700',
  marginBottom: '30px',
  color: '#2d3436'
};

const formHeadingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#0a3d62',
  fontWeight: 'bold'
};

const featureBoxStyle = {
  // marginTop: '10px'
};

const circleNumberStyle = {
  height: '32px',
  width: '32px',
  borderRadius: '50%',
  backgroundColor: '#00b894',
  color: '#fff',
  textAlign: 'center',
  lineHeight: '32px',
  marginRight: '15px',
  fontWeight: 'bold'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  border: '1px solid #b2bec3',
  borderRadius: '8px',
  fontSize: '16px',
  outline: 'none',
  backgroundColor: '#f8f9fa',
};

const buttonStyle = {
  padding: '14px',
  backgroundColor: '#0984e3',
  color: '#fff',
  fontWeight: '600',
  fontSize: '16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background 0.3s',
};

export default ContactUs;

