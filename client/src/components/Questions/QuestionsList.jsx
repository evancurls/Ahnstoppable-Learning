import React from "react";
import Comment from "../ui/Comment";

function QuestionsList({
    items=[]
}){
    return (
        <div>
          {items.map((todoItem, index) => (
            <Comment
              key={index}
              id={index}
              text={todoItem}
            />
          ))}
      </div>
    );
}


export default QuestionsList;