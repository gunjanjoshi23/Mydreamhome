import React, { useEffect, useState } from "react";
import axios from "axios";
import AgentSidebar from './AgentSidebar';

const ListingManager = () => {
    const [listings, setListings] = useState([]);
    const [editingListing, setEditingListing] = useState(null);
    const [editData, setEditData] = useState({
        name: "",
        price: "",
        rooms: "",
        parking: "",
        beds: "",
        baths: "",
        details: "",
        image: null,
    });
    const [isLoading, setIsLoading] = useState(false);

    // Fetch listings from the backend
    const fetchListings = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("http://localhost:5500/api/listings");
            setListings(res.data);
        } catch (err) {
            console.error("Error fetching listings:", err);
        } finally {
            setIsLoading(false);
        }
    };

    // Load listings on initial render
    useEffect(() => {
        fetchListings();
    }, []);

    // Open the form for editing a listing
    const openEditForm = (listing) => {
        setEditingListing(listing._id);
        setEditData({
            name: listing.name,
            price: listing.price,
            rooms: listing.rooms,
            parking: listing.parking,
            beds: listing.beds,
            baths: listing.baths,
            details: listing.details,
            image: null,
        });
    };

    // Handle form submission for editing a listing
    const handleEditSubmit = async (e) => {
        e.preventDefault();

        // Prepare form data
        const formData = new FormData();
        formData.append("name", editData.name);
        formData.append("price", editData.price);
        formData.append("rooms", editData.rooms);
        formData.append("parking", editData.parking);
        formData.append("beds", editData.beds);
        formData.append("baths", editData.baths);
        formData.append("details", editData.details);
        if (editData.image) {
            formData.append("image", editData.image);
        }

        // Send the PUT request to update the listing
        try {
            await axios.put(
                `http://localhost:5500/api/listings/${editingListing}`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            alert("Listing updated successfully!");
            setEditingListing(null);
            fetchListings();
        } catch (err) {
            console.error("Error updating listing:", err.response?.data || err.message);
            alert("Failed to update listing.");
        }
    };

    // Cancel editing and reset form
    const handleCancelEdit = () => {
        setEditingListing(null);
        setEditData({
            name: "",
            price: "",
            rooms: "",
            parking: "",
            beds: "",
            baths: "",
            details: "",
            image: null,
        });
    };

    return (
        <div style={{ display: "flex" }}>
            <AgentSidebar />
            <div style={{ flex: 1, padding: "20px" }}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Manage Listings</h2>
                {isLoading && <p>Loading listings...</p>}
                {listings.map((listing) => (
                    <div
                        key={listing._id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "15px",
                            marginBottom: "20px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <h3 style={{ marginBottom: "5px" }}>{listing.name}</h3>
                        <p><strong>Price:</strong> ${listing.price}</p>
                        <p><strong>Rooms:</strong> {listing.rooms}</p>
                        <p><strong>Parking:</strong> {listing.parking}</p>
                        <p><strong>Beds:</strong> {listing.beds}</p>
                        <p><strong>Baths:</strong> {listing.baths}</p>
                        <p>{listing.details}</p>
                        {listing.image && (
                            <img
                                src={`http://localhost:5500${listing.image}`}
                                alt=""
                                width="200"
                                style={{ borderRadius: "5px", marginTop: "10px" }}
                            />
                        )}

                        {editingListing === listing._id ? (
                            <form onSubmit={handleEditSubmit} style={{ marginTop: "15px" }}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={editData.name}
                                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                    required
                                    style={inputStyle}
                                />
                                <input
                                    type="number"
                                    placeholder="Price"
                                    value={editData.price}
                                    onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                                    required
                                    style={inputStyle}
                                />
                                <input
                                    type="number"
                                    placeholder="Rooms"
                                    value={editData.rooms}
                                    onChange={(e) => setEditData({ ...editData, rooms: e.target.value })}
                                    required
                                    style={inputStyle}
                                />
                                <input
                                    type="number"
                                    placeholder="parking"
                                    value={editData.parking}
                                    onChange={(e) => setEditData({ ...editData, cars: e.target.value })}
                                    required
                                    style={inputStyle}
                                />
                                <input
                                    type="number"
                                    placeholder="Beds"
                                    value={editData.beds}
                                    onChange={(e) => setEditData({ ...editData, beds: e.target.value })}
                                    required
                                    style={inputStyle}
                                />
                                <input
                                    type="number"
                                    placeholder="Baths"
                                    value={editData.baths}
                                    onChange={(e) => setEditData({ ...editData, baths: e.target.value })}
                                    required
                                    style={inputStyle}
                                />
                                <textarea
                                    placeholder="Details"
                                    value={editData.details}
                                    onChange={(e) => setEditData({ ...editData, details: e.target.value })}
                                    style={{ ...inputStyle, height: "80px", resize: "vertical" }}
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setEditData({ ...editData, image: e.target.files[0] })}
                                    style={{ marginBottom: "10px" }}
                                />
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <button type="submit" style={buttonStyle}>Save</button>
                                    <button
                                        type="button"
                                        onClick={handleCancelEdit}
                                        style={{ ...buttonStyle, backgroundColor: "#ccc", color: "#000" }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <button
                                onClick={() => openEditForm(listing)}
                                style={{
                                    backgroundColor: '#1890ff',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '8px 12px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    marginTop: '10px',
                                    width: '100%'
                                }}
                            >
                                Edit
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Input and button styles
const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
};

const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#1890ff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};

export default ListingManager;
