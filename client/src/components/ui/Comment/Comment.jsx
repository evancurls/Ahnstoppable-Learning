import React, {useState} from "react";
import CommentHeader from "./CommentHeader";
import Reply from "./Reply";
import RepliesList from "./RepliesList";

function Comment({
    id= 0,
    name="Anonymous",
    date="0:00 AM",
    text= "Sample Text",
    replies=[{
      name:"Anonymous",
      date:"0:00 AM",
      text: "Sample Text",
    },{
      name:"Anonymous",
      date:"0:00 AM",
      text: "Sample Text",
    }],
    likes=0,
}) {
  const [showReplies, setReplies] = useState(false);

  function handleReplies(){
    setReplies(!showReplies);
  }
  console.log(replies);

  return (
    <div className="bg-white dark:bg-gray-800">
        <Reply name={name} date={date} text={text}/>
        <div>
          {replies.length >= 0 &&
          (showReplies ?
          // IF WE DO SHOW REPLIES
            <div>
              <RepliesList replies={replies}/>
              <p onClick={handleReplies} className="text-blue-300 italic mb-4 hover:underline">Hide replies </p>
            </div>
          // IF WE DONT SHOW REPLIES
            : <p onClick={handleReplies} className="text-blue-300 italic mb-4 hover:underline">Show {replies.length} replies </p>
          )}
        </div>
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

