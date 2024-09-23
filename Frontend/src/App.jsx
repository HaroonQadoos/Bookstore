import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Contact from "./contacts/Contact";
import About from "./about/About";

function App() {
  return (
    <>
      <div className=" dark:bg-slate-800 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
