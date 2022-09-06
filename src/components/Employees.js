import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebaseContext";
import "firebase/firestore";
const Employees = () => {
  const { db } = useContext(FirebaseContext);
  console.log(db);
  const [employees, setEmployees] = useState([]);
  const fetchedEmployees = () => {
    const arr = [];
    db.collection("employees")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          // console.log(doc);
          arr.push({ ...doc.data(), id: doc.id });
        });
        return arr;
      });
  };
  useEffect(() => {
    (async () => {
      const allEmployees = await fetchedEmployees();
      console.log(allEmployees);
      setEmployees(allEmployees);
    })();
  }, [fetchedEmployees]);
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr>
              <td>{emp.name}</td>
              <td>{emp.designation}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
