import React from "react";
//import RegistrationPage from '../pages/RegistrationPage';
import PhotoHeader from './PhotoHeader';
import Questions from "./Questions/Questions";
import SignIn from "./SignIn/SignIn";

function App() {
  return (
    <div className="demo-wrapper">
      <PhotoHeader />
      <div className="flex justify-center items-center"> <SignIn /> </div>
      <Questions />
      {/* <Comments />
      <TalentGraph /> */}
      <PhotoHeader />
    </div>
  );
}

export default App;