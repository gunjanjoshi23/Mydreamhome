import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});
  const userRole = "admin"; // Simulated role, replace with actual session/auth

  const toggleDropdown = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const colors = {
    sidebarBg: "linear-gradient(180deg, #000000, #1a1a1a)", // subtle gradient black
    border: "#333",
    primary: "#6e5ed2",
    text: "#fff",
    hover: "#2a2a2a",
    activeBg: "#3b2fa7",
    activeText: "#e0dbff",
    shadow: "rgba(0,0,0,0.3)",
  };

  const menuItems = [
    { label: "Dashboard", icon: "📊", path: "/admindashboard" },
    { label: "Manage Users", icon: "👤", path: "/admin/users" },
    { label: "Manage Agent", icon: "👤", path: "/admin/broker" },
    { icon: '📝', label: 'Manage Listings', path: '/admin/listings-manage' },

    { label: "Manage Bookings", icon: "📅", path: "/admin/bookings" },
    { label: "Manage Testimonials", icon: "💬", path: "/admin/testimonials" },
    {
      label: "Contact Queries",
      icon: "📥",
      children: [{ label: "View Queries", path: "/admin/queries/view" }],
    },
    { label: "Logout", icon: "🚪", path: "/" },
  ];

  // Optional role-based filtering
  const filteredMenuItems =
    userRole === "admin"
      ? menuItems
      : menuItems.filter((item) => item.label !== "Roles & Permissions");

  return (
    <div
      style={{
        width: "280px",
        background: colors.sidebarBg,
        padding: "30px 20px",
        borderRight: `1px solid ${colors.border}`,
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        minHeight: "110vh", // increased height a bit for scrolling comfort
        boxShadow: `2px 0 8px ${colors.shadow}`,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h2
        style={{
          color: colors.primary,
          marginBottom: "25px",
          fontSize: "24px",
          fontWeight: "700",
          letterSpacing: "0.1em",
          userSelect: "none",
          textAlign: "center",
          textTransform: "uppercase",
          textShadow: "0 0 5px #6e5ed2",
        }}
      >
        Admin Panel
      </h2>

      {filteredMenuItems.map((item, idx) => {
        const isActive = location.pathname === item.path;
        const hasChildren = item.children && item.children.length > 0;

        return (
          <div key={idx}>
            <div
              onClick={() => hasChildren && toggleDropdown(item.label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 18px",
                borderRadius: "10px",
                backgroundColor: isActive ? colors.activeBg : "transparent",
                color: isActive ? colors.activeText : colors.text,
                cursor: hasChildren ? "pointer" : "default",
                transition:
                  "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
                userSelect: "none",
                boxShadow: isActive
                  ? `0 4px 12px ${colors.activeBg}`
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = colors.hover;
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0,0,0,0.3)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateX(0)";
                }
              }}
            >
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              {hasChildren ? (
                <span
                  style={{
                    fontSize: "16px",
                    flex: 1,
                    fontWeight: isActive ? "700" : "500",
                  }}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  style={{
                    fontSize: "16px",
                    color: isActive ? colors.activeText : colors.text,
                    textDecoration: "none",
                    flex: 1,
                    fontWeight: isActive ? "700" : "500",
                  }}
                >
                  {item.label}
                </Link>
              )}
              {hasChildren && (
                <span
                  style={{
                    fontSize: "14px",
                    transition: "transform 0.3s",
                    transform: openMenus[item.label]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    userSelect: "none",
                  }}
                >
                  ▼
                </span>
              )}
            </div>

            {hasChildren && openMenus[item.label] && (
              <div
                style={{
                  marginLeft: "35px",
                  marginTop: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {item.children.map((child, i) => (
                  <Link
                    key={i}
                    to={child.path}
                    style={{
                      display: "block",
                      padding: "8px 0",
                      fontSize: "14px",
                      color:
                        location.pathname === child.path
                          ? colors.activeText
                          : colors.text,
                      textDecoration: "none",
                      borderRadius: "6px",
                      paddingLeft: "10px",
                      backgroundColor:
                        location.pathname === child.path ? colors.activeBg : "transparent",
                      fontWeight: location.pathname === child.path ? "700" : "400",
                      transition: "background-color 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (location.pathname !== child.path) {
                        e.currentTarget.style.backgroundColor = colors.hover;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (location.pathname !== child.path) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
