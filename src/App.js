import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { FirebaseContext } from "./context/firebaseContext";
import Employees from "./components/Employees";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import Error from "./components/Error";
import EditEmployee from "./components/EditEmployee";
const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDDxikbs-SQpqrh3dAvGAm4IpB_SLixRvo",
    authDomain: "employee-management-syst-cbab4.firebaseapp.com",
    projectId: "employee-management-syst-cbab4",
    storageBucket: "employee-management-syst-cbab4.appspot.com",
    messagingSenderId: "1021847694141",
    appId: "1:1021847694141:web:3ff6971f94838f12797354",
  };
  let app, db;

  if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore(app);
  } else {
    app = firebase.app();
    db = firebase.firestore(app);
  }

  return (
    <FirebaseContext.Provider value={{ app, db }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </FirebaseContext.Provider>
  );
};
export default App;
