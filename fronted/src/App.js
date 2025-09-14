import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, UserContext } from "./contexts/UserContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import About from "./pages/About/About";
import Support from "./pages/Support/Support";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserDashboard from './pages/UserDashboard/UserDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';

function AppContent() {
  const { user } = useContext(UserContext);
  const role = user ? user.role : null;

  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/:hackathonId" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route
            path="/admin"
            element={
              role === "admin" ? <AdminDashboard /> : <Navigate to="/login" />
            }
          />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
}

export default App;
