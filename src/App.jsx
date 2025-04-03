import React from "react";
import Home from "./components/Home";
const App = () => {
  return (
    <div
      className="flex flex-col  items-center justify-center min-h-screen bg-gray-100
     py-8 px-4 "
    >
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">AI Image Enancher</h1>
        <p className="text-lg text-gray-500">Upload your image and let AI enhance to in seconds!</p>
      </div>


      <Home />


      <div className="text-lg text-gray-500 mb-6"> Powered By @Sheriyans </div>
    </div>
  );
};

export default App;
