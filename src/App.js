import React from "react";
// import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { FirebaseContext } from "./context/firebaseContext";
import Employees from "./components/Employees";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import Error from "./components/Error";
// import env from "react-dotenv";
const App = () => {
  // console.log(firebaseConfig);
  const firebaseConfig = {
    apiKey: "AIzaSyDDxikbs-SQpqrh3dAvGAm4IpB_SLixRvo",
    authDomain: "employee-management-syst-cbab4.firebaseapp.com",
    projectId: "employee-management-syst-cbab4",
    storageBucket: "employee-management-syst-cbab4.appspot.com",
    messagingSenderId: "1021847694141",
    appId: "1:1021847694141:web:3ff6971f94838f12797354",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return (
    <FirebaseContext.Provider value={{ app, db }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </FirebaseContext.Provider>
  );
};
export default App;
