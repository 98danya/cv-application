import React, { useState } from "react";
import "../styles/styles.css";

function GeneralInfo() {
  const [editMode, setEditMode] = useState(true);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    phone: "",
    aboutYou: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="form-container">
      {/* Form Section */}
      <div className="form-section">
        {editMode && (
          <form className="form-content">
            <h2>General Information</h2>
            <input
              type="text"
              name="firstName"
              value={info.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={info.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              value={info.location}
              placeholder="Location"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={info.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              value={info.phone}
              placeholder="Phone"
              onChange={handleChange}
            />
            <input
              type="text"
              name="aboutYou"
              value={info.aboutYou}
              placeholder="Write about yourself"
              onChange={handleChange}
            />
            <button type="button" onClick={() => setEditMode(false)}>
              Submit
            </button>
          </form>
        )}
      </div>

      {/* Preview Section */}
      <div className="preview-section">
        <p>
          <strong>First Name:</strong> {info.firstName || ""}
        </p>
        <p>
          <strong>Last Name:</strong> {info.lastName || ""}
        </p>
        <p>
          <strong>Location:</strong> {info.location || ""}
        </p>
        <p>
          <strong>Email:</strong> {info.email || ""}
        </p>
        <p>
          <strong>Phone:</strong> {info.phone || ""}
        </p>
        <p>
          <strong>About Me:</strong> {info.aboutYou || ""}
        </p>
        {!editMode && <button onClick={() => setEditMode(true)}>Edit</button>}
      </div>
    </div>
  );
}

export { GeneralInfo };