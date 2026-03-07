import React from "react";
import CommentHeader from "./CommentHeader";

function Comment({
    id= 0,
    name="Anonymous",
    date="0:00 AM",
    text= "Sample Text",
    replies=[],
    likes=0,
}) {
  return (
    <div className="bg-white dark:bg-gray-800">
        <CommentHeader name={name} date={date}/>
        <p className="text-gray-600 dark:text-gray-300 italic mb-4 p-2">{text}</p>
    </div>
  );
}

export default Comment;

// key={index}
//               id={index}
//               name={comment.name}
//               date={comment.date}
//               text={comment.item}
//               replies={comment.replies}
//               likes={comment.likes}

