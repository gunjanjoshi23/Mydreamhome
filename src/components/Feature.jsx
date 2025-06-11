import React from 'react';
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoBookmarksOutline, IoTicketOutline } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";

const iconStyle = {
  fontSize: '24px',
  marginRight: '12px', // moderate spacing between icon and label
};

const labelStyle = {
  fontSize: '30px',
  fontWeight: '500',
  margin: 0, // remove excess spacing
};

const features = [
  { icon: <RiFileList3Line style={{ ...iconStyle, color: '#2563eb' }} />, label: "Detailed Listings" },
  { icon: <AiOutlineFileSearch style={{ ...iconStyle, color: '#16a34a' }} />, label: "Property Search" },
  { icon: <IoBookmarksOutline style={{ ...iconStyle, color: '#dc2626' }} />, label: "Saved Favorites" },
  { icon: <IoTicketOutline style={{ ...iconStyle, color: '#f59e0b' }} />, label: "Book Visits" },
];

const Feature = () => {
  return (
    <section style={{ padding: '40px 150px', backgroundColor: '#fff', overflowX: 'auto' }}>
      <nav style={{ display: 'flex', gap: '40px', whiteSpace: 'nowrap', minWidth: '600px' }}>
        {features.map((feature, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            {feature.icon}
            <h4 style={labelStyle}>{feature.label}</h4>
          </div>
        ))}
      </nav>
    </section>
  );
};

export default Feature;
