import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "firebase/firestore";
import { FirebaseContext } from "../context/firebaseContext";
const EditEmployee = () => {
  const [employee, setEmployee] = useState({});
  let { id } = useParams();

  const { db } = useContext(FirebaseContext);

  const getEmployeeData = async () => {
    const response = db.collection("employees").doc(id);
    const data = await response.get();
    return data.data();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("employees").doc(id).set(employee);
    alert("Employee undated successfully");
  };

  useEffect(() => {
    (async () => {
      const employee = await getEmployeeData();

      setEmployee(employee);
    })();
  }, []);
  return (
    <div>
      <form onSubmit={onSubmit}>
        Employee Name:{" "}
        <input
          type="text"
          placeholder="Enter your name"
          value={employee.name}
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        />
        Employee designation:{" "}
        <input
          type="text"
          placeholder="Enter your designation"
          value={employee.designation}
          onChange={(e) =>
            setEmployee({
              ...employee,
              designation: e.target.value,
            })
          }
        />
        Employee Salary:{" "}
        <input
          type="text"
          placeholder="Enter your salary"
          value={employee.salary}
          onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditEmployee;
