// src/components/Dashboards/ClassDashboard.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import UnderstandCheck from "../components/classroom/UnderstandCheck";
import TalentBoard from "../components/classroom/TalentBoard";
import Header from "../components/ui/Header";
import ViewLogs from "../components/classroom/ViewLogs";
import CreateDiscussion from "../components/classroom/CreateDiscussion";
import DiscussionFeed from "../components/classroom/discussion-board/DiscussionFeed";
import { useAuth } from "../context/AuthContext";

function ClassDashboard() {
  // classId comes from the route: <Route path="/class/:classId" element={<ClassDashboard />} />
  const { classId } = useParams();
  const { user }    = useAuth();

  const today = new Date().toLocaleDateString("en-CA");
  const [viewDate, setViewDate] = useState(today);

  function handleDate(event) {
    setViewDate(event.target.value);
  }

  return (
    <div className="min-h-screen background flex transition-colors duration-300">
      <main className="w-screen">
        <Header rightContent={() => null} />
        <div className="mx-auto flex flex-col justify-center items-center gap-4 w-10/12 bg-white dark:bg-slate-800">
          <ViewLogs date={viewDate} today={today} handleDate={handleDate} />
          <UnderstandCheck classId={classId} />

          {/* Only professors see the "Create Discussion" button */}
          {user?.role === "professor" && (
            <CreateDiscussion classRoomId={classId} />
          )}

          {/* Feed reads date + classId; manages its own posts state */}
          <DiscussionFeed date={viewDate} classRoomId={classId} />

          <TalentBoard classId={classId} />
        </div>
      </main>
    </div>
  );
}

export default ClassDashboard;