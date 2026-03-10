import React, {useState} from "react";
import CommentHeader from "./CommentHeader";
import Reply from "./Reply";
import RepliesList from "./ReplyComponents/RepliesList";
import MakeReply from "./ReplyComponents/MakeReply";
import ReplyToggle from "./ReplyComponents/ReplyToggle";

function Comment({
    id= 0,
    name="Anonymous",
    date="0:00 AM",
    text= "Sample Text",
    replies=[{}],
    likes=0,
    onAddReply
}) {
  const [showReplies, setReplies] = useState(false);

  function handleReplies(){
    setReplies(!showReplies);
  }
  //console.log(replies);
  function postReply(text){
    
  }
  // DECIDES TO DISPLAY SHOw/HIDE REPLIES
  return (
    <div className="bg-white dark:bg-gray-800">
      <Reply name={name} date={date} text={text} />
      <MakeReply 
        postReply={postReply} 
        onSubmit={(text) => {
          onAddReply(id, text)
        }}
      />
      {/* RENDERS IF ANY REPLIES ARE ABLE TO BE SHOWN */}
      <ReplyToggle 
          replies={replies} 
          showReplies={showReplies} 
          onToggle={handleReplies} 
        />
    </div>
  );
}

export default Comment;


