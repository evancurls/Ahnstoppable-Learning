import React from "react";
//import RegistrationPage from '../pages/RegistrationPage';
import PhotoHeader from './PhotoHeader';

function App() {
  return (
    <div className="demo-wrapper">
      <PhotoHeader />
      <SignInPage />
      <Questions />
      <Comments />
      <TalentGraph />
      <PhotoHeader />
    </div>
  );
}

export default App;