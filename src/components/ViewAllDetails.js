import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
const ViewAllDetails = () => {
  let { id } = useParams();

  return (
    <section className="view-all-detail">
      <nav>
        <ul>
          <li>Personal Details</li>
          <li>Official Details</li>
          <li>Education Details</li>
          <li>Leave Request</li>
          <li>Skills</li>
          <li>Certifications</li>
        </ul>
      </nav>
      <div
        className="input-container"
        style={{
          border: "1px solid black",
          width: "100%",
          height: "50%",
          display: "flex",
          alignItems: "center",
        }}
      >
        Hi I am a container
      </div>
    </section>
  );
};
export default ViewAllDetails;
