import {useEffect, useState} from "react";
import axios from "axios"; 
import cors from "cors"; 
//import RegistrationPage from '../pages/RegistrationPage';
import PhotoHeader from './PhotoHeader';
import Questions from "./Questions/Questions";
import SignIn from "./SignIn/SignIn";
import UnderstandCheck from "./UnderstandCheck/UnderstandCheck";
import TalentBoard from "./TalentBoard/TalentBoard";
import StudentDashboard from "./StudentDashboard/StudentDashboard";

function App() {
  const {array, setArray} = useState([]); 

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000");
    setArray(response.data.msg); 
  };

  useEffect(() => {
    fetchData();
  }, [])

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