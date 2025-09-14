import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import AdminEventForm from "./AdminEventForm"; // Your form component

const AdminDashboard = () => {
  const { user } = useContext(UserContext);

  // Redirect non-admin users to login or home
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p>Only admins can add events below:</p>
      <AdminEventForm />
    </div>
  );
};

export default AdminDashboard;
