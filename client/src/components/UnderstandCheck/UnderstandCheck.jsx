import React, {useState} from "react";

function UnderstandCheck(){
    return (
        <div className="gap-4 rounded-lg shadow-md p-6 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 w-1/2 text-md normal-case font-medium text-olive-100">
            <h1 className="text-slate-900 dark:text-white text-center text-3xl font-semibold">
                Understanding Check &#x1F914;
            </h1>
            <div className="flex justify-around w-full p-4 text-slate-900 dark:text-white bg-transparent outline-none resize-none placeholder-slate-400 dark:placeholder-slate-500 text-md font-medium">
                <button className="text-slate-900 dark:text-white text-center text-3xl font-semibold">
                    &#x1F914;
                </button>
                <button className="text-slate-900 dark:text-white text-center text-3xl font-semibold">
                    &#x1F914;
                </button>
                <button className="text-slate-900 dark:text-white text-center text-3xl font-semibold">
                    &#x1F914;
                </button>
            </div>
        </div>
    );
}

export default UnderstandCheck;