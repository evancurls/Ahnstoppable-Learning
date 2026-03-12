import React from "react";
import SectionHeading from "../SectionHeading";

function StudentDashboard() {
  const myCourses = [{
    title: "ADV 375",
    prof: "Professor Ahn",
    hours: "11:00 - 11:50 AM",
    ref: "Section 01"
  }];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-300">
      
      {/* SIDEBAR */}
      <aside className="w-1/5 min-h-screen sticky top-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 hidden md:block">
        <div className="mb-10">
          <h2 className="text-blue-600 dark:text-blue-400 font-black text-xl tracking-tighter">
            AHNSTOPPABLE LEARNING
          </h2>
        </div>
        
        <nav className="space-y-2">
          <SectionHeading text="Dashboard" />
          <div className="mt-4 space-y-1">
            <button className="w-full text-left px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm">
              Overview
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-all">
              My Profile
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-all">
              Settings
            </button>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 lg:p-10">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">
              Welcome back!
            </h1>
          </div>
          
          <button className="px-5 py-2.5 rounded-md font-semibold text-sm tracking-wide transition-all duration-200 
            text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md flex items-center gap-2"
          >
            <span className="text-lg">+</span> Add a Course
          </button>
        </header>

        {/* ENROLLED COURSES*/}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 sm:p-8">
          <div className="mb-6">
             <SectionHeading text="Enrolled Courses" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {myCourses.map((course, index) => (
              <div key={index} className="group shadow-lg p-5 bg-slate-50/50 dark:bg-slate-800/40 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {course.prof}
                    </p>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-white dark:bg-slate-700 text-slate-400 border border-slate-200 dark:border-slate-600">
                    {course.ref || "Active"}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.hours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;