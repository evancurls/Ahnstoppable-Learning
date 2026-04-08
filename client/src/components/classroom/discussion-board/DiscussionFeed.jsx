import React, { useState, useEffect } from "react";
import DiscussionPost from "./DiscussionPost";
import api from "../../../api";

//CURRENTLY UNUSED
function DiscussionFeed({ posts, setPosts, classRoomId=null }){
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