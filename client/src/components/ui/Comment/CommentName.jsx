import React from "react";

function CommentName({
    name="Jane Doe",
    date="0:00 AM"
}){
    return(
        <div className="flex gap-2">
            <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
            <p className="text-gray-500">{date}</p>
        </div>
    );
}

export default CommentName;