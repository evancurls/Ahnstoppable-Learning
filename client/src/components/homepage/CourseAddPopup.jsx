import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import CourseInputTemplate from '../ui/CourseInputTemplate';

function CourseAddPopup({ removePopUp }){
    const [courseID,setCourseID] = useState("");
    return (
        <div className="absolute inset-0 min-w-full min-h-full bg-gray-700/50 flex items-center justify-center">
            <div className="bg-white dark:bg-slate-700 min-w-2xl w-half p-4">
                <div className="flex flex-row items-between justify-between p-2">
                    <SectionHeading text="Enroll In a Course" />
                    <button onClick={removePopUp}>
                        <span className="std-text text-2xl font-semibold">
                            X
                        </span>
                    </button>
                </div>
                <p className="text-slate-900 dark:text-white font-medium">
                    Enter a course ID below as provided by your professor to enroll in a class.
                </p>
                <CourseInputTemplate 
                    label=""
                    name="courseid"
                    type="text"
                    id={0}
                    value={courseID}
                    onChange={(event) => setCourseID(event.target.value)}
                    placeholder="Enter Course Link"
                />
                <div className="flex flex-row items-end justify-end gap-2 pt-2">
                    <button className="white-btn">
                        Cancel
                    </button>
                    <button className="blue-btn">
                        Enroll
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseAddPopup;