import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebaseContext";
const Employees = () => {
  const { app, db } = useContext(FirebaseContext);
  console.log(app);
  console.log(db);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Employees;
