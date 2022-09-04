import { getFirestore } from "firebase/firestore/lite";
import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebaseContext";
import { doc, setDoc } from "firebase/firestore";

const AddEmployee = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    designation: "",
    salary: "",
  });
  const { app } = useContext(FirebaseContext);
  console.log(app);

  const db = getFirestore(app);

  console.log(db);
  const onSubmit = (e) => {
    e.preventDefault();
    setDoc(doc, (db, "employees"), employeeDetails).then(() =>
      console.log("abcd")
    );
    // db.collection("employees").add(employeeDetails);
    alert("Employee added successfully");
    setEmployeeDetails({ name: "", designation: "", salary: "" });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        Employee Name:{" "}
        <input
          type="text"
          placeholder="Enter your name"
          value={employeeDetails.name}
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, name: e.target.value })
          }
        />
        Employee designation:{" "}
        <input
          type="text"
          placeholder="Enter your designation"
          value={employeeDetails.designation}
          onChange={(e) =>
            setEmployeeDetails({
              ...employeeDetails,
              designation: e.target.value,
            })
          }
        />
        Employee Salary:{" "}
        <input
          type="text"
          placeholder="Enter your salary"
          value={employeeDetails.salary}
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, salary: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployee;
