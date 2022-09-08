import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <section className="head-container">
      <h1>Employee Management System</h1>
      <div>Welcome...</div>
      <div className="button-container">
        <button
          style={{
            width: "150px",
            backgroundColor: "#17357a",
            borderRadius: "5px",
          }}
        >
          <Link
            to="/add-employee"
            style={{
              textDecoration: "none",
              width: "150px",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              // backgroundColor: "crimson",
              // borderRadius: "5px",
            }}
          >
            <p>Add Employee</p>
          </Link>
        </button>
        <button
          style={{
            width: "150px",
            backgroundColor: "#17357a",
            borderRadius: "5px",
          }}
        >
          <Link
            to="/employees"
            style={{
              textDecoration: "none",
              width: "150px",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              // backgroundColor: "crimson",
              // borderRadius: "5px",
            }}
          >
            <p>View Employees</p>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
