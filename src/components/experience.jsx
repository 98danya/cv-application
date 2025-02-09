import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function WorkExperience({ workList, updateWorkList }) {
  const handleAddWorkExperience = () => {
    const newWork = {
      position: "",
      companyName: "",
      startDate: null,
      endDate: null,
      jobDescription: "",
    };
    updateWorkList([...workList, newWork]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedList = [...workList];
    updatedList[index][name] = value;
    updateWorkList(updatedList);
  };

  const handleDateChange = (index, field, date) => {
    const updatedList = [...workList];
    updatedList[index][field] = date;
    updateWorkList(updatedList);
  };

  const handleDelete = (index) => {
    updateWorkList(workList.filter((_, i) => i !== index));
  };

  return (
    <div className="form-container">
      <button className="button-container" onClick={handleAddWorkExperience}>
        Add Work Experience
      </button>
      {workList.map((work, index) => (
        <div key={index} className="work-entry">
          <div className="form-field">
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={work.position}
              placeholder="Position"
              onChange={(e) => handleChange(index, e)}
            />
          </div>

          <div className="form-field">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={work.companyName}
              placeholder="Company Name"
              onChange={(e) => handleChange(index, e)}
            />
          </div>

          <div className="form-field">
            <label>Start</label>
            <DatePicker
              selected={work.startDate}
              onChange={(date) => handleDateChange(index, "startDate", date)}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="Start Year"
            />
          </div>

          <div className="form-field">
            <label>End</label>
            <DatePicker
              selected={work.endDate}
              onChange={(date) => handleDateChange(index, "endDate", date)}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="End Year"
            />
          </div>

          <div className="form-field">
            <label>Job Description</label>
            <textarea
              name="jobDescription"
              value={work.jobDescription}
              placeholder="Describe Your Tasks"
              onChange={handleChange}
            />
          </div>

          <button
            className="button-container"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export { WorkExperience };
