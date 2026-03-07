import React from "react";
import Reply from "./Reply";

function RepliesList({ replies = [] }) {
    console.log(replies);
    return (
        <div className="ml-6" >
            {replies.map((reply, index) => {
                return (
                    <Reply 
                        key = {index}
                        name = {reply.name}
                        date = {reply.date}
                        text = {reply.text}
                    />
                );
            })}
        </div>
    );
}

export default RepliesList;