import React, { useState } from "react";
import "../styles/styles.css"; // Import the shared CSS file

function Education() {
  const [editMode, setEditMode] = useState(true);
  const [info, setInfo] = useState({
    titleOfStudy: "",
    schoolName: "",
    startDate: "",
    endDate: "",
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
            <h2>Education</h2>
            <input
              type="text"
              name="titleOfStudy"
              value={info.titleOfStudy}
              placeholder="Title Of Study"
              onChange={handleChange}
            />
            <input
              type="text"
              name="schoolName"
              value={info.schoolName}
              placeholder="School Name"
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
            <button type="button" onClick={() => setEditMode(false)}>
              Submit
            </button>
          </form>
        )}
      </div>

      {/* Live Preview */}
      <div className="preview-section">
        <p>
          <strong>Title Of Study:</strong> {info.titleOfStudy || ""}
        </p>
        <p>
          <strong>School Name:</strong> {info.schoolName || ""}
        </p>
        <p>
          <strong>Start Date:</strong> {formatDate(info.startDate)}
        </p>
        <p>
          <strong>End Date:</strong> {formatDate(info.endDate)}
        </p>
        {!editMode && <button onClick={() => setEditMode(true)}>Edit</button>}
      </div>
    </div>
  );
}

export { Education };