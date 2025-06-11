// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';

// const AddListing = () => {
//   const [formData, setFormData] = useState({
//     location: '',
//     name: '',
//     price: '',
//     state: '',
//     rating: '',
//     parking: '',
//     rooms: '',
//     size: '',
//     beds: '',   // New state for beds
//     baths: '',  // New state for baths
//     details: '',
//     image: null  // New state for image
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => {
//       formDataToSend.append(key, formData[key]);
//     });

//     try {
//       const res = await fetch('http://localhost:5500/api/listings', {
//         method: 'POST',
//         body: formDataToSend
//       });
//       const data = await res.json();
//       alert(data.message || 'Listing added!');
//     } catch (error) {
//       alert('Failed to add listing');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar />
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Add Listing</h2>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div style={styles.column}>
//             {[{ label: 'Location', name: 'location' },
//             { label: 'Property Name', name: 'name' },
//             { label: 'Price', name: 'price', type: 'number' },
//             { label: 'State', name: 'state' }
//             ].map(({ label, name, type = 'text' }) => (
//               <div key={name}>
//                 <label style={styles.label}>{label}</label>
//                 <input
//                   type={type}
//                   name={name}
//                   value={formData[name]}
//                   onChange={handleChange}
//                   style={styles.input}
//                   required
//                 />
//               </div>
//             ))}
//           </div>

//           <div style={styles.column}>
//             {[{ label: 'Review Rating', name: 'rating', type: 'number' },
//             { label: 'Car Parking', name: 'parking', type: 'number' },
//             { label: 'No. of Rooms', name: 'rooms', type: 'number' },
//             { label: 'Size (sq ft)', name: 'size', type: 'number' },
//             { label: 'Beds', name: 'beds', type: 'number' },   // Beds field
//             { label: 'Baths', name: 'baths', type: 'number' }   // Baths field
//             ].map(({ label, name, type = 'text' }) => (
//               <div key={name}>
//                 <label style={styles.label}>{label}</label>
//                 <input
//                   type={type}
//                   name={name}
//                   value={formData[name]}
//                   onChange={handleChange}
//                   style={styles.input}
//                   required
//                 />
//               </div>
//             ))}
//           </div>

//           <div style={{ width: '100%', marginTop: '20px' }}>
//             <label style={styles.label}>Property Details</label>
//             <textarea
//               name="details"
//               value={formData.details}
//               onChange={handleChange}
//               style={styles.textarea}
//               rows="4"
//               required
//             />
//           </div>

//           <div style={{ width: '100%', marginTop: '20px' }}>
//             <label style={styles.label}>Upload Image</label>
//             <input
//               type="file"
//               name="image"
//               onChange={handleImageChange}
//               style={styles.input}
//             />
//           </div>

//           <button type="submit" style={styles.button}>Add Listing</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     padding: '30px',
//     background: '#fff',
//     borderRadius: '12px',
//     boxShadow: '0 0 20px rgba(0,0,0,0.1)',
//     margin: '30px',

//   },
//   heading: {
//     fontSize: '28px',
//     fontWeight: '600',
//     marginBottom: '20px',
//     color: '#333'
//   },
//   form: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '40px',
//     fontWeight: '600',

//   },
//   column: {
//     flex: '1',
//     minWidth: '300px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px'
//   },
//   label: {
//     fontSize: '14px',
//     color: '#555',
//     marginBottom: '5px',

//   },
//   input: {
//     padding: '10px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//     fontSize: '14px'
    
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//     resize: 'vertical'
//   },
//   button: {
//     marginTop: '20px',
//     padding: '12px 25px',
//     background: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '16px',
//     cursor: 'pointer'
//   }
// };

// export default AddListing;


import React, { useState } from 'react';
import AgentSidebar from "./AgentSidebar";

const AddListing = () => {
  const [formData, setFormData] = useState({
    location: '',
    name: '',
    price: '',
    state: '',
    rating: '',
    parking: '',
    rooms: '',
    size: '',
    beds: '',
    baths: '',
    details: '',
    image: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
const res = await fetch('http://localhost:5500/api/listings', {
  method: 'POST',
  body: formDataToSend,
  credentials: 'include' // <-- REQUIRED for session to work
});
      const data = await res.json();
      alert(data.message || 'Listing added!');
      window.location.reload(); // Refresh the page
    } catch (error) {
      alert('Failed to add listing');
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <AgentSidebar />
      <div style={styles.container}>
        <h2 style={styles.heading}>Add Listing</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.column}>
            {[{ label: 'Location', name: 'location' },
            { label: 'Property Name', name: 'names' },
            { label: 'Price', name: 'price', type: 'number' },
            { label: 'State', name: 'state' }
            ].map(({ label, name, type = 'text' }) => (
              <div key={name}>
                <label style={styles.label}>{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
            ))}
          </div>

          <div style={styles.column}>
            {[{ label: 'Review Rating', name: 'rating', type: 'number' },
            { label: 'Car Parking', name: 'parking', type: 'number' },
            { label: 'No. of Rooms', name: 'rooms', type: 'number' },
            { label: 'Size (sq ft)', name: 'size', type: 'number' },
            { label: 'Beds', name: 'beds', type: 'number' },
            { label: 'Baths', name: 'baths', type: 'number' }
            ].map(({ label, name, type = 'text' }) => (
              <div key={name}>
                <label style={styles.label}>{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
            ))}
          </div>

          <div style={{ width: '100%', marginTop: '20px' }}>
            <label style={styles.label}>Property Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              style={styles.textarea}
              rows="4"
              required
            />
          </div>

          <div style={{ width: '100%', marginTop: '20px' }}>
            <label style={styles.label}>Upload Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>Add Listing</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: '30px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    margin: '30px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#333'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    fontWeight: '600',
  },
  column: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  label: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    resize: 'vertical'
  },
  button: {
    marginTop: '20px',
    padding: '12px 25px',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default AddListing;

// import React, { useState } from 'react';
// import AgentSidebar from './AgentSidebar';

// const agentId = 'agent123'; // Simulated logged-in agent ID

// const AddListing = () => {
//   const [formData, setFormData] = useState({
//     location: '',
//     name: '',
//     price: '',
//     state: '',
//     rating: '',
//     parking: '',
//     rooms: '',
//     size: '',
//     beds: '',
//     baths: '',
//     details: '',
//     image: null
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => {
//       formDataToSend.append(key, formData[key]);
//     });

//     try {
//       const res = await fetch('http://localhost:5500/api/listings', {
//         method: 'POST',
//         body: formDataToSend,
//         headers: {
//           'x-agent-id': agentId,
//         }
//       });
//       const data = await res.json();
//       alert(data.message || 'Listing added!');
//       window.location.reload(); // Refresh to clear form or you can clear manually
//     } catch (error) {
//       alert('Failed to add listing');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <AgentSidebar />
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Add Listing</h2>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div style={styles.column}>
//             {[{ label: 'Location', name: 'location' },
//             { label: 'Property Name', name: 'name' },
//             { label: 'Price', name: 'price', type: 'number' },
//             { label: 'State', name: 'state' }
//             ].map(({ label, name, type = 'text' }) => (
//               <div key={name}>
//                 <label style={styles.label}>{label}</label>
//                 <input
//                   type={type}
//                   name={name}
//                   value={formData[name]}
//                   onChange={handleChange}
//                   style={styles.input}
//                   required
//                 />
//               </div>
//             ))}
//           </div>

//           <div style={styles.column}>
//             {[{ label: 'Review Rating', name: 'rating', type: 'number' },
//             { label: 'Car Parking', name: 'parking', type: 'number' },
//             { label: 'No. of Rooms', name: 'rooms', type: 'number' },
//             { label: 'Size (sq ft)', name: 'size', type: 'number' },
//             { label: 'Beds', name: 'beds', type: 'number' },
//             { label: 'Baths', name: 'baths', type: 'number' }
//             ].map(({ label, name, type = 'text' }) => (
//               <div key={name}>
//                 <label style={styles.label}>{label}</label>
//                 <input
//                   type={type}
//                   name={name}
//                   value={formData[name]}
//                   onChange={handleChange}
//                   style={styles.input}
//                   required
//                 />
//               </div>
//             ))}
//           </div>

//           <div style={{ width: '100%', marginTop: '20px' }}>
//             <label style={styles.label}>Property Details</label>
//             <textarea
//               name="details"
//               value={formData.details}
//               onChange={handleChange}
//               style={styles.textarea}
//               rows="4"
//               required
//             />
//           </div>

//           <div style={{ width: '100%', marginTop: '20px' }}>
//             <label style={styles.label}>Upload Image</label>
//             <input
//               type="file"
//               name="image"
//               onChange={handleImageChange}
//               style={styles.input}
//             />
//           </div>

//           <button type="submit" style={styles.button}>Add Listing</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     padding: '30px',
//     background: '#fff',
//     borderRadius: '12px',
//     boxShadow: '0 0 20px rgba(0,0,0,0.1)',
//     margin: '30px',
//   },
//   heading: {
//     fontSize: '28px',
//     fontWeight: '600',
//     marginBottom: '20px',
//     color: '#333'
//   },
//   form: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '40px',
//     fontWeight: '600',
//   },
//   column: {
//     flex: '1',
//     minWidth: '300px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px'
//   },
//   label: {
//     fontSize: '14px',
//     color: '#555',
//     marginBottom: '5px',
//   },
//   input: {
//     padding: '10px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//     fontSize: '14px'
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//     resize: 'vertical'
//   },
//   button: {
//     marginTop: '20px',
//     padding: '12px 25px',
//     background: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '16px',
//     cursor: 'pointer'
//   }
// };

// export default AddListing;
