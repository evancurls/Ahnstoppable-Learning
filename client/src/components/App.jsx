import React, {useEffect, useState} from "react";
import axios from "axios"; 
//import RegistrationPage from '../pages/RegistrationPage';
import PhotoHeader from './PhotoHeader';
import SignIn from "./SignIn/SignIn";
import HomeDashboard from "./Dashboards/HomeDashboard/HomeDashboard";
import ClassDashboard from "./Dashboards/ClassDashboard/ClassDashboard";

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
      <HomeDashboard />
      <ClassDashboard />
      {/* <Comments />
      <TalentGraph /> */}
      <PhotoHeader />
    </div>
  );
}

export default App;