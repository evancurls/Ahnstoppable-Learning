import React, { useState } from "react";
import CourseInputTemplate from "./CourseInputTemplate";

function CreateCourse(){

    const [courseName, setCourseName] = useState("");
    const [courseSTime, setCourseSTime] = useState("");
    const [courseETime, setCourseETime] = useState("");

    return (
        <div>
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
                </div>
            </form>
        </div>
    );
}

export default CreateCourse;