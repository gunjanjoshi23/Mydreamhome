import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AgentSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    const menuItems = [
        { icon: '🏠', label: 'Dashboard', path: '/broker-dashboard' },
        { icon: '➕', label: 'Add Listing', path: '/admin/listings/add' },
        { icon: '📝', label: 'Manage Listings', path: '/admin/listings/manage' },
        { icon: '📞', label: 'Leads', path: '/admin/leads' },
        { icon: '💬', label: 'Messages', path: '/admin/messages' },
        { icon: '💬', label: 'Profile Update', path: '/admin/broker-update' },

    ];

    const sidebarStyle = {
        width: '240px',
        minHeight: '100vh',
        backgroundColor: '#1E272E',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'sans-serif',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
    };

    const titleStyle = {
        padding: '20px',
        fontSize: '1.4em',
        fontWeight: 'bold',
        color: '#f1f1f1'
    };

    const listStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0
    };

    const listItemStyle = (isActive) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 20px',
        textDecoration: 'none',
        color: isActive ? '#4FC3F7' : '#E0E0E0',
        backgroundColor: isActive ? '#37474F' : 'transparent',
        fontWeight: isActive ? 'bold' : 'normal',
        borderLeft: isActive ? '4px solid #4FC3F7' : '4px solid transparent',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    });

    const logoutButtonStyle = {
        background: '#E53935',
        color: '#fff',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '6px',
        width: '100%',
        cursor: 'pointer',
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        transition: 'background 0.3s ease'
    };

    return (
        <div style={sidebarStyle}>
            <div>
                <div style={titleStyle}>Agent Panel</div>
                <ul style={listStyle}>
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    style={listItemStyle(isActive)}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2E3A40')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isActive ? '#37474F' : 'transparent')}
                                >
                                    <span>{item.icon}</span> <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div style={{ padding: '20px' }}>
                <hr style={{ border: '1px solid #455A64', marginBottom: '15px' }} />
                <button
                    onClick={handleLogout}
                    onMouseOver={e => e.target.style.background = '#D32F2F'}
                    onMouseOut={e => e.target.style.background = '#E53935'}
                    style={logoutButtonStyle}
                >
                    🚪 Logout
                </button>
            </div>
        </div>
    );
};

export default AgentSidebar;
