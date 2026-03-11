import React from "react";
import CommentName from "./CommentName";

function CommentHeader({
    name="Anonymous",
    date="0:00 AM"
}){
    return (
        <div className="flex items-center gap-2">
            <div className="flex gap-2">
                <h4 className="text-base">{name}</h4>
                <p className="text-gray-500">{date}</p>
            </div>
        </div>
    );
}

export default CommentHeader;