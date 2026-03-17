import React, { useEffect } from "react";
import DiscussionPost from "./DiscussionPost";
import api from "../../../api";

function DiscussionFeed({ classRoomId }){
    const [posts, setPosts] = useState([]);

    //gets the list of posts from ClassRoomID, then maps those to individual discussion posts
    useEffect(() => {
        api.get(`/classrooms/${classroomId}/posts`).then(res => setPosts(res.data));
    }, []);
    return (
        <div>
            {posts.map(post => {
                <DiscussionPost post={post}/>
            })}
        </div>
    );
}


export default DiscussionFeed;