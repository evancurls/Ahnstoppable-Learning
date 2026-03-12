import React, {useState} from "react";
import SectionHeading from "../SectionHeading";

function UnderstandCheck(){
    function handleClick(){

    }
    return (
        <div className="gap-4 rounded-lg shadow-md p-6 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 w-1/2 normal-case font-medium text-olive-100">
            <SectionHeading text={"Understanding Check 🤔"} />
            <div className="flex justify-around w-full p-4 text-slate-900 dark:text-white bg-transparent outline-none resize-none placeholder-slate-400 dark:placeholder-slate-500 font-medium">
                <button onClick={handleClick} className="text-slate-900 dark:text-white text-center text-3xl font-semibold">
                    &#x1F914;
                </button>
                <button onClick={handleClick} className="text-slate-900 dark:text-white text-center text-3xl font-semibold">
                    &#x1F914;
                </button>
                <button onClick={handleClick} className="text-slate-900 dark:text-white text-center text-3xl font-semibold">
                    &#x1F914;
                </button>
            </div>
        </div>
    );
}

export default UnderstandCheck;