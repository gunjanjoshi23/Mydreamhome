import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home'; // Make sure the path is correct
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import AddListing from './components/AddListing';
import AdminManageUsers from './components/AdminManageUser';
import PropertyDetail from './components/PropertyDetail';
import ManageListing from './components/ManageListing';
import ListingManager from './components/ListingManager';
import Contact from './components/Contact';
import ContactQueries from './components/ContactQueries';
import ManageContacts from './components/ManageContacts';
import AdminManagePage from './components/AdminManagePage';
import ManageTestimonialsPage from './components/ManageTestimonialsPage';
import PostTestimonialsPage from './components/PostTestimonialsPage';
import MyTestimonials from './components/MyTestimonials';
import Listing from './components/Listing';
import FavouritesPage from './components/FavouritesPage';
import MyBooking from './components/MyBooking';
import AllBookings from './components/AllBookings';
import ProfileUpdate from './components/ProfileUpdate';
import BrokerDashboard from './components/BrokerDashboard';
import Leads from './components/Leads';
import LeadForm from './components/LeadForm';
import BrokerBookings from './components/BrokerBookings';
import AdminManageBrokers from './components/AdminManageBrokers';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import AdminListingManage from './components/AdminListingManage';
import BrokerUpdateProfile from './components/BrokerUpdateProfile';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admin/listings/add" element={<AddListing />} />
        <Route path="/admin/users" element={<AdminManageUsers />} />
        <Route path="/admin/users" element={<AdminManageUsers />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/admin/listings/manage" element={<ManageListing />} />
        <Route path="/agent/edit-listing/:id" element={<ListingManager />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/admin/queries/view" element={<ContactQueries />} />
        <Route path="/admin/queries/mark" element={<ManageContacts />} />
        <Route path="/admin/page" element={<AdminManagePage />} />
        <Route path="/post-testimonial" element={<PostTestimonialsPage />} />
        <Route path="/my-testimonial" element={< MyTestimonials />} />
        <Route path="/admin/testimonials" element={<ManageTestimonialsPage />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/admin/bookings" element={<AllBookings />} />
        <Route path="/profile" element={<ProfileUpdate />} />
        <Route path="/broker-dashboard" element={<BrokerDashboard />} />
        <Route path="/admin/leads" element={<Leads />} />
        <Route path="/Lead" element={<LeadForm />} />
        <Route path="/admin/messages" element={<BrokerBookings />} />
        <Route path="/admin/broker" element={<AdminManageBrokers />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin/listings-manage" element={<AdminListingManage />} />
        <Route path="/admin/broker-update" element={<BrokerUpdateProfile />} />

































        {/* Add other routes here like AboutUs, Contact, Admin, etc. */}
        {/* <Route path="/about" element={<AboutUs />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
