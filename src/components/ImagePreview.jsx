import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-col md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original image
        </h2>
               
      { props.uploaded ? (  <img
          src={props.uploaded}
          alt={props.uploaded.name}
          className="w-full h-full object-cover"
        />) :  ( <div className="flex items-center font-medium text-lg justify-center h-80 bg-gray-300">
            No Image Selected
          </div>) }
      
      
      </div>

      {/* Enanched Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enanched image
        </h2>
       
       {props.enhanced && !props.loading && (<img src={props.enhanced?.image} alt="" className="w-full h-full object-cover"/>)}
     
       {props.loading ? <Loading/> : (  <div className="flex font-medium text-lg items-center justify-center h-80 bg-gray-300">
          No Enanched Image
        </div>) }
      
      </div>
    </div>
  );
};

export default ImagePreview;
