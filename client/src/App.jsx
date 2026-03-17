import React, {useEffect, useState} from "react";
import axios from "axios"; 
//import RegistrationPage from '../pages/RegistrationPage';
import PhotoHeader from './components/ui/PhotoHeader';
import SignIn from "./pages/SignIn";
import HomeDashboard from "./pages/HomeDashboard";
import ClassDashboard from "./pages/ClassDashboard";

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