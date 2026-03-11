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
  // DECIDES TO SHOW/HIDE REPLIES
return (
  <div className="py-6 border-b pl-2 border-slate-200 dark:border-slate-800 last:border-0 bg-white dark:bg-slate-900 transition-colors">
    <div className="flex flex-col gap-3">
      {/* CONTENT */}
      <Reply name={name} date={date} text={text} />
      
      {/* INTERACTION */}
      <div className="pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2 mt-2">
        <MakeReply 
          postReply={postReply} 
          onSubmit={(text) => onAddReply(id, text)} 
        />
        
        <ReplyToggle 
          replies={replies} 
          showReplies={showReplies} 
          onToggle={handleReplies} 
        />
      </div>
    </div>
  </div>
);
}

export default Comment;


