import React from "react";
import CommentHeader from "../CommentHeader";

function Reply({
    id= 0,
    name="Anonymous",
    date="0:00 AM",
    text= "Sample Text",
}){
    return (
        <div>
            <CommentHeader name={name} date={date}/>
            <p className="text-gray-300 italic p-2">{text}</p>
        </div>
    );
}
export default Reply;