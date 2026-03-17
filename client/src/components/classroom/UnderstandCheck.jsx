import React, {useState} from "react";
import SectionHeading from "../ui/SectionHeading";

function UnderstandCheck(){
    function handleClick(){

    }
    return (
        <div className="gap-4 rounded-lg shadow-md p-6 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 w-1/2 normal-case font-medium text-olive-100">
            <SectionHeading text={"Understanding Check 🤔"} />
            <div className="flex justify-around w-full p-4 std-text  bg-transparent outline-none resize-none placeholder-slate-400 dark:placeholder-slate-500 font-medium">
                <button onClick={handleClick} className="emoji-btn bg-red-500 active:bg-red-400">
                    <p className="text">👎</p>
                </button>
                <button onClick={handleClick} className="emoji-btn bg-yellow-300 active:bg-yellow-200">
                    <p className="text">👋</p>
                </button>
                <button onClick={handleClick} className="emoji-btn bg-green-500 active:bg-green-400">
                    <p className="text">👍</p>
                </button>
            </div>
        </div>
    );
}

export default UnderstandCheck;