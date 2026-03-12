import React from "react";
import SectionHeading from "../SectionHeading";

function StudentDashboard(){
    return (
        // DIV FOR BACKGROUND
        <div className="bg-gray-50">

            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                {/* DASHBOARD AND USER INFO */}
                <div className="flex flex-rows w-full">
                    <div className="min-h-screen basis-1/5 p-6 sm:p-8 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm">
                        <SectionHeading text={"Welcome Student"}/>
                    </div>
                    {/* sign in box */}
                    <div className="basis-4/5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm">
                        <h1>
                            Ahnstoppable Learning
                        </h1>
                        <SectionHeading text={"Enrolled Courses:"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;