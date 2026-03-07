import React from "react";
import Comment from "../ui/Comment/Comment";

function QuestionsList({
    items=[]
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
            //   replies={comment.replies}
              likes={comment.likes}
            />
          ))}
      </div>
    );
}

export default QuestionsList;