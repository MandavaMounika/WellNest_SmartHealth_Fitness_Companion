import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";

const CreateProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:8080/profile/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    navigate("/user/dashboard"); // ✅ REDIRECT HERE
  }
};


  return (
    <div className="profile-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>Create Your Profile</h2>

        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>

        <input
          name="height"
          type="number"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
          required
        />

        <input
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        <select name="goal" onChange={handleChange} required>
          <option value="">Fitness Goal</option>
          <option value="WEIGHT_LOSS">Weight Loss</option>
          <option value="MUSCLE_GAIN">Muscle Gain</option>
          <option value="FITNESS">General Fitness</option>
        </select>

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfile;
