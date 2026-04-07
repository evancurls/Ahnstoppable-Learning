import React, { useState } from "react";
import CourseInputTemplate from "../ui/CourseInputTemplate";

function CreateDiscussion( { addDiscussion }){
    const [isMakingCourse, setCourse] = useState(false);
    const [qName, setQ] = useState("");

    function clearForm(){
        setCourse(!isMakingCourse);
        setQ("");
    }

    async function formSubmit( body ){
        await addDiscussion(body);
        clearForm();
    }

    return (
        <div className="w-full p-6">
            { isMakingCourse ? (
                <form className="p-6 max-w-half bg-slate-600/50 rounded-sm w-full" action={formSubmit}>
                    <div className=" grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <CourseInputTemplate 
                                label="Question"
                                name="qName"
                                type="text"
                                id={0}
                                value={qName}
                                onChange={(event) => setQ(event.target.value)}
                                placeholder="" 
                            />
                        </div>
                        <div className="col-span-2 gap-2 flex flex-row items-end justify-end">
                            <button
                                className="blue-btn"
                                onClick={clearForm}
                            >
                                Cancel
                            </button>
                            <button
                                className="blue-btn"
                                type="submit"
                            >
                                Create Discussion
                            </button>
                        </div>
                    </div>
                </form>
            ) :
            (
                <div className="flex items-center justify-center">
                <button 
                    type="submit"
                    className="blue-btn w-1/2 max-w-2xl"
                    onClick={() => {setCourse(!isMakingCourse)
                }}>
                    Start a New Discussion!
                </button>
                </div>
            )}
        </div>
    );
}

export default CreateDiscussion;