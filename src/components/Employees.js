import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebaseContext";
import "firebase/firestore";
import "../App.css";
import { useNavigate } from "react-router-dom";
const Employees = () => {
  const navigate = useNavigate();

  const { db } = useContext(FirebaseContext);
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = db.collection("employees");
    const data = await response.get();
    const allData = data?.docs?.map((item) => {
      if (item) {
        // setEmployees([...employees, item.data()])

        return { ...item.data(), id: item.id };
      }
    });
    return allData;
  };

  const deleteEmployee = (id) => {
    db.collection("employees")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted");
      });
  };

  useEffect(() => {
    (async () => {
      const data = await fetchEmployees();
      console.log(data);
      setEmployees(data);
    })();
  }, [deleteEmployee]);

  return (
    <div className="view-container">
      <h1>Employees List</h1>
      <table>
        <tbody>
          {employees &&
            employees.map((emp, i) => (
              <tr key={emp.id}>
                <td>Employee Id :{emp.id}</td>
                <td>Employee Name: {emp.name}</td>

                <td>
                  <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => navigate(`/edit-employee/${emp.id}`)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <table>
        <tbody>
          {employees &&
            employees.map((emp, i) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.designation}</td>
                <td>{emp.salary}</td>
                <td>
                  <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => navigate(`/edit-employee/${emp.id}`)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody> */}
      {/* </table> */}
    </div>
  );
};

export default Employees;
