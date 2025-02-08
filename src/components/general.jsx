import React, { useState, useEffect } from "react";
import "../styles/styles.css";

function GeneralInfo({ generalInfo, updateGeneralInfo }) {
  const [info, setInfo] = useState(generalInfo);

  useEffect(() => {
    setInfo(generalInfo);
  }, [generalInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInfo = { ...info, [name]: value };
    setInfo(updatedInfo);
    updateGeneralInfo(updatedInfo);
  };

  const clearAll = () => {
    const clearedInfo = {
      firstName: "",
      lastName: "",
      location: "",
      email: "",
      phone: "",
      aboutYou: "",
    };
    setInfo(clearedInfo);
    updateGeneralInfo(clearedInfo);
  };

  return (
    <div className="form-container">
      <h2>General Information</h2>

      <div className="form-field">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={info.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={info.lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={info.location}
          placeholder="Location"
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={info.email}
          placeholder="Email"
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={info.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label>About You</label>
        <textarea
          name="aboutYou"
          value={info.aboutYou}
          placeholder="Write about yourself"
          onChange={handleChange}
        />
      </div>

      <button type="button" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
}

export { GeneralInfo };