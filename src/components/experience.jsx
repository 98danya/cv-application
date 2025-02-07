import React, { useState } from "react";
import "../styles/styles.css"; // Import the shared CSS file

function WorkExperience() {
  const [editMode, setEditMode] = useState(true);
  const [info, setInfo] = useState({
    position: "",
    companyName: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    return `${new Date(year, month - 1).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
    })}`;
  };

  return (
    <div className="form-container">
      {/* Form Section */}
      <div className="form-section">
        {editMode && (
          <form className="form-content">
            <h2>Work Experience</h2>
            <input
              type="text"
              name="position"
              value={info.position}
              placeholder="Position"
              onChange={handleChange}
            />
            <input
              type="text"
              name="companyName"
              value={info.companyName}
              placeholder="Company Name"
              onChange={handleChange}
            />
            <input
              type="month"
              name="startDate"
              value={info.startDate}
              placeholder="Start Date"
              onChange={handleChange}
            />
            <input
              type="month"
              name="endDate"
              value={info.endDate}
              placeholder="End Date"
              onChange={handleChange}
            />
            <input
              type="text"
              name="jobDescription"
              value={info.jobDescription}
              placeholder="Describe Your Tasks"
              onChange={handleChange}
            />
            <button type="button" onClick={() => setEditMode(false)}>
              Submit
            </button>
          </form>
        )}
      </div>

      {/* Live Preview */}
      <div className="preview-section">
        <p>
          <strong>Position:</strong> {info.position || ""}
        </p>
        <p>
          <strong>Company Name:</strong> {info.companyName || ""}
        </p>
        <p>
          <strong>Start Date:</strong> {formatDate(info.startDate)}
        </p>
        <p>
          <strong>End Date:</strong> {formatDate(info.endDate)}
        </p>
        <p>
          <strong>Task Description:</strong> {info.jobDescription || ""}
        </p>
        {!editMode && <button onClick={() => setEditMode(true)}>Edit</button>}
      </div>
    </div>
  );
}

export { WorkExperience };