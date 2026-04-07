import React, { useState } from "react";
import UnderstandCheck from "../components/classroom/UnderstandCheck";
import DiscussionPost from "../components/classroom/discussion-board/DiscussionPost";
import TalentBoard from "../components/classroom/TalentBoard";
import Header from "../components/ui/Header";
import ViewLogs from "../components/classroom/ViewLogs";
import CreateDiscussion from "../components/classroom/CreateDiscussion";
import DiscussionFeed from "../components/classroom/discussion-board/DiscussionFeed";

function ClassDashboard({ classInfo }){

    return (
        <div className="min-h-screen background flex transition-colors duration-300">
            <main className="w-screen"> 
                <Header rightContent={() => {
                    
                }}/>
                <div className="mx-auto flex flex-col justify-center items-center gap-4 w-10/12 bg-white dark:bg-slate-800">
                    <ViewLogs />
                    <CreateDiscussion addDiscussion={() => {}}/>
                    <UnderstandCheck />
                    <DiscussionFeed />
                    <TalentBoard />
                </div>
            </main>
        </div>
    );
}

export default ClassDashboard;