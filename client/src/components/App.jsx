import React from "react";
//import RegistrationPage from '../pages/RegistrationPage';
import PhotoHeader from './PhotoHeader';
import Questions from "./Questions/Questions";
import SignIn from "./SignIn/SignIn";
import UnderstandCheck from "./UnderstandCheck/UnderstandCheck";

function App() {
  return (
    <div className="demo-wrapper bg-gray-50">
      <PhotoHeader />
      <SignIn />
      <UnderstandCheck />
      <Questions />
      {/* <Comments />
      <TalentGraph /> */}
      <PhotoHeader />
    </div>
  );
}

export default App;