import React, { useState } from "react";
import CourseInputTemplate from "../ui/CourseInputTemplate";

function CreateCourse(){

    const [isMakingCourse, setCourse] = useState(false);


    const [courseName, setCourseName] = useState("");
    const [courseSTime, setCourseSTime] = useState("");
    const [courseETime, setCourseETime] = useState("");

    function submitCourse(){
        console.log(courseName);
        console.log(courseSTime);
        console.log(courseETime);
    }
    return (
        <div>
            { isMakingCourse ? (
                <form className="p-6 max-w-half w-full">
                    <div className=" grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <CourseInputTemplate 
                                label="Course Name"
                                name="coursename"
                                type="text"
                                id={0}
                                value={courseName}
                                onChange={(event) => setCourseName(event.target.value)}
                                placeholder="" 
                            />
                        </div>
                        <CourseInputTemplate
                            label="Course Start Time"
                            name="coursestime"
                            type="time"
                            id={1}
                            value={courseSTime}
                            onChange={(event) => setCourseSTime(event.target.value)}
                            placeholder="" 
                        />
                        <CourseInputTemplate 
                            label="Course End Time"
                            name="courseetime"
                            type="time"
                            id={2}
                            value={courseETime}
                            onChange={(event) => setCourseETime(event.target.value)}
                            placeholder="" 
                        />
                        <div className="col-span-2 gap-2 flex flex-row items-end justify-end">
                            <button
                                className="blue-btn"
                                onClick={() => {setCourse(!isMakingCourse)}}
                            >
                                Cancel
                            </button>
                            <button
                                className="blue-btn"
                                onClick={() => {
                                    submitCourse()
                                    setCourse(!isMakingCourse)
                                }}
                            >
                                Create Course
                            </button>
                        </div>
                    </div>
                </form>
            ) :
            (
                <button 
                    className="blue-btn w-1/2 max-w-2xl flex items-center justify-center"
                    onClick={() => {setCourse(!isMakingCourse)
                }}>
                    Create A Course
                </button>
            )}
        </div>
    );
}

export default CreateCourse;