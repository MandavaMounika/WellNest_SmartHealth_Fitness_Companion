import "../../styles/dashboard.css";

const UserDashboard = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="dashboard">
      <h1>Welcome, {username}</h1>
      <p>Your fitness journey starts here 💪</p>
    </div>
  );
};

export default UserDashboard;
