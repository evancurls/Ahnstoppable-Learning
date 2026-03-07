import React, {useState} from "react";
import ReplyFooter from "./ReplyFooter";
import ReplyHeader from "./ReplyHeader";


function MakeReply({
    handleReply,
    onSubmit,
}
){
    const [showReplyBox, setReplyBox] = useState(false);
    const [reply, setReply] = useState("");

    function handleReplyBox(){
        setReplyBox(!showReplyBox);
        setReply("");
    }
    function handleReply(event){
        const newReply = event.target.value;
        setReply(newReply);
    }

    function handleClick() {
        if (reply.trim() !== "") {
            onSubmit(reply);
            handleReplyBox();
        }
    }
    return (
        <div className="comment-actions">
            {showReplyBox ? (
                // REPLY BOX
                <div className="grid grid-cols-1 grid-rows-2">
                    <ReplyHeader replyText={reply} handleReply={handleReply} />
                    <ReplyFooter 
                        handleCancel={handleReplyBox} 
                        handleSubmit={handleClick} 
                    />
                </div>
            ) : (
                // SHOW REPLY BOX BUTTON
                <button 
                    onClick={handleReplyBox} 
                    className="text-blue-300 italic mb-4 hover:underline cursor-pointer block text-left"
                >
                    Reply
                </button>
            )}
        </div>
);
}

export default MakeReply