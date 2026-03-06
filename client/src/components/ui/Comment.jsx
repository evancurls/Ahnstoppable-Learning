import React from "react";

function Comment({
    id= 0,
    name="Anonymous",
    text= "Sample Text"
}) {
  return (
    <div className="comment-box">
      <div ><p>{name}</p></div>
      <div>{text}</div>
      <div>Item 3</div>
    </div>
  );
}

export default Comment;

