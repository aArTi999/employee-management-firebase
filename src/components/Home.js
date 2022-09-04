import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/add-employee">
        <h1>Add Employee</h1>
      </Link>
      <Link to="/employees">
        <h1>View Employees</h1>
      </Link>
    </div>
  );
};

export default Home;
