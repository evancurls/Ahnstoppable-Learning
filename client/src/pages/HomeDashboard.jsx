// src/components/Dashboards/HomeDashboard/HomeDashboard.jsx
// Created on March 16, 2026
// Evan Inrig

import React, { useEffect, useState } from "react";
import api from "../api";

import SectionHeading from "../components/ui/SectionHeading";
import Header from "../components/ui/Header";
import CourseList from "../components/homepage/CourseList";
import CreateCourse from "../components/homepage/CreateCourse";
import CourseAddPopup from "../components/homepage/CourseAddPopup";

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

  const [courseList, setCourseList] = useState(myCourses);
  const [isAdmin, setAdmin] = useState(true);
  const [showPopup, setPopup] = useState(false);

  function createCourse(courseData){
    const courseName = courseData.get("coursename");
    const courseSTime = courseData.get("coursestime");
    const courseETime = courseData.get("courseetime"); 
    setCourseList(prevCourses => [
      {
        title: courseName,
        prof: "Professor Ahn",
        hours: `${courseSTime} - ${courseETime}`,
        ref: "Section 02"
      }, ...prevCourses]
    );
  }

  useEffect(() => {
    console.log(courseList);
  }, [courseList]);

  function addCourse(courseCode){
    const code = courseCode.get("courseid");
    console.log(code);
    setPopup(!showPopup);
  }
  return (
    <div className="min-h-screen background flex transition-colors duration-300">
      {/* MAIN CONTENT */}
      <main className="relative flex-1 pb-2">
        <Header rightContent={() => {
          
        }} />
        {showPopup && (<CourseAddPopup removePopUp={() => {setPopup(!showPopup)}} addCourse={addCourse}/>)}
        
        {isAdmin && <CreateCourse submitCourse={createCourse}/>}

        {/* ENROLLED COURSES*/}
        <div className="p-6 sm:p-8">
          <div className="flex justify-between mb-6">
             <SectionHeading text="Enrolled Courses" />
             <button className="blue-btn" onClick={() => {setPopup(!showPopup)}}>
                <span className="text-lg">+</span> Add a Course
              </button>
          </div>
          <CourseList courses={courseList}/>
        </div>
      </main>
    </div>
  );
}

export default HomeDashboard;