import React from "react";
import CommentName from "./CommentName";

function CommentHeader({
    name="Anonymous",
    date="0:00 AM"
}){
    return (
        <div className="flex items-center gap-2">
            {/* <img className="w-12 h-12 rounded-full mr-4 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format" alt={name}/> */}
            <CommentName name={name} date={date}/>
        </div>
    );
}

export default CommentHeader;