import React from "react";
import Comment from "./Comment/Comment";

function QuestionsList({
    items=[],
    onAddReply
}){
    return (
        <div>
          {items.map((comment, index) => (
            <Comment
              key={index}
              id={index}
              name={comment.name}
              date={comment.date}
              text={comment.text}
              replies={comment.replies}
              likes={comment.likes}
              onAddReply={onAddReply}
            />
          ))}
      </div>
    );
}

export default QuestionsList;