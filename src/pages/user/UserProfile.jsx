import { useAuth } from "../../auth/AuthContext";

export default function UserProfile() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Role: {user.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
