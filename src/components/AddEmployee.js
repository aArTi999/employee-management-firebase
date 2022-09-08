import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebaseContext";
import "firebase/firestore";
import "../App.css";

const AddEmployee = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    phone: "",
    father: "",
    age: "",
    empid: "",
    designation: "",
    salary: "",
    workexp: "",
    location: "",
    qualification: "",
    inst_name: "",
    stream: "",
    course_dur: "",
    result: "",
  });
  const { db } = useContext(FirebaseContext);

  // console.log(db);
  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("employees").doc().set(employeeDetails);
    alert("Employee added successfully");
    setEmployeeDetails({
      name: "",
      phone: "",
      father: "",
      age: "",
      empid: "",
      designation: "",
      salary: "",
      workexp: "",
      location: "",
      qualification: "",
      inst_name: "",
      stream: "",
      course_dur: "",
      result: "",
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-input-containers">
          <h1>Add New Employee</h1>
          <div className="personal-detail-container">
            <h4>Personal Details</h4>
            <div className="input-container">
              <label htmlFor="name">Employee Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={employeeDetails.name}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
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
                value={employeeDetails.phone}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
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
                value={employeeDetails.father}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
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
                value={employeeDetails.age}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
                    age: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <hr />
          <div className="official-detail-container">
            <h4>Official Details</h4>
            <div className="input-container">
              <label htmlFor="empid">Employee Id</label>
              <input
                type="text"
                name="empid"
                placeholder="Enter your id"
                value={employeeDetails.empid}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
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
                value={employeeDetails.designation}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
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
                value={employeeDetails.salary}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
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
                value={employeeDetails.workexp}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
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
                value={employeeDetails.location}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
                    location: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <hr />
          <div className="educational-detail-container">
            <h4>Educational Details</h4>
            <div className="input-container">
              <label htmlFor="qualification">Qualification:</label>
              <select
                type="dropdown"
                name="qualification"
                style={{ marginLeft: "20px" }}
                value={employeeDetails.qualification}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
                    qualification: e.target.value,
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
                value={employeeDetails.inst_name}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
                    inst_name: e.target.value,
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
                value={employeeDetails.stream}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
                    stream: e.target.value,
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
                value={employeeDetails.course_dur}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
                    course_dur: e.target.value,
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
                value={employeeDetails.result}
                onChange={(e) =>
                  setEmployeeDetails({
                    ...employeeDetails,
                    result: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="sub-button">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
