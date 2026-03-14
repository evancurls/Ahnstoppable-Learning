import React from "react";
import SectionHeading from "../../SectionHeading";
import Header from "../DashboardComponents/Header";
import CourseList from "../DashboardComponents/CourseList";

function StudentDashboard() {
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-300">
      

      {/* MAIN CONTENT */}
      <main className="flex-1 pb-2">
        <Header />

        {/* ENROLLED COURSES*/}
        <div className="p-6 sm:p-8">
          <div className="flex justify-between mb-6">
             <SectionHeading text="Enrolled Courses" />
             <button className="px-5 py-2.5 rounded-md font-semibold text-sm tracking-wide transition-all duration-200 
            text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md flex items-center gap-2">
                <span className="text-lg">+</span> Add a Course
              </button>
          </div>
          <CourseList courses={myCourses}/>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;