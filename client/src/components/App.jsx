import React from "react";
//import RegistrationPage from '../pages/RegistrationPage';
import PhotoHeader from './PhotoHeader';
import Questions from "./Questions/Questions";
import SignIn from "./SignIn/SignIn";
import UnderstandCheck from "./UnderstandCheck/UnderstandCheck";
import TalentBoard from "./TalentBoard/TalentBoard";
import StudentDashboard from "./StudentDashboard/StudentDashboard";

function App() {
  return (
    <div className="demo-wrapper bg-gray-50">
      <PhotoHeader />
      <SignIn />
      <StudentDashboard />
      <UnderstandCheck />
      <Questions />
      <TalentBoard />
      {/* <Comments />
      <TalentGraph /> */}
      <PhotoHeader />
    </div>
  );
}

export default App;