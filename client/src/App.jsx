import React, {useEffect, useState} from "react";
import axios from "axios"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        {/* <PhotoHeader /> */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<HomeDashboard />} />
          <Route path="/class" element={<ClassDashboard />} />
        </Routes>
        {/* <PhotoHeader /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;