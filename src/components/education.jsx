import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Education({ educationList, updateEducationList }) {
  const handleAddEducation = () => {
    const newEducation = { titleOfStudy: "", schoolName: "", startDate: null, endDate: null };
    updateEducationList([...educationList, newEducation]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedList = [...educationList];
    updatedList[index][name] = value;
    updateEducationList(updatedList);
  };

  const handleDateChange = (index, field, date) => {
    const updatedList = [...educationList];
    updatedList[index][field] = date;
    updateEducationList(updatedList);
  };

  const handleDelete = (index) => {
    updateEducationList(educationList.filter((_, i) => i !== index));
  };

  return (
    <div className="form-container">
      <button onClick={handleAddEducation}>Add Education</button>
      {educationList.map((education, index) => (
        <div key={index} className="education-entry">
          <div className="form-field">
            <label>Title Of Study</label>
            <input
              type="text"
              name="titleOfStudy"
              value={education.titleOfStudy}
              placeholder="Title Of Study"
              onChange={(e) => handleChange(index, e)}
            />
          </div>

          <div className="form-field">
            <label>School Name</label>
            <input
              type="text"
              name="schoolName"
              value={education.schoolName}
              placeholder="School Name"
              onChange={(e) => handleChange(index, e)}
            />
          </div>

          <div className="form-field">
            <label>Start</label>
            <DatePicker
              selected={education.startDate}
              onChange={(date) => handleDateChange(index, "startDate", date)}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="Start Year"
            />
          </div>

          <div className="form-field">
            <label>End</label>
            <DatePicker
              selected={education.endDate}
              onChange={(date) => handleDateChange(index, "endDate", date)}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="End Year"
            />
          </div>

          <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export { Education };