import React, { useState, useEffect } from "react";
import DiscussionPost from "./DiscussionPost";
import api from "../../../api";

//CURRENTLY UNUSED
function DiscussionFeed({ classRoomId=null }){
    const [posts, setPosts] = useState(["Add a Comment Here!", "check", "check1"]);

    function addPost( post ){
        setPosts(prevPosts => {
            return [...prevPosts, post]
        });
    }

    //gets the list of posts from ClassRoomID, then maps those to individual discussion posts
    // useEffect(() => {
    //     api.get(`/classrooms/${classroomId}/posts`).then(res => setPosts(res.data));
    // }, []);
    return (
        <div className="w-full flex flex-col gap-2 justify-center items-center">
            {posts.map((post,index) => {
                return <DiscussionPost key={index} post={post}/>
            })}
        </div>
    );
}


export default DiscussionFeed;