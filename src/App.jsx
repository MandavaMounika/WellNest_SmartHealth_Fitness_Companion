import { Routes, Route } from "react-router-dom";

// Public
import Home from "./pages/public/Home";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Profile
import CreateProfile from "./pages/profile/CreateProfile";

// Dashboards
import UserDashboard from "./pages/user/UserDashboard";
import TrainerDashboard from "./pages/trainer/TrainerDashboard";

// Route Guard
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/profile/create"
        element={
          <ProtectedRoute>
            <CreateProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user/dashboard"
        element={
          <ProtectedRoute role="ROLE_USER">
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/trainer/dashboard"
        element={
          <ProtectedRoute role="ROLE_TRAINER">
            <TrainerDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
