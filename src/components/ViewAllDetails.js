import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../context/firebaseContext";

const FormFields = ({selectedDetails, employee, setEmployee}) => {
  switch(selectedDetails){
    case 0: {
      return <div className="field-group">
        <div className="input-container">
            <label htmlFor="name">Employee Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={employee.name}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div className="input-container">
            <label htmlFor="phone">Employee Number:</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your number"
              value={employee.phone}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  phone: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="father">Employee Father's Name:</label>
            <input
              type="text"
              name="father"
              placeholder="Enter your father name"
              value={employee.father}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  father: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="age">Employee Age:</label>
            <input
              type="text"
              name="age"
              placeholder="Enter your age"
              value={employee.age}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  age: e.target.value,
                })
              }
            />
          </div>
      </div>
    }
    case 1: {
      return (<div className="field-group">
        <div className="input-container">
            <label htmlFor="empid">Employee Id</label>
            <input
              type="text"
              name="empid"
              placeholder="Enter your id"
              value={employee.empid}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  empid: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="designation">Employee Designation:</label>
            <input
              type="text"
              name="designation"
              placeholder="Enter your designation"
              value={employee.designation}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  designation: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="salary">Employee Salary:</label>
            <input
              type="text"
              name="salary"
              placeholder="Enter your salary"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  salary: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="workexp">
              Employee Work Experience (in months):
            </label>
            <input
              type="text"
              name="workexp"
              placeholder="Enter your work experience"
              value={employee.workexp}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  workexp: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="location">Employee Current Location:</label>
            <input
              type="text"
              name="location"
              placeholder="Enter your location"
              value={employee.location}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  location: e.target.value,
                })
              }
            />
          </div>
      </div>);
    }

    case 2: {
      return <div className="field-group">
        <div className="input-container">
            <label htmlFor="qualification">Qualification:</label>
            <select
              type="dropdown"
              name="qualification"
              style={{ marginLeft: "20px" }}
              value={employee.qualification}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  empid: e.target.value,
                })
              }
            >
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="B.Arch">B.Arch</option>
              <option value="B.Com">B.Com</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="inst_name">Institute Name:</label>
            <select
              type="dropdown"
              name="inst_name"
              style={{ marginLeft: "20px" }}
              value={employee.inst_name}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  empid: e.target.value,
                })
              }
            >
              <option value="LNCT">LNCT</option>
              <option value="IIST">IIST</option>
              <option value="SGSITS">SGSITS</option>
              <option value="SAGE">SAGE</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="stream">Stream:</label>
            <select
              type="dropdown"
              name="stream"
              style={{ marginLeft: "20px" }}
              value={employee.stream}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  empid: e.target.value,
                })
              }
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="course_dur">Course Duration:</label>
            <input
              type="number"
              name="course_dur"
              placeholder="Enter your course duration"
              value={employee.course_dur}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  workexp: e.target.value,
                })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="result">Final CGPA:</label>
            <input
              type="number"
              name="result"
              placeholder="Enter your final result cgpa"
              value={employee.result}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  location: e.target.value,
                })
              }
            />
          </div>
      </div>
    }
   case 'default':
     return <div></div>
  }
}

const ViewAllDetails = () => {
  let { id } = useParams();
  const { db } = useContext(FirebaseContext);
  const [employee, setEmployee] = useState({});
  const [selectedDetails, setSelectedDetails] = useState(0);

  const getEmployeeData = async () => {
    const response = db.collection("employees").doc(id);
    const data = await response.get();
    return data.data();
  };
  
  useEffect(() => {
    if(!Object.keys(employee).length){
    (async () => {
      const employee = await getEmployeeData();
      setEmployee(employee);
    })();
  }
  }, []); 

  const updateUser = (e) => {
    e.preventDefault();
    db.collection("employees").doc(id).set(employee);
    alert("Employee undated successfully");
  }

  return (
    <section className="view-all-detail">
      <nav>
        <ul>
          <li onClick={() => setSelectedDetails(0)}>Personal Details</li>
          <li onClick={() => setSelectedDetails(1)}>Official Details</li>
          <li onClick={() => setSelectedDetails(2)}>Education Details</li>
          {/* <li>Leave Request</li>
          <li>Skills</li>
          <li>Certifications</li> */}
        </ul>
      </nav>
     <form onSubmit={(e) => updateUser(e)}>
     <div style={{
          border: "1px solid black",
          width: "100%",
          padding: '24px 0px',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <FormFields employee={employee} setEmployee={setEmployee} selectedDetails={selectedDetails} />
      <button type="submit" className="submit-button">Update Details</button>
        
      </div>
     </form>
    </section>
  );
};
export default ViewAllDetails;
