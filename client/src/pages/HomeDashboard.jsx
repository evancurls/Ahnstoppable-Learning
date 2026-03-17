// src/components/Dashboards/HomeDashboard/HomeDashboard.jsx
// Created on March 16, 2026
// Evan Inrig

import React, { useState } from "react";
import api from "../api";

import SectionHeading from "../components/ui/SectionHeading";
import Header from "../components/homepage/Header";
import CourseList from "../components/homepage/CourseList";
import CreateCourse from "../components/homepage/CreateCourse";

function HomeDashboard() {
  const myCourses = [{
    title: "ADV 375",
    prof: "Professor Ahn",
    hours: "11:00 - 11:50 AM",
    ref: "Section 01"
  }, {
    title: "ADV 375",
    prof: "Professor Ahn",
    hours: "11:00 - 11:50 AM",
    ref: "Section 01"
  }, {
    title: "ADV 375",
    prof: "Professor Ahn",
    hours: "11:00 - 11:50 AM",
    ref: "Section 01"
  }];

  async function getClasses() {
    try{
      const responses = axios({
        method: 'get',
        url: '',
        params: {},
      });
    } catch (error) {

    }
}

  const [isAdmin, setAdmin] = useState(true);

  return (
    <div className="min-h-screen background flex transition-colors duration-300">
      {/* MAIN CONTENT */}
      <main className="flex-1 pb-2">
        <Header />

        {isAdmin && <CreateCourse />}
        {/* ENROLLED COURSES*/}
        <div className="p-6 sm:p-8">
          <div className="flex justify-between mb-6">
             <SectionHeading text="Enrolled Courses" />
             <button className="blue-btn">
                <span className="text-lg">+</span> Add a Course
              </button>
          </div>
          <CourseList courses={myCourses}/>
        </div>
      </main>
    </div>
  );
}

export default HomeDashboard;