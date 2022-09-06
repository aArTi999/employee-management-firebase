import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebaseContext";
import "firebase/firestore";
const Employees = () => {
  const { db } = useContext(FirebaseContext);
  const [employees, setEmployees] = useState([]);

  const fetchEmployees=async()=>{
    const response= db.collection('employees');
    const data= await response.get();
   const allData = data?.docs?.map((item, i)=>{
      if(item){
        // setEmployees([...employees, item.data()])
        return item.data();
      }}
     )
     return allData;
  }


  useEffect(() => {  
    (async()=>{
      const data = await fetchEmployees();
      setEmployees(data);
    })();
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {employees && employees.map((emp, i) => (
            <tr key={i}>
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
