import React from "react";

function SectionHeading({ text }){
    return (
        <h1 className="text-slate-900 dark:text-white text-3xl font-semibold">
            {text}
        </h1>
    );
}

export default SectionHeading;