import React, { useState } from "react";
import { GeneralInfo } from "./general";
import { Education } from "./education";
import { WorkExperience } from "./experience";
import "../styles/styles.css";

function CVPage() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    location: "New York, USA",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    aboutYou:
      "I am a highly skilled software developer with over 5 years of experience in building innovative and scalable web applications. I am passionate about coding, problem-solving, and continually expanding my skill set. My areas of expertise include front-end development, JavaScript frameworks such as React and Angular, back-end development with Node.js, and working with databases like MySQL and MongoDB. I thrive in collaborative environments and am always eager to take on new challenges. I believe in continuous learning and always strive to improve my skills by staying up-to-date with the latest advancements in web development.",
  });

  const [educationList, setEducationList] = useState([
    {
      titleOfStudy: "Bachelor of Science in Computer Science",
      schoolName: "University of XYZ",
      startDate: new Date("2015-09-01"),
      endDate: new Date("2019-05-01"),
    },
    {
      titleOfStudy: "Master of Science in Software Engineering",
      schoolName: "University of ABC",
      startDate: new Date("2019-09-01"),
      endDate: new Date("2021-05-01"),
    },
  ]);

  const [workList, setWorkList] = useState([
    {
      position: "Software Engineer",
      companyName: "Tech Corp",
      startDate: new Date("2021-06-01"),
      endDate: new Date("2023-06-01"),
      jobDescription:
        "As a Software Engineer at Tech Corp, I was responsible for developing, maintaining, and optimizing web applications. I collaborated closely with cross-functional teams, including product managers, UX/UI designers, and other developers, to build scalable solutions that meet customer needs.",
    },
    {
      position: "Web Developer",
      companyName: "Web Solutions",
      startDate: new Date("2020-01-01"),
      endDate: new Date("2021-05-01"),
      jobDescription:
        "As a Web Developer at Web Solutions, I worked on the development and maintenance of various client-facing websites. I collaborated with clients to understand their needs and implemented solutions that met their specifications.",
    },
  ]);

  const [isEducationVisible, setEducationVisible] = useState(false);
  const [isWorkVisible, setWorkVisible] = useState(false);

  const updateGeneralInfo = (info) => setGeneralInfo(info);
  const updateEducationList = (list) => setEducationList(list);
  const updateWorkList = (list) => setWorkList(list);

  return (
    <div className="cv-page">
      <div className="form-section">
        <GeneralInfo generalInfo={generalInfo} updateGeneralInfo={updateGeneralInfo} />

        <div className="toggle-section">
          <h2
            onClick={() => setEducationVisible(!isEducationVisible)} 
            style={{ cursor: 'pointer' }}
          >
            {isEducationVisible ? 'Education' : 'Education'}
          </h2>
          {isEducationVisible && (
            <Education educationList={educationList} updateEducationList={updateEducationList} />
          )}
        </div>

        <div className="toggle-section">
          <h2
            onClick={() => setWorkVisible(!isWorkVisible)} 
            style={{ cursor: 'pointer' }}
          >
            {isWorkVisible ? 'Work Experience' : 'Work Experience'}
          </h2>
          {isWorkVisible && (
            <WorkExperience workList={workList} updateWorkList={updateWorkList} />
          )}
        </div>
      </div>

      <div className="preview-container">
        <div className="preview-section">
          <h2>
            <strong>
              {generalInfo.firstName} {generalInfo.lastName}
            </strong>
          </h2>
          <p>
            <strong>{generalInfo.location}</strong>
          </p>
          <p>
            {generalInfo.email && <span>{generalInfo.email}</span>}
            {generalInfo.email && generalInfo.phone && <span> • </span>}
            {generalInfo.phone && <span>{generalInfo.phone}</span>}
          </p>
          <p>{generalInfo.aboutYou}</p>

          {educationList.length > 0 && (
            <>
              <h3>Education</h3>
              {educationList.map((edu, index) => (
                <div key={index}>
                  <p>
                    <strong>{edu.titleOfStudy}</strong>
                    {edu.schoolName && ` at ${edu.schoolName}`}
                  </p>
                  <p>
                    {edu.startDate && new Date(edu.startDate).getFullYear()}
                    {edu.startDate && edu.endDate && " - "}
                    {edu.endDate && new Date(edu.endDate).getFullYear()}
                  </p>
                </div>
              ))}
            </>
          )}

          {workList.length > 0 && (
            <>
              <h3>Work Experience</h3>
              {workList.map((work, index) => (
                <div key={index}>
                  <p>
                    <strong>{work.position}</strong>
                    {work.companyName && ` at ${work.companyName}`}
                  </p>
                  <p>
                    {work.startDate && new Date(work.startDate).getFullYear()}
                    {work.startDate && work.endDate && " - "}
                    {work.endDate && new Date(work.endDate).getFullYear()}
                  </p>
                  <p>{work.jobDescription}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export { CVPage };