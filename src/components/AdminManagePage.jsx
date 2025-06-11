import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar'; // Make sure the path is correct

const ManagePages = () => {
  const [pages, setPages] = useState([]);
  const [selectedPageId, setSelectedPageId] = useState('');
  const [selectedPage, setSelectedPage] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:5500/api/pages')
      .then(res => res.json())
      .then(data => setPages(data));
  }, []);

  const handlePageSelect = (e) => {
    const pageId = e.target.value;
    setSelectedPageId(pageId);

    if (pageId) {
      fetch(`http://localhost:5500/api/pages/${pageId}`)
        .then(res => res.json())
        .then(data => {
          setSelectedPage(data);
          setContent(data.content);
        });
    } else {
      setSelectedPage(null);
      setContent('');
    }
  };

  const handleUpdate = () => {
    fetch(`http://localhost:5500/api/pages/${selectedPageId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
      .then(res => res.json())
      .then(() => alert('Page content updated!'));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#2c3e50', color: '#ecf0f1' }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1, padding: '30px', backgroundColor: '#f4f6f8' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Manage Pages</h2>

        <div style={{
          border: '1px solid #ddd',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
        }}>
          <h4 style={{ backgroundColor: '#f1e8dd', padding: '10px', borderRadius: '5px' }}>FORM FIELDS</h4>

          {/* Page Selector */}
          <div style={{ margin: '20px 0' }}>
            <label style={{ marginRight: '20px', fontWeight: 'bold' }}>Select Page</label>
            <select value={selectedPageId} onChange={handlePageSelect}>
              <option value="">***Select One***</option>
              {pages.map(page => (
                <option key={page._id} value={page._id}>
                  {page.title}
                </option>
              ))}
            </select>
          </div>

          {/* Page Details */}
          {selectedPage && (
            <>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ fontWeight: 'bold' }}>Selected Page:</label>
                <span style={{ marginLeft: '10px' }}>{selectedPage.title}</span>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <label style={{ fontWeight: 'bold' }}>Page Details</label>
                <br />
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="10"
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    marginTop: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <button
                onClick={handleUpdate}
                style={{
                  backgroundColor: '#3a79c9',
                  color: 'white',
                  padding: '10px 25px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Update
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePages;
